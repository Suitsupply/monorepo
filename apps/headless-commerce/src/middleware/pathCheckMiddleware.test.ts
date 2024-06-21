import { NextRequest, NextResponse } from 'next/server';
import { describe, expect, it } from 'vitest';

import { pathCheckMiddleware } from './pathCheckMiddleware';

describe('pathCheckMiddleware', () => {
  it('should return original props if pathname includes /api/', async () => {
    const request = new NextRequest('https://example.com/api/test');
    const response = new NextResponse();
    const middleware = pathCheckMiddleware();

    const props = await middleware({ request, response }, async props => props);

    expect(props.request).toBe(request);
    expect(props.response).toBe(response);
  });

  it('should return original props if pathname matches PUBLIC_FILE pattern', async () => {
    const request = new NextRequest('https://example.com/test.png');
    const response = new NextResponse();
    const middleware = pathCheckMiddleware();

    const props = await middleware({ request, response }, async props => props);

    expect(props.request).toBe(request);
    expect(props.response).toBe(response);
  });

  it('should call next if pathname does not include /api/ and does not match PUBLIC_FILE pattern', async () => {
    const request = new NextRequest('https://example.com/path/to/page');
    const response = new NextResponse();
    const middleware = pathCheckMiddleware();

    const props = await middleware({ request, response }, async props => props);

    expect(props.request).toBe(request);
    expect(props.response).toBe(response);
  });
});
