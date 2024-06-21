/* eslint-disable sonarjs/no-all-duplicated-branches */
import { isAcceptance, isDevelopment, isLive, isServer, isTesting } from '@headless-commerce/utils/environment';
import type { ILogObj } from 'tslog';
import { Logger } from 'tslog';

import { isNotUndefined } from './undefined';

const NEXT_PUBLIC_LOG_FORMAT = process.env.NEXT_PUBLIC_LOG_FORMAT;
const NEXT_PUBLIC_LOG_LEVEL = process.env.NEXT_PUBLIC_LOG_LEVEL;

export const getLogFormat = (): 'json' | 'pretty' => {
  if (isNotUndefined(NEXT_PUBLIC_LOG_FORMAT)) {
    if (NEXT_PUBLIC_LOG_FORMAT !== 'json' && NEXT_PUBLIC_LOG_FORMAT !== 'pretty') {
      throw new Error('Invalid log format');
    }
    return NEXT_PUBLIC_LOG_FORMAT;
  }

  if (isDevelopment()) {
    // There is a bug in tslog that causes file paths to be swallowed.
    if (isServer()) {
      return 'json';
    }

    return 'pretty';
  }

  if (isTesting()) {
    return 'pretty';
  }

  if (isAcceptance()) {
    return 'json';
  }

  return 'json';
};

// 0: silly
// 1: trace
// 2: debug
// 3: info
// 4: warn
// 5: error
// 6: fatal
export const getLogLevel = () => {
  if (isNotUndefined(NEXT_PUBLIC_LOG_LEVEL)) {
    return Number(NEXT_PUBLIC_LOG_LEVEL);
  }

  if (isDevelopment()) {
    return 2;
  }

  if (isTesting()) {
    return 2;
  }

  if (isAcceptance()) {
    return 3;
  }

  if (isLive()) {
    return 5;
  }

  return 5;
};

const logger: Logger<ILogObj> = new Logger({
  type: getLogFormat(),
  minLevel: getLogLevel(),
});

export default logger;
