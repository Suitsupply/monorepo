import type {
  FooterContactAndLinksBlockQuery,
  FooterContactAndLinksBlockQueryVariables,
} from '@susu/headless-commerce/gql/generated/footerContactAndLinksBlock.operation';
import type {
  IcpContactQuery,
  IcpContactQueryVariables,
} from '@susu/headless-commerce/gql/generated/icpContact.operation';
import type { OperationResult } from 'urql';

import DesktopVersion from './DesktopVersion';
import styles from './FooterContactAndLinks.module.scss';
import MobileVersion from './MobileVersion';

export type FooterContactAndLinksProps = {
  icpQuery: OperationResult<IcpContactQuery, IcpContactQueryVariables>;
  query: OperationResult<FooterContactAndLinksBlockQuery, FooterContactAndLinksBlockQueryVariables>;
  title: string;
};

export default function FooterContactAndLinks({ icpQuery, query, title }: Readonly<FooterContactAndLinksProps>) {
  return (
    <div className={styles['footer-links']}>
      <DesktopVersion title={title} blockQuery={query} icpQuery={icpQuery} />
      <MobileVersion title={title} blockQuery={query} icpQuery={icpQuery} />
    </div>
  );
}
