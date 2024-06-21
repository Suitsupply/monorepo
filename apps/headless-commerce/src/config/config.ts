import type { SiteId } from '@headless-commerce/gql/generated/graphql';
import { isAcceptance, isDevelopment, isLive, isServer, isTesting } from '@headless-commerce/utils/environment';

import type { Locale } from './locale';

export const DEFAULT_LOCALE = (process.env.SFCC_DEFAULT_LOCALE || 'en-nl') as Locale;
export const DEFAULT_SITE_ID = (process.env.SFCC_DEFAULT_SITEID || 'INT') as SiteId;

export const IMAGE_CDN_BASE_URL = 'https://cdn.suitsupply.com/image/upload/';

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

export const getDefaultCountry = () => DEFAULT_LOCALE?.split('-')[1];

export enum EnvironmentType {
  TST = 'tst',
  ACC = 'acc',
  PRD = 'prd',
}

// Determine the environment based on the env variable
export const env = isDevelopment()
  ? 'dev'
  : EnvironmentType[process.env.NEXT_PUBLIC_ENVIRONMENT_TYPE as 'TST' | 'ACC' | 'PRD'];

export const baseURL = () => {
  if (!isServer()) {
    return window.location.origin;
  }

  if (isDevelopment()) {
    return 'http://localhost:3000';
  }

  if (isLive() || isAcceptance() || isTesting()) {
    return `https://${process.env.NEXT_PUBLIC_SFCC_ENVIRONEMENT_BASE_URL}`;
  }

  return 'http://localhost:3000';
};
