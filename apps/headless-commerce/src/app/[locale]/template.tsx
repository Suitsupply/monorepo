'use client';

import { useResizeObserver } from '@headless-commerce/hooks/useResizeObserver';
import type { ReactNode } from 'react';
import { useLayoutEffect } from 'react';

const setScreenHeightValues = () => {
  const root = window?.document?.documentElement;

  // Need to calculate height like this, its a fix for iphone - its changing height dynamically - known issue.
  root.style.setProperty('--screen-inner-height', `${window?.innerHeight}px`);
  root.style.setProperty('--screen-outer-height', `${window?.outerHeight}px`);
};

export type RootTemplateProps = {
  children: ReactNode;
};

export default function LocaleTemplate({ children }: RootTemplateProps) {
  useResizeObserver(setScreenHeightValues);
  useLayoutEffect(setScreenHeightValues, []);
  return children;
}
