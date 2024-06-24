export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[]
  ? ElementType
  : never;

export const zip = <T, U>(as: T[], bs: U[]) => as.map((k, i) => [k, bs[i]] as [T, U]);

export const includesAll = <T>(as: T[], bs: T[]) => bs.every(b => as.includes(b));

export const uniqueElements = <T>(array: Array<T>): Array<T> => [...new Set(array)];
