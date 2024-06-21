'use client';

import log from '@headless-commerce/utils/log';
import { useEffect } from 'react';

export type ClientMobileVersionProps = {
  children?: React.ReactNode;
};

export default function ClientMobileVersion({ children }: ClientMobileVersionProps) {
  useEffect(() => {
    import('@suits/ss-design-system/dist/components/ss-accordion')
      .then(({ defineCustomElement }) => defineCustomElement())
      .catch(log.error);

    import('@suits/ss-design-system/dist/components/ss-accordion-item')
      .then(({ defineCustomElement }) => defineCustomElement())
      .catch(log.error);
  });

  return <>{children}</>;
}
