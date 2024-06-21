import type { MediaWrapperV2 } from '@headless-commerce/gql/generated/graphql';
import { useMemo } from 'react';

import { ResponsiveImage } from '../../ResponsiveImage/ResponsiveImage';
import styles from './TextAndImageColumnBannerSection.module.scss';

export type ImageSectionProps = {
  imageSectionData: MediaWrapperV2;
};

export default function ImageSection({ imageSectionData }: ImageSectionProps) {
  const { cloudinaryMobileImage, cloudinaryTabletImage, cloudinaryDesktopImage, lazyloading, altText } =
    imageSectionData ?? {};

  const images = useMemo(
    () => ({ cloudinaryMobileImage, cloudinaryTabletImage, cloudinaryDesktopImage }),
    [cloudinaryDesktopImage, cloudinaryMobileImage, cloudinaryTabletImage],
  );
  const sizes = useMemo(
    () => ({
      xs: '100vw',
    }),
    [],
  );

  return (
    <div className={styles['text-banner__image-wrapper']}>
      <ResponsiveImage
        source="cloudinary"
        images={images}
        title={altText ?? ''}
        sizes={sizes}
        lazyloading={lazyloading as boolean}
      />
    </div>
  );
}
