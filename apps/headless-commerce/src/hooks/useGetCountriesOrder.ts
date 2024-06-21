import { capitalizeHeaders } from '@headless-commerce/utils/fetch';

import { createUseFetch } from './useFetch';

const useFetch = createUseFetch(global.fetch, capitalizeHeaders);

export const useGetCountriesOrder = () => {
  return useFetch<Array<string>>('/api/configuration/countriesOrder');
};
