import { isLive } from '@headless-commerce/utils/environment';
import { cacheExchange, createClient, fetchExchange, makeOperation } from '@urql/core';
import { authExchange } from '@urql/exchange-auth';
import { retryExchange } from '@urql/exchange-retry';
import { v4 as uuidv4 } from 'uuid';

import { capitalizeHeaders, createFetch } from '../fetch';
import log from '../log';
import { COMMERCE_URL, CONTENTFUL_TOKEN, CONTENTFUL_URL, rateLimit } from './common';
import { rateLimitExchange } from './exchanges/rateLimitExchange';

const fetch = createFetch(global.fetch, capitalizeHeaders);

export const createAuthExchange = () => {
  return authExchange(async () => {
    return {
      addAuthToOperation(operation) {
        const clientName = operation.context.clientName ?? 'contentful';
        const { fetchOptions } = operation.context;
        const options = typeof fetchOptions === 'function' ? fetchOptions() : fetchOptions ?? {};

        switch (clientName) {
          case 'contentful':
            return makeOperation(
              operation.kind,
              {
                ...operation,
                variables: {
                  ...operation.variables,
                  preview: !isLive(),
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

          case 'commerce':
            return makeOperation(operation.kind, operation, {
              ...operation.context,
              url: COMMERCE_URL,
              fetchOptions: {
                ...options,
                headers: {
                  ...options.headers,
                  ...operation.context.headers,
                  'correlation-id': uuidv4(),
                },
              },
            });

          default:
            throw new Error(`Unexpected object: ${clientName}`);
        }
      },

      didAuthError: error => {
        log.error(error);
        return true;
      },

      // Gets called to refresh the token.
      refreshAuth: async () => {
        // call refresh token API route.
      },
    };
  });
};

export const createServerComponentURQLClient = () => {
  return createClient({
    url: 'https://default.url',
    fetch,
    fetchOptions: {
      credentials: 'same-origin',
    },
    exchanges: [
      cacheExchange,
      rateLimitExchange(rateLimit),
      createAuthExchange(),
      fetchExchange,
      retryExchange({
        initialDelayMs: 1000,
        maxDelayMs: 15000,
        randomDelay: true,
        maxNumberAttempts: 40,
      }),
    ],
  });
};
