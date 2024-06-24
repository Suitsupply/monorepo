import type { CloudinaryImage } from '@susu/headless-commerce/types/CloudinaryImage';
import type Sizes from 'responsive-image-utils/dist/types/interface/Sizes';

export type DeviceImageName = 'cloudinaryMobileImage' | 'cloudinaryTabletImage' | 'cloudinaryDesktopImage';
export type DeviceName = 'mobile' | 'tablet' | 'desktop';
export type DeviceImageConfig = Partial<Record<DeviceImageName, CloudinaryImage[] | null>>;
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type ResponsiveImageConfig =
  | CloudinaryResponsiveImageProps
  | CommerceResponsiveImageProps
  | UrlResponsiveImageProps;

export type CloudinaryResponsiveImageProps = {
  source: 'cloudinary';
  images: DeviceImageConfig;
  sizes: Sizes;
  title: string;
  style?: React.CSSProperties;
  lazyloading?: boolean;
};
export type CommerceImage = {
  breakpoint: string;
  srcset: string;
  url: string;
};
export type CommerceResponsiveImageProps = {
  source: 'commerce';
  name: string;
  desktopImage: CommerceImage;
  mobileImage: CommerceImage;
  height?: number;
  width?: number;
  aspectRatio?: string;
  style?: React.CSSProperties;
  mobileSizes?: string;
  desktopSizes?: string;
  lazyloading: boolean;
};
export type DeviceData = {
  imageName: DeviceImageName;
  breakpointKeys: Breakpoint[];
  breakpointValues: number[];
  _srcsetWidths: number[];
};
export type UrlResponsiveImageProps = {
  source: 'url';
  src?: string;
  srcs?: Record<DeviceName, string>;
  sizes: Sizes;
  alt: string;
  style?: React.CSSProperties;
  lazyloading?: boolean;
};
