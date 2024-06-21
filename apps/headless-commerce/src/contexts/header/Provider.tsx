'use client';

import type { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import type { LogoColor, SegmentEvent } from './client';
import { HeaderContext } from './client';
import { CMSHeaderType } from './types';

type HeaderProviderProps = {
  children?: ReactNode;
};

const _distance = 60;
let _lastPosition = 0;
let _headerHeight: number;
let _headerType: CMSHeaderType;
let headerTrackingValue: string = 'transparent';

const positionHeader = ({
  setIsHeaderVisible,
  isHeaderTransparent,
  setIsHeaderTransparent,
}: {
  setIsHeaderVisible: Dispatch<SetStateAction<boolean>>;
  setIsHeaderTransparent: Dispatch<SetStateAction<boolean>>;
  isHeaderTransparent: boolean;
}) => {
  const canScroll = window?.innerHeight < document?.documentElement.scrollHeight;
  const pageYOffset = window?.pageYOffset;
  let isVisible;
  let isTransparent = isHeaderTransparent;
  headerTrackingValue = _headerType;

  if (canScroll) {
    // Is on scroll top
    if (pageYOffset <= _headerHeight + _distance) {
      isVisible = true;
      isTransparent = true;
      headerTrackingValue = 'transparent';
    } else {
      isTransparent = false;
      headerTrackingValue = 'white';
    }

    // Make room for measuring
    if (Math.abs(_lastPosition - pageYOffset) <= _distance) {
      return;
    }

    // If scrolling up
    isVisible = pageYOffset < _lastPosition;
  } else {
    isVisible = true;
  }

  _lastPosition = pageYOffset;

  // Checking if pageYOffset is negative, since there is issue with iPhone's overscroll when scrolling further top than top of the page.
  setIsHeaderVisible(pageYOffset < 0 ? true : isVisible);
  setIsHeaderTransparent(isTransparent);
};

export const HeaderProvider = ({ children }: HeaderProviderProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [isHeaderTransparent, setIsHeaderTransparent] = useState<boolean>(true);
  const [logoColor, setLogoColor] = useState<LogoColor>('dark');
  const [headerRef, setHeaderRef] = useState<RefObject<HTMLElement> | null>(null);

  const setPosition = useCallback(() => {
    positionHeader({ setIsHeaderVisible, setIsHeaderTransparent, isHeaderTransparent });
  }, [isHeaderTransparent, setIsHeaderTransparent, setIsHeaderVisible]);

  const segmentEventLabel = useMemo<SegmentEvent>(
    () => (isHeaderTransparent ? 'transparent' : 'white'),
    [isHeaderTransparent],
  );

  useEffect(() => {
    if (!headerRef?.current) {
      return;
    }

    _headerHeight = headerRef.current.getBoundingClientRect().height;
    setPosition();
    window?.addEventListener('scroll', setPosition);

    return () => window?.removeEventListener('scroll', setPosition);
  }, [headerRef, isHeaderTransparent, setPosition]);

  const setHeaderValues = (headerType: CMSHeaderType) => {
    _headerType = headerType;
    initializeHeader(setLogoColor, setIsHeaderTransparent);
  };

  return (
    <HeaderContext.Provider
      value={useMemo(
        () => ({
          setMenuOpen,
          menuOpen,
          setHeaderRef,
          setHeaderValues,
          isHeaderTransparent,
          isHeaderVisible,
          logoColor,
          headerType: _headerType,
          headerTrackingValue,
          segmentEventLabel,
        }),
        [isHeaderTransparent, isHeaderVisible, logoColor, menuOpen, segmentEventLabel],
      )}
    >
      {children}
    </HeaderContext.Provider>
  );
};

/**
 * Function used only for initializing header on page load.
 * @param setLogoColor - setting logo color
 */
function initializeHeader(
  setLogoColor: Dispatch<SetStateAction<LogoColor>>,
  setIsHeaderTransparent: (value: boolean) => void,
) {
  if (_headerType === CMSHeaderType.HEADER_IS_NOT_TRANSPARENT) {
    setLogoColor('dark');
    setIsHeaderTransparent(false);
    headerTrackingValue = 'white';
  } else if (_headerType === CMSHeaderType.HEADER_IS_TRANSPARENT) {
    setLogoColor('light');
    setIsHeaderTransparent(true);
    headerTrackingValue = 'transparent';
  } else if (_headerType === CMSHeaderType.HEADER_IS_TRANSPARENT_BLACK) {
    setIsHeaderTransparent(true);
    setLogoColor('dark');
  }
}
