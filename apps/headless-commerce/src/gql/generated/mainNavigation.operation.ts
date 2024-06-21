import type * as Types from './graphql';

export type SubTextFragment = { subText: Types.Maybe<(
    Pick<Types.NavigationItemLableSubText, 'json'>
    & { links: { entries: { inline: Array<Types.Maybe<{ sys: Pick<Types.Sys, 'id'>, pricesCollection: Types.Maybe<{ items: Array<Types.Maybe<Pick<Types.PriceInfoValue, 'currencyCode' | 'priceValue'>>> }> } | {}>> } } }
  )> };

export type ItemLabelFragment = { label: Types.Maybe<(
    Pick<Types.NavigationItemLable, 'text' | 'icon' | 'subMenuText' | 'subMenuArrow' | 'showIconSubMenuOnly' | 'testAutomationClass' | 'testAutomationAttribute'>
    & { link: Types.Maybe<Pick<Types.NavigationLink, 'linkType' | 'referenceId' | 'relativeUrl' | 'extraParameters'>>, promotionEvents: Types.Maybe<Pick<Types.PromotionEvents, 'promotionEventLabel' | 'promotionEventAction' | 'promotionEventCategory' | 'promotionDimension24' | 'promotionPosition' | 'promotionCreative' | 'promotionView' | 'promotionClick'>>, subText: Types.Maybe<(
      Pick<Types.NavigationItemLableSubText, 'json'>
      & { links: { entries: { inline: Array<Types.Maybe<{ sys: Pick<Types.Sys, 'id'>, pricesCollection: Types.Maybe<{ items: Array<Types.Maybe<Pick<Types.PriceInfoValue, 'currencyCode' | 'priceValue'>>> }> } | {}>> } } }
    )> }
  )> };

export type NavigationAllQueryVariables = Types.Exact<{
  locale: Types.Scalars['String'];
  tags: Array<Types.Scalars['String']> | Types.Scalars['String'];
  currencyCode: Types.Scalars['String'];
  preview: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type NavigationAllQuery = { suSuNavigationMenuCollection: Types.Maybe<{ items: Array<Types.Maybe<(
      Pick<Types.SuSuNavigationMenu, 'slug'>
      & { contentfulMetadata: { tags: Array<Types.Maybe<Pick<Types.ContentfulTag, 'id'>>> }, groupCollection: Types.Maybe<(
        Pick<Types.SuSuNavigationMenuGroupCollection, 'total'>
        & { items: Array<Types.Maybe<(
          Pick<Types.NavigationGroup, 'text' | 'hasTopDivider' | 'fontStyling'>
          & { itemsCollection: Types.Maybe<(
            Pick<Types.NavigationGroupItemsCollection, 'total'>
            & { items: Array<Types.Maybe<{ sys: Pick<Types.Sys, 'id'>, groupsCollection: Types.Maybe<(
                Pick<Types.NavigationItemGroupsCollection, 'total'>
                & { items: Array<Types.Maybe<(
                  Pick<Types.NavigationGroup, 'text' | 'hasTopDivider' | 'fontStyling'>
                  & { itemsCollection: Types.Maybe<{ items: Array<Types.Maybe<{ sys: Pick<Types.Sys, 'id'>, groupsCollection: Types.Maybe<(
                        Pick<Types.NavigationItemGroupsCollection, 'total'>
                        & { items: Array<Types.Maybe<(
                          Pick<Types.NavigationGroup, 'text' | 'hasTopDivider' | 'fontStyling'>
                          & { itemsCollection: Types.Maybe<(
                            Pick<Types.NavigationGroupItemsCollection, 'total'>
                            & { items: Array<Types.Maybe<{ sys: Pick<Types.Sys, 'id'>, label: Types.Maybe<(
                                Pick<Types.NavigationItemLable, 'text' | 'icon' | 'subMenuText' | 'subMenuArrow' | 'showIconSubMenuOnly' | 'testAutomationClass' | 'testAutomationAttribute'>
                                & { link: Types.Maybe<Pick<Types.NavigationLink, 'linkType' | 'referenceId' | 'relativeUrl' | 'extraParameters'>>, promotionEvents: Types.Maybe<Pick<Types.PromotionEvents, 'promotionEventLabel' | 'promotionEventAction' | 'promotionEventCategory' | 'promotionDimension24' | 'promotionPosition' | 'promotionCreative' | 'promotionView' | 'promotionClick'>>, subText: Types.Maybe<(
                                  Pick<Types.NavigationItemLableSubText, 'json'>
                                  & { links: { entries: { inline: Array<Types.Maybe<{ sys: Pick<Types.Sys, 'id'>, pricesCollection: Types.Maybe<{ items: Array<Types.Maybe<Pick<Types.PriceInfoValue, 'currencyCode' | 'priceValue'>>> }> } | {}>> } } }
                                )> }
                              )> }>> }
                          )> }
                        )>> }
                      )>, label: Types.Maybe<(
                        Pick<Types.NavigationItemLable, 'text' | 'icon' | 'subMenuText' | 'subMenuArrow' | 'showIconSubMenuOnly' | 'testAutomationClass' | 'testAutomationAttribute'>
                        & { link: Types.Maybe<Pick<Types.NavigationLink, 'linkType' | 'referenceId' | 'relativeUrl' | 'extraParameters'>>, promotionEvents: Types.Maybe<Pick<Types.PromotionEvents, 'promotionEventLabel' | 'promotionEventAction' | 'promotionEventCategory' | 'promotionDimension24' | 'promotionPosition' | 'promotionCreative' | 'promotionView' | 'promotionClick'>>, subText: Types.Maybe<(
                          Pick<Types.NavigationItemLableSubText, 'json'>
                          & { links: { entries: { inline: Array<Types.Maybe<{ sys: Pick<Types.Sys, 'id'>, pricesCollection: Types.Maybe<{ items: Array<Types.Maybe<Pick<Types.PriceInfoValue, 'currencyCode' | 'priceValue'>>> }> } | {}>> } } }
                        )> }
                      )> }>> }> }
                )>> }
              )>, label: Types.Maybe<(
                Pick<Types.NavigationItemLable, 'text' | 'icon' | 'subMenuText' | 'subMenuArrow' | 'showIconSubMenuOnly' | 'testAutomationClass' | 'testAutomationAttribute'>
                & { link: Types.Maybe<Pick<Types.NavigationLink, 'linkType' | 'referenceId' | 'relativeUrl' | 'extraParameters'>>, promotionEvents: Types.Maybe<Pick<Types.PromotionEvents, 'promotionEventLabel' | 'promotionEventAction' | 'promotionEventCategory' | 'promotionDimension24' | 'promotionPosition' | 'promotionCreative' | 'promotionView' | 'promotionClick'>>, subText: Types.Maybe<(
                  Pick<Types.NavigationItemLableSubText, 'json'>
                  & { links: { entries: { inline: Array<Types.Maybe<{ sys: Pick<Types.Sys, 'id'>, pricesCollection: Types.Maybe<{ items: Array<Types.Maybe<Pick<Types.PriceInfoValue, 'currencyCode' | 'priceValue'>>> }> } | {}>> } } }
                )> }
              )> }>> }
          )> }
        )>> }
      )> }
    )>> }> };


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
    