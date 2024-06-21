/* eslint-disable @next/next/no-img-element */
'use client';

import { forwardRef, memo } from 'react';

import { ResponsiveCloudinary } from './ResponsiveCloudinary/ResponsiveCloudinary';
import { ResponsiveCommerce } from './ResponsiveCommerce/ResponsiveCommerce';
import type { ResponsiveImageConfig } from './ResponsiveImage.types';
import { ResponsiverUrl } from './ResponsiveUrl/ResponsiveUrl';

export const ResponsiveImage = memo(
  forwardRef<HTMLImageElement, ResponsiveImageConfig>(function ResponsiveImage(config, ref): JSX.Element | null {
    if (config.source === 'cloudinary') {
      return <ResponsiveCloudinary {...config} ref={ref} />;
    }

    if (config.source === 'commerce') {
      return <ResponsiveCommerce {...config} ref={ref} />;
    }

    if (config.source === 'url') {
      return <ResponsiverUrl {...config} ref={ref} />;
    }

    return null;
  }),
);
