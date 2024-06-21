import { afterEach, describe, expect, it, vi } from 'vitest';

import { capitalizeHeaders, createFetch } from './fetch';

const exampleURL = 'https://example.com';
const exampleContentType = 'application/json';
const exampleAcceptLanguage = 'en-US';

describe('fetch.ts', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('capitalizeHeaders', () => {
    it('should capitalize each key in the headers object', () => {
      const headers = {
        'content-type': exampleContentType,
        'accept-language': exampleAcceptLanguage,
      };
      const result = capitalizeHeaders(headers);
      expect(result).toEqual({
        'Content-Type': exampleContentType,
        'Accept-Language': exampleAcceptLanguage,
      });
    });
  });

  describe('fetch', () => {
    it('should call originalFetch with capitalized headers', async () => {
      const headers = {
        'content-type': exampleContentType,
        'accept-language': exampleAcceptLanguage,
      };
      const options: RequestInit = { headers };

      const mockFetch = vi.fn();
      const mockCapitalize = vi.fn();

      const fetch = createFetch(mockFetch, mockCapitalize);

      await fetch(exampleURL, options);

      expect(mockFetch).toHaveBeenCalledWith(exampleURL, options);
      expect(mockCapitalize).toHaveBeenCalledTimes(1);
    });

    it('should call originalFetch without headers if options is undefined', async () => {
      const mockFetch = vi.fn();

      const fetch = createFetch(mockFetch);

      await fetch(exampleURL);

      expect(mockFetch).toHaveBeenCalledWith(exampleURL, undefined);
    });
  });
});
