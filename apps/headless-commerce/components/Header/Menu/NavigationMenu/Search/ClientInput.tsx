'use client';

import Icon from '@susu/headless-commerce/components/Icon/Icon';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { type ChangeEventHandler, type MouseEventHandler, useCallback } from 'react';

import styles from './Search.module.scss';

export type ClientInputProps = {
  inputValue: string;
  isEmpty: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClose: MouseEventHandler<HTMLButtonElement>;
  onSubmit: () => void;
};

export const ClientInput = function ClientInput({
  inputValue,
  isEmpty,
  onChange,
  onClose,
  onSubmit,
}: ClientInputProps) {
  const t = useTranslations('navigation');
  const searchInputClasses = classNames(styles['search__input'], 'js-header-search-input');

  const handleKeyUp = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key !== 'Enter') {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      onSubmit();
    },
    [onSubmit],
  );

  return (
    <div className={classNames(styles['search-wrapper'])}>
      <div className={searchInputClasses} data-testid="navigation-menu-search-input">
        <input
          className="title-03-light"
          value={inputValue}
          type="search"
          placeholder={t('search_placeholder')}
          onChange={onChange}
          onKeyUp={handleKeyUp}
          onSubmit={onSubmit}
        />
        {!isEmpty && (
          <button className={styles['search__clear']} onClick={onClose}>
            <span className="sr-only">Close</span>
            <Icon icon="close" aria-label="Clear search" />
          </button>
        )}
      </div>
    </div>
  );
};
