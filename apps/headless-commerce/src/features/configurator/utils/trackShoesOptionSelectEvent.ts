'use client';

import { customerPromise } from '@headless-commerce/contexts/customer';
import type { ShoesOptionSelectProperties } from '@headless-commerce/libs/avo/avo';
import { enrichEvent } from '@headless-commerce/libs/segment/utils';
import { trackEvent } from '@headless-commerce/utils/tracking/tracking';

import { configuratorURLData } from './trackingURL';
import type { TrackOptionSelectConfig } from './trackOptionSelect';

export const trackShoesOptionSelectEvent = ({
  categoryStep,
  country,
  locale,
  pageType,
  productId,
  segmentProducts,
  style,
}: TrackOptionSelectConfig & {
  productId: string;
}) => {
  const { path, url, locationId } = configuratorURLData(style, categoryStep);
  const eventCategory = 'btc_interactions';
  const eventLabel = String(categoryStep);
  const eventLocation = `btc_suits_${categoryStep}`;

  (async () => {
    await customerPromise;

    trackEvent({
      segment: {
        event: 'shoesOptionSelect',
        properties: enrichEvent(
          {
            country,
            locale,
          },
          {
            btcOption: productId,
            eventLabel,
            eventCategory,
            eventLocation,
            customDestinationPageName_: pageType,
            locationId,
            pageType: pageType as ShoesOptionSelectProperties['pageType'],
            path,
            productsCart: segmentProducts,
            referrer: window?.document?.referrer,
            title: `${window?.document?.title} - ${categoryStep}`,
            url,
          },
        ),
      },
    });
  })();
};
