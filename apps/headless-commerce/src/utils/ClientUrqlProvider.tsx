'use client';

import { useCountry } from '@headless-commerce/contexts/country/client';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import { createClientComponentURQLClient } from '@headless-commerce/utils/graphql/browser';
import log from '@headless-commerce/utils/log';
import { signal } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';
import type { Client, SSRExchange } from '@urql/next';
import { UrqlProvider as UrqlUrqlProvider } from '@urql/next';
import { type ReactNode, useMemo } from 'react';

import { memoize } from './memoize';

export const urqlClient = signal<Client | undefined>(undefined);

export const urqlSSRExchange = signal<SSRExchange | undefined>(undefined);

export const setUrqlClient = memoize((country: CountryConfiguration): [Client, SSRExchange] => {
  log.trace({
    method: 'setUrqlClient',
    country,
  });

  const [client, ssr] = createClientComponentURQLClient({ country });

  urqlClient.value = client;
  urqlSSRExchange.value = ssr;

  return [client, ssr];
});

export type ClientUrqlProviderProps = {
  children?: ReactNode;
};

export default function ClientUrqlProvider({ children }: Readonly<ClientUrqlProviderProps>) {
  useSignals();

  const country = useCountry();
  const [client, ssr] = useMemo(() => {
    return setUrqlClient(country);
  }, [country]);

  log.trace({
    method: 'ClientUrqlProvider',
    country,
  });

  return (
    <UrqlUrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlUrqlProvider>
  );
}
