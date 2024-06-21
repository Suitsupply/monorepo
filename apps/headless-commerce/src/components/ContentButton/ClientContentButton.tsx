import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { useCurrencies } from '@headless-commerce/contexts/currencies/client';
import { customer } from '@headless-commerce/contexts/customer';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import type { Button, NavigationLink, PromotionEvents, StickyButton } from '@headless-commerce/gql/generated/graphql';
import type { PageType } from '@headless-commerce/types/PageType';
import { createRenderNodeForPriceInfo } from '@headless-commerce/utils/contentfulUtils';
import type { PromotionEvents as TrackingPromotionEvents } from '@headless-commerce/utils/tracking/tracking';
import { trackImpressionPromotion } from '@headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@headless-commerce/utils/UrlGenerator';
import { useSignals } from '@preact/signals-react/runtime';
import { forwardRef, useEffect, useRef } from 'react';

import { BOOKING_TOOL_LINK_TYPE_LABEL } from '../CMSPageSections/TextAndImageColumnBannerSection/TextAndImageColumnBannerConstants';
import styles from './ContentButton.module.scss';
import type { ButtonAlignment, ButtonStyle, IContentButton } from './ContentButton.types';

const DEFAULT_ALIGMENT = 'center';
const DEFAULT_STYLE = 'primary';
const DEFAULT_FULL_WIDTH = false;

const alignProps = (buttonData: Partial<Button> | Partial<StickyButton>): IContentButton => {
  const contentButton: IContentButton = {
    alignment: {
      mobile: DEFAULT_ALIGMENT,
      tablet: DEFAULT_ALIGMENT,
      desktop: DEFAULT_ALIGMENT,
    },
    visibility: {
      desktop: buttonData.visibleOnDesktop === 'yes',
      mobile: buttonData.visibleOnMobile === 'yes',
      tablet: buttonData.visibleOnTablet === 'yes',
    },
    fullWidth: {
      desktop: DEFAULT_FULL_WIDTH,
      mobile: DEFAULT_FULL_WIDTH,
      tablet: DEFAULT_FULL_WIDTH,
    },
    buttonRichText: buttonData.buttonRichText,
    buttonStyle: (buttonData.buttonStyle as ButtonStyle) ?? DEFAULT_STYLE,
    link: buttonData.link as NavigationLink,
    promotionEvents: buttonData.promotionEvents as PromotionEvents,
  };

  if (buttonData.__typename === 'Button') {
    contentButton.alignment = {
      mobile: (buttonData.mobileButtonAlignment as ButtonAlignment) ?? DEFAULT_ALIGMENT,
      tablet: (buttonData.tabletButtonAlignment as ButtonAlignment) ?? DEFAULT_ALIGMENT,
      desktop: (buttonData.desktopButtonAlignment as ButtonAlignment) ?? DEFAULT_ALIGMENT,
    };
  }

  if (buttonData.__typename === 'StickyButton') {
    contentButton.fullWidth = {
      desktop: buttonData.stickyOnDesktop === 'yes',
      mobile: buttonData.stickyOnMobile === 'yes',
      tablet: buttonData.stickyOnTablet === 'yes',
    };
  }

  return contentButton;
};

