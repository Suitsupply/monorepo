/* eslint-disable sonarjs/no-duplicate-string */
import { SiteId } from '@headless-commerce/gql/generated/graphql';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import { createLocale } from '@headless-commerce/utils/localeUtils';
import { describe, expect, it } from 'vitest';

import { searchFilter } from './searchFilter';

const countryData: Array<CountryConfiguration> = [
  {
    countryCode: 'US',
    name: 'United States',
    ecommerce: {
      currencyCode: 'USD',
    },
    languages: ['en'],
    locale: createLocale('en', 'us'),
    migrated: false,
    siteID: 'USA' as SiteId,
    cookieBannerEnabled: true,
  },
  {
    countryCode: 'CA',
    name: 'Canada',
    ecommerce: {
      currencyCode: 'CAD',
    },
    languages: ['en'],
    locale: createLocale('en', 'ca'),
    migrated: false,
    siteID: SiteId['Usa'],
    cookieBannerEnabled: true,
  },
  {
    countryCode: 'NL',
    name: 'The Netherlands',
    ecommerce: {
      currencyCode: 'EUR',
    },
    languages: ['en'],
    locale: createLocale('en', 'nl'),
    migrated: false,
    siteID: SiteId['Int'],
    cookieBannerEnabled: true,
  },
  {
    countryCode: 'GB',
    name: 'The United Kingdom',
    ecommerce: {
      currencyCode: 'GBP',
    },
    languages: ['en'],
    locale: createLocale('en', 'gb'),
    migrated: false,
    siteID: SiteId['Int'],
    cookieBannerEnabled: true,
  },
];

describe('searchFilter', () => {
  it('should filter countries by name', () => {
    expect(searchFilter(countryData, 'United', ['US'])).toEqual([countryData[3], countryData[0]]);
    expect(searchFilter(countryData, 'Canada', ['CA'])).toEqual([countryData[1]]);
  });

  it('should ignore case sensitivity in the criteria', () => {
    expect(searchFilter(countryData, 'united', ['US'])).toEqual([countryData[3], countryData[0]]);
    expect(searchFilter(countryData, 'canada', ['CA'])).toEqual([countryData[1]]);
  });

  it('should sort countries by country code', () => {
    expect(searchFilter(countryData, '', ['US', 'CA', 'NL', 'GB'])).toEqual(countryData);
  });

  it('should return an empty list for invalid criteria', () => {
    expect(searchFilter(countryData, 'invalid', ['US'])).toEqual([]);
  });
});
