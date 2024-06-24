'use client';

import { ButtonSticky } from '@susu/headless-commerce/components/ButtonSticky/ButtonSticky';
import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import type { PromotionEvents, StickyButton } from '@susu/headless-commerce/gql/generated/graphql';
import type {
  StickyButtonQuery,
  StickyButtonQueryVariables,
} from '@susu/headless-commerce/gql/generated/stickyButton.operation';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import { trackClickPromotion } from '@susu/headless-commerce/utils/tracking/tracking';
import { useCallback, useRef } from 'react';
import type { OperationResult } from 'urql';

export type ClientStickyButtonContainerSectionProps = {
  query: OperationResult<StickyButtonQuery, StickyButtonQueryVariables>;
  automationPageId: string;
};

export default function ClientStickyButtonContainerSection({
  query,
  automationPageId,
}: Readonly<ClientStickyButtonContainerSectionProps>) {
  const pageType = usePageType();
  const locale = useLocale();
  const country = useCountry();

  const button = query.data?.stickyButton as Partial<StickyButton>;
  const customer = useCustomer();
  const ref = useRef<HTMLDivElement>(null);

  const handleOnClick = useCallback(() => {
    trackClickPromotion(ref, button.promotionEvents as PromotionEvents, pageType, {
      locale,
      country,
      customer: customer as Customer,
    });
  }, [button.promotionEvents, country, customer, locale, pageType]);

  return (
    <ButtonSticky
      ref={ref}
      buttonData={button}
      buttonClass={`body-small-regular`}
      onClick={handleOnClick}
      pageType={pageType}
      automationPageId={automationPageId}
    />
  );
}
