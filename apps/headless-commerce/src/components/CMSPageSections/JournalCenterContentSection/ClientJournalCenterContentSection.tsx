'use client';

import { ClientContentButton } from '@headless-commerce/components/ContentButton/ClientContentButton';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { customer } from '@headless-commerce/contexts/customer';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import type {
  JournalCenterContentBlock,
  JournalCenterContentBlockButton,
} from '@headless-commerce/gql/generated/graphql';
import type {
  JournalCenterQuery,
  JournalCenterQueryVariables,
} from '@headless-commerce/gql/generated/journalCenter.operation';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import type { PromotionEvents } from '@headless-commerce/utils/tracking/tracking';
import { trackClickPromotion } from '@headless-commerce/utils/tracking/tracking';
import { useSignals } from '@preact/signals-react/runtime';
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
  useSignals();
  const pageType = usePageType();
  const locale = useLocale();
  const country = useCountry();
  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    if (customer.value) {
      trackClickPromotion(
        ref,
        query.data?.journalCenterContentBlock?.button?.promotionEvents as PromotionEvents,
        'journal',
        {
          locale,
          country,
        },
      );
    }
  }, [country, customer.value, locale, query.data?.journalCenterContentBlock?.button?.promotionEvents]);

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
