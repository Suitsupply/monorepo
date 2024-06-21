import { capitalize } from '@headless-commerce/utils/string';

export const translateName = (languageCode: string) => {
  return capitalize(
    String(
      new Intl.DisplayNames([languageCode], {
        type: 'language',
      }).of(languageCode),
    ),
  );
};
