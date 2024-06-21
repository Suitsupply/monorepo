'use client';

import Icon from '@headless-commerce/components/Icon/Icon';
import type { ReactNode } from 'react';

import styles from './CardCarouselContainerSection.module.scss';

export type ClientPrevButtonProps = {
  children?: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ClientPrevButton({ children, ...restProps }: ClientPrevButtonProps) {
  return (
    <button
      className={`${styles['card-carousel__arrow']} ${styles['card-carousel__arrow--prev']}`}
      type="button"
      {...restProps}
    >
      <div className={styles.icon}>
        <Icon icon="arrow_left" />
      </div>
      {children}
    </button>
  );
}
