'use client';

import ExternalLink from '@headless-commerce/components/ExternalLink/ExternalLink';
import Icon from '@headless-commerce/components/Icon/Icon';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import type { LinkWithIcon, NavigationLink, SocialLinksWrapper } from '@headless-commerce/gql/generated/graphql';
import { trackEvent } from '@headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@headless-commerce/utils/UrlGenerator';

import styles from './FooterBottom.module.scss';

export type ClientSocialMediaProps = {
  contentSectionsCollection: SocialLinksWrapper['contentSectionsCollection'];
};

export default function ClientSocialMedia({ contentSectionsCollection }: ClientSocialMediaProps) {
  const locale = useLocale();
  const country = useCountry();

  const createHandleClick = (item: LinkWithIcon) => () => {
    trackEvent({
      ga: {
        eventCategory: String(item?.promotionEvents?.promotionEventCategory),
        eventAction: String(item?.promotionEvents?.promotionEventAction),
        eventLabel: String(item?.promotionEvents?.promotionEventLabel),
      },
    });
  };

  return (
    <>
      {contentSectionsCollection?.items.map(item => {
        return (
          <ExternalLink
            key={item?.iconName}
            onClick={createHandleClick(item as LinkWithIcon)}
            href={generateUrlFromLinkContent(item?.link as NavigationLink, country.siteID, locale)}
          >
            <span className={styles['footer-bottom-social-icon']}>
              <Icon icon={String(item?.iconName)} aria-hidden="true" />
            </span>
          </ExternalLink>
        );
      })}
    </>
  );
}
