/* eslint-disable sonarjs/no-duplicate-string */
'use client';

import Icon from '@headless-commerce/components/Icon/Icon';
import { ProgressBar } from '@headless-commerce/components/ProgressBar/ProgressBar';
import { cart, cartSegmentProducts } from '@headless-commerce/contexts/cart';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { customer } from '@headless-commerce/contexts/customer';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import { ClientFinishButton } from '@headless-commerce/features/configurator/components/ClientNavigation/ClientFinishButton';
import styles from '@headless-commerce/features/configurator/components/ClientNavigation/ClientNavigation.module.scss';
import { useConfigurator } from '@headless-commerce/features/configurator/signals';
import { navigate } from '@headless-commerce/features/configurator/utils/navigate';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import log from '@headless-commerce/utils/log';
import { isNull } from '@headless-commerce/utils/null';
import { isUndefined } from '@headless-commerce/utils/undefined';
import { useComputed, useSignal, useSignals } from '@preact/signals-react/runtime';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';
import { useCallback } from 'react';

import { trackNextStepEvent } from '../../utils/trackNextStepEvent';
import { trackPreviousStepEvent } from '../../utils/trackPreviousStepEvent';

export type ClientNavigationProps = {
  children: ReactNode;
  summaryURL: string;
  title: string;
};

export default function ClientNavigation({ children, title, summaryURL }: Readonly<ClientNavigationProps>) {
  useSignals();

  const configurator = useConfigurator();
  const country = useSignal(useCountry());
  const locale = useSignal(useLocale());
  const pageType = useSignal(usePageType());
  const { currentStep, currentStepData, isFinished, mainSteps, outOfStock, steps, tuxedoStyle } = configurator;
  const stepList = useComputed<Array<string>>(() => mainSteps.value.map(step => String(step?.categoryStep)));
  const disableNext = useComputed(() => {
    return outOfStock.value[String(currentStepData.value?.categoryStep)] === true || isFinished.value;
  });
  const t = useTranslations('configurator');

  const nextStep = useCallback(() => {
    if (isUndefined(cart.value) || isUndefined(currentStepData.value)) {
      return;
    }

    const categoryStep = currentStepData.value.categoryStep;
    if (isUndefined(categoryStep) || isNull(categoryStep) || isUndefined(cartSegmentProducts.value)) {
      return;
    }

    trackNextStepEvent({
      categoryStep,
      segmentProducts: cartSegmentProducts.value,
      country: country.value,
      locale: locale.value,
      pageType: pageType.value,
      style: tuxedoStyle.value,
    });

    navigate(configurator)('+');
  }, [configurator, country.value, currentStepData.value, locale.value, pageType.value, tuxedoStyle.value]);

  const previousStep = useCallback(() => {
    if (isUndefined(cart.value) || isUndefined(currentStepData.value)) {
      return;
    }

    const categoryStep = currentStepData.value.categoryStep;
    if (isUndefined(categoryStep) || isNull(categoryStep) || isUndefined(cartSegmentProducts.value)) {
      return;
    }

    trackPreviousStepEvent({
      categoryStep,
      segmentProducts: cartSegmentProducts.value,
      country: country.value,
      locale: locale.value,
      pageType: pageType.value,
      style: tuxedoStyle.value,
    });

    navigate(configurator)('-');
  }, [configurator, country.value, currentStepData.value, locale.value, pageType.value, tuxedoStyle.value]);

  const isLastStep = currentStep.value === stepList.value.length - 1;

  const navigationControlClasses = classNames(styles['navigation__control'], styles['navigation__control-previous'], {
    [styles['navigation__control--is-disabled']]: currentStep.value === 0,
  });
  const navigationControlTextClasses = classNames('body-small-light', styles['navigation__control__text']);
  const navigationTitleClasses = classNames(styles['navigation__title'], 'body-small-medium-sm title-03-medium-lg');
  const navigationControlNextClasses = classNames(styles['navigation__control'], styles['navigation__control-next'], {
    [styles['navigation__control__last']]: isLastStep,
  });

  log.trace({
    method: 'ClientNavigation:effect',
    country,
    currentStep,
    currentStepData,
    customer,
    locale,
    pageType,
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
      {/* <div className={isBowTieStep ? styles['navigation__custom-navigation'] : ''}></div> */}
    </div>
  );
}
