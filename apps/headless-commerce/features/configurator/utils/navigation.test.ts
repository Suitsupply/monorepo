import type { StepOption } from '@susu/headless-commerce/features/configurator/components/ClientStepOptions/ClientStepOptions';
import productStep from '@susu/headless-commerce/features/configurator/test-mocks/configuratorProductStep.json';
import { describe, expect, it } from 'vitest';

import type { HandleNavigationProps, SubStepTrigger } from './navigation';
import { getFollowingIndex, handleNavigation, subStepNext, subStepPrevious } from './navigation';

const { productOptionsCollection } = productStep;
const subStepItem = { ...productOptionsCollection.items[0], subStep: 'testSubStep' };
const withSubStep = {
  ...productStep,
  categoryStep: 'with-substep',
  productOptionsCollection: {
    ...productOptionsCollection,
    items: [subStepItem],
  },
  subStep: 'hasSubStep',
};

describe('getFollowingIndex', () => {
  it('should return the previous index when direction is "-"', () => {
    const currentIndex = 2;
    const size = 5;
    const direction = '-';
    const expectedIndex = 1;

    const result = getFollowingIndex({ currentIndex, size, direction });

    expect(result).toBe(expectedIndex);
  });

  it('should return "done" when direction is "+" and currentIndex is the last index', () => {
    const currentIndex = 4;
    const size = 5;
    const direction = '+';

    const result = getFollowingIndex({ currentIndex, size, direction });

    expect(result).toBe('done');
  });

  it('should throw an error when currentIndex is out of bounds', () => {
    const currentIndex = 6;
    const size = 5;
    const direction = '-';

    expect(() => {
      getFollowingIndex({ currentIndex, size, direction });
    }).toThrow('Index out of bounds');
  });

  it('should throw an error when direction is invalid', () => {
    const currentIndex = 2;
    const size = 5;
    const direction = '*';

    expect(() => {
      // @ts-ignore
      getFollowingIndex({ currentIndex, size, direction });
    }).toThrow('Invalid direction');
  });
});

describe('subStepNext', () => {
  it('should return null subStep and continueMain as true when trigger is not "hasSubStep"', () => {
    const trigger = 'isSubStep';
    const selectedOption = { subStep: 'testSubStep' };

    const result = subStepNext(trigger, selectedOption as unknown as StepOption);

    expect(result).toEqual({ subStep: null, continueMain: true });
  });

  it('should return subStep and continueMain as false when trigger is "hasSubStep" and selectedOption has subStep', () => {
    const trigger = 'hasSubStep';
    const selectedOption = { subStep: 'testSubStep' };

    const result = subStepNext(trigger, selectedOption as unknown as StepOption);

    expect(result).toEqual({ subStep: 'testSubStep', continueMain: false });
  });

  it('should return null subStep and continueMain as true when trigger is "hasSubStep" but selectedOption has no subStep', () => {
    const trigger = 'hasSubStep';
    const selectedOption = {};

    const result = subStepNext(trigger, selectedOption as unknown as StepOption);

    expect(result).toEqual({ subStep: null, continueMain: true });
  });
});

describe('subStepPrevious', () => {
  it('should return null subStep and continueMain as false when trigger is "isSubStep"', () => {
    const trigger = 'isSubStep';
    const current = { mainIndex: 0, step: { categoryStep: 'testCategoryStep' } };
    const mainSteps = [{ categoryStep: 'testCategoryStep' }];
    const selection = { testCategoryStep: 'testSelection' };

    const result = subStepPrevious({
      trigger,
      current: current as unknown as HandleNavigationProps['current'],
      mainSteps: mainSteps as unknown as HandleNavigationProps['mainSteps'],
      selection,
    });

    expect(result).toEqual({ subStep: null, continueMain: false });
  });

  it('should return null subStep and continueMain as true when previous main step does not have a subStep', () => {
    const trigger = 'testTrigger' as unknown as SubStepTrigger;
    const current = { mainIndex: 1, step: { categoryStep: 'testCategoryStep' } };
    const mainSteps = [
      { categoryStep: 'previousStep', subStep: 'previousSubStep' },
      { categoryStep: 'testCategoryStep' },
    ];
    const selection = { testCategoryStep: 'testSelection' };

    const result = subStepPrevious({
      trigger,
      current: current as unknown as HandleNavigationProps['current'],
      mainSteps: mainSteps as unknown as HandleNavigationProps['mainSteps'],
      selection,
    });

    expect(result).toEqual({ subStep: null, continueMain: true });
  });

  it('should return the previous subStep and continueMain as true when previous main step has a subStep', () => {
    const trigger = 'testTrigger' as unknown as SubStepTrigger;
    const current = { mainIndex: 1, step: { categoryStep: productStep.categoryStep } };
    const mainSteps = [withSubStep, productStep];
    const selection = { [withSubStep.categoryStep]: subStepItem.productId };

    const result = subStepPrevious({
      trigger,
      current: current as unknown as HandleNavigationProps['current'],
      mainSteps: mainSteps as unknown as HandleNavigationProps['mainSteps'],
      selection,
    });

    expect(result).toEqual({ subStep: subStepItem.subStep, continueMain: true });
  });
});

