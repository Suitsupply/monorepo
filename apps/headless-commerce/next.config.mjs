import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scapiHostName = `https://${process.env.SFCC_SHORTCODE}.api.commercecloud.salesforce.com`;

const securityHeaders = [
  { key: 'Access-Control-Allow-Credentials', value: 'true' },
  { key: 'Access-Control-Allow-Origin', value: '*' },
  { key: 'Access-Control-Allow-Methods', value: '*' },
  {
    key: 'Access-Control-Allow-Headers',
    value: '*',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
];

/** @type {import('next').NextConfig} */
export default {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: securityHeaders,
    },
  ],
  images: {
    deviceSizes: [576, 769, 992, 1200, 1600],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.suitsupply.com',
      },
    ],
  },
  reactStrictMode: true,
  skipTrailingSlashRedirect: true,
  productionBrowserSourceMaps: process.env.NEXT_PUBLIC_ENVIRONMENT_TYPE === 'TST',
  rewrites: async () => ({
    beforeFiles: [
      {
        source: '/api/scapi-proxy/:path*',
        destination: `${scapiHostName}/:path*`,
      },
      {
        source: '/on/demandware.static/:path*',
        destination: `${process.env.SESSION_HOSTNAME}on/demandware.static/:path*`,
      },
      {
        source: '/on/demandware.store/:path*',
        destination: `${process.env.SESSION_HOSTNAME}on/demandware.store/:path*`,
      },
    ],
    fallback: [
      {
        source: '/:path*',
        destination: `${process.env.SESSION_HOSTNAME}:path*`,
      },
    ],
  }),
  redirects: async () => [
    {
      source: '/home',
      destination: '/',
      permanent: true,
    },
  ],
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@susu/headless-commerce': path.resolve(__dirname),
    };
    return config;
  },
};
