import type {
  FooterNewsletterBlockQuery,
  FooterNewsletterBlockQueryVariables,
} from '@headless-commerce/gql/generated/footerNewsletter.operation';
import type { OperationResult } from 'urql';

import ClientFooterNewsletter from './ClientFooterNewsletter';
import ClientFooterNewsletterContainer from './ClientFooterNewsletterContainer';
import styles from './FooterNewsletter.module.scss';

export type FooterNewsletterBlockProps = {
  query: OperationResult<FooterNewsletterBlockQuery, FooterNewsletterBlockQueryVariables>;
};

export default function FooterNewsletterBlock({ query }: Readonly<FooterNewsletterBlockProps>) {
  return (
    <ClientFooterNewsletterContainer query={query}>
      <div className={styles['footer-newsletter-title-container']}>
        <h3 className={styles['footer-newsletter-title']}>{query?.data?.footerNewsletterBlock?.title}</h3>
      </div>

      <div className={styles['footer-newsletter-form-group']}>
        <ClientFooterNewsletter />
      </div>
    </ClientFooterNewsletterContainer>
  );
}
