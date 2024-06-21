import { afterEach, describe, expect, it, vi } from 'vitest';

import { capitalize } from './header';

describe('fetch.ts', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('capitalizeHeader', () => {
    it('should capitalize each word in the header', () => {
      const result = capitalize('content-type');
      expect(result).toBe('Content-Type');
    });
  });
});
