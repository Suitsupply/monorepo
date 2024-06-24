import { afterEach, describe, expect, it, vi } from 'vitest';

import { parseAttributeFromString } from './attributeParser';

describe('parseAttributeFromString', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return null for null input', () => {
    const result = parseAttributeFromString(null);
    expect(result).toEqual(null);
  });

  it('should return null for empty string input', () => {
    const result = parseAttributeFromString('');
    expect(result).toEqual(null);
  });

  it('should return null for invalid input without "="', () => {
    const result = parseAttributeFromString('invalidInput');
    expect(result).toEqual(null);
  });

  it('should return null for invalid input with "=" but missing key or value', () => {
    const result = parseAttributeFromString('=');
    expect(result).toEqual(null);
  });

  it('should parse valid input with double quotes', () => {
    const result = parseAttributeFromString('key="value"');
    expect(result).toEqual({ key: 'value' });
  });

  it('should parse valid input with single quotes', () => {
    const result = parseAttributeFromString("key='value'");
    expect(result).toEqual({ key: 'value' });
  });

  it('should trim key and remove quotes from value', () => {
    const result = parseAttributeFromString('  key = "  value  "  ');
    expect(result).toEqual({ key: 'value' });
  });
});
