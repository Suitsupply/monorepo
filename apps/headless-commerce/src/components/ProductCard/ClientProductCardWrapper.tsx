'use client';

import { useCountry } from '@headless-commerce/contexts/country/client';
import { customer } from '@headless-commerce/contexts/customer';
import type { Product } from '@headless-commerce/gql/generated/graphql';
import { trackImpressionProduct } from '@headless-commerce/utils/tracking/tracking';
import { useSignals } from '@preact/signals-react/runtime';
import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';

import type { ProductCardProps } from './ProductCard';
import styles from './ProductCard.module.scss';

export type ClientProductCardWrapperProps = {
  product: Product;
  tracking: ProductCardProps['tracking'];
  children?: ReactNode;
  url: string;
};

export default function ClientProductCardWrapper({ children, product, tracking }: ClientProductCardWrapperProps) {
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

  return (
    <div ref={cardRef} className={styles['product-card__wrapper']}>
      {children}
    </div>
  );
}
