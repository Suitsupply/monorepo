import ClientArticleCarouselBlock from '@headless-commerce/components/HomepageSections/ArticleCarouselBlock/ClientArticleCarouselBlock';
import RelatedArticle from '@headless-commerce/components/HomepageSections/ArticleCarouselBlock/RelatedArticle/RelatedArticle';
import SectionTitle from '@headless-commerce/components/SectionTitle/SectionTitle';
import type { Locale } from '@headless-commerce/config/locale';
import type {
  ArticleCarrouselContentQuery,
  ArticleCarrouselContentQueryVariables,
} from '@headless-commerce/gql/generated/articleCarrousel.operation';
import type { JournalPage, MediaWrapperV2, NavigationLink } from '@headless-commerce/gql/generated/graphql';
import { countries } from '@headless-commerce/utils/configuration/country';
import { getCountryCode } from '@headless-commerce/utils/localeUtils';
import type { PromotionEvents } from '@headless-commerce/utils/tracking/tracking';
import { generateUrlFromLinkContent } from '@headless-commerce/utils/UrlGenerator';
import type { OperationResult } from 'urql';

import styles from './ArticleCarouselBlock.module.scss';

export type ArticleCarouselBlockProps = {
  locale: Locale;
  query: OperationResult<ArticleCarrouselContentQuery, ArticleCarrouselContentQueryVariables>;
};

export default function ArticleCarousel({ locale, query }: Readonly<ArticleCarouselBlockProps>) {
  const countryCode = getCountryCode(locale);
  const country = countries[countryCode];
  const items = query.data?.articleCarrousel?.contentCollection?.items as JournalPage[];

  return (
    <div className={styles['article-carousel']}>
      <SectionTitle
        titleText={query.data?.articleCarrousel?.title}
        titleLink={generateUrlFromLinkContent(
          query.data?.articleCarrousel?.cta?.link as NavigationLink,
          country.siteID,
          locale,
        )}
        titleLinkText={query.data?.articleCarrousel?.cta?.title}
      />
      <div className={styles['article-carousel__body']}>
        <ClientArticleCarouselBlock>
          {items.map(({ thumbnailImage, title, slug, description, link, promotionEvents }) => {
            return (
              <RelatedArticle
                key={slug}
                title={title ?? ''}
                description={description ?? ''}
                url={generateUrlFromLinkContent(link as NavigationLink, country.siteID, locale)}
                promotionEvents={promotionEvents as PromotionEvents}
                thumbnailImage={thumbnailImage as MediaWrapperV2}
                locale={locale}
                country={country}
              />
            );
          })}
        </ClientArticleCarouselBlock>
      </div>
    </div>
  );
}
