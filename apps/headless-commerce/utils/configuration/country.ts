import { DEFAULT_LOCALE } from '@susu/headless-commerce/config/config';
import type { AllowedLocaleCountry, AllowedLocaleLanguage, Locale } from '@susu/headless-commerce/config/locale';
import type { SiteId } from '@susu/headless-commerce/gql/generated/graphql';
import type { CountryConfiguration } from '@susu/headless-commerce/types/CountryConfiguration';
import { get } from '@susu/headless-commerce/utils/configuration';
import { createLocale } from '@susu/headless-commerce/utils/localeUtils';

export type CountryConfigurationMap = {
  [x: string]: CountryConfiguration;
};

export const countryNames = new Intl.DisplayNames(['en'], { type: 'region' });

export const defaultCountryConfiguration = (locale: Locale): CountryConfiguration => {
  const defaultCode = new Intl.Locale(locale).region as string;
  const defaultName = countryNames.of(defaultCode) as string;
  return {
    countryCode: defaultCode,
    ecommerce: {
      currencyCode: '',
    },
    migrated: false,
    siteID: process.env.SFCC_SITE_ID as SiteId,
    locale,
    name: defaultName,
    languages: [],
  };
};

export const defaultCountryConfigurationLanguage = (
  countryConfiguration: CountryConfiguration,
): AllowedLocaleLanguage => countryConfiguration.languages[0] ?? 'en';

const defaultConfig = defaultCountryConfiguration(DEFAULT_LOCALE);
const config = await get('countries');

export const countries: CountryConfigurationMap = Object.fromEntries(
  Object.entries(config).map(([key, countryConfiguration]) => {
    return [
      key,
      {
        ...defaultConfig,
        ...countryConfiguration,
        countryCode: key,
        locale: createLocale(
          defaultCountryConfigurationLanguage(countryConfiguration),
          key.toLowerCase() as AllowedLocaleCountry,
        ),
      },
    ];
  }),
);
