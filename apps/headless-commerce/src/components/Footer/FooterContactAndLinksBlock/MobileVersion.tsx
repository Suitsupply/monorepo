import type {
  FooterContactAndLinksBlockQuery,
  FooterContactAndLinksBlockQueryVariables,
} from '@headless-commerce/gql/generated/footerContactAndLinksBlock.operation';
import type { ContactInfoWrapper } from '@headless-commerce/gql/generated/graphql';
import type { IcpContactQuery, IcpContactQueryVariables } from '@headless-commerce/gql/generated/icpContact.operation';
import { generateIdentifier } from '@headless-commerce/utils/identifier';
import type { OperationResult } from 'urql';

import ClientContactSection from './ClientContactSection';
import ClientMobileVersion from './ClientMobileVersion';
import ClientSection from './ClientSection';
import styles from './FooterContactAndLinks.module.scss';

export type MobileVersionProps = {
  title: string;
  blockQuery: OperationResult<FooterContactAndLinksBlockQuery, FooterContactAndLinksBlockQueryVariables>;
  icpQuery: OperationResult<IcpContactQuery, IcpContactQueryVariables>;
};

export default function MobileVersion({ blockQuery, title, icpQuery }: Readonly<MobileVersionProps>) {
  return (
    <ClientMobileVersion>
      <div className={`${styles['footer-links__mobile']} body-small-light`}>
        <ss-accordion allow-multiple="false" has-borders="true" text-grey="false">
          <ss-accordion-item
            color-palette="light"
            icon-open="plus"
            icon-close="minus"
            label={title}
            id={title}
            icon-position="end"
            full-width
          >
            <div className={styles['footer-links__contact__wrapper']}>
              {blockQuery?.data?.footerContactAndLinksBlock?.contactSection?.contentSectionsCollection?.items.map(
                item => (
                  <ClientContactSection
                    key={String(item?.title || generateIdentifier())}
                    item={item as ContactInfoWrapper}
                    icpTitle={String(icpQuery.data?.cta?.title)}
                  />
                ),
              )}
            </div>
          </ss-accordion-item>
          {blockQuery?.data?.footerContactAndLinksBlock?.listSectionsCollection?.items.map(section => (
            <ss-accordion-item
              color-palette="light"
              icon-open="plus"
              icon-close="minus"
              key={section?.title || generateIdentifier()}
              label={section?.title as string}
              id={section?.title as string}
              icon-position="end"
              full-width
            >
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
            </ss-accordion-item>
          ))}
        </ss-accordion>
      </div>
    </ClientMobileVersion>
  );
}
