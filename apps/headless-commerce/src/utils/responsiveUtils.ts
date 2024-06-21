import { breakpoints } from '@headless-commerce/config/config';

import { isBrowser } from './environment';

const { md, lg } = breakpoints;

export const isMobileScreen = isBrowser() && window.matchMedia(`(max-width: ${md}px)`).matches;

export const isTabletScreen = isBrowser() && window.matchMedia(`(min-width: ${md}px) and (max-width: ${lg})`).matches;

export const isDesktopScreen = isBrowser() && window.matchMedia(`(min-width: ${lg}px)`).matches;
