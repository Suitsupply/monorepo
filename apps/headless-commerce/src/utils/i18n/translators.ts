import { getTranslator } from 'next-intl/server';

import { serverScopeCache } from '../serverContext';

export type Translators = {
  countrySelector: Awaited<ReturnType<typeof getTranslator>>;
  footer: Awaited<ReturnType<typeof getTranslator>>;
  navigation: Awaited<ReturnType<typeof getTranslator>>;
  languageSwitch: Awaited<ReturnType<typeof getTranslator>>;
};

export const getTranslators = serverScopeCache(async (language: string): Promise<Translators> => {
  const [countrySelector, footer, navigation, languageSwitch] = await Promise.all([
    getTranslator(language, 'countrySelector'),
    getTranslator(language, 'footer'),
    getTranslator(language, 'navigation'),
    getTranslator(language, 'switch_lang'),
  ]);

  const translators: Translators = {
    countrySelector,
    footer,
    navigation,
    languageSwitch,
  };

  return translators;
});
