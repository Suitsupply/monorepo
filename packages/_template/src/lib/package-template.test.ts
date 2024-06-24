import { describe, expect, it } from 'vitest';

import { add } from './package-template';

describe('package-template', () => {
  describe('add', () => {
    it('should add two numbers together', () => {
      expect(add(1, 2)).toBe(3);
    });
  });
});
