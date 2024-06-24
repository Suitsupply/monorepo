'use client';

import { COUNTRY } from '@susu/headless-commerce/constants/cookie';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import type { CountryConfiguration } from '@susu/headless-commerce/types/CountryConfiguration';
import { getCookie } from '@susu/headless-commerce/utils/cookies/browser';
import { isServer } from '@susu/headless-commerce/utils/environment';
import { isValidCountry } from '@susu/headless-commerce/utils/localeUtils';
import { useRouter } from 'next/navigation';

import ClientSupportedLocation from './ClientSupportedLocation';

export type CountryData = {
  cookie?: CountryConfiguration;
};

export default function ClientLocationBanner() {
  const router = useRouter();
  const customer = useCustomer();

  if (isServer()) {
    return null;
  }

  // TODO: Maybe we should make the customer context be undefined by default
  //      instead of an empty object.
  if (!customer || Object.keys(customer).length === 0) {
    return null;
  }

  let cookieCountry = getCookie(COUNTRY);
  const cookieCountryIsValid = cookieCountry && isValidCountry(cookieCountry?.toLowerCase());

  if (!cookieCountryIsValid) {
    const url = new URL(window.location.href);
    const urlWithoutLocale = url.pathname.split('/').slice(2).join('/');
    url.pathname = urlWithoutLocale;
    router.push(url.toString());
    return null;
  }

  return <ClientSupportedLocation />;
}
