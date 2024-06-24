import CampaignCollectionCard from '@susu/headless-commerce/components/HomepageSections/CampaignCollectionBlock/CampaignCollectionCard/CampaignCollectionCard';
import SectionTitle from '@susu/headless-commerce/components/SectionTitle/SectionTitle';
import type { Locale } from '@susu/headless-commerce/config/locale';
import type {
  CampaignCollectionBlockContentQuery,
  CampaignCollectionBlockContentQueryVariables,
} from '@susu/headless-commerce/gql/generated/campaignCollectionBlock.operation';
import type { ImageWithText, NavigationLink } from '@susu/headless-commerce/gql/generated/graphql';
import { countries } from '@susu/headless-commerce/utils/configuration/country';
import { getCountryCode } from '@susu/headless-commerce/utils/localeUtils';
import { generateUrlFromLinkContent } from '@susu/headless-commerce/utils/UrlGenerator';
import type { OperationResult } from 'urql';

import styles from './CampaignCollectionBlock.module.scss';

export type CampaignCollectionBlockProps = {
  locale: Locale;
  query: OperationResult<CampaignCollectionBlockContentQuery, CampaignCollectionBlockContentQueryVariables>;
};

export default function CampaignCollectionBlock({ query, locale }: Readonly<CampaignCollectionBlockProps>) {
  const countryCode = getCountryCode(locale);
  const country = countries[countryCode];
  const items = query.data?.campaignCollectionBlock?.contentCollection?.items as ImageWithText[];

  return (
    <div className={styles['campaign-collection']}>
      <SectionTitle titleText={query.data?.campaignCollectionBlock?.title} />

      <div className={styles['campaign-collection__body']}>
        {items.map(({ title, image, colorPalette, subline, link }) => {
          const card = () => ({
            title: title as string,
            subText: subline?.json?.content[0].content[0].value,
            link: generateUrlFromLinkContent(link as NavigationLink, country.siteID, locale),
            colorPalette: colorPalette as string,
            cloudinaryMobileImage: image?.cloudinaryMobileImage,
            cloudinaryTabletImage: image?.cloudinaryTabletImage,
            cloudinaryDesktopImage: image?.cloudinaryDesktopImage,
          });

          return <CampaignCollectionCard key={title} card={card()} />;
        })}
      </div>
    </div>
  );
}
