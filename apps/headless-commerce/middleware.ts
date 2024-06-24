import { localeCheckMiddleware } from '@susu/headless-commerce/middleware/localeCheckMiddleware';
import { pathCheckMiddleware } from '@susu/headless-commerce/middleware/pathCheckMiddleware';
import { requestURLHeaderMiddleware } from '@susu/headless-commerce/middleware/requestURLHeaderMiddleware';
import { trailingSlashResponseMiddleware } from '@susu/headless-commerce/middleware/trailingSlashResponseMiddleware';
import { applyMiddleware } from '@susu/headless-commerce/utils/middleware';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest): Promise<NextResponse> {
  return (
    await applyMiddleware(
      [
        pathCheckMiddleware(),
        localeCheckMiddleware(),
        trailingSlashResponseMiddleware(),
        requestURLHeaderMiddleware(),
        // responseCookiesMiddleware(),
      ],
      {
        request,
        response: NextResponse.next({ request }),
      },
    )
  ).response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // // Skip all API routes
    // '/((?!api).*)',
    // // Skip all public files
    // '/(.*)\\.(.*)$',
  ],
};
