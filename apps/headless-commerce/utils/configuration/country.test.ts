import { Locale } from '@susu/headless-commerce/config/locale';
import { SiteId } from '@susu/headless-commerce/gql/generated/graphql';
import type { CountryConfiguration } from '@susu/headless-commerce/types/CountryConfiguration';
import { afterEach, describe, expect, it, vi } from 'vitest';

import * as configuration from '../configuration';
import { mockIntlDisplayNames, mockIntlLocale } from '../test/mock';

describe('defaultCountryConfiguration', () => {
  vi.spyOn(configuration, 'get').mockResolvedValue({});

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return correct country configuration', async () => {
    const { defaultCountryConfiguration } = await import('./country');

    vi.spyOn(Intl, 'Locale').mockImplementation(mockIntlLocale);
    vi.spyOn(Intl, 'DisplayNames').mockImplementation(mockIntlDisplayNames);

    const originalEnv = process.env;
    process.env = {
      NODE_ENV: 'test',
      SFCC_SITE_ID: SiteId['Int'],
    };

    const locale = Locale['en-us'];
    const actual = defaultCountryConfiguration(locale);

    const expected: CountryConfiguration = {
      countryCode: 'US',
      ecommerce: {
        currencyCode: '',
      },
      migrated: false,
      siteID: SiteId['Int'],
      locale,
      name: 'United States',
      languages: [],
    };

    expect(actual).toEqual(expected);

    process.env = originalEnv;
  });
});
