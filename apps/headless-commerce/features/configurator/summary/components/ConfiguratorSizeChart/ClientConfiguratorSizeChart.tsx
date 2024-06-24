'use client';

import Icon from '@susu/headless-commerce/components/Icon/Icon';
import log from '@susu/headless-commerce/utils/log';
import { memo, useEffect } from 'react';

import styles from './ConfiguratorSizeChart.module.scss';

export type ConfiguratorSizeChartProps = {
  handleSizeChartBackButtonClick: () => void;
  productId: string;
  countryCode: string;
  language: string;
};

const ClientConfiguratorSizeChart = memo(function ClientConfiguratorSizeChart({
  handleSizeChartBackButtonClick,
  productId,
  countryCode,
  language,
}: ConfiguratorSizeChartProps) {
  useEffect(() => {
    // @ts-ignore
    import('@suits/meas-size-chart/dist/esm/loader')
      .then(({ defineCustomElements }) => defineCustomElements())
      .catch(log.error);
  });

  return (
    <div className={styles['sizechart-wrapper']}>
      <button onClick={handleSizeChartBackButtonClick} className={styles['sizechart-wrapper__back-button']}>
        <Icon icon="arrow_left" />
      </button>

      {/* @ts-ignore */}
      <size-chart
        product-id={productId}
        country-region={countryCode}
        language={language}
        parent-scroll-selector="size-chart"
        env={process.env.NEXT_PUBLIC_ENVIRONMENT_TYPE?.toLowerCase()} //@ts-ignore
      ></size-chart>
    </div>
  );
});

export default ClientConfiguratorSizeChart;
