import { capitalize } from './header';
import { mapKeys } from './object';

export const capitalizeHeaders = (headers: Record<string, string>) => mapKeys(headers, capitalize);

// Dependency Injection for fetch.
export const createFetch = (
  fetch: typeof global.fetch = global.fetch,
  capitalize: typeof capitalizeHeaders = capitalizeHeaders,
) => {
  return async (url: RequestInfo | URL, options?: RequestInit) => {
    if (options?.headers) {
      // Force headers into a Record by taking entries and reducing.
      options.headers = Object.fromEntries(new Headers(options.headers).entries());

      // Add x-headless header to all requests.
      options.headers['x-headless'] = 'true';

      // Capitalize all headers.
      options.headers = capitalize(options.headers as Record<string, string>);
    }

    return fetch(url, options);
  };
};
