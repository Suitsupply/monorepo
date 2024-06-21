'use client';

import type { Locale } from '@headless-commerce/config/locale';
import { useCommerceCampaignCarrouselQuery } from '@headless-commerce/gql/generated/commerceCampaignCarrousel.urql';
import { useContentfulCampaignCarouselQuery } from '@headless-commerce/gql/generated/contentfulCampaignCarousel.urql';
import type { NavigationLink, Product } from '@headless-commerce/gql/generated/graphql';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import { convertLocaleToCommerceGraphQLFormat } from '@headless-commerce/utils/localeUtils';
import log from '@headless-commerce/utils/log';
import type { PromotionEvents } from '@headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@headless-commerce/utils/UrlGenerator';
import { useEffect, useMemo, useRef } from 'react';

import ProductCard from '../ProductCard/ProductCard';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './ProductCarousel.module.scss';

export type ProductCarouselProps = {
  id: string;
  locale: Locale;
  country: CountryConfiguration;
  automationPageId: string;
};

export default function ProductCarousel({ id, country, locale, automationPageId }: ProductCarouselProps) {
  const [{ data: contentfulData, error: contentfulError, fetching: contentfulFetching }] =
    useContentfulCampaignCarouselQuery({
      variables: useMemo(
        () => ({
          preview: null,
          id,
        }),
        [id],
      ),
    });

  const [carouselConfig] = contentfulData?.campaignCarrousel?.contentCollection?.items || [];
  const carouselTitle = contentfulData?.campaignCarrousel?.title;
  const { title, link, promotionEvents } = contentfulData?.campaignCarrousel?.cta ?? {};
  const { categoryId, qtyOfProducts } = carouselConfig ?? {};

  const [{ data: commerceData, error: commerceError, fetching: commerceFetching }] = useCommerceCampaignCarrouselQuery({
    variables: useMemo(
      () => ({
        categoryId: String(categoryId),
        limit: Number(qtyOfProducts),
        siteInfo: {
          siteId: country.siteID,
          locale: convertLocaleToCommerceGraphQLFormat(locale),
          currency: country.ecommerce.currencyCode,
        },
      }),
      [categoryId, country.ecommerce.currencyCode, locale, qtyOfProducts, country.siteID],
    ),
    context: useMemo(
      () => ({
        clientName: 'commerce',
      }),
      [],
    ),
    pause: !(Boolean(categoryId) && Boolean(qtyOfProducts)),
  });

  const productCarouselRef = useRef<HTMLSsCarouselElement>(null);

  useEffect(() => {
    if (productCarouselRef.current) {
      productCarouselRef.current.responsive = {
        md: {
          slidesToShow: 2,
          slidesToScroll: 2,
          sidePaddingStart: 10,
          sidePaddingEnd: 50,
        },
        xl: {
          slidesToShow: 3,
          slidesToScroll: 3,
          sidePaddingStart: 10,
          sidePaddingEnd: 70,
        },
        xs: {
          slidesToShow: 1,
          slidesToScroll: 1,
          sidePaddingStart: 10,
          sidePaddingEnd: 30,
        },
      };
    }
  }, [productCarouselRef]);

  if (contentfulFetching || commerceFetching) {
    return null;
  }

  if (contentfulError || commerceError) {
    log.error((contentfulError ?? commerceError) as Error);
  }

  return (
    <div className={styles['product-carousel']}>
      <SectionTitle
        titleText={carouselTitle}
        titleLink={generateUrlFromLinkContent(link as NavigationLink, country.siteID, locale)}
        titleLinkText={title}
        ctaTrackingData={promotionEvents as PromotionEvents}
      />
      <ss-carousel
        ref={productCarouselRef}
        slides-to-show={1}
        slides-to-scroll={1}
        slide-gap={10}
        side-padding={30}
        start-slide={0}
        show-controls={true}
        show-dots={false}
      >
        {(commerceData?.productSearchForHomePage ?? [])?.map(product => {
          return (
            <ProductCard
              key={product.id}
              locale={locale}
              product={product as Product}
              automationPageId={automationPageId}
            />
          );
        })}
      </ss-carousel>
    </div>
  );
}
