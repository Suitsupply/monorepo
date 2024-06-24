import type { SiteId } from '@susu/headless-commerce/gql/generated/graphql';
import type { CloudinaryImage } from '@susu/headless-commerce/types/CloudinaryImage';
import { getSize } from '@susu/headless-commerce/utils/getImageSizefromUrl';
import type Sizes from 'responsive-image-utils/dist/types/interface/Sizes';

import type { Breakpoint, DeviceData, DeviceImageName, DeviceName } from './ResponsiveImage.types';

// Taken from PRD srcset
export const srcsetWidths = {
  mobile: [375, 480, 768, 828, 1024],
  tablet: [768, 920, 1300, 1440, 1920],
  desktop: [768, 1296, 1728, 2300, 3000, 3500],
};

// Taken from design system defintion
export const breakpoints: Record<Breakpoint, number> = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

export const deviceBreakpoints: Record<DeviceImageName, Breakpoint[]> = {
  cloudinaryDesktopImage: ['lg', 'xl', 'xxl'],
  cloudinaryTabletImage: ['md'],
  cloudinaryMobileImage: ['xs', 'sm'],
};

export const devices: Record<DeviceName, DeviceData> = {
  mobile: {
    imageName: 'cloudinaryMobileImage',
    breakpointKeys: deviceBreakpoints.cloudinaryMobileImage,
    breakpointValues: deviceBreakpoints.cloudinaryMobileImage.map(breakpoint => breakpoints[breakpoint]),
    _srcsetWidths: srcsetWidths.mobile,
  },
  tablet: {
    imageName: 'cloudinaryTabletImage',
    breakpointKeys: deviceBreakpoints.cloudinaryTabletImage,
    breakpointValues: deviceBreakpoints.cloudinaryTabletImage.map(breakpoint => breakpoints[breakpoint]),
    _srcsetWidths: srcsetWidths.tablet,
  },
  desktop: {
    imageName: 'cloudinaryDesktopImage',
    breakpointKeys: deviceBreakpoints.cloudinaryDesktopImage,
    breakpointValues: deviceBreakpoints.cloudinaryDesktopImage.map(breakpoint => breakpoints[breakpoint]),
    _srcsetWidths: srcsetWidths.desktop,
  },
};

export const getClosestBreakpoint = (size: number, breakpointsRange: Breakpoint[]): Breakpoint => {
  return breakpointsRange.reduce((prev, curr) => {
    return Math.abs(breakpoints[curr] - size) < Math.abs(breakpoints[prev] - size) ? curr : prev;
  });
};

/** Cloudinary specific */
export const sizesString = (sizes: Sizes): string => {
  const stringArr: string[] = [];

  for (const breakpoint in sizes) {
    const size = sizes[breakpoint];
    let sizeString = breakpoint !== 'xs' ? `(min-width: ${breakpoints[breakpoint as Breakpoint]}px) ${size}` : size;

    stringArr.push(sizeString);
  }

  return stringArr.join(', ');
};

export const smallerBreakpoints = (deviceName: DeviceName | 'all'): Breakpoint[] => {
  if (deviceName === 'all') {
    return Object.keys(breakpoints) as Breakpoint[];
  }

  let smallerDevices: DeviceName[] = [];
  let breakpointList: Breakpoint[] = [];

  if (deviceName === 'desktop') {
    smallerDevices = ['tablet', 'mobile'];
  }

  if (deviceName === 'tablet') {
    smallerDevices = ['mobile'];
  }

  smallerDevices.forEach(device => {
    breakpointList = [...breakpointList, ...devices[device].breakpointKeys];
  });

  return breakpointList;
};

export const deviceSrcSet = (image: CloudinaryImage, sizes: Sizes, deviceName: DeviceName): Array<string> => {
  let srcset: Array<string> = [];
  const { secure_url, raw_transformation = '', width, height } = image;

  const { x, y } = reduceRatio(width, height);
  const aspectRatioString = `${x}:${y}`;
  const aspectRatio = width / height;

  const rawBits = raw_transformation.split('/');
  const usableRawBits = rawBits.filter(bit => !(bit.includes('w_') || bit.includes('h_')));

  const rightTransformations = ['f_', 'fl_'];
  const usableLeft: Array<string> = [];
  const usableRight: Array<string> = [];

  for (const bit of usableRawBits) {
    if (rightTransformations.some(rightTransformation => bit.startsWith(rightTransformation))) {
      usableRight.push(bit);
    } else {
      usableLeft.push(bit);
    }
  }

  const rightHand = usableRight.length > 0 ? `/${usableRight.join(',')}` : '';

  const reduceFactor = Object.keys(sizes).length - 1;

  for (let i = 0; i < Object.keys(sizes).length - reduceFactor; i++) {
    const sizeKey = Object.keys(sizes)[i];

    srcset = [
      ...srcset,
      ...devices[deviceName]._srcsetWidths
        .sort((a, b) => b - a)
        .map(sizewidth => {
          const sizeWidth = Math.round(sizewidth * (parseInt(sizes[sizeKey], 10) / 100));
          const sizeHeight = Math.round(sizeWidth / aspectRatio);

          const leftHand = [`ar_${aspectRatioString}`, ...usableLeft, `w_${sizeWidth}`, `h_${sizeHeight}`].join(',');
          const newTransformation = `${leftHand}${rightHand}`;

          return `${secure_url.replace(raw_transformation, newTransformation)} ${sizewidth}w`;
        }),
    ];
  }

  return srcset;
};

