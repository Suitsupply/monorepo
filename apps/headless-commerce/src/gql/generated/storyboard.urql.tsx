import type * as Types from './graphql';

import type { DocumentNode } from 'graphql';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type StoryboardQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale: Types.Scalars['String'];
  preview: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type StoryboardQuery = { storyboardBanner: Types.Maybe<{ storyboardItemsCollection: Types.Maybe<{ items: Array<Types.Maybe<(
        Pick<Types.Cta, 'styling' | 'title' | 'testAutomationAttribute'>
        & { text: Types.Maybe<Pick<Types.CtaText, 'json'>>, link: Types.Maybe<Pick<Types.NavigationLink, 'linkType' | 'relativeUrl' | 'extraParameters' | 'absoluteUrl' | 'referenceId'>>, promotionEvents: Types.Maybe<Pick<Types.PromotionEvents, 'promotionEventLabel' | 'promotionEventAction' | 'promotionEventCategory' | 'promotionDimension24' | 'promotionPosition' | 'promotionCreative' | 'promotionView' | 'promotionClick'>>, sys: Pick<Types.Sys, 'id'> }
      )>> }> }> };


export const StoryboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"storyboard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storyboardBanner"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"preview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storyboardItemsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"styling"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkType"}},{"kind":"Field","name":{"kind":"Name","value":"relativeUrl"}},{"kind":"Field","name":{"kind":"Name","value":"extraParameters"}},{"kind":"Field","name":{"kind":"Name","value":"absoluteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"referenceId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"promotionEvents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promotionEventLabel"}},{"kind":"Field","name":{"kind":"Name","value":"promotionEventAction"}},{"kind":"Field","name":{"kind":"Name","value":"promotionEventCategory"}},{"kind":"Field","name":{"kind":"Name","value":"promotionDimension24"}},{"kind":"Field","name":{"kind":"Name","value":"promotionPosition"}},{"kind":"Field","name":{"kind":"Name","value":"promotionCreative"}},{"kind":"Field","name":{"kind":"Name","value":"promotionView"}},{"kind":"Field","name":{"kind":"Name","value":"promotionClick"}}]}},{"kind":"Field","name":{"kind":"Name","value":"testAutomationAttribute"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode;

export function useStoryboardQuery(options: Omit<Urql.UseQueryArgs<StoryboardQueryVariables>, 'query'>) {
  return Urql.useQuery<StoryboardQuery, StoryboardQueryVariables>({ query: StoryboardDocument, ...options });
};

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
    