import type { Logger } from 'pino';
import pino from 'pino';

const logger: Logger = pino({
  errorKey: 'error',
  level: process.env.PINO_LOG_LEVEL || 'debug',
  // prevent logging of sensitive data
  redact: [],
});

export default logger;
