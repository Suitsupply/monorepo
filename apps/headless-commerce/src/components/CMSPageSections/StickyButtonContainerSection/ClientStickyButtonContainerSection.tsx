'use client';

import { ButtonSticky } from '@headless-commerce/components/ButtonSticky/ButtonSticky';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { customer } from '@headless-commerce/contexts/customer';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import type { PromotionEvents, StickyButton } from '@headless-commerce/gql/generated/graphql';
import type {
  StickyButtonQuery,
  StickyButtonQueryVariables,
} from '@headless-commerce/gql/generated/stickyButton.operation';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import { trackClickPromotion } from '@headless-commerce/utils/tracking/tracking';
import { useSignals } from '@preact/signals-react/runtime';
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
  useSignals();
  const pageType = usePageType();
  const locale = useLocale();
  const country = useCountry();

  const button = query.data?.stickyButton as Partial<StickyButton>;
  const ref = useRef<HTMLDivElement>(null);

  const handleOnClick = useCallback(() => {
    if (customer.value) {
      trackClickPromotion(ref, button.promotionEvents as PromotionEvents, pageType, {
        locale,
        country,
      });
    }
  }, [button.promotionEvents, country, customer.value, locale, pageType]);

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
