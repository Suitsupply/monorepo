import type { Middleware } from '@susu/headless-commerce/utils/middleware';
import { pathnameWithoutLocalePrefix } from '@susu/headless-commerce/utils/pathname';
import { NextResponse } from 'next/server';

export const trailingSlashResponseMiddleware =
  (): Middleware =>
  async ({ request, response }, next) => {
    const { pathname } = request.nextUrl;
    const withoutLocale = pathnameWithoutLocalePrefix(pathname);

    if (withoutLocale === '') {
      const newURL = new URL(request.nextUrl.toString());
      newURL.pathname = `${newURL.pathname}/`;

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
