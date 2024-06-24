import type { SearchSuggestionsQuery } from '@susu/headless-commerce/gql/generated/searchSuggestions.operation';

export type ClientSearchState = {
  input: 'empty' | 'too-short' | 'valid';
  inputValue: string;
  debouncedInputValue: string;
  search: 'idle' | 'loading' | 'failed' | 'succeeded';
  searchError: Error | undefined;
  searchResult: SearchSuggestionsQuery | undefined;
};

export type ClientSearchAction =
  | { type: 'empty' }
  | { type: 'input'; value: string }
  | { type: 'debouncedInput'; value: string }
  | { type: 'load' }
  | { type: 'succeed'; result: SearchSuggestionsQuery }
  | { type: 'fail'; error: Error };

export const clientSearchReducer = (state: ClientSearchState, action: ClientSearchAction): ClientSearchState => {
  switch (action.type) {
    case 'empty':
      return {
        input: 'empty',
        inputValue: '',
        debouncedInputValue: '',
        search: 'idle',
        searchError: undefined,
        searchResult: undefined,
      };
    case 'input':
      return {
        ...state,
        inputValue: action.value,
      };
    case 'debouncedInput':
      if (action.value.length === 0) {
        return {
          ...state,
          input: 'empty',
          debouncedInputValue: action.value,
        };
      } else if (action.value.length < 3) {
        return {
          ...state,
          input: 'too-short',
          debouncedInputValue: action.value,
        };
      } else {
        return {
          ...state,
          input: 'valid',
          debouncedInputValue: action.value,
        };
      }
    case 'load':
      return {
        ...state,
        search: 'loading',
      };
    case 'succeed':
      return {
        ...state,
        search: 'succeeded',
        searchError: undefined,
        searchResult: action.result,
      };
    case 'fail':
      return {
        ...state,
        search: 'failed',
        searchError: action.error,
        searchResult: undefined,
      };
  }
};
