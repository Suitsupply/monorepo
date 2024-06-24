'use client';

import type { UseEmblaCarouselType } from 'embla-carousel-react';
import useEmblaCarousel from 'embla-carousel-react';
import type { ReactNode } from 'react';
import { memo, useCallback, useEffect, useState } from 'react';

import styles from './CardCarouselContainerSection.module.scss';
import ClientNextButton from './ClientNextButton';
import ClientPrevButton from './ClientPrevButton';

export type ClientCardCarouselContainerSectionProps = {
  children: ReactNode;
};

export const ClientCardCarouselContainerSection = memo(function ClientCardCarouselContainerSection({
  children,
}: ClientCardCarouselContainerSectionProps) {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: NonNullable<UseEmblaCarouselType[1]>) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={styles['card-carousel']} ref={emblaRef}>
      {children}

      <ClientPrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
      <ClientNextButton onClick={scrollNext} disabled={nextBtnDisabled} />
    </div>
  );
});
