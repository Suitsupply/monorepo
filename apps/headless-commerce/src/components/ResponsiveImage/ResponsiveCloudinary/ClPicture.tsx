import type { CloudinaryImage } from '@headless-commerce/types/CloudinaryImage';
import type { CSSProperties, ReactElement } from 'react';
import { forwardRef, memo, useMemo } from 'react';
import type Sizes from 'responsive-image-utils/dist/types/interface/Sizes';

import type { DeviceImageName, DeviceName } from '../ResponsiveImage.types';
import { devices, srcsetString } from '../utils';

export type DeviceSourceProps = {
  deviceImageName: DeviceImageName;
  image: CloudinaryImage;
  sizes: Sizes;
  sortedImageNames: DeviceImageName[];
};

export const deviceSource = (config: DeviceSourceProps): ReactElement => {
  const { deviceImageName, sizes, image, sortedImageNames } = config;

  let nextDeviceName: DeviceName | undefined;
  let deviceName: DeviceName;
  let sizesValue: string;

  switch (deviceImageName) {
    case 'cloudinaryMobileImage':
      nextDeviceName = sortedImageNames.indexOf('cloudinaryTabletImage') > 0 ? 'tablet' : 'desktop';
      deviceName = 'mobile';
      sizesValue = sizes.xs || '100vw';
      break;
    case 'cloudinaryTabletImage':
      nextDeviceName = 'desktop';
      deviceName = 'tablet';
      sizesValue = sizes.md || '100vw';
      break;
    default:
      nextDeviceName = undefined;
      deviceName = 'desktop';
      sizesValue = sizes.lg || '100vw';
      break;
  }

  const deviceData = devices[deviceName];
  const nextDeviceData = nextDeviceName && devices[nextDeviceName];

  const mediaBreakpointMin = Math.min(...deviceData.breakpointValues);
  const mediaBreakpointMax = nextDeviceData && Math.min(...nextDeviceData.breakpointValues) - 1;

  const minBreakpoint =
    mediaBreakpointMin === 0
      ? `(max-width: ${mediaBreakpointMax}px)`
      : `(min-width: ${mediaBreakpointMin}px) and (max-width: ${mediaBreakpointMax}px)`;

  const media = mediaBreakpointMax ? minBreakpoint : `(min-width: ${mediaBreakpointMin}px)`;

  return (
    <source
      key={`${deviceImageName}-${mediaBreakpointMin}`}
      media={media}
      sizes={sizesValue}
      srcSet={srcsetString(image, sizes, deviceName)}
    />
  );
};

export const sourcesData = (images: Map<DeviceImageName, CloudinaryImage>, sizes: Sizes): ReactElement[] => {
  const namesOrder = ['cloudinaryDesktopImage', 'cloudinaryTabletImage', 'cloudinaryMobileImage'];
  const sortedImageNames = Array.from(images.keys()).sort((a, b) => namesOrder.indexOf(a) - namesOrder.indexOf(b));
  let sources: ReactElement[] = [];

  for (const deviceImageName of sortedImageNames) {
    const deviceSources = deviceSource({
      deviceImageName,
      sizes,
      image: images.get(deviceImageName) as CloudinaryImage,
      sortedImageNames: sortedImageNames,
    });

    sources = [...sources, deviceSources];
  }

  return sources;
};

export const ClPicture = memo(
  forwardRef<
    HTMLImageElement,
    {
      images: Map<DeviceImageName, CloudinaryImage>;
      sizes: Sizes;
      title: string;
      style?: CSSProperties;
      lazyloading: boolean;
    }
  >(function ClPicture(config, ref) {
    const { images, sizes, title, style, lazyloading } = config;
    const sources = sourcesData(images, sizes);
    const lastSource = sources[sources.length - 1];
    const { sizes: lastSrcSizes, height, width, srcSet } = lastSource.props;
    const smallestSize = srcSet.split(', ').pop();
    const [smallestUrl] = smallestSize.split(' ');
    const imgStyle = useMemo(() => ({ ...style, height: '100%', width: '100%' }), [style]);
    const pictureStyle = useMemo(() => ({ display: 'flex' }), []);

    return (
      <picture style={pictureStyle}>
        {sourcesData(images, sizes)}
        <img
          alt={title}
          fetchPriority={lazyloading ? 'low' : 'high'}
          height={height}
          loading={lazyloading ? 'lazy' : 'eager'}
          ref={ref}
          sizes={lastSrcSizes}
          src={smallestUrl}
          style={imgStyle}
          width={width}
        />
      </picture>
    );
  }),
);
