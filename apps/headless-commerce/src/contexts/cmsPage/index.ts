import { TEXT_AND_BUTTON_CONTENTFUL_TYPE } from '@headless-commerce/components/CMSPageSections/TextAndImageColumnBannerSection/TextAndImageColumnBannerConstants';
import type { Locale } from '@headless-commerce/config/locale';
import tagsContext from '@headless-commerce/contexts/tags';
import { CardCarouselContainerDocument } from '@headless-commerce/gql/generated/cardCarouselContainer.documentNode';
import type {
  CardCarouselContainerQuery,
  CardCarouselContainerQueryVariables,
} from '@headless-commerce/gql/generated/cardCarouselContainer.operation';
import { CmsPageContentDocument } from '@headless-commerce/gql/generated/cmsPage.documentNode';
import type {
  CmsPageContentQuery,
  CmsPageContentQueryVariables,
} from '@headless-commerce/gql/generated/cmsPage.operation';
import { CommerceProductsWithImgTransformDocument } from '@headless-commerce/gql/generated/commerceProductsWithImgTransform.documentNode';
import type {
  CommerceProductsWithImgTransformQuery,
  CommerceProductsWithImgTransformQueryVariables,
} from '@headless-commerce/gql/generated/commerceProductsWithImgTransform.operation';
import { ContentPageHeroBannerDocument } from '@headless-commerce/gql/generated/contentPageHeroBanner.documentNode';
import type {
  ContentPageHeroBannerQuery,
  ContentPageHeroBannerQueryVariables,
} from '@headless-commerce/gql/generated/contentPageHeroBanner.operation';
import { FaqAccordionDocument } from '@headless-commerce/gql/generated/faqPerennialSuitSection.documentNode';
import type {
  FaqAccordionQuery,
  FaqAccordionQueryVariables,
} from '@headless-commerce/gql/generated/faqPerennialSuitSection.operation';
import type { ProductListing, SiteId } from '@headless-commerce/gql/generated/graphql';
import { JournalCenterDocument } from '@headless-commerce/gql/generated/journalCenter.documentNode';
import type {
  JournalCenterQuery,
  JournalCenterQueryVariables,
} from '@headless-commerce/gql/generated/journalCenter.operation';
import { QuoteSliderBannerDocument } from '@headless-commerce/gql/generated/quoteSliderBanner.documentNode';
import type {
  QuoteSliderBannerQuery,
  QuoteSliderBannerQueryVariables,
} from '@headless-commerce/gql/generated/quoteSliderBanner.operation';
import { ShopCollectionDocument } from '@headless-commerce/gql/generated/shopCollection.documentNode';
import type {
  ShopCollectionQuery,
  ShopCollectionQueryVariables,
} from '@headless-commerce/gql/generated/shopCollection.operation';
import { StickyButtonDocument } from '@headless-commerce/gql/generated/stickyButton.documentNode';
import type {
  StickyButtonQuery,
  StickyButtonQueryVariables,
} from '@headless-commerce/gql/generated/stickyButton.operation';
import { TextAndButtonBannerDocument } from '@headless-commerce/gql/generated/textAndButtonBanner.documentNode';
import type {
  TextAndButtonBannerQuery,
  TextAndButtonBannerQueryVariables,
} from '@headless-commerce/gql/generated/textAndButtonBanner.operation';
import { TextAndImageColumnBannerDocument } from '@headless-commerce/gql/generated/textAndImageColumnBanner.documentNode';
import type {
  TextAndImageColumnBannerQuery,
  TextAndImageColumnBannerQueryVariables,
} from '@headless-commerce/gql/generated/textAndImageColumnBanner.operation';
import { TextAndImageRowBannerQueryDocument } from '@headless-commerce/gql/generated/textAndImageRowBanner.documentNode';
import type {
  TextAndImageRowBannerQueryQuery,
  TextAndImageRowBannerQueryQueryVariables,
} from '@headless-commerce/gql/generated/textAndImageRowBanner.operation';
import { countries } from '@headless-commerce/utils/configuration/country';
import { createServerComponentURQLClient } from '@headless-commerce/utils/graphql/server';
import { toJSON } from '@headless-commerce/utils/json';
import {
  convertLocaleToCommerceGraphQLFormat,
  getCountryCode,
  getLanguageFromLocale,
} from '@headless-commerce/utils/localeUtils';
import log from '@headless-commerce/utils/log';
import { requestScopeCache } from '@headless-commerce/utils/serverContext';
import { registerUrql } from '@urql/next/rsc';
import type { OperationResult } from 'urql';
import { v4 as uuidv4 } from 'uuid';

