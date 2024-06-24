import type { CountryConfiguration } from '@susu/headless-commerce/types/CountryConfiguration';
import type { CurrencyConfiguration } from '@susu/headless-commerce/types/CurrencyConfiguration';

import styles from './PriceInfo.module.scss';

export type PriceInfoProps = {
  country: CountryConfiguration;
  currencies: CurrencyConfiguration;
  price: number;
};

export default function PriceInfo({ country, currencies, price }: PriceInfoProps) {
  const currencyCode = country?.ecommerce?.currencyCode;

  if (!currencyCode?.length) {
    return <></>;
  }

  const { format, symbol } = currencies[currencyCode];

  const space = format?.displayCode ? ' ' : '';

  const formattedPrice = `${format?.displaySymbol ? symbol : ''}${price}${space}`;

  return (
    <>
      {formattedPrice}
      {format?.displayCode ? <sub className={styles['price-info__currency-code']}>{currencyCode}</sub> : null}
    </>
  );
}
