import { CMSHeaderType } from '@susu/headless-commerce/contexts/header/types';
import type {
  CountryValueType,
  CreativeValueType,
  CurrencyValueType,
  LanguageValueType,
  LoggedInValueType,
  PageTypeValueType,
  ProductsCart,
  PromotionViewedProperties,
} from '@susu/headless-commerce/libs/avo/avo';
import type { PageType } from '@susu/headless-commerce/types/PageType';
import type { SSMProduct, SSMTrackingProduct } from '@susu/headless-commerce/utils/tracking/GA';

import { isServer } from '../environment';
import { pathnameWithoutLocalePrefix } from '../pathname';
import type { PromotionEvents } from './tracking';

export type CartTrackingProduct = {
  amount: string;
  identifier: string;
  variation: string;
  currency: string;
  variant_id: string;
  marketingcloudpid: string;
  quantity: string;
};

export type CartTrackingOneSize = {
  amount: string;
  identifier: string;
  variation: string;
  currency: string;
  variant_id: string;
  marketingcloudpid: string;
  quantity: string;
};

export type CartTrackingCustomMade = {
  amount: string;
  currency: string;
  identifier: string;
  quantity: string;
  variant_id: string;
};

export type CartTrackingGiftCard = {
  identifier: string;
  amount: string;
  currency: string;
  variant_id: string;
  quantity: string;
};

export type CartProduct = CartTrackingProduct | CartTrackingOneSize | CartTrackingCustomMade | CartTrackingGiftCard;

export type SegmentPromotionData = {
  page_type: PageType;
  url: string;
  location_id: string;
  promotion_id: string;
  name: string;
  creative: string;
  position: number;
};

export type CommonEventProperties = {
  country: CountryValueType;
  currency: CurrencyValueType;
  language: LanguageValueType;
  localeVisited: string;
  userId: string;
  loggedIn: LoggedInValueType;
  ga_client_id: string | null;
  ga_session_id: string | null;
  ga_session_number: string | null;
};

export enum SegmentHeaderType {
  HEADER_IS_TRANSPARENT = 'transparent',
  HEADER_IS_NOT_TRANSPARENT = 'white',
  HEADER_IS_TRANSPARENT_BLACK = 'black',
}

export const getSegmentHeaderTypeByCMSHeaderType = (cmsHeaderType: CMSHeaderType) => {
  switch (cmsHeaderType) {
    case CMSHeaderType.HEADER_IS_TRANSPARENT:
      return SegmentHeaderType.HEADER_IS_TRANSPARENT;
    case CMSHeaderType.HEADER_IS_NOT_TRANSPARENT:
      return SegmentHeaderType.HEADER_IS_NOT_TRANSPARENT;
    case CMSHeaderType.HEADER_IS_TRANSPARENT_BLACK:
      return SegmentHeaderType.HEADER_IS_TRANSPARENT_BLACK;
  }
};

export const URLData = (): {
  url: string;
  locationId: string;
  path: string;
} => {
  if (isServer()) {
    return {
      url: '',
      locationId: '',
      path: '',
    };
  }

  const currentURL = new URL(window.location.href);
  const { pathname } = currentURL;
  const withoutLocale = pathnameWithoutLocalePrefix(pathname);

  return {
    url: currentURL.href.replace(pathname, withoutLocale),
    locationId: currentURL.href,
    path: withoutLocale,
  };
};

export const SSMToProductCart = (item: SSMProduct): ProductsCart => {
  const { amount, identifier, variation, currency, quantity, variantId } = item as SSMTrackingProduct;

  return {
    amount: parseFloat(amount),
    identifier,
    variation,
    currency: currency as CurrencyValueType,
    variantId,
    quantity: parseInt(quantity, 10),
  } as unknown as ProductsCart;
};

export const segmentPromotionData = (
  promotionEvents: PromotionEvents,
  pageType: PageType,
): Omit<PromotionViewedProperties, keyof CommonEventProperties> => {
  const { url, locationId } = URLData();

  const { promotionClick, promotionCreative, promotionPosition } = promotionEvents;

  return {
    pageType: pageType as PageTypeValueType,
    url,
    locationId,
    promotionId: promotionClick as string,
    name: promotionClick as string,
    creative: promotionCreative as CreativeValueType,
    position: promotionPosition ?? 1,
    ssMedium: undefined,
    ssSource: '',
  };
};
