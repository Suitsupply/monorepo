import type {
  BlackTieConfiguratorConfiguratorStepsItem,
  ProductStepConfiguratorProductOptionsItem,
  TuxedoColorOption,
  TuxedoProductOption,
  TuxedoStyleOption,
} from '@headless-commerce/gql/generated/graphql';
import { memoize } from '@headless-commerce/utils/memoize';

import type { TuxedoStyleStepOption } from '../components/ClientConfigurator';
import type { StepOption } from '../components/ClientStepOptions/ClientStepOptions';
import { getStyleProductIds } from './productIds';

export const getStepOptions = memoize(
  (step: BlackTieConfiguratorConfiguratorStepsItem, color: string): StepOption[] => {
    let options: Array<StepOption> = [];

    if (step.__typename === 'ProductStepConfigurator') {
      return (step.productOptionsCollection?.items ?? []) as ProductStepConfiguratorProductOptionsItem[];
    }

    if (step.__typename === 'TuxedoColorStep') {
      options = (step.tuxedoColorOptionsCollection?.items ?? []) as TuxedoColorOption[];
    }

    if (step.__typename === 'TuxedoStyleStep') {
      const styleOptions: Array<TuxedoStyleOption> = (step.tuxedoStyleOptionsCollection?.items ??
        []) as Array<TuxedoStyleOption>;
      const productOptions: Array<TuxedoProductOption> = (step.tuxedoProductOptionsCollection?.items ??
        []) as Array<TuxedoProductOption>;

      options = styleOptions
        .map(style => {
          return (
            productOptions
              // Filter by color
              .filter(prd => prd.color === color)

              // Filter by tuxedo style
              .filter(prd => prd.tuxedoStyle === style.tuxedoStyle)

              // Create StepOption
              .map(product => {
                const result: StepOption = {
                  __typename: 'TuxedoStyle',
                  style,
                  product: product as TuxedoProductOption,
                };
                return result;
              })
          );
        })
        .flat();
    }

    return options;
  },
);

export const isValidStyleOption = memoize((option: TuxedoStyleStepOption, availability: Record<string, boolean>) => {
  const { jacketProductId, trouserProductId, waistcoatProductId } = getStyleProductIds(option);
  const ids = [jacketProductId, trouserProductId, waistcoatProductId].filter(id => id && id !== 'null');

  return !ids.some(id => !availability?.[id]);
});

const getFirstValidStyleOption = memoize(
  (step: BlackTieConfiguratorConfiguratorStepsItem, availability: Record<string, boolean>, color: string) => {
    // TODO: This type assertion is not ideal
    const option = (getStepOptions(step, color) as Array<TuxedoStyleStepOption>).find(option =>
      isValidStyleOption(option, availability),
    );
    if (!option) {
      throw new Error('No valid style option found');
    }
    return option;
  },
);

const getFirstValidProductOption = memoize(
  (step: BlackTieConfiguratorConfiguratorStepsItem, availability: Record<string, boolean>, color: string) => {
    let valid: StepOption | undefined;

    for (const option of getStepOptions(step, color) as ProductStepConfiguratorProductOptionsItem[]) {
      if (availability?.[String(option.productId)]) {
        valid = option;
        break;
      }
    }

    if (!valid) {
      throw new Error('No valid option found');
    }

    return valid;
  },
);

export const getFirstValidOption = memoize(
  (
    step: BlackTieConfiguratorConfiguratorStepsItem,
    availability: Record<string, boolean>,
    color: string,
  ): StepOption => {
    let valid: StepOption | undefined;

    if (step?.__typename === 'TuxedoStyleStep') {
      valid = getFirstValidStyleOption(step, availability, color);
    }

    if (step?.__typename === 'ProductStepConfigurator') {
      valid = getFirstValidProductOption(step, availability, color);
    }

    if (!valid) {
      throw new Error('No valid option found');
    }

    return valid;
  },
);
