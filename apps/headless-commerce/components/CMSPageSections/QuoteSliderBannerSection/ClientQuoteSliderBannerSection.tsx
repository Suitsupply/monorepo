'use client';

import log from '@susu/headless-commerce/utils/log';
import { type ReactNode, useEffect } from 'react';

export type ClientQuoteSliderBannerSectionProps = {
  children?: ReactNode;
};

export default function ClientQuoteSliderBannerSection({ children }: Readonly<ClientQuoteSliderBannerSectionProps>) {
  useEffect(() => {
    import('@suits/ss-design-system/dist/components/ss-carousel')
      .then(({ defineCustomElement }) => defineCustomElement())
      .catch(log.error);
  });

  return <>{children}</>;
}
