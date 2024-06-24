'use client';

import ExternalLink from '@susu/headless-commerce/components/ExternalLink/ExternalLink';
import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { useHeader } from '@susu/headless-commerce/contexts/header/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import { useGetCartByCustomerQuery } from '@susu/headless-commerce/gql/generated/getCartByCustomer.urql';
import type {
  CustomMadeLineItem,
  GiftCertificateItem,
  Maybe,
  ProductLineItem,
} from '@susu/headless-commerce/gql/generated/graphql';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { EventLocationValueType, HeaderMinicartClickProperties } from '@susu/headless-commerce/libs/avo/avo';
import { enrichEvent } from '@susu/headless-commerce/libs/segment/utils';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import { getCartTotalItems } from '@susu/headless-commerce/utils/cart';
import { convertLocaleToCommerceGraphQLFormat } from '@susu/headless-commerce/utils/localeUtils';
import log from '@susu/headless-commerce/utils/log';
import { URLData } from '@susu/headless-commerce/utils/tracking/segment';
import { trackEvent } from '@susu/headless-commerce/utils/tracking/tracking';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo } from 'react';

export type ClientBagButtonProps = {
  children?: ReactNode;
};

export default function ClientBagButton({ children }: Readonly<ClientBagButtonProps>) {
  const pageType = usePageType();
  const country = useCountry();
  const locale = useLocale();
  const customer = useCustomer();
  const { headerTrackingValue, segmentEventLabel } = useHeader();

  const [{ data, error }, executeGetCartByCustomerQuery] = useGetCartByCustomerQuery({
    variables: useMemo(
      () => ({
        customerId: String(customer?.customerId),
        siteInfo: {
          currency: country.ecommerce.currencyCode,
          locale: convertLocaleToCommerceGraphQLFormat(locale),
          siteId: country.siteID,
        },
      }),
      [country.ecommerce.currencyCode, locale, country.siteID, customer?.customerId],
    ),
    pause: true,
  });

  const handleClick = useCallback(() => {
    const { url, locationId } = URLData();
    const segmentProperties: HeaderMinicartClickProperties = enrichEvent(
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
        eventAction: 'Minicart_Header_Click',
        eventLabel: headerTrackingValue,
      },
      segment: {
        event: 'headerMinicartClick',
        properties: segmentProperties,
      },
    });
  }, [country, customer, headerTrackingValue, locale, pageType, segmentEventLabel]);

  useEffect(() => {
    if (
      !(
        country.siteID &&
        Boolean(customer?.customerId) &&
        country.ecommerce.currencyCode &&
        Boolean(locale) &&
        Boolean(country.siteID)
      )
    ) {
      return;
    }

    executeGetCartByCustomerQuery({
      clientName: 'commerce',
    });
  }, [country.ecommerce.currencyCode, country.siteID, customer?.customerId, executeGetCartByCustomerQuery, locale]);

  const cartCount = getCartTotalItems(
    (data?.getCartByCustomer?.lineItems ?? []) as Array<CustomMadeLineItem | ProductLineItem>,
    (data?.getCartByCustomer?.giftCertificateItems ?? []) as Array<GiftCertificateItem>,
  );

  const countInputProps: {
    'data-count': Maybe<number>;
  } = {
    'data-count': null,
  };

  if (cartCount && cartCount > 0) {
    countInputProps['data-count'] = cartCount;
  }

  if (error) {
    log.error(error);
  }

  return (
    <span {...countInputProps}>
      <ExternalLink href={`/${locale}/cart`} onClick={handleClick}>
        {children}
      </ExternalLink>
    </span>
  );
}
