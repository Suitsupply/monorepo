import type { CountryConfiguration } from '@susu/headless-commerce/types/CountryConfiguration';

export const searchFilter = (data: CountryConfiguration[], criteria: string, order: string[]) => {
  return data
    .filter(el => el.name.toLowerCase().includes(criteria.toLocaleLowerCase()))
    .sort((a, b) => order.indexOf(a.countryCode) - order.indexOf(b.countryCode));
};
