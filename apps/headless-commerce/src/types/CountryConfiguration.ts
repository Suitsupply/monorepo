import type { AllowedLocaleLanguage, Locale } from '@headless-commerce/config/locale';
import type { SiteId } from '@headless-commerce/gql/generated/graphql';

export interface CountryConfiguration {
  countryCode: string;
  ecommerce: {
    currencyCode: string;
    payment?: {
      isApplePayEnabled: boolean;
      isPayPalExpressEnabled: boolean;
    };
    shipping?: {
      addressField: { houseNumberValidation: boolean };
      allowedShippingCountries: string[];
      available: boolean;
      defaultPickupPoints: string;
      extraLeadTime: number;
      isPaazEnabled: boolean;
      isPickupInStoreEnabled: boolean;
      primaryTime: number;
      primaryTimeThreshold: number;
      warehouses: string;
    };
    tax?: {
      hasNetPrice: boolean;
      isFallbackDWTaxCalculation: boolean;
      isGlobalTaxEnabled: boolean;
      noTax: boolean;
    };
  };
  migrated: boolean;
  cookieBannerEnabled?: boolean;
  languages: Array<AllowedLocaleLanguage>;
  siteID: SiteId;
  locale: Locale;
  name: string;
}
