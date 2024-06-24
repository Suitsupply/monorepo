import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import { useCommerceGetProductSizeDataQuery } from '@susu/headless-commerce/gql/generated/commerceGetProductSizeData.urql';
import type { Size } from '@susu/headless-commerce/gql/generated/graphql';
import { generateIdentifier } from '@susu/headless-commerce/utils/identifier';
import { convertLocaleToCommerceGraphQLFormat } from '@susu/headless-commerce/utils/localeUtils';
import log from '@susu/headless-commerce/utils/log';
import { capitalize } from '@susu/headless-commerce/utils/string';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { memo, useMemo } from 'react';

import ConfiguratorActionButtons from '../ConfiguratorActionButtons/ClientConfiguratorActionButtons';
import ClientConfiguratorSizeButton from './ConfiguratorSizeButton/ClientConfiguratorSizeButton';
import styles from './ConfiguratorSizeSelector.module.scss';

const ALLOWED_COLUMNS = ['regular', 'short', 'long'];
const ALLOWED_COLUMNS_SINGLE_SIZE = ['size'];

export type ConfiguratorSizeSelectorProps = {
  productId: string;
  language: string;
  countryCode: string;
  selectedSize: string;
  isConfirmButtonEnabled: boolean;
  handleSizeClick: (sizeObject: Size) => void;
  handleConfirmButtonClick: () => void;
};

const ClientConfiguratorSizeSelector = memo(function ClientConfiguratorSizeSelector({
  productId,
  language,
  countryCode,
  selectedSize,
  isConfirmButtonEnabled,
  handleSizeClick,
  handleConfirmButtonClick,
}: ConfiguratorSizeSelectorProps) {
  const locale = useLocale();
  const country = useCountry();
  const t = useTranslations('sizeSelector');

  const [sizeDataQuery] = useCommerceGetProductSizeDataQuery({
    variables: useMemo(
      () => ({
        pid: productId,
        siteInfo: {
          currency: country.ecommerce.currencyCode,
          siteId: country.siteID,
          locale: convertLocaleToCommerceGraphQLFormat(locale),
        },
      }),
      [productId, country, locale],
    ),
    context: useMemo(
      () => ({
        clientName: 'commerce',
      }),
      [],
    ),
  });

  if (sizeDataQuery.error) {
    log.error(sizeDataQuery.error);
  }

  if (!sizeDataQuery.data?.getProductSizeData?.rows.length) {
    log.error(new Error('No size data'));
  }

  const sizeSelectorTitleClasses = classNames(styles['size-selector__title']);
  const sizeSelectorRowTitleTextClasses = classNames(styles['size-selector__items-text'], 'caption-light');
  const sizeSelectorGridTitleClasses = classNames(styles['size-selector__grid-title'], {
    [styles['size-selector__grid-title--two-rows']]: sizeDataQuery.data?.getProductSizeData?.rows?.length === 2,
    [styles['size-selector__grid-title--three-rows']]: sizeDataQuery.data?.getProductSizeData?.rows?.length === 3,
  });

  // Helper function for getting column offset
  const getColumnOffset = (columnArray: any) => {
    for (let i = 0; i < columnArray.length; i++) {
      if (columnArray[i + 1]?.id?.length > 0) {
        return i - 1;
      }
    }
  };

  return (
    <div className={styles['size-selector']}>
      <div className={styles['size-selector__sizes']}>
        <span className={sizeSelectorTitleClasses}>{t('select_your_size')}</span>

        {/* Guide column */}
        <div className={styles['size-selector__guide']}>
          {sizeDataQuery?.data?.getProductSizeData?.sortedSizeColumn?.map(sizeGuideItem => {
            return (
              <span className={styles['size-selector__guide-item']} key={generateIdentifier()}>
                {sizeGuideItem?.value}
              </span>
            );
          })}
        </div>

        {/* Column title */}
        <div className={sizeSelectorGridTitleClasses}>
          {sizeDataQuery.data?.getProductSizeData?.rows &&
            Object.entries(sizeDataQuery.data?.getProductSizeData?.rows).map(([, value]) => {
              return !ALLOWED_COLUMNS_SINGLE_SIZE.includes(value?.name as string) ? (
                <div className={styles['size-selector__items-title']} key={generateIdentifier()}>
                  <span className={sizeSelectorRowTitleTextClasses}>{capitalize(value?.name as string)}</span>
                  <span className={styles['size-selector__items-description']}>{value?.description}</span>
                </div>
              ) : null;
            })}
        </div>

        <div className={styles['size-selector__items']}>
          {/* Render sizes with multiple columns and column guides */}
          {sizeDataQuery.data?.getProductSizeData?.rowsData &&
            Object.entries(sizeDataQuery.data?.getProductSizeData?.rowsData).map(([key, value]) => {
              if (value?.length && ALLOWED_COLUMNS.includes(key)) {
                return (
                  <div className={styles['size-selector__column']} key={generateIdentifier()}>
                    <div className={styles['size-selector__column-title']}>{}</div>
                    {value &&
                      Object.entries(value).map((sizeItemObject, index) => {
                        // @ts-ignore
                        if (sizeItemObject[1]?.id?.length || index <= getColumnOffset(value)) {
                          return (
                            <ClientConfiguratorSizeButton
                              key={generateIdentifier()}
                              sizeItemObject={sizeItemObject}
                              handleSizeClick={handleSizeClick}
                              selectedSize={selectedSize}
                              isSingleSize={false}
                            />
                          );
                        }
                      })}
                  </div>
                );
              }
            })}

          {/* Render single column sizes without guides */}
          {sizeDataQuery.data?.getProductSizeData?.rowsData &&
            Object.entries(sizeDataQuery.data?.getProductSizeData?.rowsData).map(([key, value]) => {
              if (value?.length && ALLOWED_COLUMNS_SINGLE_SIZE.includes(key)) {
                return (
                  <div className={styles['size-selector__single-sizes']} key={generateIdentifier()}>
                    {Object.entries(value).map((sizeItemObject, index) => {
                      return (
                        <ClientConfiguratorSizeButton
                          key={index}
                          index={index}
                          sizeItemObject={sizeItemObject}
                          handleSizeClick={handleSizeClick}
                          selectedSize={selectedSize}
                          isSingleSize={true}
                        />
                      );
                    })}
                  </div>
                );
              }
            })}
        </div>
      </div>

      <ConfiguratorActionButtons
        productId={productId}
        language={language}
        countryCode={countryCode}
        isConfirmButtonEnabled={isConfirmButtonEnabled}
        handleConfirmButtonClick={handleConfirmButtonClick}
      />
    </div>
  );
});

export default ClientConfiguratorSizeSelector;
