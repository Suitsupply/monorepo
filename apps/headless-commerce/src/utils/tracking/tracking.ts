'use client';

import { customerPromise } from '@headless-commerce/contexts/customer';
import type { Maybe, Product } from '@headless-commerce/gql/generated/graphql';
import type {
  BtcSummaryEditProperties,
  ChangeCountryProperties,
  ChangeLanguageProperties,
  CreativeValueType,
  CufflinkOptionSelectProperties,
  HeaderAccountClickProperties,
  HeaderLogoClickProperties,
  HeaderMinicartClickProperties,
  HeaderWishlistClickProperties,
  JacketOptionSelectProperties,
  MenuClickedProperties,
  MenuOpenedProperties,
  NextStepProperties,
  PageLoadedProperties,
  PageTypeValueType,
  PreviousStepProperties,
  ProductClickedProperties,
  ShirtOptionSelectProperties,
  ShoesOptionSelectProperties,
  StyleOptionSelectProperties,
  SuspendersOptionSelectProperties,
  TrousersOptionSelectProperties,
} from '@headless-commerce/libs/avo/avo';
import { pageLoaded as avoPageLoaded, promotionClicked, promotionViewed } from '@headless-commerce/libs/avo/avo';
import { inspectorLoaded } from '@headless-commerce/libs/segment/avoDestination';
import type { EnrichEventsProps } from '@headless-commerce/libs/segment/utils';
import { enrichEvent } from '@headless-commerce/libs/segment/utils';
import type { PageType } from '@headless-commerce/types/PageType';
import { addScript } from '@headless-commerce/utils/addScript';
import { isBrowser, isDevelopment, isServer } from '@headless-commerce/utils/environment';
import { observeOnce } from '@headless-commerce/utils/interserctionObserver';
import { GAPromotionData, productImpressions, pushGA } from '@headless-commerce/utils/tracking/GA';
import type { RefObject } from 'react';

import { errorHandler } from '../errorHandler';
import log from '../log';
import { GA_DEFAULT_EVENT } from './constants';
import { segmentPromotionData, URLData } from './segment';

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

export type PromotionEvents = {
  promotionView?: Maybe<string>;
  promotionClick?: Maybe<string>;
  promotionCreative?: Maybe<string>;
  promotionDimension24?: Maybe<string>;
  promotionDimension26?: Maybe<string>;
  promotionEventAction?: Maybe<string>;
  promotionEventCategory?: Maybe<string>;
  promotionEventLabel?: Maybe<string>;
  promotionPosition?: Maybe<number>;
};

export type TrackEventSegmentProps =
  | {
      event: 'btcSummaryEdit';
      properties: BtcSummaryEditProperties;
    }
  | {
      event: 'changeCountry';
      properties: ChangeCountryProperties;
    }
  | {
      event: 'changeLanguage';
      properties: ChangeLanguageProperties;
    }
  | {
      event: 'headerAccountClick';
      properties: HeaderAccountClickProperties;
    }
  | {
      event: 'headerLogoClick';
      properties: HeaderLogoClickProperties;
    }
  | {
      event: 'headerMinicartClick';
      properties: HeaderMinicartClickProperties;
    }
  | {
      event: 'headerWishlistClick';
      properties: HeaderWishlistClickProperties;
    }
  | {
      event: 'menuClicked';
      properties: MenuClickedProperties;
    }
  | {
      event: 'menuOpened';
      properties: MenuOpenedProperties;
    }
  | {
      event: 'nextStep';
      properties: NextStepProperties;
    }
  | {
      event: 'previousStep';
      properties: PreviousStepProperties;
    }
  | {
      event: 'bowtieOptionSelect';
      properties: ShirtOptionSelectProperties;
    }
  | {
      event: 'cufflinkOptionSelect';
      properties: CufflinkOptionSelectProperties;
    }
  | {
      event: 'jacketOptionSelect';
      properties: JacketOptionSelectProperties;
    }
  | {
      event: 'shirtOptionSelect';
      properties: ShirtOptionSelectProperties;
    }
  | {
      event: 'shoesOptionSelect';
      properties: ShoesOptionSelectProperties;
    }
  | {
      event: 'trousersOptionSelect';
      properties: TrousersOptionSelectProperties;
    }
  | {
      event: 'suspendersOptionSelect';
      properties: SuspendersOptionSelectProperties;
    }
  | {
      event: 'productClicked';
      properties: ProductClickedProperties;
    }
  | {
      event: 'styleOptionSelect';
      properties: StyleOptionSelectProperties;
    };

