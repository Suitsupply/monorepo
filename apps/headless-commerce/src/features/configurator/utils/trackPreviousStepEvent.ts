'use client';

import type { Locale } from '@headless-commerce/config/locale';
import { customerPromise } from '@headless-commerce/contexts/customer';
import type { PreviousStepProperties, ProductsCart } from '@headless-commerce/libs/avo/avo';
import { enrichEvent } from '@headless-commerce/libs/segment/utils';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import type { PageType } from '@headless-commerce/types/PageType';
import { trackEvent } from '@headless-commerce/utils/tracking/tracking';

import { configuratorURLData } from './trackingURL';

export const trackPreviousStepEvent = ({
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
  const eventCategory = 'btc_interactions';
  const eventLabel = categoryStep;
  const eventLocation = `btc_${categoryStep}`;

  (async () => {
    await customerPromise;

    trackEvent({
      segment: {
        event: 'previousStep',
        properties: enrichEvent(
          {
            country,
            locale,
          },
          {
            eventCategory,
            eventLabel,
            eventLocation,
            customDestinationPageName_: pageType,
            locationId,
            pageType: pageType as PreviousStepProperties['pageType'],
            path,
            productsCart: segmentProducts,
            referrer: window?.document?.referrer,
            title: `${window?.document?.title} - ${categoryStep}`,
            url,
          },
        ) satisfies PreviousStepProperties,
      },
    });
  })();
};
