'use client';

import Icon from '@susu/headless-commerce/components/Icon/Icon';
import type { AllowedLocaleCountry, Locale } from '@susu/headless-commerce/config/locale';
import { COUNTRY, COUNTRYSWITCH_ACTION_STAY } from '@susu/headless-commerce/constants/cookie';
import { useCountries } from '@susu/headless-commerce/contexts/countries/client';
import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { ChangeCountryProperties, EventLocationValueType } from '@susu/headless-commerce/libs/avo/avo';
import { enrichEvent } from '@susu/headless-commerce/libs/segment/utils';
import type { CountryConfiguration } from '@susu/headless-commerce/types/CountryConfiguration';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import { getCookie, setDenyCountrySwitchCookie } from '@susu/headless-commerce/utils/cookies/browser';
import { convertLocaleToCookieFormat, createLocale } from '@susu/headless-commerce/utils/localeUtils';
import log from '@susu/headless-commerce/utils/log';
import { pathnameWithoutLocalePrefix } from '@susu/headless-commerce/utils/pathname';
import { URLData } from '@susu/headless-commerce/utils/tracking/segment';
import { serializeTrackingCountryName, trackEvent } from '@susu/headless-commerce/utils/tracking/tracking';
import classNames from 'classnames';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useCallback, useMemo, useState } from 'react';

import styles from './LocationBanner.module.scss';

export default function ClientSwitchLocation() {
  const pageType = usePageType();
  const country = useCountry();
  const locale = useLocale();
  const customer = useCustomer();
  const countries = useCountries();
  const t = useTranslations('switch_lang');
  const pathname = usePathname();
  const [isCloseButtonClicked, setIsCloseButtonClicked] = useState<boolean>(false);

  const cookieCountry: string | undefined = useMemo(() => {
    return getCookie(COUNTRY);
  }, []);

  const countryData: CountryConfiguration | undefined = useMemo(() => {
    if (!country || !cookieCountry) {
      return undefined;
    }

    return countries[cookieCountry];
  }, [cookieCountry, country, countries]);

  const cookieLocale: Locale | undefined = useMemo(() => {
    if (!cookieCountry || !countryData?.languages) {
      return undefined;
    }

    return createLocale(countryData.languages[0], cookieCountry.toLowerCase() as AllowedLocaleCountry);
  }, [cookieCountry, countryData?.languages]);

  const handleClose = useCallback(async () => {
    if (!cookieLocale) {
      return;
    }

    setIsCloseButtonClicked(true);
    await setDenyCountrySwitchCookie(convertLocaleToCookieFormat(cookieLocale), convertLocaleToCookieFormat(locale));
  }, [cookieLocale, locale]);

  const handleSubmit = useCallback(() => {
    if (!countryData?.name) {
      return;
    }

    const eventLabel = `${country.name}-${serializeTrackingCountryName(countryData.name)}`;
    const { url, locationId } = URLData();
    const segmentProperties: ChangeCountryProperties = enrichEvent(
      {
        locale,
        country,
        customer: customer as Customer,
      },
      {
        pageType,
        eventLabel: eventLabel,
        eventCategory: 'global_interactions',
        // TODO: Remove casting and use supported values
        eventLocation: 'pop-up' as unknown as EventLocationValueType,
        url,
        locationId,
      },
    );

    trackEvent({
      ga: {
        eventCategory: 'Global_Interactions',
        eventAction: 'Change_Country_Popup',
        eventLabel,
      },
      segment: {
        event: 'changeCountry',
        properties: segmentProperties,
      },
    });
  }, [country, countryData?.name, customer, locale, pageType]);

  if (!cookieCountry || !countryData || !cookieLocale || cookieLocale === locale) {
    if (!cookieCountry) {
      log.error(new Error('No cookie country!'));
    }
    if (!countryData) {
      log.error(new Error('No country data!'));
    }
    return null;
  }

  const cookieLocaleCookieFormat = convertLocaleToCookieFormat(cookieLocale);
  const currentLocaleCookieFormat = convertLocaleToCookieFormat(locale);
  const denyCountrySwitchCookie = getCookie(
    `${COUNTRYSWITCH_ACTION_STAY}-${cookieLocaleCookieFormat}-${currentLocaleCookieFormat}`,
  );
  const isDenyCountrySwitchCookieSet = Boolean(denyCountrySwitchCookie);
  if (isDenyCountrySwitchCookieSet || isCloseButtonClicked) {
    return null;
  }

  const url = new URL(window.location.href);
  url.pathname = `/${cookieLocale}${pathnameWithoutLocalePrefix(pathname)}`;

  return (
    <div className={styles['location-banner']}>
      <button type={'button'} className={styles['location-banner__close-btn']} onClick={handleClose}>
        <Icon icon="close" />
      </button>
      <div className={styles['location-banner__content']}>
        <div>
          <p className={'body-regular'}>
            {t('shipping_to')} {countryData.name}?
          </p>
          <p className={classNames('body-small-regular', styles['location-banner__content__text'])}>
            {t('update_location')}
          </p>
          <div className={classNames(styles['location-banner__content__country'], 'caption-light')}>
            <Image
              src={`https://cdn.suitsupply.com/flags/4x3/${countryData.countryCode}.svg`}
              width={16}
              height={14}
              className={styles['location-banner__content__country-flag']}
              alt={'flag'}
            />
            <div>{`${countryData.name} (${countryData.ecommerce.currencyCode})`}</div>
          </div>
        </div>
        <div className={styles['location-banner__content__cta']}>
          <a className="body-small-light" href={url.toString()} onClick={handleSubmit}>
            {t('switch_location')}
          </a>
        </div>
      </div>
    </div>
  );
}
