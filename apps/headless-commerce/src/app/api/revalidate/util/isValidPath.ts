const pathRegex = /^(\/|\/(?!_next|api).+)$/;

export const isValidPath = (path: string) => pathRegex.test(path);
