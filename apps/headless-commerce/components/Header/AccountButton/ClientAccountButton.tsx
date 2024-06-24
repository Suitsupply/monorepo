'use client';

import ExternalLink from '@susu/headless-commerce/components/ExternalLink/ExternalLink';
import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { useHeader } from '@susu/headless-commerce/contexts/header/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { EventLocationValueType, HeaderAccountClickProperties } from '@susu/headless-commerce/libs/avo/avo';
import { enrichEvent } from '@susu/headless-commerce/libs/segment/utils';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import { URLData } from '@susu/headless-commerce/utils/tracking/segment';
import { trackEvent } from '@susu/headless-commerce/utils/tracking/tracking';
import type { ReactNode } from 'react';
import { useCallback } from 'react';

export type ClientAccountButtonProps = {
  children?: ReactNode;
};

export default function ClientAccountButton({ children }: ClientAccountButtonProps) {
  const pageType = usePageType();
  const customer = useCustomer();
  const country = useCountry();
  const locale = useLocale();
  const { headerTrackingValue, segmentEventLabel } = useHeader();
  const { url, locationId } = URLData();
  const segmentProperties: HeaderAccountClickProperties = enrichEvent(
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

  const handleClick = useCallback(() => {
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
  }, [headerTrackingValue, segmentProperties]);

  return (
    <ExternalLink href={`/${locale}/account`} onClick={handleClick}>
      {children}
    </ExternalLink>
  );
}
