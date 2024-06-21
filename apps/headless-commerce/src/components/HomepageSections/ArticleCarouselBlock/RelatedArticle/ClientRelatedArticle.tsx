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

import styles from './RelatedArticle.module.scss';

export type ClientRelatedArticleProps = {
  children?: ReactNode;
  promotionEvents: PromotionEvents;
  url: string;
  locale: Locale;
  country: CountryConfiguration;
};

export default function ClientRelatedArticle({
  children,
  promotionEvents,
  url,
  locale,
  country,
}: ClientRelatedArticleProps) {
  useSignals();
  const pageType = usePageType();
  const articleRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (articleRef?.current && customer.value) {
      trackImpressionPromotion(articleRef, promotionEvents, pageType, {
        locale,
        country,
      });
    }
  }, [country, locale, pageType, promotionEvents, customer.value]);

  const handleRelatedArticleClick = useCallback(() => {
    if (customer.value) {
      trackClickPromotion(articleRef, promotionEvents, pageType, {
        locale,
        country,
      });
    }
  }, [country, customer.value, locale, pageType, promotionEvents]);

  return (
    <a className={styles['related-article']} ref={articleRef} href={url} onClick={handleRelatedArticleClick}>
      {children}
    </a>
  );
}
