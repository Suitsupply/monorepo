'use client';

import ExternalLink from '@susu/headless-commerce/components/ExternalLink/ExternalLink';
import type { SearchSuggestionsQuery } from '@susu/headless-commerce/gql/generated/searchSuggestions.operation';
import { highlightText } from '@susu/headless-commerce/utils/highlightText';
import { useTranslations } from 'next-intl';

import styles from './Search.module.scss';

export type SucceededProps = {
  inputValue: string;
  searchResult: SearchSuggestionsQuery;
};

export const ClientSucceeded = ({ inputValue, searchResult }: SucceededProps) => {
  const t = useTranslations('navigation');
  const suggestionBlockClass = styles['search__sugestion-block'];

  return (
    <>
      {Boolean(searchResult?.searchSuggestions?.suggestedPhrases?.length) && (
        <div className={suggestionBlockClass}>
          <div className={`brow-header-regular ${styles['search__subtitle']}`}>{t('do_you_mean')}</div>
          <div>
            {searchResult?.searchSuggestions?.suggestedPhrases?.map((phrase: string, i: number) => {
              return (
                <ExternalLink className={styles['search__link']} key={`${phrase}-${i + 1}`} href={`search?q=${phrase}`}>
                  <div className={`${styles['search__result']}`}>{highlightText(phrase, inputValue)}</div>
                </ExternalLink>
              );
            })}
          </div>
        </div>
      )}
      {Boolean(searchResult?.searchSuggestions?.productSuggestions?.length) && (
        <div className={suggestionBlockClass}>
          <div className={`brow-header-regular ${styles['search__subtitle']}`}>{t('products')}</div>
          <div>
            {searchResult?.searchSuggestions?.productSuggestions?.map(product => {
              return (
                <ExternalLink className={styles['search__link']} key={product.id} href={product.url ?? ''}>
                  <div className={`${styles['search__result']}`}>{highlightText(product.name, inputValue)}</div>
                </ExternalLink>
              );
            })}
          </div>
        </div>
      )}
      {Boolean(searchResult?.searchSuggestions?.categorySuggestions?.length) && (
        <div className={suggestionBlockClass}>
          <div className={`brow-header-regular ${styles['search__subtitle']}`}>{t('categories')}</div>
          <div>
            {searchResult?.searchSuggestions?.categorySuggestions?.map(category => {
              return (
                <ExternalLink className={styles['search__link']} key={category.id} href={category.url ?? ''}>
                  <div className={`${styles['search__result']}`}>
                    {highlightText(
                      t('category_result', {
                        category: category.name,
                        parentCategory: category.parentCategoryName,
                      }),
                      inputValue,
                    )}
                  </div>
                </ExternalLink>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
