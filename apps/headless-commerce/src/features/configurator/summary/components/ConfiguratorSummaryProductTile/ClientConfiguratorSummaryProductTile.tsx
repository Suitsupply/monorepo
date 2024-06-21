'use client';

import PriceInfo from '@headless-commerce/components/PriceInfo/PriceInfo';
import { ResponsiveImage } from '@headless-commerce/components/ResponsiveImage/ResponsiveImage';
import type { CommerceImage } from '@headless-commerce/components/ResponsiveImage/ResponsiveImage.types';
import ClientSideSlider from '@headless-commerce/components/SideSlider/ClientSideSlider';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { useCurrencies } from '@headless-commerce/contexts/currencies/client';
import { customer } from '@headless-commerce/contexts/customer';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import ClientConfiguratorSizeSelector from '@headless-commerce/features/configurator/summary/components/ConfiguratorSizeSelector/ClientConfiguratorSizeSelector';
import type { ConfiguratorProduct } from '@headless-commerce/features/configurator/summary/components/types';
import { useConfiguratorSummary } from '@headless-commerce/features/configurator/summary/contexts/ConfiguratorSummaryContext';
import { adjustPriceFormat } from '@headless-commerce/features/configurator/utils/priceUtils';
import type { Size } from '@headless-commerce/gql/generated/graphql';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import type { Customer } from '@headless-commerce/types/Customer';
import { isMobileScreen } from '@headless-commerce/utils/responsiveUtils';
import { replaceSubstring } from '@headless-commerce/utils/string';
import { URLData } from '@headless-commerce/utils/tracking/segment';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { memo, useCallback, useEffect, useState } from 'react';

import styles from './ConfiguratorSummaryProductTile.module.scss';
import { trackEditLinkClick } from './trackEditLinkClick';
import { trackProductClick } from './trackProductClick';

const imageStyle = {
  height: 'auto',
  width: '100%',
  verticalAlign: 'middle',
};

export type ConfiguratorSummaryProductTileProps = {
  countryCode: string;
  editLinkURL: string;
  index: number;
  language: string;
  price: string;
  product: ConfiguratorProduct;
};

