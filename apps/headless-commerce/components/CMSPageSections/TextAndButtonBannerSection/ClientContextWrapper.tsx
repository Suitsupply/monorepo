'use client';

import type { ReactNode } from 'react';

import { TextAndButtonBannerContext, useTextAndButtonBannerContext } from './contexts/textAndButtonBanner';

export type ClientContextWrapperProps = {
  children?: ReactNode;
};

export default function ContextWrapper({ children }: ClientContextWrapperProps) {
  const value = useTextAndButtonBannerContext();

  return <TextAndButtonBannerContext.Provider value={value}>{children}</TextAndButtonBannerContext.Provider>;
}
