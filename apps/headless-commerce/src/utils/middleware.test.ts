import type { NextRequest, NextResponse } from 'next/server';
import { describe, expect, it } from 'vitest';

import type { Middleware, MiddlewareProps } from './middleware';
import { applyMiddleware } from './middleware';

describe('middleware', () => {
  describe('applyMiddleware', () => {
    it('should apply middlewares in order', async () => {
      const request = {} as NextRequest;
      const response = {} as NextResponse;
      const initialProps: MiddlewareProps = { request, response };

      let counter = 0;
      const middleware1: Middleware = async (props, next) => {
        counter++;
        expect(counter).toBe(1);
        return await next(props);
      };
      const middleware2: Middleware = async (props, next) => {
        counter++;
        expect(counter).toBe(2);
        return await next(props);
      };

      await applyMiddleware([middleware1, middleware2], initialProps);
      expect(counter).toBe(2);
    });

    it('should pass modified props to next middleware', async () => {
      const request = {} as NextRequest;
      const response = {} as NextResponse;
      const initialProps: MiddlewareProps = { request, response };

      const middleware1: Middleware = async (props, next) => {
        props.request = { modified: true } as unknown as NextRequest;
        return await next(props);
      };
      const middleware2: Middleware = async (props, next) => {
        expect(props.request).toEqual({ modified: true });
        return await next(props);
      };

      await applyMiddleware([middleware1, middleware2], initialProps);
    });
  });
});
