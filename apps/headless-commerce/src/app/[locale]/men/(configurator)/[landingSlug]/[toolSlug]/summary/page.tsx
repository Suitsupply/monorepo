/* eslint-disable sonarjs/no-duplicate-string */
import NoFooterLayout from '@headless-commerce/components/Layouts/NoFooterLayout/NoFooterLayout';
import { baseURL } from '@headless-commerce/config/config';
import type { Locale } from '@headless-commerce/config/locale';
import headerContext from '@headless-commerce/contexts/header';
import { CMSHeaderType } from '@headless-commerce/contexts/header/types';
import tagsContext from '@headless-commerce/contexts/tags';
import ClientConfiguratorSummary from '@headless-commerce/features/configurator/summary/components/ClientConfiguratorSummary';
import type { ConfiguratorProduct } from '@headless-commerce/features/configurator/summary/components/types';
import { ConfiguratorSummaryProvider } from '@headless-commerce/features/configurator/summary/contexts/ConfiguratorSummaryContext';
import type { LayerImageProps } from '@headless-commerce/features/configurator/utils/layerImage';
import { adjustLayeredTransform, getImageUrl } from '@headless-commerce/features/configurator/utils/layerImage';
import { parseQueryStringProductIds } from '@headless-commerce/features/configurator/utils/parseQueryStringProductIds';
import { getAllIds } from '@headless-commerce/features/configurator/utils/productIds';
import { CommerceCampaignPromotionDocument } from '@headless-commerce/gql/generated/commerceCampaignPromotion.documentNode';
import type {
  CommerceCampaignPromotionQuery,
  CommerceCampaignPromotionQueryVariables,
} from '@headless-commerce/gql/generated/commerceCampaignPromotion.operation';
import { CommerceGetProductsByIdsDocument } from '@headless-commerce/gql/generated/commerceGetProductsByIds.documentNode';
import type {
  CommerceGetProductsByIdsQuery,
  CommerceGetProductsByIdsQueryVariables,
} from '@headless-commerce/gql/generated/commerceGetProductsByIds.operation';
import { ConfiguratorContentDocument } from '@headless-commerce/gql/generated/configuratorContent.documentNode';
import type {
  ConfiguratorContentQuery,
  ConfiguratorContentQueryVariables,
} from '@headless-commerce/gql/generated/configuratorContent.operation';
import type {
  BlackTieConfiguratorConfiguratorStepsItem,
  Product,
  SeoMetadata,
} from '@headless-commerce/gql/generated/graphql';
import { chunkArray, includesAll } from '@headless-commerce/utils/array';
import { countries } from '@headless-commerce/utils/configuration/country';
import { createServerComponentURQLClient } from '@headless-commerce/utils/graphql/server';
import {
  convertLocaleToCommerceGraphQLFormat,
  getCountryCode,
  getLanguageFromLocale,
} from '@headless-commerce/utils/localeUtils';
import log from '@headless-commerce/utils/log';
import { buildMetadata } from '@headless-commerce/utils/metadata';
import { registerUrql } from '@urql/next/rsc';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export type BlackTieLandingPageProps = {
  searchParams: {
    [key: string]: string | Array<string> | undefined;
  };
  params: {
    locale: Locale;
    landingSlug: string;
    toolSlug: string;
  };
};

const { getClient } = registerUrql(createServerComponentURQLClient);

export const fetchCache = 'force-no-store';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';

export async function generateMetadata({
  params: { locale, landingSlug, toolSlug },
}: BlackTieLandingPageProps): Promise<Metadata> {
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
    canonicalURL: `${baseURL()}/${locale}/men/${landingSlug}/${toolSlug}/summary`,
    countryName: country.name,
    locale,
    seoMetadata: data?.blackTieConfiguratorCollection?.items[0]?.seoMetadata as SeoMetadata,
  });
}

const getLayeredImageUrl = async ({
  modelId,
  productIds,
  siteId,
  locale,
}: LayerImageProps): Promise<string | undefined> => {
  try {
    return adjustLayeredTransform(
      await getImageUrl({
        modelId,
        productIds,
        siteId,
        locale,
      }),
    );
  } catch (error) {
    log.error(error);
    return undefined;
  }
};

