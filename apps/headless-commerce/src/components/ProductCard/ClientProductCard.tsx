'use client';

import { useCountry } from '@headless-commerce/contexts/country/client';
import { customer } from '@headless-commerce/contexts/customer';
import type { Product } from '@headless-commerce/gql/generated/graphql';
import { trackImpressionProduct } from '@headless-commerce/utils/tracking/tracking';
import { useSignals } from '@preact/signals-react/runtime';
import { useEffect, useRef } from 'react';

export type ClientProductCardProps = {
  product: Product;
  tracking?: {
    list: string;
    listId: string;
    position: number;
  };
};

export default function ClientProductCard({ product, tracking }: ClientProductCardProps) {
  useSignals();
  const country = useCountry();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      country.ecommerce.currencyCode !== undefined &&
      customer.value !== undefined &&
      product !== undefined &&
      country.siteID !== undefined &&
      tracking?.list !== undefined &&
      tracking?.listId !== undefined &&
      tracking?.position !== undefined
    ) {
      trackImpressionProduct({
        elementRef: cardRef,
        currencyCode: country.ecommerce.currencyCode,
        list: tracking?.list ?? '',
        listId: tracking?.listId ?? '',
        loggedIn: Boolean(customer.value.isRegistered),
        product,
        position: tracking?.position ?? 1,
        siteId: country.siteID,
      });
    }
  }, [
    country.ecommerce.currencyCode,
    country.siteID,
    product,
    tracking?.list,
    tracking?.listId,
    tracking?.position,
    customer.value,
  ]);

  return null;
}
