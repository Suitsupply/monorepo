import { createContext, useContext, useEffect, useState } from 'react';

export type HeroBannerContextProps = {
  imageWrapperRef: React.RefObject<HTMLDivElement> | null;
  textWrapperRef: React.RefObject<HTMLDivElement> | null;
};

export const HeroBannerContext = createContext<HeroBannerContextProps>({
  imageWrapperRef: null,
  textWrapperRef: null,
});

export const useHeroBannerContext = () => {
  return useContext(HeroBannerContext);
};

export const useHeroBanner = () => {
  const { imageWrapperRef, textWrapperRef } = useHeroBannerContext();
  const [isTopScrolled, setIsTopScrolled] = useState<boolean>(false);
  const [isBottomScrolled, setIsBottomScrolled] = useState<boolean>();

  useEffect(() => {
    document?.addEventListener('scroll', () => {
      const imageOffset = window?.scrollY + (imageWrapperRef?.current?.getBoundingClientRect()?.top ?? 0);
      const imageHeight = imageWrapperRef?.current?.getBoundingClientRect()?.height ?? 0;
      const textOffset = textWrapperRef?.current?.getBoundingClientRect()?.height ?? 0;

      if (window?.scrollY + window?.innerHeight > imageOffset + textOffset) {
        setIsTopScrolled(true);
        if (window?.scrollY + window?.innerHeight > imageOffset + imageHeight) {
          setIsBottomScrolled(true);
        } else {
          setIsBottomScrolled(false);
        }
      } else {
        setIsTopScrolled(false);
      }
    });
  });

  return {
    isTopScrolled,
    isBottomScrolled,
  };
};
