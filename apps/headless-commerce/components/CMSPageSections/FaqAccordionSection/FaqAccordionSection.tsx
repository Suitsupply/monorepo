import type {
  FaqAccordionQuery,
  FaqAccordionQueryVariables,
} from '@susu/headless-commerce/gql/generated/faqPerennialSuitSection.operation';
import type { FaqItem } from '@susu/headless-commerce/gql/generated/graphql';
import { generateIdentifier } from '@susu/headless-commerce/utils/identifier';
import type { OperationResult } from 'urql';

import { FaqAccordionItem } from '../../FaqAccordionItem/FaqAccordionItem';
import styles from './FaqAccordionSection.module.scss';

export type FaqAccordionSectionProps = {
  query: OperationResult<FaqAccordionQuery, FaqAccordionQueryVariables>;
};

export default function FaqAccordionSection({ query }: Readonly<FaqAccordionSectionProps>) {
  return (
    <div className={styles['faq-accordion']}>
      <div className={styles['faq-accordion__wrapper']}>
        {query.data?.faqAccordion?.title?.length ? (
          <h3 className={`${styles['faq-accordion__title']} display-03-medium`}>{query.data?.faqAccordion?.title}</h3>
        ) : null}

        <ss-accordion allow-multiple="false" has-borders="true" text-grey="false">
          {query.data?.faqAccordion?.faqItemsCollection?.items?.map(faqItem => (
            <FaqAccordionItem key={faqItem?.question || generateIdentifier()} faqItem={faqItem as FaqItem} />
          ))}
        </ss-accordion>
      </div>
    </div>
  );
}
