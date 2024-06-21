import type {
  BlackTieConfiguratorConfiguratorStepsItem,
  ProductOptionConfigurator,
  ProductOptionStaticImageConfigurator,
} from '@headless-commerce/gql/generated/graphql';
import { memoize } from '@headless-commerce/utils/memoize';

import type { TuxedoStyleStepOption } from '../components/ClientConfigurator';
import type { StepOption } from '../components/ClientStepOptions/ClientStepOptions';
import { getStepOptions } from './options';

export const getProductIds = memoize((options: StepOption[]): string[] => {
  let ids: string[] = [];

  options.forEach(option => {
    if (option.__typename === 'TuxedoStyle') {
      const { waistcoatProductId } = option.product;
      const withValue: string[] = [waistcoatProductId].filter(Boolean).map(String);

      ids = [...ids, ...withValue];
    }

    if (
      option.__typename === 'ProductOptionConfigurator' ||
      option.__typename === 'ProductOptionStaticImageConfigurator'
    ) {
      ids = [...ids, String(option.productId)];
    }
  });

  return ids;
});

export const getStyleProductIds = memoize((option: TuxedoStyleStepOption): Record<string, string> => {
  const { tuxedoStyle, waistcoatProductId } = option.product;

  return {
    style: String(tuxedoStyle),
    waistcoatProductId: String(waistcoatProductId),
  };
});

export const getAllIds = memoize(
  (configuratorSteps: BlackTieConfiguratorConfiguratorStepsItem[], color: string): string[] => {
    let allIds: string[] = [];

    for (const step of configuratorSteps) {
      const stepOptions = getStepOptions(step, color);

      if (step.__typename === 'TuxedoStyleStep') {
        for (const option of stepOptions) {
          const { jacketProductId, trouserProductId, waistcoatProductId } = getStyleProductIds(
            option as TuxedoStyleStepOption,
          );
          const withId = [jacketProductId, trouserProductId, waistcoatProductId]
            .filter(v => v && v !== 'null')
            .map(String);

          allIds.push(...withId);
        }
      }

      if (step.__typename === 'ProductStepConfigurator') {
        for (const option of stepOptions) {
          const optionProdId = String(
            (option as ProductOptionConfigurator | ProductOptionStaticImageConfigurator).productId,
          );

          allIds.push(optionProdId);
        }
      }
    }

    return allIds;
  },
);

export const getDefaultProductIds = memoize((configuratorSteps: Array<BlackTieConfiguratorConfiguratorStepsItem>) => {
  let productIds: Array<string> = [];

  // Take the first product from the second step and its recommendations,
  // otherwise take all product ids from the configurator steps.
  // TODO: This is tightly coupled
  if (configuratorSteps[1].__typename === 'ProductStepConfigurator') {
    const productId = configuratorSteps[1].productOptionsCollection?.items[0]?.productId;
    if (productId) {
      productIds.push(productId);

      if (configuratorSteps[1].productOptionsCollection?.items[0]?.__typename === 'ProductOptionConfigurator') {
        const recommendations =
          configuratorSteps[1].productOptionsCollection?.items[0]?.recommendations?.split(', ') ?? [];
        productIds = productIds.concat(recommendations);
      }
    }
  }

  if (productIds.length <= 1) {
    productIds = configuratorSteps
      .map(x => (x.__typename === 'ProductStepConfigurator' ? x.productOptionsCollection?.items[0]?.productId : null))
      .filter(Boolean) as string[];
  }

  return productIds;
});

export const getStepNameByProductId = memoize(
  (productId: string, steps: Array<BlackTieConfiguratorConfiguratorStepsItem>, color: string) => {
    let name: string | undefined;

    if (productId.toLowerCase().startsWith('w')) {
      return 'waistcoatProductId';
    }

    steps.forEach(step => {
      const stepIds = getAllIds([step], color);
      if (stepIds.includes(productId)) {
        name = String(step.categoryStep);
      }
    });
    return name;
  },
);
