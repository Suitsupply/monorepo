import type { CommerceGetProductsByIdsQuery } from '@susu/headless-commerce/gql/generated/commerceGetProductsByIds.operation';
import type { CommerceGetProductSizeDataQuery } from '@susu/headless-commerce/gql/generated/commerceGetProductSizeData.operation';
import type { ArrayElement } from '@susu/headless-commerce/utils/array';

export type ConfiguratorProduct = ArrayElement<Exclude<CommerceGetProductsByIdsQuery['getProductsByIds'], null>> & {
  // The sizeData gets populated from the browser
  sizeData?: CommerceGetProductSizeDataQuery['getProductSizeData'];
  categoryStep: string;
};
