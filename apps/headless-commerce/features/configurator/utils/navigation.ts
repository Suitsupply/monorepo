import type {
  BlackTieConfiguratorConfiguratorStepsItem,
  ProductOptionConfigurator,
  ProductStepConfigurator,
} from '@susu/headless-commerce/gql/generated/graphql';

import type { StepOption } from '../components/ClientStepOptions/ClientStepOptions';
import { getStepOptions } from './options';

export type Direction = '-' | '+';

export type SubStepTrigger = 'hasSubStep' | 'isSubStep';
type GetFollowingIndexProps = { currentIndex: number; size: number; direction: Direction };

export type HandleNavigationProps = {
  current: {
    mainIndex: number;
    subStep: string | null;
    step: BlackTieConfiguratorConfiguratorStepsItem;
    selectedOption?: StepOption;
  };
  direction: Direction;
  mainSteps: BlackTieConfiguratorConfiguratorStepsItem[];
  previousStep?: string;
  selection: Record<string, string>;
  subSteps: BlackTieConfiguratorConfiguratorStepsItem[];
};

export const getFollowingIndex = ({ currentIndex, size, direction }: GetFollowingIndexProps): number | 'done' => {
  if (currentIndex > size || currentIndex < 0) {
    throw new Error('Index out of bounds');
  }

  if (direction === '-') {
    if (currentIndex === 0) {
      throw new Error("Can't go below 0!");
    }

    return currentIndex - 1;
  }

  if (direction === '+') {
    if (currentIndex === size - 1) {
      return 'done';
    }

    return currentIndex + 1;
  }

  throw new Error('Invalid direction');
};

const hasToHandleSubStep = (step: BlackTieConfiguratorConfiguratorStepsItem): SubStepTrigger | false => {
  const stepSubStep = String((step as ProductStepConfigurator).subStep) as SubStepTrigger;

  return ['hasSubStep', 'isSubStep'].includes(stepSubStep) ? stepSubStep : false;
};

export const subStepNext = (
  trigger: SubStepTrigger,
  selectedOption?: StepOption,
): { subStep: string | null; continueMain: boolean } => {
  let subStep: string | null = null;
  let continueMain = true;

  if (trigger === 'hasSubStep' && (selectedOption as ProductOptionConfigurator)?.subStep) {
    subStep = ((selectedOption as ProductOptionConfigurator).subStep as string) ?? null;
    continueMain = false;
  }

  return {
    subStep,
    continueMain,
  };
};

export const subStepPrevious = ({
  trigger,
  current,
  mainSteps,
  selection,
}: {
  trigger: SubStepTrigger;
  current: HandleNavigationProps['current'];
  mainSteps: HandleNavigationProps['mainSteps'];
  selection: HandleNavigationProps['selection'];
}): { subStep: string | null; continueMain: boolean } => {
  const { mainIndex, step } = current;
  let subStep: string | null = null;
  let continueMain = true;

  if (trigger === 'isSubStep') {
    return {
      subStep,
      continueMain: false,
    };
  }

  if (mainSteps[mainIndex].categoryStep === step.categoryStep) {
    const previousMain = mainSteps[mainIndex - 1];
    const previousMainOption = getStepOptions(previousMain, 'black').find((option: StepOption) =>
      Object.values(option).some(value => value === selection[String(previousMain.categoryStep)]),
    );

    if ((previousMainOption as ProductOptionConfigurator)?.subStep) {
      subStep = String((previousMainOption as ProductOptionConfigurator).subStep);
    }
  }

  return {
    subStep,
    continueMain,
  };
};

export const handleNavigation = ({
  current,
  direction,
  mainSteps,
  previousStep,
  selection,
}: HandleNavigationProps): {
  subStep: string | null;
  mainStepIndex: number | 'done';
} => {
  const { mainIndex } = current;
  const withSubStep = hasToHandleSubStep(current.step);
  const followingMainIndex = getFollowingIndex({
    currentIndex: current.mainIndex,
    size: mainSteps.length,
    direction,
  });
  let subStep = current.subStep;
  let mainStepIndex: number | 'done' = current.mainIndex;

  if (direction === '+' && withSubStep) {
    const { subStep: nextSubstep, continueMain } = subStepNext(withSubStep, current.selectedOption);

    if (continueMain) {
      mainStepIndex = followingMainIndex;
    }

    return {
      subStep: nextSubstep,
      mainStepIndex,
    };
  }

  if (direction === '-' && mainIndex > 0) {
    const previousMainStep = mainSteps[mainIndex - 1];
    const stepPre =
      withSubStep === 'isSubStep' && previousStep !== previousMainStep.categoryStep
        ? mainSteps[mainIndex]
        : previousMainStep;
    const preWithSubStep = hasToHandleSubStep(stepPre);

    if (withSubStep === 'isSubStep') {
      return {
        subStep: null,
        mainStepIndex,
      };
    } else if (preWithSubStep === 'hasSubStep') {
      const { subStep: prevSubstep, continueMain } = subStepPrevious({
        trigger: preWithSubStep,
        current,
        mainSteps,
        selection,
      });

      subStep = prevSubstep;

      if (continueMain) {
        mainStepIndex = followingMainIndex;
      }

      return {
        subStep,
        mainStepIndex,
      };
    }
  }

  return {
    subStep: subStep,
    mainStepIndex: followingMainIndex,
  };
};
