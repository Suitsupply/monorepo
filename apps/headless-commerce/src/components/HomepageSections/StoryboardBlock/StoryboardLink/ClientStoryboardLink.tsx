'use client';

import ExternalLink from '@headless-commerce/components/ExternalLink/ExternalLink';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { customer } from '@headless-commerce/contexts/customer';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import type { Cta, NavigationLink, PromotionEvents } from '@headless-commerce/gql/generated/graphql';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import { parseAttributeFromString } from '@headless-commerce/utils/attributeParser';
import { trackClickPromotion, trackImpressionPromotion } from '@headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@headless-commerce/utils/UrlGenerator';
import { useSignals } from '@preact/signals-react/runtime';
import { memo, useCallback, useEffect, useRef } from 'react';

import styles from './StoryboardLink.module.scss';

export type ClientStoryboardLinkProps = {
  cta: Cta;
};

export const ClientStoryboardLink = memo(function ClientStoryboardLink({ cta }: Readonly<ClientStoryboardLinkProps>) {
  useSignals();
  const country = useCountry();
  const locale = useLocale();
  const pageType = usePageType();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref?.current && customer.value) {
      trackImpressionPromotion(ref, cta?.promotionEvents as PromotionEvents, pageType, {
        locale,
        country,
      });
    }
  }, [country, cta?.promotionEvents, locale, pageType, customer.value]);

  const onClick = useCallback(() => {
    if (!cta.promotionEvents) {
      return;
    }

    if (customer.value) {
      trackClickPromotion(ref, cta.promotionEvents, pageType, {
        locale,
        country,
      });
    }
  }, [country, cta.promotionEvents, customer.value, locale, pageType]);

  const url = generateUrlFromLinkContent(cta?.link as NavigationLink, country.siteID, locale);

  return (
    <div ref={ref} className={styles['link-wrap']} {...parseAttributeFromString(cta.testAutomationAttribute)}>
      <ExternalLink href={url} onClick={onClick} className={`${styles.link} title-01_5-medium`}>
        {cta?.title}
      </ExternalLink>
    </div>
  );
});
