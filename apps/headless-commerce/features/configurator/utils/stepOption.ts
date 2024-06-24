import type { StepOption } from '@susu/headless-commerce/features/configurator/components/ClientStepOptions/ClientStepOptions';

export const findOptionBySelection = (value: string) => (options: Array<StepOption>) =>
  options.find(
    option =>
      (option.__typename === 'TuxedoStyle' && option.style.tuxedoStyle === value) ||
      (option.__typename === 'TuxedoColorOption' && option.tuxedoColor === value) ||
      ((option.__typename === 'ProductOptionConfigurator' ||
        option.__typename === 'ProductOptionStaticImageConfigurator') &&
        option.productId === value),
  );
