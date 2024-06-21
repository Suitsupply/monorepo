import { LAST_SITE_ID } from '@headless-commerce/constants/cookie';
import type { OCAPICustomerResponse, SLASAuthType, TokenResponse } from '@headless-commerce/types/SlasAuth';
import { scapiHostname } from '@headless-commerce/utils/configuration/scapi';
import log from '@headless-commerce/utils/log';

import type { GetScapiAuthorizeParams, SlasSessionBridgeFromDwsidParams } from './apiUtils';
import { ocapiSessionBridgeFromToken, slasRefreshToken } from './apiUtils';
import {
  CID_STORAGE_KEY,
  DEFAULT_CALLBACK_URL,
  DW_SESSION_ID_KEY,
  ENC_USER_ID_STORAGE_KEY,
  REFRESH_TOKEN_GUEST_STORAGE_KEY,
  REFRESH_TOKEN_REGISTERED_STORAGE_KEY,
  TOKEN_STORAGE_KEY,
  USID_STORAGE_KEY,
} from './constants';
import { getDwsidCustomer, loginAsGuest, reuseCurrentSession } from './loginUtils';
import { isTokenValid } from './utils';

export type AuthData = {
  dwanonymous?: string;
  authToken?: string;
  cid?: string;
  customerType?: string;
  dwsid?: string;
  encUserId?: string;
  expiresIn?: { receivedAt: number; value: number };
  refreshToken?: string;
  siteId?: string;
  usid?: string;
};

export const INVALID_TOKEN = 'invalid refresh_token';
const EXPIRED_TOKEN = 'EXPIRED_TOKEN';
const DONE = 'done';

export class Authentication {
  private _scapiBaseUrl = scapiHostname;
  private _customerType: SLASAuthType = 'guest';
  private _siteId!: string;
  private _lastSiteId?: string;
  private _clientIp?: string;

  private _expiresIn!: {
    value: number; // in seconds
    receivedAt: number; // in seconds
  };
  private _authToken?: string;
  private _refreshToken?: string;
  private _usid?: string;
  private _cid?: string;
  private _encUserId?: string;
  private _dwsid?: string;
  private _dwanonymous?: string;

  private _clientConfig: any = {
    parameters: {
      clientId: process.env.SFCC_CLIENT_ID,
      organizationId: process.env.SFCC_ORGANIZATIONID,
      shortCode: process.env.SFCC_SHORTCODE,
      callbackUrl: DEFAULT_CALLBACK_URL,
    },
  };

  private _getScapiAuthorizeParams: () => GetScapiAuthorizeParams = () => ({
    callbackUrl: this._clientConfig.parameters.callbackUrl,
    clientId: this._clientConfig.parameters.clientId,
    customerType: this._customerType,
    organizationId: this._clientConfig.parameters.organizationId,
  });

  private _slasSessionBridgeFromDwsidParams: () => Omit<SlasSessionBridgeFromDwsidParams, 'authorizationResponse'> =
    () => ({
      clientId: this._clientConfig.parameters.clientId,
      dwsid: this._dwsid ?? '',
      isRegistered: true,
      organizationId: this._clientConfig.parameters.organizationId,
      siteId: this._siteId,
    });

  constructor({ cookies, siteId, clientIp }: { cookies: Record<string, string>; siteId: string; clientIp?: string }) {
    this._siteId = siteId;
    this._clientIp = clientIp;
    this._initializeVariables(cookies);

    if (this._lastSiteId && this._lastSiteId !== this._siteId) {
      this._clearAuth();
    }
  }

  private _initializeVariables(cookies: Record<string, string>) {
    this._authToken = cookies[TOKEN_STORAGE_KEY];
    this._refreshToken = cookies[`${REFRESH_TOKEN_REGISTERED_STORAGE_KEY(this._siteId)}`];
    if (this._refreshToken) {
      this._customerType = 'registered';
    } else {
      this._refreshToken = cookies[`${REFRESH_TOKEN_GUEST_STORAGE_KEY(this._siteId)}`];
      this._customerType = 'guest';
    }
    this._usid = cookies[USID_STORAGE_KEY];
    this._cid = cookies[CID_STORAGE_KEY];
    this._encUserId = cookies[ENC_USER_ID_STORAGE_KEY];
    this._dwsid = cookies[DW_SESSION_ID_KEY];
    this._lastSiteId = cookies[LAST_SITE_ID];
  }

  private _processTokenResponse = async (tokenResponse: TokenResponse) => {
    const { access_token, refresh_token, customer_id, usid, enc_user_id, id_token, expires_in } = tokenResponse;

    this._authToken = access_token;
    this._usid = usid;
    this._cid = customer_id;
    this._refreshToken = refresh_token;
    this._expiresIn = { value: expires_in, receivedAt: Date.now() / 1000 };

    // we use id_token to distinguish guest and registered users
    if (id_token?.length > 0) {
      this._encUserId = enc_user_id;
      this._customerType = 'registered';
    } else {
      this._customerType = 'guest';
    }

    if (!this._dwsid || !this._dwanonymous) {
      try {
        const { dwsid, anonymous } = await this._ocapiSessionBridgeFromToken();

        this._dwanonymous = anonymous as string;
        this._dwsid = dwsid as string;
      } catch {
        this._dwsid = '';
        this._dwanonymous = '';
      }
    }
  };

  private _ocapiSessionBridgeFromToken = async (): Promise<{ dwsid: string | null; anonymous: string | null }> => {
    return ocapiSessionBridgeFromToken({
      authToken: `Bearer ${this._authToken}`,
      clientId: this._clientConfig.parameters.clientId,
      siteId: this._siteId,
      clientIp: this._clientIp,
    });
  };

