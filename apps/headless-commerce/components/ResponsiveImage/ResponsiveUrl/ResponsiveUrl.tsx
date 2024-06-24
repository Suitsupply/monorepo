import { forwardRef, memo } from 'react';

import type { DeviceName, UrlResponsiveImageProps } from '../ResponsiveImage.types';
import { ImageElement } from './ImageElement';
import { PictureElement } from './PictureElement';

export const ResponsiverUrl = memo(
  forwardRef<HTMLImageElement, UrlResponsiveImageProps>(function ResponsiveUrl(config, ref) {
    const { src, srcs } = config;

    if (!srcs && !src) {
      throw new Error('ResponsiveUrl: src or srcs must be provided');
    }
    if (src || Object.values(srcs as Record<DeviceName, string>).length === 1) {
      const srcString = src || Object.values(srcs as Record<DeviceName, string>)[0];

      return <ImageElement {...config} src={srcString} ref={ref} />;
    }

    return <PictureElement {...config} ref={ref} />;
  }),
);
