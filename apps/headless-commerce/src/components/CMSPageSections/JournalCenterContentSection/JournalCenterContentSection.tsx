import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Locale } from '@headless-commerce/config/locale';
import type { JournalCenterContentBlock, MediaWrapperV2 } from '@headless-commerce/gql/generated/graphql';
import type {
  JournalCenterQuery,
  JournalCenterQueryVariables,
} from '@headless-commerce/gql/generated/journalCenter.operation';
import { countries } from '@headless-commerce/utils/configuration/country';
import { currencies } from '@headless-commerce/utils/configuration/currency';
import { createRenderNodeForPriceInfo } from '@headless-commerce/utils/contentfulUtils';
import { getCountryCode } from '@headless-commerce/utils/localeUtils';
import { useMemo } from 'react';
import type { OperationResult } from 'urql';

import { ResponsiveImage } from '../../ResponsiveImage/ResponsiveImage';
import ClientJournalCenterContentSection from './ClientJournalCenterContentSection';
import styles from './JournalCenterContentSection.module.scss';

export type JournalCenterContentSectionProps = {
  query: OperationResult<JournalCenterQuery, JournalCenterQueryVariables>;
  locale: Locale;
  automationPageId: string;
};

export default function JournalCenterContentSection({
  query,
  locale,
  automationPageId,
}: Readonly<JournalCenterContentSectionProps>) {
  const countryCode = getCountryCode(locale);
  const country = countries[countryCode];

  const { title, description, mediaContent } = query.data?.journalCenterContentBlock as JournalCenterContentBlock;
  const { cloudinaryDesktopImage, cloudinaryMobileImage, cloudinaryTabletImage, lazyloading, altText } =
    mediaContent as MediaWrapperV2;

  const priceContent = documentToReactComponents(
    description?.json,
    createRenderNodeForPriceInfo(description, country.ecommerce.currencyCode, country, currencies),
  );

  const images = useMemo(
    () => ({
      cloudinaryDesktopImage,
      cloudinaryMobileImage,
      cloudinaryTabletImage,
    }),
    [cloudinaryDesktopImage, cloudinaryMobileImage, cloudinaryTabletImage],
  );
  const sizes = useMemo(
    () => ({
      xs: '100vw',
      md: '50vw',
      xl: '35vw',
    }),
    [],
  );

  return (
    <div className={styles.journal_center}>
      <h3
        className={`title-01-medium ${styles.journal_center__title}`}
        data-testid={`${automationPageId}_journal-center_title`}
      >
        {title}
      </h3>
      <div className={styles.journal_center__image}>
        <ResponsiveImage
          source="cloudinary"
          images={images}
          lazyloading={lazyloading as boolean}
          sizes={sizes}
          title={altText as string}
        />
      </div>
      <div className={`body-light ${styles.journal_center__description}`}>{priceContent}</div>
      <div className={styles.journal_center__button}>
        <ClientJournalCenterContentSection query={query} automationPageId={`${automationPageId}_journal-center`} />
      </div>
    </div>
  );
}
