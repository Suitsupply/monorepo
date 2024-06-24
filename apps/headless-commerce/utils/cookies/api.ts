import type { NextRequest, NextResponse } from 'next/server';

import type { ResponseCookie } from './server';

export const serializeValue = (value: unknown) =>
  typeof value === 'object' ? 'j:' + JSON.stringify(value) : (value as string);

export const setCookie = (
  cookies: NextResponse['cookies'],
  key: string,
  value: unknown,
  options?: Partial<ResponseCookie>,
): void => {
  cookies.set(key, serializeValue(value), options);
};

export const deleteCookie = (cookies: NextResponse['cookies'], key: string): void => {
  cookies.delete({
    name: key,
    maxAge: -1,
  });
};

export const cookiesAsRecord = (cookies: NextRequest['cookies'] | NextResponse['cookies']): Record<string, string> => {
  return cookies.getAll().reduce(
    (a, v) => {
      a[v.name] = v.value;
      return a;
    },
    {} as Record<string, string>,
  );
};
