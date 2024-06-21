'use client';

import ExternalLink from '@headless-commerce/components/ExternalLink/ExternalLink';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import type { NavigationLink, SiteId } from '@headless-commerce/gql/generated/graphql';
import type { PromotionEvents } from '@headless-commerce/utils/tracking/tracking';
import { trackEvent } from '@headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@headless-commerce/utils/UrlGenerator';
import { useCallback } from 'react';

import styles from './FooterContactAndLinks.module.scss';

export type ClientSectionProps = {
  title: string;
  link: NavigationLink;
  promotionEvents: PromotionEvents;
};

export default function ClientSection({ title, link, promotionEvents }: ClientSectionProps) {
  const country = useCountry();
  const locale = useLocale();
  const handleClick = useCallback(() => {
    trackEvent({
      ga: {
        eventCategory: String(promotionEvents.promotionEventCategory),
        eventAction: String(promotionEvents.promotionEventAction),
        eventLabel: String(promotionEvents.promotionEventLabel),
      },
    });
  }, [
    promotionEvents.promotionEventAction,
    promotionEvents.promotionEventCategory,
    promotionEvents.promotionEventLabel,
  ]);

  return (
    <ExternalLink
      className={`${styles['footer-links__link']} body-small-light`}
      href={generateUrlFromLinkContent(link as NavigationLink, country.siteID as SiteId, locale)}
      onClick={handleClick}
    >
      {title}
    </ExternalLink>
  );
}
