import { describe, expect, it } from 'vitest';

import { getCountryInitial } from './getCountryInitial';

describe('getCountryInitial', () => {
  it('should return the first letter of the country name if it does not start with "the"', () => {
    expect(getCountryInitial('United States')).toBe('U');
    expect(getCountryInitial('Canada')).toBe('C');
  });

  it('should return the fifth letter of the country name if it starts with "the"', () => {
    expect(getCountryInitial('The Netherlands')).toBe('N');
    expect(getCountryInitial('The United Kingdom')).toBe('U');
  });

  it('should handle uppercase and lowercase country names', () => {
    expect(getCountryInitial('united kingdom')).toBe('U');
    expect(getCountryInitial('THE Netherlands')).toBe('N');
  });

  it('should return an empty string for invalid country names', () => {
    expect(getCountryInitial('')).toBe('');
    expect(getCountryInitial(' ')).toBe(' ');
  });
});
