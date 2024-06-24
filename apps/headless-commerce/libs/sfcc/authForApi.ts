import { LAST_SITE_ID } from '@susu/headless-commerce/constants/cookie';
import { deleteCookie, setCookie } from '@susu/headless-commerce/utils/cookies/api';
import type { NextResponse } from 'next/server';

import type { Authentication } from './Authentication';
import {
  CID_STORAGE_KEY,
  DEFAULT_SLAS_COOKIE_PARAMETERS,
  DW_SESSION_ID_KEY,
  ENC_USER_ID_STORAGE_KEY,
  REFRESH_TOKEN_GUEST_STORAGE_KEY,
  REFRESH_TOKEN_REGISTERED_STORAGE_KEY,
  TOKEN_STORAGE_KEY,
  USID_STORAGE_KEY,
} from './constants';
import { tokenMaxAge } from './utils';

export const addCustomerCookies = (props: {
  cookies: NextResponse['cookies'];
  cid?: string;
  dwanonymous?: string;
  dwsid?: string;
  encUserId?: string;
  expiresIn:
    | {
        receivedAt: number;
        value: number;
      }
    | undefined;
}): void => {
  const { cookies, cid, dwanonymous, dwsid, encUserId } = props;
  if (cid) {
    setCookie(cookies, CID_STORAGE_KEY, cid, DEFAULT_SLAS_COOKIE_PARAMETERS);
  } else {
    deleteCookie(cookies, CID_STORAGE_KEY);
  }

  if (dwanonymous) {
    const [key, valueAndDate] = dwanonymous.split('=');
    const [value, expires] = valueAndDate.split(';');
    setCookie(cookies, key, value, {
      ...DEFAULT_SLAS_COOKIE_PARAMETERS,
      maxAge: Number(expires),
      sameSite: 'none',
      secure: true,
    });
  }

  if (dwsid) {
    setCookie(cookies, DW_SESSION_ID_KEY, dwsid, {
      secure: true,
      sameSite: 'none',
      httpOnly: true,
      path: '/',
      // @ts-expect-error Type error by Next.js. It should be included.
      encode: String,
    });
  } else {
    deleteCookie(cookies, DW_SESSION_ID_KEY);
  }

  if (encUserId) {
    setCookie(cookies, ENC_USER_ID_STORAGE_KEY, encUserId, DEFAULT_SLAS_COOKIE_PARAMETERS);
  } else {
    deleteCookie(cookies, ENC_USER_ID_STORAGE_KEY);
  }
};

export const addAuthCookies = (cookies: NextResponse['cookies'], auth: Authentication, siteId: string): void => {
  const { authToken, cid, customerType, dwanonymous, dwsid, encUserId, expiresIn, refreshToken, usid } = auth.getAuth();

  addCustomerCookies({ cookies, cid, dwanonymous, dwsid, encUserId, expiresIn });

  if (authToken) {
    setCookie(cookies, TOKEN_STORAGE_KEY, authToken, {
      ...DEFAULT_SLAS_COOKIE_PARAMETERS,
      maxAge: tokenMaxAge(expiresIn as unknown as { receivedAt: number; value: number }),
    });
  } else {
    deleteCookie(cookies, TOKEN_STORAGE_KEY);
  }

  if (refreshToken) {
    let key =
      customerType === 'guest'
        ? `${REFRESH_TOKEN_GUEST_STORAGE_KEY(siteId)}`
        : `${REFRESH_TOKEN_REGISTERED_STORAGE_KEY(siteId)}`;

    setCookie(cookies, key, refreshToken, DEFAULT_SLAS_COOKIE_PARAMETERS);
  } else {
    deleteCookie(cookies, REFRESH_TOKEN_GUEST_STORAGE_KEY(siteId));
    deleteCookie(cookies, REFRESH_TOKEN_REGISTERED_STORAGE_KEY(siteId));
  }

  if (usid) {
    setCookie(cookies, USID_STORAGE_KEY, usid, DEFAULT_SLAS_COOKIE_PARAMETERS);
  } else {
    deleteCookie(cookies, USID_STORAGE_KEY);
  }

  if (siteId) {
    setCookie(cookies, LAST_SITE_ID, siteId, DEFAULT_SLAS_COOKIE_PARAMETERS);
  } else {
    deleteCookie(cookies, LAST_SITE_ID);
  }
};
