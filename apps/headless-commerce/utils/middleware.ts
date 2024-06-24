import type { NextRequest, NextResponse } from 'next/server';

export type MiddlewareProps = {
  request: NextRequest;
  response: NextResponse;
};

export type Middleware = (
  props: MiddlewareProps,
  next: (nextProps: MiddlewareProps) => Promise<MiddlewareProps>,
) => Promise<MiddlewareProps>;

export async function applyMiddleware(
  middlewares: Array<Middleware>,
  initialProps: MiddlewareProps,
): Promise<MiddlewareProps> {
  const executeMiddleware = async (index: number, props: MiddlewareProps): Promise<MiddlewareProps> => {
    if (index >= middlewares.length) {
      return props;
    }

    const middleware = middlewares[index];
    return await middleware(props, nextProps => executeMiddleware(index + 1, nextProps));
  };

  return await executeMiddleware(0, initialProps);
}
