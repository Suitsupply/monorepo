import type { AllowedLocaleLanguage, Locale } from '@headless-commerce/config/locale';
import type { Tags } from '@headless-commerce/contexts/tags';
import tagsContext from '@headless-commerce/contexts/tags';
import { ArticleCarrouselContentDocument } from '@headless-commerce/gql/generated/articleCarrousel.documentNode';
import type {
  ArticleCarrouselContentQuery,
  ArticleCarrouselContentQueryVariables,
} from '@headless-commerce/gql/generated/articleCarrousel.operation';
import { CampaignCollectionBlockContentDocument } from '@headless-commerce/gql/generated/campaignCollectionBlock.documentNode';
import type {
  CampaignCollectionBlockContentQuery,
  CampaignCollectionBlockContentQueryVariables,
} from '@headless-commerce/gql/generated/campaignCollectionBlock.operation';
import { CollectionBlockContentDocument } from '@headless-commerce/gql/generated/collectionBlock.documentNode';
import type {
  CollectionBlockContentQuery,
  CollectionBlockContentQueryVariables,
} from '@headless-commerce/gql/generated/collectionBlock.operation';
import { HeroBannerContentDocument } from '@headless-commerce/gql/generated/heroBanner.documentNode';
import type {
  HeroBannerContentQuery,
  HeroBannerContentQueryVariables,
} from '@headless-commerce/gql/generated/heroBanner.operation';
import { HeroBannerWithLinksContentDocument } from '@headless-commerce/gql/generated/heroBannerWithLinks.documentNode';
import type {
  HeroBannerWithLinksContentQuery,
  HeroBannerWithLinksContentQueryVariables,
} from '@headless-commerce/gql/generated/heroBannerWithLinks.operation';
import { HomepageContentDocument } from '@headless-commerce/gql/generated/homepage.documentNode';
import type {
  HomepageContentQuery,
  HomepageContentQueryVariables,
} from '@headless-commerce/gql/generated/homepage.operation';
import { StoryboardDocument } from '@headless-commerce/gql/generated/storyboard.documentNode';
import type { StoryboardQuery, StoryboardQueryVariables } from '@headless-commerce/gql/generated/storyboard.operation';
import { createServerComponentURQLClient } from '@headless-commerce/utils/graphql/server';
import { toJSON } from '@headless-commerce/utils/json';
import { getCountryCode, getLanguageFromLocale } from '@headless-commerce/utils/localeUtils';
import log from '@headless-commerce/utils/log';
import { serverScopeCache } from '@headless-commerce/utils/serverContext';
import { registerUrql } from '@urql/next/rsc';
import type { OperationResult } from 'urql';

const { getClient } = registerUrql(createServerComponentURQLClient);

export type HomepageContentContextSection =
  | {
      id: string;
      __typename: 'ArticleCarrousel';
      query: OperationResult<ArticleCarrouselContentQuery, ArticleCarrouselContentQueryVariables>;
    }
  | {
      id: string;
      __typename: 'CampaignCollectionBlock';
      query: OperationResult<CampaignCollectionBlockContentQuery, CampaignCollectionBlockContentQueryVariables>;
    }
  | {
      id: string;
      __typename: 'HeroBanner';
      query: OperationResult<HeroBannerContentQuery, HeroBannerContentQueryVariables>;
    }
  | {
      id: string;
      __typename: 'HeroBannerWithLinks';
      query: OperationResult<HeroBannerWithLinksContentQuery, HeroBannerWithLinksContentQueryVariables>;
    }
  | {
      id: string;
      __typename: 'ImageCarrouselContainer';
      query: OperationResult<CollectionBlockContentQuery, CollectionBlockContentQueryVariables>;
    }
  | {
      id: string;
      __typename: 'StoryboardBanner';
      query: OperationResult<StoryboardQuery, StoryboardQueryVariables>;
    };

export type HomepageContentContextValue = {
  query: OperationResult<HomepageContentQuery, HomepageContentQueryVariables>;
  sections: Array<HomepageContentContextSection>;
};

const memoizedHomepageContentQuery = serverScopeCache(async (language: AllowedLocaleLanguage, tags: Tags) => {
  return toJSON(
    await getClient().query<HomepageContentQuery, HomepageContentQueryVariables>(HomepageContentDocument, {
      preview: null,
      locale: language,
      tags,
    }),
  );
});

export default serverScopeCache(async (locale: Locale): Promise<HomepageContentContextValue> => {
  const countryCode = getCountryCode(locale);
  const tags = await tagsContext(countryCode);
  const language = getLanguageFromLocale(locale);
  const query = await memoizedHomepageContentQuery(language, tags);

  if (query.error) {
    log.error(query.error);
  }

  const homepageSections = query.data?.homepageCollection?.items[0]?.campaignSectionsCollection?.items;

  if (!homepageSections) {
    throw new Error('Homepage sections not found');
  }

  const sections = await Promise.all(
    homepageSections.map(async item => {
      const __typename = item?.__typename;
      const id = item?.sys?.id;

      if (!__typename || !id) {
        throw new Error('Homepage section __typename or id not found');
      }

      switch (__typename) {
        case 'ArticleCarrousel':
          return {
            __typename,
            id,
            query: toJSON(
              await getClient().query<ArticleCarrouselContentQuery, ArticleCarrouselContentQueryVariables>(
                ArticleCarrouselContentDocument,
                {
                  preview: null,
                  locale: getLanguageFromLocale(locale),
                  id,
                },
              ),
            ),
          };

        case 'CampaignCollectionBlock':
          return {
            __typename,
            id,
            query: toJSON(
              await getClient().query<
                CampaignCollectionBlockContentQuery,
                CampaignCollectionBlockContentQueryVariables
              >(CampaignCollectionBlockContentDocument, {
                preview: null,
                locale: getLanguageFromLocale(locale),
                id,
              }),
            ),
          };

        case 'HeroBanner':
          return {
            __typename,
            id,
            query: toJSON(
              await getClient().query<HeroBannerContentQuery, HeroBannerContentQueryVariables>(
                HeroBannerContentDocument,
                {
                  preview: null,
                  locale: getLanguageFromLocale(locale),
                  id,
                },
              ),
            ),
          };

        case 'HeroBannerWithLinks':
          return {
            __typename,
            id,
            query: toJSON(
              await getClient().query<HeroBannerWithLinksContentQuery, HeroBannerWithLinksContentQueryVariables>(
                HeroBannerWithLinksContentDocument,
                {
                  preview: null,
                  locale: getLanguageFromLocale(locale),
                  id,
                },
              ),
            ),
          };

        case 'ImageCarrouselContainer':
          return {
            __typename,
            id,
            query: toJSON(
              await getClient().query<CollectionBlockContentQuery, CollectionBlockContentQueryVariables>(
                CollectionBlockContentDocument,
                {
                  preview: null,
                  locale: getLanguageFromLocale(locale),
                  id,
                },
              ),
            ),
          };

        case 'StoryboardBanner':
          return {
            __typename,
            id,
            query: toJSON(
              await getClient().query<StoryboardQuery, StoryboardQueryVariables>(StoryboardDocument, {
                preview: null,
                locale: getLanguageFromLocale(locale),
                id,
              }),
            ),
          };

        default:
          throw new Error(`Homepage section __typename ${__typename} is not supported`);
      }
    }),
  );

  return {
    query,
    sections,
  };
});
