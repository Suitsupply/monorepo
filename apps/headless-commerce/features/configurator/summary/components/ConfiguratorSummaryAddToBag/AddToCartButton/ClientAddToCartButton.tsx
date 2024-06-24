'use client';

import Loader from '@susu/headless-commerce/components/Loader/Loader';
import { baseURL } from '@susu/headless-commerce/config/config';
import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import { useConfiguratorSummary } from '@susu/headless-commerce/features/configurator/summary/contexts/ConfiguratorSummaryContext';
import { useAddProductsToCartMutation } from '@susu/headless-commerce/gql/generated/addProductsToCart.urql';
import { convertLocaleToCommerceGraphQLFormat } from '@susu/headless-commerce/utils/localeUtils';
import log from '@susu/headless-commerce/utils/log';
import { useTranslations } from 'next-intl';
import { memo, useCallback, useState } from 'react';

import styles from '../ConfiguratorSummaryAddToBag.module.scss';

export type ClientAddToCartButtonProps = {
  disabled: boolean;
  className?: string;
};

export default memo(function ClientAddToCartButton({ disabled, className }: ClientAddToCartButtonProps) {
  const country = useCountry();
  const locale = useLocale();
  const t = useTranslations('configurator');
  const customer = useCustomer();
  const { productIds } = useConfiguratorSummary();
  const [{ error }, executeCommerceAddProductsToCartMutation] = useAddProductsToCartMutation();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleButtonClicked = useCallback(async () => {
    if (!customer?.customerId) {
      return;
    }

    setIsLoading(true);

    await executeCommerceAddProductsToCartMutation(
      {
        addProductsInput: {
          customerId: customer?.customerId,
          pids: productIds,
          siteInfo: {
            currency: country.ecommerce.currencyCode,
            siteId: country.siteID,
            locale: convertLocaleToCommerceGraphQLFormat(locale),
          },
        },
      },
      {
        clientName: 'commerce',
      },
    );

    window.location.href = `${baseURL()}/${locale}/cart`;
  }, [executeCommerceAddProductsToCartMutation, country, locale, customer, productIds]);

  if (error) {
    log.error(error);
  }

  return (
    <>
      <button className={className} onClick={handleButtonClicked} disabled={disabled || isLoading}>
        {isLoading ? <Loader className={styles['configurator-summary__button--loading']} shade="dark" /> : null}
        {t('add_to_bag')}
      </button>
    </>
  );
});
