import { getQueryTags } from '@headless-commerce/utils/contentfulUtils';
import { serverScopeCache } from '@headless-commerce/utils/serverContext';

export type Tags = [string, string];

export default serverScopeCache(async (countryCode: string): Promise<Tags> => {
  return await getQueryTags(countryCode);
});
