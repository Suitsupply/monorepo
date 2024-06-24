import type {
  AuthorizationResponse,
  OCAPICustomerResponse,
  SLASAuthType,
  TokenResponse,
} from '@susu/headless-commerce/types/SlasAuth';
import { ocapiShopAPIBaseUrl } from '@susu/headless-commerce/utils/configuration/ocapi';
import { scapiHostname } from '@susu/headless-commerce/utils/configuration/scapi';
import { v4 as uuidv4 } from 'uuid';

import { generateChallenge, generateCodeVerifier } from './codeVerifier';
import { CONTENT_TYPE_POST_FORM_URL_ENCODED } from './constants';
import { generateUrlEncodedFormBodyFromObject, parseDwsidCookieValueFromFetchResponse } from './utils';

export type ScapiParams = {
  clientId: string;
  organizationId: string;
  shortCode: string;
  callbackUrl: string;
};

const NETWORK_FAIL_ERROR = 'Network request failed';
const scapiBaseUrl = scapiHostname;

export type GetScapiAuthorizeParams = {
  organizationId: string;
  clientId: string;
  callbackUrl: string;
  customerType: SLASAuthType;
};
export const getScapiAuthorize = async ({
  organizationId,
  clientId,
  callbackUrl,
  customerType,
}: GetScapiAuthorizeParams): Promise<AuthorizationResponse> => {
  const codeVerifier = await generateCodeVerifier();
  const codeChallenge = await generateChallenge(codeVerifier);
  const isRegistered = customerType === 'registered';
  const hint = isRegistered ? 'sb-user' : 'sb-guest';
  const url = `${scapiBaseUrl}/shopper/auth/v1/organizations/${organizationId}/oauth2/authorize?redirect_uri=${callbackUrl}&response_type=code&client_id=${clientId}&hint=${hint}&code_challenge=${codeChallenge}`;

  const response = await fetch(url, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'correlation-id': uuidv4(),
    },
    redirect: 'manual',
  });

  if (response.status >= 400) {
    throw new Error('Authorize request failed');
  }

  let location = response.headers.get('Location');
  let queryParams = location?.split('?')[1];
  let queryPairs = queryParams?.split('&');

  let authorization: any = {};

  queryPairs?.forEach(function (pair: string) {
    let parts = pair.split('=');
    let key = parts[0];
    let value = parts.length > 1 ? parts[1] : null;
    authorization[key] = value;
  });

  if (authorization.error || !authorization.usid || !authorization.code) {
    throw new Error('Failed to retrieve authorization code');
  }

  authorization.codeVerifier = codeVerifier;

  return authorization;
};

export type SlasSessionBridgeFromDwsidParams = {
  authorizationResponse: AuthorizationResponse;
  clientId: string;
  dwsid: string;
  isRegistered: boolean;
  loginId?: string;
  organizationId: string;
  siteId: string;
};
export const slasSessionBridgeFromDwsid = async ({
  authorizationResponse,
  clientId,
  dwsid,
  isRegistered,
  loginId,
  organizationId,
  siteId,
}: SlasSessionBridgeFromDwsidParams): Promise<TokenResponse> => {
  const url = `${scapiBaseUrl}/shopper/auth/v1/organizations/${organizationId}/oauth2/session-bridge/token`;

  let params = {
    client_id: clientId,
    channel_id: siteId,
    code_verifier: authorizationResponse.codeVerifier,
    code: authorizationResponse.code,
    usid: authorizationResponse.usid,
    grant_type: 'session_bridge',
    dwsid,
    login_id: isRegistered && loginId ? loginId : 'guest',
  };

  const body = generateUrlEncodedFormBodyFromObject(params);
  const response = await fetch(url, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': CONTENT_TYPE_POST_FORM_URL_ENCODED,
      'correlation-id': uuidv4(),
    },
    body: body,
  });

  if (response.status >= 400) {
    throw new Error(NETWORK_FAIL_ERROR);
  }

  const responseJson = await response.json();

  if (responseJson.status_code && parseInt(responseJson.status_code, 10) >= 400) {
    throw new Error(NETWORK_FAIL_ERROR);
  }

  return responseJson;
};

