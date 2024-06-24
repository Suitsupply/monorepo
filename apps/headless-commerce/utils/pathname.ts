import { isValidLocale } from './localeUtils';

export const localeRegex = /^(.+)-(.+)$/;

export const pathnameLocalePrefix = (pathname: string): string => pathname.substring(1, 6);

export const pathnameWithoutLocalePrefix = (pathname: string): string => pathname.substring(6);

export const pathnameStartsWithLocale = (pathname: string): boolean =>
  pathname.startsWith('/') && localeRegex.test(pathnameLocalePrefix(pathname));

export const pathnameStartsWithSupportedLocale = (pathname: string): boolean =>
  pathnameStartsWithLocale(pathname) && isValidLocale(pathnameLocalePrefix(pathname));
