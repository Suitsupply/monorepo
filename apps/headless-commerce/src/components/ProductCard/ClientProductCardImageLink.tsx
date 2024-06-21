'use client';

import { useCountry } from '@headless-commerce/contexts/country/client';
import { customer } from '@headless-commerce/contexts/customer';
import type { Product } from '@headless-commerce/gql/generated/graphql';
import { trackClickProduct } from '@headless-commerce/utils/tracking/tracking';
import { useSignals } from '@preact/signals-react/runtime';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { useCallback } from 'react';

import styles from './ProductCard.module.scss';

export type ClientProductCardImageLinkProps = {
  children?: ReactNode;
  tracking?: {
    list: string;
    listId: string;
    position: number;
  };
  product: Product;
  url: string;
};

export default function ClientProductCardImageLink({
  tracking,
  product,
  children,
  url,
}: ClientProductCardImageLinkProps) {
  useSignals();
  const country = useCountry();
  const { ecommerce, siteID } = country;

  const handleOnClick = useCallback(() => {
    if (!customer.value) {
      return;
    }

    trackClickProduct({
      currencyCode: ecommerce.currencyCode,
      list: tracking?.list ?? '',
      listId: tracking?.listId ?? '',
      loggedIn: Boolean(customer.value?.isRegistered),
      product,
      position: tracking?.position ?? 1,
      siteId: siteID,
    });
  }, [customer.value, ecommerce.currencyCode, product, siteID, tracking?.list, tracking?.listId, tracking?.position]);

  const CUSTOMIZE_ICON = 'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1614243045/svg/icon-cm-big.svg';

  const badgesMap: Record<string, string> = {
    'label.badge-customize-only': 'Custom Made Only',
    'label.badge-essential': 'Essential',
    'label.badge-final-sale': 'Final sale',
    'label.badge-for-jackets-only': 'For Jackets Only',
    'label.badge-full-canvas': 'Full Canvas',
    'label.badge-half-canvas': 'Half Canvas',
    'label.badge-lightest-suit': "The World's Lightest Suit",
    'label.badge-limited': 'Limited',
    'label.badge-mix-match': 'Mix & Match',
    'label.badge-online-exclusive': 'Online Exclusive',
    'label.badge-preorder': 'Pre-order',
    'label.badge-shop-the-look': 'Shop The Look',
    'label.badge-unconstructed': 'Unconstructed',
    'label.badge-world-lightest-suit': "The World's Lightest Suit",
  };

  const { availabilityStatus, badge, isCustomMadeProduct, isEnabledCustomizeButton, fabricCodeID, isFabricAvailable } =
    product;

  const showCustomMadeIcon =
    isCustomMadeProduct ??
    ((isEnabledCustomizeButton || isEnabledCustomizeButton === null) && fabricCodeID?.length && isFabricAvailable);

  const productBadge = availabilityStatus?.preOrder ? 'Pre-order' : (badge && badgesMap[badge]) ?? '';

  return (
    <a className={styles['product-card__image']} href={url} onClick={handleOnClick}>
      <div className={styles['product-card__badges']}>
        {showCustomMadeIcon ? (
          <span className={`${styles['product-card__badge-wrap']} ${styles['product-card__badges--customize']}`}>
            <Image src={CUSTOMIZE_ICON} alt={'Look builder icon'} width={18} height={18} />
          </span>
        ) : null}
        {productBadge?.length ? <span className={styles['product-card__badge-label']}>{productBadge}</span> : null}
      </div>
      {children}
    </a>
  );
}
