import type { Locale } from '@susu/headless-commerce/config/locale';
import type { SiteId } from '@susu/headless-commerce/gql/generated/graphql';
import { afterEach, describe, expect, it, vi } from 'vitest';

import type { LayerImageProps } from './layerImage';
import {
  composeLayerAPIUrl,
  fetchLayerImageTransformation,
  getComposedLayerApiBaseUrl,
  getImageUrl,
} from './layerImage';

const originlFetch = global.fetch;

describe('getLayerAPIUrl', () => {
  it('should return the correct API URL', () => {
    const modelId = 'model-1';
    const productIds = ['product-1', 'product-2'];
    const siteId = 'INT';
    const locale = 'en-us';

    const result = composeLayerAPIUrl({ modelId, productIds, siteId: siteId as SiteId, locale: locale as Locale });

    const expectedUrl = `${getComposedLayerApiBaseUrl()}/api/composedUrl?siteID=INT&locale=en-US&ImageCheck=true&ModelLayer=model-1&Products=product-1,product-2`;
    expect(result).toEqual(expectedUrl);
  });
});

describe('fetchLayerImageTransformation', () => {
  afterEach(() => {
    vi.resetModules();
    vi.doUnmock('fetch');
    global.fetch = originlFetch;
  });

  it('should return the image transformation data', async () => {
    const props = {
      modelId: 'model-1',
      productIds: ['product-1', 'product-2'],
      siteId: 'INT',
      locale: 'en-us',
    };

    const expectedData = 'image transformation data';

    // Mock the fetch function
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      text: vi.fn().mockResolvedValue(expectedData),
    });

    const result = await fetchLayerImageTransformation(props as LayerImageProps);

    expect(result).toEqual(expectedData);
    expect(global.fetch).toHaveBeenCalledWith(
      `${getComposedLayerApiBaseUrl()}/api/composedUrl?siteID=INT&locale=en-US&ImageCheck=true&ModelLayer=model-1&Products=product-1,product-2`,
    );
  });

  it('should return the cached image transformation data', async () => {
    const props = {
      modelId: 'model-x',
      productIds: ['product-y', 'product-z'],
      siteId: 'INT',
      locale: 'en-us',
    };

    const expectedData = 'image transformation data';

    // Mock the fetch function
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      text: vi.fn().mockResolvedValue(expectedData),
    });

    const result = await fetchLayerImageTransformation(props as LayerImageProps);
    const result2 = await fetchLayerImageTransformation(props as LayerImageProps);

    expect(result).toEqual(expectedData);
    expect(result2).toEqual(expectedData);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it('should throw an error if image transformation retrieval fails', async () => {
    const props = {
      modelId: 'model-2',
      productIds: ['product-1', 'product-2'],
      siteId: 'INT',
      locale: 'en-us',
    };

    // Mock the fetch function to throw an error
    global.fetch = vi.fn().mockRejectedValue(new Error('Failed to fetch'));

    await expect(fetchLayerImageTransformation(props as LayerImageProps)).rejects.toThrow('Failed to fetch');
    expect(global.fetch).toHaveBeenCalledWith(
      `${getComposedLayerApiBaseUrl()}/api/composedUrl?siteID=INT&locale=en-US&ImageCheck=true&ModelLayer=model-2&Products=product-1,product-2`,
    );
  });
});

describe('getImageUrl', () => {
  afterEach(() => {
    vi.resetModules();
    vi.doUnmock('fetch');
    global.fetch = originlFetch;
  });

  it('should return the image URL', async () => {
    const props = {
      modelId: 'model-3',
      productIds: ['product-4', 'product-5'],
      siteId: 'INT',
      locale: 'en-us',
    };

    const expectedUrl = 'https://cdn.suitsupply.com/image/upload/image transformation data';
    const expectedData = 'image transformation data';

    // Mock the fetch function
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      text: vi.fn().mockResolvedValue(expectedData),
    });

    const result = await getImageUrl(props as LayerImageProps);

    expect(result).toEqual(expectedUrl);
    expect(global.fetch).toHaveBeenCalledWith(
      `${getComposedLayerApiBaseUrl()}/api/composedUrl?siteID=INT&locale=en-US&ImageCheck=true&ModelLayer=model-3&Products=product-4,product-5`,
    );
  });

  it('should throw an error if image transformation retrieval fails', async () => {
    const props = {
      modelId: 'model-5',
      productIds: ['product-6', 'product-2'],
      siteId: 'INT',
      locale: 'en-us',
    };

    // Mock the fetch function to throw an error
    global.fetch = vi.fn().mockRejectedValue(new Error('Failed to fetch'));

    await expect(getImageUrl(props as LayerImageProps)).rejects.toThrow('Failed to fetch');
    expect(global.fetch).toHaveBeenCalledWith(
      `${getComposedLayerApiBaseUrl()}/api/composedUrl?siteID=INT&locale=en-US&ImageCheck=true&ModelLayer=model-5&Products=product-6,product-2`,
    );
  });
});
