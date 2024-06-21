export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[]
  ? ElementType
  : never;

export const zip = <T, U>(as: T[], bs: U[]) => as.map((k, i) => [k, bs[i]] as [T, U]);

export const includesAll = <T>(as: T[], bs: T[]) => bs.every(b => as.includes(b));

export const uniqueElements = <T>(array: Array<T>): Array<T> => [...new Set(array)];

export const isArrayEmpty = <T>(array: Array<T>): boolean => array.length === 0;

export const chunkArray = <T>(array: Array<T>, chunkSize: number): Array<Array<T>> => {
  return array.length > chunkSize
    ? [array.slice(0, chunkSize), ...chunkArray(array.slice(chunkSize), chunkSize)]
    : [array];
};
