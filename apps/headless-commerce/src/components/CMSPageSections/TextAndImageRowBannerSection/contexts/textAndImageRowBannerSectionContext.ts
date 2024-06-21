import { createContext, useContext, useRef } from 'react';

export const useTextAndImageRowBannerSectionData = () => {
  const dynamicMediaWrapperRef = useRef<HTMLDivElement>(null);
  const imageTextCardPinpointRef = useRef<HTMLDivElement>(null);

  return {
    dynamicMediaWrapperRef,
    imageTextCardPinpointRef,
  };
};

export const TextAndImageRowBannerSectionContext = createContext<
  ReturnType<typeof useTextAndImageRowBannerSectionData>
>({
  dynamicMediaWrapperRef: { current: null },
  imageTextCardPinpointRef: { current: null },
});

export const useTextAndImageRowBannerSectionContext = () => {
  return useContext(TextAndImageRowBannerSectionContext);
};
