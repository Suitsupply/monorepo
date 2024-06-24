import type { ResponsiveImageWrapperType } from '../../ResponsiveImageWrapper';
import {
  cleanUpLookbuilderUrl,
  generateBowTieSrcSets,
  generateSrcSetsLookbuilder,
  modifyUrlForBowTie,
} from '../../utils';
import { ResponsiveImageV2 } from '../ResponsiveImageV2';

/**
 * Renders a responsive image for the Lookbuilder component.
 * @param config - The configuration object for the responsive image.
 * @returns The rendered responsive image component.
 */
export const ResponsiveImageLookbuilder = (config: ResponsiveImageWrapperType) => {
  const { src, sizes, alt, isBowTie } = config;
  // Normalize the URL to remove any unnecessary query parameters.
  const cleanUrl = cleanUpLookbuilderUrl(src);
  // Modify the URL for custom transitions.
  const imageSrc = isBowTie ? modifyUrlForBowTie(cleanUrl) : cleanUrl;
  // Generate the src sets for the responsive image.
  const { desktopSrcSet, mobileSrcSet, tabletSrcSet } = isBowTie
    ? generateBowTieSrcSets(imageSrc, sizes)
    : generateSrcSetsLookbuilder(imageSrc, sizes);

  return (
    <ResponsiveImageV2
      {...config}
      alt={alt}
      desktopSizes={sizes.lg}
      desktopSrcSet={desktopSrcSet}
      mobileSizes={sizes.xs}
      mobileSrcSet={mobileSrcSet}
      src={imageSrc}
      tabletSizes={sizes.md}
      tabletSrcSet={tabletSrcSet}
    />
  );
};