const buildClassName = ({
  alignment,
  buttonClass,
  buttonStyle,
  fullWidth,
  visibility,
  IS_BOOKING_TOOL_BUTTON,
}: {
  alignment: { mobile: ButtonAlignment; tablet: ButtonAlignment; desktop: ButtonAlignment };
  buttonClass: string | undefined;
  buttonStyle: string;
  fullWidth: { mobile: boolean; tablet: boolean; desktop: boolean };
  visibility: { mobile: boolean; tablet: boolean; desktop: boolean };
  IS_BOOKING_TOOL_BUTTON: boolean;
}): string => {
  const baseClass = styles[`content-button`];
  const baseButtonClass = styles[`content-button__btn`];
  const baseLinkClass = styles[`content-button__link`];
  const styleClass = styles[`content-button--${buttonStyle}`];

  const mobileVisibilityClass = visibility.mobile ? '' : styles['content-button--mobile-hidden'];
  const tabletVisibilityClass = visibility.tablet ? '' : styles['content-button--tablet-hidden'];
  const desktopVisibilityClass = visibility.desktop ? '' : styles['content-button--desktop-hidden'];

  const mobileFullWidthClass = fullWidth.mobile ? styles['content-button--mobile-full-width'] : '';
  const tabletFullWidthClass = fullWidth.tablet ? styles['content-button--tablet-full-width'] : '';
  const desktopFullWidthClass = fullWidth.desktop ? styles['content-button--desktop-full-width'] : '';

  const mobileAlignmentClass = styles[`content-button--mobile-${alignment.mobile}`];
  const tabletAlignmentClass = styles[`content-button--tablet-${alignment.tablet}`];
  const desktopAlignmentClass = styles[`content-button--desktop-${alignment.desktop}`];

  const mobileClass = `${mobileVisibilityClass} ${mobileFullWidthClass} ${mobileAlignmentClass}`;
  const tabletClass = `${tabletVisibilityClass} ${tabletFullWidthClass} ${tabletAlignmentClass}`;
  const desktopClass = `${desktopVisibilityClass} ${desktopFullWidthClass} ${desktopAlignmentClass}`;

  const stylesClass = `${baseClass} ${baseButtonClass} ${styleClass} ${IS_BOOKING_TOOL_BUTTON ? '' : baseLinkClass}`;
  const responsiveClass = `${mobileClass} ${tabletClass} ${desktopClass}`;

  return `${stylesClass} ${responsiveClass} ${buttonClass ?? ''}`;
};

export type ContentButtonProps = {
  buttonClass?: string;
  buttonData: Partial<Button> | Partial<StickyButton>;
  onClick: () => void;
  pageType: PageType;
  automationPageId: string;
};

export const ClientContentButton = forwardRef(function ContentButton({
  buttonClass,
  buttonData,
  onClick,
  pageType,
  automationPageId,
}: ContentButtonProps) {
  useSignals();
  const country = useCountry();
  const locale = useLocale();
  const currencies = useCurrencies();
  const { alignment, visibility, fullWidth, buttonStyle, buttonRichText, link, promotionEvents } =
    alignProps(buttonData);
  const contentButtonRef = useRef<HTMLButtonElement>(null);
  const contentLinkRef = useRef<HTMLAnchorElement>(null);
  const IS_BOOKING_TOOL_BUTTON = link?.linkType === BOOKING_TOOL_LINK_TYPE_LABEL;

  const priceContent = documentToReactComponents(
    buttonRichText?.json,
    createRenderNodeForPriceInfo(buttonRichText, country.ecommerce.currencyCode, country, currencies),
  );

  const testId = `${automationPageId}_content-button`;

  const buttonClassName = buildClassName({
    alignment,
    buttonClass,
    buttonStyle,
    fullWidth,
    visibility,
    IS_BOOKING_TOOL_BUTTON,
  });

  useEffect(() => {
    if (contentLinkRef?.current && customer.value) {
      trackImpressionPromotion(contentLinkRef, promotionEvents as TrackingPromotionEvents, pageType, {
        locale,
        country,
      });
    }

    if (contentButtonRef?.current && customer.value) {
      trackImpressionPromotion(contentButtonRef, promotionEvents as TrackingPromotionEvents, pageType, {
        locale,
        country,
      });
    }
  }, [country, locale, pageType, promotionEvents, customer.value]);

  return IS_BOOKING_TOOL_BUTTON ? (
    <button
      type="button"
      className={buttonClassName}
      onClick={onClick}
      ref={contentButtonRef}
      datat-testid={`${testId}_booking-tool`}
    >
      {priceContent}
    </button>
  ) : (
    <a
      className={`${buttonClassName} body-small-regular-sm `}
      href={generateUrlFromLinkContent(link as NavigationLink, country.siteID, locale)}
      onClick={onClick}
      ref={contentLinkRef}
      datat-testid={testId}
    >
      {priceContent}
    </a>
  );
});
