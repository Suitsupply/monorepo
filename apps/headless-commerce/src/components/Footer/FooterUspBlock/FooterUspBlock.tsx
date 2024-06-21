import FooterUsp from '@headless-commerce/components/Footer/FooterUspBlock/FooterUsp/FooterUsp';
import type { Locale } from '@headless-commerce/config/locale';
import type {
  ExpertPanelQuery,
  ExpertPanelQueryVariables,
} from '@headless-commerce/gql/generated/expertPanel.operation';
import type {
  FooterUspQuery,
  FooterUspQueryVariables,
} from '@headless-commerce/gql/generated/footerUSPBlock.operation';
import type { TextWrapperRich, TextWrapperRichPanel } from '@headless-commerce/gql/generated/graphql';
import { generateIdentifier } from '@headless-commerce/utils/identifier';
import type { OperationResult } from 'urql';

import styles from './FooterUspBlock.module.scss';

export type FooterUspBlockProps = {
  locale: Locale;
  query: OperationResult<FooterUspQuery, FooterUspQueryVariables>;
  expertPanels: {
    [x: string]: OperationResult<ExpertPanelQuery, ExpertPanelQueryVariables>;
  };
};

export default function FooterUspBlock({ locale, query, expertPanels }: Readonly<FooterUspBlockProps>) {
  const items = query?.data?.footerUspBlock?.uspListCollection?.items ?? [];

  return (
    <div className={styles['footer-usp-block']}>
      {items.map(item => (
        <FooterUsp
          item={item as TextWrapperRich | TextWrapperRichPanel}
          key={item?.title || generateIdentifier()}
          locale={locale}
          expertPanels={expertPanels}
        />
      ))}
    </div>
  );
}
