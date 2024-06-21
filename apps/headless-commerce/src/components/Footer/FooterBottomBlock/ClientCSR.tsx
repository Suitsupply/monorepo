'use client';

import ExternalLink from '@headless-commerce/components/ExternalLink/ExternalLink';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { customer } from '@headless-commerce/contexts/customer';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import type { LinkWithImage, NavigationLink } from '@headless-commerce/gql/generated/graphql';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import type { PromotionEvents } from '@headless-commerce/utils/tracking/tracking';
import { trackClickPromotion, trackImpressionPromotion } from '@headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@headless-commerce/utils/UrlGenerator';
import { useSignals } from '@preact/signals-react/runtime';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useRef } from 'react';

export type ClientCSRProps = {
  children?: ReactNode;
  linkWithImage: LinkWithImage;
};

export default function ClientCSR({ children, linkWithImage }: ClientCSRProps) {
  useSignals();
  const pageType = usePageType();
  const fairwearLinkRef = useRef<HTMLAnchorElement>(null);
  const locale = useLocale();
  const country = useCountry();

  const handleCSRClick = useCallback(() => {
    if (linkWithImage?.promotionEvents && customer.value) {
      trackClickPromotion(fairwearLinkRef, linkWithImage?.promotionEvents as PromotionEvents, pageType, {
        locale,
        country,
      });
    }
  }, [country, customer.value, linkWithImage?.promotionEvents, locale, pageType]);

  useEffect(() => {
    if (linkWithImage && fairwearLinkRef?.current && customer.value) {
      trackImpressionPromotion(fairwearLinkRef, linkWithImage.promotionEvents as PromotionEvents, pageType, {
        locale,
        country,
      });
    }
  }, [country, customer.value, linkWithImage, locale, pageType]);

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
