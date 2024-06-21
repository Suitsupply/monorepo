'use client';

import type { CurrencyConfiguration } from '@headless-commerce/types/CurrencyConfiguration';
import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

export const CurrenciesContext = createContext<CurrencyConfiguration>({});

export const useCurrencies = () => useContext(CurrenciesContext);

export type ClientCurrenciesProviderProps = {
  currencies: CurrencyConfiguration;
  children: ReactNode;
};

export const ClientCurrenciesProvider = ({ currencies, children }: ClientCurrenciesProviderProps) => {
  return <CurrenciesContext.Provider value={currencies}>{children}</CurrenciesContext.Provider>;
};
