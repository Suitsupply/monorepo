import type { Locale } from '@headless-commerce/config/locale';
import tagsContext from '@headless-commerce/contexts/tags';
import { ExpertPanelDocument } from '@headless-commerce/gql/generated/expertPanel.documentNode';
import type {
  ExpertPanelQuery,
  ExpertPanelQueryVariables,
} from '@headless-commerce/gql/generated/expertPanel.operation';
import { FooterCollectionDocument } from '@headless-commerce/gql/generated/footer.documentNode';
import type {
  FooterCollectionQuery,
  FooterCollectionQueryVariables,
} from '@headless-commerce/gql/generated/footer.operation';
import { FooterBottomBlockDocument } from '@headless-commerce/gql/generated/footerBottomBlock.documentNode';
import type {
  FooterBottomBlockQuery,
  FooterBottomBlockQueryVariables,
} from '@headless-commerce/gql/generated/footerBottomBlock.operation';
import { FooterContactAndLinksBlockDocument } from '@headless-commerce/gql/generated/footerContactAndLinksBlock.documentNode';
import type {
  FooterContactAndLinksBlockQuery,
  FooterContactAndLinksBlockQueryVariables,
} from '@headless-commerce/gql/generated/footerContactAndLinksBlock.operation';
import { FooterNewsletterBlockDocument } from '@headless-commerce/gql/generated/footerNewsletter.documentNode';
import type {
  FooterNewsletterBlockQuery,
  FooterNewsletterBlockQueryVariables,
} from '@headless-commerce/gql/generated/footerNewsletter.operation';
import { FooterStoreBlockDocument } from '@headless-commerce/gql/generated/footerStoreBlock.documentNode';
import type {
  FooterStoreBlockQuery,
  FooterStoreBlockQueryVariables,
} from '@headless-commerce/gql/generated/footerStoreBlock.operation';
import { FooterUspDocument } from '@headless-commerce/gql/generated/footerUSPBlock.documentNode';
import type {
  FooterUspQuery,
  FooterUspQueryVariables,
} from '@headless-commerce/gql/generated/footerUSPBlock.operation';
import type { ContactSectionWrapper, TextWrapperRichPanel } from '@headless-commerce/gql/generated/graphql';
import { IcpContactDocument } from '@headless-commerce/gql/generated/icpContact.documentNode';
import type { IcpContactQuery, IcpContactQueryVariables } from '@headless-commerce/gql/generated/icpContact.operation';
import { zip } from '@headless-commerce/utils/array';
import { countries } from '@headless-commerce/utils/configuration/country';
import { getContentFulTag } from '@headless-commerce/utils/contentfulUtils';
import { createServerComponentURQLClient } from '@headless-commerce/utils/graphql/server';
import { toJSON } from '@headless-commerce/utils/json';
import { getCountryCode, getLanguageFromLocale } from '@headless-commerce/utils/localeUtils';
import log from '@headless-commerce/utils/log';
import { serverScopeCache } from '@headless-commerce/utils/serverContext';
import { registerUrql } from '@urql/next/rsc';
import { getTranslator } from 'next-intl/server';
import type { OperationResult } from 'urql';

const { getClient } = registerUrql(createServerComponentURQLClient);

export type FooterContextSection =
  | {
      id: string;
      __typename: 'FooterBottomBlock';
      query: OperationResult<FooterBottomBlockQuery, FooterBottomBlockQueryVariables>;
    }
  | {
      id: string;
      __typename: 'FooterContactAndLinksBlock';
      title: string;
      query: OperationResult<FooterContactAndLinksBlockQuery, FooterContactAndLinksBlockQueryVariables>;
      icpQuery: OperationResult<IcpContactQuery, IcpContactQueryVariables>;
    }
  | {
      id: string;
      __typename: 'FooterNewsletterBlock';
      t: Awaited<ReturnType<typeof getTranslator>>;
      query: OperationResult<FooterNewsletterBlockQuery, FooterNewsletterBlockQueryVariables>;
    }
  | {
      id: string;
      __typename: 'FooterStoreBlock';
      query: OperationResult<FooterStoreBlockQuery, FooterStoreBlockQueryVariables>;
    }
  | {
      id: string;
      __typename: 'FooterUspBlock';
      query: OperationResult<FooterUspQuery, FooterUspQueryVariables>;
      expertPanels: {
        [x: string]: OperationResult<ExpertPanelQuery, ExpertPanelQueryVariables>;
      };
    };

export type FooterContextValue = {
  sections: Array<FooterContextSection>;
};

