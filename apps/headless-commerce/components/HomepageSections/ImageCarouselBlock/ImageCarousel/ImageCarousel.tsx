'use client';

import ExternalLink from '@susu/headless-commerce/components/ExternalLink/ExternalLink';
import { ResponsiveImage } from '@susu/headless-commerce/components/ResponsiveImage/ResponsiveImage';
import { breakpoints } from '@susu/headless-commerce/config/config';
import type { Locale } from '@susu/headless-commerce/config/locale';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import type { CarouselWithText, MediaWrapperV2, NavigationLink } from '@susu/headless-commerce/gql/generated/graphql';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import { useResizeObserver } from '@susu/headless-commerce/hooks/useResizeObserver';
import type { CountryConfiguration } from '@susu/headless-commerce/types/CountryConfiguration';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import { scrollDebounce } from '@susu/headless-commerce/utils/scrollUtils';
import type { PromotionEvents } from '@susu/headless-commerce/utils/tracking/tracking';
import { trackClickPromotion, trackImpressionPromotion } from '@susu/headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@susu/headless-commerce/utils/UrlGenerator';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import styles from './ImageCarousel.module.scss';

export type CarouselDevice = 'mobile' | 'tablet' | 'desktop' | '';

export type ImageCarouselProps = {
  country: CountryConfiguration;
  carousel: CarouselWithText;
  locale: Locale;
};

export const ImageCarousel = memo(function ImageCarousel({ carousel, country, locale }: ImageCarouselProps) {
  const customer = useCustomer();
  const pageType = usePageType();
  const [device, setDevice] = useState<CarouselDevice>('');
  const [visible, setVisible] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const INTERVAL = 3000; // in ms
  const {
    title,
    colorPalette,
    imagesCollection,
    mobileCarrousel,
    tabletCarrousel,
    desktopCarrousel,
    link,
    promotionEvents,
  } = carousel;
  const carouselOnDevice: CarouselDevice[] = useMemo(() => {
    let devices: CarouselDevice[] = [];

    if (mobileCarrousel?.toLowerCase() === 'yes') {
      devices = [...devices, 'mobile'];
    }
    if (tabletCarrousel?.toLowerCase() === 'yes') {
      devices = [...devices, 'tablet'];
    }
    if (desktopCarrousel?.toLowerCase() === 'yes') {
      devices = [...devices, 'desktop'];
    }

    return devices;
  }, [mobileCarrousel, tabletCarrousel, desktopCarrousel]);

  const staticCount = imagesCollection?.items.filter(item => item?.staticImage === 'yes').length ?? 0;

  const _started = useRef<number | undefined>(undefined);

  const stopCarousel = () => {
    setVisible(0);
    clearInterval(_started.current);
    _started.current = undefined;
  };

  const setupDevice = () => {
    const { md, lg } = breakpoints;
    let device: CarouselDevice = '';

    if (window?.matchMedia(`(max-width: ${md}px)`).matches) {
      device = 'mobile';
    } else if (window?.matchMedia(`(max-width: ${lg}px)`).matches) {
      device = 'tablet';
    } else {
      device = 'desktop';
    }

    setDevice(device);
  };

  const a = useRef<number>(0);

  const percentageVisible = useCallback(() => {
    if (!ref.current) {
      return 0;
    }

    const viewportHeight = window?.innerHeight;
    const { height, top } = ref.current.getBoundingClientRect();

    const percentage = Math.round(((viewportHeight - top) * 100) / height);

    return Math.max(0, Math.min(100, percentage));
  }, [ref]);

  const handleInteractiveEvent = useCallback(() => {
    trackClickPromotion(ref, promotionEvents as PromotionEvents, pageType, {
      locale,
      country,
      customer: customer as Customer,
    });
  }, [country, customer, locale, pageType, promotionEvents]);

  useEffect(() => {
    if (device === '') {
      setupDevice();
    }

    const startCarousel = () => {
      const initial = visible + 1 < staticCount ? visible + 1 : 0;

      a.current = initial;
      setVisible(initial);

      _started.current = setInterval(() => {
        const nextVisible = a.current + 1 < staticCount ? a.current + 1 : 0;

        a.current = nextVisible;
        setVisible(nextVisible);
      }, INTERVAL) as unknown as number;
    };

    if (carouselOnDevice.includes(device)) {
      scrollDebounce('image-carousel_scroll', () => {
        if (!_started.current && percentageVisible() >= 30) {
          startCarousel();
        }
      });
    } else {
      stopCarousel();
    }
  }, [device, carouselOnDevice, promotionEvents, visible, staticCount, percentageVisible]);

  useEffect(() => {
    if (ref.current) {
      trackImpressionPromotion(ref, promotionEvents as PromotionEvents, pageType, {
        locale,
        country,
        customer: customer as Customer,
      });
    }
  }, []);

  useResizeObserver(setupDevice, ref);

  const carouselClass = styles[`carousel-${carouselOnDevice.includes(device) ? 'on' : 'off'}`];
  const colorPaletteClass = styles[`color-${colorPalette?.toLowerCase()}`];
  const linkSizes = useMemo(
    () => ({
      xs: '100vw',
      md: '100vw',
      lg: staticCount === 2 ? '50vw' : '100vw',
    }),
    [staticCount],
  );

  return (
    <div
      className={styles['image-carousel']}
      onClick={handleInteractiveEvent}
      onKeyDown={handleInteractiveEvent}
      ref={ref}
      role="button"
      tabIndex={0}
    >
      <ExternalLink href={generateUrlFromLinkContent(link as NavigationLink, country.siteID, locale)}>
        <div
          className={`${styles['image-carousel__images']} ${carouselClass}`}
          style={{ '--static-count': `${staticCount}` } as React.CSSProperties}
        >
          {imagesCollection?.items.map((wrapper, index) => {
            const {
              cloudinaryMobileImage,
              cloudinaryTabletImage,
              cloudinaryDesktopImage,
              lazyloading,
              altText,
              staticImage,
            } = wrapper as MediaWrapperV2;

            const staticClass = styles[`image-carousel__image__static-${staticImage === 'yes' ? 'on' : 'off'}`];
            const activeClass = visible === index ? styles[`image-carousel__image__active`] : '';
            const images = () => ({ cloudinaryMobileImage, cloudinaryTabletImage, cloudinaryDesktopImage });

            return (
              <div
                key={`carousel_image_${index}`}
                className={`${styles['image-carousel__image']} ${staticClass} ${activeClass}`}
              >
                <ResponsiveImage
                  source="cloudinary"
                  images={images()}
                  title={altText ?? (title as string)}
                  lazyloading={lazyloading as boolean}
                  sizes={linkSizes}
                />
              </div>
            );
          })}
        </div>
        <div className={styles['image-carousel__title']}>
          <div
            className={`${styles['image-carousel__title__content']} ${colorPaletteClass} body-small-medium-sm title-03-medium-lg`}
          >
            {title}
          </div>
        </div>
      </ExternalLink>
    </div>
  );
});
