import type { Locale } from '@susu/headless-commerce/config/locale';
import type { MediaWrapperV2 } from '@susu/headless-commerce/gql/generated/graphql';
import type { CountryConfiguration } from '@susu/headless-commerce/types/CountryConfiguration';
import type { PromotionEvents } from '@susu/headless-commerce/utils/tracking/tracking';
import { useMemo } from 'react';

import { ResponsiveImage } from '../../../ResponsiveImage/ResponsiveImage';
import ClientRelatedArticle from './ClientRelatedArticle';
import styles from './RelatedArticle.module.scss';

export type RelatedArticleProps = {
  title: string;
  description: string;
  url: string;
  thumbnailImage: MediaWrapperV2;
  promotionEvents: PromotionEvents;
  locale: Locale;
  country: CountryConfiguration;
};

export default function RelatedArticle({
  title,
  description,
  url,
  thumbnailImage,
  promotionEvents,
  locale,
  country,
}: RelatedArticleProps) {
  const { cloudinaryMobileImage, cloudinaryTabletImage, cloudinaryDesktopImage } = thumbnailImage;
  const images = useMemo(
    () => ({ cloudinaryMobileImage, cloudinaryTabletImage, cloudinaryDesktopImage }),
    [cloudinaryDesktopImage, cloudinaryMobileImage, cloudinaryTabletImage],
  );
  const sizes = useMemo(
    () => ({
      sm: '100vw',
      md: '50vw',
      lg: '33vw',
    }),
    [],
  );

  return (
    <ClientRelatedArticle url={url} promotionEvents={promotionEvents} country={country} locale={locale}>
      <div className={styles['related-article__link']}>
        <ResponsiveImage source="cloudinary" images={images} title={title} sizes={sizes} />
      </div>
      <div className={styles['related-article__text-wrapper']}>
        <h3 className={styles['related-article__title']}>{title}</h3>
        <p className={`body-medium ${styles['related-article__description']}`}>{description}</p>
      </div>
    </ClientRelatedArticle>
  );
}
