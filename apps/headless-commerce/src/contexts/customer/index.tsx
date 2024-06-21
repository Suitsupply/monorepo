'use client';

import { baseURL } from '@headless-commerce/config/config';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import type { Customer } from '@headless-commerce/types/Customer';
import log from '@headless-commerce/utils/log';
import { createPromiseFromSignal } from '@headless-commerce/utils/signal';
import { signal } from '@preact/signals-react';

export const customer = signal<Customer | undefined>(undefined);

export const customerPromise = createPromiseFromSignal(customer);

export const setCustomer = async (country: CountryConfiguration) => {
  const url = `${baseURL()}/api/customer/sfccCustomer`;

  log.trace({
    method: 'setCustomer',
    url,
    country,
  });

  const request = await fetch(url, {
    headers: {
      'x-site-id': country.siteID,
      'X-Headless': 'true',
      'X-Url': window.document.location.toString(),
    },
  });

  customer.value = (await request.json()) as Customer;
};
