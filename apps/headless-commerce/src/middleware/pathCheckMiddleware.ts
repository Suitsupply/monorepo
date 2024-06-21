import type { Middleware } from '@headless-commerce/utils/middleware';

const PUBLIC_FILE = /\.(.*)$/;

export const pathCheckMiddleware =
  (): Middleware =>
  async ({ request, response }, next) => {
    if (
      // request.nextUrl.pathname.startsWith('/_next') ||
      request.nextUrl.pathname.includes('/api/') ||
      PUBLIC_FILE.test(request.nextUrl.pathname)
    ) {
      return {
        request,
        response,
      };
    }

    return await next({
      request,
      response,
    });
  };
