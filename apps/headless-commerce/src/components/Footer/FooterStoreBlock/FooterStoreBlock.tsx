import ExternalLink from '@headless-commerce/components/ExternalLink/ExternalLink';
import ClientFooterStore from '@headless-commerce/components/Footer/FooterStoreBlock/ClientFooterStore';
import { ResponsiveImage } from '@headless-commerce/components/ResponsiveImage/ResponsiveImage';
import type { Locale } from '@headless-commerce/config/locale';
import type {
  FooterStoreBlockQuery,
  FooterStoreBlockQueryVariables,
} from '@headless-commerce/gql/generated/footerStoreBlock.operation';
import type { NavigationLink } from '@headless-commerce/gql/generated/graphql';
import { countries } from '@headless-commerce/utils/configuration/country';
import { getCountryCode } from '@headless-commerce/utils/localeUtils';
import type { PromotionEvents } from '@headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@headless-commerce/utils/UrlGenerator';
import { useMemo } from 'react';
import type { OperationResult } from 'urql';

import styles from './FooterStore.module.scss';

export type ServerFooterStoreBlockProps = {
  locale: Locale;
  query: OperationResult<FooterStoreBlockQuery, FooterStoreBlockQueryVariables>;
};

export default function ServerFooterStore({ locale, query }: Readonly<ServerFooterStoreBlockProps>) {
  const countryCode = getCountryCode(locale);
  const country = countries[countryCode];

  const footerStoreData = query.data;

  const { title, description, cta } = footerStoreData?.footerStoreBlock || {};
  const { cloudinaryMobileImage, cloudinaryTabletImage, cloudinaryDesktopImage, lazyloading } =
    footerStoreData?.footerStoreBlock?.image || {};

  const images = useMemo(
    () => ({ cloudinaryMobileImage, cloudinaryTabletImage, cloudinaryDesktopImage }),
    [cloudinaryDesktopImage, cloudinaryMobileImage, cloudinaryTabletImage],
  );
  const sizes = useMemo(
    () => ({
      xs: '100vw',
      lg: '50vw',
    }),
    [],
  );

  if (!footerStoreData?.footerStoreBlock && !footerStoreData?.footerStoreBlock?.image) {
    return null;
  }

  if (!footerStoreData?.footerStoreBlock?.image) {
    return null;
  }

  return (
    <ExternalLink
      className={styles['footer-store-block']}
      href={generateUrlFromLinkContent(cta?.link as NavigationLink, country.siteID, locale)}
    >
      <ClientFooterStore
        promotionEvents={footerStoreData?.footerStoreBlock?.cta?.promotionEvents as PromotionEvents}
        country={country}
        locale={locale}
      >
        <div className={styles['footer-store-column']}>
          <div className={styles['footer-store-content']}>
            <h3 className={`${styles['footer-store-title']} title-01_5-medium`}>{title}</h3>
            <p className={styles['footer-store-text']}>{description}</p>
            <span className={styles['footer-store-link']}>{cta?.title}</span>
          </div>
        </div>
        <div className={styles['footer-store-picture']}>
          <ResponsiveImage
            source="cloudinary"
            images={images}
            title={title ?? ''}
            sizes={sizes}
            lazyloading={lazyloading as boolean}
          />
        </div>
      </ClientFooterStore>
    </ExternalLink>
  );
}