export default memo(function ClientConfiguratorSummaryProductTile({
  countryCode,
  editLinkURL,
  index,
  language,
  price,
  product,
}: ConfiguratorSummaryProductTileProps) {
  const pageType = usePageType();
  const country = useCountry();
  const locale = useLocale();
  const currencies = useCurrencies();
  const t = useTranslations('configurator');
  const { selectProduct, deselectProduct } = useConfiguratorSummary();
  const [isOneSizeProduct, setIsOneSizeProduct] = useState<boolean>(false);
  const [isSizeSelectorOpen, setIsSizeSelectorOpen] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isConfirmButtonEnabled, setIsConfirmButtonEnabled] = useState<boolean>(false);
  const { mobileImage, desktopImage, url, name, materialValue, availabilityStatus, categoryStep } = product;
  const [mobileImg, setMobileImg] = useState<CommerceImage>(mobileImage as CommerceImage);
  const [desktopImg, setDesktopImg] = useState<CommerceImage>(desktopImage as CommerceImage);
  const { locationId } = URLData();
  const currentUrl = URLData().url;

  const productTileTitleClasses = classNames(styles['product-tile__title'], 'body-medium-lg body-small-medium-sm');
  const productTileDescriptionClasses = classNames(
    styles['product-tile__description'],
    'body-small-light-lg caption-light-sm',
  );
  const productTileButtonClasses = classNames(styles['product-tile__button'], 'body-small-regular', {
    [styles['product-tile__button--selected']]: Boolean(selectedSize),
  });
  const productTileEditLinkClasses = classNames(styles['product-tile__edit-link'], 'body-small-light');

  const handleSizeSelectorOpen = useCallback(() => {
    setIsSizeSelectorOpen(true);
  }, []);
  const handleSizeSelectorClose = useCallback(() => {
    setIsSizeSelectorOpen(false);
  }, []);

  const handleSizeClick = useCallback(
    (sizeObject: Size) => {
      const isDeselecting = sizeObject?.displayValue === selectedSize;

      if (isDeselecting) {
        deselectProduct(index, sizeObject.variantID);
        setSelectedSize('');
        setIsConfirmButtonEnabled(false);
      } else {
        selectProduct(index, sizeObject.variantID);
        setSelectedSize(sizeObject.displayValue);
        setIsConfirmButtonEnabled(true);
      }
    },
    [deselectProduct, index, selectProduct, selectedSize],
  );

  const handleConfirmButtonClick = useCallback(() => {
    handleSizeSelectorClose();
  }, [handleSizeSelectorClose]);

  const adjustImageObject = useCallback((imageObject: CommerceImage) => {
    const { srcset, url } = imageObject;

    const replaceDimensions = (input: string, dimensions: string) => {
      return replaceSubstring({
        inputString: input,
        startMarker: 'dpr_1',
        endMarker: ',f_auto',
        replacement: dimensions,
      });
    };

    const dimensionsMobile = 'dpr_1,w_280,h_336';
    const dimensionsDesktop = 'dpr_1,w_540,h_648';

    const adjustedSrc = isMobileScreen
      ? replaceDimensions(url, dimensionsMobile)
      : replaceDimensions(url, dimensionsDesktop);

    const adjustedSrcset = isMobileScreen
      ? replaceDimensions(srcset, dimensionsMobile)
      : replaceDimensions(srcset, dimensionsDesktop);

    return { breakpoint: '(min-width: 768px)', srcset: adjustedSrcset, url: adjustedSrc };
  }, []);

  const adjustPrice = useCallback((price: string) => {
    return adjustPriceFormat(price);
  }, []);

  const handleProductClick = useCallback(() => {
    trackProductClick({
      country,
      currentUrl,
      customer: customer.value as Customer,
      index,
      locale,
      locationId,
      pageType,
      product,
    });
  }, [locale, country, currentUrl, locationId, pageType, product, index]);

  const handleEditLinkClick = useCallback(() => {
    trackEditLinkClick({
      country,
      locale,
      categoryStep,
      pageType,
      locationId,
      url: editLinkURL,
    });
  }, [country, locale, categoryStep, pageType, editLinkURL, locationId]);

  useEffect(() => {
    setIsOneSizeProduct(product.type !== 'master');
  }, [product.type]);

  useEffect(() => {
    if (isMobileScreen) {
      setMobileImg(adjustImageObject(mobileImage as CommerceImage));
    }
    if (!isMobileScreen) {
      setDesktopImg(adjustImageObject(desktopImage as CommerceImage));
    }
  }, [adjustImageObject, desktopImage, mobileImage]);

  return (
    <div className={styles['product-tile']}>
      <div className={styles['product-tile__image-wrapper']}>
        <div
          className={classNames(styles['product-tile__image-container'], {
            [styles['product-tile__image-container__oos']]: !availabilityStatus.isAvailable,
          })}
        >
          <a href={url} onClick={handleProductClick}>
            <ResponsiveImage
              source="commerce"
              mobileImage={mobileImg}
              desktopImage={desktopImg}
              name={name}
              style={imageStyle}
              mobileSizes="35vw"
              desktopSizes="15vw"
              lazyloading={false}
            />
          </a>
        </div>
      </div>
      <div className={styles['product-tile__body']}>
        <div className={styles['product-tile__body-content']}>
          {!availabilityStatus.isAvailable && (
            <div className={styles['product-tile__body__oos-badge']}>{t('out_of_stock')}</div>
          )}
          <a href={url} className={productTileTitleClasses} onClick={handleProductClick}>
            {name}
          </a>
          <span className={productTileDescriptionClasses}>{materialValue}</span>
          {availabilityStatus.isAvailable && (
            <span className={styles['product-tile__price']}>
              <PriceInfo price={adjustPrice(price)} country={country} currencies={currencies} />
            </span>
          )}
          <div className={styles['product-tile__footer']}>
            {isOneSizeProduct ? (
              <span className={styles['product-tile__badge']}>{t('one_size')}</span>
            ) : (
              <button
                className={productTileButtonClasses}
                onClick={handleSizeSelectorOpen}
                disabled={!availabilityStatus.isAvailable}
              >
                {selectedSize?.length ? `${t('size')} ${selectedSize}` : t('select_size')}
              </button>
            )}
            <a className={productTileEditLinkClasses} href={editLinkURL} onClick={handleEditLinkClick}>
              {t('edit')}
            </a>
          </div>
        </div>
      </div>

      {availabilityStatus.isAvailable && (
        <ClientSideSlider
          isOpen={isSizeSelectorOpen}
          onClose={handleSizeSelectorClose}
          slideInFrom="right"
          fullScreen="mobile"
          hasCloseButton={true}
        >
          {isSizeSelectorOpen ? (
            <ClientConfiguratorSizeSelector
              productId={product.id}
              language={language}
              countryCode={countryCode}
              selectedSize={selectedSize}
              isConfirmButtonEnabled={isConfirmButtonEnabled}
              handleSizeClick={handleSizeClick}
              handleConfirmButtonClick={handleConfirmButtonClick}
            />
          ) : null}
        </ClientSideSlider>
      )}
    </div>
  );
});
