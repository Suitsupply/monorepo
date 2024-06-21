import type { Locale } from '@headless-commerce/config/locale';
import type { BlackTieConfiguratorConfiguratorStepsItem } from '@headless-commerce/gql/generated/graphql';
import type { ProductsCart } from '@headless-commerce/libs/avo/avo';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import type { PageType } from '@headless-commerce/types/PageType';
import log from '@headless-commerce/utils/log';
import { isNull } from '@headless-commerce/utils/null';
import { isUndefined } from '@headless-commerce/utils/undefined';

import type { StepOption } from '../components/ClientStepOptions/ClientStepOptions';
import { trackBowtieOptionSelectEvent } from './trackBowtieOptionSelectEvent';
import { trackCufflinkOptionSelectEvent } from './trackCufflinkOptionSelectEvent';
import { trackJacketOptionSelectEvent } from './trackJacketOptionSelectEvent';
import { trackShirtOptionSelectEvent } from './trackShirtOptionSelectEvent';
import { trackShoesOptionSelectEvent } from './trackShoesOptionSelectEvent';
import { trackSuspendersOptionSelectEvent } from './trackSuspendersOptionSelectEvent';
import { trackTrousersOptionSelectEvent } from './trackTrousersOptionSelectEvent';
import { trackStyleOptionSelectEvent } from './trackTuxedoStyleOptionSelectEvent';

export type TrackOptionSelectBase = {
  country: CountryConfiguration;
  locale: Locale;
  pageType: PageType;
  segmentProducts: Array<ProductsCart>;
  style: 'two-piece' | 'three-piece';
};

export type TrackOptionSelectConfig = TrackOptionSelectBase & {
  categoryStep: string;
};

export type TrackOptionSelectProps = TrackOptionSelectBase & {
  currentStepData: BlackTieConfiguratorConfiguratorStepsItem;
  selectedOption: StepOption;
};

export const trackOptionSelect = ({
  country,
  currentStepData,
  locale,
  pageType,
  segmentProducts,
  selectedOption,
  style,
}: TrackOptionSelectProps) => {
  if (
    isUndefined(currentStepData) ||
    isUndefined(currentStepData?.categoryStep) ||
    isNull(currentStepData?.categoryStep) ||
    isUndefined(selectedOption) ||
    isUndefined(style)
  ) {
    return;
  }

  const options: TrackOptionSelectConfig = {
    country,
    locale,
    categoryStep: currentStepData.categoryStep,
    pageType,
    segmentProducts,
    style,
  };

  if (selectedOption.__typename === 'TuxedoStyle') {
    if (isUndefined(selectedOption.style.tuxedoStyle) || isNull(selectedOption.style.tuxedoStyle)) {
      return;
    }

    trackStyleOptionSelectEvent(options);
    return;
  }

  if (
    (selectedOption.__typename === 'ProductOptionConfigurator' ||
      selectedOption.__typename === 'ProductOptionStaticImageConfigurator') &&
    selectedOption.productId
  ) {
    const optionsWithProductId = {
      ...options,
      productId: selectedOption.productId,
    };

    switch (currentStepData.categoryStep) {
      case 'bow-tie':
        trackBowtieOptionSelectEvent(optionsWithProductId);
        break;
      case 'cufflinks':
        trackCufflinkOptionSelectEvent(optionsWithProductId);
        break;
      case 'jacket':
        trackJacketOptionSelectEvent(optionsWithProductId);
        break;
      case 'shirt':
        trackShirtOptionSelectEvent(optionsWithProductId);
        break;
      case 'shoes':
        trackShoesOptionSelectEvent(optionsWithProductId);
        break;
      case 'suspenders':
        trackSuspendersOptionSelectEvent(optionsWithProductId);
        break;
      case 'trouser':
        trackTrousersOptionSelectEvent(optionsWithProductId);
        break;
      default:
        log.error('Unknown category step');
        break;
    }
  }
};
