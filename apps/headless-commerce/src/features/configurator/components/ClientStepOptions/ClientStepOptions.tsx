import { cartSegmentProducts } from '@headless-commerce/contexts/cart';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { customer, customerPromise } from '@headless-commerce/contexts/customer';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import { useConfigurator } from '@headless-commerce/features/configurator/signals';
import type {
  MediaWrapperV2,
  ProductOptionStaticImageConfigurator,
  ProductStepConfiguratorProductOptionsItem,
  TuxedoColorOption,
} from '@headless-commerce/gql/generated/graphql';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import log from '@headless-commerce/utils/log';
import { isUndefined } from '@headless-commerce/utils/undefined';
import { useComputed, useSignal, useSignals } from '@preact/signals-react/runtime';
import classNames from 'classnames';
import type { CSSProperties } from 'react';
import { useCallback, useEffect, useMemo } from 'react';

import { trackOptionSelect } from '../../utils/trackOptionSelect';
import type { TuxedoStyleStepOption } from '../ClientConfigurator';
import ClientStepOption from '../ClientStepOption/ClientStepOption';
import styles from './ClientStepOptions.module.scss';

export type StepOption = ProductStepConfiguratorProductOptionsItem | TuxedoColorOption | TuxedoStyleStepOption;

export type ClientStepOptionsProps = {
  campaignPrices: Array<{
    id: string;
    discounted: number;
    original: number;
  }>;
  setSelectionValue: (value: string) => void;
  setStepOutOfStock: (value: boolean) => void;
};

const byStaticImageOption = (option: StepOption) => option.__typename === 'ProductOptionStaticImageConfigurator';

const byProductOption = (option: StepOption) =>
  option.__typename === 'ProductOptionConfigurator' || option.__typename === 'ProductOptionStaticImageConfigurator';

const byBaseColor = (baseColor: string) => (option: ProductOptionStaticImageConfigurator) =>
  option.baseColor === baseColor;

const byRecommendedOption =
  (recommendations: Record<string, string>) => (option: ProductStepConfiguratorProductOptionsItem) =>
    Object.values(recommendations).includes(String(option.productId));

export default function ClientStepOptions({
  campaignPrices,
  setSelectionValue,
  setStepOutOfStock,
}: Readonly<ClientStepOptionsProps>) {
  useSignals();
  const { availability, baseColor, currentStepOptions, recommendations, selectedOption, currentStepData, tuxedoStyle } =
    useConfigurator();
  const country = useSignal(useCountry());
  const locale = useSignal(useLocale());
  const pageType = useSignal(usePageType());

  const selectOption = useCallback(
    (optionId: string) => {
      setSelectionValue(optionId);

      (async () => {
        if (
          isUndefined(selectedOption.value) ||
          isUndefined(currentStepData.value) ||
          isUndefined(cartSegmentProducts.value)
        ) {
          return;
        }

        await customerPromise;

        trackOptionSelect({
          country: country.value,
          currentStepData: currentStepData.value,
          locale: locale.value,
          pageType: pageType.value,
          segmentProducts: cartSegmentProducts.value,
          selectedOption: selectedOption.value,
          style: tuxedoStyle.value,
        });
      })();
    },
    [
      cartSegmentProducts.value,
      country.value,
      currentStepData.value,
      locale.value,
      pageType.value,
      selectedOption.value,
      setSelectionValue,
      tuxedoStyle.value,
    ],
  );

  const orderedOptions = useComputed(() => {
    let staticImageOptions: Array<ProductOptionStaticImageConfigurator> = currentStepOptions.value.filter(
      byStaticImageOption,
    ) as Array<ProductOptionStaticImageConfigurator>;
    if (baseColor.value) {
      staticImageOptions = staticImageOptions.filter(byBaseColor(baseColor.value));
    }
    const otherOptions = currentStepOptions.value.filter(option => !byStaticImageOption(option));

    const allOptions = [...staticImageOptions, ...otherOptions];

    const productOptions = allOptions.filter(byProductOption) as Array<ProductStepConfiguratorProductOptionsItem>;
    const nonProductOptions = allOptions.filter(option => !byProductOption(option));

    return [
      ...productOptions.filter(byRecommendedOption(recommendations.value)),
      ...productOptions.filter(option => !byRecommendedOption(recommendations.value)(option)),
      ...nonProductOptions,
    ];
  });

  const idKeys = useMemo(
    () => ({
      TuxedoStyle: 'style',
      TuxedoColorOption: 'tuxedoColor',
      ProductOptionConfigurator: 'productId',
      ProductOptionStaticImageConfigurator: 'productId',
    }),
    [],
  );

  useEffect(() => {
    if (
      !orderedOptions.value.some(option => {
        const idKey = idKeys[option.__typename as keyof typeof idKeys];

        return availability.value[String((option as Record<string, unknown>)[idKey])] === true;
      })
    ) {
      setStepOutOfStock(true);
    }
  }, [idKeys, orderedOptions, setStepOutOfStock, availability]);

  log.trace({
    method: 'ClientStepOptions:effect',
    country,
    currentStepOptions,
    customer,
    selectedOption,
    currentStepData,
  });

  return (
    <div className={styles.options} style={{ '--options-count': `${orderedOptions.value.length}` } as CSSProperties}>
      <div
        className={classNames(styles['options-list'], {
          [styles['options-list__half']]: orderedOptions.value.length === 2,
        })}
      >
        {orderedOptions.value.map(option => {
          if (option.__typename === 'TuxedoStyle') {
            const style = String(option.style.tuxedoStyle);
            const name = String(option.style.optionName);
            const campaignId = String(option.product.campaign);
            const thumbnailImage = option.style.thumbnailImage ?? null;

            const smallestPrice = Math.min(...campaignPrices.map(({ discounted }) => discounted));

            const campaign = campaignPrices.find(({ id }) => id === campaignId);
            if (!campaign) {
              return null;
            }

            return (
              <ClientStepOption
                campaignId={campaignId}
                count={orderedOptions.value.length}
                id={style}
                key={style ?? name}
                name={name}
                price={campaign.discounted - smallestPrice}
                selectOption={selectOption}
                thumbnailImage={(thumbnailImage as MediaWrapperV2) ?? null}
              />
            );
          }

          if (option.__typename === 'TuxedoColorOption') {
            return (
              <ClientStepOption
                count={orderedOptions.value.length}
                id={String(option.tuxedoColor)}
                key={String(option.tuxedoColor ?? option.optionName)}
                name={String(option.optionName)}
                selectOption={selectOption}
                thumbnailImage={option.thumbnailImage}
              />
            );
          }

          if (
            option.__typename === 'ProductOptionConfigurator' ||
            option.__typename === 'ProductOptionStaticImageConfigurator'
          ) {
            return (
              <ClientStepOption
                count={orderedOptions.value.length}
                id={String(option.productId)}
                key={`${String(option.productId ?? option.productName)}-${option.baseColor}`}
                name={String(option.productName)}
                outOfStock={!availability.value[String(option.productId)]}
                recommendedIndication={Object.values(recommendations.value).includes(String(option.productId))}
                selectOption={selectOption}
                thumbnailImage={option.thumbnailImage ?? null}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
