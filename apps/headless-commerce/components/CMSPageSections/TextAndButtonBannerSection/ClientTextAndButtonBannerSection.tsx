'use client';

import ClientBookingToolWrapper from '@susu/headless-commerce/components/ClientBookingToolWrapper/ClientBookingToolWrapper';
import { ClientContentButton } from '@susu/headless-commerce/components/ContentButton/ClientContentButton';
import ClientSideSlider from '@susu/headless-commerce/components/SideSlider/ClientSideSlider';
import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import type { Button, StickyButton } from '@susu/headless-commerce/gql/generated/graphql';
import type {
  TextAndButtonBannerQuery,
  TextAndButtonBannerQueryVariables,
} from '@susu/headless-commerce/gql/generated/textAndButtonBanner.operation';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import type { PromotionEvents } from '@susu/headless-commerce/utils/tracking/tracking';
import { trackClickPromotion } from '@susu/headless-commerce/utils/tracking/tracking';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { OperationResult } from 'urql';

import { BOOKING_TOOL_LINK_TYPE_LABEL } from '../TextAndImageColumnBannerSection/TextAndImageColumnBannerConstants';
import { useTextAndButtonBannerContext } from './contexts/textAndButtonBanner';
import styles from './TextAndButtonBannerSection.module.scss';

export type ClientTextAndButtonBannerSectionProps = {
  children?: ReactNode;
  query: OperationResult<TextAndButtonBannerQuery, TextAndButtonBannerQueryVariables>;
  automationPageId: string;
};

export default function ClientTextAndButtonBannerSection({
  children,
  query,
  automationPageId,
}: Readonly<ClientTextAndButtonBannerSectionProps>) {
  const pageType = usePageType();
  const { contentButtonRef } = useTextAndButtonBannerContext();
  const [bookingToolOpen, setBookingToolOpen] = useState<boolean>(false);
  const headingRef = useRef<HTMLDivElement>(null);
  const customer = useCustomer();
  const locale = useLocale();
  const country = useCountry();

  const IS_BUTTON_BOOKING_TOOL =
    query.data?.textAndButtonBanner?.button?.link?.linkType === BOOKING_TOOL_LINK_TYPE_LABEL;

  const button = query.data?.textAndButtonBanner?.button;
  const automationId = query.data?.textAndButtonBanner?.automationId;

  const maxWidthDesktop = query.data?.textAndButtonBanner?.maxWidthDesktop;
  const maxWidthMobile = query.data?.textAndButtonBanner?.maxWidthMobile;
  const maxWidthTablet = query.data?.textAndButtonBanner?.maxWidthTablet;

  const desktopCopyAlignment = query.data?.textAndButtonBanner?.desktopCopyAlignment;
  const mobileCopyAlignment = query.data?.textAndButtonBanner?.mobileCopyAlignment;
  const tabletCopyAlignment = query.data?.textAndButtonBanner?.tabletCopyAlignment;
  const mobileAlignmentClass = `text-banner__heading--mobile-${mobileCopyAlignment}`;
  const tabletAlignmentClass = `text-banner__heading--tablet-${tabletCopyAlignment}`;
  const desktopAlignmentClass = `text-banner__heading--desktop-${desktopCopyAlignment}`;

  const handleOnClick = useCallback(() => {
    if (IS_BUTTON_BOOKING_TOOL && !bookingToolOpen) {
      setBookingToolOpen(true);
    }

    trackClickPromotion(headingRef, button?.promotionEvents as PromotionEvents, 'journal', {
      locale,
      country,
      customer: customer as Customer,
    });
  }, [IS_BUTTON_BOOKING_TOOL, bookingToolOpen, button?.promotionEvents, country, customer, locale]);

  const handleBookingToolClose = useCallback(() => {
    setBookingToolOpen(false);
  }, []);

  useEffect(() => {
    headingRef.current?.setAttribute('style', `--max-width-mobile: ${String(maxWidthMobile)}`);
    headingRef.current?.style.setProperty('--max-width-tablet', String(maxWidthTablet));
    headingRef.current?.style.setProperty('--max-width-desktop', String(maxWidthDesktop));
  }, [maxWidthMobile, maxWidthTablet, maxWidthDesktop]);

  return (
    <>
      <div
        className={`${styles['text-banner__heading']} ${mobileAlignmentClass} ${tabletAlignmentClass} ${desktopAlignmentClass}`}
        ref={headingRef}
      >
        {children}
        <div className={styles['text-banner__button-wrapper']} ref={contentButtonRef}>
          {button && (
            <ClientContentButton
              buttonClass="body-small-regular"
              buttonData={button as Partial<Button> | Partial<StickyButton>}
              onClick={handleOnClick}
              pageType={pageType}
              automationPageId={`${automationPageId}_${automationId}`}
            />
          )}
        </div>
        {IS_BUTTON_BOOKING_TOOL ? (
          <ClientSideSlider
            isOpen={bookingToolOpen}
            onClose={handleBookingToolClose}
            slideInFrom="right"
            fullScreen="mobile"
            hasCloseButton={true}
          >
            <ClientBookingToolWrapper
              bookingToolOpen={bookingToolOpen}
              onClose={handleBookingToolClose}
              source="footer_home"
              medium={'medium'}
            />
          </ClientSideSlider>
        ) : null}
      </div>
    </>
  );
}
