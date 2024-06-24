'use client';

import ExternalLink from '@susu/headless-commerce/components/ExternalLink/ExternalLink';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import type { Cta, NavigationLink, SiteId } from '@susu/headless-commerce/gql/generated/graphql';
import { trackEvent } from '@susu/headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@susu/headless-commerce/utils/UrlGenerator';
import { useCallback } from 'react';

import styles from './FooterBottom.module.scss';

export type ClientTermsProps = {
  cta: Cta;
  siteID: SiteId;
};

export default function ClientTerms({ cta, siteID }: ClientTermsProps) {
  const locale = useLocale();
  const handleClick = useCallback(() => {
    trackEvent({
      ga: {
        eventCategory: String(cta?.promotionEvents?.promotionEventCategory),
        eventAction: String(cta?.promotionEvents?.promotionEventAction),
        eventLabel: String(cta?.promotionEvents?.promotionEventLabel),
      },
    });
  }, [
    cta?.promotionEvents?.promotionEventAction,
    cta?.promotionEvents?.promotionEventCategory,
    cta?.promotionEvents?.promotionEventLabel,
  ]);

  return (
    <ExternalLink
      className={styles['footer-terms-condition']}
      onClick={handleClick}
      href={generateUrlFromLinkContent(cta.link as NavigationLink, siteID, locale)}
    >
      {cta.title}
    </ExternalLink>
  );
}
