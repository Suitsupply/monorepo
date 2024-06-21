'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ExternalLink from '@headless-commerce/components/ExternalLink/ExternalLink';
import type { Locale } from '@headless-commerce/config/locale';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import type {
  ContactInfoWrapper,
  NavigationLink,
  PhoneInfo,
  PhoneInfoValue,
  SiteId,
} from '@headless-commerce/gql/generated/graphql';
import { createRenderNodeForPhoneNumber, createRenderOptionsForICP } from '@headless-commerce/utils/contentfulUtils';
import { trackEvent } from '@headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@headless-commerce/utils/UrlGenerator';
import { useCallback } from 'react';

import styles from './FooterContactAndLinks.module.scss';

const linkClass = 'footer-links__link';

const getPhoneNumberInfo = (inline: any[], countryCode: string) => {
  let phoneNumberInfo: PhoneInfoValue;
  if (inline?.length) {
    // Loop through the inline linked entries and add them to the map.
    for (const entry of inline ?? []) {
      const phonesCollection = (entry as PhoneInfo)?.phoneNumbersCollection?.items;

      if (phonesCollection?.length === 1) {
        phoneNumberInfo = phonesCollection[0] as PhoneInfoValue;
      }

      if (phonesCollection?.length === 2) {
        phoneNumberInfo = phonesCollection.find(phoneData => phoneData?.countryCode === countryCode) as PhoneInfoValue;
      }
    }
  }
  // @ts-ignore
  return phoneNumberInfo;
};

const getHref = (item: any, countryCode: string, siteID: SiteId, locale: Locale) => {
  if (item?.text?.links?.entries?.inline[0]?.phoneNumbersCollection?.__typename === 'PhoneInfoPhoneNumbersCollection') {
    return `tel:${getPhoneNumberInfo(item?.text?.links?.entries?.inline, countryCode)}`;
  }

  if (item?.text?.links?.entries?.inline[0]?.__typename === 'Cta') {
    return `https://www.beian.miit.gov.cn/`;
  }

  return generateUrlFromLinkContent(item.link as NavigationLink, siteID, locale);
};

export type ClientContactSectionProps = {
  icpTitle: string;
  item: ContactInfoWrapper;
};

export default function ClientContactSection({ item, icpTitle }: ClientContactSectionProps) {
  const country = useCountry();
  const locale = useLocale();
  const handleClick = useCallback(() => {
    const promotionEvents = item?.promotionEvents;

    trackEvent({
      ga: {
        eventCategory: String(promotionEvents?.promotionEventCategory),
        eventAction: String(promotionEvents?.promotionEventAction),
        eventLabel: String(promotionEvents?.promotionEventLabel),
      },
    });
  }, [item?.promotionEvents]);

  return (
    <>
      {item?.title && <div className={styles['footer-links__label']}>{item?.title}</div>}
      {item?.text?.json && (
        <ExternalLink
          className={
            // @ts-expect-error
            item?.text?.links?.entries?.inline[0]?.__typename === 'Cta'
              ? styles['footer-links__label']
              : styles[linkClass]
          }
          href={getHref(item, country.countryCode, country.siteID as SiteId, locale)}
          onClick={handleClick}
        >
          {documentToReactComponents(
            item?.text?.json,
            // @ts-expect-error
            item?.text?.links?.entries?.inline[0]?.__typename === 'Cta'
              ? createRenderOptionsForICP(icpTitle)
              : createRenderNodeForPhoneNumber(
                  getPhoneNumberInfo(item?.text?.links?.entries?.inline, country.countryCode),
                ),
          )}
        </ExternalLink>
      )}
    </>
  );
}
