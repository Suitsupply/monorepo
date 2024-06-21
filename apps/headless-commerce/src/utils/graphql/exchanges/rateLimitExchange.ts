import type { AnyVariables, Exchange, Operation } from 'urql';
import type { Source } from 'wonka';
import { concatMap, delay, fromValue, pipe } from 'wonka';

export const rateLimit =
  (duration: number) =>
  <T>(source: Source<T>): Source<T> => {
    return pipe(
      source,
      concatMap(a => pipe(fromValue(a), delay(duration))),
    );
  };

export const rateLimitExchange =
  (duration = 1000): Exchange =>
  exchangeInput =>
  (operationSource: Source<Operation<any, AnyVariables>>) =>
    pipe(operationSource, rateLimit(duration), exchangeInput.forward);
