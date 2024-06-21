import { afterEach, describe, expect, it, vi } from 'vitest';

import { ocapiHostname, ocapiShopAPIBaseUrl, ocapiVersion } from './ocapi';

describe('ocapiShopAPIBaseUrl', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return correct URL for given siteId', () => {
    const siteId = 'testSiteId';
    const expectedUrl = `${ocapiHostname}/s/${siteId}/dw/shop/${ocapiVersion}`;

    expect(ocapiShopAPIBaseUrl(siteId)).toBe(expectedUrl);
  });

  it('should return correct URL for different siteId', () => {
    const siteId = 'anotherSiteId';
    const expectedUrl = `${ocapiHostname}/s/${siteId}/dw/shop/${ocapiVersion}`;

    expect(ocapiShopAPIBaseUrl(siteId)).toBe(expectedUrl);
  });
});
