import type { SiteId } from '@susu/headless-commerce/gql/generated/graphql';
import type { LiteralUnion } from 'type-fest';

import type { CountryConfiguration } from './CountryConfiguration';
import type { CurrencyConfiguration } from './CurrencyConfiguration';
import type { WarehouseConfiguration } from './WarehouseConfiguration';

export type SiteIdKey = LiteralUnion<SiteId, string>;

export type Countries = Record<string, CountryConfiguration>;

export type Warehouses = {
  [id in SiteIdKey]: {
    [warehouse: string]: WarehouseConfiguration;
  };
};

export type CountriesOrder = Array<string>;

export type EdgeConfiguration = {
  items: {
    countries: Countries;
    currencies: CurrencyConfiguration;
    warehouses: Warehouses;
    countriesOrder: CountriesOrder;
  };
};
