import { getDecimalFromWholeNumber } from '@headless-commerce/utils/numbers';
import type Sizes from 'responsive-image-utils/dist/types/interface/Sizes';

/**
 * An object that contains arrays of widths for different device types.
 */
export const srcSetWidths = {
  mobile: [375, 480, 768, 828, 1024],
  tablet: [768, 920, 1300, 1440, 1920],
  desktop: [768, 1296, 1728, 2300, 3000, 3500],
};
export const BOW_TIE_URL_MODIFIER = ',y_0/c_crop,g_north,h_1000,w_1200,y_370';
// Constant multiplier to ensure the image is sharp.
export const IMAGE_QUALITY_MULTIPLIER = 1.3;

/**
 * Removes unnecessary parts from the given URL and returns the cleaned URL.
 * @param url - The URL to clean up.
 * @param customTransition - Optional parameter to indicate if a custom transition is applied.
 * @returns The cleaned URL.
 */
export const cleanUpLookbuilderUrl = (url: string, customTransition: boolean = false) => {
  let cleanUrl = url.replace('/b_rgb:efefef,bo_260px_solid_rgb:efefef,c_pad,w_2400', '').replace(',q_80', '');

  if (customTransition) {
    cleanUrl = modifyUrlForBowTie(cleanUrl);
  }

  return cleanUrl;
};

/**
 * Modifies the URL for a custom transition by replacing ',y_0' with a custom transition URL modifier.
 * @param url - The original URL to be modified.
 * @returns The modified URL with the custom transition URL modifier.
 */
export const modifyUrlForBowTie = (url: string) => {
  return url.replace(',y_0', BOW_TIE_URL_MODIFIER);
};

/**
 * Generates the srcsets for different breakpoints based on the provided URL and sizes.
 * @param url - The URL of the image.
 * @param sizes - The sizes object containing the viewport widths for different breakpoints.
 * @returns An object containing the srcsets for desktop, mobile, and tablet breakpoints.
 */
export const generateSrcSetsLookbuilder = (url: string, sizes: Sizes) => {
  // Using the sizes prop to calculate the factor for the srcset widths.
  const desktopSizesFactor = getDecimalFromWholeNumber(Number(sizes.lg?.replace('vw', '')));
  const mobileSizesFactor = getDecimalFromWholeNumber(Number(sizes.xs?.replace('vw', '')));
  const tabletSizesFactor = getDecimalFromWholeNumber(Number(sizes.md?.replace('vw', '')));
  const splitUrl = url.split(',');
  // Extract the width and height parameters from the URL.
  const heightParam = splitUrl.filter(params => params.includes('h_'))[0];
  const widthParam = splitUrl.filter(params => params.includes('w_'))[0];
  const heightParamNumber = Number(heightParam.split('_')[1]);
  const widthParamNumber = Number(widthParam.split('_')[1]);
  const aspectRatio = widthParamNumber / heightParamNumber;

  // Generate the srcset for the mobile and desktop breakpoints.
  const mobileSrcSet = srcSetWidths.mobile
    .map(width => {
      // Calculate the new width and height based on the factor. Constant multiplier of 1.3 is used to ensure the image is sharp.
      const widthReplacement = Math.round(width * mobileSizesFactor * IMAGE_QUALITY_MULTIPLIER);
      const heightReplacement = Math.round(widthReplacement / aspectRatio);

      // Replace the width and height parameters in the URL and add the width descriptor.
      return url
        .replace(`${widthParam},`, `w_${widthReplacement}/`)
        .replace(heightParam, `h_${heightReplacement}`)
        .replace('.jpeg', `.jpeg ${width}w`);
    })
    .join(', ');

  // Generate the srcset for the desktop breakpoints.
  const desktopSrcSet = srcSetWidths.desktop
    .map(width => {
      // Calculate the new width and height based on the factor. Constant multiplier of 1.3 is used to ensure the image is sharp.
      const widthReplacement = Math.round(width * desktopSizesFactor * IMAGE_QUALITY_MULTIPLIER);
      const heightReplacement = Math.round(widthReplacement / aspectRatio);

      // Replace the width and height parameters in the URL and add the width descriptor.
      return url
        .replace(`${widthParam},`, `w_${widthReplacement}/`)
        .replace(heightParam, `h_${heightReplacement}`)
        .replace('.jpeg', `.jpeg ${width}w`);
    })
    .join(', ');

  // Generate the srcset for the tablet breakpoints.
  const tabletSrcSet = sizes.md
    ? srcSetWidths.tablet
        .map(width => {
          // Calculate the new width and height based on the factor. Constant multiplier of 1.3 is used to ensure the image is sharp.
          const widthReplacement = Math.round(width * tabletSizesFactor * IMAGE_QUALITY_MULTIPLIER);
          const heightReplacement = Math.round(widthReplacement / aspectRatio);

          // Replace the width and height parameters in the URL and add the width descriptor.
          return url
            .replace(`${widthParam},`, `w_${widthReplacement}/`)
            .replace(heightParam, `h_${heightReplacement}`)
            .replace('.jpeg', `.jpeg ${width}w`);
        })
        .join(', ')
    : '';

  return { desktopSrcSet: desktopSrcSet, mobileSrcSet: mobileSrcSet, tabletSrcSet: tabletSrcSet };
};