export default serverScopeCache(async (locale: Locale): Promise<FooterContextValue> => {
  const countryCode = getCountryCode(locale);
  const country = countries[countryCode];
  const tags = await tagsContext(countryCode);

  const query = toJSON(
    await getClient().query<FooterCollectionQuery, FooterCollectionQueryVariables>(FooterCollectionDocument, {
      preview: null,
      locale: getLanguageFromLocale(locale),
      tags,
    }),
  );

  if (query.error) {
    log.error(query.error);
  }

  const footerItem = query.data?.footerCollection?.items.find(item =>
    getContentFulTag(item?.contentfulMetadata, `country${country.countryCode.toUpperCase()}`),
  );

  const footerSections = footerItem?.campaignSectionsCollection?.items?.filter(item => Boolean(item?.sys?.id));

  if (!footerSections) {
    throw new Error(`Footer sections are missing`);
  }

  const sections = await Promise.all(
    footerSections.map(async section => {
      const id = section?.sys?.id;
      const __typename = section?.__typename;

      if (!id || !__typename) {
        throw new Error(`Footer section is missing id or __typename`);
      }

      switch (__typename) {
        case 'FooterBottomBlock':
          return {
            __typename,
            id,
            query: toJSON(
              await getClient().query<FooterBottomBlockQuery, FooterBottomBlockQueryVariables>(
                FooterBottomBlockDocument,
                {
                  id,
                  preview: null,
                  locale: getLanguageFromLocale(locale),
                },
              ),
            ),
          };

        case 'FooterContactAndLinksBlock':
          return await (async () => {
            const query = toJSON(
              await getClient().query<FooterContactAndLinksBlockQuery, FooterContactAndLinksBlockQueryVariables>(
                FooterContactAndLinksBlockDocument,
                {
                  id,
                  countryCode: country.countryCode,
                  locale: getLanguageFromLocale(locale),
                  preview: null,
                },
              ),
            );

            const { title, contentSectionsCollection } = (query?.data?.footerContactAndLinksBlock?.contactSection ??
              {}) as ContactSectionWrapper;

            const icpId = contentSectionsCollection?.items
              ?.find(item => item?.title === null)
              ?.text?.json?.content[0]?.content?.find(
                (contentItem: any) => contentItem?.nodeType === 'embedded-entry-inline',
              )?.data?.target?.sys?.id as string | undefined;

            const icpQuery = toJSON(
              await getClient().query<IcpContactQuery, IcpContactQueryVariables>(IcpContactDocument, {
                id: String(icpId),
                locale: getLanguageFromLocale(locale),
                preview: null,
              }),
            );

            return {
              __typename,
              id,
              title: String(title),
              query,
              icpQuery,
            };
          })();

        case 'FooterNewsletterBlock':
          return {
            __typename,
            id,
            t: await getTranslator(getLanguageFromLocale(locale), 'footer'),
            query: toJSON(
              await getClient().query<FooterNewsletterBlockQuery, FooterNewsletterBlockQueryVariables>(
                FooterNewsletterBlockDocument,
                {
                  id,
                  locale: getLanguageFromLocale(locale),
                  preview: null,
                },
              ),
            ),
          };

        case 'FooterStoreBlock':
          return {
            __typename,
            id,
            query: toJSON(
              await getClient().query<FooterStoreBlockQuery, FooterStoreBlockQueryVariables>(FooterStoreBlockDocument, {
                id,
                locale: getLanguageFromLocale(locale),
                preview: null,
              }),
            ),
          };

        case 'FooterUspBlock':
          return (async () => {
            const query = toJSON(
              await getClient().query<FooterUspQuery, FooterUspQueryVariables>(FooterUspDocument, {
                id,
                preview: null,
                locale: getLanguageFromLocale(locale),
              }),
            );

            const items = query?.data?.footerUspBlock?.uspListCollection?.items ?? [];

            const expertPanelsIds = items
              .filter(item => item?.__typename === 'TextWrapperRichPanel')
              .map(item => (item as TextWrapperRichPanel)?.styleExpertPanelCollection?.items[0]?.sys?.id ?? '');

            const expertPanelQueries = await Promise.all(
              expertPanelsIds.map(id =>
                getClient().query<ExpertPanelQuery, ExpertPanelQueryVariables>(ExpertPanelDocument, {
                  countryCode,
                  id,
                  locale: getLanguageFromLocale(locale),
                  preview: null,
                }),
              ),
            );

            const expertPanels = zip(expertPanelsIds, expertPanelQueries)
              .map(([id, query]) => ({
                [id]: query,
              }))
              .reduce((acc, curr) => ({ ...acc, ...curr }), {});

            return {
              __typename,
              id,
              query,
              expertPanels,
            };
          })();

        default:
          throw new Error(`Footer section __typename ${__typename} is not supported`);
      }
    }),
  );

  return {
    sections,
  };
});
