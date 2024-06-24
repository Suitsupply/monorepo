export const memoize = <T extends Array<unknown>, R = unknown>(fn: (...args: T) => R): ((...args: T) => R) => {
  const cache = new Map<string, R>();

  return (...args) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key) as R;
    }

    const result = fn(...args);

    cache.set(key, result);

    return result;
  };
};
