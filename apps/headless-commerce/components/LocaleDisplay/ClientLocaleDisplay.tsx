'use client';

import ClientCountrySelector from '@susu/headless-commerce/components/CountrySelector/ClientCountrySelector';
import Icon from '@susu/headless-commerce/components/Icon/Icon';
import ClientLanguageSelector from '@susu/headless-commerce/components/LanguageSelector/ClientLanguageSelector';
import Loader from '@susu/headless-commerce/components/Loader/Loader';
import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import { getLanguageFromLocale } from '@susu/headless-commerce/utils/localeUtils';
import classNames from 'classnames';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { useCallback, useMemo, useState } from 'react';

import ClientSideSlider from '../SideSlider/ClientSideSlider';
import styles from './LocaleDisplay.module.scss';

export type ClientLocaleDisplayProps = {
  colorPalette?: 'light' | 'dark';
  isInsideFooter: boolean;
  showIcon?: boolean;
};

export default function ClientLocaleDisplay({
  colorPalette = 'dark',
  isInsideFooter = false,
  showIcon = false,
}: ClientLocaleDisplayProps) {
  const country = useCountry();
  const locale = useLocale();
  const [content, setContent] = useState<'country' | 'language' | ''>('');
  const urlLocale = getLanguageFromLocale(locale);
  const [baseLang] = country.languages.indexOf(urlLocale) > -1 ? [urlLocale] : ['en'];
  const languageNames = new Intl.DisplayNames([baseLang], {
    type: 'language',
  });
  const language = languageNames.of(baseLang);

  const handleSelectorClose = useCallback(() => {
    setContent('');
  }, []);

  const handleCountryClick = useCallback(() => {
    setContent('country');
  }, []);

  const handleLanguageClick = useCallback(() => {
    setContent('language');
  }, []);

  const countrySelectorClasses = classNames(styles['locale-display__button'], 'caption-regular', {
    [styles['locale-display--light']]: colorPalette === 'light',
    [styles['locale-display--dark']]: colorPalette === 'dark',
  });
  const localeDisplaySpanClasses = classNames(
    { [styles['locale-display__span--footer']]: isInsideFooter },
    styles['locale-display__span'],
    'caption-light',
  );

  const style = useMemo(
    () =>
      ({
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        display: 'grid',
        placeItems: 'center',
      }) satisfies DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>['style'],
    [],
  );

  return (
    <>
      <ClientSideSlider
        fullScreen="never"
        hasCloseButton={false}
        isOpen={Boolean(content)}
        onClose={handleSelectorClose}
        slideInFrom="left"
      >
        <div>
          {content === '' && (
            <div style={style}>
              <Loader />
            </div>
          )}
          {content === 'country' && (
            <ClientCountrySelector isInsideFooter={isInsideFooter} onClose={handleSelectorClose} />
          )}
          {content === 'language' && (
            <ClientLanguageSelector onClose={handleSelectorClose} isInsideFooter={isInsideFooter} />
          )}
        </div>
      </ClientSideSlider>
      <div className={`${styles['locale-display']}`}>
        {showIcon && (
          <span className={styles.icon}>
            <Icon icon="location" aria-hidden="true" />
          </span>
        )}
        <button className={countrySelectorClasses} onClick={handleCountryClick}>
          {country.name}
        </button>
        {country.languages.length > 1 ? (
          <button
            className={`${styles['locale-display__button']} caption-light ${
              colorPalette === 'light' ? styles['locale-display--light'] : styles['locale-display--dark']
            }`}
            onClick={handleLanguageClick}
            data-testid="language-selector"
          >
            {language}
          </button>
        ) : (
          <span className={localeDisplaySpanClasses}>{language}</span>
        )}
      </div>
    </>
  );
}
