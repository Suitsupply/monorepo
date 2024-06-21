import type { Locale } from '@headless-commerce/config/locale';
import type { ConfiguratorPreload } from '@headless-commerce/features/configurator/components/ClientConfigurator';
import ClientConfigurator from '@headless-commerce/features/configurator/components/ClientConfigurator';
import { ConfiguratorProvider } from '@headless-commerce/features/configurator/signals';
import { getCampaignIds } from '@headless-commerce/features/configurator/utils/campaignIds';
import type { LayerImageProps } from '@headless-commerce/features/configurator/utils/layerImage';
import { adjustLayeredTransform, getImageUrl } from '@headless-commerce/features/configurator/utils/layerImage';
import { getAllIds } from '@headless-commerce/features/configurator/utils/productIds';
import { CommerceCampaignPromotionDocument } from '@headless-commerce/gql/generated/commerceCampaignPromotion.documentNode';
import type {
  CommerceCampaignPromotionQuery,
  CommerceCampaignPromotionQueryVariables,
} from '@headless-commerce/gql/generated/commerceCampaignPromotion.operation';
import { CommerceProductAvailabilityDocument } from '@headless-commerce/gql/generated/commerceProductAvailability.documentNode';
import type {
  CommerceProductAvailabilityQuery,
  CommerceProductAvailabilityQueryVariables,
} from '@headless-commerce/gql/generated/commerceProductAvailability.operation';
import type {
  AvailabilityStatus,
  BlackTieConfiguratorConfiguratorStepsItem,
  Product,
} from '@headless-commerce/gql/generated/graphql';
import { chunkArray } from '@headless-commerce/utils/array';
import { countries } from '@headless-commerce/utils/configuration/country';
import { createServerComponentURQLClient } from '@headless-commerce/utils/graphql/server';
import { convertLocaleToCommerceGraphQLFormat, getCountryCode } from '@headless-commerce/utils/localeUtils';
import log from '@headless-commerce/utils/log';
import { isNotUndefined } from '@headless-commerce/utils/undefined';
import { registerUrql } from '@urql/next/rsc';
import { redirect } from 'next/navigation';

const { getClient } = registerUrql(createServerComponentURQLClient);

export type ConfiguratorProps = {
  configuratorSteps: BlackTieConfiguratorConfiguratorStepsItem[];
  modelId: string;
  params: {
    locale: Locale;
    landingSlug: string;
    toolSlug: string;
  };
  preload?: ConfiguratorPreload;
  productIds: Array<string>;
};

const getLayeredImageUrl = async ({
  modelId,
  productIds,
  siteId,
  locale,
}: LayerImageProps & { scale: number }): Promise<string | undefined> => {
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

export default async function Configurator({
  configuratorSteps,
  modelId,
  params,
  preload,
  productIds,
}: Readonly<ConfiguratorProps>) {
  const { locale } = params;
  const countryCode = getCountryCode(locale);
  const country = countries[countryCode];
  const pidsChunks = chunkArray(getAllIds(configuratorSteps, preload?.color || 'black'), 20);

  try {
    const availabilityChunks: Array<Array<{ id: string; availabilityStatus: AvailabilityStatus }> | undefined> =
      await Promise.all(
        pidsChunks.map(
          async (
            pids: string[],
          ): Promise<Array<{ id: string; availabilityStatus: AvailabilityStatus }> | undefined> => {
            const availabilityQuery = await getClient().query<
              CommerceProductAvailabilityQuery,
              CommerceProductAvailabilityQueryVariables
            >(
              CommerceProductAvailabilityDocument,
              {
                pids,
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

            if (availabilityQuery.error) {
              throw availabilityQuery.error;
            }

            const chunkData = availabilityQuery.data;

            if (!chunkData) {
              throw new Error('No data returned from availability query');
            }

            return chunkData?.getProductsByIds?.map(product => ({
              availabilityStatus: product?.availabilityStatus as AvailabilityStatus,
              id: (product as Product).id,
            }));
          },
        ),
      );

    const availabilityData = availabilityChunks.filter(isNotUndefined).flat();
    const campaignIds = getCampaignIds(configuratorSteps, 'black');

    const campaignPromotionQueryData = await Promise.all(
      campaignIds.map(async campaignId => {
        const query = await getClient().query<CommerceCampaignPromotionQuery, CommerceCampaignPromotionQueryVariables>(
          CommerceCampaignPromotionDocument,
          {
            campaignId: String(campaignId),
            siteInfo: {
              siteId: country.siteID,
              locale: convertLocaleToCommerceGraphQLFormat(locale),
              currency: country.ecommerce.currencyCode,
            },
          },
          {
            clientName: 'commerce',
          },
        );

        if (query.error) {
          throw query.error;
        }

        if (!query.data) {
          throw new Error('No data returned from campaign promotion query');
        }

        return query.data;
      }),
    );

    const campaignPrices = campaignPromotionQueryData.map((data, index) => {
      return {
        id: campaignIds[index],
        discounted: Number(data.promotionByCampaignId?.discountPrice),
        original: Number(data.promotionByCampaignId?.price),
      };
    });

    const currentStepData = configuratorSteps[0];
    const scale =
      currentStepData?.imageType === 'layered-image' && currentStepData?.previewImageZoom
        ? parseInt(currentStepData.previewImageZoom, 10) / 100
        : 1;

    const imageURL = await getLayeredImageUrl({
      modelId,
      productIds,
      siteId: country.siteID,
      locale,
      scale,
    });

    return (
      <ConfiguratorProvider>
        <ClientConfigurator
          configuratorSteps={configuratorSteps}
          country={country}
          imageURL={imageURL}
          modelId={modelId}
          params={params}
          preload={preload}
          productIds={productIds}
          productAvailability={availabilityData}
          campaignIds={campaignIds}
          campaignPromotions={campaignPromotionQueryData}
          campaignPrices={campaignPrices}
        />
      </ConfiguratorProvider>
    );
  } catch (error: unknown) {
    log.error(error);
    redirect('/');
  }
}
