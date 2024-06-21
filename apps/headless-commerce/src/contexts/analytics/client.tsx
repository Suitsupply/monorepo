/* eslint-disable sonarjs/no-duplicate-string */
'use client';

import type { AvoEnv } from '@headless-commerce/libs/avo/avo';
import { initAvo } from '@headless-commerce/libs/avo/avo';
import { segmentDestination } from '@headless-commerce/libs/segment/avoDestination';
import {
  EVENT_SEGMENT_LOADED,
  IDENTITY_KEY_ANONYMOUS,
  IDENTITY_KEY_KNOWN,
  IDENTITY_VALUE,
} from '@headless-commerce/libs/segment/constants';
import { integrationPlugin } from '@headless-commerce/libs/segment/plugins';
import { analytics as analyticsLibrary } from '@headless-commerce/libs/segment/segment';
import { getOneTrustConsent } from '@headless-commerce/libs/segment/utils';
import { getAvoInspectorEnv, isServer } from '@headless-commerce/utils/environment';
import { errorHandler } from '@headless-commerce/utils/errorHandler';
import log from '@headless-commerce/utils/log';
import { pushGA } from '@headless-commerce/utils/tracking/GA';
import { type Signal, signal } from '@preact/signals-react';
import { useComputed, useSignal, useSignalEffect, useSignals } from '@preact/signals-react/runtime';
import type { AnalyticsBrowser } from '@segment/analytics-next';
import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

import { customer } from '../customer';

export type AnalyticsContextType = Signal<{
  analytics: Signal<AnalyticsBrowser | undefined>;
  loaded: Signal<boolean>;
}>;

export const analyticsContextDefault: AnalyticsContextType = signal({
  analytics: signal<AnalyticsBrowser | undefined>(undefined),
  loaded: signal<boolean>(false),
});

export const AnalyticsContext = createContext<AnalyticsContextType>(analyticsContextDefault);

export const useAnalytics = () => useContext(AnalyticsContext);

export type ClientAnalyticsProviderProps = {
  children: ReactNode;
};

export const ClientAnalyticsProvider = ({ children }: ClientAnalyticsProviderProps) => {
  useSignals();
  const analytics = useSignal<AnalyticsBrowser | undefined>(undefined);
  const analyticsLoaded = useSignal(false);
  const avoLoaded = useSignal(false);
  const loaded = useComputed(() => Boolean(analyticsLoaded.value && avoLoaded.value));
  const value = useComputed(() => ({
    analytics,
    loaded,
  }));

  const initialized = useSignal(false);
  useSignalEffect(() => {
    if (isServer() || initialized.value || !analyticsLibrary || analytics.value || !customer.value?.customerId) {
      return;
    }

    initialized.value = true;

    log.trace({
      method: 'ClientAnalyticsProvider:effect',
    });

    analyticsLibrary.ready(() => {
      log.trace({
        method: 'ClientAnalyticsProvider:effect:analytics-library',
      });

      const consent = getOneTrustConsent();
      analyticsLibrary.register(integrationPlugin());

      const identifyTraits = {
        consent_onetrust_web: consent,
        ga_session_id: window?.localStorage?.getItem('session_id') || null,
        ga_client_id: window?.localStorage?.getItem('client_id') || null,
        ga_session_number: window?.localStorage?.getItem('session_number') || null,
      };

      if (customer.value?.userId && !window?.sessionStorage.getItem(IDENTITY_KEY_KNOWN)) {
        window?.sessionStorage.setItem(IDENTITY_KEY_KNOWN, IDENTITY_VALUE);
        analyticsLibrary.identify(customer.value?.userId, identifyTraits);
      } else if (!window?.sessionStorage.getItem(IDENTITY_KEY_ANONYMOUS)) {
        window?.sessionStorage.setItem(IDENTITY_KEY_ANONYMOUS, IDENTITY_VALUE);
        analyticsLibrary.identify(identifyTraits);
      }

      analytics.value = analyticsLibrary;
      pushGA({ event: EVENT_SEGMENT_LOADED });

      log.trace({
        method: 'ClientAnalyticsProvider:effect:analytics-library:loaded',
      });

      analyticsLoaded.value = true;
    });

    import('avo-inspector')
      .then(({ AvoInspector }) => {
        log.trace({
          method: 'ClientAnalyticsProvider:effect:avo-inspector',
        });

        const inspector = new AvoInspector({
          apiKey: String(process.env.NEXT_PUBLIC_AVO_KEY),
          env: getAvoInspectorEnv(),
          version: '1.0.0',
          appName: 'Suitsupply.com - Headless',
        });

        initAvo(
          {
            env: getAvoInspectorEnv() as AvoEnv,
            inspector,
          },
          {},
          segmentDestination,
        );

        log.trace({
          method: 'ClientAnalyticsProvider:effect:avo-inspector:loaded',
        });

        avoLoaded.value = true;
      })
      .catch(errorHandler);
  });

  return <AnalyticsContext.Provider value={value}>{children}</AnalyticsContext.Provider>;
};
