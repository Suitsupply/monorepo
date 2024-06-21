import { LAST_SITE_ID } from '@headless-commerce/constants/cookie';
import { describe, expect, it, vi } from 'vitest';

import { Authentication } from './Authentication';
import {
  CID_STORAGE_KEY,
  DW_SESSION_ID_KEY,
  ENC_USER_ID_STORAGE_KEY,
  REFRESH_TOKEN_REGISTERED_STORAGE_KEY,
  TOKEN_STORAGE_KEY,
  USID_STORAGE_KEY,
} from './constants';

// Mock dependencies
vi.mock('./apiUtils', () => ({
  getScapiToken: vi.fn(),
  getScapiAuthorize: vi.fn(),
  slasSessionBridgeFromDwsid: vi.fn(),
  getOcapiCustomerFromDwsid: vi.fn(),
  ocapiSessionBridgeFromToken: vi.fn(),
  slasRefreshToken: vi.fn(),
}));

const mockCookies = {
  [TOKEN_STORAGE_KEY]: 'testAuthToken',
  [`${REFRESH_TOKEN_REGISTERED_STORAGE_KEY('testSiteId')}`]: 'testRefreshToken',
  [USID_STORAGE_KEY]: 'testUsid',
  [CID_STORAGE_KEY]: 'testCid',
  [ENC_USER_ID_STORAGE_KEY]: 'testEncUserId',
  [DW_SESSION_ID_KEY]: 'testDwsid',
  [LAST_SITE_ID]: 'testLastSiteId',
};

describe('Authentication', () => {
  describe('login', () => {
    it('should call the correct login method based on the current state', async () => {
      const auth = new Authentication({ cookies: mockCookies, siteId: 'testSiteId' });
      const reuseCurrentLoginMock = vi.fn().mockResolvedValue('done');
      const reuseCurrentSessionMock = vi.fn().mockResolvedValue('done');
      const refreshAccessTokenMock = vi.fn().mockResolvedValue('done');
      const loginAsGuestMock = vi.fn().mockResolvedValue('done');

      auth['_getLoginMethod'] = vi.fn().mockResolvedValue(reuseCurrentLoginMock);

      await auth.login();
      expect(reuseCurrentLoginMock).toHaveBeenCalled();

      auth['_getLoginMethod'] = vi.fn().mockResolvedValue(reuseCurrentSessionMock);

      await auth.login();
      expect(reuseCurrentSessionMock).toHaveBeenCalled();

      auth['_getLoginMethod'] = vi.fn().mockResolvedValue(refreshAccessTokenMock);

      await auth.login();
      expect(refreshAccessTokenMock).toHaveBeenCalled();

      auth['_getLoginMethod'] = vi.fn().mockResolvedValue(loginAsGuestMock);

      await auth.login();
      expect(loginAsGuestMock).toHaveBeenCalled();
    });
  });
});
