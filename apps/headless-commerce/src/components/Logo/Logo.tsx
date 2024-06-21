import type { LogoColor } from '@headless-commerce/contexts/header/client';
import { forwardRef, memo } from 'react';

import styles from './Logo.module.scss';

interface LogoProps {
  variation: LogoColor;
}

/* eslint-disable react/display-name */
export const Logo = memo(
  forwardRef<HTMLDivElement, LogoProps>(({ variation }, logoRef) => {
    const logoURL =
      variation === 'dark'
        ? 'https://cdn.suitsupply.com/image/upload/suitsupply/assets/ss23/svg-icons/suitsupply-logo.svg'
        : 'https://cdn.suitsupply.com/image/upload/suitsupply/assets/ss23/svg-icons/suitsupply-logo-white.svg';

    return (
      <div className={styles.logo} ref={logoRef}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles[`logo__img`]} src={logoURL} alt="Suitsupply" fetchPriority="high" />
      </div>
    );
  }),
);
