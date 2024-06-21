import type { PageType } from '@headless-commerce/types/PageType';
import { pathnameWithoutLocalePrefix } from '@headless-commerce/utils/pathname';
import { usePathname } from 'next/navigation';

export const pageTypeMap: Record<string, PageType> = {
  '/': 'home',
  '/journal': 'journal',
  '/journal/the-perennial-suit': 'journal',
  '/men/black-tie-package/mix-match-tuxedo': 'black-tie-configurator',
};

export const usePageType = (): PageType => {
  const pathname = pathnameWithoutLocalePrefix(usePathname());

  if (pathname.startsWith('/journal')) {
    return 'journal';
  }

  if (pathname.startsWith('/men/black-tie-package/mix-match-tuxedo')) {
    return 'black-tie-configurator';
  }

  if (pathname === '/') {
    return 'home';
  }

  return 'home';
};
