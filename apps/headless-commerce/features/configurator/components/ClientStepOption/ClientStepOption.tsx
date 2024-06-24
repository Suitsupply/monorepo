import { Button } from '@ariakit/react';
import { useSignals } from '@preact/signals-react/runtime';
import PriceInfo from '@susu/headless-commerce/components/PriceInfo/PriceInfo';
import { ResponsiveImage } from '@susu/headless-commerce/components/ResponsiveImage/ResponsiveImage';
import { useCurrencies } from '@susu/headless-commerce/contexts/currencies/client';
import { useConfigurator } from '@susu/headless-commerce/features/configurator/signals';
import type { MediaWrapperV2 } from '@susu/headless-commerce/gql/generated/graphql';
import classNames from 'classnames';
import Image from 'next/image';
import { useCallback, useMemo } from 'react';

import styles from './ClientStepOption.module.scss';

export type ClientStepOptionProps = {
  campaignId?: string;
  count: number;
  id: string;
  name: string;
  outOfStock?: boolean;
  price?: number;
  recommendedIndication?: boolean;
  selectOption: (optionId: string) => void;
  thumbnailImage: MediaWrapperV2 | null;
};

export default function ClientStepOption({
  campaignId,
  count,
  id,
  name,
  outOfStock,
  price,
  recommendedIndication,
  selectOption,
  thumbnailImage,
}: Readonly<ClientStepOptionProps>) {
  useSignals();
  const { country, currentStepData, selection } = useConfigurator();
  const currencies = useCurrencies();

  const stepSelection = selection.value[String(currentStepData.value?.categoryStep)];
  const selected = stepSelection === id;
  const select = useCallback(() => selectOption(id), [id, selectOption]);

  // Per component's design
  const sizes = useMemo(() => ({ xs: '60vw', lg: '15vw' }), []);

  const images = useMemo(
    () => ({
      cloudinaryDesktopImage: thumbnailImage?.cloudinaryDesktopImage,
      cloudinaryTabletImage: thumbnailImage?.cloudinaryTabletImage,
      cloudinaryMobileImage: thumbnailImage?.cloudinaryMobileImage,
    }),
    [
      thumbnailImage?.cloudinaryDesktopImage,
      thumbnailImage?.cloudinaryMobileImage,
      thumbnailImage?.cloudinaryTabletImage,
    ],
  );

  return (
    <Button
      className={classNames(styles.option, {
        [styles['option__selected']]: selected,
        [styles['option__half']]: count === 2,
        [styles['option__oos']]: outOfStock,
      })}
      onClick={select}
      disabled={outOfStock}
      data-id={id}
    >
      {campaignId && !!price && (
        <div className={classNames(styles.option__price, 'caption-regular')}>
          <PriceInfo key={campaignId} price={price} country={country.value} currencies={currencies} />
        </div>
      )}
      {outOfStock && <div className={classNames(styles['option__oos-badge'], 'caption-regular')}>Out of stock</div>}
      <div className={styles.option__image}>
        {thumbnailImage ? (
          <ResponsiveImage source="cloudinary" images={images} sizes={sizes} title={name} lazyloading={true} />
        ) : (
          <Image
            src={`https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/MBN1`}
            width="800"
            height="800"
            alt={`Placeholder - ${name}`}
            loading="lazy"
          />
        )}
      </div>

      <div className={classNames(styles.option__name)}>
        {!outOfStock && recommendedIndication && (
          <div className={styles['option__name-image']}>
            <Image
              src="https://cdn.suitsupply.com/image/upload/svg/recommended.svg"
              width="20"
              height="20"
              alt="recommended indicator"
              loading="lazy"
            />
          </div>
        )}
        <div
          className={classNames(
            styles['option__name-text'],
            `caption-${selected ? 'medium' : 'light'}-sm`,
            `body-${selected ? 'medium' : 'light'}-lg`,
            {
              [styles['option__name-text-recommended']]: recommendedIndication,
            },
          )}
        >
          {name}
        </div>
      </div>
    </Button>
  );
}
