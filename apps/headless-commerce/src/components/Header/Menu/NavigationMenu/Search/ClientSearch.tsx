'use client';

import { ClientFailed } from '@headless-commerce/components/Header/Menu/NavigationMenu/Search/ClientFailed';
import { ClientInput } from '@headless-commerce/components/Header/Menu/NavigationMenu/Search/ClientInput';
import { ClientSucceeded } from '@headless-commerce/components/Header/Menu/NavigationMenu/Search/ClientSucceeded';
import { PopularSearchPhrases } from '@headless-commerce/components/Header/Menu/NavigationMenu/Search/PopularSearchPhrases';
import { clientSearchReducer } from '@headless-commerce/components/Header/Menu/NavigationMenu/Search/reducers/searchReducer';
import styles from '@headless-commerce/components/Header/Menu/NavigationMenu/Search/Search.module.scss';
import Loader from '@headless-commerce/components/Loader/Loader';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import { usePopularSearchQuery } from '@headless-commerce/gql/generated/getPopularSearchPhrases.urql';
import type { SearchSuggestions } from '@headless-commerce/gql/generated/graphql';
import { useSearchSuggestionsQuery } from '@headless-commerce/gql/generated/searchSuggestions.urql';
import { useDebouncedState } from '@headless-commerce/hooks/useDebouncedValue';
import { convertLocaleToCommerceGraphQLFormat } from '@headless-commerce/utils/localeUtils';
import log from '@headless-commerce/utils/log';
import classNames from 'classnames';
import type { ChangeEventHandler, MouseEventHandler } from 'react';
import { useCallback, useEffect, useMemo, useReducer } from 'react';

export type ClientSearchProps = {
  searchActive: boolean;
};

export default function ClientSearch({ searchActive }: Readonly<ClientSearchProps>) {
  const locale = useLocale();
  const country = useCountry();
  const {
    siteID,
    ecommerce: { currencyCode },
  } = country;
  const [searchState, searchDispatch] = useReducer(clientSearchReducer, {
    input: 'empty',
    inputValue: '',
    debouncedInputValue: '',
    search: 'idle',
    searchError: undefined,
    searchResult: undefined,
  });
  const [debouncedInputValue] = useDebouncedState<string>(searchState.inputValue, 500);

  const [
    { data: suggestions, error: suggestionsError, fetching: suggestionsFetching, stale: suggestionsStale },
    executeSearchSuggestionsQuery,
  ] = useSearchSuggestionsQuery({
    variables: useMemo(
      () => ({
        searchText: searchState.debouncedInputValue,
        siteInfo: {
          siteId: siteID,
          locale: convertLocaleToCommerceGraphQLFormat(locale),
          currency: currencyCode,
        },
      }),
      [currencyCode, locale, siteID, searchState.debouncedInputValue],
    ),
    context: useMemo(
      () => ({
        clientName: 'commerce',
      }),
      [],
    ),
    pause: true,
  });

  if (suggestionsError) {
    log.error(suggestionsError as Error);
  }

  const [{ data: popular, error: popularError }, executePopularSearchQuery] = usePopularSearchQuery({
    variables: useMemo(
      () => ({
        siteInfo: {
          siteId: siteID,
          locale: convertLocaleToCommerceGraphQLFormat(locale),
          currency: currencyCode,
        },
      }),
      [currencyCode, locale, siteID],
    ),
    context: useMemo(
      () => ({
        clientName: 'commerce',
      }),
      [],
    ),
    pause: true,
  });

  if (popularError) {
    log.error(popularError as Error);
  }

  const handleSearchCriteriaChanged: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    searchDispatch({ type: 'input', value: event.target.value });
  }, []);

  const handleCloseButtonClicked: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    searchDispatch({ type: 'empty' });
  }, []);

  const handleSubmit = useCallback(() => {
    const newURL = new URL(window.location.href);

    newURL.searchParams.set('q', searchState.inputValue);
    newURL.pathname = `/${locale}/search`;

    window.location.href = newURL.toString();
  }, [locale, searchState.inputValue]);

  useEffect(() => {
    if (!country.siteID || !searchActive) {
      searchDispatch({ type: 'empty' });
    }
  }, [country.siteID, searchActive]);

  useEffect(() => {
    searchDispatch({ type: 'debouncedInput', value: debouncedInputValue });
  }, [debouncedInputValue]);

  useEffect(() => {
    if (searchState.input === 'valid' && !suggestionsStale) {
      executeSearchSuggestionsQuery({
        clientName: 'commerce',
        optimistic: true,
      });
    }
  }, [executeSearchSuggestionsQuery, searchState.input, suggestionsStale]);

  useEffect(() => {
    if (suggestionsFetching) {
      searchDispatch({ type: 'load' });
    } else if (suggestionsError) {
      searchDispatch({ type: 'fail', error: suggestionsError });
    } else if (suggestions) {
      const { categorySuggestions, productSuggestions, suggestedPhrases } =
        suggestions.searchSuggestions as SearchSuggestions;

      if (!categorySuggestions.length && !productSuggestions.length && !suggestedPhrases.length) {
        searchDispatch({ type: 'fail', error: new Error('No results found') });
        return;
      }

      searchDispatch({ type: 'succeed', result: suggestions });
    }
  }, [suggestionsError, suggestionsFetching, suggestions, suggestionsStale, debouncedInputValue]);

  useEffect(() => {
    if (!country.siteID) {
      return;
    }
    executePopularSearchQuery({
      clientName: 'commerce',
    });
  }, [executePopularSearchQuery, country.siteID]);

  return (
    <div className={classNames(styles['search'], styles[`search-${searchActive ? 'active' : 'inactive'}`])}>
      <ClientInput
        inputValue={searchState.inputValue}
        isEmpty={searchState.input === 'empty'}
        onChange={handleSearchCriteriaChanged}
        onClose={handleCloseButtonClicked}
        onSubmit={handleSubmit}
      />
      <div className={styles['search__results']}>
        {searchState.search === 'loading' && <Loader shade="dark" className={styles['search__loader']} />}
        {searchState.search === 'failed' && <ClientFailed inputValue={searchState.inputValue} />}
        {searchState.search === 'succeeded' && searchState.input === 'valid' && searchState.searchResult && (
          <ClientSucceeded inputValue={searchState.inputValue} searchResult={searchState.searchResult} />
        )}
        {Boolean(popular?.getPopularSearchPhrases.length) && popular && (
          <PopularSearchPhrases inputValue={searchState.inputValue} popularSearchPhrases={popular} />
        )}
      </div>
    </div>
  );
}
