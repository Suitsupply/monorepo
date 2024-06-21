'use client';

import { useCountry } from '@headless-commerce/contexts/country/client';
import { customerPromise } from '@headless-commerce/contexts/customer';
import { useHeader } from '@headless-commerce/contexts/header/client';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import type { MenuOpenedProperties } from '@headless-commerce/libs/avo/avo';
import { enrichEvent } from '@headless-commerce/libs/segment/utils';
import { getSegmentHeaderTypeByCMSHeaderType, URLData } from '@headless-commerce/utils/tracking/segment';
import { trackEvent } from '@headless-commerce/utils/tracking/tracking';
import { useSignals } from '@preact/signals-react/runtime';
import type { ReactNode } from 'react';
import { useCallback } from 'react';

import styles from '../Header.module.scss';

export type ClientMenuButtonProps = {
  children?: ReactNode;
};

export default function ClientMenuButton({ children }: ClientMenuButtonProps) {
  useSignals();
  const pageType = usePageType();
  const country = useCountry();
  const locale = useLocale();

  const { setMenuOpen, menuOpen, headerTrackingValue, headerType } = useHeader();
  const handleMenuClick = useCallback(() => {
    (async () => {
      await customerPromise;

      const { url, locationId } = URLData();
      const segmentProperties: MenuOpenedProperties = enrichEvent(
        {
          locale,
          country,
        },
        {
          pageType: pageType as MenuOpenedProperties['pageType'],
          eventLabel: getSegmentHeaderTypeByCMSHeaderType(headerType),
          eventCategory: 'global_interactions',
          eventLocation: 'header',
          url,
          locationId,
        },
      );

      trackEvent({
        ga: {
          eventCategory: 'Global_Interactions',
          eventAction: 'Opened_Menu',
          eventLabel: headerTrackingValue,
        },
        segment: {
          event: 'menuOpened',
          properties: segmentProperties,
        },
      });
    })();
    setMenuOpen(!menuOpen);
  }, [country, headerTrackingValue, headerType, locale, menuOpen, pageType, setMenuOpen]);

  return (
    <button className={styles.header__btn} onClick={handleMenuClick}>
      {children}
    </button>
  );
}
