import { NextRequest, NextResponse } from 'next/server';
import { describe, expect, it } from 'vitest';

import { requestURLHeaderMiddleware } from './requestURLHeaderMiddleware';

const testURL = 'https://example.com/path/to/page';

describe('requestURLHeaderMiddleware', () => {
  it('should add x-url header to request', async () => {
    const request = new NextRequest(testURL);
    const response = new NextResponse();
    const middleware = requestURLHeaderMiddleware();

    const { response: newResponse } = await middleware({ request, response }, async props => props);

    expect(newResponse.headers.get('x-url')).toBe(testURL);
  });

  it('should not modify other headers', async () => {
    const request = new NextRequest(testURL);
    const response = new NextResponse();
    response.headers.set('x-test', 'test');
    const middleware = requestURLHeaderMiddleware();

    const { response: newResponse } = await middleware({ request, response }, async props => props);

    expect(newResponse.headers.get('x-test')).toBe('test');
  });
});
