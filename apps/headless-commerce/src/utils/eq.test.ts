import { describe, expect, it } from 'vitest';

import { deepEqual, deepEqualArrays, deepEqualObjects, isObject } from './eq';

describe('eq.ts', () => {
  describe('isObject', () => {
    it('should return true for objects', () => {
      expect(isObject({})).toBe(true);
      expect(isObject({ a: 1 })).toBe(true);
    });

    it('should return false for non-objects', () => {
      expect(isObject(null)).toBe(false);
      expect(isObject(undefined)).toBe(false);
      expect(isObject(123)).toBe(false);
      expect(isObject('string')).toBe(false);
    });
  });

  describe('deepEqualArrays', () => {
    it('should return true for equal arrays', () => {
      expect(deepEqualArrays([1, 2, 3], [1, 2, 3])).toBe(true);
      expect(deepEqualArrays([], [])).toBe(true);
    });

    it('should return false for unequal arrays', () => {
      expect(deepEqualArrays([1, 2, 3], [1, 2, 4])).toBe(false);
      expect(deepEqualArrays([1, 2, 3], [1, 2])).toBe(false);
    });
  });

  describe('deepEqualObjects', () => {
    it('should return true for equal objects', () => {
      expect(deepEqualObjects({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
      expect(deepEqualObjects({}, {})).toBe(true);
    });

    it('should return false for unequal objects', () => {
      expect(deepEqualObjects({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
      expect(deepEqualObjects({ a: 1, b: 2 }, { a: 1 })).toBe(false);
    });
  });

  describe('deepEqual', () => {
    it('should return true for equal values', () => {
      expect(deepEqual(1, 1)).toBe(true);
      expect(deepEqual('a', 'a')).toBe(true);
      expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
      expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    });

    it('should return false for unequal values', () => {
      expect(deepEqual(1, 2)).toBe(false);
      expect(deepEqual('a', 'b')).toBe(false);
      expect(deepEqual([1, 2, 3], [1, 2, 4])).toBe(false);
      expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
    });
  });
});
