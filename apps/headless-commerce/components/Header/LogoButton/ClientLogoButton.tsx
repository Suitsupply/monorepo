'use client';

// This can't be a dynamic import because of refs.
import { Logo } from '@susu/headless-commerce/components/Logo/Logo';
import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { useHeader } from '@susu/headless-commerce/contexts/header/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { EventLocationValueType, HeaderLogoClickProperties } from '@susu/headless-commerce/libs/avo/avo';
import { enrichEvent } from '@susu/headless-commerce/libs/segment/utils';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import { URLData } from '@susu/headless-commerce/utils/tracking/segment';
import { trackEvent } from '@susu/headless-commerce/utils/tracking/tracking';
import { useCallback } from 'react';

import styles from '../Header.module.scss';

export default function ClientLogoButton() {
  const pageType = usePageType();
  const country = useCountry();
  const locale = useLocale();
  const customer = useCustomer();
  const { headerTrackingValue, logoColor, isHeaderTransparent, segmentEventLabel } = useHeader();

  const handleClick = useCallback(() => {
    const { url, locationId } = URLData();
    const segmentProperties: HeaderLogoClickProperties = enrichEvent(
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
        eventAction: 'Logo_Header_Click',
        eventLabel: headerTrackingValue,
      },
      segment: {
        event: 'headerLogoClick',
        properties: segmentProperties,
      },
    });
  }, [country, customer, headerTrackingValue, locale, pageType, segmentEventLabel]);

  const variation = isHeaderTransparent ? logoColor : 'dark';

  return (
    <a href={`/${locale}`} className={styles['header__logo']} onClick={handleClick} data-testid="header-logo">
      <Logo variation={variation} />
    </a>
  );
}
