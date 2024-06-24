import { env } from '@susu/headless-commerce/config/config';

export const ENVIRONMENT = process.env.NEXT_PUBLIC_NODE_ENV;
export const CONTENTFUL_SPACE = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
export const CONTENTFUL_ENDPOINT = process.env.NEXT_PUBLIC_CONTENTFUL_ENDPOINT;
export const CONTENTFUL_URL = `${CONTENTFUL_ENDPOINT}/content/v1/spaces/${CONTENTFUL_SPACE}/environments/${ENVIRONMENT}`;
export const COMMERCE_URL = process.env.NEXT_PUBLIC_PRODUCT_ENDPOINT;
export const CONTENTFUL_TOKEN =
  env === 'prd'
    ? process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
    : process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN;

// Contentful has a rate limit of 55 per second. We found that at 50 per second
// we were still getting rate limited.
export const rateLimit = (1000 / 50) * 2;
