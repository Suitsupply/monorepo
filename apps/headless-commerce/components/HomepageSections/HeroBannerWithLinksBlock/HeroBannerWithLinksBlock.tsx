import { HeroBannerLink } from '@susu/headless-commerce/components/HomepageSections/HeroBannerWithLinksBlock/HeroBannerLink/HeroBannerLink';
import { ResponsiveImage } from '@susu/headless-commerce/components/ResponsiveImage/ResponsiveImage';
import type { Locale } from '@susu/headless-commerce/config/locale';
import type { HeroLinkItem } from '@susu/headless-commerce/gql/generated/graphql';
import type {
  HeroBannerWithLinksContentQuery,
  HeroBannerWithLinksContentQueryVariables,
} from '@susu/headless-commerce/gql/generated/heroBannerWithLinks.operation';
import { countries } from '@susu/headless-commerce/utils/configuration/country';
import { generateIdentifier } from '@susu/headless-commerce/utils/identifier';
import { getCountryCode } from '@susu/headless-commerce/utils/localeUtils';
import { useMemo } from 'react';
import type { OperationResult } from 'urql';

import ClientHeroBannerWithLinksBlock from './ClientHeroBannerWithLinksBlock';

export type HeroBannerWithLinksProps = {
  locale: Locale;
  query: OperationResult<HeroBannerWithLinksContentQuery, HeroBannerWithLinksContentQueryVariables>;
};

export default function HeroBannerWithLinks({ locale, query }: Readonly<HeroBannerWithLinksProps>) {
  const countryCode = getCountryCode(locale);
  const country = countries[countryCode];
  const imageElement: JSX.Element | null = useMemo(() => {
    if (query.data?.heroBannerWithLinks?.content?.__typename === 'MediaWrapperV2') {
      const { cloudinaryDesktopImage, cloudinaryMobileImage, cloudinaryTabletImage, lazyloading, altText } =
        query.data.heroBannerWithLinks.content;

      const imagesData = () => ({
        cloudinaryDesktopImage,
        cloudinaryMobileImage,
        cloudinaryTabletImage,
      });
      const sizesData = () => ({ xs: '100vw' });

      return (
        <ResponsiveImage
          source="cloudinary"
          images={imagesData()}
          lazyloading={Boolean(lazyloading)}
          sizes={sizesData()}
          title={String(altText)}
        />
      );
    }

    return null;
  }, [query.data?.heroBannerWithLinks?.content]);

  const itemsElement: JSX.Element | null = useMemo(() => {
    if (query.data?.heroBannerWithLinks?.heroListLinksCollection?.items.length) {
      const items = query.data.heroBannerWithLinks.heroListLinksCollection.items as Array<HeroLinkItem>;
      return (
        <>
          {items?.map((item: HeroLinkItem) => (
            <HeroBannerLink item={item} key={item?.sys?.id || generateIdentifier()} country={country} locale={locale} />
          ))}
        </>
      );
    }

    return null;
  }, [country, locale, query.data?.heroBannerWithLinks?.heroListLinksCollection?.items]);

  return <ClientHeroBannerWithLinksBlock imageElement={imageElement} itemsElement={itemsElement} query={query} />;
}
