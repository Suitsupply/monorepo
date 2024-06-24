export type ArrayElement<ArrayType extends ReadonlyArray<unknown>> =
  ArrayType extends ReadonlyArray<infer ElementType> ? ElementType : never;

export const zip = <T, U>(as: Array<T>, bs: Array<U>) => as.map((k, i) => [k, bs[i]] as [T, U]);

export const includesAll = <T>(as: Array<T>, bs: Array<T>) => bs.every(b => as.includes(b));

export const uniqueElements = <T>(array: Array<T>): Array<T> => [...new Set(array)];

export const firstElement = <A>([a]: Array<A>): A | undefined => a;
