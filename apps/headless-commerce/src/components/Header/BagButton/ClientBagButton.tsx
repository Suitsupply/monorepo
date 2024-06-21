'use client';

import ExternalLink from '@headless-commerce/components/ExternalLink/ExternalLink';
import { cart } from '@headless-commerce/contexts/cart';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { customerPromise } from '@headless-commerce/contexts/customer';
import { useHeader } from '@headless-commerce/contexts/header/client';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import type {
  CustomMadeLineItem,
  GiftCertificateItem,
  ProductLineItem,
} from '@headless-commerce/gql/generated/graphql';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import { enrichEvent } from '@headless-commerce/libs/segment/utils';
import { getCartTotalItems } from '@headless-commerce/utils/cart';
import log from '@headless-commerce/utils/log';
import { URLData } from '@headless-commerce/utils/tracking/segment';
import { trackEvent } from '@headless-commerce/utils/tracking/tracking';
import { useComputed, useSignal, useSignals } from '@preact/signals-react/runtime';
import type { ReactNode } from 'react';
import { useCallback } from 'react';

export type ClientBagButtonProps = {
  children?: ReactNode;
};

export default function ClientBagButton({ children }: Readonly<ClientBagButtonProps>) {
  useSignals();

  const pageType = usePageType();
  const country = useSignal(useCountry());
  const locale = useSignal(useLocale());
  const { headerTrackingValue, segmentEventLabel } = useHeader();

  const handleClick = useCallback(() => {
    (async () => {
      await customerPromise;
      const { url, locationId } = URLData();
      trackEvent({
        ga: {
          eventCategory: 'Global_Interactions',
          eventAction: 'Minicart_Header_Click',
          eventLabel: headerTrackingValue,
        },
        segment: {
          event: 'headerMinicartClick',
          properties: enrichEvent(
            {
              locale: locale.value,
              country: country.value,
            },
            {
              pageType,
              eventLabel: segmentEventLabel,
              eventCategory: 'global_interactions',
              eventLocation: 'header',
              url,
              locationId,
            },
          ),
        },
      });
    })();
  }, [country, headerTrackingValue, locale, pageType, segmentEventLabel]);

  const countInputProps = useComputed(() => {
    const cartCount = getCartTotalItems(
      (cart.value?.lineItems ?? []) as Array<CustomMadeLineItem | ProductLineItem>,
      (cart.value?.giftCertificateItems ?? []) as Array<GiftCertificateItem>,
    );
    const result = {
      'data-count': cartCount > 0 ? cartCount : null,
    };
    log.trace({
      method: 'ClientBagButton:countInputProps',
      result,
    });
    return result;
  });

  log.trace({
    method: 'ClientBagButton',
    country,
    locale,
  });

  return (
    <span {...countInputProps.value}>
      <ExternalLink href={`/${locale}/cart`} onClick={handleClick}>
        {children}
      </ExternalLink>
    </span>
  );
}
