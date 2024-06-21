export const isUndefined = <T>(a: T | undefined): a is undefined => a === undefined;

export const isNotUndefined = <T>(a: T | undefined): a is T => a !== undefined;
