import log from '@susu/headless-commerce/utils/log';

export const errorHandler = (error: Error | Record<string, unknown>) => log.error(error);
