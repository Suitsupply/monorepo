import { describe, expect, it } from 'vitest';

import type { ArrayElement } from './array';
import { firstElement, includesAll, uniqueElements, zip } from './array';

describe('array', () => {
  describe('firstElement', () => {
    describe('When called with an empty array', () => {
      it('should return undefined', () => {
        const array: Array<string> = [];
        const result = firstElement(array);
        expect(result).toBe(undefined);
      });
    });

    describe('When called with an array with one element', () => {
      it('should return the first element', () => {
        const array = ['a'];
        const result = firstElement(array);
        expect(result).toBe('a');
      });
    });

    describe('When called with an array with more than one element', () => {
      it('should return the first element', () => {
        const array = ['a', 'b', 'c'];
        const result = firstElement(array);
        expect(result).toBe('a');
      });
    });
  });

  describe('ArrayElement', () => {
    it('should correctly infer the element type of an array', () => {
      type TestArray = [number, string, boolean];
      type TestElement = ArrayElement<TestArray>;
      const testValue: TestElement = 123;
      expect(typeof testValue).toBe('number');
    });
  });

  describe('zip', () => {
    it('should correctly zip two arrays together', () => {
      const array1 = [1, 2, 3];
      const array2 = ['a', 'b', 'c'];
      const result = zip(array1, array2);
      expect(result).toEqual([
        [1, 'a'],
        [2, 'b'],
        [3, 'c'],
      ]);
    });
  });

  describe('includesAll', () => {
    it('should return true if all elements of the second array are in the first array', () => {
      const array1 = [1, 2, 3, 4, 5];
      const array2 = [2, 3, 4];
      const result = includesAll(array1, array2);
      expect(result).toBe(true);
    });

    it('should return false if not all elements of the second array are in the first array', () => {
      const array1 = [1, 2, 3];
      const array2 = [2, 3, 4];
      const result = includesAll(array1, array2);
      expect(result).toBe(false);
    });
  });

  describe('uniqueElements', () => {
    describe('When the array has no duplicates', () => {
      it('should return the same array', () => {
        const array = [1, 2, 3, 4, 5];
        const result = uniqueElements(array);
        expect(result).toEqual(array);
      });
    });

    describe('When the array has duplicates', () => {
      it('should return an array with only unique elements', () => {
        const array = [1, 2, 3, 2, 4, 5, 4];
        const result = uniqueElements(array);
        expect(result).toEqual([1, 2, 3, 4, 5]);
      });
    });
  });
});
