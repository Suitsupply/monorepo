import classNames from 'classnames';
import { useTranslations } from 'next-intl';

import styles from './SkeletonLoader.module.scss';

export const SkeletonLoader = () => {
  const t = useTranslations('configurator');

  const skeletonLoaderClasses = classNames(styles['skeleton-loader']);
  const skeletonLoaderTitleClasses = classNames(styles['skeleton-loader__title'], 'title-02-medium');
  const skeletonLoaderWrapperClasses = classNames(styles['skeleton-loader__wrapper']);
  const skeletonLoaderProductTilesClassess = classNames(styles['skeleton-loader__product-tiles']);
  const skeletonLoaderProductTileClasses = classNames(styles['skeleton-loader__product-tile']);
  const productTileImageWrapperClasses = classNames(styles['product-tile__image-wrapper']);
  const productTileImageInnerClasses = classNames(styles['product-tile__image-inner']);
  const productTileBodyContentClasses = classNames(styles['product-tile__body-content']);
  const productTileInnerClasses = classNames(styles['product-tile__body-inner']);
  const productTileTitleClasses = classNames(styles['product-tile__title']);
  const productTileDescriptionClasses = classNames(styles['product-tile__description']);
  const productTilePriceClasses = classNames(styles['product-tile__price']);
  const productTileFooterClasses = classNames(styles['product-tile__footer']);
  const productTileSelectSizeClasses = classNames(styles['product-tile__select-size']);
  const productTileEditLinkClasses = classNames(styles['product-tile__edit-link']);

  return (
    <div className={skeletonLoaderWrapperClasses}>
      <div className={skeletonLoaderClasses}>
        <span className={skeletonLoaderTitleClasses}>{t('select_your_sizes')}</span>
        <div className={skeletonLoaderProductTilesClassess}>
          {Array.from({ length: 7 }).map((_, index) => {
            return (
              <div className={skeletonLoaderProductTileClasses} key={index}>
                <div className={productTileImageWrapperClasses}>
                  <div className={productTileImageInnerClasses}></div>
                </div>
                <div className={productTileBodyContentClasses}>
                  <div className={productTileInnerClasses}>
                    <span className={productTileTitleClasses}></span>
                    <span className={productTileDescriptionClasses}></span>
                    <span className={productTilePriceClasses}></span>
                    <div className={productTileFooterClasses}>
                      <span className={productTileSelectSizeClasses}></span>
                      <span className={productTileEditLinkClasses}></span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
