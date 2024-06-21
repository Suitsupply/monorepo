import CMSPageSections from '@headless-commerce/components/CMSPageSections/CMSPageSections';
import BaseLayout from '@headless-commerce/components/Layouts/BaseLayout/BaseLayout';
import { baseURL } from '@headless-commerce/config/config';
import { type Locale, locales } from '@headless-commerce/config/locale';
import cmsPageContext from '@headless-commerce/contexts/cmsPage';
import footerContext from '@headless-commerce/contexts/footer';
import headerContext from '@headless-commerce/contexts/header';
import { CMSHeaderType } from '@headless-commerce/contexts/header/types';
import tagsContext from '@headless-commerce/contexts/tags';
import type { SeoMetadata } from '@headless-commerce/gql/generated/graphql';
import { SeoMetadataContentDocument } from '@headless-commerce/gql/generated/seoMetadata.documentNode';
import type {
  SeoMetadataContentQuery,
  SeoMetadataContentQueryVariables,
} from '@headless-commerce/gql/generated/seoMetadata.operation';
import { countries } from '@headless-commerce/utils/configuration/country';
import { createServerComponentURQLClient } from '@headless-commerce/utils/graphql/server';
import { getCountryCode, getLanguageFromLocale } from '@headless-commerce/utils/localeUtils';
import log from '@headless-commerce/utils/log';
import { buildMetadata } from '@headless-commerce/utils/metadata';
import { registerUrql } from '@urql/next/rsc';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export type ConfiguratorLandingPageProps = {
  params: {
    locale: Locale;
    landingSlug: string;
  };
};

const { getClient } = registerUrql(createServerComponentURQLClient);

export const fetchCache = 'force-no-store';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';

export async function generateStaticParams(): Promise<Array<ConfiguratorLandingPageProps['params']>> {
  const slugs = ['black-tie-package'];
  const params: ConfiguratorLandingPageProps['params'][] = [];

  locales.forEach(locale => {
    slugs.forEach(landingSlug => {
      params.push({
        locale,
        landingSlug,
      });
    });
  });

  return params;
}

export async function generateMetadata({
  params: { locale, landingSlug },
}: ConfiguratorLandingPageProps): Promise<Metadata> {
  const countryCode = getCountryCode(locale);
  const cmsPage = await cmsPageContext(locale, landingSlug);
  const country = countries[countryCode];

  const seoMetadata = cmsPage?.cmsPageContentQuery.data?.cmsPageCollection?.items[0]?.seoMetadata;
  const id = String(seoMetadata?.sys.id);

  const { error, data } = await getClient().query<SeoMetadataContentQuery, SeoMetadataContentQueryVariables>(
    SeoMetadataContentDocument,
    {
      id,
      locale: getLanguageFromLocale(locale),
      preview: null,
    },
  );

  if (error) {
    throw error;
  }

  return buildMetadata({
    canonicalURL: `${baseURL()}/${locale}/${landingSlug}`,
    countryName: country.name,
    locale,
    seoMetadata: data?.seoMetadata as SeoMetadata,
  });
}

export default async function ConfiguratorLandingPage({
  params: { landingSlug, locale },
}: Readonly<ConfiguratorLandingPageProps>) {
  try {
    const countryCode = getCountryCode(locale);

    const [cmsPage, footer, tags, header] = await Promise.all([
      cmsPageContext(locale, landingSlug),
      footerContext(locale),
      tagsContext(countryCode),
      headerContext(locale),
    ]);

    const headerType = (cmsPage?.cmsPageContentQuery?.data?.cmsPageCollection?.items[0]?.typeOfBanner ??
      CMSHeaderType.HEADER_IS_TRANSPARENT) as CMSHeaderType;

    return (
      <BaseLayout footer={footer} header={header} tags={tags} headerType={headerType} locale={locale}>
        <CMSPageSections slug={landingSlug} cmsPage={cmsPage} locale={locale} />
      </BaseLayout>
    );
  } catch (error: unknown) {
    log.error(error);
    redirect('/');
  }
}
