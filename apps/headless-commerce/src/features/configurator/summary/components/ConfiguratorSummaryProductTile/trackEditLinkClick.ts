import type { Locale } from '@headless-commerce/config/locale';
import { customerPromise } from '@headless-commerce/contexts/customer';
import type { EventCategoryValueType } from '@headless-commerce/libs/avo/avo';
import { enrichEvent } from '@headless-commerce/libs/segment/utils';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import type { PageType } from '@headless-commerce/types/PageType';
import { trackEvent } from '@headless-commerce/utils/tracking/tracking';

export const trackEditLinkClick = ({
  categoryStep,
  country,
  locale,
  locationId,
  pageType,
  url,
}: {
  categoryStep: string;
  country: CountryConfiguration;
  locale: Locale;
  locationId: string;
  pageType: PageType;
  url: string;
}) => {
  (async () => {
    await customerPromise;

    trackEvent({
      segment: {
        event: 'btcSummaryEdit',
        properties: enrichEvent(
          {
            country,
            locale,
          },
          {
            btcOption: '',
            eventCategory: 'btc_interactions' as EventCategoryValueType,
            eventLabel: '',
            eventLocation: `btc_summary_${categoryStep}`,
            locationId,
            pageType,
            url,
          },
        ),
      },
    });
  })();
};
