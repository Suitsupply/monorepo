import { describe, expect, it } from 'vitest';

import { translateName } from './translateName';

describe('translateName', () => {
  it('should capitalize the first letter of the translated language name', () => {
    const languageCode = 'en';
    const translatedName = translateName(languageCode);
    expect(translatedName).toBe('English');
  });

  it('should handle different language codes', () => {
    const languageCode = 'fr';
    const translatedName = translateName(languageCode);
    expect(translatedName).toBe('Français');
  });

  it('should handle uppercase language codes', () => {
    const languageCode = 'ES';
    const translatedName = translateName(languageCode);
    expect(translatedName).toBe('Español');
  });

  it('should handle language codes with accents', () => {
    const languageCode = 'pt-BR';
    const translatedName = translateName(languageCode);
    expect(translatedName).toBe('Português (Brasil)');
  });

  it('should handle language codes with multiple words', () => {
    const languageCode = 'zh-CN';
    const translatedName = translateName(languageCode);
    expect(translatedName).toBe('中文（中国）');
  });

  it('should handle invalid language codes', () => {
    const languageCode = 'invalid';
    const translatedName = translateName(languageCode);
    expect(translatedName).toBe('Invalid');
  });
});
