'use client';

import { isBrowser } from '@headless-commerce/utils/environment';
import { capitalizeHeaders, createFetch } from '@headless-commerce/utils/fetch';
import { useCallback, useEffect, useState } from 'react';

import { useDeepCompareMemoize } from './useDeepCompareMemoize';

export const createUseFetch = (
  fetch: typeof global.fetch = global.fetch,
  capitalize: typeof capitalizeHeaders = capitalizeHeaders,
) => {
  const fetchFunction = createFetch(fetch, capitalize);

  return <T>(input: RequestInfo | URL, init?: RequestInit | undefined) => {
    const [error, setError] = useState<Error | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<T | undefined>(undefined);
    const memoizedInput = useDeepCompareMemoize(input);
    const memoizedInit = useDeepCompareMemoize(init);

    const fetchData = useCallback(async () => {
      if (!memoizedInput) {
        return;
      }

      setLoading(true);
      try {
        const newHeaders = new Headers(memoizedInit?.headers);
        newHeaders.set('Content-Type', 'application/json');
        newHeaders.set('x-headless', window.document.location.toString());
        if (isBrowser()) {
          newHeaders.set('x-url', window.document.location.toString());
        }

        const response = await fetchFunction(memoizedInput, {
          ...memoizedInit,
          headers: newHeaders,
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = (await response.json()) as T;
        setData(data);
        setLoading(false);
      } catch (error: unknown) {
        setError(error as Error);
        setLoading(false);
      }
    }, [memoizedInit, memoizedInput]);

    useEffect(() => {
      if (isBrowser()) {
        fetchData();
      }
    }, [fetchData]);

    return { error, loading, data };
  };
};
