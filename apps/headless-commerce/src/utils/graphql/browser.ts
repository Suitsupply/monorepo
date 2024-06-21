import { env } from '@headless-commerce/config/config';
import { customerPromise } from '@headless-commerce/contexts/customer';
import { isTokenValid } from '@headless-commerce/libs/sfcc/utils';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import { capitalizeHeaders, createFetch } from '@headless-commerce/utils/fetch';
import type { Client, Operation, SSRExchange } from '@urql/core';
import { cacheExchange, createClient, fetchExchange, makeOperation, ssrExchange } from '@urql/core';
import { authExchange } from '@urql/exchange-auth';
import { retryExchange } from '@urql/exchange-retry';
import { print } from 'graphql';
import { v4 as uuidv4 } from 'uuid';

import { getToken } from '../cookies/browser';
import log from '../log';
import { COMMERCE_URL, CONTENTFUL_TOKEN, CONTENTFUL_URL, rateLimit } from './common';
import { rateLimitExchange } from './exchanges/rateLimitExchange';

const fetch = createFetch(global.fetch, capitalizeHeaders);

export type CreateAuthExchangeProps = {
  country: CountryConfiguration;
};

export const createAuthExchange = ({ country }: Readonly<CreateAuthExchangeProps>) => {
  return authExchange(async () => {
    // This waits until the customer call is done.
    await customerPromise;

    let token: string | undefined;

    return {
      addAuthToOperation: operation => {
        const clientName = operation.context.clientName;
        const { fetchOptions } = operation.context;
        const options = typeof fetchOptions === 'function' ? fetchOptions() : fetchOptions ?? {};

        let newOperation: Operation;

        switch (clientName) {
          case 'contentful':
            newOperation = makeOperation(
              operation.kind,
              {
                ...operation,
                variables: {
                  ...operation.variables,
                  preview: env !== 'prd',
                },
              },
              {
                ...operation.context,
                url: CONTENTFUL_URL,
                fetchOptions: {
                  ...options,
                  headers: {
                    ...options.headers,
                    Authorization: `Bearer ${CONTENTFUL_TOKEN}`,
                  },
                },
              },
            );
            break;

          case 'commerce':
            newOperation = makeOperation(operation.kind, operation, {
              ...operation.context,
              url: COMMERCE_URL,
              fetchOptions: {
                ...options,
                headers: {
                  ...options.headers,
                  ...operation.context.headers,
                  'correlation-id': uuidv4(),
                  'Authorization': token,
                },
              },
            });
            break;

          default:
            throw new Error(`Unsupported clientName: ${clientName}`);
        }

        log.trace({
          method: 'graphql/browser/addAuthToOperation',
          clientName,
          query: print(newOperation.query),
          variables: newOperation.variables,
          fetchOptions: newOperation.context.fetchOptions,
          context: newOperation.context,
        });

        return newOperation;
      },

      // Will run refreshAuth if the token is invalid.
      willAuthError: () => {
        token = getToken();

        log.trace({
          method: 'graphql/browser/willAuthError',
          token,
          valid: isTokenValid(token, country.siteID),
        });

        if (!token) {
          return true;
        }
        return !isTokenValid(token, country.siteID);
      },

      // Gets called to refresh the token.
      refreshAuth: async () => {
        const response = await fetch('/api/customer/sfccRefreshToken', {
          method: 'GET',
          headers: {
            'x-site-id': country.siteID,
          },
        });
        await response.text();

        token = getToken();

        log.trace({
          method: 'graphql/browser/refreshAuth',
          token,
          valid: isTokenValid(token, country.siteID),
        });
      },

      didAuthError: error => {
        log.error(error);
        return true;
      },
    };
  });
};

export type CreateClientComponentURQLClientProps = {
  country: CountryConfiguration;
};

export const createClientComponentURQLClient = ({
  country,
}: Readonly<CreateClientComponentURQLClientProps>): [Client, SSRExchange] => {
  const ssr = ssrExchange({
    isClient: true,
  });
  const client = createClient({
    url: 'https://default.url',
    fetch,
    fetchOptions: {
      credentials: 'same-origin',
    },
    exchanges: [
      cacheExchange,
      rateLimitExchange(rateLimit),
      createAuthExchange({ country }),
      ssr,
      fetchExchange,
      retryExchange({
        initialDelayMs: 1000,
        maxDelayMs: 15000,
        randomDelay: true,
        maxNumberAttempts: 40,
      }),
    ],
    suspense: true,
  });
  return [client, ssr];
};
