'use client';

import type { Locale } from '@headless-commerce/config/locale';
import { customer } from '@headless-commerce/contexts/customer';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import type { PromotionEvents } from '@headless-commerce/utils/tracking/tracking';
import { trackClickPromotion, trackImpressionPromotion } from '@headless-commerce/utils/tracking/tracking';
import { useSignals } from '@preact/signals-react/runtime';
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
  useSignals();
  const pageType = usePageType();
  const footerStoreRef = useRef<HTMLDivElement>(null);

  const handleInteractiveEvent = useCallback(() => {
    if (customer.value) {
      trackClickPromotion(footerStoreRef, promotionEvents, pageType, {
        locale,
        country,
      });
    }
  }, [country, customer.value, locale, pageType, promotionEvents]);

  useEffect(() => {
    if (footerStoreRef?.current) {
      trackImpressionPromotion(footerStoreRef, promotionEvents, pageType, {
        locale,
        country,
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
