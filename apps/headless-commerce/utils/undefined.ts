export const isUndefined = (a: unknown): a is undefined => a === undefined;

export const isntUndefined = (a: unknown) => !isUndefined(a);
