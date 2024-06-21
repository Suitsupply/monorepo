'use client';

import type { Locale } from '@headless-commerce/config/locale';
import { GetCartByCustomerDocument } from '@headless-commerce/gql/generated/getCartByCustomer.documentNode';
import type {
  GetCartByCustomerQuery,
  GetCartByCustomerQueryVariables,
} from '@headless-commerce/gql/generated/getCartByCustomer.operation';
import type { Cart, SiteId } from '@headless-commerce/gql/generated/graphql';
import type { ProductsCart } from '@headless-commerce/libs/avo/avo';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import { urqlClient } from '@headless-commerce/utils/ClientUrqlProvider';
import { convertLocaleToCommerceGraphQLFormat } from '@headless-commerce/utils/localeUtils';
import type { SSMProduct } from '@headless-commerce/utils/tracking/GA';
import { toSSMProduct } from '@headless-commerce/utils/tracking/GA';
import { ssmToProductCart } from '@headless-commerce/utils/tracking/segment';
import { isUndefined } from '@headless-commerce/utils/undefined';
import { signal } from '@preact/signals-react';

import { customer } from '../customer';

export const cart = signal<Cart | undefined>(undefined);

export const setCart = async (locale: Locale, country: CountryConfiguration) => {
  if (isUndefined(urqlClient.value)) {
    throw new Error('urqlClient is not defined');
  }
  if (isUndefined(customer.value)) {
    throw new Error('customer is not defined');
  }

  const query = await urqlClient.value.query<GetCartByCustomerQuery, GetCartByCustomerQueryVariables>(
    GetCartByCustomerDocument,
    {
      customerId: String(customer.value.customerId),
      siteInfo: {
        currency: country.ecommerce.currencyCode,
        locale: convertLocaleToCommerceGraphQLFormat(locale),
        siteId: country.siteID as SiteId,
      },
    },
    {
      clientName: 'commerce',
    },
  );

  cart.value = query.data?.getCartByCustomer as Cart;
};

export const cartSSMProducts = signal<Array<SSMProduct> | undefined>(undefined);

export const setCartSSMProducts = async (country: CountryConfiguration) => {
  if (isUndefined(cart.value)) {
    throw new Error('cart is undefined');
  }

  const items = [...(cart.value?.lineItems ?? []), ...(cart.value?.giftCertificateItems ?? [])];

  cartSSMProducts.value = items.map(item =>
    toSSMProduct(item as Record<string, unknown>, country.ecommerce.currencyCode, country.siteID),
  );
};

export const cartSegmentProducts = signal<Array<ProductsCart> | undefined>(undefined);

export const setCartSegmentproducts = async (country: CountryConfiguration) => {
  if (isUndefined(cart.value)) {
    throw new Error('cart is undefined');
  }

  cartSegmentProducts.value = (cart.value?.lineItems ?? [])
    .filter(item => {
      return (
        (item?.masterProductId === null && item.size === 'onesize') ||
        !((item?.masterProductId as string).includes('CM-') || (item?.masterProductId as string).includes('DYO'))
      );
    })
    .map(item => toSSMProduct(item as Record<string, unknown>, country.ecommerce.currencyCode, country.siteID))
    .map(item => ssmToProductCart(item, country));
};
