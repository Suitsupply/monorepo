import { forwardRef, memo } from 'react';

import type { DeviceSourceProps } from '../ResponsiveCloudinary/ClPicture';
import { deviceSource } from '../ResponsiveCloudinary/ClPicture';
import type { DeviceImageName, DeviceName, UrlResponsiveImageProps } from '../ResponsiveImage.types';
import { cloudinaryImageFromSrc } from '../utils';
import { ImageElement } from './ImageElement';

export const PictureElement = memo(
  forwardRef<HTMLImageElement, UrlResponsiveImageProps>(function PictureElement(config, ref) {
    const { srcs, sizes } = config;

    if (!srcs || Object.values(srcs).filter(Boolean).length === 0) {
      throw new Error('PictureElement: srcs must be provided');
    }

    const configMap: Partial<Record<DeviceName, DeviceSourceProps>> = {};
    const deviceOrder = ['desktop', 'tablet', 'mobile'];
    const sortedSrcs = Object.keys(srcs)
      .filter(srcKey => Boolean(srcs[srcKey as DeviceName]))
      .sort((a, b) => deviceOrder.indexOf(a) - deviceOrder.indexOf(b));
    const sortedImageNames = sortedSrcs.map(device => {
      const capitalized = device.charAt(0).toUpperCase() + device.slice(1);
      return `cloudinary${capitalized}Image`;
    }) as DeviceImageName[];

    sortedSrcs.forEach((device, i) => {
      configMap[device as DeviceName] = {
        deviceImageName: sortedImageNames[i] as DeviceImageName,
        image: cloudinaryImageFromSrc(srcs[device as DeviceName]),
        sizes,
        sortedImageNames,
      };
    });

    if (Object.values(configMap).filter(Boolean).length === 0) {
      throw new Error('PictureElement: configMap failed to generate');
    }

    return (
      <picture>
        {sortedSrcs.map(device => deviceSource(configMap[device as DeviceName] as DeviceSourceProps))}
        <ImageElement
          {...config}
          src={srcs[sortedSrcs.at(-1) as DeviceName]}
          deviceName={sortedSrcs.at(-1) as DeviceName}
          ref={ref}
        />
      </picture>
    );
  }),
);
