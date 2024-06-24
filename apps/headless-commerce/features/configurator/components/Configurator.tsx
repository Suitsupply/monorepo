import type { Locale } from '@susu/headless-commerce/config/locale';
import type { ConfiguratorPreload } from '@susu/headless-commerce/features/configurator/components/ClientConfigurator';
import ClientConfigurator from '@susu/headless-commerce/features/configurator/components/ClientConfigurator';
import { ConfiguratorProvider } from '@susu/headless-commerce/features/configurator/signals';
import { getCampaignIds } from '@susu/headless-commerce/features/configurator/utils/campaignIds';
import type { LayerImageProps } from '@susu/headless-commerce/features/configurator/utils/layerImage';
import { adjustLayeredTransform, getImageUrl } from '@susu/headless-commerce/features/configurator/utils/layerImage';
import { getAllIds } from '@susu/headless-commerce/features/configurator/utils/productIds';
import { CommerceCampaignPromotionDocument } from '@susu/headless-commerce/gql/generated/commerceCampaignPromotion.documentNode';
import type {
  CommerceCampaignPromotionQuery,
  CommerceCampaignPromotionQueryVariables,
} from '@susu/headless-commerce/gql/generated/commerceCampaignPromotion.operation';
import { CommerceProductAvailabilityDocument } from '@susu/headless-commerce/gql/generated/commerceProductAvailability.documentNode';
import type {
  CommerceProductAvailabilityQuery,
  CommerceProductAvailabilityQueryVariables,
} from '@susu/headless-commerce/gql/generated/commerceProductAvailability.operation';
import type { BlackTieConfiguratorConfiguratorStepsItem } from '@susu/headless-commerce/gql/generated/graphql';
import { countries } from '@susu/headless-commerce/utils/configuration/country';
import { createServerComponentURQLClient } from '@susu/headless-commerce/utils/graphql/server';
import { convertLocaleToCommerceGraphQLFormat, getCountryCode } from '@susu/headless-commerce/utils/localeUtils';
import log from '@susu/headless-commerce/utils/log';
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

  try {
    const availabilityQuery = await getClient().query<
      CommerceProductAvailabilityQuery,
      CommerceProductAvailabilityQueryVariables
    >(
      CommerceProductAvailabilityDocument,
      {
        pids: getAllIds(configuratorSteps, preload?.color || 'black'),
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

    const availabilityData = availabilityQuery.data;
    if (!availabilityData) {
      throw new Error('No data returned from availability query');
    }

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
