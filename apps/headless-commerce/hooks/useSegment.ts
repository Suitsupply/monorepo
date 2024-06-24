import { useSignal, useSignalEffect, useSignals } from '@preact/signals-react/runtime';
import type { AnalyticsBrowser } from '@segment/analytics-next';
import type { Locale } from '@susu/headless-commerce/config/locale';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import type { AvoEnv } from '@susu/headless-commerce/libs/avo/avo';
import { initAvo } from '@susu/headless-commerce/libs/avo/avo';
import { segmentDestination } from '@susu/headless-commerce/libs/segment/avoDestination';
import {
  EVENT_SEGMENT_LOADED,
  IDENTITY_KEY_ANONYMOUS,
  IDENTITY_KEY_KNOWN,
  IDENTITY_VALUE,
} from '@susu/headless-commerce/libs/segment/constants';
import { integrationPlugin } from '@susu/headless-commerce/libs/segment/plugins';
import { analytics as analyticsLibrary } from '@susu/headless-commerce/libs/segment/segment';
import { enrichEvent, getOneTrustConsent } from '@susu/headless-commerce/libs/segment/utils';
import type { CountryConfiguration } from '@susu/headless-commerce/types/CountryConfiguration';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import { getAvoInspectorEnv, isBrowser } from '@susu/headless-commerce/utils/environment';
import { errorHandler } from '@susu/headless-commerce/utils/errorHandler';
import { useStateSignal } from '@susu/headless-commerce/utils/signal';
import { pushGA } from '@susu/headless-commerce/utils/tracking/GA';
import type { CommonEventProperties } from '@susu/headless-commerce/utils/tracking/segment';

export type UseSegmentProps = {
  country: CountryConfiguration;
  locale: Locale;
};

export const useSegment = ({ country, locale }: UseSegmentProps) => {
  useSignals();
  const analytics = useSignal<AnalyticsBrowser | undefined>(undefined);
  const initialized = useSignal(false);
  const customer = useCustomer();
  const customerSignal = useStateSignal(customer);
  const useEnrichEvent = <T>(baseProperties: T): T & CommonEventProperties =>
    enrichEvent({ country, locale, customer: customer as Customer }, baseProperties);

  useSignalEffect(() => {
    if (
      !isBrowser() ||
      !analyticsLibrary ||
      initialized.value ||
      analytics.value ||
      !customerSignal.value?.customerId
    ) {
      return;
    }

    initialized.value = true;

    import('avo-inspector')
      .then(({ AvoInspector }) => {
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

        return Promise.resolve();
      })
      .catch(errorHandler);

    analyticsLibrary.ready(() => {
      const consent = getOneTrustConsent();
      analyticsLibrary.register(integrationPlugin());

      const identifyTraits = {
        consent_onetrust_web: consent,
        ga_session_id: window?.localStorage?.getItem('session_id') || null,
        ga_client_id: window?.localStorage?.getItem('client_id') || null,
        ga_session_number: window?.localStorage?.getItem('session_number') || null,
      };

      if (customer?.userId && !window?.sessionStorage.getItem(IDENTITY_KEY_KNOWN)) {
        window?.sessionStorage.setItem(IDENTITY_KEY_KNOWN, IDENTITY_VALUE);
        analyticsLibrary.identify(customer?.userId, identifyTraits);
      } else if (!window?.sessionStorage.getItem(IDENTITY_KEY_ANONYMOUS)) {
        window?.sessionStorage.setItem(IDENTITY_KEY_ANONYMOUS, IDENTITY_VALUE);
        analyticsLibrary.identify(identifyTraits);
      }

      analytics.value = analyticsLibrary;
      pushGA({ event: EVENT_SEGMENT_LOADED });
    });
  });

  return { analytics, enrichEvent: useEnrichEvent };
};
