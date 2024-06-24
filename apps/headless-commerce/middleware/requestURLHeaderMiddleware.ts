import type { Middleware } from '@susu/headless-commerce/utils/middleware';

export const requestURLHeaderMiddleware =
  (): Middleware =>
  async ({ request, response }, next) => {
    const urlString = request.nextUrl.toString();

    response.headers.set('x-url', urlString);

    return await next({
      request,
      response,
    });
  };
