export const isObject = (input: unknown): input is Record<string, unknown> =>
  typeof input === 'object' && input !== null;

export const deepEqualArrays = (x: Array<unknown>, y: Array<unknown>): boolean =>
  x.length === y.length && x.every((value, index) => deepEqual(value, y[index]));

export const deepEqualObjects = (x: Record<string, unknown>, y: Record<string, unknown>): boolean =>
  Object.keys(x).length === Object.keys(y).length && Object.keys(x).every(key => deepEqual(x[key], y[key]));

export const deepEqual = (x: unknown, y: unknown): boolean =>
  x === y ||
  (Array.isArray(x) && Array.isArray(y) && deepEqualArrays(x, y)) ||
  (isObject(x) && isObject(y) && deepEqualObjects(x, y)) ||
  false;
