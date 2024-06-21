'use client';

import type { Locale } from '@headless-commerce/config/locale';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import { useConfigurator } from '@headless-commerce/features/configurator/signals';
import type { CommerceCampaignPromotionQuery } from '@headless-commerce/gql/generated/commerceCampaignPromotion.operation';
import type {
  AvailabilityStatus,
  BlackTieConfiguratorConfiguratorStepsItem,
  ProductStepConfigurator,
  TuxedoProductOption,
  TuxedoStyleOption,
} from '@headless-commerce/gql/generated/graphql';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import { batch } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';
import { useCallback } from 'react';

import ClientCampaignInfo from './ClientCampaignInfo/ClientCampaignInfo';
import styles from './ClientConfigurator.module.scss';
import ClientNavigation from './ClientNavigation/ClientNavigation';
import ClientPreview from './ClientPreview/ClientPreview';
import ClientStepOptions from './ClientStepOptions/ClientStepOptions';

export type ImageType = 'layered-image' | 'static-image';

export type ConfiguratorPreload = {
  step?: string;
  campaignId?: string;
  productIds: string[];
  color: string;
};

export type ClientConfiguratorProps = {
  campaignIds: Array<string>;
  campaignPrices: Array<{
    id: string;
    discounted: number;
    original: number;
  }>;
  campaignPromotions: Array<CommerceCampaignPromotionQuery>;
  configuratorSteps: BlackTieConfiguratorConfiguratorStepsItem[];
  country: CountryConfiguration;
  imageURL: string | undefined;
  modelId: string;
  params: {
    locale: Locale;
    landingSlug: string;
    toolSlug: string;
  };
  preload?: ConfiguratorPreload;
  productAvailability: Array<{ id: string; availabilityStatus: AvailabilityStatus }>;
  productIds: Array<string>;
};

export type TuxedoStyleStepOption = {
  __typename: 'TuxedoStyle';
  style: TuxedoStyleOption;
  product: TuxedoProductOption;
};

export default function ClientConfigurator(props: Readonly<ClientConfiguratorProps>) {
  useSignals();
  const locale = useLocale();
  const country = useCountry();
  const {
    campaignIds,
    currentStepData,
    initializeSignals,
    productIds,
    selectedCampaign,
    selection,
    setSelection,
    setStepOutOfStock,
    setTuxedoStyle,
  } = useConfigurator();
  const {
    params: { landingSlug, toolSlug },
    campaignPromotions,
    campaignPrices,
  } = props;

  if (!productIds.value.length) {
    initializeSignals({
      ...props,
      country,
      params: {
        ...props.params,
        locale,
      },
    });
  }
  const summaryURL = `/${locale}/men/${landingSlug}/${toolSlug}/summary`;

  const stepOutOfSTock = useCallback(
    (outOfStock: boolean) => setStepOutOfStock(String(currentStepData.value?.categoryStep), outOfStock),
    [currentStepData, setStepOutOfStock],
  );

  const selectStepValue = useCallback(
    (value: string) => {
      batch(() => {
        const categoryStep = currentStepData.value?.categoryStep;
        if (!categoryStep) {
          return;
        }

        if (categoryStep === 'style') {
          setTuxedoStyle(value as 'two-piece' | 'three-piece');
        }

        setSelection({
          ...selection.value,
          [categoryStep]: value,
        });
      });
    },
    [currentStepData, selection, setSelection, setTuxedoStyle],
  );

  const promotion = campaignPromotions[campaignIds.value.indexOf(selectedCampaign.value)];

  return (
    <div data-testid="client-configurator" className={styles.configurator}>
      <div data-testid="configurator-preview" className={styles.configurator__preview}>
        <ClientCampaignInfo promotion={promotion} />
        <ClientPreview />
      </div>
      <div data-testid="configurator-controls" className={styles.configurator__controls}>
        <ClientNavigation
          title={String((currentStepData.value as ProductStepConfigurator)?.title)}
          summaryURL={summaryURL}
        >
          {currentStepData.value && (
            <ClientStepOptions
              campaignPrices={campaignPrices}
              setSelectionValue={selectStepValue}
              setStepOutOfStock={stepOutOfSTock}
            />
          )}
        </ClientNavigation>
      </div>
    </div>
  );
}
