import { afterEach, describe, expect, it, vi } from 'vitest';

import { getDecimalFromWholeNumber } from './numbers';

describe('getDecimalFromWholeNumber', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return 0.01 when passed 1', () => {
    const result = getDecimalFromWholeNumber(1);
    expect(result).toBe(0.01);
  });

  it('should return 1 when passed 100', () => {
    const result = getDecimalFromWholeNumber(100);
    expect(result).toBe(1);
  });

  it('should return 0 when passed 0', () => {
    const result = getDecimalFromWholeNumber(0);
    expect(result).toBe(0);
  });

  it('should return 0.5 when passed 50', () => {
    const result = getDecimalFromWholeNumber(50);
    expect(result).toBe(0.5);
  });

  it('should return 2 when passed 200', () => {
    const result = getDecimalFromWholeNumber(200);
    expect(result).toBe(2);
  });
});
