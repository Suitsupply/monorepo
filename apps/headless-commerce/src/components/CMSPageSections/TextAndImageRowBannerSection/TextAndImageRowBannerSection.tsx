import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Icon from '@headless-commerce/components/Icon/Icon';
import { ResponsiveImage } from '@headless-commerce/components/ResponsiveImage/ResponsiveImage';
import type {
  MediaWrapperV2,
  PinpointOverlayIndicator,
  TextAndImageRowBanner,
} from '@headless-commerce/gql/generated/graphql';
import type {
  TextAndImageRowBannerQueryQuery,
  TextAndImageRowBannerQueryQueryVariables,
} from '@headless-commerce/gql/generated/textAndImageRowBanner.operation';
import { generateIdentifier } from '@headless-commerce/utils/identifier';
import { useMemo } from 'react';
import type { OperationResult } from 'urql';

import ClientPinpoint from './ClientPinpoint';
import { DynamicMedia } from './DynamicMedia';
import styles from './TextAndImageRowBannerSection.module.scss';

export type TextAndImageRowBannerProps = {
  query: OperationResult<TextAndImageRowBannerQueryQuery, TextAndImageRowBannerQueryQueryVariables>;
  automationPageId: string;
};

export default function TextAndImageRowBannerSection({
  query,
  automationPageId,
}: Readonly<TextAndImageRowBannerProps>) {
  const { iconName, title, description } = (query.data?.textAndImageRowBanner as TextAndImageRowBanner) || {};

  const { cloudinaryMobileImage, cloudinaryTabletImage, cloudinaryDesktopImage, lazyloading, altText } =
    (query.data?.textAndImageRowBanner?.mediaContentCollection?.items[0] as MediaWrapperV2) || {};

  const isDynamicMediaWrapper = Boolean(
    query.data?.textAndImageRowBanner?.mediaContentCollection?.items?.some(item => {
      return item?.__typename === 'DynamicMediaWrapper';
    }),
  );

  const hasPinpoint = Boolean(
    query.data?.textAndImageRowBanner?.mediaContentCollection?.items?.some(
      item => item?.__typename === 'PinpointOverlayIndicator',
    ),
  );

  const pinpoints = useMemo(() => {
    if (!hasPinpoint) {
      return [];
    }

    return (
      query.data?.textAndImageRowBanner?.mediaContentCollection?.items?.filter(
        item => item?.__typename === 'PinpointOverlayIndicator',
      ) || []
    );
  }, [hasPinpoint, query.data?.textAndImageRowBanner?.mediaContentCollection?.items]);

  const images = useMemo(
    () => ({
      cloudinaryDesktopImage: cloudinaryDesktopImage,
      cloudinaryMobileImage: cloudinaryMobileImage,
      cloudinaryTabletImage: cloudinaryTabletImage,
    }),
    [cloudinaryDesktopImage, cloudinaryMobileImage, cloudinaryTabletImage],
  );
  const sizes = useMemo(() => ({ xs: '100vw', md: '100vw', lg: '50vw' }), []);

  return (
    <div className={`${styles['imagetext-card']}`}>
      {isDynamicMediaWrapper ? (
        <DynamicMedia automationPageId={automationPageId} />
      ) : (
        <div className={styles['imagetext-card__item']}>
          <ResponsiveImage
            source="cloudinary"
            images={images}
            lazyloading={lazyloading as boolean}
            sizes={sizes}
            title={altText as string}
          />
          {hasPinpoint &&
            pinpoints.map(pinpointItem => {
              const item = pinpointItem as PinpointOverlayIndicator;

              return (
                <ClientPinpoint key={item.text || generateIdentifier()} query={query}>
                  {item.text}
                </ClientPinpoint>
              );
            })}
        </div>
      )}

      <div className={`${styles['imagetext-card__item']} ${styles['imagetext-card__body']}`}>
        <div className={styles['imagetext-card__title-wrap']}>
          <div className={styles['imagetext-card__icon']}>
            <Icon icon={iconName as string} />
          </div>
          <p
            className="imagetext-card__title-text title-01_5-medium-sm title-03-regular-lg"
            data-testid={`${automationPageId}_text-and-image_title`}
          >
            {title}
          </p>
        </div>
        <div className={`${styles['imagetext-card__description']} body-light title-03-light-lg`}>
          {documentToReactComponents(description?.json)}
        </div>
      </div>
    </div>
  );
}
