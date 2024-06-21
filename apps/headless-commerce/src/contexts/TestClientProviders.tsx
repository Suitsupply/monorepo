import { ClientSideSliderProvider } from '@headless-commerce/components/SideSlider/contexts/ClientSideSliderContext';
import type { Locale } from '@headless-commerce/config/locale';
import { ClientCountriesProvider } from '@headless-commerce/contexts/countries/client';
import { ClientCountryProvider } from '@headless-commerce/contexts/country/client';
import { ClientCurrenciesProvider } from '@headless-commerce/contexts/currencies/client';
import { ClientLocaleProvider } from '@headless-commerce/contexts/locale/client';
import type { CurrencyConfiguration } from '@headless-commerce/types/CurrencyConfiguration';
import type { Countries } from '@headless-commerce/types/EdgeConfiguration';
import { getMessages } from '@headless-commerce/utils/configuration/messages';
import { getCountryCode } from '@headless-commerce/utils/localeUtils';
import { NextIntlClientProvider } from 'next-intl';
import type { ReactNode } from 'react';

export type TestClientProvidersProps = {
  children: ReactNode;
  countries: Countries;
  currencies: CurrencyConfiguration;
  locale: Locale;
};

export const TestClientProviders = ({ children, locale, currencies, countries }: TestClientProvidersProps) => {
  const countryCode = getCountryCode(locale);
  const country = countries[countryCode];

  return (
    <ClientLocaleProvider locale={locale}>
      <ClientCurrenciesProvider currencies={currencies}>
        <ClientCountriesProvider countries={countries}>
          <ClientCountryProvider country={country}>
            <NextIntlClientProvider locale={locale} messages={getMessages(locale)}>
              <ClientSideSliderProvider>{children}</ClientSideSliderProvider>
            </NextIntlClientProvider>
          </ClientCountryProvider>
        </ClientCountriesProvider>
      </ClientCurrenciesProvider>
    </ClientLocaleProvider>
  );
};
