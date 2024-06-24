export const mapKeys = <T extends Record<string, unknown>>(input: T, fn: (key: string) => string) =>
  Object.fromEntries(Object.entries(input).map(([key, value]) => [fn(key), value])) as T;

export const isObject = <A>(ra: unknown): ra is Record<string, A> =>
  typeof ra === 'object' && ra !== null && !Array.isArray(ra);
