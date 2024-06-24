import { useSignal } from '@preact/signals-react';
import styles from '@susu/headless-commerce/features/configurator/components/ClientNavigation/ClientNavigation.module.scss';
import { useConfigurator } from '@susu/headless-commerce/features/configurator/signals';
import { handleConfiguratorFinish } from '@susu/headless-commerce/features/configurator/utils/navigate';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { useCallback } from 'react';

import { SkeletonLoader } from './SkeletonLoader/SkeletonLoader';

export type ClientFinishButtonProps = {
  disabled: boolean;
  summaryURL: string;
};

export const ClientFinishButton = ({ disabled, summaryURL }: ClientFinishButtonProps) => {
  const configurator = useConfigurator();
  const t = useTranslations('configurator');
  const isDisabled = useSignal<boolean>(disabled);

  const handleClick = useCallback(() => {
    isDisabled.value = true;
    handleConfiguratorFinish(configurator, summaryURL);
  }, [isDisabled, configurator, summaryURL]);

  const navigationControlLastButtonClasses = classNames(styles['navigation-control--last-button'], {});

  const navigationControlLastButtonTextClasses = classNames(styles['navigation-control__text'], 'body-small-light');

  return (
    <>
      <div className={styles['navigation-control__wrapper']}>
        <button className={navigationControlLastButtonClasses} onClick={handleClick} disabled={isDisabled.value}>
          <span className={styles['navigation-control__icon']}></span>
          <span className={navigationControlLastButtonTextClasses}>{t('finish_look')}</span>
        </button>
      </div>
      {isDisabled.value && <SkeletonLoader />}
    </>
  );
};
