'use client';

import { ClientContentButton } from '@susu/headless-commerce/components/ContentButton/ClientContentButton';
import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import type {
  JournalCenterContentBlock,
  JournalCenterContentBlockButton,
} from '@susu/headless-commerce/gql/generated/graphql';
import type {
  JournalCenterQuery,
  JournalCenterQueryVariables,
} from '@susu/headless-commerce/gql/generated/journalCenter.operation';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import type { PromotionEvents } from '@susu/headless-commerce/utils/tracking/tracking';
import { trackClickPromotion } from '@susu/headless-commerce/utils/tracking/tracking';
import { useCallback, useRef } from 'react';
import type { OperationResult } from 'urql';

export type ClientJournalCenterContentSectionProps = {
  query: OperationResult<JournalCenterQuery, JournalCenterQueryVariables>;
  automationPageId: string;
};

export default function ClientJournalCenterContentSection({
  query,
  automationPageId,
}: Readonly<ClientJournalCenterContentSectionProps>) {
  const pageType = usePageType();
  const customer = useCustomer();
  const locale = useLocale();
  const country = useCountry();
  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    trackClickPromotion(
      ref,
      query.data?.journalCenterContentBlock?.button?.promotionEvents as PromotionEvents,
      'journal',
      {
        locale,
        country,
        customer: customer as Customer,
      },
    );
  }, [country, customer, locale, query.data?.journalCenterContentBlock?.button?.promotionEvents]);

  const { button, automationId } = query.data?.journalCenterContentBlock as JournalCenterContentBlock;

  return (
    <ClientContentButton
      ref={ref}
      buttonData={button as JournalCenterContentBlockButton}
      onClick={onButtonClick}
      pageType={pageType}
      automationPageId={`${automationPageId}_${automationId}`}
    />
  );
}
