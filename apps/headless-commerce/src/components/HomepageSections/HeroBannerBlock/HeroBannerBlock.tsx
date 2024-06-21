import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ExternalLink from '@headless-commerce/components/ExternalLink/ExternalLink';
import ClientHeroBannerBlock from '@headless-commerce/components/HomepageSections/HeroBannerBlock/ClientHeroBannerBlock';
import ClientHeroBannerTextWrapper from '@headless-commerce/components/HomepageSections/HeroBannerBlock/ClientHeroBannerTextWrapper';
import ClientHeroBannerWrapper from '@headless-commerce/components/HomepageSections/HeroBannerBlock/ClientHeroBannerWrapper';
import { ResponsiveImage } from '@headless-commerce/components/ResponsiveImage/ResponsiveImage';
import type { Locale } from '@headless-commerce/config/locale';
import type { NavigationLink } from '@headless-commerce/gql/generated/graphql';
import type {
  HeroBannerContentQuery,
  HeroBannerContentQueryVariables,
} from '@headless-commerce/gql/generated/heroBanner.operation';
import { countries } from '@headless-commerce/utils/configuration/country';
import { currencies } from '@headless-commerce/utils/configuration/currency';
import { createRenderNodeForPriceInfo } from '@headless-commerce/utils/contentfulUtils';
import { getCountryCode } from '@headless-commerce/utils/localeUtils';
import type { PromotionEvents } from '@headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@headless-commerce/utils/UrlGenerator';
import { useMemo } from 'react';
import type { OperationResult } from 'urql';

import styles from './HeroBannerBlock.module.scss';

export type HeroBannerProps = {
  locale: Locale;
  query: OperationResult<HeroBannerContentQuery, HeroBannerContentQueryVariables>;
};

export default function HeroBanner({ query, locale }: Readonly<HeroBannerProps>) {
  const countryCode = getCountryCode(locale);
  const country = countries[countryCode];

  const promotionEvents = query.data?.heroBanner?.promotionEvents;
  const { colorPalette, image } = query.data?.heroBanner ?? {};

  const priceContent = documentToReactComponents(
    query.data?.heroBanner?.subline?.json,
    createRenderNodeForPriceInfo(query.data?.heroBanner?.subline, country.ecommerce.currencyCode, country, currencies),
  );

  const images = useMemo(
    () => ({
      cloudinaryDesktopImage: image?.cloudinaryDesktopImage,
      cloudinaryMobileImage: image?.cloudinaryMobileImage,
      cloudinaryTabletImage: image?.cloudinaryTabletImage,
    }),
    [image?.cloudinaryDesktopImage, image?.cloudinaryMobileImage, image?.cloudinaryTabletImage],
  );
  const sizes = useMemo(() => ({ xs: '100vw' }), []);

  return (
    <ClientHeroBannerWrapper>
      <ClientHeroBannerBlock promotionEvents={promotionEvents as PromotionEvents} locale={locale} country={country}>
        <ExternalLink
          href={generateUrlFromLinkContent(query.data?.heroBanner?.link as NavigationLink, country.siteID, locale)}
          className={styles['banner__container']}
        >
          <ResponsiveImage
            source="cloudinary"
            images={images}
            lazyloading={image?.lazyloading as boolean}
            sizes={sizes}
            title={image?.altText as string}
          />
        </ExternalLink>

        <ClientHeroBannerTextWrapper colorPalette={String(colorPalette)}>
          <div className="body-small-medium-sm title-03-medium-lg">
            {documentToReactComponents(query.data?.heroBanner?.title?.json)}
          </div>
          <div className="body-regular">{priceContent}</div>
        </ClientHeroBannerTextWrapper>
      </ClientHeroBannerBlock>
    </ClientHeroBannerWrapper>
  );
}
