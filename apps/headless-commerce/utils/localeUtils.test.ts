import type { AllowedLocaleCountry, AllowedLocaleLanguage } from '@susu/headless-commerce/config/locale';
import { Locale } from '@susu/headless-commerce/config/locale';
import { describe, expect, it } from 'vitest';

import * as localeUtils from './localeUtils';
import { convertLocaleToCookieFormat, getCountryFromLocale, getLanguageFromLocale } from './localeUtils';

describe('localeUtils', () => {
  describe('isValidLocale', () => {
    describe('When called with a valid locale', () => {
      it('should return true', () => {
        const isValid = localeUtils.isValidLocale(Locale['en-us']);
        expect(isValid).toBe(true);
      });
    });

    describe('When called with an invalid locale', () => {
      it('should return false', () => {
        const isValid = localeUtils.isValidLocale('asdf');
        expect(isValid).toBe(false);
      });
    });
  });

  describe('createLocale', () => {
    describe('When called with an invalid language and a value country', () => {
      it('should throw an error', () => {
        expect(() => localeUtils.createLocale('asdf' as AllowedLocaleLanguage, 'us')).toThrowError();
      });
    });

    describe('When called with a valid language and an invalid country', () => {
      it('should throw an error', () => {
        expect(() => localeUtils.createLocale('en', 'asdf' as AllowedLocaleCountry)).toThrowError();
      });
    });

    describe('When called with a valid language and a valid country', () => {
      it('should return a Locale', () => {
        const locale = localeUtils.createLocale('en', 'us');
        expect(locale).toBe('en-us');
      });
    });
  });

  describe('getLanguageFromLocale', () => {
    describe('When called with an invalid locale', () => {
      it('should throw an error', () => {
        expect(() => localeUtils.getLanguageFromLocale('asdf' as Locale)).toThrowError();
      });
    });

    describe('When called with a value locale', () => {
      it('should return the language from the locale', () => {
        const language = getLanguageFromLocale(Locale['en-us']);
        expect(language).toBe('en');
      });
    });
  });

  describe('getCountryFromLocale', () => {
    describe('When called with an invalid locale', () => {
      it('should throw an error', () => {
        expect(() => localeUtils.getLanguageFromLocale('asdf' as Locale)).toThrowError();
      });
    });

    describe('When called with a value locale', () => {
      it('should return the language from the locale', () => {
        const language = getCountryFromLocale(Locale['en-us']);
        expect(language).toBe('us');
      });
    });
  });

  describe('convertLocaleToCookieFormat', () => {
    describe('When called with an invalid locale', () => {
      it('should throw an error', () => {
        expect(() => localeUtils.convertLocaleToCookieFormat('asdf' as Locale)).toThrowError();
      });
    });

    describe('When called with an invalid locale', () => {
      it('should convert locale to cookie format', () => {
        const cookie = convertLocaleToCookieFormat(Locale['en-us']);
        expect(cookie).toBe('en_US');
      });
    });
  });

  describe('convertLocaleToCommerceGraphQLFormat', () => {
    describe('When called with an invalid locale', () => {
      it('should throw an error', () => {
        expect(() => localeUtils.convertLocaleToCommerceGraphQLFormat('asdf' as Locale)).toThrowError();
      });
    });

    describe('When called with an invalid locale', () => {
      it('should convert locale to cookie format', () => {
        const cookie = localeUtils.convertLocaleToCommerceGraphQLFormat(Locale['en-us']);
        expect(cookie).toBe('en-US');
      });
    });
  });

  describe('convertCookieFormatToLocale', () => {
    describe('When called with an invalid locale', () => {
      it('should throw an error', () => {
        expect(() => localeUtils.convertCookieFormatToLocale('asdf')).toThrowError();
      });
    });

    describe('When called with a valid locale', () => {
      it('should convert the cookie format to a locale', () => {
        const cookie = localeUtils.convertCookieFormatToLocale('en_US');
        expect(cookie).toBe('en-us');
      });
    });
  });
});
