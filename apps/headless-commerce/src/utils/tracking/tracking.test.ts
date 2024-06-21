import * as environment from '@headless-commerce/utils/environment';
import { JSDOM } from 'jsdom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import * as addScript from '../addScript';
import {
  GAPromotionData,
  insertGoogleTrackingScript,
  isOtherEvent,
  isStartEvent,
  isVariablesEvent,
  productImpressions,
  pushGA,
  reorderedDatalayerEvents,
  toSSMProduct,
} from './GA';
import { insertCookieTrackingScript } from './tracking';

const testUrl = 'http://test.com';

describe('tracking', () => {
  describe('push function', () => {
    let originalWindow: Window & typeof globalThis;
    let item: Record<string, unknown>;

    beforeEach(() => {
      const dom = new JSDOM();
      originalWindow = global.window;
      // @ts-ignore
      global.window = dom.window;
      global.window.dataLayer = [];
      item = {};
    });

    afterEach(() => {
      vi.restoreAllMocks();
      global.window = originalWindow;
    });

    it('should push item to dataLayer', () => {
      const pushSpy = vi.spyOn(global.window.dataLayer, 'push');

      pushGA(item);

      expect(pushSpy).toBeCalledWith(item);
      expect(global.window.dataLayer).toContain(item);
    });
  });

  describe('isStartEvent function', () => {
    it('should return true if event property is "gtm.js"', () => {
      const mockEvent = { event: 'gtm.js' };

      const result = isStartEvent(mockEvent);

      expect(result).toBe(true);
    });

    it('should return false if event property is not "gtm.js"', () => {
      const mockEvent = { event: 'otherEvent' };

      const result = isStartEvent(mockEvent);

      expect(result).toBe(false);
    });

    it('should return false if event property does not exist', () => {
      const mockEvent = { otherKey: 'otherValue' };

      const result = isStartEvent(mockEvent);

      expect(result).toBe(false);
    });
  });

  describe('isVariablesEvent function', () => {
    it('should return true if ssm_products property exists', () => {
      const mockEvent = { ssm_products: 'product1' };

      const result = isVariablesEvent(mockEvent);

      expect(result).toBe(true);
    });

    it('should return false if ssm_products property does not exist', () => {
      const mockEvent = { otherKey: 'otherValue' };

      const result = isVariablesEvent(mockEvent);

      expect(result).toBe(false);
    });
  });

  describe('isOtherEvent function', () => {
    it('should return true if event is not a start event and not a variables event', () => {
      const mockEvent = { otherKey: 'otherValue' };

      const result = isOtherEvent(mockEvent);

      expect(result).toBe(true);
    });

    it('should return false if event is a start event', () => {
      const mockEvent = { event: 'gtm.js' };

      const result = isOtherEvent(mockEvent);

      expect(result).toBe(false);
    });

    it('should return false if event is a variables event', () => {
      const mockEvent = { ssm_products: 'product1' };

      const result = isOtherEvent(mockEvent);

      expect(result).toBe(false);
    });
  });

  describe('reorderedDatalayerEvents function', () => {
    let originalWindow: Window & typeof globalThis;

    beforeEach(() => {
      originalWindow = global.window;
      const dom = new JSDOM();
      // @ts-ignore
      global.window = dom.window;
      global.window.dataLayer = [];
    });

    afterEach(() => {
      vi.restoreAllMocks();
      global.window = originalWindow;
    });

    it('should reorder events in dataLayer if window object exists', () => {
      const mockEvent1 = { 'gtm.start': new Date().getTime(), 'event': 'gtm.js' };
      const mockEvent2 = { ssm_products: 'product1' };
      const mockEvent3 = { otherEvent: 'event' };
      global.window.dataLayer = [mockEvent2, mockEvent1, mockEvent3];

      const result = reorderedDatalayerEvents();

      expect(result[0]).toEqual(mockEvent1);
      expect(result[1]).toEqual(mockEvent2);
      expect(result[2]).toEqual(mockEvent3);
    });
  });

  describe('insertGoogleTrackingScript', () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    it.skip('should call push, reorderedDatalayerEvents, and addScript with correct arguments', async () => {
      const pushSpy = vi.spyOn({ push: pushGA }, 'push');
      const reorderedDatalayerEventsSpy = vi.spyOn({ reorderedDatalayerEvents }, 'reorderedDatalayerEvents');
      const addScriptSpy = vi.spyOn(addScript, 'addScript');

      insertGoogleTrackingScript();

      expect(pushSpy).toHaveBeenCalledTimes(1);
      expect(pushSpy).toHaveBeenCalledWith({ 'event': 'gtm.js', 'gtm.start': expect.any(Number) });
      expect(reorderedDatalayerEventsSpy).toHaveBeenCalled();
      expect(addScriptSpy).toHaveBeenCalledWith(
        `https://stm.suitsupply.com/gtm.js?id=GTM-${process.env.NEXT_PUBLIC_GTM}`,
        {
          async: true,
        },
      );
    });
  });

  describe('insertCookieTrackingScript', () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('should call addScript with correct arguments and define window.OptanonWrapper', async () => {
      const addScriptSpy = vi.spyOn(addScript, 'addScript');
      const mockedIsDevelopment = vi.spyOn(environment, 'isDevelopment').mockReturnValue(false);
      const mockedIsBrowser = vi.spyOn(environment, 'isBrowser').mockReturnValue(true);
      window.cookieTrackingScriptInserted = false;

      insertCookieTrackingScript();

      expect(mockedIsDevelopment).toBeCalledTimes(1);
      expect(mockedIsBrowser).toBeCalledTimes(1);
      expect(addScriptSpy).toHaveBeenCalledWith(
        `https://cdn.cookielaw.org/consent/${process.env.NEXT_PUBLIC_ONETRUST_ID}/OtAutoBlock.js`,
      );
      expect(addScriptSpy).toHaveBeenCalledWith(`https://cdn.cookielaw.org/scripttemplates/otSDKStub.js`, {
        'data-document-language': 'true',
        'data-ot-ignore': 'true',
        'charSet': 'UTF-8',
        'data-domain-script': `${process.env.NEXT_PUBLIC_ONETRUST_ID}`,
      });
      // @ts-ignore
      expect(window.OptanonWrapper).toBeDefined();
    });
  });

  describe('promotionData', () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('should return correct data when all parameters are provided', () => {
      const mockPromotionEvents = {
        promotionClick: 'click1',
        promotionCreative: 'creative1',
        promotionPosition: 2,
        promotionDimension24: 'dimension24',
        promotionDimension26: 'dimension26',
      };
      const mockPageType = 'pageType1';

      const mockLocation = {
        href: testUrl,
      } as Location;

      vi.spyOn(window, 'location', 'get').mockReturnValue(mockLocation);

      const result = GAPromotionData(mockPromotionEvents, mockPageType);

      expect(result).toEqual({
        id: 'click1',
        name: 'click1',
        creative: 'creative1',
        page_type: 'pageType1',
        item_id: '',
        metaTag: '',
        articleLocation: testUrl,
        position: 2,
        dimension24: 'dimension24',
        dimension26: 'dimension26',
      });
    });

    it('should return correct data when optional parameters are not provided', () => {
      const mockPromotionEvents = {
        promotionClick: 'click1',
        promotionCreative: 'creative1',
      };
      const mockPageType = '';

      const mockLocation = {
        href: testUrl,
      } as Location;

      vi.spyOn(window, 'location', 'get').mockReturnValue(mockLocation);

      const result = GAPromotionData(mockPromotionEvents, mockPageType);

      expect(result).toEqual({
        id: 'click1',
        name: 'click1',
        creative: 'creative1',
        page_type: '',
        item_id: '',
        metaTag: '',
        articleLocation: testUrl,
        position: 1,
      });
    });
  });

  describe('productImpressions', () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('should return correct data when product type is master', () => {
      const mockProduct = {
        type: 'master',
        id: 'product1',
        price: 100,
        categoryId: 'category1',
        size: 'size1',
        colorId: 'color1',
        // other properties...
      };
      const mockSiteId = 'siteId1';
      const mockLoggedIn = true;
      const mockList = 'list1';
      const mockListId = 'listId1';
      const mockPosition = 1;

      const result = productImpressions({
        product: mockProduct,
        siteId: mockSiteId,
        loggedIn: mockLoggedIn,
        list: mockList,
        listId: mockListId,
        position: mockPosition,
      });

      expect(result).toEqual([
        {
          brand: 'Men',
          category: mockProduct.categoryId,
          dimension12: 'readytowear_customizable',
          dimension3: 'false',
          dimension61: 13,
          dimension62: '',
          id: mockProduct.id,
          list: 'list1',
          list_id: 'listId1',
          loggedInState: mockLoggedIn,
          marketingCloudPID: `${mockSiteId}_${mockProduct.id}`,
          name: mockProduct.id,
          position: '1',
          price: mockProduct.price,
          variant: mockProduct.size !== '' ? mockProduct.size : mockProduct.colorId,
          variantId: mockProduct.id,
        },
      ]);
    });
  });

  describe('toSSMProduct', () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('should return correct data when masterProductId is present, does not include DYO, and size is present', () => {
      const mockItem = {
        masterProductId: 'product1',
        size: 'size1',
        priceAfterDiscount: 100,
        productId: 'productId1',
        quantity: 1,
      };
      const mockCurrency = 'USD';
      const mockSiteID = 'siteId1';

      const result = toSSMProduct(mockItem, mockCurrency, mockSiteID);

      expect(result).toEqual({
        amount: (Number(mockItem.priceAfterDiscount) / Number(mockItem.quantity)).toFixed(2),
        identifier: String(mockItem.masterProductId),
        variation: String(mockItem.size),
        currency: String(mockCurrency),
        variantId: String(mockItem.productId),
        marketingcloudpid: `${mockSiteID}_${mockItem.productId}`,
        quantity: String(mockItem.quantity),
      });
    });
  });
});
