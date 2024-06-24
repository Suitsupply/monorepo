import type { Product } from '@susu/headless-commerce/gql/generated/graphql';
import { addScript } from '@susu/headless-commerce/utils/addScript';
import { isBrowser } from '@susu/headless-commerce/utils/environment';
import type { PromotionEvents } from '@susu/headless-commerce/utils/tracking/tracking';

export type GAPromotionDataType = {
  id: string;
  name: string;
  creative: string;
  page_type: string;
  item_id: '';
  metaTag: '';
  articleLocation: string;
  position: number;
  dimension24?: string;
  dimension26?: string;
};

export type SSMTrackingProduct = {
  amount: string;
  identifier: string;
  variation: string;
  currency: string;
  variantId: string;
  marketingcloudpid: string;
  quantity: string;
};

export type SSMTrackingOneSize = {
  amount: string;
  identifier: string;
  variation: string;
  currency: string;
  variantId: string;
  marketingcloudpid: string;
  quantity: string;
};

export type SSMTrackingCustomMade = {
  amount: string;
  currency: string;
  identifier: string;
  quantity: string;
  variantId: string;
};

export type SSMTrackingGiftCard = {
  identifier: string;
  amount: string;
  currency: string;
  variantId: string;
  quantity: string;
};

export type SSMProduct = SSMTrackingProduct | SSMTrackingOneSize | SSMTrackingCustomMade | SSMTrackingGiftCard;

export type ProductImpressionsProps = {
  product: Partial<Product>;
  siteId: string;
  loggedIn: boolean;
  list: string;
  listId: string;
  position?: number;
};

export const isStartEvent = (event: Record<string, unknown>) => event.event === 'gtm.js';
export const isVariablesEvent = (event: Record<string, unknown>) => typeof event.ssm_products !== 'undefined';
export const isOtherEvent = (event: Record<string, unknown>) => !isStartEvent(event) && !isVariablesEvent(event);

export const reorderedDatalayerEvents = (): Array<Record<string, unknown>> =>
  window?.dataLayer
    ?.filter(isStartEvent)
    .concat(window?.dataLayer?.filter(isVariablesEvent), window?.dataLayer?.filter(isOtherEvent));

export const insertGoogleTrackingScript = () => {
  if (isBrowser() && window.googleTrackingScriptInserted) {
    return;
  }

  pushGA({ 'event': 'gtm.js', 'gtm.start': new Date().getTime() });

  window.dataLayer = reorderedDatalayerEvents();

  addScript(`https://stm.suitsupply.com/gtm.js?id=GTM-${process.env.NEXT_PUBLIC_GTM}`, {
    async: true,
  });

  window.googleTrackingScriptInserted = true;
};

export const pushGA = (event: Record<string, unknown>): void => {
  window.dataLayer ||= [];
  window.dataLayer.push(event);
};

export const toSSMProduct = (item: Record<string, unknown>, currencyCode: string, siteID: string): SSMProduct => {
  if (item.masterProductId && !(item.masterProductId as string).includes('DYO') && item.size) {
    const result: SSMTrackingProduct = {
      amount: String(Math.round(Number(item.priceAfterDiscount))),
      identifier: String(item.masterProductId),
      variation: String(item.size),
      currency: String(currencyCode),
      variantId: String(item.productId),
      marketingcloudpid: `${siteID}_${item.productId}`,
      quantity: String(item.quantity),
    };
    return result;
  } else if (item.masterProductId === null && item.size === 'onesize') {
    const result: SSMTrackingOneSize = {
      amount: String(Math.round(Number(item.priceAfterDiscount))),
      identifier: String(item.productId),
      variation: 'One size',
      currency: currencyCode,
      variantId: String(item.productId),
      marketingcloudpid: `${siteID}_${item.productId}`,
      quantity: String(item.quantity),
    };
    return result;
  } else if (String(item.productId).includes('DYO')) {
    const result: SSMTrackingCustomMade = {
      amount: String(Math.round(Number(item.priceAfterDiscount))),
      currency: currencyCode,
      identifier: String(item.masterProductId),
      quantity: String(item.quantity),
      variantId: String(item.productId),
    };
    return result;
  } else {
    const identifier = item.type === 'physical' ? 'Gift Card' : 'E-gift card';

    const result: SSMTrackingGiftCard = {
      identifier,
      amount: String(Math.round(Number(item.price))),
      currency: currencyCode,
      variantId: identifier,
      quantity: '1',
    };
    return result;
  }
};

export const GAPromotionData = (promotionEvents: PromotionEvents, pageType: string): GAPromotionDataType => {
  const { promotionClick, promotionCreative, promotionPosition, promotionDimension24, promotionDimension26 } =
    promotionEvents;

  let href = '';
  href = window?.location.href;

  const data: GAPromotionDataType = {
    id: promotionClick as string,
    name: promotionClick as string,
    creative: promotionCreative as string,
    page_type: pageType,
    item_id: '',
    metaTag: '',
    articleLocation: href,
    position: promotionPosition ?? 1,
  };

  if (promotionDimension24) {
    data.dimension24 = promotionDimension24;
  }

  if (promotionDimension26) {
    data.dimension26 = promotionDimension26;
  }

  return data;
};

export const productImpressions = ({ product, siteId, loggedIn, list, listId, position }: ProductImpressionsProps) => {
  const { type } = product;

  if (type === 'master') {
    return [
      {
        id: product.id,
        name: product.id,
        price: product.price,
        brand: 'Men',
        category: product.categoryId,
        variant: product.size !== '' ? product.size : product.colorId,
        variantId: product.id,
        marketingCloudPID: `${siteId}_${product.id}`,
        loggedInState: loggedIn,
        dimension12: 'readytowear_customizable',
        dimension3: 'false', // in case if product is M&M
        dimension62: '', // Product set id
        dimension61: 13,
        position: `${position}`,
        list,
        list_id: listId,
      },
    ];
  }

  if (type === 'set') {
    return product.setProducts?.map(prd => ({
      id: prd.id,
      name: prd.id,
      price: prd.price,
      brand: 'Men',
      category: prd.categoryId,
      variant: prd.size !== '' ? prd.size : prd.colorId,
      variantId: prd.id,
      marketingCloudPID: `${siteId}_${prd.id}`,
      loggedInState: loggedIn,
      dimension12: 'readytowear_customizable',
      dimension3: 'true',
      dimension62: product.id, // Product set id
      dimension61: 13,
      position: `${position}`,
      list,
      list_id: listId,
    }));
  }
};
