import { getQueryTags } from '@susu/headless-commerce/utils/contentfulUtils';
import { serverScopeCache } from '@susu/headless-commerce/utils/serverContext';

export type Tags = [string, string];

export default serverScopeCache(async (countryCode: string): Promise<Tags> => {
  return await getQueryTags(countryCode);
});
