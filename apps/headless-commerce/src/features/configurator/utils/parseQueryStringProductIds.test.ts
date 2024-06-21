import { describe, expect, it } from 'vitest';

import { parseQueryStringProductIds } from './parseQueryStringProductIds';

describe('parseQueryStringProductIds', () => {
  describe('When passed an empty string', () => {
    it('should throw an error', () => {
      expect(() => parseQueryStringProductIds('')).toThrowError();
    });
  });

  describe('When passed a non-empty string', () => {
    describe('When passed an incorrect string of product IDs', () => {
      it('should throw an error', () => {
        expect(() => parseQueryStringProductIds('1#2#3#')).toThrowError();
        expect(() => parseQueryStringProductIds(',1,2,3')).toThrowError();
        expect(() => parseQueryStringProductIds('1,2,3,')).toThrowError();
      });
    });

    describe('When passed a correct string of product IDs', () => {
      it('should correctly parse the string', () => {
        expect(parseQueryStringProductIds('1,2,3')).toEqual(['1', '2', '3']);
      });
    });
  });
});
