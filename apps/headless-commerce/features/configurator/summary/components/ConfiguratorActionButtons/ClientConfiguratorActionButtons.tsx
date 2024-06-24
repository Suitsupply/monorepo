import ClientSideSlider from '@susu/headless-commerce/components/SideSlider/ClientSideSlider';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';

import ConfiguratorSizeChart from '../ConfiguratorSizeChart/ClientConfiguratorSizeChart';
import styles from './ConfiguratorActionButtons.module.scss';

export type ConfiguratorActionButtonsProps = {
  productId: string;
  language: string;
  countryCode: string;
  isConfirmButtonEnabled: boolean;
  handleConfirmButtonClick: () => void;
};

export default function ConfiguratorActionButtons({
  productId,
  language,
  countryCode,
  isConfirmButtonEnabled,
  handleConfirmButtonClick,
}: ConfiguratorActionButtonsProps) {
  const t = useTranslations('sizeSelector');
  const [isSizeChartOpen, setIsSizeChartOpen] = useState<boolean>(false);

  const handleSizeChartClick = useCallback(() => {
    setIsSizeChartOpen(true);
  }, []);

  const handleSizeChartBackButtonClick = useCallback(() => {
    setIsSizeChartOpen(false);
  }, []);

  const sizeSelectorMessagesClasses = classNames(styles['size-selector__messages'], 'caption-light');
  const sizeChartButtonClasses = classNames(styles['size-selector__sizechart-button'], 'body-small-light');
  const confirmButtonClasses = classNames(styles['size-selector__confirm-button'], {
    [styles['size-selector__confirm-button--disabled']]: !isConfirmButtonEnabled,
  });

  return (
    <>
      <div className={styles['size-selector__actions']}>
        <div className={sizeSelectorMessagesClasses}>
          <span className={styles['size-selector__messages-text']}>{t('free_delivery')}</span>
          <span className={styles['size-selector__messages-text']}>{t('free_returns')}</span>
        </div>
        <div className={styles['size-selector__buttons-wrapper']}>
          <button className={sizeChartButtonClasses} onClick={handleSizeChartClick}>
            {t('size_guide')}
          </button>
          <button onClick={handleConfirmButtonClick} className={confirmButtonClasses}>
            {t('confirm')}
          </button>
        </div>
      </div>

      <ClientSideSlider isOpen={isSizeChartOpen} slideInFrom="right" fullScreen="mobile" hasCloseButton={false}>
        <ConfiguratorSizeChart
          handleSizeChartBackButtonClick={handleSizeChartBackButtonClick}
          productId={productId}
          language={language}
          countryCode={countryCode}
        />
      </ClientSideSlider>
    </>
  );
}
