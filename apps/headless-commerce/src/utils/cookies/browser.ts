import {
  REFRESH_TOKEN_GUEST_STORAGE_KEY,
  REFRESH_TOKEN_REGISTERED_STORAGE_KEY,
  TOKEN_STORAGE_KEY,
} from '@headless-commerce/libs/sfcc/constants';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';

export const cookieAsObject = () => {
  if (typeof window === 'undefined') {
    return {};
  }

  return window?.document?.cookie
    .split(';')
    .map(x => x.trim())
    .map(x => {
      // Use only the first '=' as the split point
      const splitOn = x.indexOf('=');
      return [x.slice(0, splitOn), x.slice(splitOn + 1)];
    })
    .map(([k, v]) => ({ [k]: v }))
    .reduce((a, b) => ({ ...a, ...b }), {} as Record<string, string>);
};

export const getCookie = (name: string): string | undefined => {
  return cookieAsObject()[name];
};

export const getToken = () => getCookie(TOKEN_STORAGE_KEY);

export const getRefreshToken = (country: CountryConfiguration) =>
  getCookie(REFRESH_TOKEN_REGISTERED_STORAGE_KEY(country.siteID)) ??
  getCookie(REFRESH_TOKEN_GUEST_STORAGE_KEY(country.siteID));

export const setLastVisitedLocaleCookie = async (cookieCountryCode: string) => {
  return fetch('/api/location/last-visited-locale', {
    method: 'POST',
    headers: {
      'x-headless': 'true',
    },
    body: JSON.stringify({
      cookieCountryCode,
    }),
  });
};

export const setDenyCountrySwitchCookie = async (
  cookieCountryCode: string,
  localeCountryCode: string,
  unsupported: boolean = false,
) => {
  return fetch('/api/location/deny-country-switch', {
    method: 'POST',
    headers: {
      'x-headless': 'true',
    },
    body: JSON.stringify({
      cookieCountryCode,
      localeCountryCode,
      unsupported,
    }),
  });
};
