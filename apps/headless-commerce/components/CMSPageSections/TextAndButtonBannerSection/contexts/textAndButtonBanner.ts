import { createContext, useContext, useRef, useState } from 'react';

export const useTextAndButtonBannerData = () => {
  const [bookingToolOpen, setBookingToolOpen] = useState<boolean>(false);
  const bookingToolSliderRef = useRef<HTMLSsSideSliderElement>(null);
  const contentButtonRef = useRef<HTMLDivElement>(null);

  return {
    bookingToolOpen,
    setBookingToolOpen,
    bookingToolSliderRef,
    contentButtonRef,
  };
};

export const TextAndButtonBannerContext = createContext<ReturnType<typeof useTextAndButtonBannerData>>({
  bookingToolOpen: false,
  setBookingToolOpen: () => {},
  bookingToolSliderRef: { current: null },
  contentButtonRef: { current: null },
});

export const useTextAndButtonBannerContext = () => {
  return useContext(TextAndButtonBannerContext);
};
