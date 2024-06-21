'use client';

import type { ReactNode } from 'react';

import styles from './HeroBannerBlock.module.scss';
import { useHeroBanner, useHeroBannerContext } from './useHeroBanner';

export type ClientHeroBannerTextWrapperProps = {
  children?: ReactNode;
  colorPalette?: string;
};

export default function ClientHeroBannerTextWrapper({ children, colorPalette }: ClientHeroBannerTextWrapperProps) {
  const { textWrapperRef } = useHeroBannerContext();
  const { isTopScrolled, isBottomScrolled } = useHeroBanner();

  const colorPaletteClass = styles[`banner__text--${colorPalette}`];

  return (
    <div
      className={`${styles['banner__text']} ${colorPaletteClass} ${
        isTopScrolled ? styles['banner__text--top-scrolled'] : ''
      } ${isBottomScrolled ? styles['banner__text--bottom-scrolled'] : ''}`}
      ref={textWrapperRef}
    >
      {children}
    </div>
  );
}
