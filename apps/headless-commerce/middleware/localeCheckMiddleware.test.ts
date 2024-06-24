import { DEFAULT_LOCALE } from '@susu/headless-commerce/config/config';
import { NextRequest, NextResponse } from 'next/server';
import { describe, expect, it } from 'vitest';

import { localeCheckMiddleware } from './localeCheckMiddleware';

const HOSTNAME = 'https://testing.suitsupply.com';
const PATHNAME = '/journal/the-perennial-suit';

describe('localeCheckMiddleware', () => {
  describe('When the pathname does not start with locale', () => {
    it('should redirect to default locale', async () => {
      const request = new NextRequest(`${HOSTNAME}${PATHNAME}`);
      const response = new NextResponse();
      const middleware = localeCheckMiddleware();

      const { response: newResponse } = await middleware({ request, response }, async props => props);

      expect(newResponse.status).toBe(301);
      expect(newResponse.headers.get('Location')).toBe(`${HOSTNAME}/${DEFAULT_LOCALE}${PATHNAME}`);
    });
  });

  describe('When the pathname does start with locale', () => {
    describe('When the pathname is not supported', () => {
      it('should redirect to default locale', async () => {
        const locale = 'en-tr';
        const request = new NextRequest(`${HOSTNAME}/${locale}${PATHNAME}`);
        const response = new NextResponse();
        const middleware = localeCheckMiddleware();

        const { response: newResponse } = await middleware({ request, response }, async props => props);

        expect(newResponse.status).toBe(301);
        expect(newResponse.headers.get('Location')).toBe(`${HOSTNAME}/${DEFAULT_LOCALE}${PATHNAME}`);
      });
    });

    describe('When the pathname is supported', () => {
      it('should not redirect', async () => {
        const locale = 'en-us';
        const request = new NextRequest(`${HOSTNAME}/${locale}${PATHNAME}`);
        const response = new NextResponse();
        const middleware = localeCheckMiddleware();

        const { response: newResponse } = await middleware({ request, response }, async props => props);

        expect(newResponse).toBe(response);
      });
    });
  });
});
