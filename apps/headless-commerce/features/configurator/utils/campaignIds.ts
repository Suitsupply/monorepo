import { getStepOptions } from '@susu/headless-commerce/features/configurator/utils/options';
import type { BlackTieConfiguratorConfiguratorStepsItem } from '@susu/headless-commerce/gql/generated/graphql';

export const getCampaignIds = (configuratorSteps: BlackTieConfiguratorConfiguratorStepsItem[], color: string) => {
  const campaignIds: Array<string> = [];
  configuratorSteps.forEach(step => {
    const stepOptions = getStepOptions(step, color);
    stepOptions.forEach(option => {
      if (option.__typename === 'TuxedoStyle' && option.product?.campaign) {
        campaignIds.push(option.product.campaign);
      }
    });
  });
  return campaignIds;
};
