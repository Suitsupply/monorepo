import type { Options } from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types';
import PriceInfo from '@headless-commerce/components/PriceInfo/PriceInfo';
import type { ContentfulMetadata, PhoneInfoValue, Sys } from '@headless-commerce/gql/generated/graphql';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import type { CurrencyConfiguration } from '@headless-commerce/types/CurrencyConfiguration';
import React from 'react';

import { generateIdentifier } from './identifier';

export const getContentFulTag = (contentfulMetadata: ContentfulMetadata | undefined, id: string) => {
  const contentFulTag = contentfulMetadata?.tags.find(tag => tag?.id === id);

  if (!contentFulTag) {
    return contentfulMetadata?.tags.find(tag => tag?.id === 'countryDefault');
  }

  return contentFulTag;
};

export async function getQueryTags(countryCode: string): Promise<[string, string]> {
  return ['countryDefault', `country${countryCode.toUpperCase()}`];
}

type Entry = Record<string, unknown> & {
  sys: Sys;
};

const extractInlineEntries = (entries: Entry[]) => {
  const entryMap = new Map<string, unknown>();
  for (const entry of entries) {
    if (entry && 'sys' in entry) {
      entryMap.set(entry?.sys?.id, entry);
    }
  }
  return entryMap;
};

const createRenderNode = (
  entryMap: Map<any, any>,
  currencyCode: string,
  country: CountryConfiguration,
  currencies: CurrencyConfiguration,
) => {
  return {
    [INLINES.EMBEDDED_ENTRY]: (node: any) => {
      const fieldEntry = entryMap.get(node?.data?.target?.sys?.id);
      const priceEntry = fieldEntry?.pricesCollection?.items.find((entry: any) => entry.currencyCode === currencyCode);

      return <PriceInfo price={priceEntry?.priceValue} country={country} currencies={currencies} />;
    },
  };
};

/**
 * Utility function used for creating render node option for price info for Contentful's normal and rich text fields.
 */
export function createRenderNodeForPriceInfo(
  inlineEntries: any,
  currencyCode: string,
  country: CountryConfiguration,
  currencies: CurrencyConfiguration,
) {
  const entryMap = extractInlineEntries(inlineEntries?.links?.entries?.inline ?? []);
  const renderNode = createRenderNode(entryMap, currencyCode, country, currencies);

  return {
    renderNode,
  };
}

/**
 * Utility function used for creating render node options hero banner.
 */
export function createRenderOptionForHeroBanner(
  inlineEntries: any,
  currencyCode: string,
  country: CountryConfiguration,
  currencies: CurrencyConfiguration,
) {
  const entryMap = extractInlineEntries(inlineEntries?.links?.entries?.inline ?? []);
  const renderNode = createRenderNode(entryMap, currencyCode, country, currencies);

  const renderText = (text: string) => {
    const lineBreakRegex = /<br\s*\/?>/i; // Match <br>, <br/>, or <br />
    const parts = text.split(lineBreakRegex);

    return (
      <span>
        {parts.map((part, index) => (
          <React.Fragment key={generateIdentifier()}>
            {part}
            {index < parts.length - 1 && <br />}
          </React.Fragment>
        ))}
      </span>
    );
  };

  return {
    renderNode,
    renderText,
  };
}

export function createRenderNodeForPhoneNumber(phoneNumberInfo: PhoneInfoValue): Options {
  return {
    renderNode: {
      [INLINES.EMBEDDED_ENTRY]: () => {
        return <span>{phoneNumberInfo?.phoneDisplay ?? phoneNumberInfo?.phoneValue}</span>;
      },
    },
  };
}

export function createRenderOptionsForICP(icp: string): Options {
  return {
    renderNode: {
      [INLINES.EMBEDDED_ENTRY]: () => {
        return <span>{icp}</span>;
      },
    },
  };
}

export function createRenderOptionsForAccordion() {
  return {
    renderNode: {
      [INLINES.EMBEDDED_ENTRY]: (node: any) => {
        return <span>{node}</span>;
      },
    },
  };
}
