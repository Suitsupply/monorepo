'use client';

import { baseURL } from '@headless-commerce/config/config';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { useCurrencies } from '@headless-commerce/contexts/currencies/client';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import type { ConfiguratorProduct } from '@headless-commerce/features/configurator/summary/components/types';
import { createQueryStringProductIds } from '@headless-commerce/features/configurator/utils/createQueryStringProductIds';
import { getLanguageFromLocale } from '@headless-commerce/utils/localeUtils';
import { formatPrice } from '@headless-commerce/utils/price';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { memo } from 'react';

import Loader from '../../../../components/Loader/Loader';
import { ResponsiveImage } from '../../../../components/ResponsiveImage/ResponsiveImage';
import { useConfiguratorSummary } from '../contexts/ConfiguratorSummaryContext';
import styles from './ConfiguratorSummary.module.scss';
import ClientConfiguratorSummaryAddToBag from './ConfiguratorSummaryAddToBag/ClientConfiguratorSummaryAddToBag';
import ClientConfiguratorSummaryProductTile from './ConfiguratorSummaryProductTile/ClientConfiguratorSummaryProductTile';

const sizes = {
  xs: `96vw`,
  lg: `48vw`,
};

export type ConfiguratorSummaryProps = {
  campaignId: string;
  discountPrice: number;
  landingSlug: string;
  price: number;
  imageSrc: string | undefined;
  products: Array<ConfiguratorProduct>;
  toolSlug: string;
};

export default memo(function ClientConfiguratorSummary({
  campaignId,
  discountPrice,
  imageSrc,
  landingSlug,
  price,
  toolSlug,
}: ConfiguratorSummaryProps) {
  const country = useCountry();
  const locale = useLocale();
  const currencies = useCurrencies();
  const currency = currencies[country.ecommerce.currencyCode];
  const t = useTranslations('configurator');
  const { products, color } = useConfiguratorSummary();

  const { countryCode } = country;
  const language = getLanguageFromLocale(locale);
  const configuratorSummaryTitleClasses = classNames(styles['configurator-summary__title'], 'title-02-medium');

  return (
    <div className={styles['configurator-summary']}>
      <div className={styles['configurator-summary__image-wrapper']}>
        {imageSrc?.length ? (
          <ResponsiveImage
            source="url"
            src={imageSrc}
            sizes={sizes}
            alt="Summary page hero image"
            lazyloading={false}
          />
        ) : (
          <Loader />
        )}
      </div>

      <div className={styles['configurator-summary__product-tiles']}>
        <h1 className={configuratorSummaryTitleClasses}>{t('select_your_sizes')}</h1>
        <div className={styles['configurator-summary__products-wrapper']}>
          {products.map((product, index) => {
            const productIds = createQueryStringProductIds(products.map(product => product.id));
            const editLinkURL = `${baseURL()}/${locale}/men/${landingSlug}/${toolSlug}?ids=${productIds}&step=${
              product.categoryStep
            }&campaign=${campaignId}&color=${color}&app=headless`;

            return (
              <ClientConfiguratorSummaryProductTile
                countryCode={countryCode}
                editLinkURL={editLinkURL}
                index={index}
                key={product.id}
                language={language}
                price={formatPrice(product.price, currency)}
                product={product}
              />
            );
          })}
        </div>

        <ClientConfiguratorSummaryAddToBag
          originalPrice={formatPrice(price, currency)}
          discountPrice={formatPrice(price - discountPrice, currency)}
          packagePrice={formatPrice(discountPrice, currency)}
        />
      </div>
    </div>
  );
});
