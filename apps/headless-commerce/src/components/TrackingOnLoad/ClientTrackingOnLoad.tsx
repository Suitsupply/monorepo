'use client';

import { useAnalytics } from '@headless-commerce/contexts/analytics/client';
import { cart, cartSegmentProducts, cartSSMProducts } from '@headless-commerce/contexts/cart';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { customer, customerPromise } from '@headless-commerce/contexts/customer';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import type { PageTypeValueType } from '@headless-commerce/libs/avo/avo';
import { enrichEvent } from '@headless-commerce/libs/segment/utils';
import { CID_STORAGE_KEY } from '@headless-commerce/libs/sfcc/constants';
import { getCookie } from '@headless-commerce/utils/cookies/browser';
import { isServer } from '@headless-commerce/utils/environment';
import log from '@headless-commerce/utils/log';
import { insertGoogleTrackingScript, pushGA } from '@headless-commerce/utils/tracking/GA';
import { URLData } from '@headless-commerce/utils/tracking/segment';
import { insertCookieTrackingScript, pageLoaded } from '@headless-commerce/utils/tracking/tracking';
import { isUndefined } from '@headless-commerce/utils/undefined';
import { useSignal, useSignalEffect } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';

export default function ClientTrackingOnLoad() {
  useSignals();

  const country = useCountry();
  const locale = useLocale();
  const analytics = useAnalytics();
  const pageType = usePageType();
  const countryCode = country.countryCode;
  const currencyCode = country.ecommerce.currencyCode;
  const uid = getCookie(CID_STORAGE_KEY);

  const initialized = useSignal(false);
  useSignalEffect(() => {
    log.trace({
      method: 'ClientTrackingOnLoad:effect',
      country,
      locale,
      pageType,
      countryCode,
      currencyCode,
      uid,
      initialized: initialized.value,
      analyticsLoaded: analytics.value.loaded.value,
      cart: cart.value,
      cartSSMProducts: cartSSMProducts.value,
      cartSegmentProducts: cartSegmentProducts.value,
    });

    if (isServer() || initialized.value) {
      return;
    }

    insertGoogleTrackingScript();
    insertCookieTrackingScript();

    if (
      analytics.value.loaded.value === false ||
      isUndefined(cart.value) ||
      isUndefined(cartSSMProducts.value) ||
      isUndefined(cartSegmentProducts.value)
    ) {
      return;
    }

    (async () => {
      await customerPromise;

      log.trace({
        method: 'ClientTrackingOnLoad:effect:initializing',
        country,
        locale,
        pageType,
        countryCode,
        currencyCode,
        uid,
        initialized: initialized.value,
        analyticsLoaded: analytics.value.loaded.value,
        cart: cart.value,
        cartSSMProducts: cartSSMProducts.value,
        cartSegmentProducts: cartSegmentProducts.value,
      });

      pushGA({
        country: countryCode,
        currency: currencyCode,
        ecomm_category: '',
        ecomm_pagetype: pageType,
        ecomm_section: 'Men',
        ecommerce: {
          currencyCode: country.ecommerce.currencyCode,
        },
        language: country.languages[0],
        login_state: customer.value?.isRegistered ?? false,
        page_language: `${country.languages[0]}_${country.countryCode.toUpperCase()}`,
        sfcc_id: uid as string,
        ssm_products: cartSSMProducts.value,
        uid: uid ? String(uid) : undefined,
      });

      const { url, path, locationId } = URLData();
      pageLoaded(
        enrichEvent(
          {
            country,
            locale,
          },
          {
            locationId,
            pageType: pageType as PageTypeValueType,
            path,
            productsCart: cartSegmentProducts.value || [],
            title: window?.document?.title.toLowerCase(),
            url,
            referrer: window?.document?.referrer,
            customDestinationPageName_: pageType,
          },
        ),
      );
    })();

    initialized.value = true;
  });

  log.trace({
    method: 'ClientTrackingOnLoad',
    country,
    locale,
    pageType,
    countryCode,
    currencyCode,
    uid,
    initialized: initialized.value,
    analyticsLoaded: analytics.value.loaded.value,
    cart: cart.value,
    cartSSMProducts: cartSSMProducts.value,
    cartSegmentProducts: cartSegmentProducts.value,
  });

  return <></>;
}
