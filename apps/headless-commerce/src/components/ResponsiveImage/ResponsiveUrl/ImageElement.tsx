/* eslint-disable @next/next/no-img-element */
import { forwardRef, memo } from 'react';

import type { DeviceName, UrlResponsiveImageProps } from '../ResponsiveImage.types';
import { cloudinaryImageFromSrc, deviceSrcSet, sizesString, srcsetAllDevices } from '../utils';

export const ImageElement = memo(
  forwardRef<HTMLImageElement, UrlResponsiveImageProps & { deviceName?: DeviceName | 'all' }>(function ImageElement(
    { src, sizes, alt, lazyloading, style, deviceName = 'all' },
    ref,
  ) {
    if (!src) {
      throw new Error('ResponsiveUrl:imageElement: src must be provided');
    }

    const srcsetImgObj = cloudinaryImageFromSrc(src);
    const { width, height } = srcsetImgObj;
    const srcsetArray =
      deviceName === 'all' ? srcsetAllDevices(srcsetImgObj, sizes) : deviceSrcSet(srcsetImgObj, sizes, deviceName);
    const srcsetStr = srcsetArray.join(',');

    return (
      <img
        ref={ref}
        alt={alt}
        loading={lazyloading ? 'lazy' : 'eager'}
        fetchPriority={lazyloading ? 'low' : 'high'}
        sizes={sizesString(sizes)}
        src={src}
        srcSet={srcsetStr}
        style={style}
        height={`${height}`}
        width={`${width}`}
      />
    );
  }),
);
