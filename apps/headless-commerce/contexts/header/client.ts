import type { Dispatch, RefObject, SetStateAction } from 'react';
import { createContext, useContext } from 'react';

import { CMSHeaderType } from './types';

export type SegmentEvent = 'transparent' | 'white';
export type LogoColor = 'dark' | 'light';
export type HeaderContextType = {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  menuOpen: boolean;
  setHeaderRef: (ref: RefObject<HTMLElement>) => void;
  setHeaderValues: (type: CMSHeaderType) => void;
  logoColor: LogoColor;
  isHeaderTransparent: boolean;
  isHeaderVisible: boolean;
  headerType: CMSHeaderType;
  headerTrackingValue: string;
  segmentEventLabel: SegmentEvent;
};

export const HeaderContext = createContext<HeaderContextType>({
  setMenuOpen: () => false,
  menuOpen: false,
  setHeaderRef: () => {},
  setHeaderValues: () => {},
  logoColor: 'light',
  isHeaderTransparent: false,
  isHeaderVisible: true,
  headerType: CMSHeaderType.HEADER_IS_NOT_TRANSPARENT,
  headerTrackingValue: 'transparent',
  segmentEventLabel: 'transparent',
});

export const useHeader = () => {
  return useContext(HeaderContext);
};
