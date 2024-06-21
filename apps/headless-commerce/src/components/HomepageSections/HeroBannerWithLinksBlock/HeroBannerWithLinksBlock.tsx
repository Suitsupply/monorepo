import { HeroBannerLink } from '@headless-commerce/components/HomepageSections/HeroBannerWithLinksBlock/HeroBannerLink/HeroBannerLink';
import { ResponsiveImage } from '@headless-commerce/components/ResponsiveImage/ResponsiveImage';
import type { Locale } from '@headless-commerce/config/locale';
import type { HeroLinkItem } from '@headless-commerce/gql/generated/graphql';
import type {
  HeroBannerWithLinksContentQuery,
  HeroBannerWithLinksContentQueryVariables,
} from '@headless-commerce/gql/generated/heroBannerWithLinks.operation';
import { countries } from '@headless-commerce/utils/configuration/country';
import { generateIdentifier } from '@headless-commerce/utils/identifier';
import { getCountryCode } from '@headless-commerce/utils/localeUtils';
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