export type GetScapiTokenParams = {
  authorizationResponse: AuthorizationResponse;
  organizationId: string;
  clientId: string;
  callbackUrl: string;
  siteId: string;
};
export const getScapiToken = async ({
  authorizationResponse,
  callbackUrl,
  clientId,
  organizationId,
  siteId,
}: GetScapiTokenParams): Promise<TokenResponse> => {
  const url = `${scapiBaseUrl}/shopper/auth/v1/organizations/${organizationId}/oauth2/token`;

  let params = {
    client_id: clientId,
    channel_id: siteId,
    redirect_uri: callbackUrl,
    grant_type: 'authorization_code_pkce',
    code_verifier: authorizationResponse.codeVerifier,
    code: authorizationResponse.code,
    usid: authorizationResponse.usid,
  };
  const body = generateUrlEncodedFormBodyFromObject(params);

  const response = await fetch(url, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': CONTENT_TYPE_POST_FORM_URL_ENCODED,
      'correlation-id': uuidv4(),
    },
    redirect: 'manual',
    body: body,
  });

  if (response.status >= 400) {
    throw new Error(NETWORK_FAIL_ERROR);
  }

  return await response.json();
};

export type GetOcapiCustomerFromDwsidParams = {
  siteId: string;
  clientId: string;
  dwsid: string;
};
export const getOcapiCustomerFromDwsid = async ({
  siteId,
  clientId,
  dwsid,
}: GetOcapiCustomerFromDwsidParams): Promise<OCAPICustomerResponse> => {
  const url = `${ocapiShopAPIBaseUrl(siteId)}/customers/auth`;
  const headers = new Headers({
    'Content-Type': 'application/json',
    'X-Dw-Client-Id': clientId,
    'Cookie': 'dwsid=' + dwsid,
    'correlation-id': uuidv4(),
  });

  const response = await fetch(url, {
    method: 'POST',
    cache: 'no-cache',
    headers: headers,
    body: JSON.stringify({ type: 'session' }),
  });

  if (response.status >= 400) {
    throw new Error(NETWORK_FAIL_ERROR);
  }

  const responseJson = await response.json();

  if (responseJson.status_code && parseInt(responseJson.status_code, 10) >= 400) {
    throw new Error(NETWORK_FAIL_ERROR);
  }

  return responseJson;
};

export type OcapiSessionBridgeFromTokenParams = {
  authToken: string;
  siteId: string;
  clientId: string;
  clientIp?: string;
};
export const ocapiSessionBridgeFromToken = async ({
  authToken,
  siteId,
  clientId,
  clientIp,
}: OcapiSessionBridgeFromTokenParams): Promise<{ dwsid: string | null; anonymous: string | null }> => {
  const url = `${ocapiShopAPIBaseUrl(siteId)}/sessions`;
  const headers: Record<string, string> = {
    'Authorization': `${authToken}`,
    'X-Dw-Client-Id': clientId,
    'correlation-id': uuidv4(),
  };

  if (clientIp) {
    headers['Suits-Client-IP'] = clientIp;
  }

  const response = await fetch(url, {
    method: 'POST',
    cache: 'no-cache',
    headers,
  });

  if (!response.ok || response.status >= 400) {
    throw new Error(NETWORK_FAIL_ERROR);
  }

  return parseDwsidCookieValueFromFetchResponse(response);
};

export type SlasRefreshTokenParams = {
  clientId: string;
  organizationId: string;
  refreshToken: string;
  callbackUrl: string;
  siteId: string;
};
export const slasRefreshToken = async ({
  clientId,
  organizationId,
  refreshToken,
  callbackUrl,
  siteId,
}: SlasRefreshTokenParams): Promise<TokenResponse> => {
  const url = `${scapiBaseUrl}/shopper/auth/v1/organizations/${organizationId}/oauth2/token`;

  let params = {
    client_id: clientId,
    channel_id: siteId,
    refresh_token: refreshToken,
    grant_type: 'refresh_token',
    redirect_uri: callbackUrl,
  };

  const body = generateUrlEncodedFormBodyFromObject(params);

  const response = await fetch(url, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': CONTENT_TYPE_POST_FORM_URL_ENCODED,
      'correlation-id': uuidv4(),
    },
    body: body,
  });

  if (response.status >= 400) {
    throw new Error(NETWORK_FAIL_ERROR);
  }

  return response.json();
};
