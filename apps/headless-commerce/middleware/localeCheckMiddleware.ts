import { DEFAULT_LOCALE } from '@susu/headless-commerce/config/config';
import type { Locale } from '@susu/headless-commerce/config/locale';
import { LAST_VISITED_LOCALE } from '@susu/headless-commerce/constants/cookie';
import { convertCookieFormatToLocale } from '@susu/headless-commerce/utils/localeUtils';
import type { Middleware } from '@susu/headless-commerce/utils/middleware';
import {
  pathnameStartsWithLocale,
  pathnameStartsWithSupportedLocale,
  pathnameWithoutLocalePrefix,
} from '@susu/headless-commerce/utils/pathname';
import { NextResponse } from 'next/server';

export const localeCheckMiddleware =
  (): Middleware =>
  async ({ request, response }, next) => {
    const { pathname } = request.nextUrl;

    const startsWithLocale = pathnameStartsWithLocale(pathname);

    let localeString = request.cookies.get(LAST_VISITED_LOCALE)?.value;
    let locale: Locale;
    if (typeof localeString === 'string') {
      locale = convertCookieFormatToLocale(localeString);
    } else {
      locale = DEFAULT_LOCALE;
    }

    if (!startsWithLocale) {
      const newURL = new URL(request.nextUrl.toString());
      newURL.pathname = `/${locale}${pathname}`;

      return {
        request,
        response: NextResponse.redirect(newURL, 301),
      };
    }

    const startsWithSupportedLocale = pathnameStartsWithSupportedLocale(pathname);

    if (!startsWithSupportedLocale) {
      const newURL = new URL(request.nextUrl.toString());

      if (startsWithLocale) {
        const withoutLocale = pathnameWithoutLocalePrefix(pathname);
        newURL.pathname = `/${locale}${withoutLocale}`;
      } else {
        newURL.pathname = `/${locale}${pathname}`;
      }

      return {
        request,
        response: NextResponse.redirect(newURL, 301),
      };
    }

    return await next({
      request,
      response,
    });
  };
