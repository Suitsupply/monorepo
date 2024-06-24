/* eslint-disable no-console */
import type { Locale } from '@susu/headless-commerce/config/locale';
import type { CountryConfiguration } from '@susu/headless-commerce/types/CountryConfiguration';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import { getCookie } from '@susu/headless-commerce/utils/cookies/browser';
import { isBrowser } from '@susu/headless-commerce/utils/environment';
import { errorHandler } from '@susu/headless-commerce/utils/errorHandler';
import {
  convertLocaleToSegmentFormat,
  getCountryFromLocale,
  getLanguageFromLocale,
} from '@susu/headless-commerce/utils/localeUtils';
import type { CommonEventProperties } from '@susu/headless-commerce/utils/tracking/segment';

import type { CountryValueType, CurrencyValueType, LanguageValueType, LoggedInValueType } from '../avo/avo';
import { GA_COOKIE_ID, OPTANON_COOKIE_NAME, OPTANON_DEFAULT_CONSENT } from './constants';

export const transformOneTrustConsent = (
  consent: string,
): {
  categoryPreferences: Record<string, boolean>;
} => {
  // Check if gtag is defined and has a valid definition
  const categories = consent.split(',').reduce((acc: Record<string, boolean>, category: string) => {
    const [key, value] = category.split(':');
    acc[key] = value === '1';
    return acc;
  }, {});

  return {
    categoryPreferences: categories,
  };
};

export const getOneTrustConsent = (): string => {
  let consentOnetrust = OPTANON_DEFAULT_CONSENT;
  let cookieOptanonConsent = getCookie(OPTANON_COOKIE_NAME);

  if (cookieOptanonConsent) {
    cookieOptanonConsent = decodeURIComponent(cookieOptanonConsent);

    if (cookieOptanonConsent.indexOf('&groups=') !== -1) {
      consentOnetrust = cookieOptanonConsent.split('&groups=')[1].split('&')[0];
    }
  }

  return consentOnetrust;
};

export const createGAdata = async (): Promise<unknown> => {
  try {
    const [clientId, sessionId, sessionNumber] = await Promise.all([
      getGtagData('client_id'),
      getGtagData('session_id'),
      getGtagData('session_number'),
    ]);

    window.localStorage.setItem('client_id', clientId as string);
    window.localStorage.setItem('session_id', sessionId as string);
    window.localStorage.setItem('session_number', sessionNumber as string);

    console.log(`session ID: ${sessionId}`);
    console.log(`session Number: ${sessionNumber}`);
    console.log(`client ID: ${clientId}`);

    // Rreturning this since is type unknown
    // just to satisfy the typechecking
    return clientId;
  } catch (error) {
    errorHandler(error as Error);
  }
};

export const getGtagData = (key: string) => {
  return new Promise(resolve => {
    // @ts-ignore
    if (typeof window.gtag === 'function' && GA_COOKIE_ID) {
      // @ts-ignore
      window.gtag('get', GA_COOKIE_ID, key, resolve);
    }
  });
};

export type EnrichEventsProps = {
  locale: Locale;
  country: CountryConfiguration;
  customer: Customer | null;
};

export const enrichEvent = <T>(
  { locale, country, customer }: EnrichEventsProps,
  baseProperties: T,
): T & CommonEventProperties => {
  const loggedIn: LoggedInValueType = customer?.isRegistered ? 'true' : 'false';
  const props = {
    ...baseProperties,
    country: getCountryFromLocale(locale).toLowerCase() as CountryValueType,
    currency: country.ecommerce.currencyCode.toLowerCase() as CurrencyValueType,
    language: getLanguageFromLocale(locale) as LanguageValueType,
    localeVisited: convertLocaleToSegmentFormat(locale),
    userId: customer?.userId ?? '',
    loggedIn,
    ga_client_id: '',
    ga_session_id: '',
    ga_session_number: '',
  };

  if (isBrowser()) {
    props.ga_client_id = window?.localStorage?.getItem('client_id') || '';
    props.ga_session_id = window?.localStorage?.getItem('session_id') || '';
    props.ga_session_number = window?.localStorage?.getItem('session_number') || '';
  }

  return props;
};
