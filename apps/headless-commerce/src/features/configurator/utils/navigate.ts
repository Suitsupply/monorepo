import { uniqueElements } from '@headless-commerce/utils/array';
import { batch } from '@preact/signals-react';

import type { ConfiguratorContextType } from '../signals';
import type { Direction, HandleNavigationProps } from './navigation';
import { handleNavigation } from './navigation';

const selectionOrder = [
  'jacket',
  'waistcoatProductId',
  'lapel',
  'trouser',
  'shirt',
  'shoes',
  'bow-tie',
  'cufflinks',
  'suspenders',
];

export const getSummaryURL = (configurator: ConfiguratorContextType, summaryURL: string) => {
  const url = new URL(window.location.href);

  const selectedIds = uniqueElements(
    selectionOrder
      .map(selectionKey => configurator.selection.value[selectionKey])
      .filter(Boolean)
      .filter(a => a !== 'null') as string[],
  );

  url.searchParams.set('ids', selectedIds.join(','));
  url.searchParams.set('campaign', String(configurator.selectedCampaign.value));
  url.searchParams.set('color', String(configurator.baseColor.value));
  url.pathname = summaryURL;

  return url;
};

export const handleConfiguratorFinish = (configurator: ConfiguratorContextType, summaryURL: string) => {
  const url = getSummaryURL(configurator, summaryURL);

  configurator.isFinished.value = true;

  window.location.href = url.toString();
};

export const navigate = (configurator: ConfiguratorContextType) => (direction: Direction) => {
  const {
    currentStep,
    currentStepData,
    subStep,
    selectedOption,
    mainSteps,
    previousStep,
    selection,
    subSteps,
    setSubStep,
    setCurrentStep,
    setPreviousStep,
  } = configurator;

  if (!currentStepData.value) {
    return;
  }

  const navigationProps: HandleNavigationProps = {
    current: {
      mainIndex: currentStep.value,
      subStep: subStep.value,
      step: currentStepData.value,
      selectedOption: selectedOption.value,
    },
    direction,
    mainSteps: mainSteps.value,
    previousStep: previousStep.value,
    selection: selection.value,
    subSteps: subSteps.value,
  };

  const { subStep: navSubStep, mainStepIndex } = handleNavigation(navigationProps);

  if (mainStepIndex === 'done') {
    return;
  }

  batch(() => {
    setSubStep(navSubStep);
    setCurrentStep(mainStepIndex);
    setPreviousStep(String(currentStepData.value?.categoryStep));
  });
};
