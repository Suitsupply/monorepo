'use client';

import type { Countries } from '@headless-commerce/types/EdgeConfiguration';
import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

export const CountriesContext = createContext<Countries>({});

export const useCountries = () => useContext(CountriesContext);

export type ClientCountriesProviderProps = {
  countries: Countries;
  children: ReactNode;
};

export const ClientCountriesProvider = ({ countries, children }: ClientCountriesProviderProps) => {
  return <CountriesContext.Provider value={countries}>{children}</CountriesContext.Provider>;
};
