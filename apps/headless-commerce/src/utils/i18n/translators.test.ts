import * as nextIntlServer from 'next-intl/server';
import { afterEach, describe, expect, it, vi } from 'vitest';

import type { Translators } from './translators';
import { getTranslators } from './translators';

describe('getTranslators', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return translators for a given language', async () => {
    const mockTranslator = (k: string) => k;
    mockTranslator.rich = () => 'rich text';
    mockTranslator.raw = () => 'raw text';
    const mockGetTranslator = vi.spyOn(nextIntlServer, 'getTranslator').mockResolvedValue(mockTranslator);

    const translators: Translators = await getTranslators('en');

    expect(translators).toEqual({
      countrySelector: mockTranslator,
      footer: mockTranslator,
      navigation: mockTranslator,
      languageSwitch: mockTranslator,
    });

    expect(mockGetTranslator).toHaveBeenCalledTimes(4);
    expect(mockGetTranslator).toHaveBeenCalledWith('en', 'countrySelector');
    expect(mockGetTranslator).toHaveBeenCalledWith('en', 'footer');
    expect(mockGetTranslator).toHaveBeenCalledWith('en', 'navigation');
    expect(mockGetTranslator).toHaveBeenCalledWith('en', 'switch_lang');
  });
});
