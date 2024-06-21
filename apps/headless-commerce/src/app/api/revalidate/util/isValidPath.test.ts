/* eslint-disable sonarjs/no-duplicate-string */
import { describe, expect, it } from 'vitest';

import { isValidPath } from './isValidPath';

describe('When the isValidPath function is called', () => {
  describe("When the path starts with '/'", () => {
    it("should return true when the path is simply '/'", () => {
      const actual = isValidPath('/');
      const expected = true;
      expect(actual).toBe(expected);
    });

    it("should return true when the path contains characters after '/'", () => {
      const actual = isValidPath('/test');
      const expected = true;
      expect(actual).toBe(expected);
    });

    describe("When the path contains '_next' after '/'", () => {
      it('should return false', () => {
        const actual = isValidPath('/_next');
        const expected = false;
        expect(actual).toBe(expected);
      });
    });

    describe("When the path contains 'api' after '/'", () => {
      it('should return false', () => {
        const actual = isValidPath('/api');
        const expected = false;
        expect(actual).toBe(expected);
      });
    });

    describe("When the path contains other valid characters after '/'", () => {
      it('should return true', () => {
        const actual = isValidPath('/test/test');
        const expected = true;
        expect(actual).toBe(expected);
      });
    });
  });

  describe("When the path does not start with '/'", () => {
    it('should return false', () => {
      const actual = isValidPath('test');
      const expected = false;
      expect(actual).toBe(expected);
    });
  });

  describe('When the path is an empty string', () => {
    it('should return false', () => {
      const actual = isValidPath('');
      const expected = false;
      expect(actual).toBe(expected);
    });
  });

  describe('When the path contains only invalid scenarios', () => {
    it("should return false for '_next'", () => {
      const actual = isValidPath('_next');
      const expected = false;
      expect(actual).toBe(expected);
    });

    it("should return false for 'api'", () => {
      const actual = isValidPath('api');
      const expected = false;
      expect(actual).toBe(expected);
    });

    it('should return false for any other path', () => {
      const actual = isValidPath('test');
      const expected = false;
      expect(actual).toBe(expected);
    });
  });
});
