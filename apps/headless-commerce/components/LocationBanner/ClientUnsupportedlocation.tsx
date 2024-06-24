'use client';

import Icon from '@susu/headless-commerce/components/Icon/Icon';
import { COUNTRY, COUNTRYSWITCH_ACTION_STAY } from '@susu/headless-commerce/constants/cookie';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import { getCookie, setDenyCountrySwitchCookie } from '@susu/headless-commerce/utils/cookies/browser';
import { convertLocaleToCookieFormat, getLanguageFromLocale } from '@susu/headless-commerce/utils/localeUtils';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';

import styles from './LocationBanner.module.scss';

export default function ClientUnsupportedLocation() {
  const locale = useLocale();
  const [isCloseButtonClicked, setIsCloseButtonClicked] = useState<boolean>(false);
  const t = useTranslations('switch_lang');
  const unsupportedLocationTextClasses = classNames('body-regular', styles['unsupported-location__text']);
  const unsupportedLocationConfirmButtonClasses = classNames(
    'body-small-light',
    styles['unsupported-location__confirm-button'],
  );

  let cookieCountry = getCookie(COUNTRY);
  if (!cookieCountry) {
    return null;
  }

  // Don't use locale util functions here because the cookie country is not a
  // supported country so that will raise an error.
  const cookieLocaleCookieFormat = `${getLanguageFromLocale(locale)}_${cookieCountry}`;
  const currentLocaleCookieFormat = convertLocaleToCookieFormat(locale);
  const denyCountrySwitchCookie = getCookie(
    `${COUNTRYSWITCH_ACTION_STAY}-${cookieLocaleCookieFormat}-${currentLocaleCookieFormat}`,
  );
  const isDenyCountrySwitchCookieSet = Boolean(denyCountrySwitchCookie);
  if (isDenyCountrySwitchCookieSet || isCloseButtonClicked) {
    return null;
  }

  const handleClose = useCallback(async () => {
    setIsCloseButtonClicked(true);
    await setDenyCountrySwitchCookie(cookieLocaleCookieFormat, currentLocaleCookieFormat, true);
  }, [cookieLocaleCookieFormat, currentLocaleCookieFormat]);

  return (
    <div className={styles['location-banner']}>
      <button type={'button'} className={styles['location-banner__close-btn']} onClick={handleClose}>
        <Icon icon="close" />
      </button>
      <div className={styles['unsupported-location']}>
        <p className={unsupportedLocationTextClasses}>{t('not_shipping')}</p>
        <button className={unsupportedLocationConfirmButtonClasses} onClick={handleClose}>
          {t('okay')}
        </button>
      </div>
    </div>
  );
}
