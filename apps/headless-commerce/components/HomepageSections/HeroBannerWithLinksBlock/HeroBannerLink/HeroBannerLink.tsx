'use client';

import ExternalLink from '@susu/headless-commerce/components/ExternalLink/ExternalLink';
import type { Locale } from '@susu/headless-commerce/config/locale';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import type { HeroLinkItem, NavigationLink } from '@susu/headless-commerce/gql/generated/graphql';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { CountryConfiguration } from '@susu/headless-commerce/types/CountryConfiguration';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import { parseAttributeFromString } from '@susu/headless-commerce/utils/attributeParser';
import { generateIdentifier } from '@susu/headless-commerce/utils/identifier';
import type { PromotionEvents } from '@susu/headless-commerce/utils/tracking/tracking';
import { trackClickPromotion, trackImpressionPromotion } from '@susu/headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@susu/headless-commerce/utils/UrlGenerator';
import classNames from 'classnames';
import { memo, useCallback, useEffect, useRef } from 'react';

import styles from './HeroBannerLink.module.scss';

export type HeroBannerLinkProps = {
  item: HeroLinkItem;
  country: CountryConfiguration;
  locale: Locale;
};

export const HeroBannerLink = memo(function HeroBannerLink({ item, country, locale }: HeroBannerLinkProps) {
  const customer = useCustomer();
  const pageType = usePageType();
  const heroLinkRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (heroLinkRef?.current) {
      trackImpressionPromotion(heroLinkRef, item?.promotionEvents as PromotionEvents, pageType, {
        locale,
        country,
        customer: customer as Customer,
      });
    }
  }, []);

  const onHeroLinkClick = useCallback(() => {
    if (!item?.promotionEvents) {
      return;
    }

    trackClickPromotion(heroLinkRef, item?.promotionEvents, pageType, {
      locale,
      country,
      customer: customer as Customer,
    });
  }, [country, customer, item?.promotionEvents, locale, pageType]);

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
