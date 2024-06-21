import CardCarouselContainerSection from '@headless-commerce/components/CMSPageSections/CardCarouselContainerSection/CardCarouselContainerSection';
import ContentPageHeroBannerSection from '@headless-commerce/components/CMSPageSections/ContentPageHeroBannerSection/ContentPageHeroBannerSection';
import FaqAccordionSection from '@headless-commerce/components/CMSPageSections/FaqAccordionSection/FaqAccordionSection';
import JournalCenterContentSection from '@headless-commerce/components/CMSPageSections/JournalCenterContentSection/JournalCenterContentSection';
import QuoteSliderBannerSection from '@headless-commerce/components/CMSPageSections/QuoteSliderBannerSection/QuoteSliderBannerSection';
import ShopCollectionBlockSection from '@headless-commerce/components/CMSPageSections/ShopCollectionBlockSection/ShopCollectionBlockSection';
import StickyButtonContainerSection from '@headless-commerce/components/CMSPageSections/StickyButtonContainerSection/StickyButtonContainerSection';
import TextAndButtonBannerSection from '@headless-commerce/components/CMSPageSections/TextAndButtonBannerSection/TextAndButtonBannerSection';
import TextAndImageColumnBannerSection from '@headless-commerce/components/CMSPageSections/TextAndImageColumnBannerSection/TextAndImageColumnBannerSection';
import TextAndImageRowBannerSection from '@headless-commerce/components/CMSPageSections/TextAndImageRowBannerSection/TextAndImageRowBannerSection';
import type { Locale } from '@headless-commerce/config/locale';
import type { CMSPageContentValue } from '@headless-commerce/contexts/cmsPage';

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
