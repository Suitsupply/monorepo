/* eslint-disable sonarjs/no-duplicate-string */
import type { CloudinaryImage } from '@headless-commerce/types/CloudinaryImage';
import type Sizes from 'responsive-image-utils/dist/types/interface/Sizes';
import { describe, expect, it } from 'vitest';

import type { Breakpoint } from './ResponsiveImage.types';
import {
  getClosestBreakpoint,
  reduceRatio,
  sizesString,
  smallerBreakpoints,
  srcsetAllDevices,
  srcsetString,
} from './utils';

describe('getClosestBreakpoint', () => {
  const breakpointsRange = ['sm', 'md', 'lg', 'xl'] as Breakpoint[];

  it('should return the closest breakpoint', () => {
    expect(getClosestBreakpoint(500, breakpointsRange)).toBe('sm');
    expect(getClosestBreakpoint(800, breakpointsRange)).toBe('md');
    expect(getClosestBreakpoint(1000, breakpointsRange)).toBe('lg');
    expect(getClosestBreakpoint(1600, breakpointsRange)).toBe('xl');
  });

  it('should return the first breakpoint if size is smaller than the smallest breakpoint', () => {
    expect(getClosestBreakpoint(100, breakpointsRange)).toBe('sm');
  });

  it('should return the last breakpoint if size is larger than the largest breakpoint', () => {
    expect(getClosestBreakpoint(2000, breakpointsRange)).toBe('xl');
  });
});

describe('sizesString', () => {
  it('should return the correct sizes string', () => {
    const sizes = {
      xs: '100px',
      sm: '200px',
      md: '300px',
      lg: '400px',
      xl: '500px',
    };

    expect(sizesString(sizes)).toBe(
      '100px, (min-width: 576px) 200px, (min-width: 768px) 300px, (min-width: 992px) 400px, (min-width: 1200px) 500px',
    );
  });
});

describe('smallerBreakpoints', () => {
  it('should return all breakpoints if deviceName is "all"', () => {
    const result = smallerBreakpoints('all');
    expect(result).toEqual(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']);
  });

  it('should return breakpoints for desktop if deviceName is "desktop"', () => {
    const result = smallerBreakpoints('desktop');
    expect(result).toEqual(['md', 'xs', 'sm']);
  });

  it('should return breakpoints for tablet if deviceName is "tablet"', () => {
    const result = smallerBreakpoints('tablet');
    expect(result).toEqual(['xs', 'sm']);
  });

  it('should return an empty array if deviceName is not "all", "desktop", or "tablet"', () => {
    // @ts-expect-error
    const result = smallerBreakpoints('unknown');
    expect(result).toEqual([]);
  });
});

describe('srcsetAllDevices', () => {
  it('should return the correct srcset strings for all devices', () => {
    const image: CloudinaryImage = {
      secure_url: 'https://example.com/w_1000,h_500/image.jpg',
      raw_transformation: 'w_1000,h_500',
      width: 1000,
      height: 500,
    } as unknown as CloudinaryImage;
    const sizes: Sizes = {
      xs: '100vw',
      lg: '300vw',
    };

    const result = srcsetAllDevices(image, sizes);

    expect(result).toEqual([
      'https://example.com/h_8873,ar_2:1,w_13650/image.jpg 3500w',
      'https://example.com/h_7605,ar_2:1,w_11700/image.jpg 3000w',
      'https://example.com/h_5831,ar_2:1,w_8970/image.jpg 2300w',
      'https://example.com/h_4867,ar_2:1,w_7488/image.jpg 1920w',
      'https://example.com/h_4380,ar_2:1,w_6739/image.jpg 1728w',
      'https://example.com/h_3650,ar_2:1,w_5616/image.jpg 1440w',
      'https://example.com/h_3296,ar_2:1,w_5070/image.jpg 1300w',
      'https://example.com/h_3285,ar_2:1,w_5054/image.jpg 1296w',
      'https://example.com/h_2596,ar_2:1,w_3994/image.jpg 1024w',
      'https://example.com/h_777,ar_2:1,w_1196/image.jpg 920w',
      'https://example.com/h_699,ar_2:1,w_1076/image.jpg 828w',
      'https://example.com/h_649,ar_2:1,w_998/image.jpg 768w',
      'https://example.com/h_406,ar_2:1,w_624/image.jpg 480w',
      'https://example.com/h_317,ar_2:1,w_488/image.jpg 375w',
    ]);
  });
});

describe('srcsetString', () => {
  it('should return the correct srcset string for specific device', () => {
    const image = {
      secure_url: 'https://example.com/w_1000,h_500/image.jpg',
      raw_transformation: 'w_1000,h_500',
      width: 1000,
      height: 500,
    } as unknown as CloudinaryImage;
    const sizes = {
      xs: '100px',
      sm: '200px',
      md: '300px',
      lg: '400px',
      xl: '500px',
    };
    const deviceName = 'desktop';

    const result = srcsetString(image, sizes, deviceName);

    expect(result).toBe(
      'https://example.com/ar_2:1,w_3500,h_1750/image.jpg 3500w,https://example.com/ar_2:1,w_3000,h_1500/image.jpg 3000w,https://example.com/ar_2:1,w_2300,h_1150/image.jpg 2300w,https://example.com/ar_2:1,w_1728,h_864/image.jpg 1728w,https://example.com/ar_2:1,w_1296,h_648/image.jpg 1296w,https://example.com/ar_2:1,w_768,h_384/image.jpg 768w',
    );
  });

  it('should throw for unknown device', () => {
    const image = {
      secure_url: 'https://example.com/w_1000,h_500/image.jpg',
      raw_transformation: 'w_1000,h_500',
      width: 1000,
      height: 500,
    } as unknown as CloudinaryImage;
    const sizes = {
      xs: '100px',
      sm: '200px',
      md: '300px',
      lg: '400px',
      xl: '500px',
    };
    const deviceName = 'unknown';

    // @ts-expect-error
    expect(() => srcsetString(image, sizes, deviceName)).toThrow('Invalid device name: unknown');
  });
});

describe('reduceRatio', () => {
  it('should reduce the ratio of two numbers', () => {
    const result = reduceRatio(1600, 900);
    expect(result).toEqual({ x: 16, y: 9 });
  });

  it('should return the same numbers if the ratio is already reduced', () => {
    const result = reduceRatio(4, 3);
    expect(result).toEqual({ x: 4, y: 3 });
  });

  it('should reduce the ratio of two large numbers', () => {
    const result = reduceRatio(1920, 1080);
    expect(result).toEqual({ x: 16, y: 9 });
  });
});
