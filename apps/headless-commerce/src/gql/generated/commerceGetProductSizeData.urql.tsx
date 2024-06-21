import type * as Types from './graphql';

import type { DocumentNode } from 'graphql';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type SizeDetailsFragment = (
  Pick<Types.Size, 'id' | 'sizeColumnKey' | 'displayValue' | 'variantID'>
  & { availabilityStatus: Pick<Types.AvailabilityStatus, 'ATS' | 'isAvailable' | 'preOrder' | 'inStockDate'> }
);

export type CommerceGetProductSizeDataQueryVariables = Types.Exact<{
  pid: Types.Scalars['String'];
  siteInfo: Types.SiteInfo;
}>;


export type CommerceGetProductSizeDataQuery = { getProductSizeData: { rows: Array<Types.Maybe<Pick<Types.SizeRow, 'id' | 'name' | 'description'>>>, rowsData: { regular: Types.Maybe<Array<Types.Maybe<(
        Pick<Types.Size, 'id' | 'sizeColumnKey' | 'displayValue' | 'variantID'>
        & { availabilityStatus: Pick<Types.AvailabilityStatus, 'ATS' | 'isAvailable' | 'preOrder' | 'inStockDate'> }
      )>>>, long: Types.Maybe<Array<Types.Maybe<(
        Pick<Types.Size, 'id' | 'sizeColumnKey' | 'displayValue' | 'variantID'>
        & { availabilityStatus: Pick<Types.AvailabilityStatus, 'ATS' | 'isAvailable' | 'preOrder' | 'inStockDate'> }
      )>>>, short: Types.Maybe<Array<Types.Maybe<(
        Pick<Types.Size, 'id' | 'sizeColumnKey' | 'displayValue' | 'variantID'>
        & { availabilityStatus: Pick<Types.AvailabilityStatus, 'ATS' | 'isAvailable' | 'preOrder' | 'inStockDate'> }
      )>>>, size: Types.Maybe<Array<Types.Maybe<(
        Pick<Types.Size, 'id' | 'sizeColumnKey' | 'displayValue' | 'variantID'>
        & { availabilityStatus: Pick<Types.AvailabilityStatus, 'ATS' | 'isAvailable' | 'preOrder' | 'inStockDate'> }
      )>>> }, sortedSizeColumn: Array<Types.Maybe<Pick<Types.SortedSizeColumn, 'key' | 'value'>>> } };

export const SizeDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SizeDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sizeColumnKey"}},{"kind":"Field","name":{"kind":"Name","value":"displayValue"}},{"kind":"Field","name":{"kind":"Name","value":"variantID"}},{"kind":"Field","name":{"kind":"Name","value":"availabilityStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ATS"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"preOrder"}},{"kind":"Field","name":{"kind":"Name","value":"inStockDate"}}]}}]}}]} as unknown as DocumentNode;
export const CommerceGetProductSizeDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"commerceGetProductSizeData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"siteInfo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteInfo"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductSizeData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pid"}}},{"kind":"Argument","name":{"kind":"Name","value":"siteInfo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"siteInfo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rowsData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"regular"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SizeDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"long"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SizeDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"short"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SizeDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SizeDetails"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sortedSizeColumn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},...SizeDetailsFragmentDoc.definitions]} as unknown as DocumentNode;

export function useCommerceGetProductSizeDataQuery(options: Omit<Urql.UseQueryArgs<CommerceGetProductSizeDataQueryVariables>, 'query'>) {
  return Urql.useQuery<CommerceGetProductSizeDataQuery, CommerceGetProductSizeDataQueryVariables>({ query: CommerceGetProductSizeDataDocument, ...options });
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
    