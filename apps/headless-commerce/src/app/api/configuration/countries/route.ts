import { countries } from '@headless-commerce/utils/configuration/country';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(countries, {
    status: 200,
    headers: {
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
