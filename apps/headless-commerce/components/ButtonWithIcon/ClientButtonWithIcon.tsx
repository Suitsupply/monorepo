'use client';

import type { Options } from '@contentful/rich-text-react-renderer';
import type { Document } from '@contentful/rich-text-types';
import { INLINES, MARKS } from '@contentful/rich-text-types';
import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import type {
  NavigationLink,
  PanelButtonWithIcon,
  PhoneInfo,
  PhoneInfoValue,
} from '@susu/headless-commerce/gql/generated/graphql';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import type { PromotionEvents } from '@susu/headless-commerce/utils/tracking/tracking';
import { trackClickPromotion, trackImpressionPromotion } from '@susu/headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@susu/headless-commerce/utils/UrlGenerator';
import dynamic from 'next/dynamic';
import { memo, type MouseEventHandler, type ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import ExternalLink from '../ExternalLink/ExternalLink';
import ClientSideSlider from '../SideSlider/ClientSideSlider';
import styles from './ButtonWithIcon.module.scss';
import { Content } from './Content';

const renderBold = (text: ReactNode) => <b className="body-medium">{text}</b>;
const renderNumber = (numberInfo: PhoneInfoValue | null) => (
  <span>{numberInfo?.phoneDisplay ?? numberInfo?.phoneValue}</span>
);

export type ClientButtonWithIconProps = {
  data: PanelButtonWithIcon;
  medium: string;
};

export default function ClientButtonWithIcon({ data, medium }: Readonly<ClientButtonWithIconProps>) {
  const country = useCountry();
  const locale = useLocale();
  const pageType = usePageType();
  const [isBookingToolOpen, setIsBookingToolOpen] = useState<boolean>(false);
  const expertCtaRef = useRef(null);
  const { iconName, link, text, promotionEvents } = data;
  const linkType = link?.linkType;
  const customer = useCustomer();
  const tracking = useMemo(
    () => ({
      promotionDimension26: `footer_${pageType}`,
    }),
    [pageType],
  );

  const phoneInfo: PhoneInfoValue | null = useMemo(() => {
    let info: PhoneInfoValue | null = null;

    if (text?.links?.entries?.inline?.length) {
      // Loop through the inline linked entries and add them to the map.
      for (const entry of text?.links?.entries?.inline ?? []) {
        const phonesCollection = (entry as PhoneInfo)?.phoneNumbersCollection?.items;

        if (phonesCollection?.length === 1) {
          info = phonesCollection[0] as PhoneInfoValue;
        }

        if (phonesCollection?.length === 2) {
          info = phonesCollection.find(phoneData => phoneData?.countryCode === country.countryCode) as PhoneInfoValue;
        }
      }
    }

    return info;
  }, [country.countryCode, text?.links?.entries?.inline]);

  const renderOptions: Options = useMemo(
    () => ({
      renderMark: {
        [MARKS.BOLD]: renderBold,
      },
      renderNode: {
        [INLINES.EMBEDDED_ENTRY]: () => {
          return renderNumber(phoneInfo);
        },
      },
    }),
    [phoneInfo],
  );

  const handleClick: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> = useCallback(() => {
    if (linkType === 'Booking Tool') {
      setIsBookingToolOpen(!isBookingToolOpen);
    }

    trackClickPromotion(expertCtaRef, { ...promotionEvents, ...tracking } as PromotionEvents, pageType, {
      locale,
      country,
      customer: customer as Customer,
    });
  }, [country, customer, isBookingToolOpen, linkType, locale, pageType, promotionEvents, tracking]);

  const handleBookingToolClose = useCallback(() => {
    setIsBookingToolOpen(false);
  }, []);

  const renderBookingTool = useCallback(() => {
    const ClientBookingToolWrapper = memo(
      dynamic(() => import('../ClientBookingToolWrapper/ClientBookingToolWrapper'), {
        ssr: false,
      }),
    );

    return (
      <ClientSideSlider
        isOpen={isBookingToolOpen}
        onClose={handleBookingToolClose}
        slideInFrom="right"
        fullScreen="mobile"
        hasCloseButton={false}
      >
        <ClientBookingToolWrapper
          bookingToolOpen={isBookingToolOpen}
          onClose={handleBookingToolClose}
          source="footer_home"
          medium={medium}
        />
      </ClientSideSlider>
    );
  }, [handleBookingToolClose, isBookingToolOpen, medium]);

  const buttonStyle = styles['button-with-icon'];

  useEffect(() => {
    if (expertCtaRef?.current) {
      trackImpressionPromotion(expertCtaRef, { ...promotionEvents, ...tracking } as PromotionEvents, pageType, {
        locale,
        country,
        customer: customer as Customer,
      });
    }
  }, []);

  if (phoneInfo?.__typename === 'PhoneInfoValue') {
    return (
      <ExternalLink href={`tel:${phoneInfo.phoneValue}`} className={`${buttonStyle} body-light`}>
        <Content
          hasText={Boolean(text)}
          iconName={String(iconName)}
          json={text?.json as Document}
          options={renderOptions}
        />
      </ExternalLink>
    );
  }

  if (linkType === 'URL') {
    return (
      <div ref={expertCtaRef}>
        <ExternalLink
          onClick={handleClick}
          href={generateUrlFromLinkContent(link as NavigationLink, country.siteID, locale)}
          className={`${buttonStyle} body-light`}
        >
          <Content
            hasText={Boolean(text)}
            iconName={String(iconName)}
            json={text?.json as Document}
            options={renderOptions}
          />
        </ExternalLink>
      </div>
    );
  }

  return (
    <>
      <button ref={expertCtaRef} className={`${buttonStyle} body-light`} onClick={handleClick}>
        <Content
          hasText={Boolean(text)}
          iconName={String(iconName)}
          json={text?.json as Document}
          options={renderOptions}
        />
      </button>
      {linkType === 'Booking Tool' && renderBookingTool()}
    </>
  );
}
