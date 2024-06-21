import { disableScroll, enableScroll } from '@headless-commerce/utils/scrollUtils';
import classNames from 'classnames';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import Icon from '../Icon/Icon';
import { useSideSlider } from './contexts/ClientSideSliderContext';
import styles from './SideSlider.module.scss';

export type SideSliderProps = {
  isOpen: boolean;
  onClose?: () => void;
  slideInFrom: 'left' | 'right';
  hasCloseButton?: boolean;
  fullScreen: 'mobile' | 'always' | 'never';
  children: ReactNode;
};

export default function SideSlider({
  isOpen,
  onClose,
  slideInFrom,
  hasCloseButton,
  fullScreen,
  children,
}: SideSliderProps) {
  const { openSliders, setSliderOpen, setSliderClosed, getSliderZIndex } = useSideSlider();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const isOpenRef = useRef(isOpen);
  const sliderRef = useRef<HTMLDivElement>(null);

  const closeSlider = useCallback(() => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  }, [onClose]);

  const handleClose = useCallback(() => {
    closeSlider();
  }, [closeSlider]);

  const handleOverlayClick = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!(event.key === 'Escape' || event.key === ' ')) {
        return;
      }

      closeSlider();
    },
    [closeSlider],
  );

  useEffect(() => {
    if (isOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen === isOpenRef.current) {
      return;
    }

    isOpenRef.current = isOpen;

    if (isOpen) {
      setSliderOpen(sliderRef);
    } else {
      setTimeout(() => {
        setSliderClosed(sliderRef);
      }, 100);
    }
  }, [isOpen, setSliderOpen, setSliderClosed, sliderRef]);

  useEffect(() => {
    if (isMounted) {
      return;
    }
    setIsMounted(true);
  }, [isMounted]);

  const sideSliderOverlayClasses = classNames(
    styles['side-slider__overlay'],
    styles[`side-slider__overlay-${isOpen ? 'open' : 'closed'}`],
  );

  const overlayStyle = useMemo(
    () => ({
      zIndex: getSliderZIndex(sliderRef),
    }),
    [getSliderZIndex],
  );

  const sliderStyle = useMemo(
    () => ({
      zIndex: getSliderZIndex(sliderRef) + openSliders.length,
    }),
    [getSliderZIndex, openSliders.length],
  );

  const overlay = isOpen ? (
    <div
      className={sideSliderOverlayClasses}
      style={overlayStyle}
      onClick={handleClose}
      onKeyDown={handleOverlayClick}
      role="button"
      tabIndex={0}
    />
  ) : null;

  const sideSliderClasses = classNames(
    styles['side-slider'],
    styles[`side-slider--direction-${slideInFrom}`],
    styles[`side-slider--fullscreen-${fullScreen}`],
    {
      [styles['side-slider--open']]: isOpen,
    },
  );

  const slider = (
    <div ref={sliderRef}>
      <div className={sideSliderClasses} style={sliderStyle}>
        {hasCloseButton ? (
          <button className={styles['side-slider__close-button']} type="button" onClick={handleClose}>
            <Icon icon={'close'} />
          </button>
        ) : null}
        {children}
      </div>
      {overlay}
    </div>
  );

  if (isMounted) {
    return <>{createPortal(slider, document.body)}</>;
  }

  return null;
}
