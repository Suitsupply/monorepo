/* eslint sonarjs/no-duplicate-string: off */
import { describe, expect, it } from 'vitest';

import {
  localeRegex,
  pathnameLocalePrefix,
  pathnameStartsWithLocale,
  pathnameStartsWithSupportedLocale,
  pathnameWithoutLocalePrefix,
} from './pathname';

describe('pathname', () => {
  describe('localeRegex', () => {
    it('should match locale', () => {
      const result = 'en-us'.match(localeRegex);
      expect(result && result.slice(0, 3)).toEqual(['en-us', 'en', 'us']);
    });
  });

  describe('pathnameLocalePrefix', () => {
    describe('When pathname starts with locale', () => {
      it('should return locale prefix', () => {
        const result = pathnameLocalePrefix('/en-us/');
        expect(result).toBe('en-us');
      });
    });

    describe('When pathname does not start with locale', () => {
      it('should return empty string', () => {
        const result = pathnameLocalePrefix('/path/to/page');
        expect(result).toBe('path/');
      });
    });
  });

  describe('pathnameWithoutLocalePrefix', () => {
    describe('When pathname starts with locale', () => {
      it('should return pathname without locale prefix', () => {
        const result = pathnameWithoutLocalePrefix('/en-us/path/to/page');
        expect(result).toBe('/path/to/page');
      });
    });

    describe('When pathname does not start with locale', () => {
      it('should return empty string', () => {
        const result = pathnameWithoutLocalePrefix('/path/to/page');
        expect(result).toBe('to/page');
      });
    });
  });

  describe('pathnameStartsWithLocale', () => {
    describe('When pathname doesnt start with locale', () => {
      it('should return false', () => {
        const result = pathnameStartsWithLocale('/path/to/page');
        expect(result).toBe(false);
      });
    });

    describe('When pathname starts with locale', () => {
      describe('When pathname ends with slash', () => {
        it('should return true', () => {
          const result = pathnameStartsWithLocale('/en-us/');
          expect(result).toBe(true);
        });
      });

      describe('When pathname doesnt end with slash', () => {
        it('should return true', () => {
          const result = pathnameStartsWithLocale('/en-us');
          expect(result).toBe(true);
        });
      });
    });
  });

  describe('pathnameStartsWithSupportedLocale', () => {
    describe('When pathname doesnt start with locale', () => {
      it('should return false', () => {
        const result = pathnameStartsWithLocale('/path/to/page');
        expect(result).toBe(false);
      });
    });

    describe('When pathname starts with locale', () => {
      describe('When pathname is not a supported locale', () => {
        it('should return true', () => {
          const result = pathnameStartsWithSupportedLocale('/qp-xy/');
          expect(result).toBe(false);
        });
      });

      describe('When pathname is a supported locale', () => {
        describe('When pathname ends with slash', () => {
          it('should return true', () => {
            const result = pathnameStartsWithSupportedLocale('/en-us/');
            expect(result).toBe(true);
          });
        });

        describe('When pathname doesnt end with slash', () => {
          it('should return true', () => {
            const result = pathnameStartsWithSupportedLocale('/en-us');
            expect(result).toBe(true);
          });
        });
      });
    });
  });
});
