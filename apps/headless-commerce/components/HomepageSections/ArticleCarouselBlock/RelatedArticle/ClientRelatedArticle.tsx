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
  const customer = useCustomer();
  const pageType = usePageType();
  const articleRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (articleRef?.current) {
      trackImpressionPromotion(articleRef, promotionEvents, pageType, {
        locale,
        country,
        customer: customer as Customer,
      });
    }
  }, []);

  const handleRelatedArticleClick = useCallback(() => {
    trackClickPromotion(articleRef, promotionEvents, pageType, {
      locale,
      country,
      customer: customer as Customer,
    });
  }, [country, customer, locale, pageType, promotionEvents]);

  return (
    <a className={styles['related-article']} ref={articleRef} href={url} onClick={handleRelatedArticleClick}>
      {children}
    </a>
  );
}
