'use client';

import ClientBookingToolWrapper from '@headless-commerce/components/ClientBookingToolWrapper/ClientBookingToolWrapper';
import { BOOKING_TOOL_LABEL_MEDIUM } from '@headless-commerce/components/CMSPageSections/TextAndImageColumnBannerSection/TextAndImageColumnBannerConstants';
import ClientSideSlider from '@headless-commerce/components/SideSlider/ClientSideSlider';
import { useCallback } from 'react';

import { useTextAndButtonBannerContext } from './contexts/textAndButtonBanner';

export default function ClientBookingTool() {
  const { bookingToolOpen, setBookingToolOpen } = useTextAndButtonBannerContext();
  const onClose = useCallback(() => {
    setBookingToolOpen(false);
  }, [setBookingToolOpen]);

  return (
    <ClientSideSlider
      isOpen={bookingToolOpen}
      onClose={onClose}
      fullScreen="mobile"
      hasCloseButton={true}
      slideInFrom="right"
    >
      <div>
        {bookingToolOpen ? (
          <ClientBookingToolWrapper
            source={BOOKING_TOOL_LABEL_MEDIUM}
            bookingToolOpen={bookingToolOpen}
            onClose={onClose}
            medium={window?.location.href.substring(window?.location.href.lastIndexOf('/') + 1)}
          />
        ) : null}
      </div>
    </ClientSideSlider>
  );
}
