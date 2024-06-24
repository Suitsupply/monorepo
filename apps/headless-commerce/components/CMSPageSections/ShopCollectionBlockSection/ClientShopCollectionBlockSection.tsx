'use client';

import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import type {
  CommerceProductsWithImgTransformQuery,
  CommerceProductsWithImgTransformQueryVariables,
} from '@susu/headless-commerce/gql/generated/commerceProductsWithImgTransform.operation';
import type { Button } from '@susu/headless-commerce/gql/generated/graphql';
import type {
  ShopCollectionQuery,
  ShopCollectionQueryVariables,
} from '@susu/headless-commerce/gql/generated/shopCollection.operation';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import type { PromotionEvents } from '@susu/headless-commerce/utils/tracking/tracking';
import { trackClickPromotion, trackImpressionPromotion } from '@susu/headless-commerce/utils/tracking/tracking';
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
  const pageType = usePageType();
  const locale = useLocale();
  const country = useCountry();

  const buttonRef = useRef<HTMLDivElement>(null);

  const contentItems = contentfulQuery.data?.shopCollectionBlock?.contentSectionsCollection?.items;
  const buttonItem = contentItems?.find(item => item?.__typename === 'Button');
  const customer = useCustomer();

  const onClick = useCallback(() => {
    trackClickPromotion(buttonRef, buttonItem?.promotionEvents as PromotionEvents, 'journal', {
      locale,
      country,
      customer: customer as Customer,
    });
  }, [buttonItem?.promotionEvents, country, customer, locale]);

  useEffect(() => {
    if (buttonRef.current) {
      trackImpressionPromotion(buttonRef, buttonItem?.promotionEvents as PromotionEvents, pageType, {
        locale,
        country,
        customer: customer as Customer,
      });
    }
  }, [buttonItem?.promotionEvents, country, customer, locale, pageType]);

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
