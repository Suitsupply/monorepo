import type { CloudinaryImage } from '@susu/headless-commerce/types/CloudinaryImage';
import { forwardRef, memo, useMemo } from 'react';

import type { CloudinaryResponsiveImageProps, DeviceImageName } from '../ResponsiveImage.types';
import { ClImage } from './ClImage';
import { ClPicture } from './ClPicture';

export const ResponsiveCloudinary = memo(
  forwardRef<HTMLImageElement, CloudinaryResponsiveImageProps>(function ResponsiveCloudinary(
    { images, sizes, title, style, lazyloading = true },
    ref,
  ) {
    const deviceNames = Object.keys(images) as DeviceImageName[];
    const usable: Map<DeviceImageName, CloudinaryImage> = useMemo(() => new Map(), []);
    const commonProps = useMemo(() => ({ sizes, title, style, lazyloading }), [sizes, title, style, lazyloading]);

    deviceNames.forEach(deviceName => {
      if (images[deviceName]?.[0]) {
        usable.set(deviceName, images[deviceName]?.[0] as CloudinaryImage);
      }
    });

    if (usable.size === 0) {
      return null;
    }

    const [image] = Array.from(usable.values());

    return usable.size === 1 ? (
      <ClImage image={image} {...commonProps} ref={ref} />
    ) : (
      <ClPicture images={usable} {...commonProps} ref={ref} />
    );
  }),
);
