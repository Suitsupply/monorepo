'use client';

import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import type { Product } from '@susu/headless-commerce/gql/generated/graphql';
import { trackImpressionProduct } from '@susu/headless-commerce/utils/tracking/tracking';
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
  const country = useCountry();
  const customer = useCustomer();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      country.ecommerce.currencyCode !== undefined &&
      customer?.isRegistered !== undefined &&
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
        loggedIn: Boolean(customer.isRegistered),
        product,
        position: tracking?.position ?? 1,
        siteId: country.siteID,
      });
    }
  });

  return (
    <div ref={cardRef} className={styles['product-card__wrapper']}>
      {children}
    </div>
  );
}
