import { describe, expect, it } from 'vitest';

import type { ArrayElement } from './array';
import { chunkArray, includesAll, uniqueElements, zip } from './array';

describe('array.ts', () => {
  describe('ArrayElement', () => {
    it('should correctly infer the element type of an array', () => {
      type TestArray = [number, string, boolean];
      type TestElement = ArrayElement<TestArray>;
      const testValue: TestElement = 123; // This should be allowed
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

  describe('chunkArray', () => {
    it('should split the array into chunks of the specified size', () => {
      const array = [1, 2, 3, 4, 5];
      const chunkSize = 2;
      const result = chunkArray(array, chunkSize);
      expect(result).toEqual([[1, 2], [3, 4], [5]]);
    });

    it('should handle chunk size larger than array length', () => {
      const array = [1, 2, 3];
      const chunkSize = 5;
      const result = chunkArray(array, chunkSize);
      expect(result).toEqual([[1, 2, 3]]);
    });

    it('should handle an array that is exactly divisible by chunk size', () => {
      const array = [1, 2, 3, 4];
      const chunkSize = 2;
      const result = chunkArray(array, chunkSize);
      expect(result).toEqual([
        [1, 2],
        [3, 4],
      ]);
    });

    it('should handle an empty array', () => {
      const array: number[] = [];
      const chunkSize = 3;
      const result = chunkArray(array, chunkSize);
      expect(result).toEqual([[]]);
    });

    it('should handle chunk size of 1', () => {
      const array = [1, 2, 3, 4];
      const chunkSize = 1;
      const result = chunkArray(array, chunkSize);
      expect(result).toEqual([[1], [2], [3], [4]]);
    });
  });
});
