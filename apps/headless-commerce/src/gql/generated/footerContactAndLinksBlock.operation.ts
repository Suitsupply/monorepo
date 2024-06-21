import type * as Types from './graphql';

export type FooterContactAndLinksBlockQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  countryCode: Types.Scalars['String'];
  locale: Types.Scalars['String'];
  preview: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type FooterContactAndLinksBlockQuery = { footerContactAndLinksBlock: Types.Maybe<(
    Pick<Types.FooterContactAndLinksBlock, 'title'>
    & { listSectionsCollection: Types.Maybe<(
      { __typename: 'FooterContactAndLinksBlockListSectionsCollection' }
      & { items: Array<Types.Maybe<(
        Pick<Types.LinksSectionWrapper, 'title'>
        & { ctaCollection: Types.Maybe<{ items: Array<Types.Maybe<(
            Pick<Types.Cta, 'title' | 'styling'>
            & { link: Types.Maybe<(
              Pick<Types.NavigationLink, 'internalTitle' | 'relativeUrl' | 'referenceId' | 'extraParameters' | 'linkType' | 'absoluteUrl'>
              & { contentfulMetadata: { tags: Array<Types.Maybe<Pick<Types.ContentfulTag, 'id'>>> }, sys: Pick<Types.Sys, 'environmentId' | 'id' | 'spaceId'> }
            )>, promotionEvents: Types.Maybe<Pick<Types.PromotionEvents, 'promotionEventLabel' | 'promotionEventAction' | 'promotionEventCategory' | 'promotionDimension24' | 'promotionPosition' | 'promotionCreative' | 'promotionView' | 'promotionClick'>> }
          )>> }> }
      )>> }
    )>, contactSection: Types.Maybe<(
      Pick<Types.ContactSectionWrapper, 'title'>
      & { contentSectionsCollection: Types.Maybe<(
        { __typename: 'ContactSectionWrapperContentSectionsCollection' }
        & { items: Array<Types.Maybe<(
          Pick<Types.ContactInfoWrapper, 'title'>
          & { promotionEvents: Types.Maybe<Pick<Types.PromotionEvents, 'promotionEventLabel' | 'promotionEventAction' | 'promotionEventCategory' | 'promotionDimension24' | 'promotionPosition' | 'promotionCreative' | 'promotionView' | 'promotionClick'>>, text: Types.Maybe<(
            { __typename: 'ContactInfoWrapperText' }
            & Pick<Types.ContactInfoWrapperText, 'json'>
            & { links: { entries: { inline: Array<Types.Maybe<{ phoneNumbersCollection: Types.Maybe<{ items: Array<Types.Maybe<Pick<Types.PhoneInfoValue, 'phoneDisplay' | 'phoneValue' | 'countryCode'>>> }> } | {}>> } } }
          )>, link: Types.Maybe<Pick<Types.NavigationLink, 'internalTitle' | 'relativeUrl' | 'referenceId' | 'extraParameters' | 'absoluteUrl' | 'linkType'>> }
        )>> }
      )> }
    )> }
  )> };


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "ArticleCarrouselContentItem": [
      "ImageWithText",
      "JournalPage"
    ],
    "BlackTieConfiguratorConfiguratorStepsItem": [
      "ProductStepConfigurator",
      "TuxedoColorStep",
      "TuxedoStyleStep"
    ],
    "CmsPageCampaignSectionsItem": [
      "CardCarouselContainer",
      "ContentPageHeroBanner",
      "FaqAccordion",
      "JournalCenterContentBlock",
      "QuoteSliderBanner",
      "ShopCollectionBlock",
      "StickyButton",
      "TextAndButtonBanner",
      "TextAndImageColumnBanner",
      "TextAndImageRowBanner"
    ],
    "Entry": [
      "ArticleCarrousel",
      "BlackTieConfigurator",
      "Button",
      "CampaignCarrousel",
      "CampaignCollectionBlock",
      "CardCarouselContainer",
      "CarouselImageAndTextCard",
      "CarouselWithText",
      "CmsPage",
      "ContactInfoWrapper",
      "ContactSectionWrapper",
      "ContentPageHeroBanner",
      "Cta",
      "DynamicMediaWrapper",
      "FaqAccordion",
      "FaqItem",
      "Footer",
      "FooterBottomBlock",
      "FooterContactAndLinksBlock",
      "FooterNewsletterBlock",
      "FooterStoreBlock",
      "FooterUspBlock",
      "HeroBanner",
      "HeroBannerWithLinks",
      "HeroLinkItem",
      "Homepage",
      "ImageCarrouselContainer",
      "ImageWithText",
      "JournalCenterContentBlock",
      "JournalPage",
      "LinkWithIcon",
      "LinkWithImage",
      "LinksSectionWrapper",
      "MediaWrapperV2",
      "NavigationGroup",
      "NavigationItem",
      "NavigationItemLable",
      "NavigationLink",
      "PanelButtonWithIcon",
      "PanelContentWrapper",
      "PhoneInfo",
      "PhoneInfoValue",
      "PinpointOverlayIndicator",
      "PriceInfo",
      "PriceInfoValue",
      "ProductListing",
      "ProductOptionConfigurator",
      "ProductOptionStaticImageConfigurator",
      "ProductStepConfigurator",
      "PromotionEvents",
      "QuoteSliderBanner",
      "QuoteSliderItem",
      "ReferenceSalesforceObject",
      "SeoMetadata",
      "ShopCollectionBlock",
      "SocialLinksWrapper",
      "StickyButton",
      "StoryboardBanner",
      "SuSuNavigationMenu",
      "TextAndButtonBanner",
      "TextAndImageColumnBanner",
      "TextAndImageRowBanner",
      "TextWrapperRich",
      "TextWrapperRichPanel",
      "TuxedoColorOption",
      "TuxedoColorStep",
      "TuxedoProductOption",
      "TuxedoStyleOption",
      "TuxedoStyleStep",
      "VideoWrapper"
    ],
    "FooterBottomBlockContentSectionsItem": [
      "Cta",
      "LinkWithImage",
      "SocialLinksWrapper"
    ],
    "FooterCampaignSectionsItem": [
      "FooterBottomBlock",
      "FooterContactAndLinksBlock",
      "FooterNewsletterBlock",
      "FooterStoreBlock",
      "FooterUspBlock"
    ],
    "FooterUspBlockUspListItem": [
      "TextWrapperRich",
      "TextWrapperRichPanel"
    ],
    "HeroBannerWithLinksContent": [
      "MediaWrapperV2",
      "VideoWrapper"
    ],
    "HomepageCampaignSectionsItem": [
      "ArticleCarrousel",
      "CampaignCarrousel",
      "CampaignCollectionBlock",
      "HeroBanner",
      "HeroBannerWithLinks",
      "ImageCarrouselContainer",
      "ImageWithText",
      "StoryboardBanner"
    ],
    "JournalCenterContentBlockButton": [
      "Button",
      "StickyButton"
    ],
    "JournalPageCampaignSectionsItem": [
      "ArticleCarrousel",
      "CampaignCarrousel",
      "CampaignCollectionBlock",
      "HeroBanner",
      "ImageWithText"
    ],
    "LineItem": [
      "CustomMadeLineItem",
      "ProductLineItem"
    ],
    "ProductStepConfiguratorProductOptionsItem": [
      "ProductOptionConfigurator",
      "ProductOptionStaticImageConfigurator"
    ],
    "ResourceLink": [
      "ArticleCarrouselSublineResourcesBlock",
      "ArticleCarrouselSublineResourcesHyperlink",
      "ArticleCarrouselSublineResourcesInline",
      "ButtonButtonRichTextResourcesBlock",
      "ButtonButtonRichTextResourcesHyperlink",
      "ButtonButtonRichTextResourcesInline",
      "CampaignCarrouselSublineResourcesBlock",
      "CampaignCarrouselSublineResourcesHyperlink",
      "CampaignCarrouselSublineResourcesInline",
      "CampaignCollectionBlockSublineResourcesBlock",
      "CampaignCollectionBlockSublineResourcesHyperlink",
      "CampaignCollectionBlockSublineResourcesInline",
      "CarouselImageAndTextCardDescriptionResourcesBlock",
      "CarouselImageAndTextCardDescriptionResourcesHyperlink",
      "CarouselImageAndTextCardDescriptionResourcesInline",
      "ContactInfoWrapperTextResourcesBlock",
      "ContactInfoWrapperTextResourcesHyperlink",
      "ContactInfoWrapperTextResourcesInline",
      "ContentPageHeroBannerSublineResourcesBlock",
      "ContentPageHeroBannerSublineResourcesHyperlink",
      "ContentPageHeroBannerSublineResourcesInline",
      "ContentPageHeroBannerTitleResourcesBlock",
      "ContentPageHeroBannerTitleResourcesHyperlink",
      "ContentPageHeroBannerTitleResourcesInline",
      "CtaTextResourcesBlock",
      "CtaTextResourcesHyperlink",
      "CtaTextResourcesInline",
      "FaqItemAnswerResourcesBlock",
      "FaqItemAnswerResourcesHyperlink",
      "FaqItemAnswerResourcesInline",
      "HeroBannerSublineResourcesBlock",
      "HeroBannerSublineResourcesHyperlink",
      "HeroBannerSublineResourcesInline",
      "HeroBannerTitleResourcesBlock",
      "HeroBannerTitleResourcesHyperlink",
      "HeroBannerTitleResourcesInline",
      "ImageWithTextSublineResourcesBlock",
      "ImageWithTextSublineResourcesHyperlink",
      "ImageWithTextSublineResourcesInline",
      "JournalCenterContentBlockDescriptionResourcesBlock",
      "JournalCenterContentBlockDescriptionResourcesHyperlink",
      "JournalCenterContentBlockDescriptionResourcesInline",
      "NavigationItemLableSubTextResourcesBlock",
      "NavigationItemLableSubTextResourcesHyperlink",
      "NavigationItemLableSubTextResourcesInline",
      "PanelButtonWithIconTextResourcesBlock",
      "PanelButtonWithIconTextResourcesHyperlink",
      "PanelButtonWithIconTextResourcesInline",
      "QuoteSliderItemQuoteResourcesBlock",
      "QuoteSliderItemQuoteResourcesHyperlink",
      "QuoteSliderItemQuoteResourcesInline",
      "StickyButtonButtonRichTextResourcesBlock",
      "StickyButtonButtonRichTextResourcesHyperlink",
      "StickyButtonButtonRichTextResourcesInline",
      "TextAndButtonBannerTextResourcesBlock",
      "TextAndButtonBannerTextResourcesHyperlink",
      "TextAndButtonBannerTextResourcesInline",
      "TextAndButtonBannerTitleResourcesBlock",
      "TextAndButtonBannerTitleResourcesHyperlink",
      "TextAndButtonBannerTitleResourcesInline",
      "TextAndImageRowBannerDescriptionResourcesBlock",
      "TextAndImageRowBannerDescriptionResourcesHyperlink",
      "TextAndImageRowBannerDescriptionResourcesInline"
    ],
    "ShopCollectionBlockContentSectionsItem": [
      "Button",
      "ProductListing"
    ],
    "TextAndButtonBannerButton": [
      "Button",
      "StickyButton"
    ],
    "TextAndImageColumnBannerContentItem": [
      "MediaWrapperV2",
      "TextAndButtonBanner"
    ],
    "TextAndImageRowBannerMediaContentItem": [
      "DynamicMediaWrapper",
      "MediaWrapperV2",
      "PinpointOverlayIndicator"
    ],
    "_Node": []
  }
};
      export default result;
    