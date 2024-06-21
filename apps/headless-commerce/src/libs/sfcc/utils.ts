import * as jose from 'jose';

/**
 * Compares the token age against the issued and expiry times. If the token's age is
 * within 60 seconds of its valid time (or exceeds it), we consider the token invalid.
 * @function
 * @param {string | uundefined} token - The JWT bearer token to be inspected
 * @returns {boolean}
 */
export const isTokenValid = (token: string | undefined, siteId: string): boolean => {
  const extractSiteId = (isb: string): string => {
    const isbItems = isb.split('::');
    const idItem = isbItems.find(itm => itm.includes('chid'));

    if (idItem) {
      const [, idValue] = idItem.split(':');
      return idValue;
    }

    return '';
  };

  if (!token) {
    return false;
  }

  try {
    const { exp, iat, isb } = jose.decodeJwt(token);
    let validTime = false;

    if (exp && iat) {
      const validTimeSeconds = exp - iat - 60;
      const tokenAgeSeconds = Date.now() / 1000 - iat;

      validTime = validTimeSeconds > tokenAgeSeconds;
    }

    if (validTime) {
      const tokenSiteId = extractSiteId(isb as string);

      return tokenSiteId === siteId;
    }

    return false;
  } catch (error) {
    return false;
  }
};

export const generateUrlEncodedFormBodyFromObject = (params: Record<string, string | number | boolean>): string => {
  return Object.keys(params)
    .map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    })
    .join('&');
};

export const parseDwsidCookieValueFromFetchResponse = (
  res: Response,
): { dwsid: string | null; anonymous: string | null } => {
  const cookie_str = res.headers.get('set-cookie');

  if (cookie_str) {
    const cookieParts = cookie_str.split(';');
    const dwsid =
      cookie_str.substring(cookie_str?.indexOf('dwsid=') + 6, cookie_str.indexOf(';', cookie_str?.indexOf('dwsid='))) ??
      null;
    const anonymous = cookieParts.find(item => item.includes('dwanonymous_')) ?? null;
    const maxAge = cookieParts.find(item => item.includes('Max-Age=')) ?? null;
    const anonymousValue = anonymous && maxAge ? `${anonymous};${maxAge?.split('=')[1]}` : null;

    return { dwsid, anonymous: anonymousValue };
  }
  return { dwsid: null, anonymous: null };
};

export const tokenMaxAge = (expires: { receivedAt?: number; value?: number }) => {
  if (!expires) {
    return undefined;
  }

  const { receivedAt, value } = expires;

  if (!receivedAt || !value) {
    return undefined;
  }

  const ellapsed = Date.now() / 1000 - (receivedAt - 30);
  const isValid = ellapsed < value;

  return isValid ? value - ellapsed : undefined;
};
