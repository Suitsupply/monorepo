'use client';

import ClientDatadogInit from '@susu/headless-commerce/components/DatadogInit/ClientDatadogInit';
import ClientLocationBanner from '@susu/headless-commerce/components/LocationBanner/ClientLocationBanner';
import { ClientSideSliderProvider } from '@susu/headless-commerce/components/SideSlider/contexts/ClientSideSliderContext';
import ClientTrackingOnLoad from '@susu/headless-commerce/components/TrackingOnLoad/ClientTrackingOnLoad';
import type { Locale } from '@susu/headless-commerce/config/locale';
import type { CurrencyConfiguration } from '@susu/headless-commerce/types/CurrencyConfiguration';
import type { Countries } from '@susu/headless-commerce/types/EdgeConfiguration';
import ClientUrqlProvider from '@susu/headless-commerce/utils/ClientUrqlProvider';
import { getCountryCode } from '@susu/headless-commerce/utils/localeUtils';
import type { AbstractIntlMessages } from 'next-intl';
import { NextIntlClientProvider } from 'next-intl';
import type { ReactNode } from 'react';

import { ClientCountriesProvider } from './countries/client';
import { ClientCountryProvider } from './country/client';
import { ClientCurrenciesProvider } from './currencies/client';
import { ClientCustomerProvider } from './customer/client';
import { ClientLocaleProvider } from './locale/client';

export type ClientProvidersProps = {
  children: ReactNode;
  countries: Countries;
  currencies: CurrencyConfiguration;
  locale: Locale;
  messages: AbstractIntlMessages;
};

export const ClientProviders = ({ children, locale, currencies, countries, messages }: ClientProvidersProps) => {
  const countryCode = getCountryCode(locale);
  const country = countries[countryCode];

  return (
    <ClientLocaleProvider locale={locale}>
      <ClientCurrenciesProvider currencies={currencies}>
        <ClientCountriesProvider countries={countries}>
          <ClientCountryProvider country={country}>
            <ClientUrqlProvider>
              <NextIntlClientProvider locale={locale} messages={messages}>
                <ClientSideSliderProvider>
                  <ClientCustomerProvider>
                    {children}
                    <ClientLocationBanner />
                    <ClientTrackingOnLoad />
                    <ClientDatadogInit />
                  </ClientCustomerProvider>
                </ClientSideSliderProvider>
              </NextIntlClientProvider>
            </ClientUrqlProvider>
          </ClientCountryProvider>
        </ClientCountriesProvider>
      </ClientCurrenciesProvider>
    </ClientLocaleProvider>
  );
};
