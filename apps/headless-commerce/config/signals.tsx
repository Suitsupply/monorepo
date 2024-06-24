'use client';
import type { Signal } from '@preact/signals-react';
import { signal } from '@preact/signals-react';
import type { Locale } from '@susu/headless-commerce/config/locale';
import type { SiteId } from '@susu/headless-commerce/gql/generated/graphql';
import type { CountryConfiguration } from '@susu/headless-commerce/types/CountryConfiguration';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import type { ReactNode } from 'react';
import { createContext, useMemo } from 'react';

import { DEFAULT_LOCALE } from './config';

export type ConfigurationProps = {
  locale: Locale;
  country: CountryConfiguration;
  customer: Customer | undefined;
};

export type ConfigurationProviderProps = ConfigurationProps & {
  children: ReactNode;
};

export type ConfigurationContextType = {
  locale: Signal<Locale>;
  country: Signal<CountryConfiguration>;
  customer: Signal<Customer | undefined>;
  updateLocale: (localeValue: Locale) => void;
  updateCountry: (countryValue: CountryConfiguration) => void;
  updateCustomer: (customerValue: Customer | undefined) => void;
};

const locale = signal<Locale>(DEFAULT_LOCALE);

const country = signal<CountryConfiguration>({
  siteID: 'INT' as SiteId,
  ecommerce: {
    currencyCode: '',
  },
  countryCode: '',
  languages: [],
  locale: DEFAULT_LOCALE,
  migrated: false,
  name: '',
  cookieBannerEnabled: false,
});

const customer = signal<Customer | undefined>(undefined);

const updateLocale = (localeValue: Locale) => (locale.value = localeValue);
const updateCountry = (countryValue: CountryConfiguration) => (country.value = countryValue);
const updateCustomer = (customerValue: Customer | undefined) => (customer.value = customerValue);

// Initialize signals with props from page
const initializeSignals = (props: ConfigurationProps) => {
  locale.value = props.locale;
  country.value = props.country;
  customer.value = props.customer;

  return {
    locale,
    country,
    customer,
  };
};

export const ConfigurationContext = createContext<ConfigurationContextType | undefined>(undefined);

export const ClientConfigurationProvider = (props: ConfigurationProviderProps) => {
  const { locale, country, customer, children } = props;

  const value = useMemo(() => {
    return {
      ...initializeSignals({ locale, country, customer }),
      updateLocale,
      updateCountry,
      updateCustomer,
    };
  }, [country, customer, locale]);

  return <ConfigurationContext.Provider value={value}>{children}</ConfigurationContext.Provider>;
};
