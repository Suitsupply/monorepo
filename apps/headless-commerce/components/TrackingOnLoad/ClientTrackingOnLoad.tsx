'use client';

import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import { useGetCartByCustomerQuery } from '@susu/headless-commerce/gql/generated/getCartByCustomer.urql';
import type { SiteId } from '@susu/headless-commerce/gql/generated/graphql';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import { useSegment } from '@susu/headless-commerce/hooks/useSegment';
import type { PageLoadedProperties, PageTypeValueType } from '@susu/headless-commerce/libs/avo/avo';
import { pageLoaded } from '@susu/headless-commerce/libs/avo/avo';
import { enrichEvent } from '@susu/headless-commerce/libs/segment/utils';
import { CID_STORAGE_KEY } from '@susu/headless-commerce/libs/sfcc/constants';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import { getCookie } from '@susu/headless-commerce/utils/cookies/browser';
import { isServer } from '@susu/headless-commerce/utils/environment';
import { convertLocaleToCommerceGraphQLFormat } from '@susu/headless-commerce/utils/localeUtils';
import log from '@susu/headless-commerce/utils/log';
import { insertGoogleTrackingScript, pushGA, toSSMProduct } from '@susu/headless-commerce/utils/tracking/GA';
import { SSMToProductCart, URLData } from '@susu/headless-commerce/utils/tracking/segment';
import { insertCookieTrackingScript } from '@susu/headless-commerce/utils/tracking/tracking';
import { useCallback, useEffect, useMemo, useRef } from 'react';

export default function ClientTrackingOnLoad() {
  const country = useCountry();
  const locale = useLocale();
  const customer = useCustomer();
  const analytics = useSegment({ country, locale });
  const pageType = usePageType();
  const countryCode = country.countryCode;
  const currencyCode = country.ecommerce.currencyCode;
  const loadEventsPushed = useRef<boolean>(false);
  const uid = getCookie(CID_STORAGE_KEY);

  const [{ data: cartData, error }, executeGetCartByCustomerQuery] = useGetCartByCustomerQuery({
    variables: useMemo(
      () => ({
        customerId: String(customer?.customerId),
        siteInfo: {
          currency: country.ecommerce.currencyCode,
          locale: convertLocaleToCommerceGraphQLFormat(locale),
          siteId: country.siteID as SiteId,
        },
      }),
      [country.ecommerce.currencyCode, locale, country.siteID, customer?.customerId],
    ),
    pause: true,
  });

  if (error) {
    log.error(error);
  }

  useEffect(() => {
    if (isServer()) {
      return;
    }

    insertCookieTrackingScript();
  }, []);

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

  const { giftCertificateItems, lineItems } = cartData?.getCartByCustomer ?? {};

  const items = useMemo(
    () => [...(lineItems ?? []), ...(giftCertificateItems ?? [])],
    [giftCertificateItems, lineItems],
  );

  const SSMProducts = useMemo(() => {
    return (items ?? []).map(item => toSSMProduct(item as Record<string, unknown>, currencyCode, country.siteID));
  }, [country.siteID, currencyCode, items]);

  const GALoadEvent = useMemo(() => {
    return {
      country: countryCode,
      currency: currencyCode,
      ecomm_category: '',
      ecomm_pagetype: pageType,
      ecomm_section: 'Men',
      ecommerce: {
        currencyCode: country.ecommerce.currencyCode,
      },
      language: country.languages[0],
      login_state: customer?.isRegistered ?? false,
      page_language: `${country.languages[0]}_${country.countryCode.toUpperCase()}`,
      sfcc_id: uid as string,
      ssm_products: SSMProducts,
      uid: uid ? String(uid) : undefined,
    };
  }, [
    SSMProducts,
    country.countryCode,
    country.ecommerce.currencyCode,
    country.languages,
    countryCode,
    currencyCode,
    customer?.isRegistered,
    pageType,
    uid,
  ]);

  const segmentLoadEvent = useCallback((): PageLoadedProperties => {
    const { url, path, locationId } = URLData();

    return enrichEvent(
      {
        country,
        customer: customer as Customer,
        locale,
      },
      {
        locationId,
        pageType: pageType as PageTypeValueType,
        path,
        productsCart: SSMProducts.map(SSMToProductCart),
        title: window?.document?.title,
        url,
        referrer: window?.document?.referrer,
        customDestinationPageName_: '',
      },
    );
  }, [country, customer, locale, pageType, SSMProducts]);

  useEffect(() => {
    if (isServer() || !cartData || loadEventsPushed.current) {
      return;
    }

    if (typeof window !== 'undefined') {
      insertGoogleTrackingScript();
      pushGA(GALoadEvent);

      pageLoaded(segmentLoadEvent());
      loadEventsPushed.current = true;
    }
  }, [GALoadEvent, analytics, cartData, segmentLoadEvent]);

  return <></>;
}
