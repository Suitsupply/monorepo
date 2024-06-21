'use client';

import { COUNTRY } from '@headless-commerce/constants/cookie';
import { customer } from '@headless-commerce/contexts/customer';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import { getCookie } from '@headless-commerce/utils/cookies/browser';
import { isServer } from '@headless-commerce/utils/environment';
import { isValidCountry } from '@headless-commerce/utils/localeUtils';
import { useSignals } from '@preact/signals-react/runtime';

import ClientSupportedLocation from './ClientSupportedLocation';

export type CountryData = {
  cookie?: CountryConfiguration;
};

export default function ClientLocationBanner() {
  useSignals();

  if (isServer() || !customer.value) {
    return null;
  }

  let cookieCountry = getCookie(COUNTRY);
  const cookieCountryIsValid = cookieCountry && isValidCountry(cookieCountry?.toLowerCase());

  if (!cookieCountryIsValid) {
    return null;
  }

  return <ClientSupportedLocation />;
}
