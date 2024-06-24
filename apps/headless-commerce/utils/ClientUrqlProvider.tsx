'use client';

import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { UrqlProvider as UrqlUrqlProvider } from '@urql/next';
import { type ReactNode, useMemo } from 'react';

import { createClientComponentURQLClient } from './graphql/browser';

export type ClientUrqlProviderProps = {
  children?: ReactNode;
};

export default function ClientUrqlProvider({ children }: Readonly<ClientUrqlProviderProps>) {
  const country = useCountry();
  const [client, ssr] = useMemo(() => {
    return createClientComponentURQLClient({ country });
  }, [country]);

  return (
    <UrqlUrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlUrqlProvider>
  );
}
