import { RadioGroup, RadioProvider } from '@ariakit/react';
import { useSignals } from '@preact/signals-react/runtime';
import Icon from '@susu/headless-commerce/components/Icon/Icon';
import styles from '@susu/headless-commerce/components/LanguageSelector/LanguageSelector.module.scss';
import { translateName } from '@susu/headless-commerce/components/LanguageSelector/utils/translateName';
import { Radio } from '@susu/headless-commerce/components/Radio/ClientRadio';
import type { AllowedLocaleCountry, AllowedLocaleLanguage } from '@susu/headless-commerce/config/locale';
import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { ChangeLanguageProperties, EventLocationValueType } from '@susu/headless-commerce/libs/avo/avo';
import { enrichEvent } from '@susu/headless-commerce/libs/segment/utils';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import { setLastVisitedLocaleCookie } from '@susu/headless-commerce/utils/cookies/browser';
import {
  convertLocaleToCookieFormat,
  createLocale,
  getCountryFromLocale,
  getLanguageFromLocale,
} from '@susu/headless-commerce/utils/localeUtils';
import log from '@susu/headless-commerce/utils/log';
import { pathnameWithoutLocalePrefix } from '@susu/headless-commerce/utils/pathname';
import { URLData } from '@susu/headless-commerce/utils/tracking/segment';
import { trackEvent } from '@susu/headless-commerce/utils/tracking/tracking';
import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
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
  const customer = useCustomer();
  const pathname = usePathname();
  const router = useRouter();

  const localeLanguage = getLanguageFromLocale(locale);
  const localeCountry = getCountryFromLocale(locale);

  const handleLanguageChange = useCallback(
    async (toLanguage: string) => {
      const toLocale = createLocale(toLanguage as AllowedLocaleLanguage, localeCountry as AllowedLocaleCountry);

      const eventAction = 'Change_Language';
      const eventCategory = isInsideFooter ? 'Footer_Interactions' : 'Global_Interactions';
      const eventLabel = `${localeLanguage}-${toLanguage}`;
      const { url, locationId } = URLData();
      const segmentProperties: ChangeLanguageProperties = enrichEvent(
        {
          locale,
          country,
          customer: customer as Customer,
        },
        {
          pageType,
          eventLabel: eventLabel,
          eventCategory: isInsideFooter ? 'footer_interactions' : 'global_interactions',
          // TODO: Remove casting and use supported values
          eventLocation: 'header' as unknown as EventLocationValueType,
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

      router.push(currentUrl.toString());
    },
    [country, customer, isInsideFooter, locale, localeCountry, localeLanguage, pageType, pathname, router],
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
