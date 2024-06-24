import { Locale } from '@susu/headless-commerce/config/locale';
import type { SeoMetadata } from '@susu/headless-commerce/gql/generated/graphql';
import { describe, expect, it } from 'vitest';

import { buildMetadata } from './metadata';

const locale = Locale['en-us'];
const input: SeoMetadata = {
  pageTitle: 'Title something ##Country## something',
  pageDescription: 'Description',
  keywords: 'Keyword1, Keyword2',
  contentfulMetadata: {
    tags: [
      {
        id: 'test-id',
        name: 'test-tag',
      },
    ],
  },
  sys: {
    id: 'test-id',
    environmentId: 'test-env',
    spaceId: 'test-space',
  },
};

const canonical = 'https://www.example.com';

const params = {
  seoMetadata: input,
  locale,
  canonicalURL: canonical,
  countryName: 'Test Country',
};

const response = {
  metadataBase: new URL('http://localhost:3000'),
  alternates: {
    canonical,
    languages: {
      'de-at': 'https://www.example.com/de-at/',
      'de-ch': 'https://www.example.com/de-ch/',
      'de-de': 'https://www.example.com/de-de/',
      'de-li': 'https://www.example.com/de-li/',
      'en-ae': 'https://www.example.com/en-ae/',
      'en-at': 'https://www.example.com/en-at/',
      'en-au': 'https://www.example.com/en-au/',
      'en-be': 'https://www.example.com/en-be/',
      'en-bg': 'https://www.example.com/en-bg/',
      'en-ca': 'https://www.example.com/en-ca/',
      'en-ch': 'https://www.example.com/en-ch/',
      'en-cn': 'https://www.example.com/en-cn/',
      'en-cy': 'https://www.example.com/en-cy/',
      'en-cz': 'https://www.example.com/en-cz/',
      'en-de': 'https://www.example.com/en-de/',
      'en-dk': 'https://www.example.com/en-dk/',
      'en-ee': 'https://www.example.com/en-ee/',
      'en-es': 'https://www.example.com/en-es/',
      'en-fi': 'https://www.example.com/en-fi/',
      'en-fr': 'https://www.example.com/en-fr/',
      'en-gb': 'https://www.example.com/en-gb/',
      'en-gi': 'https://www.example.com/en-gi/',
      'en-gr': 'https://www.example.com/en-gr/',
      'en-hk': 'https://www.example.com/en-hk/',
      'en-hr': 'https://www.example.com/en-hr/',
      'en-hu': 'https://www.example.com/en-hu/',
      'en-ie': 'https://www.example.com/en-ie/',
      'en-in': 'https://www.example.com/en-in/',
      'en-is': 'https://www.example.com/en-is/',
      'en-it': 'https://www.example.com/en-it/',
      'en-je': 'https://www.example.com/en-je/',
      'en-jp': 'https://www.example.com/en-jp/',
      'en-kr': 'https://www.example.com/en-kr/',
      'en-li': 'https://www.example.com/en-li/',
      'en-lt': 'https://www.example.com/en-lt/',
      'en-lu': 'https://www.example.com/en-lu/',
      'en-lv': 'https://www.example.com/en-lv/',
      'en-mc': 'https://www.example.com/en-mc/',
      'en-mo': 'https://www.example.com/en-mo/',
      'en-mt': 'https://www.example.com/en-mt/',
      'en-my': 'https://www.example.com/en-my/',
      'en-nl': 'https://www.example.com/en-nl/',
      'en-no': 'https://www.example.com/en-no/',
      'en-pl': 'https://www.example.com/en-pl/',
      'en-pr': 'https://www.example.com/en-pr/',
      'en-pt': 'https://www.example.com/en-pt/',
      'en-qa': 'https://www.example.com/en-qa/',
      'en-ro': 'https://www.example.com/en-ro/',
      'en-se': 'https://www.example.com/en-se/',
      'en-sg': 'https://www.example.com/en-sg/',
      'en-si': 'https://www.example.com/en-si/',
      'en-sk': 'https://www.example.com/en-sk/',
      'es-es': 'https://www.example.com/es-es/',
      'es-gi': 'https://www.example.com/es-gi/',
      'es-pr': 'https://www.example.com/es-pr/',
      'es-us': 'https://www.example.com/es-us/',
      'fr-be': 'https://www.example.com/fr-be/',
      'fr-ca': 'https://www.example.com/fr-ca/',
      'fr-ch': 'https://www.example.com/fr-ch/',
      'fr-fr': 'https://www.example.com/fr-fr/',
      'fr-je': 'https://www.example.com/fr-je/',
      'fr-mc': 'https://www.example.com/fr-mc/',
      'it-ch': 'https://www.example.com/it-ch/',
      'it-it': 'https://www.example.com/it-it/',
      'ko-kr': 'https://www.example.com/ko-kr/',
      'pl-pl': 'https://www.example.com/pl-pl/',
      'sv-se': 'https://www.example.com/sv-se/',
      'zh-cn': 'https://www.example.com/zh-cn/',
    },
  },
  description: 'Description',
  keywords: 'Keyword1, Keyword2',
  openGraph: {
    description: 'Description',
    title: 'Title something Test Country something',
    url: canonical,
  },
  robots: 'index, follow',
  title: 'Title something Test Country something',
};

describe('buildMetadata', () => {
  it('should return the correct metadata for a valid input', async () => {
    const result = buildMetadata(params);

    expect(result).toEqual(response);
  });

  it('should skip metadata if an empty object for seoMetadata', async () => {
    const result = buildMetadata({ ...params, seoMetadata: {} as SeoMetadata });
    expect(result).toEqual({
      metadataBase: new URL('http://localhost:3000'),
      alternates: {
        ...response.alternates,
        canonical,
      },
      robots: 'index, follow',
      openGraph: {
        url: canonical,
      },
    });
  });

  it('should replace "United States" by "US" in the tile', async () => {
    const result = buildMetadata({ ...params, countryName: 'US' });

    expect(result.title).toBe('Title something US something');
  });
});
