'use client';

import ExternalLink from '@susu/headless-commerce/components/ExternalLink/ExternalLink';
import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import type { Cta, NavigationLink, PromotionEvents } from '@susu/headless-commerce/gql/generated/graphql';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import { parseAttributeFromString } from '@susu/headless-commerce/utils/attributeParser';
import { trackClickPromotion, trackImpressionPromotion } from '@susu/headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@susu/headless-commerce/utils/UrlGenerator';
import { memo, useCallback, useEffect, useRef } from 'react';

import styles from './StoryboardLink.module.scss';

export type ClientStoryboardLinkProps = {
  cta: Cta;
};

export const ClientStoryboardLink = memo(function ClientStoryboardLink({ cta }: Readonly<ClientStoryboardLinkProps>) {
  const country = useCountry();
  const locale = useLocale();
  const customer = useCustomer();
  const pageType = usePageType();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref?.current) {
      trackImpressionPromotion(ref, cta?.promotionEvents as PromotionEvents, pageType, {
        locale,
        country,
        customer: customer as Customer,
      });
    }
  }, []);

  const onClick = useCallback(() => {
    if (!cta.promotionEvents) {
      return;
    }

    trackClickPromotion(ref, cta.promotionEvents, pageType, {
      locale,
      country,
      customer: customer as Customer,
    });
  }, [country, cta.promotionEvents, customer, locale, pageType]);

  const url = generateUrlFromLinkContent(cta?.link as NavigationLink, country.siteID, locale);

  return (
    <div ref={ref} className={styles['link-wrap']} {...parseAttributeFromString(cta.testAutomationAttribute)}>
      <ExternalLink href={url} onClick={onClick} className={`${styles.link} title-01_5-medium`}>
        {cta?.title}
      </ExternalLink>
    </div>
  );
});
