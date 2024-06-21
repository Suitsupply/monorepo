import { baseURL } from '@headless-commerce/config/config';
import type { Locale } from '@headless-commerce/config/locale';
import type { SeoMetadata } from '@headless-commerce/gql/generated/graphql';
import type { Metadata } from 'next';

import { getAlternateLangs } from './UrlGenerator';

export type BuildMetadataPrarams = {
  canonicalURL: string;
  countryName: string;
  locale: Locale;
  seoMetadata?: SeoMetadata;
};

export const buildMetadata = ({ canonicalURL, countryName, locale, seoMetadata }: BuildMetadataPrarams): Metadata => {
  let metadata: Metadata = {
    robots: 'index, follow',
    metadataBase: new URL(baseURL()),
    openGraph: {
      url: canonicalURL,
    },
    alternates: {
      canonical: canonicalURL,
      languages: getAlternateLangs(canonicalURL, locale),
    },
  };

  if (seoMetadata?.pageTitle) {
    const modifiedtitle = seoMetadata?.pageTitle.replace(
      '##Country##',
      countryName === 'United States' ? 'US' : countryName,
    );

    metadata.title = modifiedtitle;
    if (metadata.openGraph) {
      metadata.openGraph.title = modifiedtitle;
    }
  }

  if (seoMetadata?.pageDescription) {
    metadata.description = seoMetadata?.pageDescription;
    if (metadata.openGraph) {
      metadata.openGraph.description = seoMetadata?.pageDescription;
    }
  }

  if (seoMetadata?.keywords) {
    metadata.keywords = seoMetadata?.keywords;
  }

  return metadata;
};
