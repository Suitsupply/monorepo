'use client';

import type { Locale } from '@headless-commerce/config/locale';
import type { SiteId } from '@headless-commerce/gql/generated/graphql';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

export const CountryContext = createContext<CountryConfiguration>({
  countryCode: '',
  ecommerce: {
    currencyCode: '',
  },
  languages: [],
  locale: '' as Locale,
  migrated: false,
  name: '',
  siteID: '' as SiteId,
  cookieBannerEnabled: false,
});

export const useCountry = () => useContext(CountryContext);

export type ClientCountryProviderProps = {
  country: CountryConfiguration;
  children: ReactNode;
};

export const ClientCountryProvider = ({ country, children }: ClientCountryProviderProps) => {
  return <CountryContext.Provider value={country}>{children}</CountryContext.Provider>;
};
