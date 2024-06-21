import type * as Types from './graphql';

import type { DocumentNode } from 'graphql';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type ConfiguratorContentQueryVariables = Types.Exact<{
  slug: Types.Scalars['String'];
  locale: Types.Scalars['String'];
  tags: Array<Types.Scalars['String']> | Types.Scalars['String'];
  preview: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type ConfiguratorContentQuery = { blackTieConfiguratorCollection: Types.Maybe<{ items: Array<Types.Maybe<(
      Pick<Types.BlackTieConfigurator, 'modelImage'>
      & { seoMetadata: Types.Maybe<Pick<Types.SeoMetadata, 'pageDescription' | 'pageTitle' | 'keywords'>>, configuratorStepsCollection: Types.Maybe<{ items: Array<Types.Maybe<(
          Pick<Types.ProductStepConfigurator, 'categoryStep' | 'imageType' | 'title' | 'previewImageFocalPoint' | 'previewImageFocalPointMobile' | 'previewImageFocalPointTablet' | 'previewImageZoom' | 'previewImageZoomMobile' | 'previewImageZoomTablet' | 'staticImagePatternDesktop' | 'staticImagePatternMobile' | 'subStep'>
          & { sys: Pick<Types.Sys, 'id'>, contentfulMetadata: { tags: Array<Types.Maybe<Pick<Types.ContentfulTag, 'id'>>> }, productOptionsCollection: Types.Maybe<{ items: Array<Types.Maybe<(
              Pick<Types.ProductOptionConfigurator, 'baseColor' | 'productId' | 'productName' | 'recommendations' | 'subStep'>
              & { sys: Pick<Types.Sys, 'id'>, contentfulMetadata: { tags: Array<Types.Maybe<Pick<Types.ContentfulTag, 'id'>>> }, thumbnailImage: Types.Maybe<Pick<Types.MediaWrapperV2, 'cloudinaryDesktopImage' | 'cloudinaryMobileImage' | 'cloudinaryTabletImage' | 'description' | 'lazyloading'>> }
            ) | (
              Pick<Types.ProductOptionStaticImageConfigurator, 'baseColor' | 'productId' | 'productName'>
              & { sys: Pick<Types.Sys, 'id'>, contentfulMetadata: { tags: Array<Types.Maybe<Pick<Types.ContentfulTag, 'id'>>> }, thumbnailImage: Types.Maybe<Pick<Types.MediaWrapperV2, 'cloudinaryDesktopImage' | 'cloudinaryMobileImage' | 'cloudinaryTabletImage' | 'description' | 'lazyloading'>>, staticImage: Types.Maybe<Pick<Types.MediaWrapperV2, 'cloudinaryDesktopImage' | 'cloudinaryMobileImage' | 'cloudinaryTabletImage' | 'description' | 'lazyloading'>> }
            )>> }> }
        ) | (
          Pick<Types.TuxedoStyleStep, 'imageType' | 'categoryStep' | 'previewImageFocalPointMobile' | 'previewImageFocalPointTablet' | 'previewImageFocalPoint' | 'previewImageZoomMobile' | 'previewImageZoomTablet' | 'previewImageZoom' | 'title'>
          & { sys: Pick<Types.Sys, 'id'>, contentfulMetadata: { tags: Array<Types.Maybe<Pick<Types.ContentfulTag, 'id'>>> }, tuxedoProductOptionsCollection: Types.Maybe<{ items: Array<Types.Maybe<Pick<Types.TuxedoProductOption, 'campaign' | 'color' | 'tuxedoStyle' | 'waistcoatProductId'>>> }>, tuxedoStyleOptionsCollection: Types.Maybe<{ items: Array<Types.Maybe<(
              Pick<Types.TuxedoStyleOption, 'optionName' | 'tuxedoStyle'>
              & { thumbnailImage: Types.Maybe<Pick<Types.MediaWrapperV2, 'cloudinaryDesktopImage' | 'cloudinaryMobileImage' | 'cloudinaryTabletImage' | 'description' | 'lazyloading'>> }
            )>> }> }
        ) | {}>> }> }
    )>> }> };


export const ConfiguratorContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"configuratorContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tags"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blackTieConfiguratorCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug_contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contentfulMetadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tags"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_contains_some"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tags"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"preview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modelImage"}},{"kind":"Field","name":{"kind":"Name","value":"seoMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"pageTitle"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}}]}},{"kind":"Field","name":{"kind":"Name","value":"configuratorStepsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TuxedoStyleStep"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageType"}},{"kind":"Field","name":{"kind":"Name","value":"categoryStep"}},{"kind":"Field","name":{"kind":"Name","value":"previewImageFocalPointMobile"}},{"kind":"Field","name":{"kind":"Name","value":"previewImageFocalPointTablet"}},{"kind":"Field","name":{"kind":"Name","value":"previewImageFocalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"previewImageZoomMobile"}},{"kind":"Field","name":{"kind":"Name","value":"previewImageZoomTablet"}},{"kind":"Field","name":{"kind":"Name","value":"previewImageZoom"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tuxedoProductOptionsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"campaign"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"tuxedoStyle"}},{"kind":"Field","name":{"kind":"Name","value":"waistcoatProductId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tuxedoStyleOptionsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"optionName"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cloudinaryDesktopImage"}},{"kind":"Field","name":{"kind":"Name","value":"cloudinaryMobileImage"}},{"kind":"Field","name":{"kind":"Name","value":"cloudinaryTabletImage"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"lazyloading"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tuxedoStyle"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductStepConfigurator"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categoryStep"}},{"kind":"Field","name":{"kind":"Name","value":"imageType"}},{"kind":"Field","name":{"kind":"Name","value":"categoryStep"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewImageFocalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"previewImageFocalPointMobile"}},{"kind":"Field","name":{"kind":"Name","value":"previewImageFocalPointTablet"}},{"kind":"Field","name":{"kind":"Name","value":"previewImageZoom"}},{"kind":"Field","name":{"kind":"Name","value":"previewImageZoomMobile"}},{"kind":"Field","name":{"kind":"Name","value":"previewImageZoomTablet"}},{"kind":"Field","name":{"kind":"Name","value":"staticImagePatternDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"staticImagePatternMobile"}},{"kind":"Field","name":{"kind":"Name","value":"subStep"}},{"kind":"Field","name":{"kind":"Name","value":"productOptionsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductOptionConfigurator"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"baseColor"}},{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"productName"}},{"kind":"Field","name":{"kind":"Name","value":"recommendations"}},{"kind":"Field","name":{"kind":"Name","value":"subStep"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cloudinaryDesktopImage"}},{"kind":"Field","name":{"kind":"Name","value":"cloudinaryMobileImage"}},{"kind":"Field","name":{"kind":"Name","value":"cloudinaryTabletImage"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"lazyloading"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductOptionStaticImageConfigurator"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"baseColor"}},{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"productName"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cloudinaryDesktopImage"}},{"kind":"Field","name":{"kind":"Name","value":"cloudinaryMobileImage"}},{"kind":"Field","name":{"kind":"Name","value":"cloudinaryTabletImage"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"lazyloading"}}]}},{"kind":"Field","name":{"kind":"Name","value":"staticImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cloudinaryDesktopImage"}},{"kind":"Field","name":{"kind":"Name","value":"cloudinaryMobileImage"}},{"kind":"Field","name":{"kind":"Name","value":"cloudinaryTabletImage"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"lazyloading"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode;

export function useConfiguratorContentQuery(options: Omit<Urql.UseQueryArgs<ConfiguratorContentQueryVariables>, 'query'>) {
  return Urql.useQuery<ConfiguratorContentQuery, ConfiguratorContentQueryVariables>({ query: ConfiguratorContentDocument, ...options });
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
    