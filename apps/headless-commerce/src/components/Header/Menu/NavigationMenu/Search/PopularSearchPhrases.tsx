'use client';

import ExternalLink from '@headless-commerce/components/ExternalLink/ExternalLink';
import type { PopularSearchQuery } from '@headless-commerce/gql/generated/getPopularSearchPhrases.operation';
import { highlightText } from '@headless-commerce/utils/highlightText';
import { useTranslations } from 'next-intl';

import styles from './Search.module.scss';

export type PopularSearchPhrasesProps = {
  inputValue: string;
  popularSearchPhrases: PopularSearchQuery;
};

export const PopularSearchPhrases = ({ inputValue, popularSearchPhrases }: PopularSearchPhrasesProps) => {
  const t = useTranslations('navigation');
  const suggestionBlockClass = styles['search__sugestion-block'];

  return (
    <div className={suggestionBlockClass}>
      <div className={`brow-header-regular ${styles['search__subtitle']}`}>{t('popular_searches')}</div>
      <div>
        {popularSearchPhrases.getPopularSearchPhrases?.map((suggestion: string, i: number) => {
          return (
            <ExternalLink
              className={styles['search__link']}
              key={`${suggestion}-${i + 1}`}
              href={`search?q=${suggestion}`}
            >
              <div className={styles['search__result']}>{highlightText(suggestion, inputValue)}</div>
            </ExternalLink>
          );
        })}
      </div>
    </div>
  );
};
