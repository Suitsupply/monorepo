'use client';

import ClientDatadogInit from '@headless-commerce/components/DatadogInit/ClientDatadogInit';
import ClientLocationBanner from '@headless-commerce/components/LocationBanner/ClientLocationBanner';
import { ClientSideSliderProvider } from '@headless-commerce/components/SideSlider/contexts/ClientSideSliderContext';
import ClientTrackingOnLoad from '@headless-commerce/components/TrackingOnLoad/ClientTrackingOnLoad';
import type { Locale } from '@headless-commerce/config/locale';
import type { CurrencyConfiguration } from '@headless-commerce/types/CurrencyConfiguration';
import type { Countries } from '@headless-commerce/types/EdgeConfiguration';
import ClientUrqlProvider from '@headless-commerce/utils/ClientUrqlProvider';
import { getCountryCode } from '@headless-commerce/utils/localeUtils';
import log from '@headless-commerce/utils/log';
import { useSignalEffect } from '@preact/signals-react';
import { useSignal, useSignals } from '@preact/signals-react/runtime';
import type { AbstractIntlMessages } from 'next-intl';
import { NextIntlClientProvider } from 'next-intl';
import type { ReactNode } from 'react';

import { ClientAnalyticsProvider } from './analytics/client';
import { setCart, setCartSegmentproducts, setCartSSMProducts } from './cart';
import { ClientCountriesProvider } from './countries/client';
import { ClientCountryProvider } from './country/client';
import { ClientCurrenciesProvider } from './currencies/client';
import { setCustomer } from './customer';
import { ClientLocaleProvider } from './locale/client';

export type ClientProvidersProps = {
  children: ReactNode;
  countries: Countries;
  currencies: CurrencyConfiguration;
  locale: Locale;
  messages: AbstractIntlMessages;
};

export const ClientProviders = ({ children, locale, currencies, countries, messages }: ClientProvidersProps) => {
  useSignals();

  const countryCode = getCountryCode(locale);
  const country = countries[countryCode];

  const initialized = useSignal(false);
  useSignalEffect(() => {
    if (initialized.value) {
      return;
    }
    initialized.value = true;

    (async () => {
      try {
        log.trace({
          method: 'ClientProviders:effect',
          countryCode,
          country,
        });
        await setCustomer(country);
        await setCart(locale, country);
        await setCartSSMProducts(country);
        await setCartSegmentproducts(country);
      } catch (error) {
        log.error(error);
      }
    })();
  });

  log.trace({
    method: 'ClientProviders',
    countryCode,
    country,
  });

  return (
    <ClientLocaleProvider locale={locale}>
      <ClientCurrenciesProvider currencies={currencies}>
        <ClientCountriesProvider countries={countries}>
          <ClientCountryProvider country={country}>
            <ClientUrqlProvider>
              <NextIntlClientProvider locale={locale} messages={messages}>
                <ClientAnalyticsProvider>
                  <ClientSideSliderProvider>
                    {children}
                    <ClientLocationBanner />
                    <ClientTrackingOnLoad />
                    <ClientDatadogInit />
                  </ClientSideSliderProvider>
                </ClientAnalyticsProvider>
              </NextIntlClientProvider>
            </ClientUrqlProvider>
          </ClientCountryProvider>
        </ClientCountriesProvider>
      </ClientCurrenciesProvider>
    </ClientLocaleProvider>
  );
};
