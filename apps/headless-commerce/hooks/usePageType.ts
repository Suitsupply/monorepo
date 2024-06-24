import type { PageType } from '@susu/headless-commerce/types/PageType';
import { pathnameWithoutLocalePrefix } from '@susu/headless-commerce/utils/pathname';
import { usePathname } from 'next/navigation';

export const usePageType = (): PageType => (pathnameWithoutLocalePrefix(usePathname()) === '/' ? 'home' : 'journal');