describe('handleNavigation', () => {
  describe('when current step is not a substep', () => {
    describe('when direction is "+"', () => {
      it("should return subStep and don't change main index if selected option has subStep", () => {
        const current = { mainIndex: 0, step: withSubStep, subStep: null, selectedOption: subStepItem };
        const direction = '+';
        const mainSteps = [productStep, withSubStep, productStep];
        const previousStep = undefined;
        const selection = { [withSubStep.categoryStep]: subStepItem.productId };

        const result = handleNavigation({
          current: current as unknown as HandleNavigationProps['current'],
          direction,
          mainSteps: mainSteps as unknown as HandleNavigationProps['mainSteps'],
          previousStep,
          selection,
          subSteps: [],
        });

        expect(result).toEqual({ subStep: subStepItem.subStep, mainStepIndex: 0 });
      });

      it('should return subStep null and change main index if selected option has no subStep', () => {
        const current = {
          mainIndex: 0,
          step: productStep,
          subStep: null,
          selectedOption: productOptionsCollection.items[0],
        };
        const direction = '+';
        const mainSteps = [productStep, withSubStep, productStep];
        const previousStep = undefined;
        const selection = { [withSubStep.categoryStep]: productOptionsCollection.items[0].productId };

        const result = handleNavigation({
          current: current as unknown as HandleNavigationProps['current'],
          direction,
          mainSteps: mainSteps as unknown as HandleNavigationProps['mainSteps'],
          previousStep,
          selection,
          subSteps: [],
        });

        expect(result).toEqual({ subStep: null, mainStepIndex: 1 });
      });
    });

    describe('when direction is "-"', () => {
      describe('when current step is not a substep', () => {
        it('should return subStep and change main index when previous step option has subStep', () => {
          const current = { mainIndex: 2, step: productStep, subStep: null };
          const direction = '-';
          const mainSteps = [productStep, withSubStep, productStep];
          const previousStep = withSubStep.categoryStep;
          const selection = { [withSubStep.categoryStep]: subStepItem.productId };

          const result = handleNavigation({
            current: current as unknown as HandleNavigationProps['current'],
            direction,
            mainSteps: mainSteps as unknown as HandleNavigationProps['mainSteps'],
            previousStep,
            selection,
            subSteps: [],
          });

          expect(result).toEqual({ subStep: subStepItem.subStep, mainStepIndex: 1 });
        });

        it('should return subStep null and change main index when previous step option has no subStep', () => {
          const current = { mainIndex: 2, step: productStep, subStep: null };
          const direction = '-';
          const mainSteps = [productStep, withSubStep, productStep];
          const previousStep = productStep.categoryStep;
          const selection = { [productStep.categoryStep]: productOptionsCollection.items[0].productId };

          const result = handleNavigation({
            current: current as unknown as HandleNavigationProps['current'],
            direction,
            mainSteps: mainSteps as unknown as HandleNavigationProps['mainSteps'],
            previousStep,
            selection,
            subSteps: [],
          });

          expect(result).toEqual({ subStep: null, mainStepIndex: 1 });
        });
      });

      describe('when current step is a substep', () => {
        it('should return subStep null and change main index', () => {
          const current = { mainIndex: 2, step: productStep, subStep: 'testSubStep' };
          const direction = '-';
          const mainSteps = [productStep, withSubStep, productStep];
          const previousStep = productStep.categoryStep;
          const selection = { [productStep.categoryStep]: productOptionsCollection.items[0].productId };

          const result = handleNavigation({
            current: current as unknown as HandleNavigationProps['current'],
            direction,
            mainSteps: mainSteps as unknown as HandleNavigationProps['mainSteps'],
            previousStep,
            selection,
            subSteps: [],
          });

          expect(result).toEqual({ subStep: null, mainStepIndex: 1 });
        });
      });
    });
  });
});
