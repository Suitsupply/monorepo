import type { Context, Plugin } from '@segment/analytics-next';

import { createGAdata, getOneTrustConsent, transformOneTrustConsent } from './utils';

export const integrationPlugin = (): Plugin => {
  const withConsentContext = (ctx: Context): Context => {
    ctx.updateEvent('context', {
      ...ctx.event.context,
      consent: transformOneTrustConsent(getOneTrustConsent()),
      ip: '0.0.0.0',
    });

    return ctx;
  };

  return {
    name: 'Suitsupply GA Integration Plugin',
    type: 'enrichment',
    version: '1',
    isLoaded: () => true,
    identify: withConsentContext,
    load: createGAdata,
    page: withConsentContext,
    track: withConsentContext,
  };
};
