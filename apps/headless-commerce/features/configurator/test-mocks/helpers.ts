import type { ClientConfiguratorProps } from '@susu/headless-commerce/features/configurator/components/ClientConfigurator';
import type {
  BlackTieConfiguratorConfiguratorStepsItem,
  ContentfulMetadata,
  Sys,
} from '@susu/headless-commerce/gql/generated/graphql';
import type { CountryConfiguration } from '@susu/headless-commerce/types/CountryConfiguration';
import type { CurrencyConfiguration } from '@susu/headless-commerce/types/CurrencyConfiguration';

import { getStepOptions } from '../utils/options';

export const createConfiguratorSteps = (): Array<BlackTieConfiguratorConfiguratorStepsItem> =>
  [
    {
      sys: {
        id: '2bOoVEtsvcUGU6mmDjKSpg',
        __typename: 'Sys',
      },
      __typename: 'TuxedoStyleStep',
      imageType: 'layered-image',
      categoryStep: 'style',
      previewImageFocalPointMobile: '0.5 0.1',
      previewImageFocalPointTablet: '0.5 0.2',
      previewImageFocalPoint: '0.5 0.3',
      previewImageZoomMobile: '161%',
      previewImageZoomTablet: '162%',
      previewImageZoom: '163%',
      title: 'Style',
      contentfulMetadata: {
        __typename: 'ContentfulMetadata',
        tags: [],
      },
      tuxedoProductOptionsCollection: {
        __typename: 'TuxedoStyleStepTuxedoProductOptionsCollection',
        items: [
          {
            __typename: 'TuxedoProductOption',
            campaign: 'eveningwear-package-two-piece',
            color: 'black',
            tuxedoStyle: 'two-piece',
            waistcoatProductId: null,
          },
          {
            __typename: 'TuxedoProductOption',
            campaign: 'eveningwear-package-three-piece',
            color: 'black',
            tuxedoStyle: 'three-piece',
            waistcoatProductId: 'W1199',
          },
          {
            __typename: 'TuxedoProductOption',
            campaign: 'eveningwear-package-two-piece',
            color: 'navy',
            tuxedoStyle: 'two-piece',
            waistcoatProductId: null,
          },
          {
            __typename: 'TuxedoProductOption',
            campaign: 'eveningwear-package-three-piece',
            color: 'navy',
            tuxedoStyle: 'three-piece',
            waistcoatProductId: 'W8353',
          },
        ],
      },
      tuxedoStyleOptionsCollection: {
        __typename: 'TuxedoStyleStepTuxedoStyleOptionsCollection',
        items: [
          {
            __typename: 'TuxedoStyleOption',
            optionName: 'Two-Piece',
            tuxedoStyle: 'two-piece',
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710151992/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_2-piece-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 11038,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710151992,
                  duration: null,
                  metadata: [],
                  public_id: 'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_2-piece-min',
                  created_at: '2024-03-11T10:13:12Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710151992/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_2-piece-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710151992/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_2-piece-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710151992/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_2-piece-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710151992/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_2-piece-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 18388,
                  width: 780,
                  format: 'jpg',
                  height: 520,
                  version: 1710151992,
                  duration: null,
                  metadata: [],
                  public_id: 'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_2-piece-min',
                  created_at: '2024-03-11T10:13:12Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710151992/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_2-piece-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710151992/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_2-piece-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710151992/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_2-piece-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
          },
          {
            __typename: 'TuxedoStyleOption',
            optionName: 'Three-Piece',
            tuxedoStyle: 'three-piece',
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710151992/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_3-piece-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 14155,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710151992,
                  duration: null,
                  metadata: [],
                  public_id: 'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_3-piece-min',
                  created_at: '2024-03-11T10:13:12Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710151992/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_3-piece-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710151992/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_3-piece-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710151992/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_3-piece-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710151993/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_3-piece-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 24804,
                  width: 780,
                  format: 'jpg',
                  height: 520,
                  version: 1710151993,
                  duration: null,
                  metadata: [],
                  public_id: 'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_3-piece-min',
                  created_at: '2024-03-11T10:13:13Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710151993/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_3-piece-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710151993/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_3-piece-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710151993/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_3-piece-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
          },
        ],
      },
    },
    {
      sys: {
        id: '1hMoRLn2enqd0jaqmLChBM',
        __typename: 'Sys',
      },
      __typename: 'ProductStepConfigurator',
      categoryStep: 'jacket',
      imageType: 'layered-image',
      title: 'Jacket',
      previewImageFocalPoint: '0.5 0.3',
      previewImageFocalPointMobile: '0.5 0.3',
      previewImageFocalPointTablet: '0.5 0.3',
      previewImageZoom: '160%',
      previewImageZoomMobile: '160%',
      previewImageZoomTablet: '160%',
      staticImagePatternDesktop: null,
      staticImagePatternMobile: null,
      subStep: null,
      contentfulMetadata: {
        __typename: 'ContentfulMetadata',
        tags: [],
      },
      productOptionsCollection: {
        __typename: 'ProductStepConfiguratorProductOptionsCollection',
        items: [
          {
            sys: {
              id: '6HfofnN7x3sSiricgIEsPW',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionConfigurator',
            baseColor: 'black',
            productId: 'C1199',
            productName: 'Black Wool',
            recommendations: 'B1299, W1199, H9496, FW1710, D017, M310, BR077',
            subStep: 'lapel',
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710153530/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_jacket_black-peak-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 13874,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710153530,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_jacket_black-peak-min',
                  created_at: '2024-03-11T10:38:50Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710153530/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_jacket_black-peak-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710153530/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_jacket_black-peak-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710153530/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_jacket_black-peak-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710153531/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_jacket_black-peak-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 11316,
                  width: 464,
                  format: 'jpg',
                  height: 464,
                  version: 1710153531,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_jacket_black-peak-min',
                  created_at: '2024-03-11T10:38:51Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710153531/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_jacket_black-peak-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710153531/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_jacket_black-peak-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710153531/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_jacket_black-peak-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
          },
          {
            sys: {
              id: '4LJM1xiI6u9KxDlWEuEW8M',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionConfigurator',
            baseColor: 'navy',
            productId: 'C8353',
            productName: 'Navy Wool',
            recommendations: 'B8353, W8353, H9497, FW1708, D018, M311, BR078',
            subStep: null,
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710153534/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_jacket_navy-peak-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 14485,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710153534,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_jacket_navy-peak-min',
                  created_at: '2024-03-11T10:38:54Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710153534/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_jacket_navy-peak-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710153534/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_jacket_navy-peak-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710153534/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_jacket_navy-peak-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710153530/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_jacket_navy-peak-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 11883,
                  width: 464,
                  format: 'jpg',
                  height: 464,
                  version: 1710153530,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_jacket_navy-peak-min',
                  created_at: '2024-03-11T10:38:50Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710153530/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_jacket_navy-peak-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710153530/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_jacket_navy-peak-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710153530/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_jacket_navy-peak-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
          },
        ],
      },
    },
    {
      sys: {
        id: '33JqXoxSY6Y7MFaae6HCr1',
        __typename: 'Sys',
      },
      __typename: 'ProductStepConfigurator',
      categoryStep: 'trouser',
      imageType: 'layered-image',
      title: 'Trouser',
      previewImageFocalPoint: '0.5 0.675',
      previewImageFocalPointMobile: '0.5 0.675',
      previewImageFocalPointTablet: '0.5 0.675',
      previewImageZoom: '150%',
      previewImageZoomMobile: '150%',
      previewImageZoomTablet: '150%',
      staticImagePatternDesktop: null,
      staticImagePatternMobile: null,
      subStep: null,
      contentfulMetadata: {
        __typename: 'ContentfulMetadata',
        tags: [],
      },
      productOptionsCollection: {
        __typename: 'ProductStepConfiguratorProductOptionsCollection',
        items: [
          {
            sys: {
              id: '20ms3E5gUmkbUirbVixF4y',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionConfigurator',
            baseColor: 'black',
            productId: 'B1299',
            productName: 'Black',
            recommendations: null,
            subStep: null,
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710162155/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_trousers_black-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 8102,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710162155,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_trousers_black-min',
                  created_at: '2024-03-11T13:02:35Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710162155/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_trousers_black-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710162155/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_trousers_black-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710162155/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_trousers_black-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710162155/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_trousers_black-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 9672,
                  width: 780,
                  format: 'jpg',
                  height: 520,
                  version: 1710162155,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_trousers_black-min',
                  created_at: '2024-03-11T13:02:35Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710162155/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_trousers_black-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710162155/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_trousers_black-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710162155/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_trousers_black-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
          },
          {
            sys: {
              id: '5Zp2MNQbkNRGHo8lvAYjUg',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionConfigurator',
            baseColor: 'navy',
            productId: 'B8353',
            productName: 'Navy',
            recommendations: null,
            subStep: null,
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710162155/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_trousers_navy-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 8326,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710162155,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_trousers_navy-min',
                  created_at: '2024-03-11T13:02:35Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710162155/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_trousers_navy-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710162155/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_trousers_navy-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710162155/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_trousers_navy-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710162156/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_trousers_navy-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 9341,
                  width: 780,
                  format: 'jpg',
                  height: 520,
                  version: 1710162156,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_trousers_navy-min',
                  created_at: '2024-03-11T13:02:36Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710162156/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_trousers_navy-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710162156/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_trousers_navy-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710162156/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_trousers_navy-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
          },
        ],
      },
    },
    {
      sys: {
        id: '5HzzBa9joA9xCLasadbJnL',
        __typename: 'Sys',
      },
      __typename: 'ProductStepConfigurator',
      categoryStep: 'shirt',
      imageType: 'layered-image',
      title: 'Shirt',
      previewImageFocalPoint: '0.5 0.354',
      previewImageFocalPointMobile: '0.5 0.354',
      previewImageFocalPointTablet: '0.5 0.354',
      previewImageZoom: '210%',
      previewImageZoomMobile: '210%',
      previewImageZoomTablet: '210%',
      staticImagePatternDesktop: null,
      staticImagePatternMobile: null,
      subStep: null,
      contentfulMetadata: {
        __typename: 'ContentfulMetadata',
        tags: [],
      },
      productOptionsCollection: {
        __typename: 'ProductStepConfiguratorProductOptionsCollection',
        items: [
          {
            sys: {
              id: '4UYFlfokxCaG75KWMoYO5i',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionConfigurator',
            baseColor: null,
            productId: 'H9496',
            productName: 'Pleated Bib',
            recommendations: null,
            subStep: null,
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152428/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shirt_pleated-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 20110,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710152428,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shirt_pleated-min',
                  created_at: '2024-03-11T10:20:28Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152428/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shirt_pleated-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152428/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shirt_pleated-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152428/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shirt_pleated-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152430/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shirt_pleated-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 13943,
                  width: 464,
                  format: 'jpg',
                  height: 464,
                  version: 1710152430,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shirt_pleated-min',
                  created_at: '2024-03-11T10:20:30Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152430/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shirt_pleated-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152430/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shirt_pleated-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152430/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shirt_pleated-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
          },
          {
            sys: {
              id: '4rwE3yzzT2PD7fgUBhFdD6',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionConfigurator',
            baseColor: null,
            productId: 'H9497',
            productName: 'Hidden Placket',
            recommendations: null,
            subStep: null,
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152427/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shirt_hidden-placket-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 24014,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710152427,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shirt_hidden-placket-min',
                  created_at: '2024-03-11T10:20:27Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152427/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shirt_hidden-placket-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152427/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shirt_hidden-placket-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152427/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shirt_hidden-placket-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152428/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shirt_hidden-placket-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 16686,
                  width: 464,
                  format: 'jpg',
                  height: 464,
                  version: 1710152428,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shirt_hidden-placket-min',
                  created_at: '2024-03-11T10:20:28Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152428/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shirt_hidden-placket-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152428/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shirt_hidden-placket-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152428/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shirt_hidden-placket-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
          },
          {
            sys: {
              id: '4F2ycF2nHALaZCU3RfMYvR',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionConfigurator',
            baseColor: null,
            productId: 'H9495',
            productName: 'Piqué Bib',
            recommendations: null,
            subStep: null,
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152427/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shirt_pique-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 24251,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710152427,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shirt_pique-min',
                  created_at: '2024-03-11T10:20:27Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152427/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shirt_pique-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152427/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shirt_pique-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152427/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shirt_pique-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152429/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shirt_pique-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 17063,
                  width: 464,
                  format: 'jpg',
                  height: 464,
                  version: 1710152429,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shirt_pique-min',
                  created_at: '2024-03-11T10:20:29Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152429/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shirt_pique-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152429/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shirt_pique-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152429/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shirt_pique-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
          },
        ],
      },
    },
    {
      sys: {
        id: '1X3CYvdWSATMUvKhg4Yfin',
        __typename: 'Sys',
      },
      __typename: 'ProductStepConfigurator',
      categoryStep: 'shoes',
      imageType: 'layered-image',
      title: 'Shoes',
      previewImageFocalPoint: '0.5 0.8',
      previewImageFocalPointMobile: '0.48 0.8',
      previewImageFocalPointTablet: '0.5 0.8',
      previewImageZoom: '240%',
      previewImageZoomMobile: '220%',
      previewImageZoomTablet: '240%',
      staticImagePatternDesktop: null,
      staticImagePatternMobile: null,
      subStep: null,
      contentfulMetadata: {
        __typename: 'ContentfulMetadata',
        tags: [],
      },
      productOptionsCollection: {
        __typename: 'ProductStepConfiguratorProductOptionsCollection',
        items: [
          {
            sys: {
              id: '5BzMI3RECb5LFiQ9MEgJTA',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionConfigurator',
            baseColor: null,
            productId: 'FW1708',
            productName: 'Leather Oxford',
            recommendations: null,
            subStep: null,
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710162432/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shoes_lace-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 9545,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710162432,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shoes_lace-min',
                  created_at: '2024-03-11T13:07:12Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710162432/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shoes_lace-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710162432/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shoes_lace-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710162432/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shoes_lace-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710162433/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shoes_lace-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 15194,
                  width: 780,
                  format: 'jpg',
                  height: 520,
                  version: 1710162433,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shoes_lace-min',
                  created_at: '2024-03-11T13:07:13Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710162433/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shoes_lace-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710162433/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shoes_lace-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710162433/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shoes_lace-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
          },
          {
            sys: {
              id: '2UQBxJwX94gmdxwCrMVVAk',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionConfigurator',
            baseColor: null,
            productId: 'FW1710',
            productName: 'Velvet Slip-On',
            recommendations: null,
            subStep: null,
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710162432/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shoes_suede-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 7151,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710162432,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shoes_suede-min',
                  created_at: '2024-03-11T13:07:12Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710162432/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shoes_suede-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710162432/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shoes_suede-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710162432/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_shoes_suede-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710162433/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shoes_suede-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 11521,
                  width: 780,
                  format: 'jpg',
                  height: 520,
                  version: 1710162433,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shoes_suede-min',
                  created_at: '2024-03-11T13:07:13Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710162433/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shoes_suede-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710162433/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shoes_suede-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710162433/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_shoes_suede-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
          },
        ],
      },
    },
    {
      sys: {
        id: '1qP5OQTyAfxj8T8fdmhroq',
        __typename: 'Sys',
      },
      __typename: 'ProductStepConfigurator',
      categoryStep: 'bow-tie',
      imageType: 'layered-image',
      title: 'Bow-Tie',
      previewImageFocalPoint: '0.5 0.195',
      previewImageFocalPointMobile: '0.5 0.215',
      previewImageFocalPointTablet: '0.5 0.195',
      previewImageZoom: '650%',
      previewImageZoomMobile: '500%',
      previewImageZoomTablet: '650%',
      staticImagePatternDesktop: null,
      staticImagePatternMobile: null,
      subStep: null,
      contentfulMetadata: {
        __typename: 'ContentfulMetadata',
        tags: [],
      },
      productOptionsCollection: {
        __typename: 'ProductStepConfiguratorProductOptionsCollection',
        items: [
          {
            sys: {
              id: '7hyhD8EHE9gdTdHY5Ephbj',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionConfigurator',
            baseColor: null,
            productId: 'D017',
            productName: 'Black Self-tied Bow Tie',
            recommendations: null,
            subStep: null,
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713528805/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_self-tied-min_01.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 26781,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1713528805,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_self-tied-min_01',
                  created_at: '2024-04-19T12:13:25Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713528805/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_self-tied-min_01.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713528805/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_self-tied-min_01.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713528805/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_self-tied-min_01.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713528805/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_self-tied-min_01.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 26781,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1713528805,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_self-tied-min_01',
                  created_at: '2024-04-19T12:13:25Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713528805/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_self-tied-min_01.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713528805/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_self-tied-min_01.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713528805/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_self-tied-min_01.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: 'Black Self-tied Bow Tie',
              lazyloading: false,
            },
          },
          {
            sys: {
              id: '3dDkH8ANSge3ln13KDJOxi',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionConfigurator',
            baseColor: null,
            productId: 'D018',
            productName: 'Black Self-tied Bow Tie',
            recommendations: null,
            subStep: null,
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713783113/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_self-tied-min_D018.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 81195,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1713783113,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_self-tied-min_D018',
                  created_at: '2024-04-22T10:51:53Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713783113/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_self-tied-min_D018.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713783113/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_self-tied-min_D018.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713783113/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_self-tied-min_D018.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713783113/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_self-tied-min_D018.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 81195,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1713783113,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_self-tied-min_D018',
                  created_at: '2024-04-22T10:51:53Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713783113/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_self-tied-min_D018.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713783113/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_self-tied-min_D018.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713783113/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_self-tied-min_D018.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: 'Black Bow Tie',
              lazyloading: false,
            },
          },
          {
            sys: {
              id: '2uYLZZZBZUWLTiyaMcxWEN',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionConfigurator',
            baseColor: null,
            productId: 'D019',
            productName: 'Navy Pre-tied Bow Tie',
            recommendations: null,
            subStep: null,
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152453/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_navy-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 25407,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710152453,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_navy-min',
                  created_at: '2024-03-11T10:20:53Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152453/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_navy-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152453/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_navy-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152453/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_navy-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152455/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_bow-tie_navy-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 17871,
                  width: 464,
                  format: 'jpg',
                  height: 464,
                  version: 1710152455,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_bow-tie_navy-min',
                  created_at: '2024-03-11T10:20:55Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152455/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_bow-tie_navy-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152455/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_bow-tie_navy-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152455/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_bow-tie_navy-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: 'Navy Pre-tied Bow Tie',
              lazyloading: false,
            },
          },
          {
            sys: {
              id: '3nNlVe2lD8hLI78Bj7U3hz',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionConfigurator',
            baseColor: null,
            productId: 'D020',
            productName: 'Black Pre-tied Bow Tie',
            recommendations: null,
            subStep: null,
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152451/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_pre-tied_1-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 23165,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710152451,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_pre-tied_1-min',
                  created_at: '2024-03-11T10:20:51Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152451/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_pre-tied_1-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152451/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_pre-tied_1-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152451/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_bow-tie_black_pre-tied_1-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152454/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_bow-tie_black_pre-tied_1-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 16955,
                  width: 464,
                  format: 'jpg',
                  height: 464,
                  version: 1710152454,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_bow-tie_black_pre-tied_1-min',
                  created_at: '2024-03-11T10:20:54Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152454/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_bow-tie_black_pre-tied_1-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152454/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_bow-tie_black_pre-tied_1-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152454/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_bow-tie_black_pre-tied_1-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: 'Black Pre-tied Bow Tie',
              lazyloading: false,
            },
          },
        ],
      },
    },
    {
      sys: {
        id: '2WRSB3tdK4TiaQxsvDVLkS',
        __typename: 'Sys',
      },
      __typename: 'ProductStepConfigurator',
      categoryStep: 'cufflinks',
      imageType: 'static-image',
      title: 'Cufflinks',
      previewImageFocalPoint: '0.5 0.5',
      previewImageFocalPointMobile: '0.5 0.5',
      previewImageFocalPointTablet: '0.5 0.5',
      previewImageZoom: '120%',
      previewImageZoomMobile: '100%',
      previewImageZoomTablet: '100%',
      staticImagePatternDesktop:
        'b_rgb:efefef,c_fit,h_2560,w_3500/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/{trouser}_{cufflinks}_D.jpg',
      staticImagePatternMobile:
        'b_rgb:efefef,c_fit,h_2048,w_1650/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/{trouser}_{cufflinks}_T.jpg',
      subStep: null,
      contentfulMetadata: {
        __typename: 'ContentfulMetadata',
        tags: [],
      },
      productOptionsCollection: {
        __typename: 'ProductStepConfiguratorProductOptionsCollection',
        items: [
          {
            sys: {
              id: 'vooefAHRSPWieb2ffB2ku',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionStaticImageConfigurator',
            baseColor: 'black',
            productId: 'M310',
            productName: 'Silver Black Round Cufflinks',
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152475/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_01-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 8500,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710152475,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_01-min',
                  created_at: '2024-03-11T10:21:15Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152475/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_01-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152475/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_01-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152475/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_01-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152473/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_01-1-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 6366,
                  width: 464,
                  format: 'jpg',
                  height: 464,
                  version: 1710152473,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_01-1-min',
                  created_at: '2024-03-11T10:21:13Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152473/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_01-1-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152473/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_01-1-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152473/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_01-1-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
            staticImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713948971/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_black-trousers_D.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 2365918,
                  width: 3500,
                  format: 'jpg',
                  height: 2560,
                  version: 1713948971,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_black-trousers_D',
                  created_at: '2024-04-24T08:56:11Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713948971/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_black-trousers_D.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713948971/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_black-trousers_D.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713948971/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_black-trousers_D.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713948854/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_black-trousers_T.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 1134291,
                  width: 1464,
                  format: 'jpg',
                  height: 2048,
                  version: 1713948854,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_black-trousers_T',
                  created_at: '2024-04-24T08:54:14Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713948854/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_black-trousers_T.jpg',
                  resource_type: 'image',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713948854/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_black-trousers_T.jpg',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713948854/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_black-trousers_T.jpg',
                  raw_transformation: 'f_auto/q_auto',
                },
              ],
              cloudinaryTabletImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713948854/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_black-trousers_T.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 1134291,
                  width: 1464,
                  format: 'jpg',
                  height: 2048,
                  version: 1713948854,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_black-trousers_T',
                  created_at: '2024-04-24T08:54:14Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713948854/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_black-trousers_T.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713948854/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_black-trousers_T.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713948854/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_black-trousers_T.jpg',
                },
              ],
              description: null,
              lazyloading: false,
            },
          },
          {
            sys: {
              id: '50VVBiLfaGBOgL36Go7hNX',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionStaticImageConfigurator',
            baseColor: 'black',
            productId: 'M311',
            productName: 'Silver Round Cufflinks',
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152472/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_07-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 8222,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710152472,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_07-min',
                  created_at: '2024-03-11T10:21:12Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152472/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_07-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152472/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_07-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152472/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_07-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152471/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_07-1-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 6759,
                  width: 464,
                  format: 'jpg',
                  height: 464,
                  version: 1710152471,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_07-1-min',
                  created_at: '2024-03-11T10:21:11Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152471/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_07-1-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152471/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_07-1-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152471/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_07-1-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
            staticImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713963948/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_black-trousers_D.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 507724,
                  width: 3500,
                  format: 'jpg',
                  height: 2560,
                  version: 1713963948,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_black-trousers_D',
                  created_at: '2024-04-24T13:05:48Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713963948/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_black-trousers_D.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713963948/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_black-trousers_D.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713963948/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_black-trousers_D.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713963931/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_black-trousers_T.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 262063,
                  width: 1464,
                  format: 'jpg',
                  height: 2048,
                  version: 1713963931,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_black-trousers_T',
                  created_at: '2024-04-24T13:05:31Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713963931/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_black-trousers_T.jpg',
                  resource_type: 'image',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713963931/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_black-trousers_T.jpg',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713963931/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_black-trousers_T.jpg',
                  raw_transformation: 'f_auto/q_auto',
                },
              ],
              cloudinaryTabletImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713963931/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_black-trousers_T.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 262063,
                  width: 1464,
                  format: 'jpg',
                  height: 2048,
                  version: 1713963931,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_black-trousers_T',
                  created_at: '2024-04-24T13:05:31Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713963931/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_black-trousers_T.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713963931/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_black-trousers_T.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713963931/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_black-trousers_T.jpg',
                },
              ],
              description: null,
              lazyloading: false,
            },
          },
          {
            sys: {
              id: 'FGE2lCnfyJVI1xqlEp6AC',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionStaticImageConfigurator',
            baseColor: 'black',
            productId: 'M316',
            productName: 'Gold Round Cufflinks',
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152469/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_06-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 10253,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710152469,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_06-min',
                  created_at: '2024-03-11T10:21:09Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152469/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_06-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152469/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_06-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152469/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_06-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152468/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_06-1-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 7945,
                  width: 464,
                  format: 'jpg',
                  height: 464,
                  version: 1710152468,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_06-1-min',
                  created_at: '2024-03-11T10:21:08Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152468/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_06-1-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152468/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_06-1-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152468/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_06-1-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
            staticImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713963939/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_black-trousers_D.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 511963,
                  width: 3500,
                  format: 'jpg',
                  height: 2560,
                  version: 1713963939,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_black-trousers_D',
                  created_at: '2024-04-24T13:05:39Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713963939/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_black-trousers_D.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713963939/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_black-trousers_D.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713963939/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_black-trousers_D.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713964589/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_black-trousers_T-1.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 267257,
                  width: 1464,
                  format: 'jpg',
                  height: 2048,
                  version: 1713964589,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_black-trousers_T-1',
                  created_at: '2024-04-24T13:16:29Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713964589/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_black-trousers_T-1.jpg',
                  resource_type: 'image',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713964589/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_black-trousers_T-1.jpg',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713964589/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_black-trousers_T-1.jpg',
                  raw_transformation: 'f_auto/q_auto',
                },
              ],
              cloudinaryTabletImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713964589/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_black-trousers_T-1.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 267257,
                  width: 1464,
                  format: 'jpg',
                  height: 2048,
                  version: 1713964589,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_black-trousers_T-1',
                  created_at: '2024-04-24T13:16:29Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713964589/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_black-trousers_T-1.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713964589/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_black-trousers_T-1.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713964589/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_black-trousers_T-1.jpg',
                },
              ],
              description: null,
              lazyloading: false,
            },
          },
          {
            sys: {
              id: '4X885GHlrww2ZW9XqRkiPk',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionStaticImageConfigurator',
            baseColor: 'navy',
            productId: 'M310',
            productName: 'Silver Black Round Cufflinks',
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152475/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_01-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 8500,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710152475,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_01-min',
                  created_at: '2024-03-11T10:21:15Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152475/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_01-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152475/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_01-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152475/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_01-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152473/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_01-1-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 6366,
                  width: 464,
                  format: 'jpg',
                  height: 464,
                  version: 1710152473,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_01-1-min',
                  created_at: '2024-03-11T10:21:13Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152473/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_01-1-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152473/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_01-1-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152473/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_01-1-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
            staticImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713964971/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_navy-trousers_D.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 501515,
                  width: 3500,
                  format: 'jpg',
                  height: 2560,
                  version: 1713964971,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_navy-trousers_D',
                  created_at: '2024-04-24T13:22:51Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713964971/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_navy-trousers_D.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713964971/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_navy-trousers_D.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713964971/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_navy-trousers_D.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713964980/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_navy-trousers_T.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 255064,
                  width: 1464,
                  format: 'jpg',
                  height: 2048,
                  version: 1713964980,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_navy-trousers_T',
                  created_at: '2024-04-24T13:23:00Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713964980/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_navy-trousers_T.jpg',
                  resource_type: 'image',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713964980/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_navy-trousers_T.jpg',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713964980/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_navy-trousers_T.jpg',
                  raw_transformation: 'f_auto/q_auto',
                },
              ],
              cloudinaryTabletImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713964980/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_navy-trousers_T.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 255064,
                  width: 1464,
                  format: 'jpg',
                  height: 2048,
                  version: 1713964980,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_navy-trousers_T',
                  created_at: '2024-04-24T13:23:00Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713964980/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_navy-trousers_T.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713964980/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_navy-trousers_T.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713964980/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_1_navy-trousers_T.jpg',
                },
              ],
              description: null,
              lazyloading: false,
            },
          },
          {
            sys: {
              id: '75WFvbDuukSNv9gsjQIhqq',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionStaticImageConfigurator',
            baseColor: 'navy',
            productId: 'M311',
            productName: 'Silver Round Cufflinks',
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152472/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_07-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 8222,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710152472,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_07-min',
                  created_at: '2024-03-11T10:21:12Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152472/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_07-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152472/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_07-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152472/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_07-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152471/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_07-1-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 6759,
                  width: 464,
                  format: 'jpg',
                  height: 464,
                  version: 1710152471,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_07-1-min',
                  created_at: '2024-03-11T10:21:11Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152471/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_07-1-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152471/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_07-1-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152471/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_07-1-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
            staticImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713964990/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_navy-trousers_D.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 500892,
                  width: 3500,
                  format: 'jpg',
                  height: 2560,
                  version: 1713964990,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_navy-trousers_D',
                  created_at: '2024-04-24T13:23:10Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713964990/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_navy-trousers_D.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713964990/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_navy-trousers_D.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713964990/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_navy-trousers_D.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713965000/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_navy-trousers_T.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 259552,
                  width: 1464,
                  format: 'jpg',
                  height: 2048,
                  version: 1713965000,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_navy-trousers_T',
                  created_at: '2024-04-24T13:23:20Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713965000/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_navy-trousers_T.jpg',
                  resource_type: 'image',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713965000/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_navy-trousers_T.jpg',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713965000/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_navy-trousers_T.jpg',
                  raw_transformation: 'f_auto/q_auto',
                },
              ],
              cloudinaryTabletImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713965000/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_navy-trousers_T.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 259552,
                  width: 1464,
                  format: 'jpg',
                  height: 2048,
                  version: 1713965000,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_navy-trousers_T',
                  created_at: '2024-04-24T13:23:20Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713965000/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_navy-trousers_T.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713965000/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_navy-trousers_T.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713965000/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_6_navy-trousers_T.jpg',
                },
              ],
              description: null,
              lazyloading: false,
            },
          },
          {
            sys: {
              id: '46znQzLqZD1sR4PvnlD1HX',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionStaticImageConfigurator',
            baseColor: 'navy',
            productId: 'M316',
            productName: 'Gold Round Cufflinks',
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152469/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_06-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 10253,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710152469,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_06-min',
                  created_at: '2024-03-11T10:21:09Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152469/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_06-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152469/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_06-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152469/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_06-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152468/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_06-1-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 7945,
                  width: 464,
                  format: 'jpg',
                  height: 464,
                  version: 1710152468,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_06-1-min',
                  created_at: '2024-03-11T10:21:08Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152468/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_06-1-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152468/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_06-1-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152468/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_cufflinks_06-1-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
            staticImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713965009/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_navy-trousers_D.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 501035,
                  width: 3500,
                  format: 'jpg',
                  height: 2560,
                  version: 1713965009,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_navy-trousers_D',
                  created_at: '2024-04-24T13:23:29Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713965009/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_navy-trousers_D.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713965009/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_navy-trousers_D.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713965009/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_navy-trousers_D.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713965019/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_navy-trousers_T.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 255505,
                  width: 1464,
                  format: 'jpg',
                  height: 2048,
                  version: 1713965019,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_navy-trousers_T',
                  created_at: '2024-04-24T13:23:39Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713965019/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_navy-trousers_T.jpg',
                  resource_type: 'image',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713965019/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_navy-trousers_T.jpg',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713965019/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_navy-trousers_T.jpg',
                  raw_transformation: 'f_auto/q_auto',
                },
              ],
              cloudinaryTabletImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713965019/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_navy-trousers_T.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 255505,
                  width: 1464,
                  format: 'jpg',
                  height: 2048,
                  version: 1713965019,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_navy-trousers_T',
                  created_at: '2024-04-24T13:23:39Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1713965019/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_navy-trousers_T.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1713965019/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_navy-trousers_T.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1713965019/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/preview_cufflinks_7_navy-trousers_T.jpg',
                },
              ],
              description: null,
              lazyloading: false,
            },
          },
        ],
      },
    },
    {
      sys: {
        id: '3YHSq7BCbJoBYxmMGCv2cU',
        __typename: 'Sys',
      },
      __typename: 'ProductStepConfigurator',
      categoryStep: 'suspenders',
      imageType: 'static-image',
      title: 'Suspenders',
      previewImageFocalPoint: '0.5 0.04',
      previewImageFocalPointMobile: null,
      previewImageFocalPointTablet: null,
      previewImageZoom: '160%',
      previewImageZoomMobile: null,
      previewImageZoomTablet: null,
      staticImagePatternDesktop:
        'b_rgb:efefef,c_fit,h_2560,w_3500/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/{shirt}_{trouser}_{suspenders}_{bow-tie}.jpg',
      staticImagePatternMobile:
        'b_rgb:efefef,c_fit,h_2048,w_1650/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/{shirt}_{trouser}_{suspenders}_{bow-tie}-T-1.jpg',
      subStep: null,
      contentfulMetadata: {
        __typename: 'ContentfulMetadata',
        tags: [],
      },
      productOptionsCollection: {
        __typename: 'ProductStepConfiguratorProductOptionsCollection',
        items: [
          {
            sys: {
              id: '5dcWTqErDA1Ycf6ATwsKCb',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionStaticImageConfigurator',
            baseColor: 'black',
            productId: 'BR077',
            productName: 'Black Suspenders',
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152482/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_suspender_black-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 44802,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710152482,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_suspender_black-min',
                  created_at: '2024-03-11T10:21:22Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152482/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_suspender_black-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152482/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_suspender_black-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152482/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_suspender_black-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152485/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_suspender_black-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 63854,
                  width: 780,
                  format: 'jpg',
                  height: 520,
                  version: 1710152485,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_suspender_black-min',
                  created_at: '2024-03-11T10:21:25Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152485/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_suspender_black-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152485/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_suspender_black-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152485/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_suspender_black-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
            staticImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714028343/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR077_D017.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 151554,
                  width: 3500,
                  format: 'jpg',
                  height: 2560,
                  version: 1714028343,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR077_D017',
                  created_at: '2024-04-25T06:59:03Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714028343/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR077_D017.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1714028343/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR077_D017.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1714028343/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR077_D017.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714048784/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR077_D017-T-1.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 95056,
                  width: 1650,
                  format: 'jpg',
                  height: 2048,
                  version: 1714048784,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR077_D017-T-1',
                  created_at: '2024-04-25T12:39:44Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714048784/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR077_D017-T-1.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1714048784/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR077_D017-T-1.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1714048784/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR077_D017-T-1.jpg',
                },
              ],
              cloudinaryTabletImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714048784/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR077_D017-T-1.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 95056,
                  width: 1650,
                  format: 'jpg',
                  height: 2048,
                  version: 1714048784,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR077_D017-T-1',
                  created_at: '2024-04-25T12:39:44Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714048784/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR077_D017-T-1.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1714048784/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR077_D017-T-1.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1714048784/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR077_D017-T-1.jpg',
                },
              ],
              description: null,
              lazyloading: false,
            },
          },
          {
            sys: {
              id: '7428TU7gNkRQyLFaHmyJeU',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionStaticImageConfigurator',
            baseColor: 'black',
            productId: 'BR078',
            productName: 'Navy Suspenders',
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152481/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_suspender_navy-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 47741,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710152481,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_suspender_navy-min',
                  created_at: '2024-03-11T10:21:21Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152481/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_suspender_navy-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152481/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_suspender_navy-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152481/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_suspender_navy-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152485/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_suspender_navy-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 70114,
                  width: 780,
                  format: 'jpg',
                  height: 520,
                  version: 1710152485,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_suspender_navy-min',
                  created_at: '2024-03-11T10:21:25Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152485/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_suspender_navy-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152485/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_suspender_navy-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152485/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_suspender_navy-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
            staticImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714028343/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR078_D017.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 149196,
                  width: 3500,
                  format: 'jpg',
                  height: 2560,
                  version: 1714028343,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR078_D017',
                  created_at: '2024-04-25T06:59:03Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714028343/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR078_D017.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1714028343/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR078_D017.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1714028343/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR078_D017.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714052035/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR078_D017-T-1.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 93761,
                  width: 1650,
                  format: 'jpg',
                  height: 2048,
                  version: 1714052035,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR078_D017-T-1',
                  created_at: '2024-04-25T13:33:55Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714052035/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR078_D017-T-1.jpg',
                  resource_type: 'image',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1714052035/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR078_D017-T-1.jpg',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1714052035/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR078_D017-T-1.jpg',
                  raw_transformation: 'f_auto/q_auto',
                },
              ],
              cloudinaryTabletImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714052035/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR078_D017-T-1.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 93761,
                  width: 1650,
                  format: 'jpg',
                  height: 2048,
                  version: 1714052035,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR078_D017-T-1',
                  created_at: '2024-04-25T13:33:55Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714052035/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR078_D017-T-1.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1714052035/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR078_D017-T-1.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1714052035/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B1299_BR078_D017-T-1.jpg',
                },
              ],
              description: null,
              lazyloading: false,
            },
          },
          {
            sys: {
              id: '7ChJG3mvkYXGBgCMJtnvf8',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionStaticImageConfigurator',
            baseColor: 'navy',
            productId: 'BR077',
            productName: 'Black Suspenders',
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152482/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_suspender_black-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 44802,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710152482,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_suspender_black-min',
                  created_at: '2024-03-11T10:21:22Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152482/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_suspender_black-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152482/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_suspender_black-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152482/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_suspender_black-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152485/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_suspender_black-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 63854,
                  width: 780,
                  format: 'jpg',
                  height: 520,
                  version: 1710152485,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_suspender_black-min',
                  created_at: '2024-03-11T10:21:25Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152485/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_suspender_black-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152485/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_suspender_black-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152485/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_suspender_black-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
            staticImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714029716/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR077_D017.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 151828,
                  width: 3500,
                  format: 'jpg',
                  height: 2560,
                  version: 1714029716,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR077_D017',
                  created_at: '2024-04-25T07:21:56Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714029716/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR077_D017.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1714029716/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR077_D017.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1714029716/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR077_D017.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714052029/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR077_D017-T-1.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 95137,
                  width: 1650,
                  format: 'jpg',
                  height: 2048,
                  version: 1714052029,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR077_D017-T-1',
                  created_at: '2024-04-25T13:33:49Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714052029/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR077_D017-T-1.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1714052029/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR077_D017-T-1.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1714052029/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR077_D017-T-1.jpg',
                },
              ],
              cloudinaryTabletImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714052029/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR077_D017-T-1.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 95137,
                  width: 1650,
                  format: 'jpg',
                  height: 2048,
                  version: 1714052029,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR077_D017-T-1',
                  created_at: '2024-04-25T13:33:49Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714052029/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR077_D017-T-1.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1714052029/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR077_D017-T-1.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1714052029/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR077_D017-T-1.jpg',
                },
              ],
              description: null,
              lazyloading: false,
            },
          },
          {
            sys: {
              id: '1FFqWBh6yPMfqTcquQzU3O',
              __typename: 'Sys',
            },
            __typename: 'ProductOptionStaticImageConfigurator',
            baseColor: 'navy',
            productId: 'BR078',
            productName: 'Navy Suspenders',
            contentfulMetadata: {
              __typename: 'ContentfulMetadata',
              tags: [],
            },
            thumbnailImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152481/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_suspender_navy-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 47741,
                  width: 560,
                  format: 'jpg',
                  height: 560,
                  version: 1710152481,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_suspender_navy-min',
                  created_at: '2024-03-11T10:21:21Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152481/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_suspender_navy-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152481/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_suspender_navy-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152481/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_desktop_suspender_navy-min.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152485/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_suspender_navy-min.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 70114,
                  width: 780,
                  format: 'jpg',
                  height: 520,
                  version: 1710152485,
                  duration: null,
                  metadata: [],
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_suspender_navy-min',
                  created_at: '2024-03-11T10:21:25Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1710152485/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_suspender_navy-min.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1710152485/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_suspender_navy-min.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1710152485/suitsupply/Black-Tie-Configurator/Configurator/Thumbnails/thumbnail_mobile_suspender_navy-min.jpg',
                },
              ],
              cloudinaryTabletImage: null,
              description: null,
              lazyloading: false,
            },
            staticImage: {
              __typename: 'MediaWrapperV2',
              cloudinaryDesktopImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714029717/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR078_D017.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 149123,
                  width: 3500,
                  format: 'jpg',
                  height: 2560,
                  version: 1714029717,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR078_D017',
                  created_at: '2024-04-25T07:21:57Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714029717/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR078_D017.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1714029717/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR078_D017.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1714029717/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR078_D017.jpg',
                },
              ],
              cloudinaryMobileImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714052038/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR078_D017-T-1.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 93347,
                  width: 1650,
                  format: 'jpg',
                  height: 2048,
                  version: 1714052038,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR078_D017-T-1',
                  created_at: '2024-04-25T13:33:58Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714052038/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR078_D017-T-1.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1714052038/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR078_D017-T-1.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1714052038/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR078_D017-T-1.jpg',
                },
              ],
              cloudinaryTabletImage: [
                {
                  url: 'http://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714052038/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR078_D017-T-1.jpg',
                  tags: [],
                  type: 'upload',
                  bytes: 93347,
                  width: 1650,
                  format: 'jpg',
                  height: 2048,
                  version: 1714052038,
                  duration: null,
                  metadata: {},
                  public_id:
                    'suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR078_D017-T-1',
                  created_at: '2024-04-25T13:33:58Z',
                  secure_url:
                    'https://cdn.suitsupply.com/image/upload/f_auto/q_auto/v1714052038/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR078_D017-T-1.jpg',
                  original_url:
                    'http://cdn.suitsupply.com/image/upload/v1714052038/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR078_D017-T-1.jpg',
                  resource_type: 'image',
                  raw_transformation: 'f_auto/q_auto',
                  original_secure_url:
                    'https://cdn.suitsupply.com/image/upload/v1714052038/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/H9495_B8353_BR078_D017-T-1.jpg',
                },
              ],
              description: null,
              lazyloading: false,
            },
          },
        ],
      },
    },
  ] as unknown as Array<BlackTieConfiguratorConfiguratorStepsItem>;

