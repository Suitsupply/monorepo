import { getSize } from '@headless-commerce/utils/getImageSizefromUrl';
import { forwardRef, memo, useMemo } from 'react';

import type { CommerceResponsiveImageProps } from '../ResponsiveImage.types';

export const ResponsiveCommerce = memo(
  forwardRef<HTMLImageElement, CommerceResponsiveImageProps>(function ResponsiveCommerce(config, ref) {
    const { desktopImage, mobileImage, name, style, aspectRatio, desktopSizes, mobileSizes, lazyloading } = config;
    const { width: desktopWidth, height: desktopHeight } = getSize(desktopImage.url);
    const { width: mobileWidth, height: mobileHeight } = getSize(mobileImage.url);
    const imgStyle = useMemo(() => ({ ...style, aspectRatio }), [style, aspectRatio]);
    const pictureStyle = useMemo(() => ({ display: 'flex' }), []);

    return (
      <picture style={pictureStyle}>
        <source
          media={'(min-width: 768px)'}
          sizes={desktopSizes}
          srcSet={desktopImage.srcset}
          height={desktopHeight}
          width={desktopWidth}
        ></source>
        <source
          media={'(max-width: 767px)'}
          sizes={mobileSizes}
          srcSet={mobileImage.srcset}
          height={mobileHeight}
          width={mobileWidth}
        ></source>
        <img
          alt={name}
          loading={lazyloading ? 'lazy' : 'eager'}
          fetchPriority={lazyloading ? 'low' : 'high'}
          ref={ref}
          src={mobileImage.url}
          style={imgStyle}
        />
      </picture>
    );
  }),
);
