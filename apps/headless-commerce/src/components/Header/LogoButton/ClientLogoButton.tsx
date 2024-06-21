'use client';

// This can't be a dynamic import because of refs.
import { Logo } from '@headless-commerce/components/Logo/Logo';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { customerPromise } from '@headless-commerce/contexts/customer';
import { useHeader } from '@headless-commerce/contexts/header/client';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import type { HeaderLogoClickProperties } from '@headless-commerce/libs/avo/avo';
import { enrichEvent } from '@headless-commerce/libs/segment/utils';
import { URLData } from '@headless-commerce/utils/tracking/segment';
import { trackEvent } from '@headless-commerce/utils/tracking/tracking';
import { useSignals } from '@preact/signals-react/runtime';
import { useCallback } from 'react';

import styles from '../Header.module.scss';

export default function ClientLogoButton() {
  useSignals();
  const pageType = usePageType();
  const country = useCountry();
  const locale = useLocale();
  const { headerTrackingValue, logoColor, isHeaderTransparent, segmentEventLabel } = useHeader();

  const handleClick = useCallback(() => {
    (async () => {
      await customerPromise;

      const { url, locationId } = URLData();
      const segmentProperties: HeaderLogoClickProperties = enrichEvent(
        {
          locale,
          country,
        },
        {
          pageType: pageType as HeaderLogoClickProperties['pageType'],
          eventLabel: segmentEventLabel,
          eventCategory: 'global_interactions',
          eventLocation: 'header',
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
    })();
  }, [country, headerTrackingValue, locale, pageType, segmentEventLabel]);

  const variation = isHeaderTransparent ? logoColor : 'dark';

  return (
    <a href={`/${locale}`} className={styles['header__logo']} onClick={handleClick} data-testid="header-logo">
      <Logo variation={variation} />
    </a>
  );
}
