import { describe, expect, it } from 'vitest';

import { isValidEmailAddress } from './validation';

describe('isValidEmailAddress', () => {
  it('should validate a correct email address', () => {
    const email = 'test@example.com';
    const result = isValidEmailAddress(email);
    expect(result).toBe(true);
  });

  it('should invalidate an incorrect email address', () => {
    const email = 'test@example';
    const result = isValidEmailAddress(email);
    expect(result).toBe(false);
  });

  it('should invalidate an email address without @ symbol', () => {
    const email = 'testexample.com';
    const result = isValidEmailAddress(email);
    expect(result).toBe(false);
  });

  it('should invalidate an email address without domain', () => {
    const email = 'test@';
    const result = isValidEmailAddress(email);
    expect(result).toBe(false);
  });

  it('should invalidate an email address with special characters', () => {
    const email = 'test@exa$mple.com';
    const result = isValidEmailAddress(email);
    expect(result).toBe(false);
  });
});
