import { getRequestConfig } from 'next-intl/server';

export type Result = ReturnType<typeof getRequestConfig>

const xyz: Result = getRequestConfig(async ({ locale }: { locale: string }) => {
  return {
    messages: (await import(`./src/messages/${locale}.json`)).default,
  };
});

export default xyz;
