'use client';

import PriceInfo from '@susu/headless-commerce/components/PriceInfo/PriceInfo';
import { useCountry } from '@susu/headless-commerce/contexts/country/client';
import { useCurrencies } from '@susu/headless-commerce/contexts/currencies/client';
import { adjustPriceFormat } from '@susu/headless-commerce/features/configurator/utils/priceUtils';
import { isMobileScreen } from '@susu/headless-commerce/utils/responsiveUtils';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

import { useConfiguratorSummary } from '../../contexts/ConfiguratorSummaryContext';
import ClientAddToCartButton from './AddToCartButton/ClientAddToCartButton';
import styles from './ConfiguratorSummaryAddToBag.module.scss';

export type ConfiguratorSummaryAddToBagProps = {
  originalPrice: string;
  discountPrice: string;
  packagePrice: string;
};

const ClientConfiguratorSummaryAddToBag = memo(function ClientConfiguratorSummaryAddToBag({
  originalPrice,
  discountPrice,
  packagePrice,
}: ConfiguratorSummaryAddToBagProps) {
  const country = useCountry();
  const currencies = useCurrencies();
  const stickyBagRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('configurator');
  const { isAddToBagEnabled } = useConfiguratorSummary();
  const [isMobile, setIsMobile] = useState<boolean>();
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const buttonWrapperRef = useRef<HTMLDivElement>(null);
  const [hasPageLoaded, setHasPageLoaded] = useState<boolean>(false);

  const BUTTON_STICKY_WRAPPER_CLASS = 'configurator-summary__button-wrapper--sticky';
  const BUTTON_STICKY_VISIBLE_WRAPPER_CLASS = 'configurator-summary__button-wrapper--sticky--visible';
  const BUTTON_STICKY_WRAPPER_HIDDEN_CLASS = 'configurator-summary__button-wrapper--hidden';
  const configuratorSummaryTextWrapClasses = classNames(styles['configurator-summary__text-wrap'], 'body-small-light');
  const configuratorSummaryTextWrapBoldClasses = classNames(
    styles['configurator-summary__text-wrap'],
    styles['configurator-summary__text-wrap--bold'],
    'body-small-medium',
  );
  const configuratorSummaryBagButtonClasses = classNames(styles['configurator-summary__button'], 'body-small-regular', {
    [styles['configurator-summary__button--disabled']]: !isAddToBagEnabled,
  });
  const configuratorSummaryTextLabelClasses = classNames(styles['configurator-summary__text-label']);
  const configuratorSummaryTextValueClasses = classNames(styles['configurator-summary__text-value']);
  const buttonWrapperClasses = classNames(
    styles['configurator-summary__button-wrapper'],
    styles[BUTTON_STICKY_WRAPPER_HIDDEN_CLASS],
    {
      [styles[BUTTON_STICKY_WRAPPER_CLASS]]: isMobile && isSticky,
      [styles[BUTTON_STICKY_VISIBLE_WRAPPER_CLASS]]: isMobile && isSticky && isAddToBagEnabled,
    },
  );
  const buttonInnerClasses = classNames(styles['configurator-summary__button-inner'], {
    [styles[BUTTON_STICKY_WRAPPER_CLASS]]: !isMobile && isSticky,
    [styles[BUTTON_STICKY_VISIBLE_WRAPPER_CLASS]]: !isMobile && isSticky && isAddToBagEnabled,
  });

  const handleScrollStickiness = useCallback(() => {
    if (!stickyBagRef.current) {
      return;
    }

    // Handle on load stickiness. Hide button until first scroll is made. Timeout is there to not show animation on first scroll.
    if (!hasPageLoaded) {
      setTimeout(() => {
        buttonWrapperRef.current?.classList.remove(styles[BUTTON_STICKY_WRAPPER_HIDDEN_CLASS]);
      }, 200);
      setHasPageLoaded(true);
    }

    setIsSticky(window.innerHeight < stickyBagRef.current?.getBoundingClientRect().top + 80);
  }, [hasPageLoaded]);

  useEffect(() => {
    setIsMobile(isMobileScreen);
    document.addEventListener('scroll', handleScrollStickiness);

    return () => {
      document.removeEventListener('scroll', handleScrollStickiness);
    };
  }, [handleScrollStickiness]);

  const adjustPrice = useCallback((price: string) => {
    return adjustPriceFormat(price);
  }, []);

  return (
    <div className={styles['configurator-summary__sticky-bag']} ref={stickyBagRef}>
      <div className={styles['configurator-summary__sticky-wrapper']}>
        <div className={configuratorSummaryTextWrapClasses}>
          <span className={configuratorSummaryTextLabelClasses}>{t('original_price')}</span>
          <span className={configuratorSummaryTextValueClasses}>
            <PriceInfo price={adjustPrice(originalPrice)} country={country} currencies={currencies} />
          </span>
        </div>
        <div className={configuratorSummaryTextWrapClasses}>
          <span className={configuratorSummaryTextWrapClasses}>Discount</span>
          <span className={configuratorSummaryTextValueClasses}>
            -<PriceInfo price={adjustPrice(discountPrice)} country={country} currencies={currencies} />
          </span>
        </div>
        <div className={configuratorSummaryTextWrapBoldClasses}>
          <span className={configuratorSummaryTextWrapClasses}>Package price</span>
          <span className={configuratorSummaryTextValueClasses}>
            <PriceInfo price={adjustPrice(packagePrice)} country={country} currencies={currencies} />
          </span>
        </div>

        <div className={buttonWrapperClasses} ref={buttonWrapperRef}>
          <div className={buttonInnerClasses}>
            <ClientAddToCartButton disabled={!isAddToBagEnabled} className={configuratorSummaryBagButtonClasses} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default ClientConfiguratorSummaryAddToBag;