  private _reuseCurrentLogin = async (): Promise<'done'> => {
    try {
      if (!this._dwsid || !this._dwanonymous) {
        const { dwsid, anonymous } = await this._ocapiSessionBridgeFromToken();

        if (dwsid) {
          this._dwsid = dwsid;
        }

        if (anonymous) {
          this._dwanonymous = anonymous;
        }
      }
      return DONE;
    } catch (error) {
      log.error(error as Error);
      this._clearAuth();
      return this._loginAsGuest();
    }
  };

  private _reuseCurrentSession = async (): Promise<'done'> => {
    try {
      const customerResponse: OCAPICustomerResponse = await getDwsidCustomer({
        getOcapicustomerFromDwsidParams: {
          clientId: this._clientConfig.parameters.clientId,
          dwsid: String(this._dwsid),
          siteId: this._siteId,
        },
      });

      if (customerResponse.auth_type === 'registered') {
        this._customerType = 'registered';
        return await this._reuseCurrentRegisteredSession(customerResponse.login);
      } else {
        this._customerType = 'guest';
        return await this._reuseCurrentGuestSession();
      }
    } catch (error) {
      log.error(error as Error);
      this._clearAuth();
      return this._loginAsGuest();
    }
  };

  private _reuseCurrentGuestSession = async (): Promise<'done'> => {
    try {
      const reuseToken = await reuseCurrentSession({
        getScapiAuthorizeParams: this._getScapiAuthorizeParams(),
        slasSessionBridgeFromDwsidParams: this._slasSessionBridgeFromDwsidParams(),
      });

      await this._processTokenResponse(reuseToken);

      return DONE;
    } catch (error) {
      log.error(error as Error);
      this._clearAuth();
      return this._loginAsGuest();
    }
  };

  private _reuseCurrentRegisteredSession = async (loginId: string): Promise<'done'> => {
    try {
      const reuseToken = await reuseCurrentSession({
        getScapiAuthorizeParams: this._getScapiAuthorizeParams(),
        slasSessionBridgeFromDwsidParams: { ...this._slasSessionBridgeFromDwsidParams(), loginId },
      });

      await this._processTokenResponse(reuseToken);

      return DONE;
    } catch (error) {
      log.error(error as Error);
      this._clearAuth();
      return this._loginAsGuest();
    }
  };

  private _refreshAccessToken = async (): Promise<'done'> => {
    try {
      const refreshTokenResponse = await slasRefreshToken({
        callbackUrl: this._clientConfig.parameters.callbackUrl,
        clientId: this._clientConfig.parameters.clientId,
        organizationId: this._clientConfig.parameters.organizationId,
        refreshToken: String(this._refreshToken),
        siteId: this._siteId,
      });

      this._usid = undefined;
      this._cid = undefined;

      await this._processTokenResponse(refreshTokenResponse);

      return DONE;
    } catch (error) {
      log.error(error as Error);
      this._clearAuth();
      return this._loginAsGuest();
    }
  };

  private _loginAsGuest = async (): Promise<'done'> => {
    const tokenResponse = await loginAsGuest({
      getScapiAuthorizeParams: this._getScapiAuthorizeParams(),
      getScapiTokenParams: {
        callbackUrl: this._clientConfig.parameters.callbackUrl,
        clientId: this._clientConfig.parameters.clientId,
        organizationId: this._clientConfig.parameters.organizationId,
        siteId: this._siteId,
      },
    });

    this._customerType = 'guest';
    await this._processTokenResponse(tokenResponse);

    return DONE;
  };

  private _clearAuth = () => {
    const siteChanged = this._lastSiteId && this._lastSiteId !== this._siteId;

    this._customerType = siteChanged ? this._customerType : 'guest';
    this._dwanonymous = undefined;
    this._dwsid = siteChanged ? this._dwsid : undefined;
    this._refreshToken = undefined;
    this._authToken = undefined;
    this._usid = undefined;
    this._cid = undefined;
    this._encUserId = undefined;
  };

  private _getLoginMethod = async (): Promise<() => Promise<'done'>> => {
    if (this._authToken && isTokenValid(this._authToken, this._siteId)) {
      return this._reuseCurrentLogin;
    }

    if (this._refreshToken) {
      return this._refreshAccessToken;
    }

    if (this._dwsid) {
      return this._reuseCurrentSession;
    }

    return this._loginAsGuest;
  };

  private _startedLogin?: 'done';
  private _loginRetries = 0;
  public login = async (): Promise<'done' | undefined> => {
    if (this._startedLogin) {
      return this._startedLogin;
    }

    const loginMethod: () => Promise<'done'> = await this._getLoginMethod();

    try {
      this._startedLogin = await loginMethod();
    } catch (error: any) {
      const retryErrors = [INVALID_TOKEN, EXPIRED_TOKEN];

      if (
        this._loginRetries === 0 && // we only retry once
        retryErrors.includes(error?.message)
      ) {
        this._loginRetries = 1;
        this._clearAuth();

        return this.login();
      }

      throw error;
    } finally {
      this._startedLogin = undefined;
    }
  };

  public refreshToken = async (): Promise<'done' | undefined> => {
    if (!this._refreshToken) {
      await this.login();
      return;
    }

    return this._refreshAccessToken();
  };

  public getAuth = (): AuthData => {
    return {
      authToken: this._authToken,
      cid: this._cid,
      customerType: this._customerType,
      dwanonymous: this._dwanonymous,
      dwsid: this._dwsid,
      encUserId: this._encUserId,
      expiresIn: this._expiresIn,
      refreshToken: this._refreshToken,
      siteId: this._siteId,
      usid: this._usid,
    };
  };
}
