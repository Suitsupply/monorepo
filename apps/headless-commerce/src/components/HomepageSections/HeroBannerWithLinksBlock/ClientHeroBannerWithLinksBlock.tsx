'use client';

import ExternalLink from '@headless-commerce/components/ExternalLink/ExternalLink';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { customer } from '@headless-commerce/contexts/customer';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import type { NavigationLink } from '@headless-commerce/gql/generated/graphql';
import type { HeroBannerWithLinksContentQuery } from '@headless-commerce/gql/generated/heroBannerWithLinks.operation';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import type { PromotionEvents } from '@headless-commerce/utils/tracking/tracking';
import { trackClickPromotion, trackImpressionPromotion } from '@headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@headless-commerce/utils/UrlGenerator';
import { useSignals } from '@preact/signals-react/runtime';
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
  useSignals();
  const locale = useLocale();
  const country = useCountry();
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
      },
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

    if (customer.value) {
      trackClickPromotion(heroBannerRef, query.data.heroBannerWithLinks.promotionEvents as PromotionEvents, pageType, {
        locale,
        country,
      });
    }
  }, [country, customer.value, locale, pageType, query?.data?.heroBannerWithLinks?.promotionEvents]);

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
