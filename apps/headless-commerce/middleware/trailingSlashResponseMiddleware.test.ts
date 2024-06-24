import { NextRequest, NextResponse } from 'next/server';
import { describe, expect, it } from 'vitest';

import { trailingSlashResponseMiddleware } from './trailingSlashResponseMiddleware';

describe('trailingSlashResponseMiddleware', () => {
  it('should redirect to URL with trailing slash if pathname without locale is empty', async () => {
    const request = new NextRequest('https://example.com/en-US');
    const response = new NextResponse();
    const middleware = trailingSlashResponseMiddleware();

    const { response: newResponse } = await middleware({ request, response }, async () => ({ request, response }));

    expect(newResponse.status).toBe(301);
    expect(newResponse.headers.get('Location')).toBe('https://example.com/en-US/');
  });

  it('should not redirect if pathname without locale is not empty', async () => {
    const request = new NextRequest('https://example.com/en-US/path/to/page');
    const response = new NextResponse();
    const middleware = trailingSlashResponseMiddleware();

    const { response: newResponse } = await middleware({ request, response }, async () => ({ request, response }));

    expect(newResponse).toBe(response);
  });
});
