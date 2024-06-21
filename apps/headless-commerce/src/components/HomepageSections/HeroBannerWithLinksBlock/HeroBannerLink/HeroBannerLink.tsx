'use client';

import ExternalLink from '@headless-commerce/components/ExternalLink/ExternalLink';
import type { Locale } from '@headless-commerce/config/locale';
import { customer } from '@headless-commerce/contexts/customer';
import type { HeroLinkItem, NavigationLink } from '@headless-commerce/gql/generated/graphql';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import { parseAttributeFromString } from '@headless-commerce/utils/attributeParser';
import { generateIdentifier } from '@headless-commerce/utils/identifier';
import type { PromotionEvents } from '@headless-commerce/utils/tracking/tracking';
import { trackClickPromotion, trackImpressionPromotion } from '@headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@headless-commerce/utils/UrlGenerator';
import { useSignals } from '@preact/signals-react/runtime';
import classNames from 'classnames';
import { memo, useCallback, useEffect, useRef } from 'react';

import styles from './HeroBannerLink.module.scss';

export type HeroBannerLinkProps = {
  item: HeroLinkItem;
  country: CountryConfiguration;
  locale: Locale;
};

export const HeroBannerLink = memo(function HeroBannerLink({ item, country, locale }: HeroBannerLinkProps) {
  useSignals();
  const pageType = usePageType();
  const heroLinkRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (heroLinkRef?.current && customer.value) {
      trackImpressionPromotion(heroLinkRef, item?.promotionEvents as PromotionEvents, pageType, {
        locale,
        country,
      });
    }
  }, [country, item?.promotionEvents, locale, pageType, customer.value]);

  const onHeroLinkClick = useCallback(() => {
    if (!item?.promotionEvents) {
      return;
    }

    if (customer.value) {
      trackClickPromotion(heroLinkRef, item?.promotionEvents, pageType, {
        locale,
        country,
      });
    }
  }, [country, customer.value, item?.promotionEvents, locale, pageType]);

  return (
    <li
      className={classNames('title-01-medium', styles['hero-banner-link'])}
      key={item?.sys?.id || generateIdentifier()}
      ref={heroLinkRef}
      {...parseAttributeFromString(item?.testAutomationAttribute)}
    >
      <ExternalLink
        className={styles['hero-banner-link__item']}
        href={generateUrlFromLinkContent(item?.link as NavigationLink, country.siteID, locale)}
        onClick={onHeroLinkClick}
      >
        {item?.linkText}
      </ExternalLink>
    </li>
  );
});
