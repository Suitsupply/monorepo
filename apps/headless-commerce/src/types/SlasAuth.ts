import type { Customer } from './Customer';

export type SLASAuthType = 'registered' | 'guest';

export interface SLASAuth {
  authType: SLASAuthType;
  customerId: Customer['customerId'];
}

export interface JWTHeaders {
  exp: number;
  iat: number;
}

export interface TokenResponse {
  access_token: string;
  id_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  usid: string;
  customer_id: string;
  enc_user_id: string;
  idp_access_token: string;
}

export interface OCAPICustomerResponse {
  auth_type: string;
  customer_id: string;
  login: string;
  fault?: {
    type: string;
  };
}

export interface AuthorizationResponse {
  error: string;
  usid: string;
  code: string;
  codeVerifier: string;
}