const { getClient } = registerUrql(createServerComponentURQLClient);

export type CMSPageContentValue = {
  cmsPageContentQuery: OperationResult<CmsPageContentQuery, CmsPageContentQueryVariables>;
  sections: Array<
    | {
        id: string;
        __typename: 'CardCarouselContainer';
        query: OperationResult<CardCarouselContainerQuery, CardCarouselContainerQueryVariables>;
      }
    | {
        id: string;
        __typename: 'ContentPageHeroBanner';
        query: OperationResult<ContentPageHeroBannerQuery, ContentPageHeroBannerQueryVariables>;
      }
    | {
        id: string;
        __typename: 'FaqAccordion';
        query: OperationResult<FaqAccordionQuery, FaqAccordionQueryVariables>;
      }
    | {
        id: string;
        __typename: 'JournalCenterContentBlock';
        query: OperationResult<JournalCenterQuery, JournalCenterQueryVariables>;
      }
    | {
        id: string;
        __typename: 'QuoteSliderBanner';
        query: OperationResult<QuoteSliderBannerQuery, QuoteSliderBannerQueryVariables>;
      }
    | {
        id: string;
        __typename: 'ShopCollectionBlock';
        contentfulQuery: OperationResult<ShopCollectionQuery, ShopCollectionQueryVariables>;
        commerceQuery: OperationResult<
          CommerceProductsWithImgTransformQuery,
          CommerceProductsWithImgTransformQueryVariables
        >;
      }
    | {
        id: string;
        __typename: 'StickyButton';
        query: OperationResult<StickyButtonQuery, StickyButtonQueryVariables>;
      }
    | {
        id: string;
        __typename: 'TextAndButtonBanner';
        query: OperationResult<TextAndButtonBannerQuery, TextAndButtonBannerQueryVariables>;
      }
    | {
        id: string;
        __typename: 'TextAndImageColumnBanner';
        textAndImageColumnBannerQuery: OperationResult<
          TextAndImageColumnBannerQuery,
          TextAndImageColumnBannerQueryVariables
        >;
        textAndButtonBannerQuery: OperationResult<TextAndButtonBannerQuery, TextAndButtonBannerQueryVariables>;
      }
    | {
        id: string;
        __typename: 'TextAndImageRowBanner';
        query: OperationResult<TextAndImageRowBannerQueryQuery, TextAndImageRowBannerQueryQueryVariables>;
      }
  >;
};

