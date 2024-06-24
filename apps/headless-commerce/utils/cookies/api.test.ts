import { ResponseCookies } from 'next/dist/compiled/@edge-runtime/cookies';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { cookiesAsRecord, deleteCookie, serializeValue, setCookie } from './api';

describe('apiCookies', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('serializeValue', () => {
    it('should serialize object values', () => {
      const value = { key: 'value' };
      const result = serializeValue(value);
      expect(result).toBe('j:' + JSON.stringify(value));
    });

    it('should serialize non-object values', () => {
      const value = 'test';
      const result = serializeValue(value);
      expect(result).toBe(value);
    });
  });

  describe('setCookie', () => {
    it('should set a cookie', () => {
      const headers = new Headers();
      const cookies = new ResponseCookies(headers);
      const key = 'key';
      const value = 'value';

      const spy = vi.spyOn(cookies, 'set');
      expect(spy.getMockName()).toEqual('set');

      setCookie(cookies, key, value);

      expect(spy).toBeCalledWith(key, value, undefined);
    });
  });

  describe('deleteCookie', () => {
    it('should delete a cookie', () => {
      const headers = new Headers();
      const cookies = new ResponseCookies(headers);
      const key = 'key';

      const spy = vi.spyOn(cookies, 'delete');
      expect(spy.getMockName()).toEqual('delete');

      deleteCookie(cookies, key);

      expect(spy).toBeCalledWith({
        name: key,
        maxAge: -1,
      });
    });
  });

  describe('cookiesAsRecord', () => {
    it('should return an empty record when there are no cookies', () => {
      const headers = new Headers();
      const cookies = new ResponseCookies(headers);

      const result = cookiesAsRecord(cookies);
      expect(result).toEqual({});
    });

    it('should return a record with all cookies', () => {
      const headers = new Headers();
      const cookies = new ResponseCookies(headers);
      cookies.set('cookie1', 'value1');
      cookies.set('cookie2', 'value2');

      const result = cookiesAsRecord(cookies);
      expect(result).toEqual({
        cookie1: 'value1',
        cookie2: 'value2',
      });
    });
    it('should return a record with one cookie', () => {
      const headers = new Headers();
      const cookies = new ResponseCookies(headers);
      cookies.set('cookie1', 'value1');

      const result = cookiesAsRecord(cookies);
      expect(result).toEqual({
        cookie1: 'value1',
      });
    });

    it('should return a record with the last value when there are multiple cookies with the same name', () => {
      const headers = new Headers();
      const cookies = new ResponseCookies(headers);
      cookies.set('cookie1', 'value1');

      cookies.set('cookie1', 'value2');

      const result = cookiesAsRecord(cookies);
      expect(result).toEqual({
        cookie1: 'value2',
      });
    });

    it('should return a record with cookies that have special characters in their names or values', () => {
      const headers = new Headers();
      const cookies = new ResponseCookies(headers);
      cookies.set('cookie$name', 'value1');
      cookies.set('cookie2', 'value@2');

      const result = cookiesAsRecord(cookies);
      expect(result).toEqual({
        cookie$name: 'value1',
        cookie2: 'value@2',
      });
    });
  });
});
