'use client';

import { useTranslations } from 'next-intl';
import { memo } from 'react';

import styles from './Search.module.scss';

export type ClientFailedProps = {
  inputValue: string;
};

export const ClientFailed = memo(function ClientFailed({ inputValue }: ClientFailedProps) {
  const t = useTranslations('navigation');
  const suggestionBlockClass = styles['search__sugestion-block'];

  return (
    <div className={suggestionBlockClass}>
      <div className={`title-03-medium ${styles['search__no-results__title']}`}>
        {t('no_results')} {`'${inputValue}'`}
      </div>
      <div className="body-light">{t('no_results_description')}</div>
    </div>
  );
});
