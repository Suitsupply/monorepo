import CardCarouselContainerSection from '@susu/headless-commerce/components/CMSPageSections/CardCarouselContainerSection/CardCarouselContainerSection';
import ContentPageHeroBannerSection from '@susu/headless-commerce/components/CMSPageSections/ContentPageHeroBannerSection/ContentPageHeroBannerSection';
import FaqAccordionSection from '@susu/headless-commerce/components/CMSPageSections/FaqAccordionSection/FaqAccordionSection';
import JournalCenterContentSection from '@susu/headless-commerce/components/CMSPageSections/JournalCenterContentSection/JournalCenterContentSection';
import QuoteSliderBannerSection from '@susu/headless-commerce/components/CMSPageSections/QuoteSliderBannerSection/QuoteSliderBannerSection';
import ShopCollectionBlockSection from '@susu/headless-commerce/components/CMSPageSections/ShopCollectionBlockSection/ShopCollectionBlockSection';
import StickyButtonContainerSection from '@susu/headless-commerce/components/CMSPageSections/StickyButtonContainerSection/StickyButtonContainerSection';
import TextAndButtonBannerSection from '@susu/headless-commerce/components/CMSPageSections/TextAndButtonBannerSection/TextAndButtonBannerSection';
import TextAndImageColumnBannerSection from '@susu/headless-commerce/components/CMSPageSections/TextAndImageColumnBannerSection/TextAndImageColumnBannerSection';
import TextAndImageRowBannerSection from '@susu/headless-commerce/components/CMSPageSections/TextAndImageRowBannerSection/TextAndImageRowBannerSection';
import type { Locale } from '@susu/headless-commerce/config/locale';
import type { CMSPageContentValue } from '@susu/headless-commerce/contexts/cmsPage';

export type CMSPageSectionsProps = {
  cmsPage: CMSPageContentValue;
  slug: string;
  locale: Locale;
};

export default function CMSPageSections({ cmsPage, locale, slug }: CMSPageSectionsProps) {
  return (
    <>
      {cmsPage?.sections.map(section => {
        switch (section.__typename) {
          case 'CardCarouselContainer':
            return <CardCarouselContainerSection key={section.id} query={section.query} automationPageId={slug} />;

          case 'ContentPageHeroBanner':
            return (
              <ContentPageHeroBannerSection
                automationPageId={slug}
                key={section.id}
                locale={locale}
                query={section.query}
              />
            );

          case 'FaqAccordion':
            return <FaqAccordionSection key={section.id} query={section.query} />;

          case 'JournalCenterContentBlock':
            return (
              <JournalCenterContentSection
                automationPageId={slug}
                key={section.id}
                locale={locale}
                query={section.query}
              />
            );

          case 'QuoteSliderBanner':
            return <QuoteSliderBannerSection key={section.id} query={section.query} automationPageId={slug} />;

          case 'ShopCollectionBlock':
            return (
              <ShopCollectionBlockSection
                automationPageId={slug}
                commerceQuery={section.commerceQuery}
                contentfulQuery={section.contentfulQuery}
                key={section.id}
                locale={locale}
              />
            );

          case 'StickyButton':
            return <StickyButtonContainerSection key={section.id} query={section.query} automationPageId={slug} />;

          case 'TextAndButtonBanner':
            return (
              <TextAndButtonBannerSection
                automationPageId={slug}
                key={section.id}
                locale={locale}
                query={section.query}
              />
            );

          case 'TextAndImageColumnBanner':
            return (
              <TextAndImageColumnBannerSection
                automationPageId={slug}
                key={section.id}
                locale={locale}
                textAndButtonBannerQuery={section.textAndButtonBannerQuery}
                textAndImageColumnBannerQuery={section.textAndImageColumnBannerQuery}
              />
            );

          case 'TextAndImageRowBanner':
            return <TextAndImageRowBannerSection key={section.id} query={section.query} automationPageId={slug} />;

          // Didn't need a default case because we used all possible properties.
          // default:
        }
      })}
    </>
  );
}
