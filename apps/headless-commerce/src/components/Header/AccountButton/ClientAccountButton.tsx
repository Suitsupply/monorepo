'use client';

import ExternalLink from '@headless-commerce/components/ExternalLink/ExternalLink';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { customerPromise } from '@headless-commerce/contexts/customer';
import { useHeader } from '@headless-commerce/contexts/header/client';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import type { HeaderAccountClickProperties } from '@headless-commerce/libs/avo/avo';
import { enrichEvent } from '@headless-commerce/libs/segment/utils';
import { URLData } from '@headless-commerce/utils/tracking/segment';
import { trackEvent } from '@headless-commerce/utils/tracking/tracking';
import { useSignals } from '@preact/signals-react/runtime';
import type { ReactNode } from 'react';
import { useCallback } from 'react';

export type ClientAccountButtonProps = {
  children?: ReactNode;
};

export default function ClientAccountButton({ children }: ClientAccountButtonProps) {
  useSignals();
  const pageType = usePageType();
  const country = useCountry();
  const locale = useLocale();
  const { headerTrackingValue, segmentEventLabel } = useHeader();
  const { url, locationId } = URLData();
  const segmentProperties: HeaderAccountClickProperties = enrichEvent(
    {
      locale,
      country,
    },
    {
      pageType: pageType as HeaderAccountClickProperties['pageType'],
      eventLabel: segmentEventLabel,
      eventCategory: 'global_interactions',
      eventLocation: 'header',
      url,
      locationId,
    },
  );

  const handleClick = useCallback(() => {
    (async () => {
      await customerPromise;

      trackEvent({
        ga: {
          eventCategory: 'Global_Interactions',
          eventAction: 'Account_Header_Click',
          eventLabel: headerTrackingValue,
        },
        segment: {
          event: 'headerAccountClick',
          properties: segmentProperties,
        },
      });
    })();
  }, [headerTrackingValue, segmentProperties]);

  return (
    <ExternalLink href={`/${locale}/account`} onClick={handleClick}>
      {children}
    </ExternalLink>
  );
}
