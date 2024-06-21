import { useLocale } from '@headless-commerce/contexts/locale/client';
import { environmentName } from '@headless-commerce/utils/environment';
import log from '@headless-commerce/utils/log';
import { useEffect, useRef } from 'react';

import { appendBTCss } from './helpers/appendBookingToolCss';
import { useBookingTool } from './hooks/useBookingTool';

type ClientBookingToolWrapperProps = {
  medium: string;
  source: string;
  bookingToolOpen: boolean;
  onClose: () => void;
};

export default function ClientBookingToolWrapper({
  medium,
  source,
  bookingToolOpen,
  onClose,
}: Readonly<ClientBookingToolWrapperProps>) {
  const locale = useLocale();
  const bookingToolRef = useRef<HTMLBookingToolElement>(null);

  useBookingTool();

  useEffect(() => {
    const cleanUp = () => {
      bookingToolRef.current?.clearBTState().catch(log.error);
      onClose();
    };

    if (bookingToolRef?.current) {
      if (!bookingToolOpen) {
        cleanUp();
      }

      bookingToolRef.current.addEventListener('crm-bt-booking-created', cleanUp, { once: true });
      bookingToolRef.current.addEventListener('crm-bt-close', cleanUp, { once: true });

      appendBTCss();
    }
  }, [bookingToolOpen, onClose]);

  return (
    <div>
      {bookingToolOpen ? (
        <>
          <booking-tool
            ref={bookingToolRef}
            env={environmentName === 'dev' ? 'tst' : environmentName}
            screen="store-id"
            ss-medium={medium}
            ss-source={source}
            locale={locale}
            use-url={false}
          ></booking-tool>
        </>
      ) : null}
    </div>
  );
}