export type TrackEventProps = {
  ga?: {
    event?: string;
    eventCategory: string;
    eventAction: string;
    eventLabel: string;
  };
  segment?: TrackEventSegmentProps;
};

declare global {
  interface Window {
    googleTrackingScriptInserted: boolean;
    cookieTrackingScriptInserted: boolean;
  }
}

// General tooling for tracking
export const insertCookieTrackingScript = () => {
  if (isDevelopment() || (isBrowser() && window.cookieTrackingScriptInserted)) {
    return;
  }

  addScript(`https://cdn.cookielaw.org/consent/${process.env.NEXT_PUBLIC_ONETRUST_ID}/OtAutoBlock.js`);
  addScript(`https://cdn.cookielaw.org/scripttemplates/otSDKStub.js`, {
    'data-document-language': 'true',
    'data-ot-ignore': 'true',
    'charSet': 'UTF-8',
    'data-domain-script': `${process.env.NEXT_PUBLIC_ONETRUST_ID}`,
  });

  // @ts-ignore
  window.OptanonWrapper = () => {};

  window.cookieTrackingScriptInserted = true;
};

export const serializeTrackingCountryName = (countryName: string) => {
  if (countryName === 'The Netherlands') {
    return 'Netherlands';
  }

  return countryName;
};

// Event tracking
export const trackEvent = async ({ ga, segment }: TrackEventProps) => {
  if (isServer()) {
    return;
  }

  log.debug({
    method: 'trackEvent',
    ga,
    segment,
  });

  if (ga) {
    const { event = GA_DEFAULT_EVENT, eventCategory, eventAction, eventLabel } = ga;
    pushGA({
      event,
      eventCategory,
      eventAction,
      eventLabel,
    });
  }

  if (segment) {
    try {
      const avoModule = await import('@headless-commerce/libs/avo/avo');

      if (!avoModule) {
        return;
      }

      const trackMethod = avoModule[segment.event as keyof typeof avoModule] as Function;

      trackMethod(segment.properties);
    } catch (error) {
      errorHandler(error as Error);
    }
  }
};

export const pageLoaded: typeof avoPageLoaded = (properties: PageLoadedProperties) => {
  if (isServer()) {
    return;
  }

  log.debug({
    method: 'avoPageLoaded',
    properties,
  });

  import('@headless-commerce/libs/avo/avo')
    .then(() => {
      avoPageLoaded(properties);
    })
    .catch(errorHandler);
};

// Product tracking
export const trackClickProduct = ({
  product,
  siteId,
  loggedIn,
  list,
  listId,
  position,
  currencyCode,
}: {
  product: Product;
  siteId: string;
  loggedIn: boolean;
  list: string;
  listId: string;
  position: number;
  currencyCode: string;
}) => {
  const { type } = product;

  if (type === 'master') {
    pushGA({
      event: 'productClick',
      ecommerce: {
        currencyCode: currencyCode,
        click: {
          actionField: {
            list: 'Journal',
            action: 'click',
            list_id: 'journal_the-perennial-suit',
          },
          products: [
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
          ],
        },
      },
    });
  }

  if (type === 'set') {
    pushGA({
      event: 'productClick',
      ecommerce: {
        currencyCode: currencyCode,
        click: {
          actionField: {
            list: 'Journal',
            action: 'click',
            list_id: 'journal_the-perennial-suit',
          },
          products: [
            product.setProducts?.map(prd => ({
              id: prd.id,
              name: prd.id,
              price: prd.price,
              brand: 'Men',
              category: prd.categoryName,
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
            })),
          ],
        },
      },
    });
  }
};
export const trackImpressionProduct = ({
  elementRef,
  product,
  currencyCode,
  siteId,
  loggedIn,
  list,
  listId,
  position,
}: {
  elementRef: RefObject<Element>;
  product: Partial<Product>;
  currencyCode: string;
  siteId: string;
  loggedIn: boolean;
  list: string;
  listId: string;
  position?: number;
}) => {
  if (elementRef.current) {
    observeOnce(elementRef, () => {
      pushGA({
        event: 'loadedImpressions',
        ecommerce: {
          currencyCode,
          impressions: productImpressions({
            product,
            list,
            listId,
            loggedIn,
            siteId,
            position,
          }),
        },
      });
    });
  }
};

