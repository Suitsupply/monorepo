'use client';

import { DEFAULT_LOCALE } from '@headless-commerce/config/config';
import type { Locale } from '@headless-commerce/config/locale';
import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

export const LocaleContext = createContext<Locale>(DEFAULT_LOCALE);

export const useLocale = () => useContext(LocaleContext);

export type ClientLocaleProviderProps = {
  locale: Locale;
  children: ReactNode;
};

export const ClientLocaleProvider = ({ locale, children }: ClientLocaleProviderProps) => {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
};
