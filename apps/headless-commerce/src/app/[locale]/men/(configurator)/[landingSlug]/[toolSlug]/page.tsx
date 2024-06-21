import FullscreenLayout from '@headless-commerce/components/Layouts/FullscreenLayout/FullscreenLayout';
import { baseURL } from '@headless-commerce/config/config';
import type { Locale } from '@headless-commerce/config/locale';
import headerContext from '@headless-commerce/contexts/header';
import { CMSHeaderType } from '@headless-commerce/contexts/header/types';
import tagsContext from '@headless-commerce/contexts/tags';
import type { ConfiguratorPreload } from '@headless-commerce/features/configurator/components/ClientConfigurator';
import Configurator from '@headless-commerce/features/configurator/components/Configurator';
import { parseQueryStringProductIds } from '@headless-commerce/features/configurator/utils/parseQueryStringProductIds';
import { getDefaultProductIds } from '@headless-commerce/features/configurator/utils/productIds';
import { ConfiguratorContentDocument } from '@headless-commerce/gql/generated/configuratorContent.documentNode';
import type {
  ConfiguratorContentQuery,
  ConfiguratorContentQueryVariables,
} from '@headless-commerce/gql/generated/configuratorContent.operation';
import type {
  BlackTieConfigurator,
  BlackTieConfiguratorConfiguratorStepsItem,
  SeoMetadata,
} from '@headless-commerce/gql/generated/graphql';
import { countries } from '@headless-commerce/utils/configuration/country';
import { createServerComponentURQLClient } from '@headless-commerce/utils/graphql/server';
import { getCountryCode, getLanguageFromLocale } from '@headless-commerce/utils/localeUtils';
import log from '@headless-commerce/utils/log';
import { buildMetadata } from '@headless-commerce/utils/metadata';
import { registerUrql } from '@urql/next/rsc';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export type ConfiguratorToolPageProps = {
  searchParams: {
    [key: string]: string | Array<string> | undefined;
  };
  params: {
    locale: Locale;
    toolSlug: string;
    landingSlug: string;
  };
};

const { getClient } = registerUrql(createServerComponentURQLClient);

export const fetchCache = 'force-no-store';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';

export async function generateMetadata({
  params: { locale, landingSlug, toolSlug },
}: Readonly<ConfiguratorToolPageProps>): Promise<Metadata> {
  const countryCode = getCountryCode(locale);
  const country = countries[countryCode];
  const tags = await tagsContext(countryCode);

  const { data, error } = await getClient().query<ConfiguratorContentQuery, ConfiguratorContentQueryVariables>(
    ConfiguratorContentDocument,
    {
      slug: toolSlug,
      locale: getLanguageFromLocale(locale),
      preview: null,
      tags,
    },
  );

  if (error) {
    throw error;
  }

  return buildMetadata({
    canonicalURL: `${baseURL()}/${locale}/men/${landingSlug}/${toolSlug}`,
    countryName: country.name,
    locale,
    seoMetadata: data?.blackTieConfiguratorCollection?.items?.[0]?.seoMetadata as SeoMetadata,
  });
}

export default async function ConfiguratorToolPage({ searchParams, params }: Readonly<ConfiguratorToolPageProps>) {
  try {
    const { locale, toolSlug } = params;
    const countryCode = getCountryCode(locale);
    const tags = await tagsContext(countryCode);

    const [header, configuratorQuery] = await Promise.all([
      headerContext(locale),
      (async () => {
        const configuratorQuery = await getClient().query<ConfiguratorContentQuery, ConfiguratorContentQueryVariables>(
          ConfiguratorContentDocument,
          {
            slug: toolSlug,
            locale: getLanguageFromLocale(locale),
            preview: null,
            tags,
          },
        );

        if (configuratorQuery.error) {
          throw configuratorQuery.error;
        }

        if (!configuratorQuery.data?.blackTieConfiguratorCollection?.items?.length) {
          throw new Error('No data');
        }

        return configuratorQuery;
      })(),
    ]);

    const campaignId = searchParams.campaign ? String(searchParams.campaign) : undefined;
    const productIds = searchParams.ids ? parseQueryStringProductIds(String(searchParams.ids)) : undefined;
    const step = searchParams.step ? String(searchParams.step) : undefined;
    const color = searchParams.color ? String(searchParams.color) : undefined;

    let preload;
    if (campaignId && productIds && step && color) {
      preload = {
        campaignId,
        productIds,
        step,
        color,
      } satisfies ConfiguratorPreload;
    }

    const configurator = configuratorQuery.data?.blackTieConfiguratorCollection?.items?.[0] as BlackTieConfigurator;
    const configuratorSteps = (configurator?.configuratorStepsCollection?.items ??
      []) as BlackTieConfiguratorConfiguratorStepsItem[];
    const modelId = configurator?.modelImage;
    const defaultProductIds = getDefaultProductIds(configuratorSteps);

    return (
      <FullscreenLayout
        header={header}
        tags={tags}
        locale={locale}
        headerType={CMSHeaderType.HEADER_IS_NOT_TRANSPARENT}
      >
        <Configurator
          configuratorSteps={configuratorSteps}
          modelId={String(modelId)}
          preload={preload}
          params={params}
          productIds={productIds ?? defaultProductIds}
        />
      </FullscreenLayout>
    );
  } catch (error: unknown) {
    log.error(error);
    redirect('/');
  }
}
