'use client';

import { useCountry } from '@headless-commerce/contexts/country/client';
import { customer } from '@headless-commerce/contexts/customer';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import type {
  CommerceProductsWithImgTransformQuery,
  CommerceProductsWithImgTransformQueryVariables,
} from '@headless-commerce/gql/generated/commerceProductsWithImgTransform.operation';
import type { Button } from '@headless-commerce/gql/generated/graphql';
import type {
  ShopCollectionQuery,
  ShopCollectionQueryVariables,
} from '@headless-commerce/gql/generated/shopCollection.operation';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import type { PromotionEvents } from '@headless-commerce/utils/tracking/tracking';
import { trackClickPromotion, trackImpressionPromotion } from '@headless-commerce/utils/tracking/tracking';
import { useSignals } from '@preact/signals-react/runtime';
import { useCallback, useEffect, useRef } from 'react';
import type { OperationResult } from 'urql';

import { ClientContentButton } from '../../ContentButton/ClientContentButton';

export type ShopCollectioBlockCLientProps = {
  commerceQuery: OperationResult<CommerceProductsWithImgTransformQuery, CommerceProductsWithImgTransformQueryVariables>;
  contentfulQuery: OperationResult<ShopCollectionQuery, ShopCollectionQueryVariables>;
  automationPageId: string;
};

export default function ShopCollectionBlockClient({
  contentfulQuery,
  automationPageId,
}: Readonly<ShopCollectioBlockCLientProps>) {
  useSignals();
  const pageType = usePageType();
  const locale = useLocale();
  const country = useCountry();

  const buttonRef = useRef<HTMLDivElement>(null);

  const contentItems = contentfulQuery.data?.shopCollectionBlock?.contentSectionsCollection?.items;
  const buttonItem = contentItems?.find(item => item?.__typename === 'Button');

  const onClick = useCallback(() => {
    if (customer.value) {
      trackClickPromotion(buttonRef, buttonItem?.promotionEvents as PromotionEvents, 'journal', {
        locale,
        country,
      });
    }
  }, [buttonItem?.promotionEvents, country, customer.value, locale]);

  useEffect(() => {
    if (buttonRef.current) {
      trackImpressionPromotion(buttonRef, buttonItem?.promotionEvents as PromotionEvents, pageType, {
        locale,
        country,
      });
    }
  }, [buttonItem?.promotionEvents, country, customer.value, locale, pageType]);

  return (
    <>
      {buttonItem && (
        <ClientContentButton
          buttonData={buttonItem as Button}
          onClick={onClick}
          pageType={pageType}
          automationPageId={automationPageId}
        />
      )}
    </>
  );
}
