'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from '@susu/headless-commerce/components/Link/ClientLink';
import ClientSideSlider from '@susu/headless-commerce/components/SideSlider/ClientSideSlider';
import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import type { TextWrapperRichPanel } from '@susu/headless-commerce/gql/generated/graphql';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import { parseAttributeFromString } from '@susu/headless-commerce/utils/attributeParser';
import type { PromotionEvents } from '@susu/headless-commerce/utils/tracking/tracking';
import { trackClickPromotion, trackImpressionPromotion } from '@susu/headless-commerce/utils/tracking/tracking';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

import styles from './FooterUsp.module.scss';

export type ClientPanelCTAProps = {
  children?: ReactNode;
  item: TextWrapperRichPanel;
};

export default function ClientPanelCTA({ item, children }: Readonly<ClientPanelCTAProps>) {
  const customer = useCustomer();
  const country = useCountry();
  const locale = useLocale();
  const pageType = usePageType();
  const [panel] = item.styleExpertPanelCollection?.items ?? [];
  const [isPanelSliderOpen, setIsPanelSliderOpen] = useState<boolean>(false);
  const CTARef = useRef<HTMLSpanElement>(null);

  const handleClick = useCallback(() => {
    setIsPanelSliderOpen(true);
    trackClickPromotion(CTARef, item?.cta?.promotionEvents as PromotionEvents, pageType, {
      locale,
      country,
      customer: customer as Customer,
    });

    setTimeout(() => {
      document.querySelector('[class*="header"]')?.classList.add('header-is-hidden');
    }, 200);
  }, [country, customer, item?.cta?.promotionEvents, locale, pageType]);

  const handlePanelClose = useCallback(() => {
    setIsPanelSliderOpen(false);
    document.querySelector('[class*="header"]')?.classList.remove('header-is-hidden');
  }, []);

  useEffect(() => {
    trackImpressionPromotion(CTARef, item?.cta?.promotionEvents as PromotionEvents, pageType, {
      locale,
      country,
      customer: customer as Customer,
    });
  }, [country, customer, item?.cta?.promotionEvents, locale, pageType]);

  return (
    <>
      <Link
        className={styles['footer-usp__link']}
        onClick={handleClick}
        title={item?.title ?? ''}
        href=""
        theme="dark"
        size="md"
        underline
        hoverEffect
        {...parseAttributeFromString(item.cta?.testAutomationAttribute)}
      >
        <span ref={CTARef}>{documentToReactComponents(item.cta?.text?.json)}</span>
      </Link>
      {panel?.sys?.id && (
        <ClientSideSlider
          isOpen={isPanelSliderOpen}
          onClose={handlePanelClose}
          slideInFrom={'right'}
          fullScreen="mobile"
          hasCloseButton={true}
        >
          {children}
        </ClientSideSlider>
      )}
    </>
  );
}