export const createCountryConfiguration = (): CountryConfiguration =>
  ({
    cookieBannerEnabled: true,
    countryCode: 'NL',
    ecommerce: {
      currencyCode: 'EUR',
      payment: {
        isApplePayEnabled: true,
        isPayPalExpressEnabled: true,
      },
      shipping: {
        addressField: {
          houseNumberValidation: true,
        },
        allowedShippingCountries: ['NL'],
        available: true,
        defaultPickupPoints: '1071GP',
        extraLeadTime: 0,
        isPaazlEnabled: true,
        isPickupInStoreEnabled: true,
        isPickupPointEnabled: true,
        primaryTime: 1,
        primaryTimeThreshold: 1,
        warehouses: 'AtDc,Shop',
      },
      tax: {
        hasNetPrice: true,
        isFallbackDWTaxCalculation: true,
        isGlobalTaxEnabled: true,
        noTax: true,
      },
    },
    languages: ['en'],
    locale: 'en-nl',
    migrated: false,
    name: 'The Netherlands',
    siteID: 'USA',
  }) as unknown as CountryConfiguration;

export const createCurrencyConfiguration = (): CurrencyConfiguration => ({
  USD: {
    format: {
      displayCode: true,
      displaySymbol: true,
    },
    symbol: '$',
  },
});

