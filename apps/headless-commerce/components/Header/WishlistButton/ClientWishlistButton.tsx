'use client';

import ExternalLink from '@susu/headless-commerce/components/ExternalLink/ExternalLink';
import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { useHeader } from '@susu/headless-commerce/contexts/header/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import { useGetCountOfWishlistQuery } from '@susu/headless-commerce/gql/generated/getCountOfWishlist.urql';
import type { SiteId } from '@susu/headless-commerce/gql/generated/graphql';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { EventLocationValueType, HeaderWishlistClickProperties } from '@susu/headless-commerce/libs/avo/avo';
import { enrichEvent } from '@susu/headless-commerce/libs/segment/utils';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import { convertLocaleToCommerceGraphQLFormat } from '@susu/headless-commerce/utils/localeUtils';
import log from '@susu/headless-commerce/utils/log';
import { URLData } from '@susu/headless-commerce/utils/tracking/segment';
import { trackEvent } from '@susu/headless-commerce/utils/tracking/tracking';
import classNames from 'classnames';
import type { ReactNode } from 'react';
import { useCallback, useMemo } from 'react';

import styles from '../Header.module.scss';

export type WishlistButtonProps = {
  children?: ReactNode;
};

export default function WishlistButton({ children }: Readonly<WishlistButtonProps>) {
  const pageType = usePageType();
  const country = useCountry();
  const locale = useLocale();
  const customer = useCustomer();

  const { headerTrackingValue, segmentEventLabel } = useHeader();

  const [{ data, error }] = useGetCountOfWishlistQuery({
    variables: useMemo(
      () => ({
        customerId: String(customer?.customerId),
        siteInfo: {
          siteId: country.siteID as SiteId,
          locale: convertLocaleToCommerceGraphQLFormat(locale),
          currency: country.ecommerce.currencyCode,
        },
      }),
      [country.ecommerce.currencyCode, locale, country.siteID, customer?.customerId],
    ),
    context: useMemo(
      () => ({
        clientName: 'commerce',
      }),
      [],
    ),
    pause: !(country.siteID && Boolean(customer?.customerId) && Boolean(customer?.isRegistered)),
  });

  const handleClick = useCallback(() => {
    const { url, locationId } = URLData();
    const segmentProperties: HeaderWishlistClickProperties = enrichEvent(
      {
        locale,
        country,
        customer: customer as Customer,
      },
      {
        pageType,
        eventLabel: segmentEventLabel,
        eventCategory: 'global_interactions',
        // TODO: Remove casting and use supported values
        eventLocation: 'header' as unknown as EventLocationValueType,
        url,
        locationId,
      },
    );

    trackEvent({
      ga: {
        eventCategory: 'Global_Interactions',
        eventAction: 'Wishlist_Header_Click',
        eventLabel: headerTrackingValue,
      },
      segment: {
        event: 'headerWishlistClick',
        properties: segmentProperties,
      },
    });
  }, [country, customer, headerTrackingValue, locale, pageType, segmentEventLabel]);

  const wishlistCount = data?.getCountOfWishlist ?? 0;

  const classes = classNames(styles['header__btn'], {
    [styles['header__btn__wishlist']]: wishlistCount > 0,
  });

  if (error) {
    log.error(error);
  }

  return (
    <span className={classes} data-testid="header_wish_list_button" id="header_wish_list_button">
      <ExternalLink href={`/${locale}/wishlist`} onClick={handleClick}>
        {children}
      </ExternalLink>
    </span>
  );
}
