import { menuStructure } from '@susu/headless-commerce/components/Header/Menu/NavigationMenu/utils/menuStructure';
import type { Locale } from '@susu/headless-commerce/config/locale';
import tagsContext from '@susu/headless-commerce/contexts/tags';
import type { SuSuNavigationMenu } from '@susu/headless-commerce/gql/generated/graphql';
import { NavigationAllDocument } from '@susu/headless-commerce/gql/generated/mainNavigation.documentNode';
import type {
  NavigationAllQuery,
  NavigationAllQueryVariables,
} from '@susu/headless-commerce/gql/generated/mainNavigation.operation';
import { countries } from '@susu/headless-commerce/utils/configuration/country';
import { getContentFulTag } from '@susu/headless-commerce/utils/contentfulUtils';
import { createServerComponentURQLClient } from '@susu/headless-commerce/utils/graphql/server';
import { toJSON } from '@susu/headless-commerce/utils/json';
import { getCountryCode, getLanguageFromLocale } from '@susu/headless-commerce/utils/localeUtils';
import log from '@susu/headless-commerce/utils/log';
import { serverScopeCache } from '@susu/headless-commerce/utils/serverContext';
import { registerUrql } from '@urql/next/rsc';

export type HeaderContextValue = {
  menuStructure: ReturnType<typeof menuStructure>;
};

const { getClient } = registerUrql(createServerComponentURQLClient);

export default serverScopeCache(async (locale: Locale): Promise<HeaderContextValue> => {
  const countryCode = getCountryCode(locale);
  const country = countries[countryCode];
  const tags = await tagsContext(countryCode);

  const query = toJSON(
    await getClient().query<NavigationAllQuery, NavigationAllQueryVariables>(NavigationAllDocument, {
      preview: null,
      locale: getLanguageFromLocale(locale),
      tags,
      currencyCode: country.ecommerce.currencyCode,
    }),
  );

  if (query.error) {
    log.error(query.error);
  }

  const suSuNavigationMenuCollection = query.data?.suSuNavigationMenuCollection?.items.find(item =>
    getContentFulTag(item?.contentfulMetadata, `country${countryCode}`),
  );

  const structure = menuStructure(suSuNavigationMenuCollection as SuSuNavigationMenu);

  return {
    menuStructure: structure,
  };
});
