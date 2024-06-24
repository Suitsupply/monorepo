import type { Components } from '@suits/crm-booking-tool';
import { defineCustomElements } from '@suits/crm-booking-tool/dist/loader';
import { defineCustomElements as defineCustomElementsDesignSystem } from '@suits/ss-design-system/loader';
import log from '@susu/headless-commerce/utils/log';
import type { RefObject } from 'react';
import { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'booking-tool': Partial<Components.BookingTool> & { ref: RefObject<HTMLBookingToolElement> };
    }
  }
}

export function useBookingTool() {
  useEffect(() => {
    defineCustomElements(window).catch(log.error);
    defineCustomElementsDesignSystem(window).catch(log.error);
  });
}
