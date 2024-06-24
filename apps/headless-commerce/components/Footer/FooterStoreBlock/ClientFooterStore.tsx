'use client';

import type { Locale } from '@susu/headless-commerce/config/locale';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { CountryConfiguration } from '@susu/headless-commerce/types/CountryConfiguration';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import type { PromotionEvents } from '@susu/headless-commerce/utils/tracking/tracking';
import { trackClickPromotion, trackImpressionPromotion } from '@susu/headless-commerce/utils/tracking/tracking';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useRef } from 'react';

import styles from './FooterStore.module.scss';

export type ClientFooterStoreBlockProps = {
  locale: Locale;
  country: CountryConfiguration;
  children?: ReactNode;
  promotionEvents: PromotionEvents;
};

export default function ClientFooterStore({ children, promotionEvents, locale, country }: ClientFooterStoreBlockProps) {
  const customer = useCustomer();
  const pageType = usePageType();
  const footerStoreRef = useRef<HTMLDivElement>(null);

  const handleInteractiveEvent = useCallback(() => {
    trackClickPromotion(footerStoreRef, promotionEvents, pageType, {
      locale,
      country,
      customer: customer as Customer,
    });
  }, [country, customer, locale, pageType, promotionEvents]);

  useEffect(() => {
    if (footerStoreRef?.current) {
      trackImpressionPromotion(footerStoreRef, promotionEvents, pageType, {
        locale,
        country,
        customer: customer as Customer,
      });
    }
  }, []);

  return (
    <div
      className={styles['footer-store-container']}
      onClick={handleInteractiveEvent}
      onKeyDown={handleInteractiveEvent}
      ref={footerStoreRef}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
}
