'use client';

import { useCountry } from '@headless-commerce/contexts/country/client';
import { customer } from '@headless-commerce/contexts/customer';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import type {
  FooterNewsletterBlockQuery,
  FooterNewsletterBlockQueryVariables,
} from '@headless-commerce/gql/generated/footerNewsletter.operation';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import type { PromotionEvents } from '@headless-commerce/utils/tracking/tracking';
import { trackImpressionPromotion } from '@headless-commerce/utils/tracking/tracking';
import { useSignals } from '@preact/signals-react/runtime';
import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import type { OperationResult } from 'urql/core';

import styles from './FooterNewsletter.module.scss';

export type ClientFooterNewsletterContainerProps = {
  children?: ReactNode;
  query: OperationResult<FooterNewsletterBlockQuery, FooterNewsletterBlockQueryVariables>;
};

export default function ClientFooterNewsletterContainer({
  children,
  query,
}: Readonly<ClientFooterNewsletterContainerProps>) {
  useSignals();
  const locale = useLocale();
  const country = useCountry();
  const pageType = usePageType();
  const footerNewsletterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerNewsletterRef?.current && customer.value) {
      trackImpressionPromotion(
        footerNewsletterRef,
        query?.data?.footerNewsletterBlock?.promotionEvents as PromotionEvents,
        pageType,
        {
          locale,
          country,
        },
      );
    }
  }, [country, locale, pageType, query?.data?.footerNewsletterBlock?.promotionEvents, customer.value]);

  return (
    <div className={styles['footer-newsletter']} ref={footerNewsletterRef}>
      {children}
    </div>
  );
}
