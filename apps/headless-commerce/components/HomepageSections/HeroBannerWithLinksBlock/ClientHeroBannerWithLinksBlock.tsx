'use client';

import ExternalLink from '@susu/headless-commerce/components/ExternalLink/ExternalLink';
import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import type { NavigationLink } from '@susu/headless-commerce/gql/generated/graphql';
import type { HeroBannerWithLinksContentQuery } from '@susu/headless-commerce/gql/generated/heroBannerWithLinks.operation';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import type { PromotionEvents } from '@susu/headless-commerce/utils/tracking/tracking';
import { trackClickPromotion, trackImpressionPromotion } from '@susu/headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@susu/headless-commerce/utils/UrlGenerator';
import classNames from 'classnames';
import { useCallback, useEffect, useRef } from 'react';
import type { OperationResult } from 'urql';

import styles from './HeroBannerWithLinksBlock.module.scss';

export type ClientHeroBannerWithLinksBlockProps = {
  imageElement: JSX.Element | null;
  itemsElement: JSX.Element | null;
  query: OperationResult<HeroBannerWithLinksContentQuery>;
};

export default function ClientHeroBannerWithLinksBlock({
  imageElement,
  itemsElement,
  query,
}: Readonly<ClientHeroBannerWithLinksBlockProps>) {
  const locale = useLocale();
  const country = useCountry();
  const customer = useCustomer();
  const pageType = usePageType();
  const heroBannerLinksRef = useRef<HTMLUListElement>(null);
  const heroBannerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  const percentageVisible = useCallback(() => {
    if (!heroBannerLinksRef.current) {
      return 0;
    }
    const viewportHeight = window?.innerHeight;
    const { height, top } = heroBannerLinksRef.current.getBoundingClientRect();
    const percentage = Math.round(((viewportHeight - top) * 100) / height);
    return Math.max(0, Math.min(100, percentage));
  }, [heroBannerLinksRef]);

  const comparePositions = useCallback(() => {
    if (!heroImageRef.current || !heroBannerLinksRef.current) {
      return false;
    }
    const { bottom: imageBottom, height: imageHeight } = heroImageRef.current.getBoundingClientRect();
    const { bottom: linksBottom } = heroBannerLinksRef.current.getBoundingClientRect();
    const bottomDiff = Math.floor(Math.round(imageBottom) - Math.round(linksBottom));
    const positionDiff = Math.floor(Math.round(imageHeight) - Math.round(linksBottom));
    return bottomDiff >= 0 && positionDiff >= 0;
  }, [heroImageRef, heroBannerLinksRef]);

  useEffect(() => {
    if (!heroBannerRef?.current) {
      return;
    }
    trackImpressionPromotion(
      heroBannerRef,
      query.data?.heroBannerWithLinks?.promotionEvents as PromotionEvents,
      pageType,
      {
        locale,
        country,
        customer: customer as Customer,
      },
    );
  }, []);

  const handleScroll = useCallback(() => {
    if (!heroImageRef.current || !heroBannerRef.current || !heroBannerLinksRef.current) {
      return;
    }
    heroBannerRef.current.style.setProperty('--overlay-opacity', `${(percentageVisible() / 100).toFixed(2)}`);
    heroImageRef.current.classList.toggle(styles['hero-banner__wrapper--scrolled'], comparePositions());
  }, [percentageVisible, comparePositions]);

  useEffect(() => {
    if (!heroBannerLinksRef.current) {
      return;
    }
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleHeroBannerClick = useCallback(() => {
    if (!query.data?.heroBannerWithLinks?.promotionEvents) {
      return;
    }
    trackClickPromotion(heroBannerRef, query.data.heroBannerWithLinks.promotionEvents as PromotionEvents, pageType, {
      locale,
      country,
      customer: customer as Customer,
    });
  }, [country, customer, locale, pageType, query?.data?.heroBannerWithLinks?.promotionEvents]);

  const heroBannerWrapperClasses = classNames(styles['hero-banner__wrapper']);

  return (
    <div className={styles['hero-banner']} ref={heroBannerRef}>
      <div className={heroBannerWrapperClasses} ref={heroImageRef}>
        <ExternalLink
          className={styles['hero-banner__image-link']}
          href={generateUrlFromLinkContent(
            query.data?.heroBannerWithLinks?.link as NavigationLink,
            country.siteID,
            locale,
          )}
          onClick={handleHeroBannerClick}
        >
          {imageElement}
        </ExternalLink>
      </div>
      <div className={styles['hero-banner__links']}>
        <ul ref={heroBannerLinksRef} className={styles['hero-banner__links-list']}>
          {itemsElement}
        </ul>
      </div>
    </div>
  );
}
