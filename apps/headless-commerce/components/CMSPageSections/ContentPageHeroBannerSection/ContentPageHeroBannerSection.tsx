import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Locale } from '@susu/headless-commerce/config/locale';
import type {
  ContentPageHeroBannerQuery,
  ContentPageHeroBannerQueryVariables,
} from '@susu/headless-commerce/gql/generated/contentPageHeroBanner.operation';
import { countries } from '@susu/headless-commerce/utils/configuration/country';
import { currencies } from '@susu/headless-commerce/utils/configuration/currency';
import { createRenderOptionForHeroBanner } from '@susu/headless-commerce/utils/contentfulUtils';
import { getCountryCode } from '@susu/headless-commerce/utils/localeUtils';
import { useMemo } from 'react';
import type { OperationResult } from 'urql';

import { ResponsiveImage } from '../../ResponsiveImage/ResponsiveImage';
import styles from './ContentPageHeroBannerSection.module.scss';

export type ContentPageHeroBannerSectionProps = {
  automationPageId: string;
  locale: Locale;
  query: OperationResult<ContentPageHeroBannerQuery, ContentPageHeroBannerQueryVariables>;
};

export default function ContentPageHeroBannerSection({
  automationPageId,
  locale,
  query,
}: Readonly<ContentPageHeroBannerSectionProps>) {
  const countryCode = getCountryCode(locale);
  const country = countries[countryCode];

  const {
    desktopTextAlignment,
    tabletTextAlignment,
    mobileTextAlignment,
    image,
    colorPalette,
    viewHeightSetMobile,
    subline,
    sublineShowOnDesktop,
    sublineShowOnMobile,
    sublineShowOnTablet,
  } = query.data?.contentPageHeroBanner || {};

  const textColorPaletteClass = styles[`content-hero__text--color-${colorPalette}`];
  const desktopTextAlignmentClass = styles[`content-hero__text--desktop-${desktopTextAlignment}`];
  const tabletTextAlignmentClass = styles[`content-hero__text--tablet-${tabletTextAlignment}`];
  const mobileTextAlignmentClass = styles[`content-hero__text--mobile-${mobileTextAlignment}`];
  const viewHeightSetMobileClass = styles[`content-hero--mobile-height-set-${viewHeightSetMobile}`.trim()];

  const desktopTextVisibilityClass =
    subline && sublineShowOnDesktop === 'no' ? styles[`content-hero__text--desktop-hidden`] : '';
  const mobileTextVisibilityClass =
    subline && sublineShowOnMobile === 'no' ? styles[`content-hero__text--mobile-hidden`] : '';
  const tabletTextVisibilityClass =
    subline && sublineShowOnTablet === 'no' ? styles[`content-hero__text--tablet-hidden`] : '';

  const heroTitleContent = documentToReactComponents(
    query.data?.contentPageHeroBanner?.title?.json,
    createRenderOptionForHeroBanner(
      query.data?.contentPageHeroBanner?.title,
      country.ecommerce.currencyCode,
      country,
      currencies,
    ),
  );

  const heroSubitleContent = documentToReactComponents(
    query.data?.contentPageHeroBanner?.subline?.json,
    createRenderOptionForHeroBanner(
      query.data?.contentPageHeroBanner?.subline,
      country.ecommerce.currencyCode,
      country,
      currencies,
    ),
  );

  const images = useMemo(
    () => ({
      cloudinaryDesktopImage: image?.cloudinaryDesktopImage,
      cloudinaryMobileImage: image?.cloudinaryMobileImage,
      cloudinaryTabletImage: image?.cloudinaryTabletImage,
    }),
    [image?.cloudinaryDesktopImage, image?.cloudinaryMobileImage, image?.cloudinaryTabletImage],
  );
  const sizes = useMemo(
    () => ({
      xs: '100vw',
    }),
    [],
  );

  return (
    <div className={`${styles['content-hero']} ${viewHeightSetMobileClass}`}>
      {/* Hero banner text */}
      <div
        className={`${styles['content-hero__text']} ${textColorPaletteClass} ${desktopTextAlignmentClass} ${tabletTextAlignmentClass} ${mobileTextAlignmentClass}`}
      >
        <h1
          className={`${styles['content-hero__title']} display-01-medium-sm display-02-medium-lg`}
          datat-testid={`${automationPageId}_hero_title`}
        >
          {heroTitleContent}
        </h1>
        <h2
          className={`${styles['content-hero__subtitle']} title-03-regular ${desktopTextVisibilityClass} ${mobileTextVisibilityClass} ${tabletTextVisibilityClass}`}
          datat-testid={`${automationPageId}_hero_subtitle`}
        >
          {heroSubitleContent}
        </h2>
      </div>

      {/* Hero banner image */}
      <ResponsiveImage
        source="cloudinary"
        images={images}
        lazyloading={image?.lazyloading as boolean}
        sizes={sizes}
        title={image?.altText as string}
      />
    </div>
  );
}
