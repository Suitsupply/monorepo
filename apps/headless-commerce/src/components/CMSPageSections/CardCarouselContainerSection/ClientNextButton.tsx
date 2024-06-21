'use client';

import Icon from '@headless-commerce/components/Icon/Icon';
import type { ReactNode } from 'react';

import styles from './CardCarouselContainerSection.module.scss';

export type ClientNextButtonProps = {
  children?: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ClientNextButton({ children, ...restProps }: ClientNextButtonProps) {
  return (
    <button
      className={`${styles['card-carousel__arrow']} ${styles['card-carousel__arrow--next']}`}
      type="button"
      {...restProps}
    >
      <div className={styles.icon}>
        <Icon icon="arrow_right" />
      </div>
      {children}
    </button>
  );
}