export default requestScopeCache(async (locale: Locale, slug: string): Promise<CMSPageContentValue> => {
  const countryCode = getCountryCode(locale);
  const country = countries[countryCode];
  const tags = await tagsContext(countryCode);

  const query = await getClient().query<CmsPageContentQuery, CmsPageContentQueryVariables>(CmsPageContentDocument, {
    preview: null,
    slug,
    locale: getLanguageFromLocale(locale),
    tags,
  });

  if (query.error) {
    log.error(query.error);
  }

  const sections = query.data?.cmsPageCollection?.items[0]?.campaignSectionsCollection?.items;

  if (!sections) {
    throw new Error('CMS sections not found');
  }

  return {
    cmsPageContentQuery: query,
    sections: await Promise.all(
      sections.map(async item => {
        const __typename = item?.__typename;
        const id = item?.sys?.id;

        if (!__typename || !id) {
          throw new Error('CMS section __typename or id not found');
        }

        switch (__typename) {
          case 'CardCarouselContainer':
            return {
              __typename,
              id,
              query: toJSON(
                await getClient().query<CardCarouselContainerQuery, CardCarouselContainerQueryVariables>(
                  CardCarouselContainerDocument,
                  {
                    preview: null,
                    locale: getLanguageFromLocale(locale),
                    id,
                  },
                ),
              ),
            };

          case 'ContentPageHeroBanner':
            return {
              __typename,
              id,
              query: toJSON(
                await getClient().query<ContentPageHeroBannerQuery, ContentPageHeroBannerQueryVariables>(
                  ContentPageHeroBannerDocument,
                  {
                    preview: null,
                    locale: getLanguageFromLocale(locale),
                    id,
                  },
                ),
              ),
            };

          case 'FaqAccordion':
            return {
              __typename,
              id,
              query: toJSON(
                await getClient().query<FaqAccordionQuery, FaqAccordionQueryVariables>(FaqAccordionDocument, {
                  preview: null,
                  locale: getLanguageFromLocale(locale),
                  id,
                }),
              ),
            };

          case 'JournalCenterContentBlock':
            return {
              __typename,
              id,
              query: toJSON(
                await getClient().query<JournalCenterQuery, JournalCenterQueryVariables>(JournalCenterDocument, {
                  preview: null,
                  locale: getLanguageFromLocale(locale),
                  id,
                }),
              ),
            };

          case 'QuoteSliderBanner':
            return {
              __typename,
              id,
              query: toJSON(
                await getClient().query<QuoteSliderBannerQuery, QuoteSliderBannerQueryVariables>(
                  QuoteSliderBannerDocument,
                  {
                    preview: null,
                    locale: getLanguageFromLocale(locale),
                    id,
                  },
                ),
              ),
            };

          case 'ShopCollectionBlock':
            return await (async () => {
              const contentfulQuery = toJSON(
                await getClient().query<ShopCollectionQuery, ShopCollectionQueryVariables>(ShopCollectionDocument, {
                  preview: null,
                  locale: getLanguageFromLocale(locale),
                  id,
                }),
              );

              const contentItems = contentfulQuery.data?.shopCollectionBlock?.contentSectionsCollection?.items;
              const campaignItem = contentItems?.find(item => item?.__typename === 'ProductListing');

              const commerceQuery = toJSON(
                await getClient().query<
                  CommerceProductsWithImgTransformQuery,
                  CommerceProductsWithImgTransformQueryVariables
                >(
                  CommerceProductsWithImgTransformDocument,
                  {
                    categoryId: (campaignItem as ProductListing)?.categoryId ?? '',
                    siteInfo: {
                      currency: country.ecommerce.currencyCode,
                      locale: convertLocaleToCommerceGraphQLFormat(locale),
                      siteId: country.siteID as SiteId,
                    },
                    desktopImgTransformationType: 'plp_tile1x2_cropped',
                    mobileImgTransformationType: 'plp_tile1x1',
                    limit: Number((campaignItem as ProductListing)?.qtyOfProducts),
                  },
                  {
                    clientName: 'commerce',
                    headers: {
                      'correlation-id': uuidv4(),
                    },
                  },
                ),
              );

              return {
                __typename,
                id,
                contentfulQuery,
                commerceQuery,
              };
            })();

          case 'StickyButton':
            return {
              __typename,
              id,
              query: toJSON(
                await getClient().query<StickyButtonQuery, StickyButtonQueryVariables>(StickyButtonDocument, {
                  preview: null,
                  locale: getLanguageFromLocale(locale),
                  id,
                }),
              ),
            };

          case 'TextAndButtonBanner':
            return {
              __typename,
              id,
              query: toJSON(
                await getClient().query<TextAndButtonBannerQuery, TextAndButtonBannerQueryVariables>(
                  TextAndButtonBannerDocument,
                  {
                    preview: null,
                    locale: getLanguageFromLocale(locale),
                    id,
                  },
                ),
              ),
            };

          case 'TextAndImageColumnBanner':
            return await (async () => {
              const textAndImageColumnBannerQuery = toJSON(
                await getClient().query<TextAndImageColumnBannerQuery, TextAndImageColumnBannerQueryVariables>(
                  TextAndImageColumnBannerDocument,
                  {
                    preview: null,
                    locale: getLanguageFromLocale(locale),
                    id,
                  },
                ),
              );

              const headingSectionData = (
                textAndImageColumnBannerQuery?.data?.textAndImageColumnBanner?.contentCollection?.items ?? []
              ).filter(item => item?.__typename === TEXT_AND_BUTTON_CONTENTFUL_TYPE);

              const textAndButtonBannerQuery = toJSON(
                await getClient().query<TextAndButtonBannerQuery, TextAndButtonBannerQueryVariables>(
                  TextAndButtonBannerDocument,
                  {
                    preview: null,
                    locale: getLanguageFromLocale(locale),
                    id: headingSectionData[0]?.sys?.id ?? '',
                  },
                ),
              );

              return {
                __typename,
                id,
                textAndButtonBannerQuery,
                textAndImageColumnBannerQuery,
              };
            })();

          case 'TextAndImageRowBanner':
            return {
              __typename,
              id,
              query: toJSON(
                await getClient().query<TextAndImageRowBannerQueryQuery, TextAndImageRowBannerQueryQueryVariables>(
                  TextAndImageRowBannerQueryDocument,
                  {
                    preview: null,
                    locale: getLanguageFromLocale(locale),
                    id,
                  },
                ),
              ),
            };

          default:
            throw new Error(`CMS section __typename ${__typename} is not supported`);
        }
      }),
    ),
  };
});
