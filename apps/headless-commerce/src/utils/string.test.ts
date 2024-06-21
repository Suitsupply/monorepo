import { afterEach, describe, expect, it, vi } from 'vitest';

import type { ReplaceStringParamsType } from './string';
import { capitalize, replaceSubstring } from './string';

describe('string', () => {
  describe('string', () => {
    describe('When called with a string that is not capitalized', () => {
      it('should return the string with the first letter capitalized', () => {
        const actual = capitalize('hello');
        const expected = 'Hello';
        expect(actual).toBe(expected);
      });
    });

    describe('When called with a string that is capitalized', () => {
      it('should return the string unchanged', () => {
        const actual = capitalize('HELLO');
        const expected = 'HELLO';
        expect(actual).toBe(expected);
      });
    });
  });
});

describe('replaceSubstring', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should replace substring when both markers are present', () => {
    const params: ReplaceStringParamsType = {
      inputString: 'abcdefg',
      startMarker: 'b',
      endMarker: 'e',
      replacement: '123',
    };

    const result = replaceSubstring(params);

    expect(result).toBe('a123fg');
  });

  it('should return the input string when start marker is not found', () => {
    const params: ReplaceStringParamsType = {
      inputString: 'abcdefg',
      startMarker: 'x',
      endMarker: 'e',
      replacement: '123',
    };

    const result = replaceSubstring(params);

    expect(result).toBe('abcdefg');
  });

  it('should return the input string when end marker is not found', () => {
    const params: ReplaceStringParamsType = {
      inputString: 'abcdefg',
      startMarker: 'b',
      endMarker: 'x',
      replacement: '123',
    };

    const result = replaceSubstring(params);

    expect(result).toBe('abcdefg');
  });

  it('should return the input string when start and end markers are not found', () => {
    const params: ReplaceStringParamsType = {
      inputString: 'abcdefg',
      startMarker: 'x',
      endMarker: 'y',
      replacement: '123',
    };

    const result = replaceSubstring(params);

    expect(result).toBe('abcdefg');
  });

  it('should replace substring when start and end markers are the same', () => {
    const params: ReplaceStringParamsType = {
      inputString: 'abcdefg',
      startMarker: 'b',
      endMarker: 'b',
      replacement: '123',
    };

    const result = replaceSubstring(params);

    expect(result).toBe('abcdefg');
  });

  it('should replace substring when replacement is empty', () => {
    const params: ReplaceStringParamsType = {
      inputString: 'abcdefg',
      startMarker: 'b',
      endMarker: 'e',
      replacement: '',
    };

    const result = replaceSubstring(params);

    expect(result).toBe('afg');
  });
});
