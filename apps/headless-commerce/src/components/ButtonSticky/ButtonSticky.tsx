import type { StickyButton } from '@headless-commerce/gql/generated/graphql';
import type { PageType } from '@headless-commerce/types/PageType';
import { scrollDebounce } from '@headless-commerce/utils/scrollUtils';
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';

import { ClientContentButton } from '../ContentButton/ClientContentButton';
import styles from './ButtonSticky.module.scss';

export type ButtonStickyProps = {
  buttonData: Partial<StickyButton>;
  buttonClass: string;
  onClick: () => void;
  pageType: PageType;
  automationPageId: string;
};

export const ButtonSticky = forwardRef(function ButtonSticky({
  buttonClass,
  buttonData,
  onClick,
  pageType,
  automationPageId,
}: ButtonStickyProps) {
  const { stickyOnDesktop, stickyOnMobile, stickyOnTablet } = buttonData || {};

  const [fixed, setFixed] = useState(true);
  const stickyButtonPositionRef = useRef<HTMLDivElement>(null);
  const stickyButtonRef = useRef<HTMLDivElement>(null);

  const stickyDesktopClass =
    fixed && stickyOnDesktop === 'yes' ? styles[`sticky-button__desktop-${stickyOnDesktop}`] : '';
  const stickyTabletClass = fixed && stickyOnTablet === 'yes' ? styles[`sticky-button__tablet-${stickyOnTablet}`] : '';
  const stickyMobileClass = fixed && stickyOnMobile === 'yes' ? styles[`sticky-button__mobile-${stickyOnMobile}`] : '';

  const percentageVisible = useCallback(() => {
    if (!stickyButtonPositionRef.current || !stickyButtonRef.current) {
      return 0;
    }

    const viewportHeight = window?.innerHeight;
    const { height, top } = stickyButtonPositionRef.current.getBoundingClientRect();

    const percentage = Math.round(((viewportHeight - top - stickyButtonRef.current.clientHeight - 12) * 100) / height);

    return Math.max(0, Math.min(100, percentage));
  }, [stickyButtonPositionRef]);

  useEffect(() => {
    scrollDebounce('button_scroll', () => {
      const visible = percentageVisible();
      setFixed(visible !== 100);
    });
  }, [percentageVisible]);

  const fixedClass = fixed ? styles['sticky-button__fixed'] : '';
  const buttonClassNames = `${styles['sticky-button']} ${fixedClass} ${stickyDesktopClass} 
        ${stickyTabletClass} ${stickyMobileClass}`;

  const stickyWrapperDesktopClass =
    fixed && stickyOnDesktop === 'yes' ? styles['sticky-button__wrapper__desktop-yes'] : '';
  const stickyWrapperTabletClass =
    fixed && stickyOnTablet === 'yes' ? styles['sticky-button__wrapper__tablet-yes'] : '';
  const stickyWrapperMobileClass =
    fixed && stickyOnMobile === 'yes' ? styles['sticky-button__wrapper__mobile-yes'] : '';

  return (
    <div ref={stickyButtonPositionRef}>
      <div
        className={`${
          fixed ? styles['sticky-button__wrapper'] : ''
        } ${stickyWrapperDesktopClass} ${stickyWrapperTabletClass} ${stickyWrapperMobileClass}`}
      >
        <div ref={stickyButtonRef} className={buttonClassNames}>
          <ClientContentButton
            buttonClass={buttonClass}
            buttonData={buttonData}
            onClick={onClick}
            pageType={pageType}
            automationPageId={`${automationPageId}_sticky-button`}
          />
        </div>
      </div>
    </div>
  );
});
