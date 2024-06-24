import { cache } from 'react';

import { memoize } from './memoize';

export const serverScopeCache = memoize;

export const requestScopeCache = cache;
