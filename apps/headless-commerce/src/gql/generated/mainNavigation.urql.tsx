import type * as Types from './graphql';

import type { DocumentNode } from 'graphql';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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

export const SubTextFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubText"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationItemLable"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PriceInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pricesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"currencyCode_in"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"currencyCode"}},{"kind":"StringValue","value":"default","block":false}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"priceValue"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode;
export const ItemLabelFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ItemLabel"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"subMenuText"}},{"kind":"Field","name":{"kind":"Name","value":"subMenuArrow"}},{"kind":"Field","name":{"kind":"Name","value":"showIconSubMenuOnly"}},{"kind":"Field","name":{"kind":"Name","value":"testAutomationClass"}},{"kind":"Field","name":{"kind":"Name","value":"testAutomationAttribute"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkType"}},{"kind":"Field","name":{"kind":"Name","value":"referenceId"}},{"kind":"Field","name":{"kind":"Name","value":"relativeUrl"}},{"kind":"Field","name":{"kind":"Name","value":"extraParameters"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubText"}},{"kind":"Field","name":{"kind":"Name","value":"promotionEvents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promotionEventLabel"}},{"kind":"Field","name":{"kind":"Name","value":"promotionEventAction"}},{"kind":"Field","name":{"kind":"Name","value":"promotionEventCategory"}},{"kind":"Field","name":{"kind":"Name","value":"promotionDimension24"}},{"kind":"Field","name":{"kind":"Name","value":"promotionPosition"}},{"kind":"Field","name":{"kind":"Name","value":"promotionCreative"}},{"kind":"Field","name":{"kind":"Name","value":"promotionView"}},{"kind":"Field","name":{"kind":"Name","value":"promotionClick"}}]}}]}}]}},...SubTextFragmentDoc.definitions]} as unknown as DocumentNode;
export const NavigationAllDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"navigationAll"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tags"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currencyCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"suSuNavigationMenuCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"slug_DESC"}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contentfulMetadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tags"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_contains_some"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tags"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"preview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"groupCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"3"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"hasTopDivider"}},{"kind":"Field","name":{"kind":"Name","value":"fontStyling"}},{"kind":"Field","name":{"kind":"Name","value":"itemsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ItemLabel"}},{"kind":"Field","name":{"kind":"Name","value":"groupsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"hasTopDivider"}},{"kind":"Field","name":{"kind":"Name","value":"fontStyling"}},{"kind":"Field","name":{"kind":"Name","value":"itemsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ItemLabel"}},{"kind":"Field","name":{"kind":"Name","value":"groupsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"3"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"hasTopDivider"}},{"kind":"Field","name":{"kind":"Name","value":"fontStyling"}},{"kind":"Field","name":{"kind":"Name","value":"itemsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"7"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ItemLabel"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}},...ItemLabelFragmentDoc.definitions]} as unknown as DocumentNode;

export function useNavigationAllQuery(options: Omit<Urql.UseQueryArgs<NavigationAllQueryVariables>, 'query'>) {
  return Urql.useQuery<NavigationAllQuery, NavigationAllQueryVariables>({ query: NavigationAllDocument, ...options });
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
    