/**
 * Returns the vertical position of the given element relative to the document.
 *
 * @param elementRef - A reference object pointing to an HTML element
 * @returns The vertical position (in pixels) of the element from the top of the document.
 */
const getElementRefPosition = (elementRef: RefObject<Element>): number =>
  Math.ceil(Math.max(1, elementRef.current?.getBoundingClientRect().y ?? 1) + window.scrollY);

/**
 * Tracks a click on a promotional element and sends the relevant tracking data to Google Analytics
 * and the Segment platform.
 *
 * @param elementRef - A reference to the HTML element that was clicked.
 * @param promotionEvents - The event data related to the promotion.
 * @param pageType - The type of the page where the promotion click occurred.
 * @param enrichProps - Additional properties to enrich the event with.
 */
export const trackClickPromotion = async <T extends Element>(
  elementRef: RefObject<T>,
  promotionEvents: PromotionEvents,
  pageType: string,
  enrichProps: EnrichEventsProps,
) => {
  const promoData = GAPromotionData(promotionEvents, pageType);
  const { url, locationId } = URLData();
  promoData.position = getElementRefPosition(elementRef);

  pushGA({
    event: 'promotionClick',
    ecommerce: {
      promoClick: {
        promotions: [promoData],
      },
    },
  });

  promotionClicked(
    enrichEvent(enrichProps, {
      pageType: pageType as PageTypeValueType,
      url,
      locationId,
      promotionId: promoData.id,
      name: promoData.name,
      creative: promoData.creative as CreativeValueType,
      position: promoData.position,
      ssMedium: null,
      ssSource: '',
      context: {},
    }),
  );
};

const observedList = new Map<RefObject<Element>, boolean>();
/**
 * Tracks an impression of a promotional element and sends the relevant tracking data to
 * Google Analytics and the Segment platform.
 *
 * This function ensures that the promotional element is tracked only once by using an observed list.
 *
 * @param elementRef - A reference to the HTML element that is being observed.
 * @param promotionEvents - The event data related to the promotion.
 * @param pageType - The type of the page where the promotion impression occurred.
 * @param enrichProps - Additional properties to enrich the event with.
 */
export const trackImpressionPromotion = async <T extends Element>(
  elementRef: RefObject<T>,
  promotionEvents: PromotionEvents,
  pageType: PageType,
  enrichProps: Omit<EnrichEventsProps, 'customer'>,
) => {
  if (!observedList.get(elementRef) && elementRef.current) {
    observedList.set(
      elementRef,
      observeOnce(elementRef, async () => {
        promotionEvents.promotionPosition = getElementRefPosition(elementRef);

        pushGA({
          event: 'promotionImpression',
          ecommerce: {
            promoView: {
              promotions: [GAPromotionData(promotionEvents, pageType)],
            },
          },
        });

        await customerPromise;

        if (!inspectorLoaded) {
          window.document.addEventListener(
            'avo_inspector_initialized',
            () => {
              promotionViewed(enrichEvent(enrichProps, segmentPromotionData(promotionEvents, pageType)));
            },
            { once: true },
          );
          return;
        }

        promotionViewed(enrichEvent(enrichProps, segmentPromotionData(promotionEvents, pageType)));
      }),
    );
  }
};
