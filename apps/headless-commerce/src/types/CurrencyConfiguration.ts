export type CurrencyConfiguration = {
  [currencyCode: string]: Currency;
};

export type Currency = {
  symbol: string;
  format: Format;
};

export type Format = {
  displaySymbol: boolean;
  displayCode: boolean;
};

export type ContentfulCurrency = {
  currencyCode: string;
  priceValue: number;
  __typename: string;
};
