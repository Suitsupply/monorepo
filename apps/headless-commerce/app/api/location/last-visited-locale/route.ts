import { LAST_VISITED_LOCALE } from '@susu/headless-commerce/constants/cookie';
import { convertCookieFormatToLocale, convertLocaleToCookieFormat } from '@susu/headless-commerce/utils/localeUtils';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export type RequestBody = {
  cookieCountryCode: string;
};

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    let parsedBody: RequestBody;
    try {
      parsedBody = await request.json();
    } catch (error: unknown) {
      throw new Error('Invalid body');
    }

    if (!parsedBody.cookieCountryCode) {
      throw new Error('No cookieCountryCode provided');
    }

    const response = NextResponse.json(
      {},
      {
        status: 200,
      },
    );

    const cookieLocale = convertCookieFormatToLocale(parsedBody.cookieCountryCode);

    response.cookies.set(LAST_VISITED_LOCALE, convertLocaleToCookieFormat(cookieLocale));

    return response;
  } catch (error: unknown) {
    return NextResponse.json(
      {
        error: (error as Error).message,
      },
      {
        status: 400,
      },
    );
  }
}
