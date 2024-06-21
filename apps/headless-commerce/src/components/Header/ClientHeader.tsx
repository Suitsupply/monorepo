'use client';

import { customer } from '@headless-commerce/contexts/customer';
import { useHeader } from '@headless-commerce/contexts/header/client';
import { HeaderProvider } from '@headless-commerce/contexts/header/Provider';
import type { CMSHeaderType } from '@headless-commerce/contexts/header/types';
import log from '@headless-commerce/utils/log';
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
  log.trace({
    method: 'ClientHeaderWrapper',
    headerType,
    customer: customer.value,
  });

  return (
    <HeaderProvider>
      <ClientHeader headerType={headerType}>{children}</ClientHeader>
    </HeaderProvider>
  );
}
