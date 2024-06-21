'use client';

import type { Locale } from '@headless-commerce/config/locale';
import { customer } from '@headless-commerce/contexts/customer';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import type { PromotionEvents } from '@headless-commerce/utils/tracking/tracking';
import { trackClickPromotion, trackImpressionPromotion } from '@headless-commerce/utils/tracking/tracking';
import { useSignals } from '@preact/signals-react/runtime';
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
  useSignals();
  const pageType = usePageType();
  const { imageWrapperRef } = useHeroBannerContext();

  const handleInteractiveEvent = useCallback(() => {
    if (promotionEvents && imageWrapperRef && customer.value) {
      trackClickPromotion(imageWrapperRef, promotionEvents as PromotionEvents, pageType, {
        locale,
        country,
      });
    }
  }, [country, customer.value, locale, pageType, promotionEvents, imageWrapperRef]);

  useEffect(() => {
    if (imageWrapperRef?.current && promotionEvents && customer.value) {
      trackImpressionPromotion(imageWrapperRef, promotionEvents as PromotionEvents, pageType, {
        locale,
        country,
      });
    }
  }, [country, imageWrapperRef, locale, pageType, promotionEvents, customer.value]);

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