export const createInitializeSignalsProps = (): ClientConfiguratorProps =>
  ({
    configuratorSteps: createConfiguratorSteps(),
    country: createCountryConfiguration(),
    currency: createCurrencyConfiguration(),
    imageURL:
      'https://cdn.suitsupply.com/image/upload/l_products:Shoes:default:FW1710_66/fl_layer_apply,g_south,y_-60/l_products:Shirts:default:H9496_62/fl_layer_apply,g_north,y_475/l_products:Trousers:default:B1299_65/fl_layer_apply,g_south,y_130/l_products:Waistcoats:default:W1199_70/fl_layer_apply,g_north,y_475/l_products:Ties:default:D017_69/fl_layer_apply,g_north,y_475/l_products:Jackets:default:C1199_61/fl_layer_apply,g_north,y_475/l_products:ctc_models:model_3_hands/fl_layer_apply,g_north,y_0/b_rgb:efefef,bo_260px_solid_rgb:efefef,c_pad,w_2400/b_rgb:efefef,c_pad,h_1280,q_80,w_800,f_webp,fl_progressive:steep/products/ctc_models/model_3_full.jpeg',
    modelId: 'model_3',
    params: createParams(),
    productIds: createProductIds(),
    productAvailability: createProductAvailability(),
    campaignIds: createCampaignIds(),
    campaignPromotions: createCampaignPromotions(),
    campaignPrices: createCampaignPrices(),
  }) as unknown as ClientConfiguratorProps;

