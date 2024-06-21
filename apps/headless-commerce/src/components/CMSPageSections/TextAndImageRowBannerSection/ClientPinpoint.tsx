'use client';

import type { DeviceName } from '@headless-commerce/components/ResponsiveImage/ResponsiveImage.types';
import { breakpoints } from '@headless-commerce/config/config';
import type { Maybe, PinpointOverlayIndicator } from '@headless-commerce/gql/generated/graphql';
import type {
  TextAndImageRowBannerQueryQuery,
  TextAndImageRowBannerQueryQueryVariables,
} from '@headless-commerce/gql/generated/textAndImageRowBanner.operation';
import { useResizeObserver } from '@headless-commerce/hooks/useResizeObserver';
import type { ReactNode } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { OperationResult } from 'urql';

import styles from './TextAndImageRowBannerSection.module.scss';

export type ClientPinpointProps = {
  query: OperationResult<TextAndImageRowBannerQueryQuery, TextAndImageRowBannerQueryQueryVariables>;
  children?: ReactNode;
};

export default function ClientPinpoint({ children, query }: Readonly<ClientPinpointProps>) {
  const imageTextCardPinpointRef = useRef<HTMLDivElement>(null);
  const [device, setDevice] = useState<DeviceName | undefined>(undefined);
  const pinpointItem = query.data?.textAndImageRowBanner?.mediaContentCollection?.items?.find(
    item => item?.__typename === 'PinpointOverlayIndicator',
  );

  const updateDevice = () => {
    const { md, lg } = breakpoints;
    let newDevice: DeviceName | undefined = undefined;

    if (window?.matchMedia(`(max-width: ${md}px)`).matches) {
      newDevice = 'mobile';
    } else if (window?.matchMedia(`(max-width: ${lg}px)`).matches) {
      newDevice = 'tablet';
    } else {
      newDevice = 'desktop';
    }

    setDevice(newDevice);
  };

  const { mobilePinpointPosition, tabletPinpointPosition, desktopPinpointPosition } =
    (pinpointItem as PinpointOverlayIndicator) || {};

  const stylesMap: Record<DeviceName, Maybe<string> | undefined> = useMemo(
    () => ({
      mobile: mobilePinpointPosition,
      tablet: tabletPinpointPosition,
      desktop: desktopPinpointPosition,
    }),
    [desktopPinpointPosition, mobilePinpointPosition, tabletPinpointPosition],
  );

  useResizeObserver(updateDevice);

  useEffect(() => {
    if (!device) {
      updateDevice();
    }

    if (!pinpointItem || pinpointItem.__typename !== 'PinpointOverlayIndicator') {
      return;
    }

    if (imageTextCardPinpointRef.current) {
      // @ts-expect-error read-only property
      imageTextCardPinpointRef.current.style = stylesMap[device as Device];
    }
  }, [device, pinpointItem, stylesMap]);

  if (!pinpointItem || pinpointItem.__typename !== 'PinpointOverlayIndicator') {
    return null;
  }

  return (
    <div
      className={`${styles['imagetext-card__pinpoint']} body-small-medium-sm body-medium-lg`}
      ref={imageTextCardPinpointRef}
    >
      {children}
    </div>
  );
}