export const generateBowTieSrcSets = (url: string, sizes: Sizes) => {
  // Using the sizes prop to calculate the factor for the srcset widths.
  const desktopSizesFactor = getDecimalFromWholeNumber(Number(sizes.lg?.replace('vw', '')));
  const mobileSizesFactor = getDecimalFromWholeNumber(Number(sizes.xs?.replace('vw', '')));
  const tabletSizesFactor = getDecimalFromWholeNumber(Number(sizes.md?.replace('vw', '')));
  const aspectRatio = 0.625;
  const splittedUrl = url.split(BOW_TIE_URL_MODIFIER);
  const newSplittedUrl = splittedUrl[1].split('/');

  newSplittedUrl[1] = newSplittedUrl[1].replace('c_pad', 'c_fill');
  splittedUrl[1] = newSplittedUrl[1];

  const splitParams = newSplittedUrl[1].split(',');
  const newUrl = splittedUrl[0] + BOW_TIE_URL_MODIFIER + newSplittedUrl.join('/');
  const heightParam = splitParams.filter(params => params.includes('h_'))[0];
  const widthParam = splitParams.filter(params => params.includes('w_'))[0];

  const desktopSrcSet = srcSetWidths.desktop
    .map(width => {
      const widthReplacement = Math.round(width * desktopSizesFactor * IMAGE_QUALITY_MULTIPLIER);
      const heightReplacement = Math.round(widthReplacement * aspectRatio);

      return newUrl
        .replace('c_pad', 'c_fill')
        .replace(`${widthParam},`, `w_${widthReplacement}/`)
        .replace(heightParam, `h_${heightReplacement}`)
        .replace('.jpeg', `.jpeg ${width}w`);
    })
    .join(', ');

  const mobileSrcSet = srcSetWidths.mobile
    .map(width => {
      const widthReplacement = Math.round(width * mobileSizesFactor * IMAGE_QUALITY_MULTIPLIER);
      const heightReplacement = Math.round(widthReplacement * aspectRatio);

      return newUrl
        .replace('c_pad', 'c_fill')
        .replace(`${widthParam},`, `w_${widthReplacement}/`)
        .replace(heightParam, `h_${heightReplacement}`)
        .replace('.jpeg', `.jpeg ${width}w`);
    })
    .join(',');

  const tabletSrcSet = sizes.md
    ? srcSetWidths.tablet
        .map(width => {
          const widthReplacement = Math.round(width * tabletSizesFactor * IMAGE_QUALITY_MULTIPLIER);
          const heightReplacement = Math.round(widthReplacement * aspectRatio);

          return newUrl
            .replace('c_pad', 'c_fill')
            .replace(`${widthParam},`, `w_${widthReplacement}/`)
            .replace(heightParam, `h_${heightReplacement}`)
            .replace('.jpeg', `.jpeg ${width}w`);
        })
        .join(',')
    : '';

  return { desktopSrcSet: desktopSrcSet, mobileSrcSet: mobileSrcSet, tabletSrcSet: tabletSrcSet };
};
