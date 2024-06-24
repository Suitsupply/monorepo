import { ResponsiveImageLookbuilder } from './ResponsiveImageV2/ResponsiveImageLookbuilder/ResponsiveImageLookbuilder';

export default interface Sizes {
  [key: string]: string;
}

export type ResponsiveImageWrapperType = {
  alt: string;
  isBowTie?: boolean;
  lazyloading: boolean;
  sizes: Sizes;
  src: string;
  type: 'lookbuilder';
};

/**
 * Renders a responsive image wrapper based on the provided configuration.
 * For component to work for tablet breakpoints, the sizes object must contain a 'md' key.
 * Default sizes object should contain 'xs' and 'lg' keys for mobile and desktop respectively.
 * @param config - The configuration object for the responsive image wrapper.
 * @returns The rendered responsive image wrapper component.
 */
export const ResponsiveImageWrapper = (config: ResponsiveImageWrapperType) => {
  if (config.type === 'lookbuilder') {
    return <ResponsiveImageLookbuilder {...config} />;
  }

  return null;
};
