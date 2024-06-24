'use client';

import { breakpoints } from '@susu/headless-commerce/config/config';
import { observeOnce } from '@susu/headless-commerce/utils/interserctionObserver';
import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';

import styles from './TextAndImageRowBannerSection.module.scss';

export type DynamicMediaProps = {
  children?: ReactNode;
};

const animatedClassName = 'halfcanvas-animation--animated';

export default function ClientDynamicMedia({ children }: Readonly<DynamicMediaProps>) {
  const dynamicMediaWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dynamicMediaWrapperRef?.current) {
      return;
    }

    const element = dynamicMediaWrapperRef.current;
    element.classList.add(animatedClassName);

    const { lg } = breakpoints;
    if (window?.matchMedia(`(max-width: ${lg}px)`).matches) {
      element.classList.remove(animatedClassName);
      observeOnce(dynamicMediaWrapperRef, () => {
        element.classList.add(animatedClassName);
      });
    }

    const handleMouseEnter = () => element.classList.remove(animatedClassName);
    const handleMouseLeave = () => element.classList.add(animatedClassName);

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [dynamicMediaWrapperRef]);

  return (
    <div className={styles['halfcanvas-animation']} ref={dynamicMediaWrapperRef}>
      {children}
    </div>
  );
}
