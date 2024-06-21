// Cannot use arrow functions.
export function assertNonNullable<A>(
  value: A,
  message = 'value is null or undefined',
): asserts value is NonNullable<A> {
  if (value === null || value === undefined) {
    throw Error(message);
  }
}
