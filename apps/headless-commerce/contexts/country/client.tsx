'use client';

import type { Locale } from '@susu/headless-commerce/config/locale';
import type { SiteId } from '@susu/headless-commerce/gql/generated/graphql';
import type { CountryConfiguration } from '@susu/headless-commerce/types/CountryConfiguration';
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
