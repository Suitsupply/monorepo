'use client';

import { useHeader } from '@susu/headless-commerce/contexts/header/client';
import { HeaderProvider } from '@susu/headless-commerce/contexts/header/Provider';
import type { CMSHeaderType } from '@susu/headless-commerce/contexts/header/types';
import classNames from 'classnames';
import type { ReactNode, RefObject } from 'react';
import { memo, useEffect, useRef } from 'react';

import styles from './Header.module.scss';

export type ClientHeaderProps = {
  headerType: CMSHeaderType;
  children?: ReactNode;
};

const ClientHeader = memo(function ClientHeader({ children, headerType }: Readonly<ClientHeaderProps>) {
  const { isHeaderTransparent, isHeaderVisible, setHeaderRef, logoColor, setHeaderValues } = useHeader();
  const headerRef: RefObject<HTMLElement> = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderRef(headerRef);
    }
  }, [setHeaderRef, headerRef]);

  useEffect(() => {
    setHeaderValues(headerType);
  }, [headerType, setHeaderValues]);

  const headerClasses = classNames(
    styles['header'],
    [styles[`header__color-${isHeaderTransparent ? logoColor : 'dark'}`]],
    {
      [styles['header__transparent']]: isHeaderTransparent,
      [styles['header__hidden']]: !isHeaderVisible,
    },
    'js-header',
  );

  return (
    <header className={headerClasses} ref={headerRef} data-testid="header">
      {children}
    </header>
  );
});

export default function ClientHeaderWrapper({ children, headerType }: Readonly<ClientHeaderProps>) {
  return (
    <HeaderProvider>
      <ClientHeader headerType={headerType}>{children}</ClientHeader>
    </HeaderProvider>
  );
}
