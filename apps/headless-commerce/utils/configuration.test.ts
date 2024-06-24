import { describe, expect, it, vi } from 'vitest';

import { getConfiguration } from './configuration';
import { mockFetch } from './test/mock';

const fetchSpy = vi.spyOn(global, 'fetch');

describe('configuration', () => {
  describe('getConfiguration', () => {
    it('should return the configuration when the fetch is successful', async () => {
      const fetch = fetchSpy.mockImplementation(
        mockFetch({
          response: 'test',
        }),
      );

      const result = await getConfiguration();

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(result).toEqual({ response: 'test' });
    });
  });
});
