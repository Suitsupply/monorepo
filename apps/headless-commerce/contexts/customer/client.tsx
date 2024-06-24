'use client';

import { createUseFetch } from '@susu/headless-commerce/hooks/useFetch';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import { capitalizeHeaders } from '@susu/headless-commerce/utils/fetch';
import log from '@susu/headless-commerce/utils/log';
import type { ReactNode } from 'react';
import { createContext, useContext, useMemo } from 'react';

import { useCountry } from '../country/client';

export const CustomerContext = createContext<Customer | undefined>(undefined);

let resolve: (value: Customer) => void;
let reject: (error: Error) => void;
export let customerContextPromise: Promise<Customer> = new Promise((yes, no) => {
  resolve = yes;
  reject = no;
});

export const useCustomer = () => {
  return useContext(CustomerContext);
};

export type ClientCustomerProviderProps = {
  children?: ReactNode;
};

const useFetch = createUseFetch(global.fetch, capitalizeHeaders);

export const ClientCustomerProvider = ({ children }: ClientCustomerProviderProps) => {
  const country = useCountry();
  const { error, data } = useFetch<Customer>('/api/customer/sfccCustomer', {
    headers: {
      'x-site-id': country.siteID,
    },
  });

  if (error) {
    reject(error);
    log.error(error);
  }

  if (data) {
    resolve(data);
  }

  const value = useMemo(() => ({ ...data }), [data]);

  return <CustomerContext.Provider value={value}>{children}</CustomerContext.Provider>;
};
