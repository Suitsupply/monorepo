'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ClientLink from '@susu/headless-commerce/components/Link/ClientLink';
import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import type { NavigationLink, TextWrapperRich } from '@susu/headless-commerce/gql/generated/graphql';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import { parseAttributeFromString } from '@susu/headless-commerce/utils/attributeParser';
import type { PromotionEvents } from '@susu/headless-commerce/utils/tracking/tracking';
import { trackClickPromotion, trackImpressionPromotion } from '@susu/headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@susu/headless-commerce/utils/UrlGenerator';
import { useCallback, useEffect, useRef } from 'react';

import styles from './FooterUsp.module.scss';

export default function ClientFooterLink({ item }: { item: TextWrapperRich }) {
  const customer = useCustomer();
  const country = useCountry();
  const locale = useLocale();
  const pageType = usePageType();
  const uspLinkRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    trackClickPromotion(uspLinkRef, item?.cta?.promotionEvents as PromotionEvents, pageType, {
      locale,
      country,
      customer: customer as Customer,
    });
  }, [country, customer, item?.cta?.promotionEvents, locale, pageType]);

  useEffect(() => {
    if (uspLinkRef?.current) {
      trackImpressionPromotion(uspLinkRef, item?.cta?.promotionEvents as PromotionEvents, pageType, {
        locale,
        country,
        customer: customer as Customer,
      });
    }
  }, []);

  return (
    <div ref={uspLinkRef}>
      <ClientLink
        className={styles['footer-usp__link']}
        onClick={handleClick}
        href={generateUrlFromLinkContent(item.cta?.link as NavigationLink, country.siteID, locale)}
        title={item.cta?.title ?? ''}
        size="md"
        theme="dark"
        underline
        hoverEffect
        {...parseAttributeFromString(item.cta?.testAutomationAttribute)}
      >
        {documentToReactComponents(item.cta?.text?.json)}
      </ClientLink>
    </div>
  );
}
