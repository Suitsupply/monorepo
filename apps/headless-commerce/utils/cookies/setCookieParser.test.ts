import { afterEach, describe, expect, it, vi } from 'vitest';

import type { DecodedPairs } from './setCookieParser';
import { decodedPairs, decodeExpires, encodeDecodedPairs, encodeExpires, ensureDecodedValues } from './setCookieParser';

describe('setCookieParser', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('encodeExpires', () => {
    it('should encode expires correctly', () => {
      const input = 'Expires=Wed, 21 Oct 2015 07:28:00 GMT;';
      const result = encodeExpires(input);
      expect(result).toBe('Expires=Wed# 21 Oct 2015 07:28:00 GMT;');
    });
  });

  describe('decodeExpires', () => {
    it('should decode expires correctly', () => {
      const input = 'Expires=Wed# 21 Oct 2015 07:28:00 GMT';
      const result = decodeExpires(input);
      expect(result).toBe('Expires=Wed, 21 Oct 2015 07:28:00 GMT');
    });
  });

  describe('decodedPairs', () => {
    it('should decode pairs correctly', () => {
      const spy = vi.spyOn(window, 'decodeURIComponent');
      const setCookieValue = 'key1=value1; Expires=expires1, key2=value2; Expires=expires2';
      const keys = ['key1', 'key2'];
      const result = decodedPairs(setCookieValue, keys);
      expect(result).toEqual([
        [
          ['key1', 'value1'],
          ['Expires', 'expires1'],
        ],
        [
          ['key2', 'value2'],
          ['Expires', 'expires2'],
        ],
      ]);
      expect(spy).toBeCalledTimes(2);
    });

    it('should handle keys without values', () => {
      const setCookieValue = 'key1=value1; Secure, key2=value2; Secure';
      const keys = ['key1', 'key2'];
      const result = decodedPairs(setCookieValue, keys);
      expect(result).toEqual([
        [
          ['key1', 'value1'],
          ['Secure', true],
        ],
        [
          ['key2', 'value2'],
          ['Secure', true],
        ],
      ]);
    });

    it('should not decode keys not in the keys array', () => {
      const spy = vi.spyOn(window, 'decodeURIComponent');
      const setCookieValue = 'key1=value1; Expires=expires1, key2=value2; Expires=expires2';
      const keys = ['key1'];
      const result = decodedPairs(setCookieValue, keys);
      expect(result).toEqual([
        [
          ['key1', 'value1'],
          ['Expires', 'expires1'],
        ],
        [
          ['key2', 'value2'],
          ['Expires', 'expires2'],
        ],
      ]);
      expect(spy).toBeCalledTimes(1);
    });
  });

  describe('encodeDecodedPairs', () => {
    it('should encode decoded pairs correctly', () => {
      const input: Array<DecodedPairs> = [
        [
          ['key1', 'value1'],
          ['Expires', 'Wed, 21 Oct 2015 07:28:00 GMT'],
        ],
        [
          ['key2', 'value2'],
          ['Expires', 'Wed, 21 Oct 2015 07:28:00 GMT'],
        ],
      ];
      const result = encodeDecodedPairs(input);
      expect(result).toBe(
        'key1=value1; Expires=Wed, 21 Oct 2015 07:28:00 GMT, key2=value2; Expires=Wed, 21 Oct 2015 07:28:00 GMT',
      );
    });

    it('should handle keys without values', () => {
      const input: Array<DecodedPairs> = [
        [
          ['key1', 'value1'],
          ['Secure', true],
        ],
        [
          ['key2', 'value2'],
          ['Secure', true],
        ],
      ];
      const result = encodeDecodedPairs(input);
      expect(result).toBe('key1=value1; Secure, key2=value2; Secure');
    });
  });

  describe('ensureDecodedValues', () => {
    it('should ensure values are decoded', () => {
      const decodeURIComponentMock = vi.spyOn(global, 'decodeURIComponent');
      const setCookieString = 'key1=value1; Expires=Wed, 21 Oct 2015 07:28:00 GMT';
      const keys = ['key1', 'Expires'];
      const result = ensureDecodedValues(setCookieString, keys);
      expect(result).toBe('key1=value1; Expires=Wed, 21 Oct 2015 07:28:00 GMT');
      expect(decodeURIComponentMock).toHaveBeenCalledTimes(2);
    });

    it('should handle keys without values', () => {
      const decodeURIComponentMock = vi.spyOn(global, 'decodeURIComponent');
      const setCookieString = 'key1=value1; Secure';
      const keys = ['key1', 'Secure'];
      const result = ensureDecodedValues(setCookieString, keys);
      expect(result).toBe('key1=value1; Secure');
      expect(decodeURIComponentMock).toHaveBeenCalledTimes(1);
    });
  });
});
