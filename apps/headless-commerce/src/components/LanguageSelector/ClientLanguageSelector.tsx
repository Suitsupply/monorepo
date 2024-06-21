import { RadioGroup, RadioProvider } from '@ariakit/react';
import Icon from '@headless-commerce/components/Icon/Icon';
import styles from '@headless-commerce/components/LanguageSelector/LanguageSelector.module.scss';
import { translateName } from '@headless-commerce/components/LanguageSelector/utils/translateName';
import { Radio } from '@headless-commerce/components/Radio/ClientRadio';
import type { AllowedLocaleCountry, AllowedLocaleLanguage } from '@headless-commerce/config/locale';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { customerPromise } from '@headless-commerce/contexts/customer';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import type { ChangeLanguageProperties } from '@headless-commerce/libs/avo/avo';
import { enrichEvent } from '@headless-commerce/libs/segment/utils';
import { setLastVisitedLocaleCookie } from '@headless-commerce/utils/cookies/browser';
import {
  convertLocaleToCookieFormat,
  createLocale,
  getCountryFromLocale,
  getLanguageFromLocale,
} from '@headless-commerce/utils/localeUtils';
import log from '@headless-commerce/utils/log';
import { pathnameWithoutLocalePrefix } from '@headless-commerce/utils/pathname';
import { URLData } from '@headless-commerce/utils/tracking/segment';
import { trackEvent } from '@headless-commerce/utils/tracking/tracking';
import { useSignals } from '@preact/signals-react/runtime';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import type { SyntheticEvent } from 'react';
import { useCallback } from 'react';

export type ClientLanguageSelectorProps = {
  onClose: () => void;
  isInsideFooter: boolean;
};

export default function ClientLanguageSelector({ onClose, isInsideFooter }: ClientLanguageSelectorProps) {
  useSignals();

  const pageType = usePageType();
  const country = useCountry();
  const locale = useLocale();
  const pathname = usePathname();

  const localeLanguage = getLanguageFromLocale(locale);
  const localeCountry = getCountryFromLocale(locale);

  const handleLanguageChange = useCallback(
    async (toLanguage: string) => {
      const toLocale = createLocale(toLanguage as AllowedLocaleLanguage, localeCountry as AllowedLocaleCountry);

      const eventAction = 'Change_Language';
      const eventCategory = isInsideFooter ? 'Footer_Interactions' : 'Global_Interactions';
      const eventLabel = `${localeLanguage}_${toLanguage}`.toLowerCase();

      await customerPromise;

      const { url, locationId } = URLData();
      const segmentProperties: ChangeLanguageProperties = enrichEvent(
        {
          locale,
          country,
        },
        {
          pageType: pageType as ChangeLanguageProperties['pageType'],
          eventLabel: eventLabel,
          eventCategory: isInsideFooter ? 'footer_interactions' : 'global_interactions',
          eventLocation: isInsideFooter ? 'footer' : 'menu',
          url,
          locationId,
        },
      );

      trackEvent({
        ga: {
          eventCategory,
          eventAction,
          eventLabel,
        },
        segment: {
          event: 'changeLanguage',
          properties: segmentProperties,
        },
      });

      await setLastVisitedLocaleCookie(convertLocaleToCookieFormat(toLocale));

      const currentUrl = new URL(window.location.href);
      currentUrl.pathname = `/${toLocale}${pathnameWithoutLocalePrefix(pathname)}`;

      document.location.href = currentUrl.toString();
    },
    [country, isInsideFooter, locale, localeCountry, localeLanguage, pageType, pathname],
  );

  const onLanguageChange = useCallback(
    async (e: SyntheticEvent<HTMLInputElement, Event>) => {
      const language = (e.target as HTMLInputElement).dataset.language;
      if (!language) {
        log.error(new Error('Language not found'));
        return;
      }

      await handleLanguageChange(language);
    },
    [handleLanguageChange],
  );

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const languageListClasses = classNames(styles['language-selector__languages'], 'language-selector__items');

  return (
    <div className={styles['language-selector']}>
      <div className={styles['language-selector__back-button']}>
        <button onClick={handleClose}>
          <Icon icon="arrow_left" />
        </button>
      </div>

      <div className={languageListClasses} data-testid="language-selector-items">
        <RadioProvider defaultValue={translateName(localeLanguage)}>
          <RadioGroup>
            {country.languages.map((language: string) => {
              return (
                <Radio
                  key={language}
                  id={`lang-${language}`}
                  value={translateName(language)}
                  data-language={language}
                  onChange={onLanguageChange}
                  className={styles['language-selector__radio']}
                  tabbable
                />
              );
            })}
          </RadioGroup>
        </RadioProvider>
      </div>
    </div>
  );
}
