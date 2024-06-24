'use client';

import type { Locale } from '@susu/headless-commerce/config/locale';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { CountryConfiguration } from '@susu/headless-commerce/types/CountryConfiguration';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import type { PromotionEvents } from '@susu/headless-commerce/utils/tracking/tracking';
import { trackClickPromotion, trackImpressionPromotion } from '@susu/headless-commerce/utils/tracking/tracking';
import type { ReactNode } from 'react';
import { useCallback, useEffect } from 'react';

import styles from './HeroBannerBlock.module.scss';
import { useHeroBannerContext } from './useHeroBanner';

export type ClientHeroBannerBlockProps = {
  children?: ReactNode;
  promotionEvents: PromotionEvents;
  locale: Locale;
  country: CountryConfiguration;
};

export default function ClientHeroBannerBlock({
  children,
  promotionEvents,
  locale,
  country,
}: ClientHeroBannerBlockProps) {
  const customer = useCustomer();
  const pageType = usePageType();
  const { imageWrapperRef } = useHeroBannerContext();

  const handleInteractiveEvent = useCallback(() => {
    if (promotionEvents && imageWrapperRef) {
      trackClickPromotion(imageWrapperRef, promotionEvents as PromotionEvents, pageType, {
        locale,
        country,
        customer: customer as Customer,
      });
    }
  }, [country, customer, locale, pageType, promotionEvents, imageWrapperRef]);

  useEffect(() => {
    if (imageWrapperRef?.current && promotionEvents) {
      trackImpressionPromotion(imageWrapperRef, promotionEvents as PromotionEvents, pageType, {
        locale,
        country,
        customer: customer as Customer,
      });
    }
  }, []);

  return (
    <div
      className={styles['banner']}
      onClick={handleInteractiveEvent}
      onKeyDown={handleInteractiveEvent}
      ref={imageWrapperRef}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
}
