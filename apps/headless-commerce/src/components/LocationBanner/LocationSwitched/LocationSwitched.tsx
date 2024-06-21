import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import Image from 'next/image';
import { memo } from 'react';

import styles from './LocationSwitched.module.scss';

export type LocationSwitchedProps = {
  country: CountryConfiguration;
};

export const LocationSwitched = memo(function LocationSwitched({ country }: LocationSwitchedProps) {
  return (
    <div className={styles['switched-location']}>
      <div className={styles['switched-location__content']}>
        <Image
          src={`https://cdn.suitsupply.com/flags/4x3/${country.countryCode}.svg`}
          width={15}
          height={12}
          className={styles['switched-location__flag']}
          alt={'flag'}
        />
        <div className={styles['switched-location__content_txt']}>
          Location changed to{' '}
          <span>
            {country.name} ({country.ecommerce.currencyCode})
          </span>
        </div>
      </div>
    </div>
  );
});
