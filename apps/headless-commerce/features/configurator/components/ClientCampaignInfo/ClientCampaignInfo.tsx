'use client';

import { useSignals } from '@preact/signals-react/runtime';
import PriceInfo from '@susu/headless-commerce/components/PriceInfo/PriceInfo';
import { useCurrencies } from '@susu/headless-commerce/contexts/currencies/client';
import { useConfigurator } from '@susu/headless-commerce/features/configurator/signals';
import type { CommerceCampaignPromotionQuery } from '@susu/headless-commerce/gql/generated/commerceCampaignPromotion.operation';
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
