import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  generateUrlEncodedFormBodyFromObject,
  isTokenValid,
  parseDwsidCookieValueFromFetchResponse,
  tokenMaxAge,
} from './utils';

describe('utils', () => {
  describe('isTokenValid', () => {
    it('should return false if token is empty', () => {
      const token = '';
      const siteId = '123';

      const result = isTokenValid(token, siteId);

      expect(result).toBe(false);
    });

    it('should return false if token is expired', () => {
      const token = 'expired_token';
      const siteId = '123';

      const result = isTokenValid(token, siteId);

      expect(result).toBe(false);
    });

    it('should return false if token is not valid for the given siteId', () => {
      const token = 'valid_token';
      const siteId = '456';

      const result = isTokenValid(token, siteId);

      expect(result).toBe(false);
    });
  });

  describe('generateUrlEncodedFormBodyFromObject', () => {
    it('should return a URL-encoded string', () => {
      const obj = { key1: 'value1', key2: 'value2' };
      const result = generateUrlEncodedFormBodyFromObject(obj);
      expect(result).toBe('key1=value1&key2=value2');
    });

    it('should handle special characters', () => {
      const obj = { key1: 'value with spaces', key2: 'value/with/slashes' };
      const result = generateUrlEncodedFormBodyFromObject(obj);
      expect(result).toBe('key1=value%20with%20spaces&key2=value%2Fwith%2Fslashes');
    });

    it('should return an empty string for an empty object', () => {
      const obj = {};
      const result = generateUrlEncodedFormBodyFromObject(obj);
      expect(result).toBe('');
    });
  });

  describe('parseDwsidCookieValueFromFetchResponse', () => {
    it('should return the dwsid value from the Set-Cookie header', () => {
      const headers = new Headers();
      headers.append('Set-Cookie', 'dwsid=test_value; Path=/; HttpOnly');
      const response = new Response(null, { headers });
      const result = parseDwsidCookieValueFromFetchResponse(response);
      expect(result).toStrictEqual({
        anonymous: null,
        dwsid: 'test_value',
      });
    });

    it('should return null if the Set-Cookie header is not present', () => {
      const response = new Response();
      const result = parseDwsidCookieValueFromFetchResponse(response);
      expect(result).toStrictEqual({ dwsid: null, anonymous: null });
    });
  });

  describe('tokenMaxAge', () => {
    let value: number;
    let receivedAt: number;

    beforeEach(() => {
      value = 1800;
      vi.useFakeTimers();
      const date = new Date('2022-01-01T00:00:00Z');
      vi.setSystemTime(date);
      receivedAt = Date.now() / 1000;
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('should return the correct max age for a token received now', () => {
      const result = tokenMaxAge({ value, receivedAt });

      // 30s is the tollerance time set in the method
      expect(result).toBeGreaterThanOrEqual(value - 30);
      expect(result).toBeLessThan(value);
    });

    it('should return undefined for an expired token', () => {
      receivedAt -= value + 200;

      const result = tokenMaxAge({ value, receivedAt });

      expect(result).toBeUndefined();
    });

    it('should return undefined for missing value', () => {
      const result = tokenMaxAge({ receivedAt });

      expect(result).toBeUndefined();
    });

    it('should return undefined for missing receivedAt', () => {
      const result = tokenMaxAge({ value });

      expect(result).toBeUndefined();
    });

    it('should return undefined for missing parameters', () => {
      const result = tokenMaxAge({});

      expect(result).toBeUndefined();
    });
  });
});
