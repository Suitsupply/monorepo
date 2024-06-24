import { useSignals } from '@preact/signals-react/runtime';
import styles from '@susu/headless-commerce/components/CountrySelector/CountrySelector.module.scss';
import { useCriteria } from '@susu/headless-commerce/components/CountrySelector/signals/useCriteria';
import { getCountryInitial } from '@susu/headless-commerce/components/CountrySelector/utils/getCountryInitial';
import { searchFilter } from '@susu/headless-commerce/components/CountrySelector/utils/searchFilter';
import Icon from '@susu/headless-commerce/components/Icon/Icon';
import Loader from '@susu/headless-commerce/components/Loader/Loader';
import { useCountries } from '@susu/headless-commerce/contexts/countries/client';
import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCustomer } from '@susu/headless-commerce/contexts/customer/client';
import { useLocale } from '@susu/headless-commerce/contexts/locale/client';
import { useGetCountriesOrder } from '@susu/headless-commerce/hooks/useGetCountriesOrder';
import { usePageType } from '@susu/headless-commerce/hooks/usePageType';
import type { ChangeCountryProperties, EventLocationValueType } from '@susu/headless-commerce/libs/avo/avo';
import { enrichEvent } from '@susu/headless-commerce/libs/segment/utils';
import type { CountryConfiguration } from '@susu/headless-commerce/types/CountryConfiguration';
import type { Customer } from '@susu/headless-commerce/types/Customer';
import { setLastVisitedLocaleCookie } from '@susu/headless-commerce/utils/cookies/browser';
import { highlightText } from '@susu/headless-commerce/utils/highlightText';
import { convertLocaleToCookieFormat } from '@susu/headless-commerce/utils/localeUtils';
import { pathnameWithoutLocalePrefix } from '@susu/headless-commerce/utils/pathname';
import { URLData } from '@susu/headless-commerce/utils/tracking/segment';
import { serializeTrackingCountryName, trackEvent } from '@susu/headless-commerce/utils/tracking/tracking';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import type { ChangeEventHandler, CSSProperties } from 'react';
import { Fragment, useCallback, useEffect, useMemo, useRef } from 'react';

const countryListClasses = classNames(styles['country-selector'], 'country-selector__links');
const countrySelectorClearButtonClasses = classNames(
  styles['country-selector__search__input-button'],
  'js-country-selector-clear-button',
);
const countrySearchReultsTitleClasses = classNames(
  styles['country-selector__results__title'],
  'brow-header-regular',
  'country-selector__results-title',
);
const searchClasses = classNames(styles['country-selector__search']);
const searchIconClasses = classNames(styles['country-selector__search__icon']);
const searchInputClasses = classNames(styles['country-selector__search__input'], 'title-03-light');
const countryInitialClasses = classNames(styles['country-selector__country__initial'], 'body-medium');

const loaderStyle = {
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  display: 'grid',
  placeItems: 'center',
} as CSSProperties;

export type ClientCountrySelectorProps = {
  isInsideFooter: boolean;
  onClose: () => void;
};

export default function ClientCountrySelector({ isInsideFooter, onClose }: ClientCountrySelectorProps) {
  useSignals();

  const pageType = usePageType();
  const country = useCountry();
  const locale = useLocale();
  const customer = useCustomer();
  const countries = useCountries();
  const { data: order } = useGetCountriesOrder();
  const { criteria, hasCriteria, setCriteria, clearCriteria } = useCriteria();
  const pathname = usePathname();
  const initials = new Set<string>();
  const selectorRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('countrySelector');

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    event => {
      if (event.target.value) {
        setCriteria(event.target.value);
      } else {
        clearCriteria();
      }
      setCriteria(event.target.value ?? '');
    },
    [clearCriteria, setCriteria],
  );

  const handleClick = useCallback(async () => {
    const eventCategory = isInsideFooter ? 'Footer_Interactions' : 'Global_Interactions';
    const eventAction = 'Change_Country';
    const eventLabel = `${country.name}-${serializeTrackingCountryName(country.name)}`;
    const { url, locationId } = URLData();

    const segmentEventProps: ChangeCountryProperties = enrichEvent(
      {
        locale,
        country,
        customer: customer as Customer,
      },
      {
        pageType,
        eventCategory: isInsideFooter ? 'footer_interactions' : 'global_interactions',
        eventLabel: eventLabel,
        // TODO: Remove casting and use supported values
        eventLocation: (isInsideFooter ? 'footer' : 'menu') as unknown as EventLocationValueType,
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
        event: 'changeCountry',
        properties: segmentEventProps,
      },
    });

    await setLastVisitedLocaleCookie(convertLocaleToCookieFormat(locale));
  }, [isInsideFooter, country, locale, customer, pageType]);

  useEffect(() => {
    initials.clear();
  }, []);

  const filtered = useMemo(
    () => (order ? searchFilter(Object.values(countries), criteria.value, order) : []),
    [criteria, order, countries],
  );

  if (!order) {
    return (
      <div style={loaderStyle}>
        <Loader />
      </div>
    );
  }

  const countriesClasses = classNames(styles['country-selector__countries'], {
    [styles['country-selector__results']]: hasCriteria(),
  });
  const countryLinkClasses = classNames(styles['country-selector__country__link'], {
    [styles['with-criteria']]: hasCriteria(),
  });

  return (
    <div ref={selectorRef} className={countryListClasses} data-testid="country-selector-links">
      <div className={styles['country-selector__top-wrapper']}>
        <div className={styles['country-selector__back-button']}>
          <button onClick={onClose}>
            <span className="sr-only">Close search</span>
            <Icon icon="arrow_left" />
          </button>
        </div>
        <div className={searchClasses}>
          <label className="sr-only" htmlFor="country-search-input">
            {t('search_label')}
          </label>
          <div className={searchIconClasses}>
            <Icon icon="search" data-target="slide-down" aria-hidden="true" />
          </div>
          <input
            className={searchInputClasses}
            data-testid="country-search-input"
            id="country-search-input"
            onChange={handleSearchChange}
            placeholder={t('search_label')}
            type="text"
            value={criteria.value}
          />
          {hasCriteria() && (
            <div className={countrySelectorClearButtonClasses} data-testid="country-selector-clear-btn">
              <button onClick={clearCriteria}>
                <span className="sr-only">Clear</span>
                <Icon icon="close" />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className={countriesClasses}>
        {filtered.length === 0 ? (
          <div className="title-03-medium">{t('no_results')}</div>
        ) : (
          <>
            {hasCriteria() && (
              <div className={countrySearchReultsTitleClasses} data-testid="country-search-results-title">
                {t('results')}
              </div>
            )}
            {filtered.map(({ countryCode, name, locale }: CountryConfiguration) => {
              const initial = getCountryInitial(name);
              const isFirst = !initials.has(initial);

              initials.add(initial);

              return (
                <Fragment key={countryCode}>
                  {isFirst && !hasCriteria() && <span className={countryInitialClasses}>{initial}</span>}
                  <a
                    className={countryLinkClasses}
                    onClick={handleClick}
                    data-name={name}
                    data-locale={locale}
                    href={`/${locale}${pathnameWithoutLocalePrefix(pathname)}`}
                  >
                    <div>{hasCriteria() ? highlightText(name, criteria.value) : name}</div>
                  </a>
                </Fragment>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
