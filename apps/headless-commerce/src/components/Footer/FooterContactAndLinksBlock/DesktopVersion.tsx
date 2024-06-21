import type {
  FooterContactAndLinksBlockQuery,
  FooterContactAndLinksBlockQueryVariables,
} from '@headless-commerce/gql/generated/footerContactAndLinksBlock.operation';
import type { ContactInfoWrapper } from '@headless-commerce/gql/generated/graphql';
import type { IcpContactQuery, IcpContactQueryVariables } from '@headless-commerce/gql/generated/icpContact.operation';
import { generateIdentifier } from '@headless-commerce/utils/identifier';
import type { OperationResult } from 'urql';

import ClientContactSection from './ClientContactSection';
import ClientSection from './ClientSection';
import styles from './FooterContactAndLinks.module.scss';

export type DesktopVersionProps = {
  title: string;
  blockQuery: OperationResult<FooterContactAndLinksBlockQuery, FooterContactAndLinksBlockQueryVariables>;
  icpQuery: OperationResult<IcpContactQuery, IcpContactQueryVariables>;
};

export default function DesktopVersion({ blockQuery, title, icpQuery }: Readonly<DesktopVersionProps>) {
  return (
    <div className={styles['footer-links__desktop']}>
      <div className={`${styles['footer-links__contact']} body-small-light`}>
        <div className={`${styles['footer-links__title']} body-small-medium`}>{title}</div>
        <div className={styles['footer-links__contact__wrapper']}>
          {blockQuery?.data?.footerContactAndLinksBlock?.contactSection?.contentSectionsCollection?.items.map(item => (
            <ClientContactSection
              key={String(item?.title || item?.text || generateIdentifier())}
              item={item as ContactInfoWrapper}
              icpTitle={String(icpQuery.data?.cta?.title)}
            />
          ))}
        </div>
      </div>
      <div className={`${styles['footer-links__columns']} body-small-light`}>
        {blockQuery?.data?.footerContactAndLinksBlock?.listSectionsCollection?.items.map(section => {
          return (
            <div key={section?.title || generateIdentifier()} className={styles['footer-links__column']}>
              <div className={`${styles['footer-links__title']} body-small-medium`}>{section?.title}</div>
              {section?.ctaCollection?.items.map(item => {
                if (!item?.link || !item?.promotionEvents) {
                  return null;
                }

                return (
                  <ClientSection
                    key={String(item.link.sys.id)}
                    title={String(item.title)}
                    link={item.link}
                    promotionEvents={item.promotionEvents}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
