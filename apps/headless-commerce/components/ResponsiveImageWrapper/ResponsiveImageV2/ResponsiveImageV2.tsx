export type ResponsiveImageV2Props = {
  alt: string;
  desktopSizes: string;
  desktopSrcSet: string;
  lazyloading?: boolean;
  mobileSizes: string;
  mobileSrcSet: string;
  src: string;
  tabletSizes?: string;
  tabletSrcSet?: string;
};

/**
 * Renders a responsive image with different sources based on the device's screen size.
 *
 * @param alt - The alternative text for the image.
 * @param desktopSizes - The sizes attribute for the desktop source.
 * @param desktopSrcSet - The srcset attribute for the desktop source.
 * @param lazyloading - Determines if lazy loading is enabled for the image.
 * @param mobileSizes - The sizes attribute for the mobile source.
 * @param mobileSrcSet - The srcset attribute for the mobile source.
 * @param src - The source URL for the image.
 * @param tabletSizes - The sizes attribute for the tablet source.
 * @param tabletSrcSet - The srcset attribute for the tablet source.
 * @returns The JSX element representing the responsive image.
 */
export const ResponsiveImageV2 = ({
  alt,
  desktopSizes,
  desktopSrcSet,
  lazyloading,
  mobileSizes,
  mobileSrcSet,
  src,
  tabletSizes,
  tabletSrcSet,
}: ResponsiveImageV2Props) => {
  return (
    <picture>
      {/* Desktop, Tablet and Mobile  */}
      {tabletSrcSet && tabletSizes && (
        <>
          <source media="(min-width: 992px)" sizes={desktopSizes} srcSet={desktopSrcSet}></source>
          <source media="(min-width: 768px) and (max-width: 991px)" sizes={tabletSizes} srcSet={tabletSrcSet}></source>
          <source media="(max-width: 767px)" sizes={mobileSizes} srcSet={mobileSrcSet}></source>
        </>
      )}
      {/* Desktop and Mobile */}
      {!tabletSrcSet && !tabletSizes && (
        <>
          <source media="(min-width: 992px)" sizes={desktopSizes} srcSet={desktopSrcSet}></source>
          <source media="(max-width: 991px)" sizes={mobileSizes} srcSet={mobileSrcSet}></source>
        </>
      )}
      <img src={src} alt={alt} fetchPriority={lazyloading ? 'low' : 'high'} loading={lazyloading ? 'lazy' : 'eager'} />
    </picture>
  );
};
