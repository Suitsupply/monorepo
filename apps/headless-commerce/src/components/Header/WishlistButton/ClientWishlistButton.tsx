'use client';

import ExternalLink from '@headless-commerce/components/ExternalLink/ExternalLink';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { customer, customerPromise } from '@headless-commerce/contexts/customer';
import { useHeader } from '@headless-commerce/contexts/header/client';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import { useGetCountOfWishlistQuery } from '@headless-commerce/gql/generated/getCountOfWishlist.urql';
import type { SiteId } from '@headless-commerce/gql/generated/graphql';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import type { HeaderWishlistClickProperties } from '@headless-commerce/libs/avo/avo';
import { enrichEvent } from '@headless-commerce/libs/segment/utils';
import { convertLocaleToCommerceGraphQLFormat } from '@headless-commerce/utils/localeUtils';
import log from '@headless-commerce/utils/log';
import { URLData } from '@headless-commerce/utils/tracking/segment';
import { trackEvent } from '@headless-commerce/utils/tracking/tracking';
import { useSignals } from '@preact/signals-react/runtime';
import classNames from 'classnames';
import type { ReactNode } from 'react';
import { useCallback, useMemo } from 'react';

import styles from '../Header.module.scss';

export type WishlistButtonProps = {
  children?: ReactNode;
};

export default function WishlistButton({ children }: Readonly<WishlistButtonProps>) {
  useSignals();

  const pageType = usePageType();
  const country = useCountry();
  const locale = useLocale();
  const { headerTrackingValue, segmentEventLabel } = useHeader();

  const [{ data, error }] = useGetCountOfWishlistQuery({
    variables: useMemo(
      () => ({
        customerId: String(customer.value?.customerId),
        siteInfo: {
          siteId: country.siteID as SiteId,
          locale: convertLocaleToCommerceGraphQLFormat(locale),
          currency: country.ecommerce.currencyCode,
        },
      }),
      [country.ecommerce.currencyCode, locale, country.siteID],
    ),
    context: useMemo(
      () => ({
        clientName: 'commerce',
      }),
      [],
    ),
    pause: !(country.siteID && Boolean(customer.value)),
  });

  const handleClick = useCallback(() => {
    (async () => {
      await customerPromise;

      const { url, locationId } = URLData();
      const segmentProperties: HeaderWishlistClickProperties = enrichEvent(
        {
          locale,
          country,
        },
        {
          pageType: pageType as HeaderWishlistClickProperties['pageType'],
          eventLabel: segmentEventLabel,
          eventCategory: 'global_interactions',
          // TODO: Remove casting and use supported values
          eventLocation: 'header',
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
    })();
  }, [country, headerTrackingValue, locale, pageType, segmentEventLabel]);

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
