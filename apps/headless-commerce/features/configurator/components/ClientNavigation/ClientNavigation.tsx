'use client';

import { useComputed, useSignals } from '@preact/signals-react/runtime';
import Icon from '@susu/headless-commerce/components/Icon/Icon';
import { ProgressBar } from '@susu/headless-commerce/components/ProgressBar/ProgressBar';
import { ClientFinishButton } from '@susu/headless-commerce/features/configurator/components/ClientNavigation/ClientFinishButton';
import styles from '@susu/headless-commerce/features/configurator/components/ClientNavigation/ClientNavigation.module.scss';
import { useConfigurator } from '@susu/headless-commerce/features/configurator/signals';
import { navigate } from '@susu/headless-commerce/features/configurator/utils/navigate';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';
import { useCallback } from 'react';

export type ClientNavigationProps = {
  children: ReactNode;
  summaryURL: string;
  title: string;
};

export default function ClientNavigation({ children, title, summaryURL }: Readonly<ClientNavigationProps>) {
  useSignals();
  const configurator = useConfigurator();
  const { currentStep, currentStepData, isFinished, mainSteps, outOfStock, steps } = configurator;
  const stepList = useComputed<Array<string>>(() => mainSteps.value.map(step => String(step?.categoryStep)));
  const disableNext = useComputed(() => {
    return outOfStock.value[String(currentStepData.value?.categoryStep)] === true || isFinished.value;
  });
  const t = useTranslations('configurator');

  const nextStep = useCallback(() => {
    navigate(configurator)('+');
  }, [configurator]);

  const previousStep = useCallback(() => {
    navigate(configurator)('-');
  }, [configurator]);

  const isLastStep = currentStep.value === stepList.value.length - 1;
  const isBowTieStep = currentStepData.value?.categoryStep === 'bow-tie';

  const navigationControlClasses = classNames(styles['navigation__control'], styles['navigation__control-previous'], {
    [styles['navigation__control--is-disabled']]: currentStep.value === 0,
  });
  const navigationControlTextClasses = classNames('body-small-light', styles['navigation__control__text']);
  const navigationTitleClasses = classNames(styles['navigation__title'], 'body-small-medium-sm title-03-medium-lg');
  const navigationControlNextClasses = classNames(styles['navigation__control'], styles['navigation__control-next'], {
    [styles['navigation__control__last']]: isLastStep,
  });

  return (
    <div className={styles['navigation']} data-testid="configurator-navigation">
      <div className={styles['navigation__progress']}>
        <ProgressBar step={currentStep.value + 1} steps={steps.value.length} />
      </div>

      <div className={navigationControlClasses}>
        <button
          className={styles['navigation__control__content']}
          onClick={previousStep}
          disabled={currentStep.value === 0}
          data-testid="navigation-previous"
        >
          <span className={styles['navigation__control__icon']}>
            <Icon icon="arrow_left" />
          </span>
          <span className={navigationControlTextClasses}>{t('back')}</span>
        </button>
      </div>
      <div className={navigationTitleClasses}>{title}</div>

      {isLastStep ? (
        <ClientFinishButton disabled={disableNext.value} summaryURL={summaryURL} />
      ) : (
        <div className={navigationControlNextClasses}>
          <button
            className={styles['navigation__control__content']}
            onClick={nextStep}
            disabled={disableNext.value}
            data-testid="navigation-next"
          >
            <span className={styles['navigation__control__icon']}>
              <Icon icon={'arrow_right'} />
            </span>
            <span className={navigationControlTextClasses}>{t('next')}</span>
          </button>
        </div>
      )}
      <div className={styles['navigation__options-list']}>{children}</div>
      <div className={isBowTieStep ? styles['navigation__custom-navigation'] : ''}></div>
    </div>
  );
}
