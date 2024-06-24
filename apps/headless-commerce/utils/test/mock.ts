export const mockIntlLocale = (): Intl.Locale => {
  const mockLocale: Intl.Locale = {
    baseName: 'en-US',
    calendar: 'gregory',
    caseFirst: 'false',
    collation: 'default',
    hourCycle: 'h12',
    language: 'en',
    numeric: false,
    numberingSystem: 'latn',
    region: 'US',
    script: 'Latn',
    toString: () => 'en-US',
    minimize: () => mockLocale,
    maximize: () => mockLocale,
  };
  return mockLocale;
};

export const mockIntlDisplayNames = (): Intl.DisplayNames => {
  return {
    of: (code: string) => {
      const names: Record<string, string> = {
        US: 'United States',
        // Add more mappings as needed
      };
      return names[code] || '';
    },
    resolvedOptions: () => ({
      locale: 'en',
      style: 'long',
      type: 'region',
      fallback: 'code',
    }),
  };
};

export const mockFetch =
  (
    body: string | Record<string, unknown> = { test: 'response' },
    status: number = 200,
    headers: Record<string, string> = {
      'Content-Type': 'application/json',
    },
  ) =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (_input: RequestInfo | URL, _init?: RequestInit | undefined): Promise<Response> =>
    new Response(typeof body === 'string' ? body : JSON.stringify(body), {
      status,
      headers,
    });
