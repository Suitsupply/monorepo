import { describe, expect, it } from 'vitest';

import { serverScopeCache } from './serverContext';

describe('serverScopeCache', () => {
  it('returns the same result as the original function', () => {
    const fn = (x: number) => x * 2;
    const cachedFn = serverScopeCache(fn);

    expect(cachedFn(2)).toBe(fn(2));
  });

  it('returns the cached result when called with the same arguments', () => {
    let callCount = 0;
    const fn = (x: number) => {
      callCount++;
      return x * 2;
    };
    const cachedFn = serverScopeCache(fn);

    cachedFn(2);
    cachedFn(2);

    expect(callCount).toBe(1);
  });

  it('does not return the cached result when called with different arguments', () => {
    let callCount = 0;
    const fn = (x: number) => {
      callCount++;
      return x * 2;
    };
    const cachedFn = serverScopeCache(fn);

    cachedFn(2);
    cachedFn(3);

    expect(callCount).toBe(2);
  });
});
