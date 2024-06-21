'use client';

import PriceInfo from '@headless-commerce/components/PriceInfo/PriceInfo';
import { useCurrencies } from '@headless-commerce/contexts/currencies/client';
import { useConfigurator } from '@headless-commerce/features/configurator/signals';
import type { CommerceCampaignPromotionQuery } from '@headless-commerce/gql/generated/commerceCampaignPromotion.operation';
import { useSignals } from '@preact/signals-react/runtime';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';

import styles from './ClientCampaignInfo.module.scss';

export type ClientCampaignInfoProps = {
  promotion: CommerceCampaignPromotionQuery;
};

export default function ClientCampaignInfo({ promotion }: Readonly<ClientCampaignInfoProps>) {
  useSignals();
  const currencies = useCurrencies();
  const { country } = useConfigurator();
  const t = useTranslations('configurator');

  const price = promotion.promotionByCampaignId?.discountPrice;

  return (
    <div className={classNames(styles['campaign-info'], 'body-small-medium-sm body-medium-lg')}>
      {price && (
        <>
          {t('total')} <PriceInfo price={price} country={country.value} currencies={currencies} />
        </>
      )}
    </div>
  );
}
