// TODO: Create a translation function to match client side t() function.
import type { Locale } from '@susu/headless-commerce/config/locale';
import fs from 'fs/promises';
import type { AbstractIntlMessages } from 'next-intl';
import path from 'path';

import { assertNonNullable } from '../assert';
import { getLanguageFromLocale } from '../localeUtils';

const dirEntries = await fs.readdir(path.resolve('./messages'));
const files = await Promise.all(
  dirEntries.map(async file => {
    return [file.replace('.json', ''), JSON.parse(JSON.stringify(await import(`../../messages/${file}`)))];
  }),
);

export const messages: Record<string, AbstractIntlMessages> = files.reduce(
  (acc, [name, file]) => {
    return {
      ...acc,
      [name]: file,
    };
  },
  {} as Record<string, AbstractIntlMessages>,
);

export const getMessages = (locale: Locale) => {
  const languageCode = getLanguageFromLocale(locale);
  const result = messages[languageCode];
  assertNonNullable(result);
  return result;
};
