import type { SLASAuthType } from '@susu/headless-commerce/types/SlasAuth';
import { describe, expect, it, vi } from 'vitest';

import {
  getOcapiCustomerFromDwsid,
  getScapiAuthorize,
  getScapiToken,
  ocapiSessionBridgeFromToken,
  slasRefreshToken,
  slasSessionBridgeFromDwsid,
} from './apiUtils';

global.fetch = vi.fn();

const testResponse = { test: 'response' };

function createFetchResponse(
  status: number,
  headers: Record<string, string>,
  body: Record<string, unknown> = testResponse,
) {
  const headersList = new Headers();

  Object.keys(headers).forEach(key => {
    headersList.append(key, headers[key]);
  });

  const response = new Response(null, { headers: headersList, status });

  response.json = async () => body;

  return response;
}

const fetchSpy = vi.spyOn(global, 'fetch');
const NETWORK_ERROR = 'Network request failed';
const baseParams = {
  callbackUrl: 'http://example.com/callback',
  clientId: 'testClientId',
  customerType: 'guest' as SLASAuthType,
  organizationId: 'testOrgId',
  scapiBaseUrl: 'http://example.com/scapi',
  shortCode: 'testShortCode',
};

describe('scapiUtils', () => {
  describe('getScapiAuthorize', () => {
    it('should return the correct authorization for a valid request', async () => {
      const mockResponse = createFetchResponse(200, {
        location: 'http://example.com/path?usid=testUsidValue&code=testCodeValue',
      });

      fetchSpy.mockImplementation(async () => mockResponse);

      const result = await getScapiAuthorize(baseParams);

      expect(result).toMatchObject({
        usid: 'testUsidValue',
        code: 'testCodeValue',
      });

      expect(result.codeVerifier).toBeDefined();
      expect(typeof result.codeVerifier).toBe('string');
    });

    it('should throw an error for an invalid request', async () => {
      const mockResponse = createFetchResponse(400, {});
      fetchSpy.mockImplementation(async () => mockResponse);

      await expect(getScapiAuthorize(baseParams)).rejects.toThrow('Authorize request failed');
    });

    it('should throw an error for missing code in the response', async () => {
      const mockResponse = createFetchResponse(200, {
        location: 'http://example.com/path?usid=testUsidValue',
      });
      fetchSpy.mockImplementation(async () => mockResponse);

      await expect(getScapiAuthorize(baseParams)).rejects.toThrow('Failed to retrieve authorization code');
    });

    it('should throw an error for missing usid in the response', async () => {
      const mockResponse = createFetchResponse(200, {
        location: 'http://example.com/path?code=testCodeValue',
      });
      fetchSpy.mockImplementation(async () => mockResponse);

      await expect(getScapiAuthorize(baseParams)).rejects.toThrow('Failed to retrieve authorization code');
    });
  });

  describe('slasSessionBridgeFromDwsid', () => {
    const DWSIDParams = {
      authorizationResponse: {
        usid: 'testUsidValue',
        code: 'testCodeValue',
        codeVerifier: 'testCodeVerifier',
        error: 'null',
      },
      baseURL: 'http://example.com',
      clientId: 'testClientId',
      dwsid: 'testDwsid',
      isRegistered: false,
      loginId: 'testLoginId',
      organizationId: 'testOrgId',
      siteId: 'testSiteId',
    };

    it('should return the correct session for a valid request', async () => {
      const mockResponse = createFetchResponse(200, {});
      fetchSpy.mockImplementation(async () => mockResponse);

      const result = await slasSessionBridgeFromDwsid(DWSIDParams);

      expect(result).toMatchObject(testResponse);
    });

    it('should throw an error for an invalid request', async () => {
      const mockResponse = createFetchResponse(400, {});
      fetchSpy.mockImplementation(async () => mockResponse);

      await expect(slasSessionBridgeFromDwsid(DWSIDParams)).rejects.toThrow(NETWORK_ERROR);
    });
  });

  describe('getScapiToken', () => {
    const scapiTokenParams = {
      authorizationResponse: {
        usid: 'testUsidValue',
        code: 'testCodeValue',
        codeVerifier: 'testCodeVerifier',
        error: 'null',
      },
      baseURL: 'http://example.com',
      callbackUrl: 'http://example.com/callback',
      clientId: 'testClientId',
      organizationId: 'testOrgId',
      siteId: 'testSiteId',
    };

    it('should return the correct token for a valid request', async () => {
      const mockResponse = createFetchResponse(200, {});

      fetchSpy.mockImplementation(async () => mockResponse);

      const result = await getScapiToken(scapiTokenParams);
      expect(result).toMatchObject(testResponse);
    });

    it('should throw an error for an invalid request', async () => {
      const mockResponse = createFetchResponse(400, {});
      fetchSpy.mockImplementation(async () => mockResponse);

      await expect(getScapiToken(scapiTokenParams)).rejects.toThrow(NETWORK_ERROR);
    });
  });

  describe('getOcapiCustomerFromDwsid', () => {
    const OCAPICustomerParams = {
      clientId: 'testClientId',
      dwsid: 'testDwsid',
      siteId: 'testSiteId',
    };

    it('should return the correct customer for a valid request', async () => {
      const mockResponse = createFetchResponse(200, {});
      fetchSpy.mockImplementation(async () => mockResponse);

      const result = await getOcapiCustomerFromDwsid(OCAPICustomerParams);

      expect(result).toBe(testResponse);
    });

    it('should throw an error for an invalid request', async () => {
      const mockResponse = createFetchResponse(400, {});
      fetchSpy.mockImplementation(async () => mockResponse);

      await expect(getOcapiCustomerFromDwsid(OCAPICustomerParams)).rejects.toThrow(NETWORK_ERROR);
    });
  });

  describe('ocapiSessionBridgeFromToken', () => {
    const ocapiSessionBridgeFromTokenParams = {
      authToken: 'testToken',
      clientId: 'testClientId',
      siteId: 'testSiteId',
      clientIp: 'testClientIp',
    };

    it('should return the correct session for a valid request', async () => {
      const mockResponse = createFetchResponse(200, { 'Set-Cookie': 'dwsid=test_value; Path=/; HttpOnly' });
      fetchSpy.mockImplementation(async () => mockResponse);

      const result = await ocapiSessionBridgeFromToken(ocapiSessionBridgeFromTokenParams);
      expect(result).toStrictEqual({
        anonymous: null,
        dwsid: 'test_value',
      });
    });

    it('should throw an error for an invalid request', async () => {
      const mockResponse = createFetchResponse(400, {});
      fetchSpy.mockImplementation(async () => mockResponse);

      await expect(ocapiSessionBridgeFromToken(ocapiSessionBridgeFromTokenParams)).rejects.toThrow(NETWORK_ERROR);
    });
  });

  describe('slasRefreshToken', () => {
    const slasRefreshTokenParams = {
      clientId: 'testClientId',
      organizationId: 'testOrgId',
      refreshToken: 'testRefreshToken',
      callbackUrl: 'http://example.com/callback',
      siteId: 'testSiteId',
    };

    const tokenResponse = {
      access_token: 'testAccessToken',
      id_token: 'testIdToken',
      refresh_token: 'testRefreshToken',
      expires_in: 123,
      token_type: 'testTokenType',
      usid: 'testUsidValue',
      customer_id: 'testCustomerId',
      enc_user_id: 'testEncUserId',
      idp_access_token: 'testIdpAccessToken',
    };

    it('should return the correct value for a valid request', async () => {
      const mockResponse = createFetchResponse(200, {}, tokenResponse);
      fetchSpy.mockImplementation(async () => mockResponse);

      const result = await slasRefreshToken(slasRefreshTokenParams);
      expect(result).toMatchObject(tokenResponse);
    });

    it('should throw an error for an invalid request', async () => {
      const mockResponse = createFetchResponse(400, {});
      fetchSpy.mockImplementation(async () => mockResponse);

      await expect(slasRefreshToken(slasRefreshTokenParams)).rejects.toThrow(NETWORK_ERROR);
    });
  });
});
