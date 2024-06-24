import { DEFAULT_SITE_ID } from '@susu/headless-commerce/config/config';
import type { AllowedLocaleCountry } from '@susu/headless-commerce/config/locale';
import { COUNTRY, LAST_VISITED_LOCALE } from '@susu/headless-commerce/constants/cookie';
import { SUITSUPPLY_CLIENT_COUNTRY } from '@susu/headless-commerce/constants/headers';
import { Authentication } from '@susu/headless-commerce/libs/sfcc/Authentication';
import { addAuthCookies } from '@susu/headless-commerce/libs/sfcc/authForApi';
import { scapiHostname } from '@susu/headless-commerce/utils/configuration/scapi';
import { cookiesAsRecord } from '@susu/headless-commerce/utils/cookies/api';
import { ensureDecodedValues } from '@susu/headless-commerce/utils/cookies/setCookieParser';
import {
  convertLocaleToCookieFormat,
  createLocale,
  getCountryFromLocale,
  isValidCountry,
  isValidLanguage,
} from '@susu/headless-commerce/utils/localeUtils';
import { pathnameLocalePrefix } from '@susu/headless-commerce/utils/pathname';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const organizationId = process.env.SFCC_ORGANIZATIONID;

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const siteId = request.headers.get('x-site-id') ?? DEFAULT_SITE_ID;
  const clientIp = request.headers.get('true-client-ip') ?? undefined;
  const auth = new Authentication({ cookies: cookiesAsRecord(request.cookies), siteId, clientIp });

  let authData = auth.getAuth();
  let userId = undefined;

  if (!authData?.cid || !authData?.authToken) {
    await auth.login();
    authData = auth.getAuth();
  }

  const isRegistered = authData.customerType === 'registered';

  if (isRegistered) {
    const url = `${scapiHostname}/customer/shopper-customers/v1/organizations/${organizationId}/customers/${authData.cid}?siteId=${siteId}`;

    const sfCustomerDataResult = await fetch(url, {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        'Authorization': `Bearer ${authData.authToken}`,
        'correlation-id': uuidv4(),
      },
    });
    const sfCustomerData = await sfCustomerDataResult.json();

    if (sfCustomerData?.c_suitsupplyCustomerNumber) {
      userId = sfCustomerData.c_suitsupplyCustomerNumber;
    }
  }

  let response = NextResponse.json(
    {
      customerId: authData.cid,
      isRegistered,
      userId,
    },
    {
      status: 200,
    },
  );

  addAuthCookies(response.cookies, auth, siteId);

  // Location Cookies
  const pathname = new URL(String(request.headers.get('x-url'))).pathname;
  const localePrefix = pathnameLocalePrefix(pathname);
  const [pathnameLanguage, pathnameCountry] = localePrefix.split('-');
  if (!isValidLanguage(pathnameLanguage) || !isValidCountry(pathnameCountry)) {
    return new NextResponse(null, {
      status: 400,
    });
  }
  const locale = createLocale(pathnameLanguage, pathnameCountry);

  const headerCountry = request.headers.get(SUITSUPPLY_CLIENT_COUNTRY)?.toString() as AllowedLocaleCountry;
  const country = (headerCountry || getCountryFromLocale(locale)).toUpperCase();
  response.cookies.set(LAST_VISITED_LOCALE, convertLocaleToCookieFormat(locale));
  response.cookies.set(COUNTRY, country);

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
