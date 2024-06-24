import { describe, expect, test } from 'vitest';

import * as codeVerifier from './codeVerifier';

describe('codeVerifier', () => {
  describe('base64', () => {
    test('should return base64 encoded string', () => {
      const result = codeVerifier.base64('test');
      expect(result).toBe('dGVzdA==');
    });
  });

  describe('generateCodeVerifier', () => {
    test('should return a string of length 96', async () => {
      const result = await codeVerifier.generateCodeVerifier();
      expect(result).toHaveLength(96);
    });
  });

  describe('generateChallenge', () => {
    test('should return a base64url encoded SHA-256 hash of the input', async () => {
      const result = await codeVerifier.generateChallenge('test');
      expect(result).toBe('n4bQgYhMfWWaL-qgxVrQFaO_TxsrC4Is0V1sFbDwCgg'); // This is the base64url encoded SHA-256 hash of 'test'
    });
  });
});
