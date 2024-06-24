import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { CarouselImageAndTextCard } from '@susu/headless-commerce/gql/generated/graphql';
import { useMemo } from 'react';

import Icon from '../Icon/Icon';
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage';
import styles from './ImageTextCard.module.scss';

export type ImageTextCardProps = {
  imageTextCardData: CarouselImageAndTextCard;
  automationPageId: string;
};

export default function ImageTextCard({ imageTextCardData, automationPageId }: ImageTextCardProps) {
  const { description, iconName, image, title, titleFlag } = imageTextCardData;
  const images = useMemo(
    () => ({
      cloudinaryDesktopImage: image?.cloudinaryDesktopImage,
      cloudinaryMobileImage: image?.cloudinaryMobileImage,
      cloudinaryTabletImage: image?.cloudinaryTabletImage,
    }),
    [image?.cloudinaryDesktopImage, image?.cloudinaryMobileImage, image?.cloudinaryTabletImage],
  );
  const sizes = useMemo(() => ({ xs: '100vw', md: '45vw', lg: '30vw' }), []);

  return (
    <div className={styles['imagetext-card']} data-testid={`${automationPageId}_card`}>
      {/* Image */}
      <div className="imagetext-card__image">
        <ResponsiveImage
          source="cloudinary"
          images={images}
          lazyloading={image?.lazyloading as boolean}
          sizes={sizes}
          title={image?.altText as string}
        />
      </div>

      {/* Text */}
      <div className={styles['imagetext-card__body']}>
        <div className={styles['imagetext-card__title-wrap']}>
          <div className={styles['imagetext-card__icon']}>
            <Icon icon={iconName as string} />
          </div>
          <p className="imagetext-card__title-text title-02-medium-sm title-03-medium-lg">{title}</p>

          {titleFlag && <span className={styles['imagetext-card__badge']}>{titleFlag}</span>}
        </div>
        <div className={`${styles['imagetext-card__description']} body-small-light body-light-sm`}>
          {documentToReactComponents(description?.json)}
        </div>
      </div>
    </div>
  );
}
