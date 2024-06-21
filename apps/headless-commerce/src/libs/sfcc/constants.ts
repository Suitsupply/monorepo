export const USID_STORAGE_KEY = 'usid';
export const CID_STORAGE_KEY = 'cid';
export const ENC_USER_ID_STORAGE_KEY = 'enc-user-id';
export const TOKEN_STORAGE_KEY = 'token';
const REFRESH_TOKEN_REGISTERED_STORAGE_KEY_BASE = `cc-nx_`;
export const REFRESH_TOKEN_REGISTERED_STORAGE_KEY = (siteId: string) =>
  `${REFRESH_TOKEN_REGISTERED_STORAGE_KEY_BASE}${siteId}`;
const REFRESH_TOKEN_GUEST_STORAGE_KEY_BASE = `cc-nx-g_`;
export const REFRESH_TOKEN_GUEST_STORAGE_KEY = (siteId: string) => `${REFRESH_TOKEN_GUEST_STORAGE_KEY_BASE}${siteId}`;
export const DW_SESSION_ID_KEY = 'dwsid';
export const REFRESH_TOKEN_COOKIE_AGE = 90; // 90 days. This value matches SLAS cartridge,
export const X_SLAS_HEADER_PREFIX = 'x-cookie-slas-';
export const CONTENT_TYPE_POST_FORM_URL_ENCODED = 'application/x-www-form-urlencoded';
export const DEFAULT_CALLBACK_URL = process.env.SFCC_REDIRECTURI ?? 'http://localhost:3000/callback';

export const DEFAULT_SLAS_COOKIE_PARAMETERS = {
  httpOnly: false,
  sameSite: true,
  secure: true,
  maxAge: 60 * 60 * 24 * REFRESH_TOKEN_COOKIE_AGE,
  path: '/',
};
