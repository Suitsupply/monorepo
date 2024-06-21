/* eslint-disable @next/next/no-img-element */
import type { CloudinaryImage } from '@headless-commerce/types/CloudinaryImage';
import type { CSSProperties } from 'react';
import { forwardRef, memo, useMemo } from 'react';
import type Sizes from 'responsive-image-utils/dist/types/interface/Sizes';

import { sizesString, srcsetAllDevices } from '../utils';

export const ClImage = memo(
  forwardRef<
    HTMLImageElement,
    {
      image: CloudinaryImage;
      sizes: Sizes;
      title: string;
      style?: CSSProperties;
      lazyloading: boolean;
    }
  >(function ClImage(config, ref) {
    const { image, sizes, title, style, lazyloading } = config;
    const imgStyle = useMemo(() => ({ ...style, height: '100%', width: '100%' }), [style]);

    return (
      <img
        alt={title}
        loading={lazyloading ? 'lazy' : 'eager'}
        ref={ref}
        sizes={sizesString(sizes)}
        src={image.secure_url}
        srcSet={srcsetAllDevices(image, sizes).join(',')}
        style={imgStyle}
        height={`${image.height}`}
        width={`${image.width}`}
      />
    );
  }),
);
