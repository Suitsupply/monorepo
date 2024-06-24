import {
  allowedLocaleCountries,
  type AllowedLocaleCountry,
  type AllowedLocaleLanguage,
  allowedLocaleLanguages,
  type Locale,
  locales,
} from '@susu/headless-commerce/config/locale';

export const isValidLocale = (locale: string): locale is Locale => locales.includes(locale as Locale);

export const isValidLanguage = (language: string): language is AllowedLocaleLanguage =>
  allowedLocaleLanguages.includes(language as AllowedLocaleLanguage);

export const isValidCountry = (country: string): country is AllowedLocaleCountry =>
  allowedLocaleCountries.includes(country as AllowedLocaleCountry);

export const createLocale = (language: AllowedLocaleLanguage, country: AllowedLocaleCountry): Locale => {
  const locale = `${language}-${country}`;
  if (!isValidLocale(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }
  return locale;
};

export const getLanguageFromLocale = (locale: Locale): AllowedLocaleLanguage => {
  if (!isValidLocale(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }
  return locale.split('-')[0] as AllowedLocaleLanguage;
};

export const getCountryFromLocale = (locale: Locale): AllowedLocaleCountry => {
  if (!isValidLocale(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }
  return locale.split('-')[1] as AllowedLocaleCountry;
};

export const convertLocaleToCookieFormat = (locale: Locale) => {
  if (!isValidLocale(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }
  return `${getLanguageFromLocale(locale)}_${getCountryFromLocale(locale).toUpperCase()}`;
};

export const convertLocaleToCommerceGraphQLFormat = (locale: Locale) => {
  if (!isValidLocale(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }
  return `${getLanguageFromLocale(locale)}-${getCountryFromLocale(locale).toUpperCase()}`;
};

export const convertLocaleToSegmentFormat = (locale: Locale) => {
  if (!isValidLocale(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }
  return `${getLanguageFromLocale(locale)}_${getCountryFromLocale(locale)}`.toLowerCase();
};

export const convertCookieFormatToLocale = (cookie: string): Locale => {
  const locale = cookie.replace('_', '-').toLowerCase();
  if (!isValidLocale(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }
  return locale;
};

export const getCountryCode = (locale: Locale) => getCountryFromLocale(locale).toUpperCase();
