'use client';

import log from '@susu/headless-commerce/utils/log';
import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';

export type ClientArticleCarouselBlockProps = {
  children?: ReactNode;
};

export default function ClientArticleCarouselBlock({ children }: ClientArticleCarouselBlockProps) {
  const articleCarouselRef = useRef<HTMLSsCarouselElement>(null);

  useEffect(() => {
    import('@suits/ss-design-system/dist/components/ss-carousel')
      .then(({ defineCustomElement }) => defineCustomElement())
      .catch(log.error);

    if (articleCarouselRef.current) {
      articleCarouselRef.current.responsive = {
        xs: {
          slidesToShow: 1,
          sidePaddingStart: 10,
          sidePaddingEnd: 30,
        },
        md: {
          slidesToShow: 2,
          sidePaddingStart: 10,
          sidePaddingEnd: 50,
        },
        xl: {
          slidesToShow: 3,
          sidePadding: 70,
        },
      };
    }
  });

  return (
    <ss-carousel
      ref={articleCarouselRef}
      slides-to-show={1}
      slide-gap={10}
      side-padding-start={10}
      side-padding-end={30}
      show-controls={false}
    >
      {children}
    </ss-carousel>
  );
}
