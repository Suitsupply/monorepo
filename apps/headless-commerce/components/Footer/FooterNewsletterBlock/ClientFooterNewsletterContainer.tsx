'use client';

import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import type {
  FooterNewsletterBlockQuery,
  FooterNewsletterBlockQueryVariables,
} from '@susu/headless-commerce/gql/generated/footerNewsletter.operation';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import type { PromotionEvents } from '@susu/headless-commerce/utils/tracking/tracking';
import { trackImpressionPromotion } from '@susu/headless-commerce/utils/tracking/tracking';
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
  const locale = useLocale();
  const customer = useCustomer();
  const country = useCountry();
  const pageType = usePageType();
  const footerNewsletterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerNewsletterRef?.current) {
      trackImpressionPromotion(
        footerNewsletterRef,
        query?.data?.footerNewsletterBlock?.promotionEvents as PromotionEvents,
        pageType,
        {
          locale,
          country,
          customer: customer as Customer,
        },
      );
    }
  }, []);

  return (
    <div className={styles['footer-newsletter']} ref={footerNewsletterRef}>
      {children}
    </div>
  );
}
