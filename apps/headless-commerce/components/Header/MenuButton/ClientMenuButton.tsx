'use client';

import { useHeader } from '@susu/headless-commerce/contexts/header/client';
import { trackEvent } from '@susu/headless-commerce/utils/tracking/tracking';
import type { ReactNode } from 'react';
import { useCallback } from 'react';

import styles from '../Header.module.scss';

export type ClientMenuButtonProps = {
  children?: ReactNode;
};

export default function ClientMenuButton({ children }: ClientMenuButtonProps) {
  const { setMenuOpen, menuOpen, headerTrackingValue } = useHeader();
  const handleMenuClick = useCallback(() => {
    trackEvent({
      ga: {
        eventCategory: 'Global_Interactions',
        eventAction: 'Opened_Menu',
        eventLabel: headerTrackingValue,
      },
    });
    setMenuOpen(!menuOpen);
  }, [headerTrackingValue, menuOpen, setMenuOpen]);

  return (
    <button className={styles.header__btn} onClick={handleMenuClick}>
      {children}
    </button>
  );
}
