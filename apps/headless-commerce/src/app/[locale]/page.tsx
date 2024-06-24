import HomepageSections from '@headless-commerce/components/HomepageSections/HomepageSections';
import BaseLayout from '@headless-commerce/components/Layouts/BaseLayout/BaseLayout';
import { baseURL } from '@headless-commerce/config/config';
import { locales, type Locale } from '@headless-commerce/config/locale';
import footerContext from '@headless-commerce/contexts/footer';
import headerContext from '@headless-commerce/contexts/header';
import { CMSHeaderType } from '@headless-commerce/contexts/header/types';
import homepageContentContext from '@headless-commerce/contexts/homepageContent';
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
import { buildMetadata } from '@headless-commerce/utils/metadata';
import { ClientComponent } from '@susu/providing-application/src/app/components/ClientComponent';
import { ServerComponent } from '@susu/providing-application/src/app/components/ServerComponent';
import { registerUrql } from '@urql/next/rsc';
import type { Metadata } from 'next';

export type IndexPageProps = {
  params: {
    locale: Locale;
  };
};

export type SEOMetadata = {
  keywords: string;
  pageDescription: string;
};

const { getClient } = registerUrql(createServerComponentURQLClient);

export const dynamicParams = false;
export const fetchCache = 'force-no-store';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';

export async function generateStaticParams(): Promise<Array<IndexPageProps['params']>> {
  return await Promise.all(
    locales.map(async locale => {
      return {
        locale,
      };
    }),
  );
}

export async function generateMetadata({ params: { locale } }: IndexPageProps): Promise<Metadata> {
  const countryCode = getCountryCode(locale);
  const country = countries[countryCode];
  const homepageContent = await homepageContentContext(locale);

  const seoMetadata = homepageContent.query.data?.homepageCollection?.items[0]?.seoMetadata;
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
    canonicalURL: `${baseURL()}/${locale}`,
    countryName: country.name,
    locale,
    seoMetadata: data?.seoMetadata as SeoMetadata,
  });
}

export default async function IndexPage({ params: { locale } }: Readonly<IndexPageProps>) {
  const countryCode = getCountryCode(locale);

  const [homepageContent, footer, tags, header] = await Promise.all([
    homepageContentContext(locale),
    footerContext(locale),
    tagsContext(countryCode),
    headerContext(locale),
  ]);

  return (
    <BaseLayout
      footer={footer}
      tags={tags}
      headerType={CMSHeaderType.HEADER_IS_TRANSPARENT}
      locale={locale}
      header={header}
    >
      <ServerComponent>
        <ClientComponent />
      </ServerComponent>

      <HomepageSections homepageContent={homepageContent} locale={locale} />
    </BaseLayout>
  );
}
