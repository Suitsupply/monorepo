import { CMSHeaderType } from '@headless-commerce/contexts/header/types';
import type {
  CountryValueType,
  CreativeValueType,
  CurrencyValueType,
  LanguageValueType,
  LoggedInValueType,
  PageTypeValueType,
  ProductsCart,
  PromotionViewedProperties,
} from '@headless-commerce/libs/avo/avo';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import type { PageType } from '@headless-commerce/types/PageType';
import type { SSMProduct, SSMTrackingProduct } from '@headless-commerce/utils/tracking/GA';

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
  if (cmsHeaderType === CMSHeaderType.HEADER_IS_NOT_TRANSPARENT) {
    return SegmentHeaderType.HEADER_IS_NOT_TRANSPARENT;
  }

  return SegmentHeaderType.HEADER_IS_TRANSPARENT;
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

export const ssmToProductCart = (item: SSMProduct, country: CountryConfiguration): ProductsCart => {
  const { amount, identifier, variation, currency, quantity, variantId } = item as SSMTrackingProduct;

  return {
    amount: parseFloat(amount),
    identifier: identifier.toLowerCase(),
    variation,
    currency: currency.toLowerCase() as CurrencyValueType,
    variantId: variantId.toLowerCase(),
    quantity: parseInt(quantity, 10),
    marketingcloudpid: `${country.siteID}_${identifier}`.toLowerCase(),
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
