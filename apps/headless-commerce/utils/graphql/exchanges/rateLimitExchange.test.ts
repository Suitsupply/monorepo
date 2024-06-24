import { Kind } from 'graphql';
import type { AnyVariables, ExchangeInput, Operation, OperationResult } from 'urql';
import { createClient, makeOperation } from 'urql';
import { describe, expect, it } from 'vitest';
import { fromValue, map, pipe, toPromise } from 'wonka';

import { rateLimitExchange } from './rateLimitExchange';

describe('rateLimitExchange', () => {
  const client = createClient({
    url: 'http://localhost:3000/graphql',
    exchanges: [],
  });

  const operation: Operation<any, AnyVariables> = makeOperation(
    'query',
    {
      key: 1,
      kind: 'query',
      variables: {},
      extensions: {},
      context: {
        url: 'http://localhost:3000/graphql',
        requestPolicy: 'cache-first',
      },
      query: {
        kind: Kind.DOCUMENT,
        definitions: [],
      },
    },
    undefined,
  );

  describe('rateLimitExchange', () => {
    describe('When called with a rateLimit value', () => {
      it.skip('should return an Exchange function that debounces operations', async () => {
        const exchangeInput: ExchangeInput = {
          client,
          forward: ops$ => () => {
            return pipe(
              ops$,
              map(operation => {
                return { operation, stale: false, hasNext: false } as OperationResult<any, AnyVariables>;
              }),
            );
          },
          dispatchDebug: () => {},
        };

        const result = await pipe(
          fromValue(operation),
          rateLimitExchange(1000)(exchangeInput),
          map(x => {
            return x;
          }),
          toPromise,
        );

        expect(result).toEqual({ operation, stale: false, hasNext: false });
      });
    });
  });
});
