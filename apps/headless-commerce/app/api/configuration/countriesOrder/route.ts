import { get } from '@susu/headless-commerce/utils/configuration';
import { NextResponse } from 'next/server';

export const GET = async () =>
  NextResponse.json(await get('countriesOrder'), {
    status: 200,
    headers: {
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
