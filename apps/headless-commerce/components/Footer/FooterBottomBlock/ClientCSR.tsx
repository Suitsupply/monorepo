'use client';

import ExternalLink from '@susu/headless-commerce/components/ExternalLink/ExternalLink';
import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import type { LinkWithImage, NavigationLink } from '@susu/headless-commerce/gql/generated/graphql';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import type { PromotionEvents } from '@susu/headless-commerce/utils/tracking/tracking';
import { trackClickPromotion, trackImpressionPromotion } from '@susu/headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@susu/headless-commerce/utils/UrlGenerator';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useRef } from 'react';

export type ClientCSRProps = {
  children?: ReactNode;
  linkWithImage: LinkWithImage;
};

export default function ClientCSR({ children, linkWithImage }: ClientCSRProps) {
  const pageType = usePageType();
  const fairwearLinkRef = useRef<HTMLAnchorElement>(null);
  const locale = useLocale();
  const customer = useCustomer();
  const country = useCountry();

  const handleCSRClick = useCallback(() => {
    if (linkWithImage?.promotionEvents) {
      trackClickPromotion(fairwearLinkRef, linkWithImage?.promotionEvents as PromotionEvents, pageType, {
        locale,
        country,
        customer: customer as Customer,
      });
    }
  }, [country, customer, linkWithImage?.promotionEvents, locale, pageType]);

  useEffect(() => {
    if (linkWithImage && fairwearLinkRef?.current) {
      trackImpressionPromotion(fairwearLinkRef, linkWithImage.promotionEvents as PromotionEvents, pageType, {
        locale,
        country,
        customer: customer as Customer,
      });
    }
  }, [country, customer, linkWithImage, locale, pageType]);

  return (
    <span ref={fairwearLinkRef}>
      <ExternalLink
        onClick={handleCSRClick}
        href={generateUrlFromLinkContent(linkWithImage?.link as NavigationLink, country.siteID, locale)}
      >
        {children}
      </ExternalLink>
    </span>
  );
}
