'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { FaqItem } from '@susu/headless-commerce/gql/generated/graphql';
import { createRenderOptionsForAccordion } from '@susu/headless-commerce/utils/contentfulUtils';
import { generateIdentifier } from '@susu/headless-commerce/utils/identifier';
import log from '@susu/headless-commerce/utils/log';
import { trackEvent } from '@susu/headless-commerce/utils/tracking/tracking';
import { memo, useCallback, useEffect, useRef } from 'react';

export const FaqAccordionItem = memo(function FaqAccordionItem({ faqItem }: { faqItem: FaqItem }) {
  const faqAccordionItemRef = useRef<HTMLSsAccordionItemElement>(null);
  const itemId = faqItem?.question || generateIdentifier();

  useEffect(() => {
    import('@suits/ss-design-system/dist/components/ss-accordion-item')
      .then(({ defineCustomElement }) => defineCustomElement())
      .catch(log.error);
  });

  const onAccordionItemClick = useCallback(() => {
    const isAccordionActive = faqAccordionItemRef.current?.getAttribute('active') === null;
    trackEvent({
      ga: {
        eventCategory: 'Journal_Page_Interactions',
        eventAction: isAccordionActive ? 'Faq_Open' : 'Faq_Close',
        eventLabel: faqAccordionItemRef.current?.getAttribute('label') as string,
      },
    });
  }, []);

  return (
    <ss-accordion-item
      color-palette="dark"
      icon-open="plus"
      icon-close="minus"
      key={itemId}
      label={faqItem?.question as string}
      id={itemId}
      icon-position="end"
      full-width
      ref={faqAccordionItemRef}
      onClick={onAccordionItemClick}
    >
      {documentToReactComponents(faqItem?.answer?.json, createRenderOptionsForAccordion())}
    </ss-accordion-item>
  );
});
