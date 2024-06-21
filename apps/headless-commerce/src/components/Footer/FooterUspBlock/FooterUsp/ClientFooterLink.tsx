'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ClientLink from '@headless-commerce/components/Link/ClientLink';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { customer } from '@headless-commerce/contexts/customer';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import type { NavigationLink, TextWrapperRich } from '@headless-commerce/gql/generated/graphql';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import { parseAttributeFromString } from '@headless-commerce/utils/attributeParser';
import type { PromotionEvents } from '@headless-commerce/utils/tracking/tracking';
import { trackClickPromotion, trackImpressionPromotion } from '@headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@headless-commerce/utils/UrlGenerator';
import { useSignals } from '@preact/signals-react/runtime';
import { useCallback, useEffect, useRef } from 'react';

import styles from './FooterUsp.module.scss';

export default function ClientFooterLink({ item }: { item: TextWrapperRich }) {
  useSignals();

  const country = useCountry();
  const locale = useLocale();
  const pageType = usePageType();
  const uspLinkRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    if (customer.value) {
      trackClickPromotion(uspLinkRef, item?.cta?.promotionEvents as PromotionEvents, pageType, {
        locale,
        country,
      });
    }
  }, [country, customer.value, item?.cta?.promotionEvents, locale, pageType]);

  useEffect(() => {
    if (uspLinkRef?.current) {
      trackImpressionPromotion(uspLinkRef, item?.cta?.promotionEvents as PromotionEvents, pageType, {
        locale,
        country,
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
