import { describe, expect, it } from 'vitest';

import { memoize } from './memoize';

describe('memoize', () => {
  it('returns the same result as the original function', () => {
    const fn = (x: number) => x * 2;
    const memoizedFn = memoize(fn);

    expect(memoizedFn(2)).toBe(fn(2));
  });

  it('returns the cached result when called with the same arguments', () => {
    let callCount = 0;
    const fn = (x: number) => {
      callCount++;
      return x * 2;
    };
    const memoizedFn = memoize(fn);

    memoizedFn(2);
    memoizedFn(2);

    expect(callCount).toBe(1);
  });

  it('does not return the cached result when called with different arguments', () => {
    let callCount = 0;
    const fn = (x: number) => {
      callCount++;
      return x * 2;
    };
    const memoizedFn = memoize(fn);

    memoizedFn(2);
    memoizedFn(3);

    expect(callCount).toBe(2);
  });
});
