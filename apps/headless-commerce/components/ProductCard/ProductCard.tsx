import PriceInfo from '@susu/headless-commerce/components/PriceInfo/PriceInfo';
import { ResponsiveImage } from '@susu/headless-commerce/components/ResponsiveImage/ResponsiveImage';
import type { Locale } from '@susu/headless-commerce/config/locale';
import type { Product } from '@susu/headless-commerce/gql/generated/graphql';
import { countries } from '@susu/headless-commerce/utils/configuration/country';
import { currencies } from '@susu/headless-commerce/utils/configuration/currency';
import { getCountryCode } from '@susu/headless-commerce/utils/localeUtils';

import type { CommerceImage } from '../ResponsiveImage/ResponsiveImage.types';
import ClientProductCard from './ClientProductCard';
import ClientProductCardImageLink from './ClientProductCardImageLink';
import ClientProductCardWrapper from './ClientProductCardWrapper';
import styles from './ProductCard.module.scss';

export type ProductCardProps = {
  locale: Locale;
  product: Product;
  tracking?: {
    list: string;
    listId: string;
    position: number;
  };
  automationPageId: string;
};

export default function ProductCard({ locale, automationPageId, product, tracking }: ProductCardProps) {
  const countryCode = getCountryCode(locale);
  const country = countries[countryCode];
  const { name, url, desktopImage, mobileImage, price, materialValue } = product;

  return (
    <ClientProductCardWrapper
      product={product}
      tracking={tracking}
      url={url}
      data-testid={`${automationPageId}_product-card`}
    >
      <ClientProductCardImageLink product={product} tracking={tracking} url={url}>
        <ResponsiveImage
          source="commerce"
          desktopImage={desktopImage as CommerceImage}
          mobileImage={mobileImage as CommerceImage}
          name={name}
          mobileSizes="100vw"
          desktopSizes="47.7vw"
          lazyloading={false}
        />
      </ClientProductCardImageLink>
      <div className={`body-small-medium ${styles['product-card__body']}`}>
        <a href={url} className={styles['product-card__name']}>
          {name}
        </a>
        {materialValue && <div className={`caption-light ${styles['product-card__material']}`}>{materialValue}</div>}
        <div className={`body-small-light ${styles['product-card__price']}`}>
          <PriceInfo price={price} country={country} currencies={currencies} />
        </div>
      </div>
      <ClientProductCard product={product} tracking={tracking} />
    </ClientProductCardWrapper>
  );
}
