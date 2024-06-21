import { DEFAULT_SITE_ID } from '@headless-commerce/config/config';
import { Authentication } from '@headless-commerce/libs/sfcc/Authentication';
import { addAuthCookies } from '@headless-commerce/libs/sfcc/authForApi';
import { cookiesAsRecord } from '@headless-commerce/utils/cookies/api';
import { ensureDecodedValues } from '@headless-commerce/utils/cookies/setCookieParser';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const siteId = request.headers.get('x-site-id') ?? DEFAULT_SITE_ID;
  const clientIp = request.headers.get('true-client-ip') ?? undefined;
  const auth = new Authentication({ cookies: cookiesAsRecord(request.cookies), siteId, clientIp });

  await auth.refreshToken();

  let response = NextResponse.json(
    {
      done: true,
    },
    {
      status: 200,
    },
  );

  addAuthCookies(response.cookies, auth, siteId);

  const responseCookies = response.headers.get('set-cookie') ?? '';

  const setCookieValue = ensureDecodedValues(responseCookies, ['dwsid']);

  response = new NextResponse(response.body, {
    status: 200,
    headers: new Headers({
      ...response.headers,
      'set-cookie': setCookieValue,
    }),
  });

  return response;
}
