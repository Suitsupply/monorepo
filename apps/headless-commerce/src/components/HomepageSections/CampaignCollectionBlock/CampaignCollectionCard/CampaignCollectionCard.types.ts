import type { CloudinaryImage } from '@headless-commerce/types/CloudinaryImage';

export interface ICampaignCollectionCard {
  title: string | undefined;
  subText: string;
  colorPalette: string | undefined;
  link: string;
  cloudinaryMobileImage: CloudinaryImage[];
  cloudinaryTabletImage: CloudinaryImage[];
  cloudinaryDesktopImage: CloudinaryImage[];
}