export default async function BlackTieLandingPage({
  searchParams,
  params: { locale, landingSlug, toolSlug },
}: Readonly<BlackTieLandingPageProps>) {
  try {
    const countryCode = getCountryCode(locale);
    const country = countries[countryCode];
    const tags = await tagsContext(countryCode);
    const campaignId = String(searchParams.campaign);
    const headerType = CMSHeaderType.HEADER_IS_NOT_TRANSPARENT;

    const color = String(searchParams.color);
    if (color === '') {
      throw new Error('No color');
    }

    let splitProductIds: Array<string> = [];
    splitProductIds = parseQueryStringProductIds(String(searchParams.ids));
    if (!splitProductIds.length) {
      throw new Error('No product ids');
    }

    const [header, configurator, baseProducts, promotionQuery] = await Promise.all([
      headerContext(locale),
      (async () => {
        const configuratorQueryTemp = await getClient().query<
          ConfiguratorContentQuery,
          ConfiguratorContentQueryVariables
        >(ConfiguratorContentDocument, {
          preview: null,
          locale: getLanguageFromLocale(locale),
          slug: toolSlug,
          tags,
        });

        if (configuratorQueryTemp.error) {
          throw configuratorQueryTemp.error;
        }

        if (!configuratorQueryTemp.data?.blackTieConfiguratorCollection?.items.length) {
          throw new Error('No configurator options found');
        }

        return configuratorQueryTemp.data?.blackTieConfiguratorCollection?.items[0];
      })(),
      (async () => {
        const pidsChunks = chunkArray(splitProductIds, 20);
        const productChunks: Array<Array<Product>> = await Promise.all(
          pidsChunks.map(async pids => {
            const productQuery = await getClient().query<
              CommerceGetProductsByIdsQuery,
              CommerceGetProductsByIdsQueryVariables
            >(
              CommerceGetProductsByIdsDocument,
              {
                pids,
                imgTransformationType: 'lb_summary_page',
                siteInfo: {
                  currency: country.ecommerce.currencyCode,
                  siteId: country.siteID,
                  locale: convertLocaleToCommerceGraphQLFormat(locale),
                },
              },
              {
                clientName: 'commerce',
              },
            );

            if (productQuery.error) {
              throw productQuery.error;
            }

            if (!productQuery.data?.getProductsByIds?.length) {
              throw new Error('ProductNotFound');
            }
            return (productQuery.data?.getProductsByIds || []) as Array<Product>;
          }),
        );

        return productChunks.flat();
      })(),
      (async () => {
        const commerceCampaignQueryTemp = await getClient().query<
          CommerceCampaignPromotionQuery,
          CommerceCampaignPromotionQueryVariables
        >(
          CommerceCampaignPromotionDocument,
          {
            campaignId,
            siteInfo: {
              currency: country.ecommerce.currencyCode,
              siteId: country.siteID,
              locale: getLanguageFromLocale(locale),
            },
          },
          {
            clientName: 'commerce',
          },
        );

        if (commerceCampaignQueryTemp.error) {
          throw commerceCampaignQueryTemp.error;
        }

        if (!commerceCampaignQueryTemp.data?.promotionByCampaignId) {
          throw new Error('PromotionNotFound');
        }
        return commerceCampaignQueryTemp;
      })(),
    ]);

    const configuratorSteps = configurator?.configuratorStepsCollection
      ?.items as Array<BlackTieConfiguratorConfiguratorStepsItem>;
    if (!configuratorSteps?.length) {
      throw new Error('No items');
    }

    const configuratorProductIds = getAllIds(configuratorSteps, color);
    if (!includesAll(configuratorProductIds, splitProductIds)) {
      throw new Error('Invalid ProductId');
    }

    const productIds = (baseProducts || []).map(product => String(product?.id));
    if (!includesAll(productIds, splitProductIds)) {
      throw new Error('ProductNotFound');
    }

    const products = (baseProducts || []).map(product => {
      const categoryStep =
        configuratorSteps.find(
          step =>
            step.__typename === 'ProductStepConfigurator' &&
            step.productOptionsCollection?.items.find(item => item?.productId === product?.id),
        )?.categoryStep ?? configuratorSteps[0].categoryStep;
      return {
        ...product,
        categoryStep,
      };
    }) as Array<ConfiguratorProduct>;

    const imageSrc = await getLayeredImageUrl({
      modelId: 'model_3',
      productIds: productIds,
      siteId: country.siteID,
      locale,
    });

    return (
      <NoFooterLayout header={header} tags={tags} headerType={headerType} locale={locale}>
        <ConfiguratorSummaryProvider products={products} color={color}>
          <ClientConfiguratorSummary
            imageSrc={imageSrc}
            campaignId={campaignId}
            discountPrice={promotionQuery.data?.promotionByCampaignId?.discountPrice || 0}
            landingSlug={landingSlug}
            price={promotionQuery.data?.promotionByCampaignId?.price || 0}
            products={products}
            toolSlug={toolSlug}
          />
        </ConfiguratorSummaryProvider>
      </NoFooterLayout>
    );
  } catch (error: unknown) {
    log.error(error);
    redirect(`/${locale}/men/${landingSlug}/${toolSlug}?app=headless`);
  }
}
