import type {
  CustomMadeLineItem,
  GiftCertificateItem,
  ProductLineItem,
} from '@headless-commerce/gql/generated/graphql';

export const getCartTotalItems = (
  lineItems: Array<CustomMadeLineItem | ProductLineItem>,
  giftCertificateItems: Array<GiftCertificateItem>,
) => lineItems.reduce((total, lineItem) => total + lineItem.quantity, 0) + giftCertificateItems.length;
