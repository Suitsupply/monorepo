export const toJSON = <T>(input: T): T => JSON.parse(JSON.stringify(input));
