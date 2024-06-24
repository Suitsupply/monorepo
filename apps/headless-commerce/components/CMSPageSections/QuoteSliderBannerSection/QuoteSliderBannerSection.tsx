import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type {
  QuoteSliderBannerQuery,
  QuoteSliderBannerQueryVariables,
} from '@susu/headless-commerce/gql/generated/quoteSliderBanner.operation';
import { generateIdentifier } from '@susu/headless-commerce/utils/identifier';
import type { OperationResult } from 'urql';

import ClientQuoteSliderBannerSection from './ClientQuoteSliderBannerSection';
import styles from './QuoteSliderBannerSection.module.scss';

export type QuoteSliderBannerSectionProps = {
  query: OperationResult<QuoteSliderBannerQuery, QuoteSliderBannerQueryVariables>;
  automationPageId: string;
};

export default function QuoteSliderBannerSection({ query, automationPageId }: Readonly<QuoteSliderBannerSectionProps>) {
  const { quoteItemCollection } = query.data?.quoteSliderBanner ?? {};

  return (
    <div className={styles['quote-slider']} datat-testid={`${automationPageId}_quote-slider`}>
      <ClientQuoteSliderBannerSection>
        <ss-carousel
          show-controls="true"
          show-arrows="false"
          show-dots="true"
          label="QuoteSliderBanner"
          slides-to-show={1}
          slides-to-scroll={1}
          slide-gap={0}
          side-padding={0}
          start-slide={0}
          current-slide={0}
          align-dots-center-mobile="true"
          outline-inactive-dots="true"
        >
          {quoteItemCollection?.items.map(item => {
            return (
              <div
                key={generateIdentifier()}
                className={styles['susu-carousel-item']}
                datat-testid={`${automationPageId}_quote-slider_quote`}
              >
                <ss-lazy-image
                  srcset={item?.quoteTitleImage[0].secure_url}
                  src={item?.quoteTitleImage[0].url}
                  width={`${item?.quoteTitleImage[0].width}`}
                ></ss-lazy-image>
                <div>{documentToReactComponents(item?.quote?.json)}</div>
              </div>
            );
          })}
        </ss-carousel>
      </ClientQuoteSliderBannerSection>
    </div>
  );
}
