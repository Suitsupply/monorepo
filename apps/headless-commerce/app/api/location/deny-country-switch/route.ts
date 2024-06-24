import { COUNTRYSWITCH_ACTION_STAY } from '@susu/headless-commerce/constants/cookie';
import { convertCookieFormatToLocale, convertLocaleToCookieFormat } from '@susu/headless-commerce/utils/localeUtils';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export type RequestBody = {
  cookieCountryCode: string;
  localeCountryCode: string;
  unsupported?: boolean;
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

    // If the country is not supported, just set the cookie and don't parse the country codes.
    // TODO: Is this the correct way to handle this?
    if (parsedBody.unsupported === true) {
      response.cookies.set(
        `${COUNTRYSWITCH_ACTION_STAY}-${parsedBody.cookieCountryCode}-${parsedBody.localeCountryCode}`,
        'true',
        {
          expires: new Date(Date.now() + 3600 * 1000 * 24 * 365 * 10),
        },
      );

      return response;
    }

    const cookieLocale = convertCookieFormatToLocale(parsedBody.cookieCountryCode);

    const localeCountryCodeLocale = convertCookieFormatToLocale(parsedBody.localeCountryCode);

    response.cookies.set(
      `${COUNTRYSWITCH_ACTION_STAY}-${convertLocaleToCookieFormat(cookieLocale)}-${convertLocaleToCookieFormat(
        localeCountryCodeLocale,
      )}`,
      'true',
      {
        expires: new Date(Date.now() + 3600 * 1000 * 24 * 365 * 10),
      },
    );

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
