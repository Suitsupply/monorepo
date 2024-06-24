'use client';

import type { ReactNode } from 'react';
import { useMemo, useRef } from 'react';

import { HeroBannerContext } from './useHeroBanner';

export type ClientHeroBannerWrapperProps = {
  children?: ReactNode;
};

export default function ClientHeroBannerWrapper({ children }: ClientHeroBannerWrapperProps) {
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);

  const value = useMemo(() => ({ imageWrapperRef, textWrapperRef }), [imageWrapperRef, textWrapperRef]);

  return <HeroBannerContext.Provider value={value}>{children}</HeroBannerContext.Provider>;
}
