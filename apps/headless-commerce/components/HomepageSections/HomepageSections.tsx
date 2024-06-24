import DevelopmentWarningBlock from '@susu/headless-commerce/components/DevelepmentWarningBlock/DevelepmentWarningBlock';
import ArticleCarouselBlock from '@susu/headless-commerce/components/HomepageSections/ArticleCarouselBlock/ArticleCarouselBlock';
import CampaignCollectionBlock from '@susu/headless-commerce/components/HomepageSections/CampaignCollectionBlock/CampaignCollectionBlock';
import HeroBannerWithLinksBlock from '@susu/headless-commerce/components/HomepageSections/HeroBannerWithLinksBlock/HeroBannerWithLinksBlock';
import ImageCarouselBlock from '@susu/headless-commerce/components/HomepageSections/ImageCarouselBlock/ImageCarouselBlock';
import StoryboardBlock from '@susu/headless-commerce/components/HomepageSections/StoryboardBlock/StoryboardBlock';
import type { Locale } from '@susu/headless-commerce/config/locale';
import type { HomepageContentContextValue } from '@susu/headless-commerce/contexts/homepageContent';
import type { HomepageCampaignSectionsItem } from '@susu/headless-commerce/gql/generated/graphql';
import type { PageType } from '@susu/headless-commerce/types/PageType';
import classNames from 'classnames';

import HeroBannerBlock from './HeroBannerBlock/HeroBannerBlock';
import styles from './HomepageSections.module.scss';

const parallaxSections = ['StoryboardBanner'];

export interface HomepageBaseSection {
  __typename: HomepageCampaignSectionsItem['__typename'];
  sys: {
    id: string;
  };
}

export type PageSectionProps = {
  type?: HomepageCampaignSectionsItem['__typename'];
  id: string;
  pageType: PageType;
  locale: Locale;
};

export type HomepageSectionsProps = {
  homepageContent: HomepageContentContextValue;
  locale: Locale;
};

export default function HomepageSections({ homepageContent, locale }: HomepageSectionsProps) {
  return (
    <>
      {homepageContent.sections.map(section => {
        const { __typename, id, query } = section;

        const isParallax = parallaxSections.includes(__typename);
        const heroBannerWithLinksClasses = classNames(
          styles['section'],
          { [styles['section__parallax']]: isParallax },
          'homepage-sections--hero-banner',
        );
        const homepageSectionClasses = classNames(styles['section'], { [styles['section__parallax']]: isParallax });
        const imageCarouselContainerClasses = classNames(styles['homepage-section--image-carousel']);

        switch (__typename) {
          case 'ArticleCarrousel':
            return (
              <div key={id} className={homepageSectionClasses}>
                <ArticleCarouselBlock query={query} locale={locale} />
              </div>
            );

          case 'CampaignCollectionBlock':
            return (
              <div key={id} className={homepageSectionClasses}>
                <CampaignCollectionBlock query={query} locale={locale} />
              </div>
            );

          case 'HeroBanner':
            return (
              <div key={id} className={homepageSectionClasses}>
                <HeroBannerBlock query={query} locale={locale} />
              </div>
            );

          case 'HeroBannerWithLinks':
            return (
              <div key={id} className={heroBannerWithLinksClasses}>
                <HeroBannerWithLinksBlock query={query} locale={locale} />
              </div>
            );

          case 'ImageCarrouselContainer':
            return (
              <div key={id} className={`${homepageSectionClasses} ${imageCarouselContainerClasses}`}>
                <ImageCarouselBlock query={query} locale={locale} />
              </div>
            );

          case 'StoryboardBanner':
            return (
              <div key={id} className={homepageSectionClasses}>
                <StoryboardBlock query={query} locale={locale} />
              </div>
            );

          default:
            return (
              <DevelopmentWarningBlock
                key={id}
                warning={`Missing mapping for contentType ${__typename} -- ID: ${id}`}
              />
            );
        }
      })}
    </>
  );
}
