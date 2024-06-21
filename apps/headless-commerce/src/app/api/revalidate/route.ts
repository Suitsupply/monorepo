/* eslint-disable sonarjs/no-duplicate-string */
import { locales } from '@headless-commerce/config/locale';
import log from '@headless-commerce/utils/log';
import EdgeGrid from 'akamai-edgegrid';
import { revalidatePath } from 'next/cache';
import type { NextRequest } from 'next/server';

import { isValidPath } from './util/isValidPath';

const AKAMAI_HOST = String(process.env.AKAMAI_HOST);
const AKAMAI_CLIENT_TOKEN = String(process.env.AKAMAI_CLIENT_TOKEN);
const AKAMAI_CLIENT_SECRET = String(process.env.AKAMAI_CLIENT_SECRET);
const AKAMAI_ACCESS_TOKEN = String(process.env.AKAMAI_ACCESS_TOKEN);
const REVALIDATION_API_KEY = String(process.env.REVALIDATION_API_KEY);
const SESSION_HOSTNAME = String(process.env.SESSION_HOSTNAME);
const AKAMAI_PATH = 'ccu/v3/invalidate/url/production';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const apiKey = searchParams.get('api_key');
    if (!apiKey || apiKey !== REVALIDATION_API_KEY) {
      return new Response('Unauthorized', { status: 401 });
    }

    const path = searchParams.get('path');
    log.trace({
      route: '/api/revalidate',
      method: 'revalidate',
      path,
    });
    if (!path) {
      return new Response('No path parameter provided', { status: 400 });
    }

    const decodedPath = decodeURIComponent(path);
    log.trace({
      route: '/api/revalidate',
      method: 'revalidate',
      decodedPath,
    });
    if (!isValidPath(decodedPath)) {
      return new Response('Invalid path', { status: 400 });
    }

    const localePaths = locales.map(locale => `/${locale}${decodedPath}`);

    // Revalidate Path on Vercel
    for (const localePath of localePaths) {
      revalidatePath(localePath);
    }

    // Revalidate Path on Akamai
    // Edgegrid instance
    const eg = new EdgeGrid(AKAMAI_CLIENT_TOKEN, AKAMAI_CLIENT_SECRET, AKAMAI_ACCESS_TOKEN, `https://${AKAMAI_HOST}`);
    const authorized = eg.auth({
      path: AKAMAI_PATH,
      method: 'POST',
      body: { objects: localePaths.map(localePath => `${SESSION_HOSTNAME}${localePath}`) },
    });

    const { detail, purgeId } = await new Promise<{ detail: string; purgeId: string }>(resolve => {
      authorized.send((error, response, body) => {
        if (error || (response?.status && response?.status >= 400) || !body) {
          throw new Error('Akamai revalidation failed');
        }

        const { detail, purgeId } = JSON.parse(body);

        resolve({ detail, purgeId });
      });
    });

    log.trace({
      route: '/api/revalidate',
      method: 'revalidate',
      detail,
      purgeId,
    });

    return new Response(JSON.stringify({ status: 200, detail, purgeId }, null, 2), { status: 200 });
  } catch (error: unknown) {
    log.error(error);
    return new Response('An error occurred', { status: 500 });
  }
}
