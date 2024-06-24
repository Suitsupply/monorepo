// import type { Locale } from '@susu/headless-commerce/config/locale';
// import {
//   convertLocaleToSegmentFormat,
//   getCountryFromLocale,
//   getLanguageFromLocale,
// } from '@susu/headless-commerce/utils/localeUtils';
import type { Context, Plugin } from '@segment/analytics-next';

// import { inspector } from '../avo/inspector';
import { createGAdata, getOneTrustConsent, transformOneTrustConsent } from './utils';

// export type IntegrationPluginProps = {
//   locale: Locale;
//   currencyCode: string;
//   userId: string;
//   isRegistered: boolean;
// };

// export const integrationPlugin = ({ locale, currencyCode, userId, isRegistered }: IntegrationPluginProps): Plugin => {
export const integrationPlugin = (): Plugin => {
  const withRichContext = (ctx: Context): Context => {
    // ctx.updateEvent('properties', {
    //   ...ctx.event.properties,
    //   country: getCountryFromLocale(locale).toLowerCase(),
    //   currency: currencyCode.toLowerCase(),
    //   language: getLanguageFromLocale(locale),
    //   locale_visited: convertLocaleToSegmentFormat(locale),
    //   user_id: userId,
    //   logged_in: isRegistered ? 'true' : 'false',
    //   ga_client_id: localStorage.getItem('client_id'),
    //   ga_session_id: localStorage.getItem('session_id'),
    //   ga_session_number: localStorage.getItem('session_number'),
    // });

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
    load: createGAdata,
    page: withRichContext,
    track: withRichContext,
    identify: withRichContext,
  };
};
