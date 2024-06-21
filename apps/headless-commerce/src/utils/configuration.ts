import type { EdgeConfiguration } from '@headless-commerce/types/EdgeConfiguration';

import { serverScopeCache } from './serverContext';

const EDGE_CONFIG = String(process.env.EDGE_CONFIG);

// Gets the configuration from the vercel edge server.
export const getConfiguration = serverScopeCache(async (): Promise<EdgeConfiguration> => {
  const result = await fetch(EDGE_CONFIG);
  return await result.json();
});

// Gets a specific key from the configuration.
export const get = serverScopeCache(
  async <K extends keyof EdgeConfiguration['items']>(key: K): Promise<EdgeConfiguration['items'][K]> => {
    const configuration = await getConfiguration();
    return configuration.items[key];
  },
);
