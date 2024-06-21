'use client';

import type { Locale } from '@headless-commerce/config/locale';
import { customerPromise } from '@headless-commerce/contexts/customer';
import type { PageLoadedProperties, ProductsCart } from '@headless-commerce/libs/avo/avo';
import { enrichEvent } from '@headless-commerce/libs/segment/utils';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import type { PageType } from '@headless-commerce/types/PageType';
import { pageLoaded, trackEvent } from '@headless-commerce/utils/tracking/tracking';

import { configuratorURLData } from './trackingURL';

export const trackPageLoadedEvent = ({
  categoryStep,
  country,
  locale,
  pageType,
  segmentProducts,
  style,
}: {
  categoryStep: string;
  country: CountryConfiguration;
  locale: Locale;
  pageType: PageType;
  segmentProducts: Array<ProductsCart>;
  style: 'two-piece' | 'three-piece';
}) => {
  const { path, url, locationId } = configuratorURLData(style, categoryStep);
  const eventAction = 'Page_Loaded';
  const eventCategory = 'global_interactions';
  const eventLabel = path;

  trackEvent({
    ga: {
      eventCategory,
      eventAction,
      eventLabel,
    },
  });

  (async () => {
    await customerPromise;

    pageLoaded(
      enrichEvent(
        {
          country,
          locale,
        },
        {
          customDestinationPageName_: pageType,
          locationId,
          pageType: pageType as PageLoadedProperties['pageType'],
          path,
          productsCart: segmentProducts,
          referrer: window?.document?.referrer,
          title: window?.document?.title,
          url,
        },
      ) satisfies PageLoadedProperties,
    );
  })();
};
