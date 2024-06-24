import type {
  AuthorizationResponse,
  OCAPICustomerResponse,
  TokenResponse,
} from '@susu/headless-commerce/types/SlasAuth';

import type {
  GetOcapiCustomerFromDwsidParams,
  GetScapiAuthorizeParams,
  GetScapiTokenParams,
  SlasSessionBridgeFromDwsidParams,
} from './apiUtils';
import { getOcapiCustomerFromDwsid, getScapiAuthorize, getScapiToken, slasSessionBridgeFromDwsid } from './apiUtils';

export const loginAsGuest = async ({
  getScapiAuthorizeParams,
  getScapiTokenParams,
}: {
  getScapiAuthorizeParams: GetScapiAuthorizeParams;
  getScapiTokenParams: Omit<GetScapiTokenParams, 'authorizationResponse'>;
}): Promise<TokenResponse> => {
  const authorizationResponse: AuthorizationResponse = await getScapiAuthorize(getScapiAuthorizeParams);
  return getScapiToken({ ...getScapiTokenParams, authorizationResponse });
};

export const reuseCurrentSession = async ({
  getScapiAuthorizeParams,
  slasSessionBridgeFromDwsidParams,
}: {
  getScapiAuthorizeParams: GetScapiAuthorizeParams;
  slasSessionBridgeFromDwsidParams: Omit<SlasSessionBridgeFromDwsidParams, 'authorizationResponse'>;
}): Promise<TokenResponse> => {
  const authorizationResponse: AuthorizationResponse = await getScapiAuthorize(getScapiAuthorizeParams);
  return slasSessionBridgeFromDwsid({ ...slasSessionBridgeFromDwsidParams, authorizationResponse });
};

export const getDwsidCustomer = async ({
  getOcapicustomerFromDwsidParams,
}: {
  getOcapicustomerFromDwsidParams: GetOcapiCustomerFromDwsidParams;
}): Promise<OCAPICustomerResponse> => {
  const customerResponse: OCAPICustomerResponse = await getOcapiCustomerFromDwsid(getOcapicustomerFromDwsidParams);

  if (customerResponse.fault) {
    throw new Error(`Fault in customer response: ${customerResponse.fault.type}`);
  }

  return customerResponse;
};
