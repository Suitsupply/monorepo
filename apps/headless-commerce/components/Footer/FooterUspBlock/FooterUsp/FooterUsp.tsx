import ExpertPanel from '@susu/headless-commerce/components/ExpertPanel/ExpertPanel';
import Icon from '@susu/headless-commerce/components/Icon/Icon';
import type { Locale } from '@susu/headless-commerce/config/locale';
import type {
  ExpertPanelQuery,
  ExpertPanelQueryVariables,
} from '@susu/headless-commerce/gql/generated/expertPanel.operation';
import type { TextWrapperRich, TextWrapperRichPanel } from '@susu/headless-commerce/gql/generated/graphql';
import { Suspense } from 'react';
import type { OperationResult } from 'urql';

import ClientFooterLink from './ClientFooterLink';
import ClientPanelCTA from './ClientPanelCTA';
import styles from './FooterUsp.module.scss';

export type ServerFooterUspProps = {
  locale: Locale;
  item: TextWrapperRich | TextWrapperRichPanel;
  expertPanels: {
    [x: string]: OperationResult<ExpertPanelQuery, ExpertPanelQueryVariables>;
  };
};

export default function FooterUsp({ item, expertPanels }: Readonly<ServerFooterUspProps>) {
  const expertPanelId =
    item.__typename === 'TextWrapperRichPanel' ? item?.styleExpertPanelCollection?.items[0]?.sys?.id ?? '' : '';

  return (
    <div className={styles['footer-usp']}>
      <div className={styles['footer-usp__icon']}>
        <Icon icon={item.iconName as string} />
      </div>
      <div className={styles['footer-usp__text']}>
        <h6 className="title-03-medium">{item.title}</h6>
        <p className={'body-small-regular'}>{item.description}</p>
        {item.__typename === 'TextWrapperRich' && <ClientFooterLink item={item} />}
        {item.__typename === 'TextWrapperRichPanel' && (
          <ClientPanelCTA item={item}>
            <Suspense>
              <ExpertPanel id={expertPanelId} query={expertPanels[expertPanelId]} />
            </Suspense>
          </ClientPanelCTA>
        )}
      </div>
    </div>
  );
}
