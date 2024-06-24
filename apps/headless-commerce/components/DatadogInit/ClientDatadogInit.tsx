'use client';

import { datadogRum } from '@datadog/browser-rum';
import { environmentName, isBrowser } from '@susu/headless-commerce/utils/environment';
import { useEffect } from 'react';

const applicationId = String(process.env.NEXT_PUBLIC_DATADOG_ID);
const clientToken = String(process.env.NEXT_PUBLIC_DATADOG_TOKEN);

declare global {
  interface Window {
    datadogRumInitialized: boolean;
  }
}

if (isBrowser()) {
  window.datadogRumInitialized = false;
}

export default function ClientDatadogInit() {
  useEffect(() => {
    if (!isBrowser() || window.datadogRumInitialized) {
      return;
    }

    datadogRum.init({
      applicationId,
      clientToken,
      site: 'datadoghq.eu',
      service: 'headless',
      env: environmentName,
      // Specify a version number to identify the deployed version of your application in Datadog
      // version: '1.0.0',
      sessionSampleRate: Number(process.env.NEXT_PUBLIC_DATADOG_SAMPLE_RATE),
      sessionReplaySampleRate: Number(process.env.NEXT_PUBLIC_DATADOG_SESSION_REPLAY_RATE),
      trackUserInteractions: true,
      trackResources: true,
      trackLongTasks: true,
      defaultPrivacyLevel: 'mask-user-input',
    });

    window.datadogRumInitialized = true;
  }, []);

  return null;
}
