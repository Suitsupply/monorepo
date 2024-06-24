import ExternalLink from '@susu/headless-commerce/components/ExternalLink/ExternalLink';
import type { ICampaignCollectionCard } from '@susu/headless-commerce/components/HomepageSections/CampaignCollectionBlock/CampaignCollectionCard/CampaignCollectionCard.types';
import { ResponsiveImage } from '@susu/headless-commerce/components/ResponsiveImage/ResponsiveImage';
import { useMemo } from 'react';

import styles from './CampaignCollectionCard.module.scss';

export type CampaignCollectionCardProps = {
  card: ICampaignCollectionCard;
};

export default function CampaignCollectionCard({
  card: { title, subText, colorPalette, link, cloudinaryMobileImage, cloudinaryTabletImage, cloudinaryDesktopImage },
}: CampaignCollectionCardProps) {
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

  return (
    <div className={styles['campaign-collection__card']}>
      <ExternalLink href={link}>
        <ResponsiveImage source="cloudinary" title={title as string} images={images} sizes={sizes} />
        <div
          className={`${styles['text-container']} ${
            colorPalette === 'light' ? styles['text-container--light'] : styles['text-container--dark']
          }`}
        >
          <p className={'title-01-medium'}>{title}</p>
          <p className={'body-regular'}>{subText}</p>
        </div>
      </ExternalLink>
    </div>
  );
}
