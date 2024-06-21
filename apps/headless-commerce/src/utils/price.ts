import type { Currency } from '@headless-commerce/types/CurrencyConfiguration';

export const formatPrice = (price: number, currency: Currency) => {
  const { format, symbol } = currency;
  const space = format?.displayCode ? ' ' : '';
  return `${format?.displaySymbol ? symbol : ''}${price}${space}`;
};