export const srcsetAllDevices = (image: CloudinaryImage, sizes: Sizes): Array<string> => {
  const srcsets: Array<string> = [];
  const { raw_transformation = '', width, height } = image;
  let secure_url = image.secure_url;
  const { x, y } = reduceRatio(width, height);
  const aspectRatioString = `${x}:${y}`;
  const aspectRatio = width / height;

  const rawBits = raw_transformation.split('/');
  const usableRawBits = rawBits.filter(bit => !(bit.includes('w_') || bit.includes('h_')));

  const rightTransformations = ['f_', 'fl_'];
  const usableLeft: Array<string> = [];
  const usableRight: Array<string> = [];

  for (const bit of usableRawBits) {
    if (rightTransformations.some(rightTransformation => bit.startsWith(rightTransformation))) {
      usableRight.push(bit);
    } else {
      usableLeft.push(bit);
    }
  }

  const rightHand = usableRight.length > 0 ? `/${usableRight.join(',')}` : '';

  const usedWidths = new Set<number>();
  const srcsetWidths = new Set<number>(
    [...devices.mobile._srcsetWidths, ...devices.tablet._srcsetWidths, ...devices.desktop._srcsetWidths].sort(
      (a, b) => b - a,
    ),
  );

  const breakpointOrder = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

  Object.keys(sizes)
    .sort((a, b) => breakpointOrder.indexOf(b) - breakpointOrder.indexOf(a))
    .forEach(sizeKey => {
      const keysList = [...srcsetWidths].filter(
        size => !usedWidths.has(size) && size >= breakpoints[sizeKey as Breakpoint],
      );

      keysList.forEach(size => {
        const sizeWidth = Math.round(size * (parseInt(sizes[sizeKey], 10) / 100) * 1.3);
        const sizeHeight = Math.round((sizeWidth / aspectRatio) * 1.3);

        let leftHand = [`ar_${aspectRatioString}`, ...usableLeft, `w_${sizeWidth}`, `h_${sizeHeight}`].join(',');
        leftHand = orderCloudinaryParameters(leftHand);
        const newTransformation = `${leftHand}${rightHand}`;

        // Replace this so it matches warmed up images.
        secure_url = secure_url.replace('/b_rgb:efefef,bo_260px_solid_rgb:efefef,c_pad,w_2400', '');
        srcsets.push(`${secure_url.replace(raw_transformation, newTransformation)} ${size}w`);

        usedWidths.add(size);
      });
    });

  return srcsets;
};
export const srcsetString = (image: CloudinaryImage, sizes: Sizes, deviceName: DeviceName): string => {
  if (!Object.keys(devices).includes(deviceName)) {
    throw new Error(`Invalid device name: ${deviceName}`);
  }

  return deviceSrcSet(image, sizes, deviceName).join(',');
};

export const cloudinaryImageFromSrc = (src: string): CloudinaryImage => {
  if (!src) {
    throw new Error('coudinaryImageFromSrc: src must be provided');
  }

  const { width, height } = getSize(src);
  const significantBits = src.split('/').filter(part => part.includes('h_') || part.includes('w_'));
  const baseRawTransformation = significantBits.at(-1) || '';

  const rawTransformation = baseRawTransformation.split(',').join('/');

  return {
    secure_url: src.replace(baseRawTransformation, rawTransformation),
    raw_transformation: rawTransformation,
    width,
    height,
  } as CloudinaryImage;
};

const gcd = (a: number, b: number): number => {
  return b === 0 ? a : gcd(b, a % b);
};

export const reduceRatio = (x: number, y: number): { x: number; y: number } => {
  const commonDivisor = gcd(x, y);

  return { x: x / commonDivisor, y: y / commonDivisor };
};

// Order transformations to be ex: h_300,q_80,w_250
export const orderCloudinaryParameters = (leftHand: string) => {
  let tempLeftHand = leftHand.split(',');
  tempLeftHand.splice(tempLeftHand.length - 3, 0, tempLeftHand[tempLeftHand.length - 1]);
  tempLeftHand.pop();

  return tempLeftHand.join(',');
};

export const parseStaticPattern = (pattern: string, selection: Record<string, string>, siteId: SiteId) => {
  let selectionEntries = Object.entries(selection);

  if (siteId === 'APAC') {
    selectionEntries = selectionEntries.map(([key, value]) => {
      const adjustedValue = value.endsWith('A') ? value.slice(0, -1) : value;
      return [key, adjustedValue];
    });
  }

  const selectionObject = Object.fromEntries(selectionEntries);

  return pattern.replace(/{([^{}]*)}/g, (_match, key) => selectionObject[key]);
};
