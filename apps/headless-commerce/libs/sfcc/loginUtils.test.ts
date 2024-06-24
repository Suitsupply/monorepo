import type { OCAPICustomerResponse, SLASAuthType } from '@susu/headless-commerce/types/SlasAuth';
import { describe, expect, it, vi } from 'vitest';

import * as apiUtils from './apiUtils';
import { getDwsidCustomer, loginAsGuest, reuseCurrentSession } from './loginUtils';

// Mock the dependencies
const getScapiAuthorizeParams: Omit<apiUtils.GetScapiAuthorizeParams, 'authorizationResponse'> = {
  callbackUrl: 'http://example.com/callback',
  clientId: 'testClientId',
  organizationId: 'testOrgId',
  customerType: 'guest' as SLASAuthType,
};
const getScapiTokenParams: Omit<apiUtils.GetScapiTokenParams, 'authorizationResponse'> = {
  organizationId: 'testOrgId',
  clientId: 'testClientId',
  callbackUrl: 'http://example.com/callback',
  siteId: 'testSiteId',
};
const slasSessionBridgeFromDwsidParams: Omit<apiUtils.SlasSessionBridgeFromDwsidParams, 'authorizationResponse'> = {
  clientId: 'testClientId',
  dwsid: 'testDwsid',
  isRegistered: true,
  organizationId: 'testOrgId',
  siteId: 'testSiteId',
};
const getOcapicustomerFromDwsidParams: apiUtils.GetOcapiCustomerFromDwsidParams = {
  clientId: 'testClientId',
  dwsid: 'testDwsid',
  siteId: 'testSiteId',
};

// Mock the response
const customerResponse: OCAPICustomerResponse = {
  auth_type: 'testAuthType',
  customer_id: 'testCustomerId',
  login: 'testLogin',
  fault: undefined,
};
const authorizationResponse = {
  usid: 'testUsidValue',
  code: 'testCodeValue',
  codeVerifier: 'testCodeVerifier',
  error: 'null',
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

describe('loginUtils', () => {
  describe('loginAsGuest', () => {
    it('should return a valid token response', async () => {
      // Mock the functions
      const getScapiAuthorize = vi.spyOn(apiUtils, 'getScapiAuthorize').mockResolvedValue(authorizationResponse);
      const getScapiToken = vi.spyOn(apiUtils, 'getScapiToken').mockResolvedValue(tokenResponse);

      // Call the function
      const result = await loginAsGuest({ getScapiAuthorizeParams, getScapiTokenParams });

      // Assertions
      expect(getScapiAuthorize).toHaveBeenCalledWith(getScapiAuthorizeParams);
      expect(getScapiToken).toHaveBeenCalledWith({ ...getScapiTokenParams, authorizationResponse });
      expect(result).toMatchObject(tokenResponse);
    });
  });

  describe('reuseCurrentSession', () => {
    it('should return a valid token response', async () => {
      // Mock the functions
      const getScapiAuthorize = vi.spyOn(apiUtils, 'getScapiAuthorize').mockResolvedValue(authorizationResponse);
      const slasSessionBridgeFromDwsid = vi
        .spyOn(apiUtils, 'slasSessionBridgeFromDwsid')
        .mockResolvedValue(tokenResponse);

      // Call the function
      const result = await reuseCurrentSession({ getScapiAuthorizeParams, slasSessionBridgeFromDwsidParams });

      // Assertions
      expect(getScapiAuthorize).toHaveBeenCalledWith(getScapiAuthorizeParams);
      expect(slasSessionBridgeFromDwsid).toHaveBeenCalledWith({
        ...slasSessionBridgeFromDwsidParams,
        authorizationResponse,
      });
      expect(result).toMatchObject(tokenResponse);
    });
  });

  describe('getDwsidCustomer', () => {
    it('should return the customer response', async () => {
      // Mock the function
      const getOcapiCustomerFromDwsid = vi
        .spyOn(apiUtils, 'getOcapiCustomerFromDwsid')
        .mockResolvedValue(customerResponse);

      // Call the function
      const result = await getDwsidCustomer({ getOcapicustomerFromDwsidParams });

      // Assertions
      expect(getOcapiCustomerFromDwsid).toHaveBeenCalledWith(getOcapicustomerFromDwsidParams);
      expect(result).toEqual(customerResponse);
    });

    it('should throw an error if there is a fault in the customer response', async () => {
      // Mock the function
      const getOcapiCustomerFromDwsid = vi
        .spyOn(apiUtils, 'getOcapiCustomerFromDwsid')
        .mockResolvedValue({ ...customerResponse, fault: { type: 'testFaultType' } });

      // Call the function and expect it to throw an error
      await expect(getDwsidCustomer({ getOcapicustomerFromDwsidParams })).rejects.toThrowError(
        'Fault in customer response: testFaultType',
      );

      // Assertion
      expect(getOcapiCustomerFromDwsid).toHaveBeenCalledWith(getOcapicustomerFromDwsidParams);
    });
  });
});