export const createTestBlackTieConfiguratorConfiguratorStepsItem = (): BlackTieConfiguratorConfiguratorStepsItem => ({
  imageType: 'layered-image',
  sys: {
    id: 'test-id',
    environmentId: 'test-environment-id',
    spaceId: 'test-space-id',
  },
  contentfulMetadata: {
    tags: [],
  },
});

export const createContentfulMetadata = (): ContentfulMetadata => ({
  tags: [],
});

export const createContentfulSys = (): Sys => ({
  id: 'test-id',
  environmentId: 'test-environment-id',
  spaceId: 'test-space-id',
});

export const createParams = () => {
  return {
    locale: 'en-nl',
    landingSlug: 'black-tie-package',
    toolSlug: 'mix-match-tuxedo',
  };
};

export const createProductIds = () => ['C1199', 'B1299', 'W1199', 'H9496', 'FW1710', 'D017', 'M310', 'BR077'];

export const createProductAvailability = () => ({
  getProductsByIds: [
    {
      id: 'W1199',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'C1199',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'C8353',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'B1299',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'B8353',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'H9496',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'H9497',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'H9495',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'FW1708',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'FW1710',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'D017',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'D018',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'D019',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'D020',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'M310',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'M311',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'M316',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'M310',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'M311',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'M316',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'BR077',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'BR078',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'BR077',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
    {
      id: 'BR078',
      availabilityStatus: {
        isAvailable: true,
        preOrder: false,
        oneLeft: false,
        showBadge: false,
        inStockDate: null,
        __typename: 'AvailabilityStatus',
      },
      __typename: 'Product',
    },
  ],
});

export const createCampaignIds = () => ['eveningwear-package-two-piece', 'eveningwear-package-three-piece'];

export const createCampaignPromotions = () => [
  {
    promotionByCampaignId: {
      price: 875,
      discountPrice: 779,
      __typename: 'Promotion',
    },
  },
  {
    promotionByCampaignId: {
      price: 935,
      discountPrice: 839,
      __typename: 'Promotion',
    },
  },
];

export const createCampaignPrices = () => {
  return [
    {
      id: 'eveningwear-package-two-piece',
      discounted: 779,
      original: 875,
    },
    {
      id: 'eveningwear-package-three-piece',
      discounted: 839,
      original: 935,
    },
  ];
};

export const getDefaultSelectedOption = () => {
  return getStepOptions(
    createConfiguratorSteps()[0] as unknown as BlackTieConfiguratorConfiguratorStepsItem,
    'black',
  )[0];
};
