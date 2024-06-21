export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

export type AddProductsInput = {
  /** ID of the Cart */
  basketId?: InputMaybe<Scalars['ID']>;
  /** Current Customer Id */
  customerId: Scalars['ID'];
  /** Products which needs to be added to the Cart */
  pids: Array<Scalars['String']>;
  /** Site Info */
  siteInfo: SiteInfo;
};

/** Article carrousel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/articleCarrousel) */
export type ArticleCarrousel = Entry & {
  __typename?: 'ArticleCarrousel';
  contentCollection?: Maybe<ArticleCarrouselContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  cta?: Maybe<Cta>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ArticleCarrouselLinkingCollections>;
  subline?: Maybe<ArticleCarrouselSubline>;
  sys: Sys;
  textLayout?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


/** Article carrousel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/articleCarrousel) */
export type ArticleCarrouselContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ArticleCarrouselContentFilter>;
};


/** Article carrousel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/articleCarrousel) */
export type ArticleCarrouselCtaArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CtaFilter>;
};


/** Article carrousel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/articleCarrousel) */
export type ArticleCarrouselInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Article carrousel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/articleCarrousel) */
export type ArticleCarrouselLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Article carrousel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/articleCarrousel) */
export type ArticleCarrouselSublineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Article carrousel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/articleCarrousel) */
export type ArticleCarrouselTextLayoutArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Article carrousel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/articleCarrousel) */
export type ArticleCarrouselTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ArticleCarrouselCollection = {
  __typename?: 'ArticleCarrouselCollection';
  items: Array<Maybe<ArticleCarrousel>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ArticleCarrouselContentCollection = {
  __typename?: 'ArticleCarrouselContentCollection';
  items: Array<Maybe<ArticleCarrouselContentItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ArticleCarrouselContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<ArticleCarrouselContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ArticleCarrouselContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticleCarrouselContentItem = ImageWithText | JournalPage;

export type ArticleCarrouselFilter = {
  AND?: InputMaybe<Array<InputMaybe<ArticleCarrouselFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ArticleCarrouselFilter>>>;
  content?: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta?: InputMaybe<CfCtaNestedFilter>;
  cta_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subline_contains?: InputMaybe<Scalars['String']>;
  subline_exists?: InputMaybe<Scalars['Boolean']>;
  subline_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  textLayout?: InputMaybe<Scalars['String']>;
  textLayout_contains?: InputMaybe<Scalars['String']>;
  textLayout_exists?: InputMaybe<Scalars['Boolean']>;
  textLayout_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  textLayout_not?: InputMaybe<Scalars['String']>;
  textLayout_not_contains?: InputMaybe<Scalars['String']>;
  textLayout_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticleCarrouselLinkingCollections = {
  __typename?: 'ArticleCarrouselLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
  journalPageCollection?: Maybe<JournalPageCollection>;
};


export type ArticleCarrouselLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ArticleCarrouselLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ArticleCarrouselLinkingCollectionsHomepageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ArticleCarrouselLinkingCollectionsJournalPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ArticleCarrouselLinkingCollectionsJournalPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ArticleCarrouselLinkingCollectionsHomepageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ArticleCarrouselLinkingCollectionsJournalPageCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopicAsc = 'topic_ASC',
  TopicDesc = 'topic_DESC'
}

export enum ArticleCarrouselOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextLayoutAsc = 'textLayout_ASC',
  TextLayoutDesc = 'textLayout_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ArticleCarrouselSubline = {
  __typename?: 'ArticleCarrouselSubline';
  json: Scalars['JSON'];
  links: ArticleCarrouselSublineLinks;
};

export type ArticleCarrouselSublineAssets = {
  __typename?: 'ArticleCarrouselSublineAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ArticleCarrouselSublineEntries = {
  __typename?: 'ArticleCarrouselSublineEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ArticleCarrouselSublineLinks = {
  __typename?: 'ArticleCarrouselSublineLinks';
  assets: ArticleCarrouselSublineAssets;
  entries: ArticleCarrouselSublineEntries;
  resources: ArticleCarrouselSublineResources;
};

export type ArticleCarrouselSublineResources = {
  __typename?: 'ArticleCarrouselSublineResources';
  block: Array<ArticleCarrouselSublineResourcesBlock>;
  hyperlink: Array<ArticleCarrouselSublineResourcesHyperlink>;
  inline: Array<ArticleCarrouselSublineResourcesInline>;
};

export type ArticleCarrouselSublineResourcesBlock = ResourceLink & {
  __typename?: 'ArticleCarrouselSublineResourcesBlock';
  sys: ResourceSys;
};

export type ArticleCarrouselSublineResourcesHyperlink = ResourceLink & {
  __typename?: 'ArticleCarrouselSublineResourcesHyperlink';
  sys: ResourceSys;
};

export type ArticleCarrouselSublineResourcesInline = ResourceLink & {
  __typename?: 'ArticleCarrouselSublineResourcesInline';
  sys: ResourceSys;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type AvailabilityStatus = {
  __typename?: 'AvailabilityStatus';
  /** Available To Sell */
  ATS?: Maybe<Scalars['Int']>;
  /** InStock Date */
  inStockDate?: Maybe<Scalars['String']>;
  /** Is Available */
  isAvailable: Scalars['Boolean'];
  /** Is Stock Threshold Reached */
  isStockThresholdReached: Scalars['Boolean'];
  /** Is OneLeft */
  oneLeft: Scalars['Boolean'];
  /** Is PreOrder */
  preOrder: Scalars['Boolean'];
  /** Is Show Badge */
  showBadge: Scalars['Boolean'];
};

/** Parent container for Black Tie Configurator [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/blackTieConfigurator) */
export type BlackTieConfigurator = Entry & {
  __typename?: 'BlackTieConfigurator';
  configuratorStepsCollection?: Maybe<BlackTieConfiguratorConfiguratorStepsCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<BlackTieConfiguratorLinkingCollections>;
  modelImage?: Maybe<Scalars['String']>;
  seoMetadata?: Maybe<SeoMetadata>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Parent container for Black Tie Configurator [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/blackTieConfigurator) */
export type BlackTieConfiguratorConfiguratorStepsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlackTieConfiguratorConfiguratorStepsFilter>;
};


/** Parent container for Black Tie Configurator [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/blackTieConfigurator) */
export type BlackTieConfiguratorInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Parent container for Black Tie Configurator [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/blackTieConfigurator) */
export type BlackTieConfiguratorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Parent container for Black Tie Configurator [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/blackTieConfigurator) */
export type BlackTieConfiguratorModelImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Parent container for Black Tie Configurator [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/blackTieConfigurator) */
export type BlackTieConfiguratorSeoMetadataArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<SeoMetadataFilter>;
};


/** Parent container for Black Tie Configurator [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/blackTieConfigurator) */
export type BlackTieConfiguratorSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type BlackTieConfiguratorCollection = {
  __typename?: 'BlackTieConfiguratorCollection';
  items: Array<Maybe<BlackTieConfigurator>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BlackTieConfiguratorConfiguratorStepsCollection = {
  __typename?: 'BlackTieConfiguratorConfiguratorStepsCollection';
  items: Array<Maybe<BlackTieConfiguratorConfiguratorStepsItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BlackTieConfiguratorConfiguratorStepsFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlackTieConfiguratorConfiguratorStepsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlackTieConfiguratorConfiguratorStepsFilter>>>;
  categoryStep?: InputMaybe<Scalars['String']>;
  categoryStep_contains?: InputMaybe<Scalars['String']>;
  categoryStep_exists?: InputMaybe<Scalars['Boolean']>;
  categoryStep_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categoryStep_not?: InputMaybe<Scalars['String']>;
  categoryStep_not_contains?: InputMaybe<Scalars['String']>;
  categoryStep_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageType?: InputMaybe<Scalars['String']>;
  imageType_contains?: InputMaybe<Scalars['String']>;
  imageType_exists?: InputMaybe<Scalars['Boolean']>;
  imageType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageType_not?: InputMaybe<Scalars['String']>;
  imageType_not_contains?: InputMaybe<Scalars['String']>;
  imageType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageFocalPoint?: InputMaybe<Scalars['String']>;
  previewImageFocalPoint_contains?: InputMaybe<Scalars['String']>;
  previewImageFocalPoint_exists?: InputMaybe<Scalars['Boolean']>;
  previewImageFocalPoint_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageFocalPoint_not?: InputMaybe<Scalars['String']>;
  previewImageFocalPoint_not_contains?: InputMaybe<Scalars['String']>;
  previewImageFocalPoint_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageZoom?: InputMaybe<Scalars['String']>;
  previewImageZoom_contains?: InputMaybe<Scalars['String']>;
  previewImageZoom_exists?: InputMaybe<Scalars['Boolean']>;
  previewImageZoom_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageZoom_not?: InputMaybe<Scalars['String']>;
  previewImageZoom_not_contains?: InputMaybe<Scalars['String']>;
  previewImageZoom_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type BlackTieConfiguratorConfiguratorStepsItem = ProductStepConfigurator | TuxedoColorStep | TuxedoStyleStep;

export type BlackTieConfiguratorFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlackTieConfiguratorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlackTieConfiguratorFilter>>>;
  configuratorSteps?: InputMaybe<CfconfiguratorStepsMultiTypeNestedFilter>;
  configuratorStepsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  modelImage?: InputMaybe<Scalars['String']>;
  modelImage_contains?: InputMaybe<Scalars['String']>;
  modelImage_exists?: InputMaybe<Scalars['Boolean']>;
  modelImage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  modelImage_not?: InputMaybe<Scalars['String']>;
  modelImage_not_contains?: InputMaybe<Scalars['String']>;
  modelImage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seoMetadata?: InputMaybe<CfSeoMetadataNestedFilter>;
  seoMetadata_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type BlackTieConfiguratorLinkingCollections = {
  __typename?: 'BlackTieConfiguratorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BlackTieConfiguratorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum BlackTieConfiguratorOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ModelImageAsc = 'modelImage_ASC',
  ModelImageDesc = 'modelImage_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Button Content Type [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/button) */
export type Button = Entry & {
  __typename?: 'Button';
  buttonRichText?: Maybe<ButtonButtonRichText>;
  buttonStyle?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  desktopButtonAlignment?: Maybe<Scalars['String']>;
  internalTitle?: Maybe<Scalars['String']>;
  link?: Maybe<NavigationLink>;
  linkedFrom?: Maybe<ButtonLinkingCollections>;
  mobileButtonAlignment?: Maybe<Scalars['String']>;
  promotionEvents?: Maybe<PromotionEvents>;
  sys: Sys;
  tabletButtonAlignment?: Maybe<Scalars['String']>;
  visibleOnDesktop?: Maybe<Scalars['String']>;
  visibleOnMobile?: Maybe<Scalars['String']>;
  visibleOnTablet?: Maybe<Scalars['String']>;
};


/** Button Content Type [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/button) */
export type ButtonButtonRichTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Button Content Type [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/button) */
export type ButtonButtonStyleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Button Content Type [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/button) */
export type ButtonDesktopButtonAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Button Content Type [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/button) */
export type ButtonInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Button Content Type [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/button) */
export type ButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** Button Content Type [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/button) */
export type ButtonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Button Content Type [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/button) */
export type ButtonMobileButtonAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Button Content Type [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/button) */
export type ButtonPromotionEventsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PromotionEventsFilter>;
};


/** Button Content Type [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/button) */
export type ButtonTabletButtonAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Button Content Type [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/button) */
export type ButtonVisibleOnDesktopArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Button Content Type [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/button) */
export type ButtonVisibleOnMobileArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Button Content Type [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/button) */
export type ButtonVisibleOnTabletArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ButtonButtonRichText = {
  __typename?: 'ButtonButtonRichText';
  json: Scalars['JSON'];
  links: ButtonButtonRichTextLinks;
};

export type ButtonButtonRichTextAssets = {
  __typename?: 'ButtonButtonRichTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ButtonButtonRichTextEntries = {
  __typename?: 'ButtonButtonRichTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ButtonButtonRichTextLinks = {
  __typename?: 'ButtonButtonRichTextLinks';
  assets: ButtonButtonRichTextAssets;
  entries: ButtonButtonRichTextEntries;
  resources: ButtonButtonRichTextResources;
};

export type ButtonButtonRichTextResources = {
  __typename?: 'ButtonButtonRichTextResources';
  block: Array<ButtonButtonRichTextResourcesBlock>;
  hyperlink: Array<ButtonButtonRichTextResourcesHyperlink>;
  inline: Array<ButtonButtonRichTextResourcesInline>;
};

export type ButtonButtonRichTextResourcesBlock = ResourceLink & {
  __typename?: 'ButtonButtonRichTextResourcesBlock';
  sys: ResourceSys;
};

export type ButtonButtonRichTextResourcesHyperlink = ResourceLink & {
  __typename?: 'ButtonButtonRichTextResourcesHyperlink';
  sys: ResourceSys;
};

export type ButtonButtonRichTextResourcesInline = ResourceLink & {
  __typename?: 'ButtonButtonRichTextResourcesInline';
  sys: ResourceSys;
};

export type ButtonCollection = {
  __typename?: 'ButtonCollection';
  items: Array<Maybe<Button>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ButtonFilter = {
  AND?: InputMaybe<Array<InputMaybe<ButtonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ButtonFilter>>>;
  buttonRichText_contains?: InputMaybe<Scalars['String']>;
  buttonRichText_exists?: InputMaybe<Scalars['Boolean']>;
  buttonRichText_not_contains?: InputMaybe<Scalars['String']>;
  buttonStyle?: InputMaybe<Scalars['String']>;
  buttonStyle_contains?: InputMaybe<Scalars['String']>;
  buttonStyle_exists?: InputMaybe<Scalars['Boolean']>;
  buttonStyle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonStyle_not?: InputMaybe<Scalars['String']>;
  buttonStyle_not_contains?: InputMaybe<Scalars['String']>;
  buttonStyle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktopButtonAlignment?: InputMaybe<Scalars['String']>;
  desktopButtonAlignment_contains?: InputMaybe<Scalars['String']>;
  desktopButtonAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  desktopButtonAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  desktopButtonAlignment_not?: InputMaybe<Scalars['String']>;
  desktopButtonAlignment_not_contains?: InputMaybe<Scalars['String']>;
  desktopButtonAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfNavigationLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  mobileButtonAlignment?: InputMaybe<Scalars['String']>;
  mobileButtonAlignment_contains?: InputMaybe<Scalars['String']>;
  mobileButtonAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  mobileButtonAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mobileButtonAlignment_not?: InputMaybe<Scalars['String']>;
  mobileButtonAlignment_not_contains?: InputMaybe<Scalars['String']>;
  mobileButtonAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEvents?: InputMaybe<CfPromotionEventsNestedFilter>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  tabletButtonAlignment?: InputMaybe<Scalars['String']>;
  tabletButtonAlignment_contains?: InputMaybe<Scalars['String']>;
  tabletButtonAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  tabletButtonAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabletButtonAlignment_not?: InputMaybe<Scalars['String']>;
  tabletButtonAlignment_not_contains?: InputMaybe<Scalars['String']>;
  tabletButtonAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visibleOnDesktop?: InputMaybe<Scalars['String']>;
  visibleOnDesktop_contains?: InputMaybe<Scalars['String']>;
  visibleOnDesktop_exists?: InputMaybe<Scalars['Boolean']>;
  visibleOnDesktop_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visibleOnDesktop_not?: InputMaybe<Scalars['String']>;
  visibleOnDesktop_not_contains?: InputMaybe<Scalars['String']>;
  visibleOnDesktop_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visibleOnMobile?: InputMaybe<Scalars['String']>;
  visibleOnMobile_contains?: InputMaybe<Scalars['String']>;
  visibleOnMobile_exists?: InputMaybe<Scalars['Boolean']>;
  visibleOnMobile_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visibleOnMobile_not?: InputMaybe<Scalars['String']>;
  visibleOnMobile_not_contains?: InputMaybe<Scalars['String']>;
  visibleOnMobile_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visibleOnTablet?: InputMaybe<Scalars['String']>;
  visibleOnTablet_contains?: InputMaybe<Scalars['String']>;
  visibleOnTablet_exists?: InputMaybe<Scalars['Boolean']>;
  visibleOnTablet_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visibleOnTablet_not?: InputMaybe<Scalars['String']>;
  visibleOnTablet_not_contains?: InputMaybe<Scalars['String']>;
  visibleOnTablet_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ButtonLinkingCollections = {
  __typename?: 'ButtonLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  journalCenterContentBlockCollection?: Maybe<JournalCenterContentBlockCollection>;
  shopCollectionBlockCollection?: Maybe<ShopCollectionBlockCollection>;
  textAndButtonBannerCollection?: Maybe<TextAndButtonBannerCollection>;
};


export type ButtonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ButtonLinkingCollectionsJournalCenterContentBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ButtonLinkingCollectionsJournalCenterContentBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ButtonLinkingCollectionsShopCollectionBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ButtonLinkingCollectionsShopCollectionBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ButtonLinkingCollectionsTextAndButtonBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ButtonLinkingCollectionsTextAndButtonBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ButtonLinkingCollectionsJournalCenterContentBlockCollectionOrder {
  AutomationIdAsc = 'automationId_ASC',
  AutomationIdDesc = 'automationId_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SubTitleAsc = 'subTitle_ASC',
  SubTitleDesc = 'subTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ButtonLinkingCollectionsShopCollectionBlockCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ButtonLinkingCollectionsTextAndButtonBannerCollectionOrder {
  AutomationIdAsc = 'automationId_ASC',
  AutomationIdDesc = 'automationId_DESC',
  ComponentSizeAsc = 'componentSize_ASC',
  ComponentSizeDesc = 'componentSize_DESC',
  DesktopCopyAlignmentAsc = 'desktopCopyAlignment_ASC',
  DesktopCopyAlignmentDesc = 'desktopCopyAlignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MaxWidthDesktopAsc = 'maxWidthDesktop_ASC',
  MaxWidthDesktopDesc = 'maxWidthDesktop_DESC',
  MaxWidthMobileAsc = 'maxWidthMobile_ASC',
  MaxWidthMobileDesc = 'maxWidthMobile_DESC',
  MaxWidthTabletAsc = 'maxWidthTablet_ASC',
  MaxWidthTabletDesc = 'maxWidthTablet_DESC',
  MobileCopyAlignmentAsc = 'mobileCopyAlignment_ASC',
  MobileCopyAlignmentDesc = 'mobileCopyAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletCopyAlignmentAsc = 'tabletCopyAlignment_ASC',
  TabletCopyAlignmentDesc = 'tabletCopyAlignment_DESC'
}

export enum ButtonOrder {
  ButtonStyleAsc = 'buttonStyle_ASC',
  ButtonStyleDesc = 'buttonStyle_DESC',
  DesktopButtonAlignmentAsc = 'desktopButtonAlignment_ASC',
  DesktopButtonAlignmentDesc = 'desktopButtonAlignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileButtonAlignmentAsc = 'mobileButtonAlignment_ASC',
  MobileButtonAlignmentDesc = 'mobileButtonAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletButtonAlignmentAsc = 'tabletButtonAlignment_ASC',
  TabletButtonAlignmentDesc = 'tabletButtonAlignment_DESC',
  VisibleOnDesktopAsc = 'visibleOnDesktop_ASC',
  VisibleOnDesktopDesc = 'visibleOnDesktop_DESC',
  VisibleOnMobileAsc = 'visibleOnMobile_ASC',
  VisibleOnMobileDesc = 'visibleOnMobile_DESC',
  VisibleOnTabletAsc = 'visibleOnTablet_ASC',
  VisibleOnTabletDesc = 'visibleOnTablet_DESC'
}

export enum Checkout_Flows {
  Applepay = 'APPLEPAY',
  Paypal = 'PAYPAL',
  Regular = 'REGULAR'
}

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

/** Product carrousel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/campaignCarrousel) */
export type CampaignCarrousel = Entry & {
  __typename?: 'CampaignCarrousel';
  contentCollection?: Maybe<CampaignCarrouselContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  cta?: Maybe<Cta>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<CampaignCarrouselLinkingCollections>;
  subline?: Maybe<CampaignCarrouselSubline>;
  sys: Sys;
  textLayout?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


/** Product carrousel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/campaignCarrousel) */
export type CampaignCarrouselContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CampaignCarrouselContentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductListingFilter>;
};


/** Product carrousel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/campaignCarrousel) */
export type CampaignCarrouselCtaArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CtaFilter>;
};


/** Product carrousel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/campaignCarrousel) */
export type CampaignCarrouselInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Product carrousel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/campaignCarrousel) */
export type CampaignCarrouselLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Product carrousel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/campaignCarrousel) */
export type CampaignCarrouselSublineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Product carrousel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/campaignCarrousel) */
export type CampaignCarrouselTextLayoutArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Product carrousel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/campaignCarrousel) */
export type CampaignCarrouselTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type CampaignCarrouselCollection = {
  __typename?: 'CampaignCarrouselCollection';
  items: Array<Maybe<CampaignCarrousel>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CampaignCarrouselContentCollection = {
  __typename?: 'CampaignCarrouselContentCollection';
  items: Array<Maybe<ProductListing>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum CampaignCarrouselContentCollectionOrder {
  CategoryIdAsc = 'categoryId_ASC',
  CategoryIdDesc = 'categoryId_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  QtyOfProductsAsc = 'qtyOfProducts_ASC',
  QtyOfProductsDesc = 'qtyOfProducts_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CampaignCarrouselFilter = {
  AND?: InputMaybe<Array<InputMaybe<CampaignCarrouselFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CampaignCarrouselFilter>>>;
  content?: InputMaybe<CfProductListingNestedFilter>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta?: InputMaybe<CfCtaNestedFilter>;
  cta_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subline_contains?: InputMaybe<Scalars['String']>;
  subline_exists?: InputMaybe<Scalars['Boolean']>;
  subline_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  textLayout?: InputMaybe<Scalars['String']>;
  textLayout_contains?: InputMaybe<Scalars['String']>;
  textLayout_exists?: InputMaybe<Scalars['Boolean']>;
  textLayout_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  textLayout_not?: InputMaybe<Scalars['String']>;
  textLayout_not_contains?: InputMaybe<Scalars['String']>;
  textLayout_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CampaignCarrouselLinkingCollections = {
  __typename?: 'CampaignCarrouselLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
  journalPageCollection?: Maybe<JournalPageCollection>;
};


export type CampaignCarrouselLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CampaignCarrouselLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CampaignCarrouselLinkingCollectionsHomepageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CampaignCarrouselLinkingCollectionsJournalPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CampaignCarrouselLinkingCollectionsJournalPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CampaignCarrouselLinkingCollectionsHomepageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum CampaignCarrouselLinkingCollectionsJournalPageCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopicAsc = 'topic_ASC',
  TopicDesc = 'topic_DESC'
}

export enum CampaignCarrouselOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextLayoutAsc = 'textLayout_ASC',
  TextLayoutDesc = 'textLayout_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CampaignCarrouselSubline = {
  __typename?: 'CampaignCarrouselSubline';
  json: Scalars['JSON'];
  links: CampaignCarrouselSublineLinks;
};

export type CampaignCarrouselSublineAssets = {
  __typename?: 'CampaignCarrouselSublineAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CampaignCarrouselSublineEntries = {
  __typename?: 'CampaignCarrouselSublineEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CampaignCarrouselSublineLinks = {
  __typename?: 'CampaignCarrouselSublineLinks';
  assets: CampaignCarrouselSublineAssets;
  entries: CampaignCarrouselSublineEntries;
  resources: CampaignCarrouselSublineResources;
};

export type CampaignCarrouselSublineResources = {
  __typename?: 'CampaignCarrouselSublineResources';
  block: Array<CampaignCarrouselSublineResourcesBlock>;
  hyperlink: Array<CampaignCarrouselSublineResourcesHyperlink>;
  inline: Array<CampaignCarrouselSublineResourcesInline>;
};

export type CampaignCarrouselSublineResourcesBlock = ResourceLink & {
  __typename?: 'CampaignCarrouselSublineResourcesBlock';
  sys: ResourceSys;
};

export type CampaignCarrouselSublineResourcesHyperlink = ResourceLink & {
  __typename?: 'CampaignCarrouselSublineResourcesHyperlink';
  sys: ResourceSys;
};

export type CampaignCarrouselSublineResourcesInline = ResourceLink & {
  __typename?: 'CampaignCarrouselSublineResourcesInline';
  sys: ResourceSys;
};

/** Two column campaign block [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/campaignCollectionBlock) */
export type CampaignCollectionBlock = Entry & {
  __typename?: 'CampaignCollectionBlock';
  contentCollection?: Maybe<CampaignCollectionBlockContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  cta?: Maybe<Cta>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<CampaignCollectionBlockLinkingCollections>;
  subline?: Maybe<CampaignCollectionBlockSubline>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Two column campaign block [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/campaignCollectionBlock) */
export type CampaignCollectionBlockContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CampaignCollectionBlockContentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageWithTextFilter>;
};


/** Two column campaign block [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/campaignCollectionBlock) */
export type CampaignCollectionBlockCtaArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CtaFilter>;
};


/** Two column campaign block [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/campaignCollectionBlock) */
export type CampaignCollectionBlockInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Two column campaign block [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/campaignCollectionBlock) */
export type CampaignCollectionBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Two column campaign block [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/campaignCollectionBlock) */
export type CampaignCollectionBlockSublineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Two column campaign block [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/campaignCollectionBlock) */
export type CampaignCollectionBlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type CampaignCollectionBlockCollection = {
  __typename?: 'CampaignCollectionBlockCollection';
  items: Array<Maybe<CampaignCollectionBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CampaignCollectionBlockContentCollection = {
  __typename?: 'CampaignCollectionBlockContentCollection';
  items: Array<Maybe<ImageWithText>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum CampaignCollectionBlockContentCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  DesktopTextAlignmentAsc = 'desktopTextAlignment_ASC',
  DesktopTextAlignmentDesc = 'desktopTextAlignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileTextAlignmentAsc = 'mobileTextAlignment_ASC',
  MobileTextAlignmentDesc = 'mobileTextAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletTextAlignmentAsc = 'tabletTextAlignment_ASC',
  TabletTextAlignmentDesc = 'tabletTextAlignment_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CampaignCollectionBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<CampaignCollectionBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CampaignCollectionBlockFilter>>>;
  content?: InputMaybe<CfImageWithTextNestedFilter>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta?: InputMaybe<CfCtaNestedFilter>;
  cta_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subline_contains?: InputMaybe<Scalars['String']>;
  subline_exists?: InputMaybe<Scalars['Boolean']>;
  subline_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CampaignCollectionBlockLinkingCollections = {
  __typename?: 'CampaignCollectionBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
  journalPageCollection?: Maybe<JournalPageCollection>;
};


export type CampaignCollectionBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CampaignCollectionBlockLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CampaignCollectionBlockLinkingCollectionsHomepageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CampaignCollectionBlockLinkingCollectionsJournalPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CampaignCollectionBlockLinkingCollectionsJournalPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CampaignCollectionBlockLinkingCollectionsHomepageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum CampaignCollectionBlockLinkingCollectionsJournalPageCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopicAsc = 'topic_ASC',
  TopicDesc = 'topic_DESC'
}

export enum CampaignCollectionBlockOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CampaignCollectionBlockSubline = {
  __typename?: 'CampaignCollectionBlockSubline';
  json: Scalars['JSON'];
  links: CampaignCollectionBlockSublineLinks;
};

export type CampaignCollectionBlockSublineAssets = {
  __typename?: 'CampaignCollectionBlockSublineAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CampaignCollectionBlockSublineEntries = {
  __typename?: 'CampaignCollectionBlockSublineEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CampaignCollectionBlockSublineLinks = {
  __typename?: 'CampaignCollectionBlockSublineLinks';
  assets: CampaignCollectionBlockSublineAssets;
  entries: CampaignCollectionBlockSublineEntries;
  resources: CampaignCollectionBlockSublineResources;
};

export type CampaignCollectionBlockSublineResources = {
  __typename?: 'CampaignCollectionBlockSublineResources';
  block: Array<CampaignCollectionBlockSublineResourcesBlock>;
  hyperlink: Array<CampaignCollectionBlockSublineResourcesHyperlink>;
  inline: Array<CampaignCollectionBlockSublineResourcesInline>;
};

export type CampaignCollectionBlockSublineResourcesBlock = ResourceLink & {
  __typename?: 'CampaignCollectionBlockSublineResourcesBlock';
  sys: ResourceSys;
};

export type CampaignCollectionBlockSublineResourcesHyperlink = ResourceLink & {
  __typename?: 'CampaignCollectionBlockSublineResourcesHyperlink';
  sys: ResourceSys;
};

export type CampaignCollectionBlockSublineResourcesInline = ResourceLink & {
  __typename?: 'CampaignCollectionBlockSublineResourcesInline';
  sys: ResourceSys;
};

/** Carousel Container with Card Content Types in them containing content like Img, Text, icons etc.. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cardCarouselContainer) */
export type CardCarouselContainer = Entry & {
  __typename?: 'CardCarouselContainer';
  cardsCollection?: Maybe<CardCarouselContainerCardsCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<CardCarouselContainerLinkingCollections>;
  mobileCarouselAligment?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Carousel Container with Card Content Types in them containing content like Img, Text, icons etc.. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cardCarouselContainer) */
export type CardCarouselContainerCardsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CardCarouselContainerCardsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CarouselImageAndTextCardFilter>;
};


/** Carousel Container with Card Content Types in them containing content like Img, Text, icons etc.. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cardCarouselContainer) */
export type CardCarouselContainerInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Carousel Container with Card Content Types in them containing content like Img, Text, icons etc.. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cardCarouselContainer) */
export type CardCarouselContainerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Carousel Container with Card Content Types in them containing content like Img, Text, icons etc.. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cardCarouselContainer) */
export type CardCarouselContainerMobileCarouselAligmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Carousel Container with Card Content Types in them containing content like Img, Text, icons etc.. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cardCarouselContainer) */
export type CardCarouselContainerTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type CardCarouselContainerCardsCollection = {
  __typename?: 'CardCarouselContainerCardsCollection';
  items: Array<Maybe<CarouselImageAndTextCard>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum CardCarouselContainerCardsCollectionOrder {
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleFlagAsc = 'titleFlag_ASC',
  TitleFlagDesc = 'titleFlag_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CardCarouselContainerCollection = {
  __typename?: 'CardCarouselContainerCollection';
  items: Array<Maybe<CardCarouselContainer>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CardCarouselContainerFilter = {
  AND?: InputMaybe<Array<InputMaybe<CardCarouselContainerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CardCarouselContainerFilter>>>;
  cards?: InputMaybe<CfCarouselImageAndTextCardNestedFilter>;
  cardsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mobileCarouselAligment?: InputMaybe<Scalars['String']>;
  mobileCarouselAligment_contains?: InputMaybe<Scalars['String']>;
  mobileCarouselAligment_exists?: InputMaybe<Scalars['Boolean']>;
  mobileCarouselAligment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mobileCarouselAligment_not?: InputMaybe<Scalars['String']>;
  mobileCarouselAligment_not_contains?: InputMaybe<Scalars['String']>;
  mobileCarouselAligment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CardCarouselContainerLinkingCollections = {
  __typename?: 'CardCarouselContainerLinkingCollections';
  cmsPageCollection?: Maybe<CmsPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type CardCarouselContainerLinkingCollectionsCmsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CardCarouselContainerLinkingCollectionsCmsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CardCarouselContainerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CardCarouselContainerLinkingCollectionsCmsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeOfBannerAsc = 'typeOfBanner_ASC',
  TypeOfBannerDesc = 'typeOfBanner_DESC'
}

export enum CardCarouselContainerOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileCarouselAligmentAsc = 'mobileCarouselAligment_ASC',
  MobileCarouselAligmentDesc = 'mobileCarouselAligment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Card usable in Carousel with Image + Title, Icon, flag and description  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/carouselImageAndTextCard) */
export type CarouselImageAndTextCard = Entry & {
  __typename?: 'CarouselImageAndTextCard';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<CarouselImageAndTextCardDescription>;
  iconName?: Maybe<Scalars['String']>;
  image?: Maybe<MediaWrapperV2>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<CarouselImageAndTextCardLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  titleFlag?: Maybe<Scalars['String']>;
};


/** Card usable in Carousel with Image + Title, Icon, flag and description  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/carouselImageAndTextCard) */
export type CarouselImageAndTextCardDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Card usable in Carousel with Image + Title, Icon, flag and description  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/carouselImageAndTextCard) */
export type CarouselImageAndTextCardIconNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Card usable in Carousel with Image + Title, Icon, flag and description  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/carouselImageAndTextCard) */
export type CarouselImageAndTextCardImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MediaWrapperV2Filter>;
};


/** Card usable in Carousel with Image + Title, Icon, flag and description  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/carouselImageAndTextCard) */
export type CarouselImageAndTextCardInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Card usable in Carousel with Image + Title, Icon, flag and description  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/carouselImageAndTextCard) */
export type CarouselImageAndTextCardLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Card usable in Carousel with Image + Title, Icon, flag and description  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/carouselImageAndTextCard) */
export type CarouselImageAndTextCardTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Card usable in Carousel with Image + Title, Icon, flag and description  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/carouselImageAndTextCard) */
export type CarouselImageAndTextCardTitleFlagArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type CarouselImageAndTextCardCollection = {
  __typename?: 'CarouselImageAndTextCardCollection';
  items: Array<Maybe<CarouselImageAndTextCard>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CarouselImageAndTextCardDescription = {
  __typename?: 'CarouselImageAndTextCardDescription';
  json: Scalars['JSON'];
  links: CarouselImageAndTextCardDescriptionLinks;
};

export type CarouselImageAndTextCardDescriptionAssets = {
  __typename?: 'CarouselImageAndTextCardDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CarouselImageAndTextCardDescriptionEntries = {
  __typename?: 'CarouselImageAndTextCardDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CarouselImageAndTextCardDescriptionLinks = {
  __typename?: 'CarouselImageAndTextCardDescriptionLinks';
  assets: CarouselImageAndTextCardDescriptionAssets;
  entries: CarouselImageAndTextCardDescriptionEntries;
  resources: CarouselImageAndTextCardDescriptionResources;
};

export type CarouselImageAndTextCardDescriptionResources = {
  __typename?: 'CarouselImageAndTextCardDescriptionResources';
  block: Array<CarouselImageAndTextCardDescriptionResourcesBlock>;
  hyperlink: Array<CarouselImageAndTextCardDescriptionResourcesHyperlink>;
  inline: Array<CarouselImageAndTextCardDescriptionResourcesInline>;
};

export type CarouselImageAndTextCardDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'CarouselImageAndTextCardDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type CarouselImageAndTextCardDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'CarouselImageAndTextCardDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type CarouselImageAndTextCardDescriptionResourcesInline = ResourceLink & {
  __typename?: 'CarouselImageAndTextCardDescriptionResourcesInline';
  sys: ResourceSys;
};

export type CarouselImageAndTextCardFilter = {
  AND?: InputMaybe<Array<InputMaybe<CarouselImageAndTextCardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CarouselImageAndTextCardFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  iconName?: InputMaybe<Scalars['String']>;
  iconName_contains?: InputMaybe<Scalars['String']>;
  iconName_exists?: InputMaybe<Scalars['Boolean']>;
  iconName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  iconName_not?: InputMaybe<Scalars['String']>;
  iconName_not_contains?: InputMaybe<Scalars['String']>;
  iconName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image?: InputMaybe<CfMediaWrapperV2NestedFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  titleFlag?: InputMaybe<Scalars['String']>;
  titleFlag_contains?: InputMaybe<Scalars['String']>;
  titleFlag_exists?: InputMaybe<Scalars['Boolean']>;
  titleFlag_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  titleFlag_not?: InputMaybe<Scalars['String']>;
  titleFlag_not_contains?: InputMaybe<Scalars['String']>;
  titleFlag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CarouselImageAndTextCardLinkingCollections = {
  __typename?: 'CarouselImageAndTextCardLinkingCollections';
  cardCarouselContainerCollection?: Maybe<CardCarouselContainerCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type CarouselImageAndTextCardLinkingCollectionsCardCarouselContainerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CarouselImageAndTextCardLinkingCollectionsCardCarouselContainerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CarouselImageAndTextCardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CarouselImageAndTextCardLinkingCollectionsCardCarouselContainerCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileCarouselAligmentAsc = 'mobileCarouselAligment_ASC',
  MobileCarouselAligmentDesc = 'mobileCarouselAligment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum CarouselImageAndTextCardOrder {
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleFlagAsc = 'titleFlag_ASC',
  TitleFlagDesc = 'titleFlag_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Carousel images with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/carouselWithText) */
export type CarouselWithText = Entry & {
  __typename?: 'CarouselWithText';
  colorPalette?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  desktopCarrousel?: Maybe<Scalars['String']>;
  imagesCollection?: Maybe<CarouselWithTextImagesCollection>;
  internalTitle?: Maybe<Scalars['String']>;
  link?: Maybe<NavigationLink>;
  linkedFrom?: Maybe<CarouselWithTextLinkingCollections>;
  mobileCarrousel?: Maybe<Scalars['String']>;
  promotionEvents?: Maybe<PromotionEvents>;
  sys: Sys;
  tabletCarrousel?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


/** Carousel images with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/carouselWithText) */
export type CarouselWithTextColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Carousel images with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/carouselWithText) */
export type CarouselWithTextDesktopCarrouselArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Carousel images with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/carouselWithText) */
export type CarouselWithTextImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CarouselWithTextImagesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MediaWrapperV2Filter>;
};


/** Carousel images with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/carouselWithText) */
export type CarouselWithTextInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Carousel images with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/carouselWithText) */
export type CarouselWithTextLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** Carousel images with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/carouselWithText) */
export type CarouselWithTextLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Carousel images with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/carouselWithText) */
export type CarouselWithTextMobileCarrouselArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Carousel images with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/carouselWithText) */
export type CarouselWithTextPromotionEventsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PromotionEventsFilter>;
};


/** Carousel images with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/carouselWithText) */
export type CarouselWithTextTabletCarrouselArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Carousel images with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/carouselWithText) */
export type CarouselWithTextTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type CarouselWithTextCollection = {
  __typename?: 'CarouselWithTextCollection';
  items: Array<Maybe<CarouselWithText>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CarouselWithTextFilter = {
  AND?: InputMaybe<Array<InputMaybe<CarouselWithTextFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CarouselWithTextFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktopCarrousel?: InputMaybe<Scalars['String']>;
  desktopCarrousel_contains?: InputMaybe<Scalars['String']>;
  desktopCarrousel_exists?: InputMaybe<Scalars['Boolean']>;
  desktopCarrousel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  desktopCarrousel_not?: InputMaybe<Scalars['String']>;
  desktopCarrousel_not_contains?: InputMaybe<Scalars['String']>;
  desktopCarrousel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  images?: InputMaybe<CfMediaWrapperV2NestedFilter>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfNavigationLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  mobileCarrousel?: InputMaybe<Scalars['String']>;
  mobileCarrousel_contains?: InputMaybe<Scalars['String']>;
  mobileCarrousel_exists?: InputMaybe<Scalars['Boolean']>;
  mobileCarrousel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mobileCarrousel_not?: InputMaybe<Scalars['String']>;
  mobileCarrousel_not_contains?: InputMaybe<Scalars['String']>;
  mobileCarrousel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEvents?: InputMaybe<CfPromotionEventsNestedFilter>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  tabletCarrousel?: InputMaybe<Scalars['String']>;
  tabletCarrousel_contains?: InputMaybe<Scalars['String']>;
  tabletCarrousel_exists?: InputMaybe<Scalars['Boolean']>;
  tabletCarrousel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabletCarrousel_not?: InputMaybe<Scalars['String']>;
  tabletCarrousel_not_contains?: InputMaybe<Scalars['String']>;
  tabletCarrousel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CarouselWithTextImagesCollection = {
  __typename?: 'CarouselWithTextImagesCollection';
  items: Array<Maybe<MediaWrapperV2>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum CarouselWithTextImagesCollectionOrder {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LazyloadingAsc = 'lazyloading_ASC',
  LazyloadingDesc = 'lazyloading_DESC',
  StaticImageAsc = 'staticImage_ASC',
  StaticImageDesc = 'staticImage_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CarouselWithTextLinkingCollections = {
  __typename?: 'CarouselWithTextLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  imageCarrouselContainerCollection?: Maybe<ImageCarrouselContainerCollection>;
};


export type CarouselWithTextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CarouselWithTextLinkingCollectionsImageCarrouselContainerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CarouselWithTextLinkingCollectionsImageCarrouselContainerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CarouselWithTextLinkingCollectionsImageCarrouselContainerCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CarouselWithTextOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  DesktopCarrouselAsc = 'desktopCarrousel_ASC',
  DesktopCarrouselDesc = 'desktopCarrousel_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileCarrouselAsc = 'mobileCarrousel_ASC',
  MobileCarrouselDesc = 'mobileCarrousel_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletCarrouselAsc = 'tabletCarrousel_ASC',
  TabletCarrouselDesc = 'tabletCarrousel_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Cart = {
  __typename?: 'Cart';
  /** Cart page URL */
  cartUrl: Scalars['String'];
  /** The sales channel. */
  channelType: ChannelType;
  /** Checkout Flows */
  checkoutFlows: Array<Maybe<Checkout_Flows>>;
  /** The ISO 4217 mnemonic code of the currency. */
  currency: Scalars['String'];
  /** The customer information, if the customer is logged in. */
  customerInfo: CustomerInfo;
  /** Error Code */
  errorCode?: Maybe<Error_Codes>;
  /** The gift certificate line items. */
  giftCertificateItems?: Maybe<Array<Maybe<GiftCertificateItem>>>;
  /** The unique identifier for the basket. */
  id: Scalars['ID'];
  /** Is Shipping Available */
  isShippingAvailable?: Maybe<Scalars['Boolean']>;
  /** Is Valid Cart */
  isValid: Scalars['Boolean'];
  /** The line items. */
  lineItems?: Maybe<Array<Maybe<LineItem>>>;
  /** Number of Products in the Cart */
  numberOfProducts: Scalars['Int'];
  /** The shipments. */
  shipments: Array<Shipment>;
  /** The total tax amount. */
  taxTotal: Scalars['Float'];
  /** Tax policy of current site */
  taxation: Tax_Policy;
  /** The total price, including products, shipping and tax. */
  totals: Totals;
};

export type CartLineItemInput = {
  /** ID of the Cart */
  basketId: Scalars['ID'];
  /** Item which needs to be removed from the Cart */
  itemId: Scalars['String'];
  /** Site Info */
  siteInfo: SiteInfo;
};

export type CartLineItemResponse = {
  __typename?: 'CartLineItemResponse';
  /** updated cart */
  cart?: Maybe<Cart>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export enum ChannelType {
  Callcenter = 'callcenter',
  Store = 'store',
  Storefront = 'storefront'
}

/** Default CMS Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cmsPage) */
export type CmsPage = Entry & {
  __typename?: 'CmsPage';
  campaignSectionsCollection?: Maybe<CmsPageCampaignSectionsCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<CmsPageLinkingCollections>;
  seoMetadata?: Maybe<SeoMetadata>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  typeOfBanner?: Maybe<Scalars['String']>;
};


/** Default CMS Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cmsPage) */
export type CmsPageCampaignSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CmsPageCampaignSectionsFilter>;
};


/** Default CMS Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cmsPage) */
export type CmsPageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Default CMS Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cmsPage) */
export type CmsPageLayoutArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Default CMS Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cmsPage) */
export type CmsPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Default CMS Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cmsPage) */
export type CmsPageSeoMetadataArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<SeoMetadataFilter>;
};


/** Default CMS Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cmsPage) */
export type CmsPageSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Default CMS Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cmsPage) */
export type CmsPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Default CMS Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cmsPage) */
export type CmsPageTypeOfBannerArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type CmsPageCampaignSectionsCollection = {
  __typename?: 'CmsPageCampaignSectionsCollection';
  items: Array<Maybe<CmsPageCampaignSectionsItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CmsPageCampaignSectionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<CmsPageCampaignSectionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CmsPageCampaignSectionsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CmsPageCampaignSectionsItem = CardCarouselContainer | ContentPageHeroBanner | FaqAccordion | JournalCenterContentBlock | QuoteSliderBanner | ShopCollectionBlock | StickyButton | TextAndButtonBanner | TextAndImageColumnBanner | TextAndImageRowBanner;

export type CmsPageCollection = {
  __typename?: 'CmsPageCollection';
  items: Array<Maybe<CmsPage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CmsPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<CmsPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CmsPageFilter>>>;
  campaignSections?: InputMaybe<CfcampaignSectionsMultiTypeNestedFilter>;
  campaignSectionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  layout?: InputMaybe<Scalars['String']>;
  layout_contains?: InputMaybe<Scalars['String']>;
  layout_exists?: InputMaybe<Scalars['Boolean']>;
  layout_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  layout_not?: InputMaybe<Scalars['String']>;
  layout_not_contains?: InputMaybe<Scalars['String']>;
  layout_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seoMetadata?: InputMaybe<CfSeoMetadataNestedFilter>;
  seoMetadata_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeOfBanner?: InputMaybe<Scalars['String']>;
  typeOfBanner_contains?: InputMaybe<Scalars['String']>;
  typeOfBanner_exists?: InputMaybe<Scalars['Boolean']>;
  typeOfBanner_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeOfBanner_not?: InputMaybe<Scalars['String']>;
  typeOfBanner_not_contains?: InputMaybe<Scalars['String']>;
  typeOfBanner_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CmsPageLinkingCollections = {
  __typename?: 'CmsPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type CmsPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CmsPageOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeOfBannerAsc = 'typeOfBanner_ASC',
  TypeOfBannerDesc = 'typeOfBanner_DESC'
}

/** Wrapper for Contact info and links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contactInfoWrapper) */
export type ContactInfoWrapper = Entry & {
  __typename?: 'ContactInfoWrapper';
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  link?: Maybe<NavigationLink>;
  linkedFrom?: Maybe<ContactInfoWrapperLinkingCollections>;
  promotionEvents?: Maybe<PromotionEvents>;
  sys: Sys;
  text?: Maybe<ContactInfoWrapperText>;
  title?: Maybe<Scalars['String']>;
};


/** Wrapper for Contact info and links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contactInfoWrapper) */
export type ContactInfoWrapperInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wrapper for Contact info and links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contactInfoWrapper) */
export type ContactInfoWrapperLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** Wrapper for Contact info and links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contactInfoWrapper) */
export type ContactInfoWrapperLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Wrapper for Contact info and links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contactInfoWrapper) */
export type ContactInfoWrapperPromotionEventsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PromotionEventsFilter>;
};


/** Wrapper for Contact info and links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contactInfoWrapper) */
export type ContactInfoWrapperTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wrapper for Contact info and links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contactInfoWrapper) */
export type ContactInfoWrapperTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ContactInfoWrapperCollection = {
  __typename?: 'ContactInfoWrapperCollection';
  items: Array<Maybe<ContactInfoWrapper>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ContactInfoWrapperFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContactInfoWrapperFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContactInfoWrapperFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfNavigationLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEvents?: InputMaybe<CfPromotionEventsNestedFilter>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContactInfoWrapperLinkingCollections = {
  __typename?: 'ContactInfoWrapperLinkingCollections';
  contactSectionWrapperCollection?: Maybe<ContactSectionWrapperCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ContactInfoWrapperLinkingCollectionsContactSectionWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContactInfoWrapperLinkingCollectionsContactSectionWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContactInfoWrapperLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ContactInfoWrapperLinkingCollectionsContactSectionWrapperCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ContactInfoWrapperOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContactInfoWrapperText = {
  __typename?: 'ContactInfoWrapperText';
  json: Scalars['JSON'];
  links: ContactInfoWrapperTextLinks;
};

export type ContactInfoWrapperTextAssets = {
  __typename?: 'ContactInfoWrapperTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContactInfoWrapperTextEntries = {
  __typename?: 'ContactInfoWrapperTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContactInfoWrapperTextLinks = {
  __typename?: 'ContactInfoWrapperTextLinks';
  assets: ContactInfoWrapperTextAssets;
  entries: ContactInfoWrapperTextEntries;
  resources: ContactInfoWrapperTextResources;
};

export type ContactInfoWrapperTextResources = {
  __typename?: 'ContactInfoWrapperTextResources';
  block: Array<ContactInfoWrapperTextResourcesBlock>;
  hyperlink: Array<ContactInfoWrapperTextResourcesHyperlink>;
  inline: Array<ContactInfoWrapperTextResourcesInline>;
};

export type ContactInfoWrapperTextResourcesBlock = ResourceLink & {
  __typename?: 'ContactInfoWrapperTextResourcesBlock';
  sys: ResourceSys;
};

export type ContactInfoWrapperTextResourcesHyperlink = ResourceLink & {
  __typename?: 'ContactInfoWrapperTextResourcesHyperlink';
  sys: ResourceSys;
};

export type ContactInfoWrapperTextResourcesInline = ResourceLink & {
  __typename?: 'ContactInfoWrapperTextResourcesInline';
  sys: ResourceSys;
};

/** Wrapper for Contact list section [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contactSectionWrapper) */
export type ContactSectionWrapper = Entry & {
  __typename?: 'ContactSectionWrapper';
  contentSectionsCollection?: Maybe<ContactSectionWrapperContentSectionsCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ContactSectionWrapperLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Wrapper for Contact list section [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contactSectionWrapper) */
export type ContactSectionWrapperContentSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContactSectionWrapperContentSectionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContactInfoWrapperFilter>;
};


/** Wrapper for Contact list section [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contactSectionWrapper) */
export type ContactSectionWrapperInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wrapper for Contact list section [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contactSectionWrapper) */
export type ContactSectionWrapperLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Wrapper for Contact list section [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contactSectionWrapper) */
export type ContactSectionWrapperTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ContactSectionWrapperCollection = {
  __typename?: 'ContactSectionWrapperCollection';
  items: Array<Maybe<ContactSectionWrapper>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ContactSectionWrapperContentSectionsCollection = {
  __typename?: 'ContactSectionWrapperContentSectionsCollection';
  items: Array<Maybe<ContactInfoWrapper>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum ContactSectionWrapperContentSectionsCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContactSectionWrapperFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContactSectionWrapperFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContactSectionWrapperFilter>>>;
  contentSections?: InputMaybe<CfContactInfoWrapperNestedFilter>;
  contentSectionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContactSectionWrapperLinkingCollections = {
  __typename?: 'ContactSectionWrapperLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerContactAndLinksBlockCollection?: Maybe<FooterContactAndLinksBlockCollection>;
};


export type ContactSectionWrapperLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContactSectionWrapperLinkingCollectionsFooterContactAndLinksBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContactSectionWrapperLinkingCollectionsFooterContactAndLinksBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ContactSectionWrapperLinkingCollectionsFooterContactAndLinksBlockCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ContactSectionWrapperOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Hero banner for Content Pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contentPageHeroBanner) */
export type ContentPageHeroBanner = Entry & {
  __typename?: 'ContentPageHeroBanner';
  colorPalette?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  desktopTextAlignment?: Maybe<Scalars['String']>;
  image?: Maybe<MediaWrapperV2>;
  internalTitle?: Maybe<Scalars['String']>;
  link?: Maybe<NavigationLink>;
  linkedFrom?: Maybe<ContentPageHeroBannerLinkingCollections>;
  mobileTextAlignment?: Maybe<Scalars['String']>;
  promotionEvents?: Maybe<PromotionEvents>;
  subline?: Maybe<ContentPageHeroBannerSubline>;
  sublineShowOnDesktop?: Maybe<Scalars['String']>;
  sublineShowOnMobile?: Maybe<Scalars['String']>;
  sublineShowOnTablet?: Maybe<Scalars['String']>;
  sys: Sys;
  tabletTextAlignment?: Maybe<Scalars['String']>;
  title?: Maybe<ContentPageHeroBannerTitle>;
  viewHeightSetMobile?: Maybe<Scalars['String']>;
};


/** Hero banner for Content Pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contentPageHeroBanner) */
export type ContentPageHeroBannerColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Hero banner for Content Pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contentPageHeroBanner) */
export type ContentPageHeroBannerDesktopTextAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Hero banner for Content Pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contentPageHeroBanner) */
export type ContentPageHeroBannerImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MediaWrapperV2Filter>;
};


/** Hero banner for Content Pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contentPageHeroBanner) */
export type ContentPageHeroBannerInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Hero banner for Content Pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contentPageHeroBanner) */
export type ContentPageHeroBannerLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** Hero banner for Content Pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contentPageHeroBanner) */
export type ContentPageHeroBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Hero banner for Content Pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contentPageHeroBanner) */
export type ContentPageHeroBannerMobileTextAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Hero banner for Content Pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contentPageHeroBanner) */
export type ContentPageHeroBannerPromotionEventsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PromotionEventsFilter>;
};


/** Hero banner for Content Pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contentPageHeroBanner) */
export type ContentPageHeroBannerSublineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Hero banner for Content Pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contentPageHeroBanner) */
export type ContentPageHeroBannerSublineShowOnDesktopArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Hero banner for Content Pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contentPageHeroBanner) */
export type ContentPageHeroBannerSublineShowOnMobileArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Hero banner for Content Pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contentPageHeroBanner) */
export type ContentPageHeroBannerSublineShowOnTabletArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Hero banner for Content Pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contentPageHeroBanner) */
export type ContentPageHeroBannerTabletTextAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Hero banner for Content Pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contentPageHeroBanner) */
export type ContentPageHeroBannerTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Hero banner for Content Pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/contentPageHeroBanner) */
export type ContentPageHeroBannerViewHeightSetMobileArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentPageHeroBannerCollection = {
  __typename?: 'ContentPageHeroBannerCollection';
  items: Array<Maybe<ContentPageHeroBanner>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ContentPageHeroBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentPageHeroBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentPageHeroBannerFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktopTextAlignment?: InputMaybe<Scalars['String']>;
  desktopTextAlignment_contains?: InputMaybe<Scalars['String']>;
  desktopTextAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  desktopTextAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  desktopTextAlignment_not?: InputMaybe<Scalars['String']>;
  desktopTextAlignment_not_contains?: InputMaybe<Scalars['String']>;
  desktopTextAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image?: InputMaybe<CfMediaWrapperV2NestedFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfNavigationLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  mobileTextAlignment?: InputMaybe<Scalars['String']>;
  mobileTextAlignment_contains?: InputMaybe<Scalars['String']>;
  mobileTextAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  mobileTextAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mobileTextAlignment_not?: InputMaybe<Scalars['String']>;
  mobileTextAlignment_not_contains?: InputMaybe<Scalars['String']>;
  mobileTextAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEvents?: InputMaybe<CfPromotionEventsNestedFilter>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sublineShowOnDesktop?: InputMaybe<Scalars['String']>;
  sublineShowOnDesktop_contains?: InputMaybe<Scalars['String']>;
  sublineShowOnDesktop_exists?: InputMaybe<Scalars['Boolean']>;
  sublineShowOnDesktop_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sublineShowOnDesktop_not?: InputMaybe<Scalars['String']>;
  sublineShowOnDesktop_not_contains?: InputMaybe<Scalars['String']>;
  sublineShowOnDesktop_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sublineShowOnMobile?: InputMaybe<Scalars['String']>;
  sublineShowOnMobile_contains?: InputMaybe<Scalars['String']>;
  sublineShowOnMobile_exists?: InputMaybe<Scalars['Boolean']>;
  sublineShowOnMobile_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sublineShowOnMobile_not?: InputMaybe<Scalars['String']>;
  sublineShowOnMobile_not_contains?: InputMaybe<Scalars['String']>;
  sublineShowOnMobile_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sublineShowOnTablet?: InputMaybe<Scalars['String']>;
  sublineShowOnTablet_contains?: InputMaybe<Scalars['String']>;
  sublineShowOnTablet_exists?: InputMaybe<Scalars['Boolean']>;
  sublineShowOnTablet_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sublineShowOnTablet_not?: InputMaybe<Scalars['String']>;
  sublineShowOnTablet_not_contains?: InputMaybe<Scalars['String']>;
  sublineShowOnTablet_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subline_contains?: InputMaybe<Scalars['String']>;
  subline_exists?: InputMaybe<Scalars['Boolean']>;
  subline_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  tabletTextAlignment?: InputMaybe<Scalars['String']>;
  tabletTextAlignment_contains?: InputMaybe<Scalars['String']>;
  tabletTextAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  tabletTextAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabletTextAlignment_not?: InputMaybe<Scalars['String']>;
  tabletTextAlignment_not_contains?: InputMaybe<Scalars['String']>;
  tabletTextAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  viewHeightSetMobile?: InputMaybe<Scalars['String']>;
  viewHeightSetMobile_contains?: InputMaybe<Scalars['String']>;
  viewHeightSetMobile_exists?: InputMaybe<Scalars['Boolean']>;
  viewHeightSetMobile_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  viewHeightSetMobile_not?: InputMaybe<Scalars['String']>;
  viewHeightSetMobile_not_contains?: InputMaybe<Scalars['String']>;
  viewHeightSetMobile_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentPageHeroBannerLinkingCollections = {
  __typename?: 'ContentPageHeroBannerLinkingCollections';
  cmsPageCollection?: Maybe<CmsPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ContentPageHeroBannerLinkingCollectionsCmsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentPageHeroBannerLinkingCollectionsCmsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentPageHeroBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ContentPageHeroBannerLinkingCollectionsCmsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeOfBannerAsc = 'typeOfBanner_ASC',
  TypeOfBannerDesc = 'typeOfBanner_DESC'
}

export enum ContentPageHeroBannerOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  DesktopTextAlignmentAsc = 'desktopTextAlignment_ASC',
  DesktopTextAlignmentDesc = 'desktopTextAlignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileTextAlignmentAsc = 'mobileTextAlignment_ASC',
  MobileTextAlignmentDesc = 'mobileTextAlignment_DESC',
  SublineShowOnDesktopAsc = 'sublineShowOnDesktop_ASC',
  SublineShowOnDesktopDesc = 'sublineShowOnDesktop_DESC',
  SublineShowOnMobileAsc = 'sublineShowOnMobile_ASC',
  SublineShowOnMobileDesc = 'sublineShowOnMobile_DESC',
  SublineShowOnTabletAsc = 'sublineShowOnTablet_ASC',
  SublineShowOnTabletDesc = 'sublineShowOnTablet_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletTextAlignmentAsc = 'tabletTextAlignment_ASC',
  TabletTextAlignmentDesc = 'tabletTextAlignment_DESC',
  ViewHeightSetMobileAsc = 'viewHeightSetMobile_ASC',
  ViewHeightSetMobileDesc = 'viewHeightSetMobile_DESC'
}

export type ContentPageHeroBannerSubline = {
  __typename?: 'ContentPageHeroBannerSubline';
  json: Scalars['JSON'];
  links: ContentPageHeroBannerSublineLinks;
};

export type ContentPageHeroBannerSublineAssets = {
  __typename?: 'ContentPageHeroBannerSublineAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentPageHeroBannerSublineEntries = {
  __typename?: 'ContentPageHeroBannerSublineEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentPageHeroBannerSublineLinks = {
  __typename?: 'ContentPageHeroBannerSublineLinks';
  assets: ContentPageHeroBannerSublineAssets;
  entries: ContentPageHeroBannerSublineEntries;
  resources: ContentPageHeroBannerSublineResources;
};

export type ContentPageHeroBannerSublineResources = {
  __typename?: 'ContentPageHeroBannerSublineResources';
  block: Array<ContentPageHeroBannerSublineResourcesBlock>;
  hyperlink: Array<ContentPageHeroBannerSublineResourcesHyperlink>;
  inline: Array<ContentPageHeroBannerSublineResourcesInline>;
};

export type ContentPageHeroBannerSublineResourcesBlock = ResourceLink & {
  __typename?: 'ContentPageHeroBannerSublineResourcesBlock';
  sys: ResourceSys;
};

export type ContentPageHeroBannerSublineResourcesHyperlink = ResourceLink & {
  __typename?: 'ContentPageHeroBannerSublineResourcesHyperlink';
  sys: ResourceSys;
};

export type ContentPageHeroBannerSublineResourcesInline = ResourceLink & {
  __typename?: 'ContentPageHeroBannerSublineResourcesInline';
  sys: ResourceSys;
};

export type ContentPageHeroBannerTitle = {
  __typename?: 'ContentPageHeroBannerTitle';
  json: Scalars['JSON'];
  links: ContentPageHeroBannerTitleLinks;
};

export type ContentPageHeroBannerTitleAssets = {
  __typename?: 'ContentPageHeroBannerTitleAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentPageHeroBannerTitleEntries = {
  __typename?: 'ContentPageHeroBannerTitleEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentPageHeroBannerTitleLinks = {
  __typename?: 'ContentPageHeroBannerTitleLinks';
  assets: ContentPageHeroBannerTitleAssets;
  entries: ContentPageHeroBannerTitleEntries;
  resources: ContentPageHeroBannerTitleResources;
};

export type ContentPageHeroBannerTitleResources = {
  __typename?: 'ContentPageHeroBannerTitleResources';
  block: Array<ContentPageHeroBannerTitleResourcesBlock>;
  hyperlink: Array<ContentPageHeroBannerTitleResourcesHyperlink>;
  inline: Array<ContentPageHeroBannerTitleResourcesInline>;
};

export type ContentPageHeroBannerTitleResourcesBlock = ResourceLink & {
  __typename?: 'ContentPageHeroBannerTitleResourcesBlock';
  sys: ResourceSys;
};

export type ContentPageHeroBannerTitleResourcesHyperlink = ResourceLink & {
  __typename?: 'ContentPageHeroBannerTitleResourcesHyperlink';
  sys: ResourceSys;
};

export type ContentPageHeroBannerTitleResourcesInline = ResourceLink & {
  __typename?: 'ContentPageHeroBannerTitleResourcesInline';
  sys: ResourceSys;
};

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** Call To Action [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cta) */
export type Cta = Entry & {
  __typename?: 'Cta';
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  link?: Maybe<NavigationLink>;
  linkedFrom?: Maybe<CtaLinkingCollections>;
  promotionEvents?: Maybe<PromotionEvents>;
  styling?: Maybe<Scalars['String']>;
  sys: Sys;
  testAutomationAttribute?: Maybe<Scalars['String']>;
  text?: Maybe<CtaText>;
  title?: Maybe<Scalars['String']>;
};


/** Call To Action [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cta) */
export type CtaInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Call To Action [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cta) */
export type CtaLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** Call To Action [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cta) */
export type CtaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Call To Action [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cta) */
export type CtaPromotionEventsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PromotionEventsFilter>;
};


/** Call To Action [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cta) */
export type CtaStylingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Call To Action [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cta) */
export type CtaTestAutomationAttributeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Call To Action [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cta) */
export type CtaTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Call To Action [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/cta) */
export type CtaTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type CtaCollection = {
  __typename?: 'CtaCollection';
  items: Array<Maybe<Cta>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CtaFilter = {
  AND?: InputMaybe<Array<InputMaybe<CtaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CtaFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfNavigationLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEvents?: InputMaybe<CfPromotionEventsNestedFilter>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  styling?: InputMaybe<Scalars['String']>;
  styling_contains?: InputMaybe<Scalars['String']>;
  styling_exists?: InputMaybe<Scalars['Boolean']>;
  styling_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  styling_not?: InputMaybe<Scalars['String']>;
  styling_not_contains?: InputMaybe<Scalars['String']>;
  styling_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  testAutomationAttribute?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_contains?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_exists?: InputMaybe<Scalars['Boolean']>;
  testAutomationAttribute_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  testAutomationAttribute_not?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_not_contains?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CtaLinkingCollections = {
  __typename?: 'CtaLinkingCollections';
  articleCarrouselCollection?: Maybe<ArticleCarrouselCollection>;
  campaignCarrouselCollection?: Maybe<CampaignCarrouselCollection>;
  campaignCollectionBlockCollection?: Maybe<CampaignCollectionBlockCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footerBottomBlockCollection?: Maybe<FooterBottomBlockCollection>;
  footerStoreBlockCollection?: Maybe<FooterStoreBlockCollection>;
  linksSectionWrapperCollection?: Maybe<LinksSectionWrapperCollection>;
  storyboardBannerCollection?: Maybe<StoryboardBannerCollection>;
  textWrapperRichCollection?: Maybe<TextWrapperRichCollection>;
  textWrapperRichPanelCollection?: Maybe<TextWrapperRichPanelCollection>;
};


export type CtaLinkingCollectionsArticleCarrouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsArticleCarrouselCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CtaLinkingCollectionsCampaignCarrouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsCampaignCarrouselCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CtaLinkingCollectionsCampaignCollectionBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsCampaignCollectionBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CtaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CtaLinkingCollectionsFooterBottomBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsFooterBottomBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CtaLinkingCollectionsFooterStoreBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsFooterStoreBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CtaLinkingCollectionsLinksSectionWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsLinksSectionWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CtaLinkingCollectionsStoryboardBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsStoryboardBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CtaLinkingCollectionsTextWrapperRichCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsTextWrapperRichCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CtaLinkingCollectionsTextWrapperRichPanelCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsTextWrapperRichPanelCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CtaLinkingCollectionsArticleCarrouselCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextLayoutAsc = 'textLayout_ASC',
  TextLayoutDesc = 'textLayout_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum CtaLinkingCollectionsCampaignCarrouselCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextLayoutAsc = 'textLayout_ASC',
  TextLayoutDesc = 'textLayout_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum CtaLinkingCollectionsCampaignCollectionBlockCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum CtaLinkingCollectionsFooterBottomBlockCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CtaLinkingCollectionsFooterStoreBlockCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum CtaLinkingCollectionsLinksSectionWrapperCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum CtaLinkingCollectionsStoryboardBannerCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CtaLinkingCollectionsTextWrapperRichCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum CtaLinkingCollectionsTextWrapperRichPanelCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum CtaOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  StylingAsc = 'styling_ASC',
  StylingDesc = 'styling_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestAutomationAttributeAsc = 'testAutomationAttribute_ASC',
  TestAutomationAttributeDesc = 'testAutomationAttribute_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CtaText = {
  __typename?: 'CtaText';
  json: Scalars['JSON'];
  links: CtaTextLinks;
};

export type CtaTextAssets = {
  __typename?: 'CtaTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CtaTextEntries = {
  __typename?: 'CtaTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CtaTextLinks = {
  __typename?: 'CtaTextLinks';
  assets: CtaTextAssets;
  entries: CtaTextEntries;
  resources: CtaTextResources;
};

export type CtaTextResources = {
  __typename?: 'CtaTextResources';
  block: Array<CtaTextResourcesBlock>;
  hyperlink: Array<CtaTextResourcesHyperlink>;
  inline: Array<CtaTextResourcesInline>;
};

export type CtaTextResourcesBlock = ResourceLink & {
  __typename?: 'CtaTextResourcesBlock';
  sys: ResourceSys;
};

export type CtaTextResourcesHyperlink = ResourceLink & {
  __typename?: 'CtaTextResourcesHyperlink';
  sys: ResourceSys;
};

export type CtaTextResourcesInline = ResourceLink & {
  __typename?: 'CtaTextResourcesInline';
  sys: ResourceSys;
};

export type CustomMadeInfo = {
  __typename?: 'CustomMadeInfo';
  /** Name of Property. */
  key?: Maybe<Scalars['String']>;
  /** Value of Property. */
  value?: Maybe<Scalars['String']>;
};

export type CustomMadeLineItem = LineItem & {
  __typename?: 'CustomMadeLineItem';
  /** Is Additional Product */
  IsAdditionalProduct: Scalars['Boolean'];
  /** Availability Status */
  availabilityStatus: AvailabilityStatus;
  /** Category of Item */
  categoryId: Scalars['String'];
  /** Custom Made CDN Image. */
  cdnImg: Scalars['String'];
  /** Custom Made Delivey Period. */
  deliveryPeriod: Scalars['String'];
  /** The product Desktop Image Bundle */
  desktopImage: Image;
  /** Custom Made Extra Order Info. */
  displayInfo: Array<Maybe<CustomMadeInfo>>;
  /** Configurator GUID. */
  guid: Scalars['ID'];
  /** Has Additional Product. */
  hasAdditionalProduct: Scalars['Boolean'];
  /** Is Suit. */
  isSuit: Scalars['Boolean'];
  /** Item ID */
  itemId: Scalars['String'];
  /** Configurator Master GUID. */
  masterGUID: Scalars['ID'];
  /** Master ProductId */
  masterProductId?: Maybe<Scalars['String']>;
  /** The product Mobile Image Bundle */
  mobileImage: Image;
  /** The price of the line item before applying any adjustments. If the line item is based on net pricing then the net price is returned. If the line item is based on gross pricing then the gross price is returned. */
  price: Scalars['Float'];
  /** The price of the product line item including item-level adjustments, but not including order-level adjustments or shipping charges. If the taxation policy is net, it doesn't include tax. If the taxation policy is gross, it includes tax. */
  priceAfterDiscount?: Maybe<Scalars['Float']>;
  /** The ID of the product. */
  productId: Scalars['String'];
  /** The name of the product. */
  productName: Scalars['String'];
  /** The quantity of the products represented by this item. */
  quantity: Scalars['Int'];
  /** The ID of the shipment this item belongs to. */
  shipmentId: Scalars['String'];
  /** Size of Custom Made. */
  size?: Maybe<Scalars['String']>;
  /** Suit Price. */
  suitPrice?: Maybe<Scalars['Float']>;
  /** URL of Item. */
  url?: Maybe<Scalars['String']>;
};

export type CustomerInfo = {
  __typename?: 'CustomerInfo';
  /** The customer name. */
  customerId: Scalars['String'];
  /** The customer's email address. */
  email?: Maybe<Scalars['String']>;
};

export type CustomerProductList = {
  __typename?: 'CustomerProductList';
  /** The product listitems */
  customerProductListItems?: Maybe<Array<Maybe<CustomerProductListItem>>>;
};

export type CustomerProductListItem = {
  __typename?: 'CustomerProductListItem';
  /** The unique identifier for the list. */
  id: Scalars['ID'];
  /** The Product */
  product: Product;
  /** The Product ID. */
  productId: Scalars['ID'];
};

export type CustomerProductListResult = {
  __typename?: 'CustomerProductListResult';
  /** The Customer Product Lists */
  data?: Maybe<Array<Maybe<CustomerProductList>>>;
};

/** Wrapper for dynamic specific content like Full-canvas construction [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/dynamicMediaWrapper) */
export type DynamicMediaWrapper = Entry & {
  __typename?: 'DynamicMediaWrapper';
  contentfulMetadata: ContentfulMetadata;
  dynamicContent?: Maybe<Scalars['String']>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<DynamicMediaWrapperLinkingCollections>;
  sys: Sys;
};


/** Wrapper for dynamic specific content like Full-canvas construction [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/dynamicMediaWrapper) */
export type DynamicMediaWrapperDynamicContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wrapper for dynamic specific content like Full-canvas construction [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/dynamicMediaWrapper) */
export type DynamicMediaWrapperInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wrapper for dynamic specific content like Full-canvas construction [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/dynamicMediaWrapper) */
export type DynamicMediaWrapperLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DynamicMediaWrapperCollection = {
  __typename?: 'DynamicMediaWrapperCollection';
  items: Array<Maybe<DynamicMediaWrapper>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type DynamicMediaWrapperFilter = {
  AND?: InputMaybe<Array<InputMaybe<DynamicMediaWrapperFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DynamicMediaWrapperFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dynamicContent?: InputMaybe<Scalars['String']>;
  dynamicContent_contains?: InputMaybe<Scalars['String']>;
  dynamicContent_exists?: InputMaybe<Scalars['Boolean']>;
  dynamicContent_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dynamicContent_not?: InputMaybe<Scalars['String']>;
  dynamicContent_not_contains?: InputMaybe<Scalars['String']>;
  dynamicContent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type DynamicMediaWrapperLinkingCollections = {
  __typename?: 'DynamicMediaWrapperLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  textAndImageRowBannerCollection?: Maybe<TextAndImageRowBannerCollection>;
};


export type DynamicMediaWrapperLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DynamicMediaWrapperLinkingCollectionsTextAndImageRowBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<DynamicMediaWrapperLinkingCollectionsTextAndImageRowBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum DynamicMediaWrapperLinkingCollectionsTextAndImageRowBannerCollectionOrder {
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum DynamicMediaWrapperOrder {
  DynamicContentAsc = 'dynamicContent_ASC',
  DynamicContentDesc = 'dynamicContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum Error_Codes {
  CartEmpty = 'CART_EMPTY',
  CartInvalid = 'CART_INVALID',
  CartInvalidTax = 'CART_INVALID_TAX',
  CouponInvalid = 'COUPON_INVALID',
  CustomMadeLineitemInvalid = 'CUSTOM_MADE_LINEITEM_INVALID',
  GiftCardLimitExceeds = 'GIFT_CARD_LIMIT_EXCEEDS',
  ProductLineitemOutofstock = 'PRODUCT_LINEITEM_OUTOFSTOCK'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** FAQ Section in Accordion look [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/faqAccordion) */
export type FaqAccordion = Entry & {
  __typename?: 'FaqAccordion';
  contentfulMetadata: ContentfulMetadata;
  faqItemsCollection?: Maybe<FaqAccordionFaqItemsCollection>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<FaqAccordionLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** FAQ Section in Accordion look [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/faqAccordion) */
export type FaqAccordionFaqItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FaqAccordionFaqItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqItemFilter>;
};


/** FAQ Section in Accordion look [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/faqAccordion) */
export type FaqAccordionInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** FAQ Section in Accordion look [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/faqAccordion) */
export type FaqAccordionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** FAQ Section in Accordion look [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/faqAccordion) */
export type FaqAccordionTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FaqAccordionCollection = {
  __typename?: 'FaqAccordionCollection';
  items: Array<Maybe<FaqAccordion>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FaqAccordionFaqItemsCollection = {
  __typename?: 'FaqAccordionFaqItemsCollection';
  items: Array<Maybe<FaqItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum FaqAccordionFaqItemsCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FaqAccordionFilter = {
  AND?: InputMaybe<Array<InputMaybe<FaqAccordionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FaqAccordionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  faqItems?: InputMaybe<CfFaqItemNestedFilter>;
  faqItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FaqAccordionLinkingCollections = {
  __typename?: 'FaqAccordionLinkingCollections';
  cmsPageCollection?: Maybe<CmsPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type FaqAccordionLinkingCollectionsCmsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FaqAccordionLinkingCollectionsCmsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FaqAccordionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FaqAccordionLinkingCollectionsCmsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeOfBannerAsc = 'typeOfBanner_ASC',
  TypeOfBannerDesc = 'typeOfBanner_DESC'
}

export enum FaqAccordionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Item for FAQ with question and Answer [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/faqItem) */
export type FaqItem = Entry & {
  __typename?: 'FaqItem';
  answer?: Maybe<FaqItemAnswer>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<FaqItemLinkingCollections>;
  question?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Item for FAQ with question and Answer [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/faqItem) */
export type FaqItemAnswerArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Item for FAQ with question and Answer [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/faqItem) */
export type FaqItemInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Item for FAQ with question and Answer [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/faqItem) */
export type FaqItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Item for FAQ with question and Answer [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/faqItem) */
export type FaqItemQuestionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FaqItemAnswer = {
  __typename?: 'FaqItemAnswer';
  json: Scalars['JSON'];
  links: FaqItemAnswerLinks;
};

export type FaqItemAnswerAssets = {
  __typename?: 'FaqItemAnswerAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type FaqItemAnswerEntries = {
  __typename?: 'FaqItemAnswerEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type FaqItemAnswerLinks = {
  __typename?: 'FaqItemAnswerLinks';
  assets: FaqItemAnswerAssets;
  entries: FaqItemAnswerEntries;
  resources: FaqItemAnswerResources;
};

export type FaqItemAnswerResources = {
  __typename?: 'FaqItemAnswerResources';
  block: Array<FaqItemAnswerResourcesBlock>;
  hyperlink: Array<FaqItemAnswerResourcesHyperlink>;
  inline: Array<FaqItemAnswerResourcesInline>;
};

export type FaqItemAnswerResourcesBlock = ResourceLink & {
  __typename?: 'FaqItemAnswerResourcesBlock';
  sys: ResourceSys;
};

export type FaqItemAnswerResourcesHyperlink = ResourceLink & {
  __typename?: 'FaqItemAnswerResourcesHyperlink';
  sys: ResourceSys;
};

export type FaqItemAnswerResourcesInline = ResourceLink & {
  __typename?: 'FaqItemAnswerResourcesInline';
  sys: ResourceSys;
};

export type FaqItemCollection = {
  __typename?: 'FaqItemCollection';
  items: Array<Maybe<FaqItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FaqItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<FaqItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FaqItemFilter>>>;
  answer_contains?: InputMaybe<Scalars['String']>;
  answer_exists?: InputMaybe<Scalars['Boolean']>;
  answer_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  question?: InputMaybe<Scalars['String']>;
  question_contains?: InputMaybe<Scalars['String']>;
  question_exists?: InputMaybe<Scalars['Boolean']>;
  question_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  question_not?: InputMaybe<Scalars['String']>;
  question_not_contains?: InputMaybe<Scalars['String']>;
  question_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type FaqItemLinkingCollections = {
  __typename?: 'FaqItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  faqAccordionCollection?: Maybe<FaqAccordionCollection>;
};


export type FaqItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FaqItemLinkingCollectionsFaqAccordionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FaqItemLinkingCollectionsFaqAccordionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FaqItemLinkingCollectionsFaqAccordionCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum FaqItemOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Footer [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footer) */
export type Footer = Entry & {
  __typename?: 'Footer';
  campaignSectionsCollection?: Maybe<FooterCampaignSectionsCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<FooterLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Footer [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footer) */
export type FooterCampaignSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterCampaignSectionsFilter>;
};


/** Footer [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footer) */
export type FooterInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Footer [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footer) */
export type FooterLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Footer [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footer) */
export type FooterSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Bottom Footer block with social icons and links. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerBottomBlock) */
export type FooterBottomBlock = Entry & {
  __typename?: 'FooterBottomBlock';
  contentSectionsCollection?: Maybe<FooterBottomBlockContentSectionsCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<FooterBottomBlockLinkingCollections>;
  sys: Sys;
};


/** Bottom Footer block with social icons and links. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerBottomBlock) */
export type FooterBottomBlockContentSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterBottomBlockContentSectionsFilter>;
};


/** Bottom Footer block with social icons and links. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerBottomBlock) */
export type FooterBottomBlockInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Bottom Footer block with social icons and links. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerBottomBlock) */
export type FooterBottomBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FooterBottomBlockCollection = {
  __typename?: 'FooterBottomBlockCollection';
  items: Array<Maybe<FooterBottomBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterBottomBlockContentSectionsCollection = {
  __typename?: 'FooterBottomBlockContentSectionsCollection';
  items: Array<Maybe<FooterBottomBlockContentSectionsItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterBottomBlockContentSectionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterBottomBlockContentSectionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterBottomBlockContentSectionsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type FooterBottomBlockContentSectionsItem = Cta | LinkWithImage | SocialLinksWrapper;

export type FooterBottomBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterBottomBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterBottomBlockFilter>>>;
  contentSections?: InputMaybe<CfcontentSectionsMultiTypeNestedFilter>;
  contentSectionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type FooterBottomBlockLinkingCollections = {
  __typename?: 'FooterBottomBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
};


export type FooterBottomBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FooterBottomBlockLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterBottomBlockLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FooterBottomBlockLinkingCollectionsFooterCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FooterBottomBlockOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FooterCampaignSectionsCollection = {
  __typename?: 'FooterCampaignSectionsCollection';
  items: Array<Maybe<FooterCampaignSectionsItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterCampaignSectionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterCampaignSectionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterCampaignSectionsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type FooterCampaignSectionsItem = FooterBottomBlock | FooterContactAndLinksBlock | FooterNewsletterBlock | FooterStoreBlock | FooterUspBlock;

export type FooterCollection = {
  __typename?: 'FooterCollection';
  items: Array<Maybe<Footer>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

/** Block for Contact Block and Link block [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerContactAndLinksBlock) */
export type FooterContactAndLinksBlock = Entry & {
  __typename?: 'FooterContactAndLinksBlock';
  contactSection?: Maybe<ContactSectionWrapper>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<FooterContactAndLinksBlockLinkingCollections>;
  listSectionsCollection?: Maybe<FooterContactAndLinksBlockListSectionsCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Block for Contact Block and Link block [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerContactAndLinksBlock) */
export type FooterContactAndLinksBlockContactSectionArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ContactSectionWrapperFilter>;
};


/** Block for Contact Block and Link block [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerContactAndLinksBlock) */
export type FooterContactAndLinksBlockInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Block for Contact Block and Link block [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerContactAndLinksBlock) */
export type FooterContactAndLinksBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Block for Contact Block and Link block [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerContactAndLinksBlock) */
export type FooterContactAndLinksBlockListSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterContactAndLinksBlockListSectionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinksSectionWrapperFilter>;
};


/** Block for Contact Block and Link block [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerContactAndLinksBlock) */
export type FooterContactAndLinksBlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FooterContactAndLinksBlockCollection = {
  __typename?: 'FooterContactAndLinksBlockCollection';
  items: Array<Maybe<FooterContactAndLinksBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterContactAndLinksBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterContactAndLinksBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterContactAndLinksBlockFilter>>>;
  contactSection?: InputMaybe<CfContactSectionWrapperNestedFilter>;
  contactSection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  listSections?: InputMaybe<CfLinksSectionWrapperNestedFilter>;
  listSectionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FooterContactAndLinksBlockLinkingCollections = {
  __typename?: 'FooterContactAndLinksBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
};


export type FooterContactAndLinksBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FooterContactAndLinksBlockLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterContactAndLinksBlockLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FooterContactAndLinksBlockLinkingCollectionsFooterCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FooterContactAndLinksBlockListSectionsCollection = {
  __typename?: 'FooterContactAndLinksBlockListSectionsCollection';
  items: Array<Maybe<LinksSectionWrapper>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum FooterContactAndLinksBlockListSectionsCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum FooterContactAndLinksBlockOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type FooterFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  campaignSections?: InputMaybe<CfcampaignSectionsMultiTypeNestedFilter>;
  campaignSectionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type FooterLinkingCollections = {
  __typename?: 'FooterLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FooterLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

/** Block containing info for newsletter signup block [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerNewsletterBlock) */
export type FooterNewsletterBlock = Entry & {
  __typename?: 'FooterNewsletterBlock';
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<FooterNewsletterBlockLinkingCollections>;
  promotionEvents?: Maybe<PromotionEvents>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Block containing info for newsletter signup block [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerNewsletterBlock) */
export type FooterNewsletterBlockInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Block containing info for newsletter signup block [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerNewsletterBlock) */
export type FooterNewsletterBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Block containing info for newsletter signup block [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerNewsletterBlock) */
export type FooterNewsletterBlockPromotionEventsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PromotionEventsFilter>;
};


/** Block containing info for newsletter signup block [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerNewsletterBlock) */
export type FooterNewsletterBlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FooterNewsletterBlockCollection = {
  __typename?: 'FooterNewsletterBlockCollection';
  items: Array<Maybe<FooterNewsletterBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterNewsletterBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterNewsletterBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterNewsletterBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEvents?: InputMaybe<CfPromotionEventsNestedFilter>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FooterNewsletterBlockLinkingCollections = {
  __typename?: 'FooterNewsletterBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
};


export type FooterNewsletterBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FooterNewsletterBlockLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterNewsletterBlockLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FooterNewsletterBlockLinkingCollectionsFooterCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FooterNewsletterBlockOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum FooterOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Footer block containing text, cta and image. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerStoreBlock) */
export type FooterStoreBlock = Entry & {
  __typename?: 'FooterStoreBlock';
  contentfulMetadata: ContentfulMetadata;
  cta?: Maybe<Cta>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<MediaWrapperV2>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<FooterStoreBlockLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Footer block containing text, cta and image. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerStoreBlock) */
export type FooterStoreBlockCtaArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CtaFilter>;
};


/** Footer block containing text, cta and image. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerStoreBlock) */
export type FooterStoreBlockDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Footer block containing text, cta and image. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerStoreBlock) */
export type FooterStoreBlockImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MediaWrapperV2Filter>;
};


/** Footer block containing text, cta and image. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerStoreBlock) */
export type FooterStoreBlockInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Footer block containing text, cta and image. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerStoreBlock) */
export type FooterStoreBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Footer block containing text, cta and image. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerStoreBlock) */
export type FooterStoreBlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FooterStoreBlockCollection = {
  __typename?: 'FooterStoreBlockCollection';
  items: Array<Maybe<FooterStoreBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterStoreBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterStoreBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterStoreBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta?: InputMaybe<CfCtaNestedFilter>;
  cta_exists?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image?: InputMaybe<CfMediaWrapperV2NestedFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FooterStoreBlockLinkingCollections = {
  __typename?: 'FooterStoreBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
};


export type FooterStoreBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FooterStoreBlockLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterStoreBlockLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FooterStoreBlockLinkingCollectionsFooterCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FooterStoreBlockOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Block containing multiple USP content entries with text, icon and cta [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerUspBlock) */
export type FooterUspBlock = Entry & {
  __typename?: 'FooterUspBlock';
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<FooterUspBlockLinkingCollections>;
  sys: Sys;
  uspListCollection?: Maybe<FooterUspBlockUspListCollection>;
};


/** Block containing multiple USP content entries with text, icon and cta [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerUspBlock) */
export type FooterUspBlockInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Block containing multiple USP content entries with text, icon and cta [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerUspBlock) */
export type FooterUspBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Block containing multiple USP content entries with text, icon and cta [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/footerUspBlock) */
export type FooterUspBlockUspListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterUspBlockUspListFilter>;
};

export type FooterUspBlockCollection = {
  __typename?: 'FooterUspBlockCollection';
  items: Array<Maybe<FooterUspBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterUspBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterUspBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterUspBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  uspList?: InputMaybe<CfuspListMultiTypeNestedFilter>;
  uspListCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type FooterUspBlockLinkingCollections = {
  __typename?: 'FooterUspBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
};


export type FooterUspBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FooterUspBlockLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterUspBlockLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FooterUspBlockLinkingCollectionsFooterCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FooterUspBlockOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FooterUspBlockUspListCollection = {
  __typename?: 'FooterUspBlockUspListCollection';
  items: Array<Maybe<FooterUspBlockUspListItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterUspBlockUspListFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterUspBlockUspListFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterUspBlockUspListFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta_exists?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  iconName?: InputMaybe<Scalars['String']>;
  iconName_contains?: InputMaybe<Scalars['String']>;
  iconName_exists?: InputMaybe<Scalars['Boolean']>;
  iconName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  iconName_not?: InputMaybe<Scalars['String']>;
  iconName_not_contains?: InputMaybe<Scalars['String']>;
  iconName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FooterUspBlockUspListItem = TextWrapperRich | TextWrapperRichPanel;

export type GiftCertificateItem = {
  __typename?: 'GiftCertificateItem';
  /** The gift certificate amount exceeds. */
  isAmountExceeds: Scalars['Boolean'];
  /** The item ID. */
  itemId: Scalars['ID'];
  /** The gift certificate message. */
  message?: Maybe<Scalars['String']>;
  /** The gift certificate item amount. */
  price: Scalars['Float'];
  /** The recipient email. */
  recipientEmail?: Maybe<Scalars['String']>;
  /** The recipient's name. */
  recipientName: Scalars['String'];
  /** The sender's name. */
  senderName?: Maybe<Scalars['String']>;
  /** The ID of the shipment this item belongs to. */
  shipmentId: Scalars['String'];
  /** The gift certificate type (physical / eletrical). */
  type: Scalars['String'];
};

/** Hero banner for homepage  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroBanner) */
export type HeroBanner = Entry & {
  __typename?: 'HeroBanner';
  colorPalette?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  desktopTextAlignment?: Maybe<Scalars['String']>;
  image?: Maybe<MediaWrapperV2>;
  internalTitle?: Maybe<Scalars['String']>;
  link?: Maybe<NavigationLink>;
  linkedFrom?: Maybe<HeroBannerLinkingCollections>;
  mobileTextAlignment?: Maybe<Scalars['String']>;
  promotionEvents?: Maybe<PromotionEvents>;
  subline?: Maybe<HeroBannerSubline>;
  sys: Sys;
  tabletTextAlignment?: Maybe<Scalars['String']>;
  title?: Maybe<HeroBannerTitle>;
};


/** Hero banner for homepage  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroBanner) */
export type HeroBannerColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Hero banner for homepage  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroBanner) */
export type HeroBannerDesktopTextAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Hero banner for homepage  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroBanner) */
export type HeroBannerImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MediaWrapperV2Filter>;
};


/** Hero banner for homepage  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroBanner) */
export type HeroBannerInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Hero banner for homepage  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroBanner) */
export type HeroBannerLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** Hero banner for homepage  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroBanner) */
export type HeroBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Hero banner for homepage  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroBanner) */
export type HeroBannerMobileTextAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Hero banner for homepage  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroBanner) */
export type HeroBannerPromotionEventsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PromotionEventsFilter>;
};


/** Hero banner for homepage  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroBanner) */
export type HeroBannerSublineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Hero banner for homepage  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroBanner) */
export type HeroBannerTabletTextAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Hero banner for homepage  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroBanner) */
export type HeroBannerTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type HeroBannerCollection = {
  __typename?: 'HeroBannerCollection';
  items: Array<Maybe<HeroBanner>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HeroBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroBannerFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktopTextAlignment?: InputMaybe<Scalars['String']>;
  desktopTextAlignment_contains?: InputMaybe<Scalars['String']>;
  desktopTextAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  desktopTextAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  desktopTextAlignment_not?: InputMaybe<Scalars['String']>;
  desktopTextAlignment_not_contains?: InputMaybe<Scalars['String']>;
  desktopTextAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image?: InputMaybe<CfMediaWrapperV2NestedFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfNavigationLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  mobileTextAlignment?: InputMaybe<Scalars['String']>;
  mobileTextAlignment_contains?: InputMaybe<Scalars['String']>;
  mobileTextAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  mobileTextAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mobileTextAlignment_not?: InputMaybe<Scalars['String']>;
  mobileTextAlignment_not_contains?: InputMaybe<Scalars['String']>;
  mobileTextAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEvents?: InputMaybe<CfPromotionEventsNestedFilter>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  subline_contains?: InputMaybe<Scalars['String']>;
  subline_exists?: InputMaybe<Scalars['Boolean']>;
  subline_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  tabletTextAlignment?: InputMaybe<Scalars['String']>;
  tabletTextAlignment_contains?: InputMaybe<Scalars['String']>;
  tabletTextAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  tabletTextAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabletTextAlignment_not?: InputMaybe<Scalars['String']>;
  tabletTextAlignment_not_contains?: InputMaybe<Scalars['String']>;
  tabletTextAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
};

export type HeroBannerLinkingCollections = {
  __typename?: 'HeroBannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
  journalPageCollection?: Maybe<JournalPageCollection>;
};


export type HeroBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeroBannerLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroBannerLinkingCollectionsHomepageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeroBannerLinkingCollectionsJournalPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroBannerLinkingCollectionsJournalPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum HeroBannerLinkingCollectionsHomepageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum HeroBannerLinkingCollectionsJournalPageCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopicAsc = 'topic_ASC',
  TopicDesc = 'topic_DESC'
}

export enum HeroBannerOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  DesktopTextAlignmentAsc = 'desktopTextAlignment_ASC',
  DesktopTextAlignmentDesc = 'desktopTextAlignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileTextAlignmentAsc = 'mobileTextAlignment_ASC',
  MobileTextAlignmentDesc = 'mobileTextAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletTextAlignmentAsc = 'tabletTextAlignment_ASC',
  TabletTextAlignmentDesc = 'tabletTextAlignment_DESC'
}

export type HeroBannerSubline = {
  __typename?: 'HeroBannerSubline';
  json: Scalars['JSON'];
  links: HeroBannerSublineLinks;
};

export type HeroBannerSublineAssets = {
  __typename?: 'HeroBannerSublineAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type HeroBannerSublineEntries = {
  __typename?: 'HeroBannerSublineEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type HeroBannerSublineLinks = {
  __typename?: 'HeroBannerSublineLinks';
  assets: HeroBannerSublineAssets;
  entries: HeroBannerSublineEntries;
  resources: HeroBannerSublineResources;
};

export type HeroBannerSublineResources = {
  __typename?: 'HeroBannerSublineResources';
  block: Array<HeroBannerSublineResourcesBlock>;
  hyperlink: Array<HeroBannerSublineResourcesHyperlink>;
  inline: Array<HeroBannerSublineResourcesInline>;
};

export type HeroBannerSublineResourcesBlock = ResourceLink & {
  __typename?: 'HeroBannerSublineResourcesBlock';
  sys: ResourceSys;
};

export type HeroBannerSublineResourcesHyperlink = ResourceLink & {
  __typename?: 'HeroBannerSublineResourcesHyperlink';
  sys: ResourceSys;
};

export type HeroBannerSublineResourcesInline = ResourceLink & {
  __typename?: 'HeroBannerSublineResourcesInline';
  sys: ResourceSys;
};

export type HeroBannerTitle = {
  __typename?: 'HeroBannerTitle';
  json: Scalars['JSON'];
  links: HeroBannerTitleLinks;
};

export type HeroBannerTitleAssets = {
  __typename?: 'HeroBannerTitleAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type HeroBannerTitleEntries = {
  __typename?: 'HeroBannerTitleEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type HeroBannerTitleLinks = {
  __typename?: 'HeroBannerTitleLinks';
  assets: HeroBannerTitleAssets;
  entries: HeroBannerTitleEntries;
  resources: HeroBannerTitleResources;
};

export type HeroBannerTitleResources = {
  __typename?: 'HeroBannerTitleResources';
  block: Array<HeroBannerTitleResourcesBlock>;
  hyperlink: Array<HeroBannerTitleResourcesHyperlink>;
  inline: Array<HeroBannerTitleResourcesInline>;
};

export type HeroBannerTitleResourcesBlock = ResourceLink & {
  __typename?: 'HeroBannerTitleResourcesBlock';
  sys: ResourceSys;
};

export type HeroBannerTitleResourcesHyperlink = ResourceLink & {
  __typename?: 'HeroBannerTitleResourcesHyperlink';
  sys: ResourceSys;
};

export type HeroBannerTitleResourcesInline = ResourceLink & {
  __typename?: 'HeroBannerTitleResourcesInline';
  sys: ResourceSys;
};

/** Banner with full-width image and links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroBannerWithLinks) */
export type HeroBannerWithLinks = Entry & {
  __typename?: 'HeroBannerWithLinks';
  content?: Maybe<HeroBannerWithLinksContent>;
  contentfulMetadata: ContentfulMetadata;
  heroListLinksCollection?: Maybe<HeroBannerWithLinksHeroListLinksCollection>;
  internalTitle?: Maybe<Scalars['String']>;
  link?: Maybe<NavigationLink>;
  linkedFrom?: Maybe<HeroBannerWithLinksLinkingCollections>;
  promotionEvents?: Maybe<PromotionEvents>;
  sys: Sys;
};


/** Banner with full-width image and links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroBannerWithLinks) */
export type HeroBannerWithLinksContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Banner with full-width image and links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroBannerWithLinks) */
export type HeroBannerWithLinksHeroListLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroBannerWithLinksHeroListLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeroLinkItemFilter>;
};


/** Banner with full-width image and links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroBannerWithLinks) */
export type HeroBannerWithLinksInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with full-width image and links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroBannerWithLinks) */
export type HeroBannerWithLinksLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** Banner with full-width image and links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroBannerWithLinks) */
export type HeroBannerWithLinksLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Banner with full-width image and links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroBannerWithLinks) */
export type HeroBannerWithLinksPromotionEventsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PromotionEventsFilter>;
};

export type HeroBannerWithLinksCollection = {
  __typename?: 'HeroBannerWithLinksCollection';
  items: Array<Maybe<HeroBannerWithLinks>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HeroBannerWithLinksContent = MediaWrapperV2 | VideoWrapper;

export type HeroBannerWithLinksFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroBannerWithLinksFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroBannerWithLinksFilter>>>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heroListLinks?: InputMaybe<CfHeroLinkItemNestedFilter>;
  heroListLinksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfNavigationLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEvents?: InputMaybe<CfPromotionEventsNestedFilter>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type HeroBannerWithLinksHeroListLinksCollection = {
  __typename?: 'HeroBannerWithLinksHeroListLinksCollection';
  items: Array<Maybe<HeroLinkItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum HeroBannerWithLinksHeroListLinksCollectionOrder {
  AutomationIdAsc = 'automationId_ASC',
  AutomationIdDesc = 'automationId_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestAutomationAttributeAsc = 'testAutomationAttribute_ASC',
  TestAutomationAttributeDesc = 'testAutomationAttribute_DESC'
}

export type HeroBannerWithLinksLinkingCollections = {
  __typename?: 'HeroBannerWithLinksLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
};


export type HeroBannerWithLinksLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeroBannerWithLinksLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroBannerWithLinksLinkingCollectionsHomepageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum HeroBannerWithLinksLinkingCollectionsHomepageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum HeroBannerWithLinksOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Item with link info for hero links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroLinkItem) */
export type HeroLinkItem = Entry & {
  __typename?: 'HeroLinkItem';
  automationId?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  link?: Maybe<NavigationLink>;
  linkText?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<HeroLinkItemLinkingCollections>;
  promotionEvents?: Maybe<PromotionEvents>;
  sys: Sys;
  testAutomationAttribute?: Maybe<Scalars['String']>;
};


/** Item with link info for hero links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroLinkItem) */
export type HeroLinkItemAutomationIdArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Item with link info for hero links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroLinkItem) */
export type HeroLinkItemInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Item with link info for hero links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroLinkItem) */
export type HeroLinkItemLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** Item with link info for hero links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroLinkItem) */
export type HeroLinkItemLinkTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Item with link info for hero links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroLinkItem) */
export type HeroLinkItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Item with link info for hero links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroLinkItem) */
export type HeroLinkItemPromotionEventsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PromotionEventsFilter>;
};


/** Item with link info for hero links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/heroLinkItem) */
export type HeroLinkItemTestAutomationAttributeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type HeroLinkItemCollection = {
  __typename?: 'HeroLinkItemCollection';
  items: Array<Maybe<HeroLinkItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HeroLinkItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroLinkItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroLinkItemFilter>>>;
  automationId?: InputMaybe<Scalars['String']>;
  automationId_contains?: InputMaybe<Scalars['String']>;
  automationId_exists?: InputMaybe<Scalars['Boolean']>;
  automationId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  automationId_not?: InputMaybe<Scalars['String']>;
  automationId_not_contains?: InputMaybe<Scalars['String']>;
  automationId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfNavigationLinkNestedFilter>;
  linkText?: InputMaybe<Scalars['String']>;
  linkText_contains?: InputMaybe<Scalars['String']>;
  linkText_exists?: InputMaybe<Scalars['Boolean']>;
  linkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkText_not?: InputMaybe<Scalars['String']>;
  linkText_not_contains?: InputMaybe<Scalars['String']>;
  linkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEvents?: InputMaybe<CfPromotionEventsNestedFilter>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  testAutomationAttribute?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_contains?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_exists?: InputMaybe<Scalars['Boolean']>;
  testAutomationAttribute_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  testAutomationAttribute_not?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_not_contains?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeroLinkItemLinkingCollections = {
  __typename?: 'HeroLinkItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  heroBannerWithLinksCollection?: Maybe<HeroBannerWithLinksCollection>;
};


export type HeroLinkItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeroLinkItemLinkingCollectionsHeroBannerWithLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroLinkItemLinkingCollectionsHeroBannerWithLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum HeroLinkItemLinkingCollectionsHeroBannerWithLinksCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeroLinkItemOrder {
  AutomationIdAsc = 'automationId_ASC',
  AutomationIdDesc = 'automationId_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestAutomationAttributeAsc = 'testAutomationAttribute_ASC',
  TestAutomationAttributeDesc = 'testAutomationAttribute_DESC'
}

/** Homepage [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/homepage) */
export type Homepage = Entry & {
  __typename?: 'Homepage';
  campaignSectionsCollection?: Maybe<HomepageCampaignSectionsCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<HomepageLinkingCollections>;
  seoMetadata?: Maybe<SeoMetadata>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Homepage [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/homepage) */
export type HomepageCampaignSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HomepageCampaignSectionsFilter>;
};


/** Homepage [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/homepage) */
export type HomepageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Homepage [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/homepage) */
export type HomepageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Homepage [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/homepage) */
export type HomepageSeoMetadataArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<SeoMetadataFilter>;
};


/** Homepage [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/homepage) */
export type HomepageSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Homepage [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/homepage) */
export type HomepageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type HomepageCampaignSectionsCollection = {
  __typename?: 'HomepageCampaignSectionsCollection';
  items: Array<Maybe<HomepageCampaignSectionsItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HomepageCampaignSectionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomepageCampaignSectionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HomepageCampaignSectionsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type HomepageCampaignSectionsItem = ArticleCarrousel | CampaignCarrousel | CampaignCollectionBlock | HeroBanner | HeroBannerWithLinks | ImageCarrouselContainer | ImageWithText | StoryboardBanner;

export type HomepageCollection = {
  __typename?: 'HomepageCollection';
  items: Array<Maybe<Homepage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HomepageFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomepageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HomepageFilter>>>;
  campaignSections?: InputMaybe<CfcampaignSectionsMultiTypeNestedFilter>;
  campaignSectionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seoMetadata?: InputMaybe<CfSeoMetadataNestedFilter>;
  seoMetadata_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomepageLinkingCollections = {
  __typename?: 'HomepageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HomepageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum HomepageOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Represents an Image */
export type Image = {
  __typename?: 'Image';
  breakpoint?: Maybe<Scalars['String']>;
  srcset?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** Container for one or multiple carrousel blocks [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/imageCarrouselContainer) */
export type ImageCarrouselContainer = Entry & {
  __typename?: 'ImageCarrouselContainer';
  carouselBlocksCollection?: Maybe<ImageCarrouselContainerCarouselBlocksCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ImageCarrouselContainerLinkingCollections>;
  sys: Sys;
};


/** Container for one or multiple carrousel blocks [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/imageCarrouselContainer) */
export type ImageCarrouselContainerCarouselBlocksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageCarrouselContainerCarouselBlocksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CarouselWithTextFilter>;
};


/** Container for one or multiple carrousel blocks [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/imageCarrouselContainer) */
export type ImageCarrouselContainerInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container for one or multiple carrousel blocks [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/imageCarrouselContainer) */
export type ImageCarrouselContainerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ImageCarrouselContainerCarouselBlocksCollection = {
  __typename?: 'ImageCarrouselContainerCarouselBlocksCollection';
  items: Array<Maybe<CarouselWithText>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum ImageCarrouselContainerCarouselBlocksCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  DesktopCarrouselAsc = 'desktopCarrousel_ASC',
  DesktopCarrouselDesc = 'desktopCarrousel_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileCarrouselAsc = 'mobileCarrousel_ASC',
  MobileCarrouselDesc = 'mobileCarrousel_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletCarrouselAsc = 'tabletCarrousel_ASC',
  TabletCarrouselDesc = 'tabletCarrousel_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ImageCarrouselContainerCollection = {
  __typename?: 'ImageCarrouselContainerCollection';
  items: Array<Maybe<ImageCarrouselContainer>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ImageCarrouselContainerFilter = {
  AND?: InputMaybe<Array<InputMaybe<ImageCarrouselContainerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ImageCarrouselContainerFilter>>>;
  carouselBlocks?: InputMaybe<CfCarouselWithTextNestedFilter>;
  carouselBlocksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ImageCarrouselContainerLinkingCollections = {
  __typename?: 'ImageCarrouselContainerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
};


export type ImageCarrouselContainerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageCarrouselContainerLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageCarrouselContainerLinkingCollectionsHomepageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ImageCarrouselContainerLinkingCollectionsHomepageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ImageCarrouselContainerOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** Image with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/imageWithText) */
export type ImageWithText = Entry & {
  __typename?: 'ImageWithText';
  colorPalette?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  desktopTextAlignment?: Maybe<Scalars['String']>;
  image?: Maybe<MediaWrapperV2>;
  internalTitle?: Maybe<Scalars['String']>;
  link?: Maybe<NavigationLink>;
  linkedFrom?: Maybe<ImageWithTextLinkingCollections>;
  mobileTextAlignment?: Maybe<Scalars['String']>;
  promotionEvents?: Maybe<PromotionEvents>;
  subline?: Maybe<ImageWithTextSubline>;
  sys: Sys;
  tabletTextAlignment?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


/** Image with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/imageWithText) */
export type ImageWithTextColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Image with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/imageWithText) */
export type ImageWithTextDesktopTextAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Image with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/imageWithText) */
export type ImageWithTextImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MediaWrapperV2Filter>;
};


/** Image with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/imageWithText) */
export type ImageWithTextInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Image with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/imageWithText) */
export type ImageWithTextLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** Image with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/imageWithText) */
export type ImageWithTextLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Image with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/imageWithText) */
export type ImageWithTextMobileTextAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Image with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/imageWithText) */
export type ImageWithTextPromotionEventsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PromotionEventsFilter>;
};


/** Image with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/imageWithText) */
export type ImageWithTextSublineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Image with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/imageWithText) */
export type ImageWithTextTabletTextAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Image with text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/imageWithText) */
export type ImageWithTextTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ImageWithTextCollection = {
  __typename?: 'ImageWithTextCollection';
  items: Array<Maybe<ImageWithText>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ImageWithTextFilter = {
  AND?: InputMaybe<Array<InputMaybe<ImageWithTextFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ImageWithTextFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktopTextAlignment?: InputMaybe<Scalars['String']>;
  desktopTextAlignment_contains?: InputMaybe<Scalars['String']>;
  desktopTextAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  desktopTextAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  desktopTextAlignment_not?: InputMaybe<Scalars['String']>;
  desktopTextAlignment_not_contains?: InputMaybe<Scalars['String']>;
  desktopTextAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image?: InputMaybe<CfMediaWrapperV2NestedFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfNavigationLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  mobileTextAlignment?: InputMaybe<Scalars['String']>;
  mobileTextAlignment_contains?: InputMaybe<Scalars['String']>;
  mobileTextAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  mobileTextAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mobileTextAlignment_not?: InputMaybe<Scalars['String']>;
  mobileTextAlignment_not_contains?: InputMaybe<Scalars['String']>;
  mobileTextAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEvents?: InputMaybe<CfPromotionEventsNestedFilter>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  subline_contains?: InputMaybe<Scalars['String']>;
  subline_exists?: InputMaybe<Scalars['Boolean']>;
  subline_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  tabletTextAlignment?: InputMaybe<Scalars['String']>;
  tabletTextAlignment_contains?: InputMaybe<Scalars['String']>;
  tabletTextAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  tabletTextAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabletTextAlignment_not?: InputMaybe<Scalars['String']>;
  tabletTextAlignment_not_contains?: InputMaybe<Scalars['String']>;
  tabletTextAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ImageWithTextLinkingCollections = {
  __typename?: 'ImageWithTextLinkingCollections';
  articleCarrouselCollection?: Maybe<ArticleCarrouselCollection>;
  campaignCollectionBlockCollection?: Maybe<CampaignCollectionBlockCollection>;
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
  journalPageCollection?: Maybe<JournalPageCollection>;
};


export type ImageWithTextLinkingCollectionsArticleCarrouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageWithTextLinkingCollectionsArticleCarrouselCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageWithTextLinkingCollectionsCampaignCollectionBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageWithTextLinkingCollectionsCampaignCollectionBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageWithTextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageWithTextLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageWithTextLinkingCollectionsHomepageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageWithTextLinkingCollectionsJournalPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageWithTextLinkingCollectionsJournalPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ImageWithTextLinkingCollectionsArticleCarrouselCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextLayoutAsc = 'textLayout_ASC',
  TextLayoutDesc = 'textLayout_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ImageWithTextLinkingCollectionsCampaignCollectionBlockCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ImageWithTextLinkingCollectionsHomepageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ImageWithTextLinkingCollectionsJournalPageCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopicAsc = 'topic_ASC',
  TopicDesc = 'topic_DESC'
}

export enum ImageWithTextOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  DesktopTextAlignmentAsc = 'desktopTextAlignment_ASC',
  DesktopTextAlignmentDesc = 'desktopTextAlignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileTextAlignmentAsc = 'mobileTextAlignment_ASC',
  MobileTextAlignmentDesc = 'mobileTextAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletTextAlignmentAsc = 'tabletTextAlignment_ASC',
  TabletTextAlignmentDesc = 'tabletTextAlignment_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ImageWithTextSubline = {
  __typename?: 'ImageWithTextSubline';
  json: Scalars['JSON'];
  links: ImageWithTextSublineLinks;
};

export type ImageWithTextSublineAssets = {
  __typename?: 'ImageWithTextSublineAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ImageWithTextSublineEntries = {
  __typename?: 'ImageWithTextSublineEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ImageWithTextSublineLinks = {
  __typename?: 'ImageWithTextSublineLinks';
  assets: ImageWithTextSublineAssets;
  entries: ImageWithTextSublineEntries;
  resources: ImageWithTextSublineResources;
};

export type ImageWithTextSublineResources = {
  __typename?: 'ImageWithTextSublineResources';
  block: Array<ImageWithTextSublineResourcesBlock>;
  hyperlink: Array<ImageWithTextSublineResourcesHyperlink>;
  inline: Array<ImageWithTextSublineResourcesInline>;
};

export type ImageWithTextSublineResourcesBlock = ResourceLink & {
  __typename?: 'ImageWithTextSublineResourcesBlock';
  sys: ResourceSys;
};

export type ImageWithTextSublineResourcesHyperlink = ResourceLink & {
  __typename?: 'ImageWithTextSublineResourcesHyperlink';
  sys: ResourceSys;
};

export type ImageWithTextSublineResourcesInline = ResourceLink & {
  __typename?: 'ImageWithTextSublineResourcesInline';
  sys: ResourceSys;
};

/** Content block with Image, subtitle, title, description and button options [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalCenterContentBlock) */
export type JournalCenterContentBlock = Entry & {
  __typename?: 'JournalCenterContentBlock';
  automationId?: Maybe<Scalars['String']>;
  button?: Maybe<JournalCenterContentBlockButton>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<JournalCenterContentBlockDescription>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<JournalCenterContentBlockLinkingCollections>;
  mediaContent?: Maybe<MediaWrapperV2>;
  subTitle?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Content block with Image, subtitle, title, description and button options [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalCenterContentBlock) */
export type JournalCenterContentBlockAutomationIdArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Content block with Image, subtitle, title, description and button options [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalCenterContentBlock) */
export type JournalCenterContentBlockButtonArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Content block with Image, subtitle, title, description and button options [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalCenterContentBlock) */
export type JournalCenterContentBlockDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Content block with Image, subtitle, title, description and button options [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalCenterContentBlock) */
export type JournalCenterContentBlockInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Content block with Image, subtitle, title, description and button options [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalCenterContentBlock) */
export type JournalCenterContentBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Content block with Image, subtitle, title, description and button options [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalCenterContentBlock) */
export type JournalCenterContentBlockMediaContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MediaWrapperV2Filter>;
};


/** Content block with Image, subtitle, title, description and button options [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalCenterContentBlock) */
export type JournalCenterContentBlockSubTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Content block with Image, subtitle, title, description and button options [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalCenterContentBlock) */
export type JournalCenterContentBlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type JournalCenterContentBlockButton = Button | StickyButton;

export type JournalCenterContentBlockCollection = {
  __typename?: 'JournalCenterContentBlockCollection';
  items: Array<Maybe<JournalCenterContentBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type JournalCenterContentBlockDescription = {
  __typename?: 'JournalCenterContentBlockDescription';
  json: Scalars['JSON'];
  links: JournalCenterContentBlockDescriptionLinks;
};

export type JournalCenterContentBlockDescriptionAssets = {
  __typename?: 'JournalCenterContentBlockDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type JournalCenterContentBlockDescriptionEntries = {
  __typename?: 'JournalCenterContentBlockDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type JournalCenterContentBlockDescriptionLinks = {
  __typename?: 'JournalCenterContentBlockDescriptionLinks';
  assets: JournalCenterContentBlockDescriptionAssets;
  entries: JournalCenterContentBlockDescriptionEntries;
  resources: JournalCenterContentBlockDescriptionResources;
};

export type JournalCenterContentBlockDescriptionResources = {
  __typename?: 'JournalCenterContentBlockDescriptionResources';
  block: Array<JournalCenterContentBlockDescriptionResourcesBlock>;
  hyperlink: Array<JournalCenterContentBlockDescriptionResourcesHyperlink>;
  inline: Array<JournalCenterContentBlockDescriptionResourcesInline>;
};

export type JournalCenterContentBlockDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'JournalCenterContentBlockDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type JournalCenterContentBlockDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'JournalCenterContentBlockDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type JournalCenterContentBlockDescriptionResourcesInline = ResourceLink & {
  __typename?: 'JournalCenterContentBlockDescriptionResourcesInline';
  sys: ResourceSys;
};

export type JournalCenterContentBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<JournalCenterContentBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<JournalCenterContentBlockFilter>>>;
  automationId?: InputMaybe<Scalars['String']>;
  automationId_contains?: InputMaybe<Scalars['String']>;
  automationId_exists?: InputMaybe<Scalars['Boolean']>;
  automationId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  automationId_not?: InputMaybe<Scalars['String']>;
  automationId_not_contains?: InputMaybe<Scalars['String']>;
  automationId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  button_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mediaContent?: InputMaybe<CfMediaWrapperV2NestedFilter>;
  mediaContent_exists?: InputMaybe<Scalars['Boolean']>;
  subTitle?: InputMaybe<Scalars['String']>;
  subTitle_contains?: InputMaybe<Scalars['String']>;
  subTitle_exists?: InputMaybe<Scalars['Boolean']>;
  subTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subTitle_not?: InputMaybe<Scalars['String']>;
  subTitle_not_contains?: InputMaybe<Scalars['String']>;
  subTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type JournalCenterContentBlockLinkingCollections = {
  __typename?: 'JournalCenterContentBlockLinkingCollections';
  cmsPageCollection?: Maybe<CmsPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type JournalCenterContentBlockLinkingCollectionsCmsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<JournalCenterContentBlockLinkingCollectionsCmsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type JournalCenterContentBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum JournalCenterContentBlockLinkingCollectionsCmsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeOfBannerAsc = 'typeOfBanner_ASC',
  TypeOfBannerDesc = 'typeOfBanner_DESC'
}

export enum JournalCenterContentBlockOrder {
  AutomationIdAsc = 'automationId_ASC',
  AutomationIdDesc = 'automationId_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SubTitleAsc = 'subTitle_ASC',
  SubTitleDesc = 'subTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Journal Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalPage) */
export type JournalPage = Entry & {
  __typename?: 'JournalPage';
  campaignSectionsCollection?: Maybe<JournalPageCampaignSectionsCollection>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  link?: Maybe<NavigationLink>;
  linkedFrom?: Maybe<JournalPageLinkingCollections>;
  promotionEvents?: Maybe<PromotionEvents>;
  seoMetadata?: Maybe<SeoMetadata>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  thumbnailImage?: Maybe<MediaWrapperV2>;
  title?: Maybe<Scalars['String']>;
  topic?: Maybe<Scalars['String']>;
};


/** Journal Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalPage) */
export type JournalPageCampaignSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JournalPageCampaignSectionsFilter>;
};


/** Journal Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalPage) */
export type JournalPageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Journal Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalPage) */
export type JournalPageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Journal Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalPage) */
export type JournalPageLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** Journal Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalPage) */
export type JournalPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Journal Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalPage) */
export type JournalPagePromotionEventsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PromotionEventsFilter>;
};


/** Journal Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalPage) */
export type JournalPageSeoMetadataArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<SeoMetadataFilter>;
};


/** Journal Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalPage) */
export type JournalPageSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Journal Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalPage) */
export type JournalPageThumbnailImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MediaWrapperV2Filter>;
};


/** Journal Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalPage) */
export type JournalPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Journal Page [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/journalPage) */
export type JournalPageTopicArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type JournalPageCampaignSectionsCollection = {
  __typename?: 'JournalPageCampaignSectionsCollection';
  items: Array<Maybe<JournalPageCampaignSectionsItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type JournalPageCampaignSectionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<JournalPageCampaignSectionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<JournalPageCampaignSectionsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subline_contains?: InputMaybe<Scalars['String']>;
  subline_exists?: InputMaybe<Scalars['Boolean']>;
  subline_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
};

export type JournalPageCampaignSectionsItem = ArticleCarrousel | CampaignCarrousel | CampaignCollectionBlock | HeroBanner | ImageWithText;

export type JournalPageCollection = {
  __typename?: 'JournalPageCollection';
  items: Array<Maybe<JournalPage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type JournalPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<JournalPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<JournalPageFilter>>>;
  campaignSections?: InputMaybe<CfcampaignSectionsMultiTypeNestedFilter>;
  campaignSectionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfNavigationLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEvents?: InputMaybe<CfPromotionEventsNestedFilter>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  seoMetadata?: InputMaybe<CfSeoMetadataNestedFilter>;
  seoMetadata_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnailImage?: InputMaybe<CfMediaWrapperV2NestedFilter>;
  thumbnailImage_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  topic?: InputMaybe<Scalars['String']>;
  topic_contains?: InputMaybe<Scalars['String']>;
  topic_exists?: InputMaybe<Scalars['Boolean']>;
  topic_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  topic_not?: InputMaybe<Scalars['String']>;
  topic_not_contains?: InputMaybe<Scalars['String']>;
  topic_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type JournalPageLinkingCollections = {
  __typename?: 'JournalPageLinkingCollections';
  articleCarrouselCollection?: Maybe<ArticleCarrouselCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type JournalPageLinkingCollectionsArticleCarrouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<JournalPageLinkingCollectionsArticleCarrouselCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type JournalPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum JournalPageLinkingCollectionsArticleCarrouselCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextLayoutAsc = 'textLayout_ASC',
  TextLayoutDesc = 'textLayout_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum JournalPageOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopicAsc = 'topic_ASC',
  TopicDesc = 'topic_DESC'
}

export type LineItem = {
  /** Availability Status */
  availabilityStatus: AvailabilityStatus;
  /** Category of Item */
  categoryId: Scalars['String'];
  /** The product Desktop Image Bundle */
  desktopImage: Image;
  /** Item ID */
  itemId: Scalars['String'];
  /** Master ProductId */
  masterProductId?: Maybe<Scalars['String']>;
  /** The product Mobile Image Bundle */
  mobileImage: Image;
  /** The price of the line item before applying any adjustments. If the line item is based on net pricing then the net price is returned. If the line item is based on gross pricing then the gross price is returned. */
  price: Scalars['Float'];
  /** The price of the product line item including item-level adjustments, but not including order-level adjustments or shipping charges. If the taxation policy is net, it doesn't include tax. If the taxation policy is gross, it includes tax. */
  priceAfterDiscount?: Maybe<Scalars['Float']>;
  /** The ID of the product. */
  productId: Scalars['String'];
  /** The name of the product. */
  productName: Scalars['String'];
  /** The quantity of the products represented by this item. */
  quantity: Scalars['Int'];
  /** The ID of the shipment this item belongs to. */
  shipmentId: Scalars['String'];
  /** Size of Item. */
  size?: Maybe<Scalars['String']>;
  /** URL of Item. */
  url?: Maybe<Scalars['String']>;
};

/** Linked Social icons  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/linkWithIcon) */
export type LinkWithIcon = Entry & {
  __typename?: 'LinkWithIcon';
  contentfulMetadata: ContentfulMetadata;
  iconName?: Maybe<Scalars['String']>;
  internalTitle?: Maybe<Scalars['String']>;
  link?: Maybe<NavigationLink>;
  linkedFrom?: Maybe<LinkWithIconLinkingCollections>;
  promotionEvents?: Maybe<PromotionEvents>;
  sys: Sys;
};


/** Linked Social icons  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/linkWithIcon) */
export type LinkWithIconIconNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Linked Social icons  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/linkWithIcon) */
export type LinkWithIconInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Linked Social icons  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/linkWithIcon) */
export type LinkWithIconLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** Linked Social icons  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/linkWithIcon) */
export type LinkWithIconLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Linked Social icons  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/linkWithIcon) */
export type LinkWithIconPromotionEventsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PromotionEventsFilter>;
};

export type LinkWithIconCollection = {
  __typename?: 'LinkWithIconCollection';
  items: Array<Maybe<LinkWithIcon>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LinkWithIconFilter = {
  AND?: InputMaybe<Array<InputMaybe<LinkWithIconFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LinkWithIconFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  iconName?: InputMaybe<Scalars['String']>;
  iconName_contains?: InputMaybe<Scalars['String']>;
  iconName_exists?: InputMaybe<Scalars['Boolean']>;
  iconName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  iconName_not?: InputMaybe<Scalars['String']>;
  iconName_not_contains?: InputMaybe<Scalars['String']>;
  iconName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfNavigationLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEvents?: InputMaybe<CfPromotionEventsNestedFilter>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type LinkWithIconLinkingCollections = {
  __typename?: 'LinkWithIconLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  socialLinksWrapperCollection?: Maybe<SocialLinksWrapperCollection>;
};


export type LinkWithIconLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LinkWithIconLinkingCollectionsSocialLinksWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LinkWithIconLinkingCollectionsSocialLinksWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum LinkWithIconLinkingCollectionsSocialLinksWrapperCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LinkWithIconOrder {
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Image and text both linked [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/linkWithImage) */
export type LinkWithImage = Entry & {
  __typename?: 'LinkWithImage';
  cloudinaryImage?: Maybe<Scalars['JSON']>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  link?: Maybe<NavigationLink>;
  linkedFrom?: Maybe<LinkWithImageLinkingCollections>;
  promotionEvents?: Maybe<PromotionEvents>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Image and text both linked [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/linkWithImage) */
export type LinkWithImageCloudinaryImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Image and text both linked [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/linkWithImage) */
export type LinkWithImageInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Image and text both linked [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/linkWithImage) */
export type LinkWithImageLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** Image and text both linked [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/linkWithImage) */
export type LinkWithImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Image and text both linked [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/linkWithImage) */
export type LinkWithImagePromotionEventsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PromotionEventsFilter>;
};


/** Image and text both linked [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/linkWithImage) */
export type LinkWithImageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type LinkWithImageCollection = {
  __typename?: 'LinkWithImageCollection';
  items: Array<Maybe<LinkWithImage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LinkWithImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<LinkWithImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LinkWithImageFilter>>>;
  cloudinaryImage_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfNavigationLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEvents?: InputMaybe<CfPromotionEventsNestedFilter>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LinkWithImageLinkingCollections = {
  __typename?: 'LinkWithImageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerBottomBlockCollection?: Maybe<FooterBottomBlockCollection>;
};


export type LinkWithImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LinkWithImageLinkingCollectionsFooterBottomBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LinkWithImageLinkingCollectionsFooterBottomBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum LinkWithImageLinkingCollectionsFooterBottomBlockCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LinkWithImageOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Block with list of links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/linksSectionWrapper) */
export type LinksSectionWrapper = Entry & {
  __typename?: 'LinksSectionWrapper';
  contentfulMetadata: ContentfulMetadata;
  ctaCollection?: Maybe<LinksSectionWrapperCtaCollection>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<LinksSectionWrapperLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Block with list of links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/linksSectionWrapper) */
export type LinksSectionWrapperCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LinksSectionWrapperCtaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CtaFilter>;
};


/** Block with list of links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/linksSectionWrapper) */
export type LinksSectionWrapperInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Block with list of links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/linksSectionWrapper) */
export type LinksSectionWrapperLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Block with list of links [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/linksSectionWrapper) */
export type LinksSectionWrapperTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type LinksSectionWrapperCollection = {
  __typename?: 'LinksSectionWrapperCollection';
  items: Array<Maybe<LinksSectionWrapper>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LinksSectionWrapperCtaCollection = {
  __typename?: 'LinksSectionWrapperCtaCollection';
  items: Array<Maybe<Cta>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum LinksSectionWrapperCtaCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  StylingAsc = 'styling_ASC',
  StylingDesc = 'styling_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestAutomationAttributeAsc = 'testAutomationAttribute_ASC',
  TestAutomationAttributeDesc = 'testAutomationAttribute_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type LinksSectionWrapperFilter = {
  AND?: InputMaybe<Array<InputMaybe<LinksSectionWrapperFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LinksSectionWrapperFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta?: InputMaybe<CfCtaNestedFilter>;
  ctaCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LinksSectionWrapperLinkingCollections = {
  __typename?: 'LinksSectionWrapperLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerContactAndLinksBlockCollection?: Maybe<FooterContactAndLinksBlockCollection>;
};


export type LinksSectionWrapperLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LinksSectionWrapperLinkingCollectionsFooterContactAndLinksBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LinksSectionWrapperLinkingCollectionsFooterContactAndLinksBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum LinksSectionWrapperLinkingCollectionsFooterContactAndLinksBlockCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum LinksSectionWrapperOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Wrapper for an image (Desktop, Tablet or Mobile) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/mediaWrapperV2) */
export type MediaWrapperV2 = Entry & {
  __typename?: 'MediaWrapperV2';
  altText?: Maybe<Scalars['String']>;
  cloudinaryDesktopImage?: Maybe<Scalars['JSON']>;
  cloudinaryMobileImage?: Maybe<Scalars['JSON']>;
  cloudinaryTabletImage?: Maybe<Scalars['JSON']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  internalTitle?: Maybe<Scalars['String']>;
  lazyloading?: Maybe<Scalars['Boolean']>;
  linkedFrom?: Maybe<MediaWrapperV2LinkingCollections>;
  staticImage?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Wrapper for an image (Desktop, Tablet or Mobile) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/mediaWrapperV2) */
export type MediaWrapperV2AltTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wrapper for an image (Desktop, Tablet or Mobile) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/mediaWrapperV2) */
export type MediaWrapperV2CloudinaryDesktopImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wrapper for an image (Desktop, Tablet or Mobile) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/mediaWrapperV2) */
export type MediaWrapperV2CloudinaryMobileImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wrapper for an image (Desktop, Tablet or Mobile) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/mediaWrapperV2) */
export type MediaWrapperV2CloudinaryTabletImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wrapper for an image (Desktop, Tablet or Mobile) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/mediaWrapperV2) */
export type MediaWrapperV2DescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wrapper for an image (Desktop, Tablet or Mobile) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/mediaWrapperV2) */
export type MediaWrapperV2InternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wrapper for an image (Desktop, Tablet or Mobile) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/mediaWrapperV2) */
export type MediaWrapperV2LazyloadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wrapper for an image (Desktop, Tablet or Mobile) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/mediaWrapperV2) */
export type MediaWrapperV2LinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Wrapper for an image (Desktop, Tablet or Mobile) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/mediaWrapperV2) */
export type MediaWrapperV2StaticImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type MediaWrapperV2Collection = {
  __typename?: 'MediaWrapperV2Collection';
  items: Array<Maybe<MediaWrapperV2>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MediaWrapperV2Filter = {
  AND?: InputMaybe<Array<InputMaybe<MediaWrapperV2Filter>>>;
  OR?: InputMaybe<Array<InputMaybe<MediaWrapperV2Filter>>>;
  altText?: InputMaybe<Scalars['String']>;
  altText_contains?: InputMaybe<Scalars['String']>;
  altText_exists?: InputMaybe<Scalars['Boolean']>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  altText_not?: InputMaybe<Scalars['String']>;
  altText_not_contains?: InputMaybe<Scalars['String']>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cloudinaryDesktopImage_exists?: InputMaybe<Scalars['Boolean']>;
  cloudinaryMobileImage_exists?: InputMaybe<Scalars['Boolean']>;
  cloudinaryTabletImage_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lazyloading?: InputMaybe<Scalars['Boolean']>;
  lazyloading_exists?: InputMaybe<Scalars['Boolean']>;
  lazyloading_not?: InputMaybe<Scalars['Boolean']>;
  staticImage?: InputMaybe<Scalars['String']>;
  staticImage_contains?: InputMaybe<Scalars['String']>;
  staticImage_exists?: InputMaybe<Scalars['Boolean']>;
  staticImage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  staticImage_not?: InputMaybe<Scalars['String']>;
  staticImage_not_contains?: InputMaybe<Scalars['String']>;
  staticImage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type MediaWrapperV2LinkingCollections = {
  __typename?: 'MediaWrapperV2LinkingCollections';
  carouselImageAndTextCardCollection?: Maybe<CarouselImageAndTextCardCollection>;
  carouselWithTextCollection?: Maybe<CarouselWithTextCollection>;
  contentPageHeroBannerCollection?: Maybe<ContentPageHeroBannerCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footerStoreBlockCollection?: Maybe<FooterStoreBlockCollection>;
  heroBannerCollection?: Maybe<HeroBannerCollection>;
  heroBannerWithLinksCollection?: Maybe<HeroBannerWithLinksCollection>;
  imageWithTextCollection?: Maybe<ImageWithTextCollection>;
  journalCenterContentBlockCollection?: Maybe<JournalCenterContentBlockCollection>;
  journalPageCollection?: Maybe<JournalPageCollection>;
  productOptionConfiguratorCollection?: Maybe<ProductOptionConfiguratorCollection>;
  productOptionStaticImageConfiguratorCollection?: Maybe<ProductOptionStaticImageConfiguratorCollection>;
  textAndImageColumnBannerCollection?: Maybe<TextAndImageColumnBannerCollection>;
  textAndImageRowBannerCollection?: Maybe<TextAndImageRowBannerCollection>;
  tuxedoStyleOptionCollection?: Maybe<TuxedoStyleOptionCollection>;
};


export type MediaWrapperV2LinkingCollectionsCarouselImageAndTextCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MediaWrapperV2LinkingCollectionsCarouselImageAndTextCardCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MediaWrapperV2LinkingCollectionsCarouselWithTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MediaWrapperV2LinkingCollectionsCarouselWithTextCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MediaWrapperV2LinkingCollectionsContentPageHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MediaWrapperV2LinkingCollectionsContentPageHeroBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MediaWrapperV2LinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MediaWrapperV2LinkingCollectionsFooterStoreBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MediaWrapperV2LinkingCollectionsFooterStoreBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MediaWrapperV2LinkingCollectionsHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MediaWrapperV2LinkingCollectionsHeroBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MediaWrapperV2LinkingCollectionsHeroBannerWithLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MediaWrapperV2LinkingCollectionsHeroBannerWithLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MediaWrapperV2LinkingCollectionsImageWithTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MediaWrapperV2LinkingCollectionsImageWithTextCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MediaWrapperV2LinkingCollectionsJournalCenterContentBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MediaWrapperV2LinkingCollectionsJournalCenterContentBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MediaWrapperV2LinkingCollectionsJournalPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MediaWrapperV2LinkingCollectionsJournalPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MediaWrapperV2LinkingCollectionsProductOptionConfiguratorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MediaWrapperV2LinkingCollectionsProductOptionConfiguratorCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MediaWrapperV2LinkingCollectionsProductOptionStaticImageConfiguratorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MediaWrapperV2LinkingCollectionsProductOptionStaticImageConfiguratorCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MediaWrapperV2LinkingCollectionsTextAndImageColumnBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MediaWrapperV2LinkingCollectionsTextAndImageColumnBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MediaWrapperV2LinkingCollectionsTextAndImageRowBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MediaWrapperV2LinkingCollectionsTextAndImageRowBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MediaWrapperV2LinkingCollectionsTuxedoStyleOptionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MediaWrapperV2LinkingCollectionsTuxedoStyleOptionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum MediaWrapperV2LinkingCollectionsCarouselImageAndTextCardCollectionOrder {
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleFlagAsc = 'titleFlag_ASC',
  TitleFlagDesc = 'titleFlag_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum MediaWrapperV2LinkingCollectionsCarouselWithTextCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  DesktopCarrouselAsc = 'desktopCarrousel_ASC',
  DesktopCarrouselDesc = 'desktopCarrousel_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileCarrouselAsc = 'mobileCarrousel_ASC',
  MobileCarrouselDesc = 'mobileCarrousel_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletCarrouselAsc = 'tabletCarrousel_ASC',
  TabletCarrouselDesc = 'tabletCarrousel_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum MediaWrapperV2LinkingCollectionsContentPageHeroBannerCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  DesktopTextAlignmentAsc = 'desktopTextAlignment_ASC',
  DesktopTextAlignmentDesc = 'desktopTextAlignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileTextAlignmentAsc = 'mobileTextAlignment_ASC',
  MobileTextAlignmentDesc = 'mobileTextAlignment_DESC',
  SublineShowOnDesktopAsc = 'sublineShowOnDesktop_ASC',
  SublineShowOnDesktopDesc = 'sublineShowOnDesktop_DESC',
  SublineShowOnMobileAsc = 'sublineShowOnMobile_ASC',
  SublineShowOnMobileDesc = 'sublineShowOnMobile_DESC',
  SublineShowOnTabletAsc = 'sublineShowOnTablet_ASC',
  SublineShowOnTabletDesc = 'sublineShowOnTablet_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletTextAlignmentAsc = 'tabletTextAlignment_ASC',
  TabletTextAlignmentDesc = 'tabletTextAlignment_DESC',
  ViewHeightSetMobileAsc = 'viewHeightSetMobile_ASC',
  ViewHeightSetMobileDesc = 'viewHeightSetMobile_DESC'
}

export enum MediaWrapperV2LinkingCollectionsFooterStoreBlockCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum MediaWrapperV2LinkingCollectionsHeroBannerCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  DesktopTextAlignmentAsc = 'desktopTextAlignment_ASC',
  DesktopTextAlignmentDesc = 'desktopTextAlignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileTextAlignmentAsc = 'mobileTextAlignment_ASC',
  MobileTextAlignmentDesc = 'mobileTextAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletTextAlignmentAsc = 'tabletTextAlignment_ASC',
  TabletTextAlignmentDesc = 'tabletTextAlignment_DESC'
}

export enum MediaWrapperV2LinkingCollectionsHeroBannerWithLinksCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MediaWrapperV2LinkingCollectionsImageWithTextCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  DesktopTextAlignmentAsc = 'desktopTextAlignment_ASC',
  DesktopTextAlignmentDesc = 'desktopTextAlignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileTextAlignmentAsc = 'mobileTextAlignment_ASC',
  MobileTextAlignmentDesc = 'mobileTextAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletTextAlignmentAsc = 'tabletTextAlignment_ASC',
  TabletTextAlignmentDesc = 'tabletTextAlignment_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum MediaWrapperV2LinkingCollectionsJournalCenterContentBlockCollectionOrder {
  AutomationIdAsc = 'automationId_ASC',
  AutomationIdDesc = 'automationId_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SubTitleAsc = 'subTitle_ASC',
  SubTitleDesc = 'subTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum MediaWrapperV2LinkingCollectionsJournalPageCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopicAsc = 'topic_ASC',
  TopicDesc = 'topic_DESC'
}

export enum MediaWrapperV2LinkingCollectionsProductOptionConfiguratorCollectionOrder {
  BaseColorAsc = 'baseColor_ASC',
  BaseColorDesc = 'baseColor_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ProductIdAsc = 'productId_ASC',
  ProductIdDesc = 'productId_DESC',
  ProductNameAsc = 'productName_ASC',
  ProductNameDesc = 'productName_DESC',
  RecommendationsAsc = 'recommendations_ASC',
  RecommendationsDesc = 'recommendations_DESC',
  SubStepAsc = 'subStep_ASC',
  SubStepDesc = 'subStep_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MediaWrapperV2LinkingCollectionsProductOptionStaticImageConfiguratorCollectionOrder {
  BaseColorAsc = 'baseColor_ASC',
  BaseColorDesc = 'baseColor_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ProductIdAsc = 'productId_ASC',
  ProductIdDesc = 'productId_DESC',
  ProductNameAsc = 'productName_ASC',
  ProductNameDesc = 'productName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MediaWrapperV2LinkingCollectionsTextAndImageColumnBannerCollectionOrder {
  ContentOrderDesktopAsc = 'contentOrderDesktop_ASC',
  ContentOrderDesktopDesc = 'contentOrderDesktop_DESC',
  ContentOrderMobileAsc = 'contentOrderMobile_ASC',
  ContentOrderMobileDesc = 'contentOrderMobile_DESC',
  ContentOrderTabletAsc = 'contentOrderTablet_ASC',
  ContentOrderTabletDesc = 'contentOrderTablet_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MediaWrapperV2LinkingCollectionsTextAndImageRowBannerCollectionOrder {
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum MediaWrapperV2LinkingCollectionsTuxedoStyleOptionCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  OptionNameAsc = 'optionName_ASC',
  OptionNameDesc = 'optionName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TuxedoStyleAsc = 'tuxedoStyle_ASC',
  TuxedoStyleDesc = 'tuxedoStyle_DESC'
}

export enum MediaWrapperV2Order {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LazyloadingAsc = 'lazyloading_ASC',
  LazyloadingDesc = 'lazyloading_DESC',
  StaticImageAsc = 'staticImage_ASC',
  StaticImageDesc = 'staticImage_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Mutation = {
  __typename?: 'Mutation';
  addProductsToCart: CartLineItemResponse;
  removeGiftCertificateFromCart: CartLineItemResponse;
  removeItemFromCart: CartLineItemResponse;
  updateSubscribe: SubscribeResponse;
};


export type MutationAddProductsToCartArgs = {
  addProductsInput: AddProductsInput;
};


export type MutationRemoveGiftCertificateFromCartArgs = {
  cartLineItemInput: CartLineItemInput;
};


export type MutationRemoveItemFromCartArgs = {
  cartLineItemInput: CartLineItemInput;
};


export type MutationUpdateSubscribeArgs = {
  updateSubscribeInput?: InputMaybe<UpdateSubscribeInput>;
};

/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationGroup) */
export type NavigationGroup = Entry & {
  __typename?: 'NavigationGroup';
  contentfulMetadata: ContentfulMetadata;
  fontStyling?: Maybe<Scalars['String']>;
  hasTopDivider?: Maybe<Scalars['Boolean']>;
  internalTitle?: Maybe<Scalars['String']>;
  itemsCollection?: Maybe<NavigationGroupItemsCollection>;
  linkedFrom?: Maybe<NavigationGroupLinkingCollections>;
  sys: Sys;
  text?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationGroup) */
export type NavigationGroupFontStylingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationGroup) */
export type NavigationGroupHasTopDividerArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationGroup) */
export type NavigationGroupInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationGroup) */
export type NavigationGroupItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationGroupItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationItemFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationGroup) */
export type NavigationGroupLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationGroup) */
export type NavigationGroupTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type NavigationGroupCollection = {
  __typename?: 'NavigationGroupCollection';
  items: Array<Maybe<NavigationGroup>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavigationGroupFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationGroupFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationGroupFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fontStyling?: InputMaybe<Scalars['String']>;
  fontStyling_contains?: InputMaybe<Scalars['String']>;
  fontStyling_exists?: InputMaybe<Scalars['Boolean']>;
  fontStyling_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fontStyling_not?: InputMaybe<Scalars['String']>;
  fontStyling_not_contains?: InputMaybe<Scalars['String']>;
  fontStyling_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hasTopDivider?: InputMaybe<Scalars['Boolean']>;
  hasTopDivider_exists?: InputMaybe<Scalars['Boolean']>;
  hasTopDivider_not?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  items?: InputMaybe<CfNavigationItemNestedFilter>;
  itemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_not?: InputMaybe<Scalars['String']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NavigationGroupItemsCollection = {
  __typename?: 'NavigationGroupItemsCollection';
  items: Array<Maybe<NavigationItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum NavigationGroupItemsCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type NavigationGroupLinkingCollections = {
  __typename?: 'NavigationGroupLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  navigationItemCollection?: Maybe<NavigationItemCollection>;
  suSuNavigationMenuCollection?: Maybe<SuSuNavigationMenuCollection>;
};


export type NavigationGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationGroupLinkingCollectionsNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationGroupLinkingCollectionsNavigationItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationGroupLinkingCollectionsSuSuNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationGroupLinkingCollectionsSuSuNavigationMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum NavigationGroupLinkingCollectionsNavigationItemCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NavigationGroupLinkingCollectionsSuSuNavigationMenuCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NavigationGroupOrder {
  FontStylingAsc = 'fontStyling_ASC',
  FontStylingDesc = 'fontStyling_DESC',
  HasTopDividerAsc = 'hasTopDivider_ASC',
  HasTopDividerDesc = 'hasTopDivider_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationItem) */
export type NavigationItem = Entry & {
  __typename?: 'NavigationItem';
  contentfulMetadata: ContentfulMetadata;
  groupsCollection?: Maybe<NavigationItemGroupsCollection>;
  internalTitle?: Maybe<Scalars['String']>;
  label?: Maybe<NavigationItemLable>;
  linkedFrom?: Maybe<NavigationItemLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationItem) */
export type NavigationItemGroupsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemGroupsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationGroupFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationItem) */
export type NavigationItemInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationItem) */
export type NavigationItemLabelArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavigationItemLableFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationItem) */
export type NavigationItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NavigationItemCollection = {
  __typename?: 'NavigationItemCollection';
  items: Array<Maybe<NavigationItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavigationItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  groups?: InputMaybe<CfNavigationGroupNestedFilter>;
  groupsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label?: InputMaybe<CfNavigationItemLableNestedFilter>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type NavigationItemGroupsCollection = {
  __typename?: 'NavigationItemGroupsCollection';
  items: Array<Maybe<NavigationGroup>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum NavigationItemGroupsCollectionOrder {
  FontStylingAsc = 'fontStyling_ASC',
  FontStylingDesc = 'fontStyling_DESC',
  HasTopDividerAsc = 'hasTopDivider_ASC',
  HasTopDividerDesc = 'hasTopDivider_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationItemLable) */
export type NavigationItemLable = Entry & {
  __typename?: 'NavigationItemLable';
  contentfulMetadata: ContentfulMetadata;
  icon?: Maybe<Scalars['JSON']>;
  internalTitle?: Maybe<Scalars['String']>;
  link?: Maybe<NavigationLink>;
  linkedFrom?: Maybe<NavigationItemLableLinkingCollections>;
  promotionEvents?: Maybe<PromotionEvents>;
  showIconSubMenuOnly?: Maybe<Scalars['String']>;
  subMenuArrow?: Maybe<Scalars['String']>;
  subMenuText?: Maybe<Scalars['String']>;
  subText?: Maybe<NavigationItemLableSubText>;
  sys: Sys;
  testAutomationAttribute?: Maybe<Scalars['String']>;
  testAutomationClass?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationItemLable) */
export type NavigationItemLableIconArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationItemLable) */
export type NavigationItemLableInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationItemLable) */
export type NavigationItemLableLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationItemLable) */
export type NavigationItemLableLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationItemLable) */
export type NavigationItemLablePromotionEventsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PromotionEventsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationItemLable) */
export type NavigationItemLableShowIconSubMenuOnlyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationItemLable) */
export type NavigationItemLableSubMenuArrowArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationItemLable) */
export type NavigationItemLableSubMenuTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationItemLable) */
export type NavigationItemLableSubTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationItemLable) */
export type NavigationItemLableTestAutomationAttributeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationItemLable) */
export type NavigationItemLableTestAutomationClassArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationItemLable) */
export type NavigationItemLableTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type NavigationItemLableCollection = {
  __typename?: 'NavigationItemLableCollection';
  items: Array<Maybe<NavigationItemLable>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavigationItemLableFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationItemLableFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationItemLableFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfNavigationLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEvents?: InputMaybe<CfPromotionEventsNestedFilter>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  showIconSubMenuOnly?: InputMaybe<Scalars['String']>;
  showIconSubMenuOnly_contains?: InputMaybe<Scalars['String']>;
  showIconSubMenuOnly_exists?: InputMaybe<Scalars['Boolean']>;
  showIconSubMenuOnly_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  showIconSubMenuOnly_not?: InputMaybe<Scalars['String']>;
  showIconSubMenuOnly_not_contains?: InputMaybe<Scalars['String']>;
  showIconSubMenuOnly_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subMenuArrow?: InputMaybe<Scalars['String']>;
  subMenuArrow_contains?: InputMaybe<Scalars['String']>;
  subMenuArrow_exists?: InputMaybe<Scalars['Boolean']>;
  subMenuArrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subMenuArrow_not?: InputMaybe<Scalars['String']>;
  subMenuArrow_not_contains?: InputMaybe<Scalars['String']>;
  subMenuArrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subMenuText?: InputMaybe<Scalars['String']>;
  subMenuText_contains?: InputMaybe<Scalars['String']>;
  subMenuText_exists?: InputMaybe<Scalars['Boolean']>;
  subMenuText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subMenuText_not?: InputMaybe<Scalars['String']>;
  subMenuText_not_contains?: InputMaybe<Scalars['String']>;
  subMenuText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subText_contains?: InputMaybe<Scalars['String']>;
  subText_exists?: InputMaybe<Scalars['Boolean']>;
  subText_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  testAutomationAttribute?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_contains?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_exists?: InputMaybe<Scalars['Boolean']>;
  testAutomationAttribute_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  testAutomationAttribute_not?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_not_contains?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  testAutomationClass?: InputMaybe<Scalars['String']>;
  testAutomationClass_contains?: InputMaybe<Scalars['String']>;
  testAutomationClass_exists?: InputMaybe<Scalars['Boolean']>;
  testAutomationClass_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  testAutomationClass_not?: InputMaybe<Scalars['String']>;
  testAutomationClass_not_contains?: InputMaybe<Scalars['String']>;
  testAutomationClass_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text?: InputMaybe<Scalars['String']>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_not?: InputMaybe<Scalars['String']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NavigationItemLableLinkingCollections = {
  __typename?: 'NavigationItemLableLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  navigationItemCollection?: Maybe<NavigationItemCollection>;
};


export type NavigationItemLableLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationItemLableLinkingCollectionsNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemLableLinkingCollectionsNavigationItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum NavigationItemLableLinkingCollectionsNavigationItemCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NavigationItemLableOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ShowIconSubMenuOnlyAsc = 'showIconSubMenuOnly_ASC',
  ShowIconSubMenuOnlyDesc = 'showIconSubMenuOnly_DESC',
  SubMenuArrowAsc = 'subMenuArrow_ASC',
  SubMenuArrowDesc = 'subMenuArrow_DESC',
  SubMenuTextAsc = 'subMenuText_ASC',
  SubMenuTextDesc = 'subMenuText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestAutomationAttributeAsc = 'testAutomationAttribute_ASC',
  TestAutomationAttributeDesc = 'testAutomationAttribute_DESC',
  TestAutomationClassAsc = 'testAutomationClass_ASC',
  TestAutomationClassDesc = 'testAutomationClass_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

export type NavigationItemLableSubText = {
  __typename?: 'NavigationItemLableSubText';
  json: Scalars['JSON'];
  links: NavigationItemLableSubTextLinks;
};

export type NavigationItemLableSubTextAssets = {
  __typename?: 'NavigationItemLableSubTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type NavigationItemLableSubTextEntries = {
  __typename?: 'NavigationItemLableSubTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type NavigationItemLableSubTextLinks = {
  __typename?: 'NavigationItemLableSubTextLinks';
  assets: NavigationItemLableSubTextAssets;
  entries: NavigationItemLableSubTextEntries;
  resources: NavigationItemLableSubTextResources;
};

export type NavigationItemLableSubTextResources = {
  __typename?: 'NavigationItemLableSubTextResources';
  block: Array<NavigationItemLableSubTextResourcesBlock>;
  hyperlink: Array<NavigationItemLableSubTextResourcesHyperlink>;
  inline: Array<NavigationItemLableSubTextResourcesInline>;
};

export type NavigationItemLableSubTextResourcesBlock = ResourceLink & {
  __typename?: 'NavigationItemLableSubTextResourcesBlock';
  sys: ResourceSys;
};

export type NavigationItemLableSubTextResourcesHyperlink = ResourceLink & {
  __typename?: 'NavigationItemLableSubTextResourcesHyperlink';
  sys: ResourceSys;
};

export type NavigationItemLableSubTextResourcesInline = ResourceLink & {
  __typename?: 'NavigationItemLableSubTextResourcesInline';
  sys: ResourceSys;
};

export type NavigationItemLinkingCollections = {
  __typename?: 'NavigationItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  navigationGroupCollection?: Maybe<NavigationGroupCollection>;
};


export type NavigationItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationItemLinkingCollectionsNavigationGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemLinkingCollectionsNavigationGroupCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum NavigationItemLinkingCollectionsNavigationGroupCollectionOrder {
  FontStylingAsc = 'fontStyling_ASC',
  FontStylingDesc = 'fontStyling_DESC',
  HasTopDividerAsc = 'hasTopDivider_ASC',
  HasTopDividerDesc = 'hasTopDivider_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

export enum NavigationItemOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Link [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationLink) */
export type NavigationLink = Entry & {
  __typename?: 'NavigationLink';
  absoluteUrl?: Maybe<Scalars['String']>;
  automationId?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  extraParameters?: Maybe<Scalars['String']>;
  internalTitle?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<NavigationLinkLinkingCollections>;
  referenceId?: Maybe<Scalars['String']>;
  relativeUrl?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Link [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationLink) */
export type NavigationLinkAbsoluteUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Link [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationLink) */
export type NavigationLinkAutomationIdArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Link [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationLink) */
export type NavigationLinkExtraParametersArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Link [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationLink) */
export type NavigationLinkInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Link [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationLink) */
export type NavigationLinkLinkTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Link [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationLink) */
export type NavigationLinkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Link [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationLink) */
export type NavigationLinkReferenceIdArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Link [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/navigationLink) */
export type NavigationLinkRelativeUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type NavigationLinkCollection = {
  __typename?: 'NavigationLinkCollection';
  items: Array<Maybe<NavigationLink>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavigationLinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationLinkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationLinkFilter>>>;
  absoluteUrl?: InputMaybe<Scalars['String']>;
  absoluteUrl_contains?: InputMaybe<Scalars['String']>;
  absoluteUrl_exists?: InputMaybe<Scalars['Boolean']>;
  absoluteUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  absoluteUrl_not?: InputMaybe<Scalars['String']>;
  absoluteUrl_not_contains?: InputMaybe<Scalars['String']>;
  absoluteUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  automationId?: InputMaybe<Scalars['String']>;
  automationId_contains?: InputMaybe<Scalars['String']>;
  automationId_exists?: InputMaybe<Scalars['Boolean']>;
  automationId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  automationId_not?: InputMaybe<Scalars['String']>;
  automationId_not_contains?: InputMaybe<Scalars['String']>;
  automationId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraParameters?: InputMaybe<Scalars['String']>;
  extraParameters_contains?: InputMaybe<Scalars['String']>;
  extraParameters_exists?: InputMaybe<Scalars['Boolean']>;
  extraParameters_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  extraParameters_not?: InputMaybe<Scalars['String']>;
  extraParameters_not_contains?: InputMaybe<Scalars['String']>;
  extraParameters_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkType?: InputMaybe<Scalars['String']>;
  linkType_contains?: InputMaybe<Scalars['String']>;
  linkType_exists?: InputMaybe<Scalars['Boolean']>;
  linkType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkType_not?: InputMaybe<Scalars['String']>;
  linkType_not_contains?: InputMaybe<Scalars['String']>;
  linkType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  referenceId?: InputMaybe<Scalars['String']>;
  referenceId_contains?: InputMaybe<Scalars['String']>;
  referenceId_exists?: InputMaybe<Scalars['Boolean']>;
  referenceId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  referenceId_not?: InputMaybe<Scalars['String']>;
  referenceId_not_contains?: InputMaybe<Scalars['String']>;
  referenceId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relativeUrl?: InputMaybe<Scalars['String']>;
  relativeUrl_contains?: InputMaybe<Scalars['String']>;
  relativeUrl_exists?: InputMaybe<Scalars['Boolean']>;
  relativeUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relativeUrl_not?: InputMaybe<Scalars['String']>;
  relativeUrl_not_contains?: InputMaybe<Scalars['String']>;
  relativeUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type NavigationLinkLinkingCollections = {
  __typename?: 'NavigationLinkLinkingCollections';
  buttonCollection?: Maybe<ButtonCollection>;
  carouselWithTextCollection?: Maybe<CarouselWithTextCollection>;
  contactInfoWrapperCollection?: Maybe<ContactInfoWrapperCollection>;
  contentPageHeroBannerCollection?: Maybe<ContentPageHeroBannerCollection>;
  ctaCollection?: Maybe<CtaCollection>;
  entryCollection?: Maybe<EntryCollection>;
  heroBannerCollection?: Maybe<HeroBannerCollection>;
  heroBannerWithLinksCollection?: Maybe<HeroBannerWithLinksCollection>;
  heroLinkItemCollection?: Maybe<HeroLinkItemCollection>;
  imageWithTextCollection?: Maybe<ImageWithTextCollection>;
  journalPageCollection?: Maybe<JournalPageCollection>;
  linkWithIconCollection?: Maybe<LinkWithIconCollection>;
  linkWithImageCollection?: Maybe<LinkWithImageCollection>;
  navigationItemLableCollection?: Maybe<NavigationItemLableCollection>;
  panelButtonWithIconCollection?: Maybe<PanelButtonWithIconCollection>;
  referenceSalesforceObjectCollection?: Maybe<ReferenceSalesforceObjectCollection>;
  stickyButtonCollection?: Maybe<StickyButtonCollection>;
};


export type NavigationLinkLinkingCollectionsButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsButtonCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationLinkLinkingCollectionsCarouselWithTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsCarouselWithTextCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationLinkLinkingCollectionsContactInfoWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsContactInfoWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationLinkLinkingCollectionsContentPageHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsContentPageHeroBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationLinkLinkingCollectionsCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsCtaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationLinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationLinkLinkingCollectionsHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsHeroBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationLinkLinkingCollectionsHeroBannerWithLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsHeroBannerWithLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationLinkLinkingCollectionsHeroLinkItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsHeroLinkItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationLinkLinkingCollectionsImageWithTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsImageWithTextCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationLinkLinkingCollectionsJournalPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsJournalPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationLinkLinkingCollectionsLinkWithIconCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsLinkWithIconCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationLinkLinkingCollectionsLinkWithImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsLinkWithImageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationLinkLinkingCollectionsNavigationItemLableCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsNavigationItemLableCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationLinkLinkingCollectionsPanelButtonWithIconCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsPanelButtonWithIconCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationLinkLinkingCollectionsReferenceSalesforceObjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsReferenceSalesforceObjectCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationLinkLinkingCollectionsStickyButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsStickyButtonCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum NavigationLinkLinkingCollectionsButtonCollectionOrder {
  ButtonStyleAsc = 'buttonStyle_ASC',
  ButtonStyleDesc = 'buttonStyle_DESC',
  DesktopButtonAlignmentAsc = 'desktopButtonAlignment_ASC',
  DesktopButtonAlignmentDesc = 'desktopButtonAlignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileButtonAlignmentAsc = 'mobileButtonAlignment_ASC',
  MobileButtonAlignmentDesc = 'mobileButtonAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletButtonAlignmentAsc = 'tabletButtonAlignment_ASC',
  TabletButtonAlignmentDesc = 'tabletButtonAlignment_DESC',
  VisibleOnDesktopAsc = 'visibleOnDesktop_ASC',
  VisibleOnDesktopDesc = 'visibleOnDesktop_DESC',
  VisibleOnMobileAsc = 'visibleOnMobile_ASC',
  VisibleOnMobileDesc = 'visibleOnMobile_DESC',
  VisibleOnTabletAsc = 'visibleOnTablet_ASC',
  VisibleOnTabletDesc = 'visibleOnTablet_DESC'
}

export enum NavigationLinkLinkingCollectionsCarouselWithTextCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  DesktopCarrouselAsc = 'desktopCarrousel_ASC',
  DesktopCarrouselDesc = 'desktopCarrousel_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileCarrouselAsc = 'mobileCarrousel_ASC',
  MobileCarrouselDesc = 'mobileCarrousel_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletCarrouselAsc = 'tabletCarrousel_ASC',
  TabletCarrouselDesc = 'tabletCarrousel_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum NavigationLinkLinkingCollectionsContactInfoWrapperCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum NavigationLinkLinkingCollectionsContentPageHeroBannerCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  DesktopTextAlignmentAsc = 'desktopTextAlignment_ASC',
  DesktopTextAlignmentDesc = 'desktopTextAlignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileTextAlignmentAsc = 'mobileTextAlignment_ASC',
  MobileTextAlignmentDesc = 'mobileTextAlignment_DESC',
  SublineShowOnDesktopAsc = 'sublineShowOnDesktop_ASC',
  SublineShowOnDesktopDesc = 'sublineShowOnDesktop_DESC',
  SublineShowOnMobileAsc = 'sublineShowOnMobile_ASC',
  SublineShowOnMobileDesc = 'sublineShowOnMobile_DESC',
  SublineShowOnTabletAsc = 'sublineShowOnTablet_ASC',
  SublineShowOnTabletDesc = 'sublineShowOnTablet_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletTextAlignmentAsc = 'tabletTextAlignment_ASC',
  TabletTextAlignmentDesc = 'tabletTextAlignment_DESC',
  ViewHeightSetMobileAsc = 'viewHeightSetMobile_ASC',
  ViewHeightSetMobileDesc = 'viewHeightSetMobile_DESC'
}

export enum NavigationLinkLinkingCollectionsCtaCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  StylingAsc = 'styling_ASC',
  StylingDesc = 'styling_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestAutomationAttributeAsc = 'testAutomationAttribute_ASC',
  TestAutomationAttributeDesc = 'testAutomationAttribute_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum NavigationLinkLinkingCollectionsHeroBannerCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  DesktopTextAlignmentAsc = 'desktopTextAlignment_ASC',
  DesktopTextAlignmentDesc = 'desktopTextAlignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileTextAlignmentAsc = 'mobileTextAlignment_ASC',
  MobileTextAlignmentDesc = 'mobileTextAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletTextAlignmentAsc = 'tabletTextAlignment_ASC',
  TabletTextAlignmentDesc = 'tabletTextAlignment_DESC'
}

export enum NavigationLinkLinkingCollectionsHeroBannerWithLinksCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NavigationLinkLinkingCollectionsHeroLinkItemCollectionOrder {
  AutomationIdAsc = 'automationId_ASC',
  AutomationIdDesc = 'automationId_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestAutomationAttributeAsc = 'testAutomationAttribute_ASC',
  TestAutomationAttributeDesc = 'testAutomationAttribute_DESC'
}

export enum NavigationLinkLinkingCollectionsImageWithTextCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  DesktopTextAlignmentAsc = 'desktopTextAlignment_ASC',
  DesktopTextAlignmentDesc = 'desktopTextAlignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileTextAlignmentAsc = 'mobileTextAlignment_ASC',
  MobileTextAlignmentDesc = 'mobileTextAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletTextAlignmentAsc = 'tabletTextAlignment_ASC',
  TabletTextAlignmentDesc = 'tabletTextAlignment_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum NavigationLinkLinkingCollectionsJournalPageCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopicAsc = 'topic_ASC',
  TopicDesc = 'topic_DESC'
}

export enum NavigationLinkLinkingCollectionsLinkWithIconCollectionOrder {
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NavigationLinkLinkingCollectionsLinkWithImageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum NavigationLinkLinkingCollectionsNavigationItemLableCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ShowIconSubMenuOnlyAsc = 'showIconSubMenuOnly_ASC',
  ShowIconSubMenuOnlyDesc = 'showIconSubMenuOnly_DESC',
  SubMenuArrowAsc = 'subMenuArrow_ASC',
  SubMenuArrowDesc = 'subMenuArrow_DESC',
  SubMenuTextAsc = 'subMenuText_ASC',
  SubMenuTextDesc = 'subMenuText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestAutomationAttributeAsc = 'testAutomationAttribute_ASC',
  TestAutomationAttributeDesc = 'testAutomationAttribute_DESC',
  TestAutomationClassAsc = 'testAutomationClass_ASC',
  TestAutomationClassDesc = 'testAutomationClass_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

export enum NavigationLinkLinkingCollectionsPanelButtonWithIconCollectionOrder {
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestAutomationAttributeAsc = 'testAutomationAttribute_ASC',
  TestAutomationAttributeDesc = 'testAutomationAttribute_DESC'
}

export enum NavigationLinkLinkingCollectionsReferenceSalesforceObjectCollectionOrder {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NavigationLinkLinkingCollectionsStickyButtonCollectionOrder {
  ButtonStyleAsc = 'buttonStyle_ASC',
  ButtonStyleDesc = 'buttonStyle_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  StickyOnDesktopAsc = 'stickyOnDesktop_ASC',
  StickyOnDesktopDesc = 'stickyOnDesktop_DESC',
  StickyOnMobileAsc = 'stickyOnMobile_ASC',
  StickyOnMobileDesc = 'stickyOnMobile_DESC',
  StickyOnTabletAsc = 'stickyOnTablet_ASC',
  StickyOnTabletDesc = 'stickyOnTablet_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VisibleOnDesktopAsc = 'visibleOnDesktop_ASC',
  VisibleOnDesktopDesc = 'visibleOnDesktop_DESC',
  VisibleOnMobileAsc = 'visibleOnMobile_ASC',
  VisibleOnMobileDesc = 'visibleOnMobile_DESC',
  VisibleOnTabletAsc = 'visibleOnTablet_ASC',
  VisibleOnTabletDesc = 'visibleOnTablet_DESC'
}

export enum NavigationLinkOrder {
  AbsoluteUrlAsc = 'absoluteUrl_ASC',
  AbsoluteUrlDesc = 'absoluteUrl_DESC',
  AutomationIdAsc = 'automationId_ASC',
  AutomationIdDesc = 'automationId_DESC',
  ExtraParametersAsc = 'extraParameters_ASC',
  ExtraParametersDesc = 'extraParameters_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LinkTypeAsc = 'linkType_ASC',
  LinkTypeDesc = 'linkType_DESC',
  ReferenceIdAsc = 'referenceId_ASC',
  ReferenceIdDesc = 'referenceId_DESC',
  RelativeUrlAsc = 'relativeUrl_ASC',
  RelativeUrlDesc = 'relativeUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum Product_Type {
  Master = 'master',
  Product = 'product',
  Set = 'set'
}

/** Wrapper for a Linked Panel Button with Icon and text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/panelButtonWithIcon) */
export type PanelButtonWithIcon = Entry & {
  __typename?: 'PanelButtonWithIcon';
  contentfulMetadata: ContentfulMetadata;
  iconName?: Maybe<Scalars['String']>;
  internalTitle?: Maybe<Scalars['String']>;
  link?: Maybe<NavigationLink>;
  linkedFrom?: Maybe<PanelButtonWithIconLinkingCollections>;
  promotionEvents?: Maybe<PromotionEvents>;
  sys: Sys;
  testAutomationAttribute?: Maybe<Scalars['String']>;
  text?: Maybe<PanelButtonWithIconText>;
};


/** Wrapper for a Linked Panel Button with Icon and text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/panelButtonWithIcon) */
export type PanelButtonWithIconIconNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wrapper for a Linked Panel Button with Icon and text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/panelButtonWithIcon) */
export type PanelButtonWithIconInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wrapper for a Linked Panel Button with Icon and text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/panelButtonWithIcon) */
export type PanelButtonWithIconLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** Wrapper for a Linked Panel Button with Icon and text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/panelButtonWithIcon) */
export type PanelButtonWithIconLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Wrapper for a Linked Panel Button with Icon and text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/panelButtonWithIcon) */
export type PanelButtonWithIconPromotionEventsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PromotionEventsFilter>;
};


/** Wrapper for a Linked Panel Button with Icon and text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/panelButtonWithIcon) */
export type PanelButtonWithIconTestAutomationAttributeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wrapper for a Linked Panel Button with Icon and text [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/panelButtonWithIcon) */
export type PanelButtonWithIconTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PanelButtonWithIconCollection = {
  __typename?: 'PanelButtonWithIconCollection';
  items: Array<Maybe<PanelButtonWithIcon>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PanelButtonWithIconFilter = {
  AND?: InputMaybe<Array<InputMaybe<PanelButtonWithIconFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PanelButtonWithIconFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  iconName?: InputMaybe<Scalars['String']>;
  iconName_contains?: InputMaybe<Scalars['String']>;
  iconName_exists?: InputMaybe<Scalars['Boolean']>;
  iconName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  iconName_not?: InputMaybe<Scalars['String']>;
  iconName_not_contains?: InputMaybe<Scalars['String']>;
  iconName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfNavigationLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEvents?: InputMaybe<CfPromotionEventsNestedFilter>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  testAutomationAttribute?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_contains?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_exists?: InputMaybe<Scalars['Boolean']>;
  testAutomationAttribute_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  testAutomationAttribute_not?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_not_contains?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
};

export type PanelButtonWithIconLinkingCollections = {
  __typename?: 'PanelButtonWithIconLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  panelContentWrapperCollection?: Maybe<PanelContentWrapperCollection>;
};


export type PanelButtonWithIconLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PanelButtonWithIconLinkingCollectionsPanelContentWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PanelButtonWithIconLinkingCollectionsPanelContentWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PanelButtonWithIconLinkingCollectionsPanelContentWrapperCollectionOrder {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PanelButtonWithIconOrder {
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestAutomationAttributeAsc = 'testAutomationAttribute_ASC',
  TestAutomationAttributeDesc = 'testAutomationAttribute_DESC'
}

export type PanelButtonWithIconText = {
  __typename?: 'PanelButtonWithIconText';
  json: Scalars['JSON'];
  links: PanelButtonWithIconTextLinks;
};

export type PanelButtonWithIconTextAssets = {
  __typename?: 'PanelButtonWithIconTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PanelButtonWithIconTextEntries = {
  __typename?: 'PanelButtonWithIconTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PanelButtonWithIconTextLinks = {
  __typename?: 'PanelButtonWithIconTextLinks';
  assets: PanelButtonWithIconTextAssets;
  entries: PanelButtonWithIconTextEntries;
  resources: PanelButtonWithIconTextResources;
};

export type PanelButtonWithIconTextResources = {
  __typename?: 'PanelButtonWithIconTextResources';
  block: Array<PanelButtonWithIconTextResourcesBlock>;
  hyperlink: Array<PanelButtonWithIconTextResourcesHyperlink>;
  inline: Array<PanelButtonWithIconTextResourcesInline>;
};

export type PanelButtonWithIconTextResourcesBlock = ResourceLink & {
  __typename?: 'PanelButtonWithIconTextResourcesBlock';
  sys: ResourceSys;
};

export type PanelButtonWithIconTextResourcesHyperlink = ResourceLink & {
  __typename?: 'PanelButtonWithIconTextResourcesHyperlink';
  sys: ResourceSys;
};

export type PanelButtonWithIconTextResourcesInline = ResourceLink & {
  __typename?: 'PanelButtonWithIconTextResourcesInline';
  sys: ResourceSys;
};

/** Content for Style Expert Panel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/panelContentWrapper) */
export type PanelContentWrapper = Entry & {
  __typename?: 'PanelContentWrapper';
  altText?: Maybe<Scalars['String']>;
  cloudinaryImage?: Maybe<Scalars['JSON']>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PanelContentWrapperLinkingCollections>;
  panelContentCollection?: Maybe<PanelContentWrapperPanelContentCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Content for Style Expert Panel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/panelContentWrapper) */
export type PanelContentWrapperAltTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Content for Style Expert Panel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/panelContentWrapper) */
export type PanelContentWrapperCloudinaryImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Content for Style Expert Panel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/panelContentWrapper) */
export type PanelContentWrapperInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Content for Style Expert Panel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/panelContentWrapper) */
export type PanelContentWrapperLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Content for Style Expert Panel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/panelContentWrapper) */
export type PanelContentWrapperPanelContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PanelContentWrapperPanelContentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PanelButtonWithIconFilter>;
};


/** Content for Style Expert Panel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/panelContentWrapper) */
export type PanelContentWrapperTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PanelContentWrapperCollection = {
  __typename?: 'PanelContentWrapperCollection';
  items: Array<Maybe<PanelContentWrapper>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PanelContentWrapperFilter = {
  AND?: InputMaybe<Array<InputMaybe<PanelContentWrapperFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PanelContentWrapperFilter>>>;
  altText?: InputMaybe<Scalars['String']>;
  altText_contains?: InputMaybe<Scalars['String']>;
  altText_exists?: InputMaybe<Scalars['Boolean']>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  altText_not?: InputMaybe<Scalars['String']>;
  altText_not_contains?: InputMaybe<Scalars['String']>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cloudinaryImage_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  panelContent?: InputMaybe<CfPanelButtonWithIconNestedFilter>;
  panelContentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PanelContentWrapperLinkingCollections = {
  __typename?: 'PanelContentWrapperLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  textWrapperRichPanelCollection?: Maybe<TextWrapperRichPanelCollection>;
};


export type PanelContentWrapperLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PanelContentWrapperLinkingCollectionsTextWrapperRichPanelCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PanelContentWrapperLinkingCollectionsTextWrapperRichPanelCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PanelContentWrapperLinkingCollectionsTextWrapperRichPanelCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PanelContentWrapperOrder {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PanelContentWrapperPanelContentCollection = {
  __typename?: 'PanelContentWrapperPanelContentCollection';
  items: Array<Maybe<PanelButtonWithIcon>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PanelContentWrapperPanelContentCollectionOrder {
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestAutomationAttributeAsc = 'testAutomationAttribute_ASC',
  TestAutomationAttributeDesc = 'testAutomationAttribute_DESC'
}

/** Phone info wrapper [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/phoneInfo) */
export type PhoneInfo = Entry & {
  __typename?: 'PhoneInfo';
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PhoneInfoLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  phoneNumbersCollection?: Maybe<PhoneInfoPhoneNumbersCollection>;
  sfccParameters?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Phone info wrapper [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/phoneInfo) */
export type PhoneInfoInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Phone info wrapper [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/phoneInfo) */
export type PhoneInfoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Phone info wrapper [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/phoneInfo) */
export type PhoneInfoNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Phone info wrapper [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/phoneInfo) */
export type PhoneInfoPhoneNumbersCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PhoneInfoPhoneNumbersCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PhoneInfoValueFilter>;
};


/** Phone info wrapper [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/phoneInfo) */
export type PhoneInfoSfccParametersArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PhoneInfoCollection = {
  __typename?: 'PhoneInfoCollection';
  items: Array<Maybe<PhoneInfo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PhoneInfoFilter = {
  AND?: InputMaybe<Array<InputMaybe<PhoneInfoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PhoneInfoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumbers?: InputMaybe<CfPhoneInfoValueNestedFilter>;
  phoneNumbersCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sfccParameters?: InputMaybe<Scalars['String']>;
  sfccParameters_contains?: InputMaybe<Scalars['String']>;
  sfccParameters_exists?: InputMaybe<Scalars['Boolean']>;
  sfccParameters_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sfccParameters_not?: InputMaybe<Scalars['String']>;
  sfccParameters_not_contains?: InputMaybe<Scalars['String']>;
  sfccParameters_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PhoneInfoLinkingCollections = {
  __typename?: 'PhoneInfoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PhoneInfoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PhoneInfoOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SfccParametersAsc = 'sfccParameters_ASC',
  SfccParametersDesc = 'sfccParameters_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PhoneInfoPhoneNumbersCollection = {
  __typename?: 'PhoneInfoPhoneNumbersCollection';
  items: Array<Maybe<PhoneInfoValue>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PhoneInfoPhoneNumbersCollectionOrder {
  CountryCodeAsc = 'countryCode_ASC',
  CountryCodeDesc = 'countryCode_DESC',
  PhoneDisplayAsc = 'phoneDisplay_ASC',
  PhoneDisplayDesc = 'phoneDisplay_DESC',
  PhoneValueAsc = 'phoneValue_ASC',
  PhoneValueDesc = 'phoneValue_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** All Available Phone numbers [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/phoneInfoValue) */
export type PhoneInfoValue = Entry & {
  __typename?: 'PhoneInfoValue';
  contentfulMetadata: ContentfulMetadata;
  countryCode?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PhoneInfoValueLinkingCollections>;
  phoneDisplay?: Maybe<Scalars['String']>;
  phoneValue?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** All Available Phone numbers [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/phoneInfoValue) */
export type PhoneInfoValueCountryCodeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** All Available Phone numbers [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/phoneInfoValue) */
export type PhoneInfoValueLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** All Available Phone numbers [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/phoneInfoValue) */
export type PhoneInfoValuePhoneDisplayArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** All Available Phone numbers [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/phoneInfoValue) */
export type PhoneInfoValuePhoneValueArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PhoneInfoValueCollection = {
  __typename?: 'PhoneInfoValueCollection';
  items: Array<Maybe<PhoneInfoValue>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PhoneInfoValueFilter = {
  AND?: InputMaybe<Array<InputMaybe<PhoneInfoValueFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PhoneInfoValueFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  countryCode?: InputMaybe<Scalars['String']>;
  countryCode_contains?: InputMaybe<Scalars['String']>;
  countryCode_exists?: InputMaybe<Scalars['Boolean']>;
  countryCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  countryCode_not?: InputMaybe<Scalars['String']>;
  countryCode_not_contains?: InputMaybe<Scalars['String']>;
  countryCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneDisplay?: InputMaybe<Scalars['String']>;
  phoneDisplay_contains?: InputMaybe<Scalars['String']>;
  phoneDisplay_exists?: InputMaybe<Scalars['Boolean']>;
  phoneDisplay_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneDisplay_not?: InputMaybe<Scalars['String']>;
  phoneDisplay_not_contains?: InputMaybe<Scalars['String']>;
  phoneDisplay_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneValue?: InputMaybe<Scalars['String']>;
  phoneValue_contains?: InputMaybe<Scalars['String']>;
  phoneValue_exists?: InputMaybe<Scalars['Boolean']>;
  phoneValue_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneValue_not?: InputMaybe<Scalars['String']>;
  phoneValue_not_contains?: InputMaybe<Scalars['String']>;
  phoneValue_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PhoneInfoValueLinkingCollections = {
  __typename?: 'PhoneInfoValueLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  phoneInfoCollection?: Maybe<PhoneInfoCollection>;
};


export type PhoneInfoValueLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PhoneInfoValueLinkingCollectionsPhoneInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PhoneInfoValueLinkingCollectionsPhoneInfoCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PhoneInfoValueLinkingCollectionsPhoneInfoCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SfccParametersAsc = 'sfccParameters_ASC',
  SfccParametersDesc = 'sfccParameters_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PhoneInfoValueOrder {
  CountryCodeAsc = 'countryCode_ASC',
  CountryCodeDesc = 'countryCode_DESC',
  PhoneDisplayAsc = 'phoneDisplay_ASC',
  PhoneDisplayDesc = 'phoneDisplay_DESC',
  PhoneValueAsc = 'phoneValue_ASC',
  PhoneValueDesc = 'phoneValue_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Pinpoint overlay indicator used to point out specific positions on an image. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/pinpointOverlayIndicator) */
export type PinpointOverlayIndicator = Entry & {
  __typename?: 'PinpointOverlayIndicator';
  contentfulMetadata: ContentfulMetadata;
  desktopPinpointPosition?: Maybe<Scalars['String']>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PinpointOverlayIndicatorLinkingCollections>;
  mobilePinpointPosition?: Maybe<Scalars['String']>;
  sys: Sys;
  tabletPinpointPosition?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  textPosition?: Maybe<Scalars['String']>;
};


/** Pinpoint overlay indicator used to point out specific positions on an image. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/pinpointOverlayIndicator) */
export type PinpointOverlayIndicatorDesktopPinpointPositionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Pinpoint overlay indicator used to point out specific positions on an image. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/pinpointOverlayIndicator) */
export type PinpointOverlayIndicatorInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Pinpoint overlay indicator used to point out specific positions on an image. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/pinpointOverlayIndicator) */
export type PinpointOverlayIndicatorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Pinpoint overlay indicator used to point out specific positions on an image. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/pinpointOverlayIndicator) */
export type PinpointOverlayIndicatorMobilePinpointPositionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Pinpoint overlay indicator used to point out specific positions on an image. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/pinpointOverlayIndicator) */
export type PinpointOverlayIndicatorTabletPinpointPositionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Pinpoint overlay indicator used to point out specific positions on an image. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/pinpointOverlayIndicator) */
export type PinpointOverlayIndicatorTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Pinpoint overlay indicator used to point out specific positions on an image. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/pinpointOverlayIndicator) */
export type PinpointOverlayIndicatorTextPositionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PinpointOverlayIndicatorCollection = {
  __typename?: 'PinpointOverlayIndicatorCollection';
  items: Array<Maybe<PinpointOverlayIndicator>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PinpointOverlayIndicatorFilter = {
  AND?: InputMaybe<Array<InputMaybe<PinpointOverlayIndicatorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PinpointOverlayIndicatorFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktopPinpointPosition?: InputMaybe<Scalars['String']>;
  desktopPinpointPosition_contains?: InputMaybe<Scalars['String']>;
  desktopPinpointPosition_exists?: InputMaybe<Scalars['Boolean']>;
  desktopPinpointPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  desktopPinpointPosition_not?: InputMaybe<Scalars['String']>;
  desktopPinpointPosition_not_contains?: InputMaybe<Scalars['String']>;
  desktopPinpointPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mobilePinpointPosition?: InputMaybe<Scalars['String']>;
  mobilePinpointPosition_contains?: InputMaybe<Scalars['String']>;
  mobilePinpointPosition_exists?: InputMaybe<Scalars['Boolean']>;
  mobilePinpointPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mobilePinpointPosition_not?: InputMaybe<Scalars['String']>;
  mobilePinpointPosition_not_contains?: InputMaybe<Scalars['String']>;
  mobilePinpointPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  tabletPinpointPosition?: InputMaybe<Scalars['String']>;
  tabletPinpointPosition_contains?: InputMaybe<Scalars['String']>;
  tabletPinpointPosition_exists?: InputMaybe<Scalars['Boolean']>;
  tabletPinpointPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabletPinpointPosition_not?: InputMaybe<Scalars['String']>;
  tabletPinpointPosition_not_contains?: InputMaybe<Scalars['String']>;
  tabletPinpointPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text?: InputMaybe<Scalars['String']>;
  textPosition?: InputMaybe<Scalars['String']>;
  textPosition_contains?: InputMaybe<Scalars['String']>;
  textPosition_exists?: InputMaybe<Scalars['Boolean']>;
  textPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  textPosition_not?: InputMaybe<Scalars['String']>;
  textPosition_not_contains?: InputMaybe<Scalars['String']>;
  textPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_not?: InputMaybe<Scalars['String']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PinpointOverlayIndicatorLinkingCollections = {
  __typename?: 'PinpointOverlayIndicatorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  textAndImageRowBannerCollection?: Maybe<TextAndImageRowBannerCollection>;
};


export type PinpointOverlayIndicatorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PinpointOverlayIndicatorLinkingCollectionsTextAndImageRowBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PinpointOverlayIndicatorLinkingCollectionsTextAndImageRowBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PinpointOverlayIndicatorLinkingCollectionsTextAndImageRowBannerCollectionOrder {
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PinpointOverlayIndicatorOrder {
  DesktopPinpointPositionAsc = 'desktopPinpointPosition_ASC',
  DesktopPinpointPositionDesc = 'desktopPinpointPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobilePinpointPositionAsc = 'mobilePinpointPosition_ASC',
  MobilePinpointPositionDesc = 'mobilePinpointPosition_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletPinpointPositionAsc = 'tabletPinpointPosition_ASC',
  TabletPinpointPositionDesc = 'tabletPinpointPosition_DESC',
  TextPositionAsc = 'textPosition_ASC',
  TextPositionDesc = 'textPosition_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/priceInfo) */
export type PriceInfo = Entry & {
  __typename?: 'PriceInfo';
  contentfulMetadata: ContentfulMetadata;
  grossPrice: Scalars['Float'];
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PriceInfoLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  pricesCollection?: Maybe<PriceInfoPricesCollection>;
  sfccParameters?: Maybe<Scalars['String']>;
  sys: Sys;
  taxPrice: Scalars['Float'];
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/priceInfo) */
export type PriceInfoInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/priceInfo) */
export type PriceInfoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/priceInfo) */
export type PriceInfoNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/priceInfo) */
export type PriceInfoPricesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PriceInfoPricesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PriceInfoValueFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/priceInfo) */
export type PriceInfoSfccParametersArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PriceInfoCollection = {
  __typename?: 'PriceInfoCollection';
  items: Array<Maybe<PriceInfo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PriceInfoFilter = {
  AND?: InputMaybe<Array<InputMaybe<PriceInfoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PriceInfoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  prices?: InputMaybe<CfPriceInfoValueNestedFilter>;
  pricesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sfccParameters?: InputMaybe<Scalars['String']>;
  sfccParameters_contains?: InputMaybe<Scalars['String']>;
  sfccParameters_exists?: InputMaybe<Scalars['Boolean']>;
  sfccParameters_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sfccParameters_not?: InputMaybe<Scalars['String']>;
  sfccParameters_not_contains?: InputMaybe<Scalars['String']>;
  sfccParameters_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PriceInfoLinkingCollections = {
  __typename?: 'PriceInfoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PriceInfoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PriceInfoOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SfccParametersAsc = 'sfccParameters_ASC',
  SfccParametersDesc = 'sfccParameters_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PriceInfoPricesCollection = {
  __typename?: 'PriceInfoPricesCollection';
  items: Array<Maybe<PriceInfoValue>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PriceInfoPricesCollectionOrder {
  CurrencyCodeAsc = 'currencyCode_ASC',
  CurrencyCodeDesc = 'currencyCode_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PriceValueAsc = 'priceValue_ASC',
  PriceValueDesc = 'priceValue_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** All Available Currencies [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/priceInfoValue) */
export type PriceInfoValue = Entry & {
  __typename?: 'PriceInfoValue';
  contentfulMetadata: ContentfulMetadata;
  currencyCode?: Maybe<Scalars['String']>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PriceInfoValueLinkingCollections>;
  priceValue?: Maybe<Scalars['Int']>;
  sys: Sys;
};


/** All Available Currencies [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/priceInfoValue) */
export type PriceInfoValueCurrencyCodeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** All Available Currencies [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/priceInfoValue) */
export type PriceInfoValueInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** All Available Currencies [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/priceInfoValue) */
export type PriceInfoValueLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** All Available Currencies [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/priceInfoValue) */
export type PriceInfoValuePriceValueArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PriceInfoValueCollection = {
  __typename?: 'PriceInfoValueCollection';
  items: Array<Maybe<PriceInfoValue>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PriceInfoValueFilter = {
  AND?: InputMaybe<Array<InputMaybe<PriceInfoValueFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PriceInfoValueFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  currencyCode?: InputMaybe<Scalars['String']>;
  currencyCode_contains?: InputMaybe<Scalars['String']>;
  currencyCode_exists?: InputMaybe<Scalars['Boolean']>;
  currencyCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currencyCode_not?: InputMaybe<Scalars['String']>;
  currencyCode_not_contains?: InputMaybe<Scalars['String']>;
  currencyCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  priceValue?: InputMaybe<Scalars['Int']>;
  priceValue_exists?: InputMaybe<Scalars['Boolean']>;
  priceValue_gt?: InputMaybe<Scalars['Int']>;
  priceValue_gte?: InputMaybe<Scalars['Int']>;
  priceValue_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  priceValue_lt?: InputMaybe<Scalars['Int']>;
  priceValue_lte?: InputMaybe<Scalars['Int']>;
  priceValue_not?: InputMaybe<Scalars['Int']>;
  priceValue_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PriceInfoValueLinkingCollections = {
  __typename?: 'PriceInfoValueLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  priceInfoCollection?: Maybe<PriceInfoCollection>;
};


export type PriceInfoValueLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PriceInfoValueLinkingCollectionsPriceInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PriceInfoValueLinkingCollectionsPriceInfoCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PriceInfoValueLinkingCollectionsPriceInfoCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SfccParametersAsc = 'sfccParameters_ASC',
  SfccParametersDesc = 'sfccParameters_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PriceInfoValueOrder {
  CurrencyCodeAsc = 'currencyCode_ASC',
  CurrencyCodeDesc = 'currencyCode_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PriceValueAsc = 'priceValue_ASC',
  PriceValueDesc = 'priceValue_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Product = {
  __typename?: 'Product';
  /** Availability Status */
  availabilityStatus: AvailabilityStatus;
  /** badge */
  badge?: Maybe<Scalars['String']>;
  /** The product category Id */
  categoryId?: Maybe<Scalars['String']>;
  /** The product category */
  categoryName?: Maybe<Scalars['String']>;
  /** The code of the product */
  code?: Maybe<Scalars['String']>;
  /** The colorId of the product */
  colorId?: Maybe<Scalars['String']>;
  /** The currency for product */
  currency?: Maybe<Scalars['String']>;
  /** The product Desktop Image Bundle */
  desktopImage: Image;
  /** Enable in Lookbuilder */
  enabledInLookBuilder?: Maybe<Scalars['Boolean']>;
  /** Fabric Code ID */
  fabricCodeID?: Maybe<Scalars['String']>;
  /** The fitId of the product */
  fitId: Scalars['String'];
  id: Scalars['ID'];
  /** Custom Made Product */
  isCustomMadeProduct?: Maybe<Scalars['String']>;
  /** Enabled Customize Button */
  isEnabledCustomizeButton?: Maybe<Scalars['Boolean']>;
  /** Fabric Availability */
  isFabricAvailable?: Maybe<Scalars['Boolean']>;
  /** The Material of the product */
  materialValue: Scalars['String'];
  /** The product Mobile Image Bundle */
  mobileImage: Image;
  /** The name of the product */
  name: Scalars['String'];
  /** The onlineMaterial of the product */
  onlineMaterial: Scalars['String'];
  /** The product price */
  price: Scalars['Float'];
  /** Set Products */
  setProducts?: Maybe<Array<Product>>;
  /** The size of the product */
  size?: Maybe<Scalars['String']>;
  /** The style of the product */
  style: Scalars['String'];
  /** The styleId of the product */
  styleId: Scalars['String'];
  /** The product type */
  type: Scalars['String'];
  /** The product url */
  url: Scalars['String'];
};

export type ProductLineItem = LineItem & {
  __typename?: 'ProductLineItem';
  /** Availability Status */
  availabilityStatus: AvailabilityStatus;
  /** Category of Item */
  categoryId: Scalars['String'];
  /** The product Desktop Image Bundle */
  desktopImage: Image;
  /** Item Category */
  isCustomMadeAvailable: Scalars['Boolean'];
  /** is Mix&Match */
  isMixAndMatch: Scalars['Boolean'];
  /** Item ID */
  itemId: Scalars['String'];
  /** Master ProductId */
  masterProductId?: Maybe<Scalars['String']>;
  /** The product Mobile Image Bundle */
  mobileImage: Image;
  /** The price of the line item before applying any adjustments. If the line item is based on net pricing then the net price is returned. If the line item is based on gross pricing then the gross price is returned. */
  price: Scalars['Float'];
  /** The price of the product line item including item-level adjustments, but not including order-level adjustments or shipping charges. If the taxation policy is net, it doesn't include tax. If the taxation policy is gross, it includes tax. */
  priceAfterDiscount?: Maybe<Scalars['Float']>;
  /** The ID of the product. */
  productId: Scalars['String'];
  /** The name of the product. */
  productName: Scalars['String'];
  /** The quantity of the products represented by this item. */
  quantity: Scalars['Int'];
  /** The ID of the shipment this item belongs to. */
  shipmentId: Scalars['String'];
  /** Size of Item */
  size?: Maybe<Scalars['String']>;
  /** Size Id of Item. This can be used to send it for Analytics */
  sizeId?: Maybe<Scalars['String']>;
  /** URL of Item. */
  url?: Maybe<Scalars['String']>;
};

/** Content type for listing products, based on ID or Category [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productListing) */
export type ProductListing = Entry & {
  __typename?: 'ProductListing';
  categoryId?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ProductListingLinkingCollections>;
  promotionEvents?: Maybe<PromotionEvents>;
  qtyOfProducts?: Maybe<Scalars['Int']>;
  sys: Sys;
};


/** Content type for listing products, based on ID or Category [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productListing) */
export type ProductListingCategoryIdArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Content type for listing products, based on ID or Category [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productListing) */
export type ProductListingInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Content type for listing products, based on ID or Category [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productListing) */
export type ProductListingLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Content type for listing products, based on ID or Category [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productListing) */
export type ProductListingPromotionEventsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PromotionEventsFilter>;
};


/** Content type for listing products, based on ID or Category [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productListing) */
export type ProductListingQtyOfProductsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ProductListingCollection = {
  __typename?: 'ProductListingCollection';
  items: Array<Maybe<ProductListing>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ProductListingFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductListingFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductListingFilter>>>;
  categoryId?: InputMaybe<Scalars['String']>;
  categoryId_contains?: InputMaybe<Scalars['String']>;
  categoryId_exists?: InputMaybe<Scalars['Boolean']>;
  categoryId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categoryId_not?: InputMaybe<Scalars['String']>;
  categoryId_not_contains?: InputMaybe<Scalars['String']>;
  categoryId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEvents?: InputMaybe<CfPromotionEventsNestedFilter>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  qtyOfProducts?: InputMaybe<Scalars['Int']>;
  qtyOfProducts_exists?: InputMaybe<Scalars['Boolean']>;
  qtyOfProducts_gt?: InputMaybe<Scalars['Int']>;
  qtyOfProducts_gte?: InputMaybe<Scalars['Int']>;
  qtyOfProducts_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  qtyOfProducts_lt?: InputMaybe<Scalars['Int']>;
  qtyOfProducts_lte?: InputMaybe<Scalars['Int']>;
  qtyOfProducts_not?: InputMaybe<Scalars['Int']>;
  qtyOfProducts_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ProductListingLinkingCollections = {
  __typename?: 'ProductListingLinkingCollections';
  campaignCarrouselCollection?: Maybe<CampaignCarrouselCollection>;
  entryCollection?: Maybe<EntryCollection>;
  shopCollectionBlockCollection?: Maybe<ShopCollectionBlockCollection>;
};


export type ProductListingLinkingCollectionsCampaignCarrouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ProductListingLinkingCollectionsCampaignCarrouselCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ProductListingLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ProductListingLinkingCollectionsShopCollectionBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ProductListingLinkingCollectionsShopCollectionBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ProductListingLinkingCollectionsCampaignCarrouselCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextLayoutAsc = 'textLayout_ASC',
  TextLayoutDesc = 'textLayout_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ProductListingLinkingCollectionsShopCollectionBlockCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ProductListingOrder {
  CategoryIdAsc = 'categoryId_ASC',
  CategoryIdDesc = 'categoryId_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  QtyOfProductsAsc = 'qtyOfProducts_ASC',
  QtyOfProductsDesc = 'qtyOfProducts_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Product Option info and content for configurator step. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productOptionConfigurator) */
export type ProductOptionConfigurator = Entry & {
  __typename?: 'ProductOptionConfigurator';
  baseColor?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ProductOptionConfiguratorLinkingCollections>;
  productId?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  recommendations?: Maybe<Scalars['String']>;
  subStep?: Maybe<Scalars['String']>;
  sys: Sys;
  thumbnailImage?: Maybe<MediaWrapperV2>;
};


/** Product Option info and content for configurator step. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productOptionConfigurator) */
export type ProductOptionConfiguratorBaseColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Product Option info and content for configurator step. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productOptionConfigurator) */
export type ProductOptionConfiguratorInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Product Option info and content for configurator step. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productOptionConfigurator) */
export type ProductOptionConfiguratorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Product Option info and content for configurator step. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productOptionConfigurator) */
export type ProductOptionConfiguratorProductIdArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Product Option info and content for configurator step. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productOptionConfigurator) */
export type ProductOptionConfiguratorProductNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Product Option info and content for configurator step. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productOptionConfigurator) */
export type ProductOptionConfiguratorRecommendationsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Product Option info and content for configurator step. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productOptionConfigurator) */
export type ProductOptionConfiguratorSubStepArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Product Option info and content for configurator step. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productOptionConfigurator) */
export type ProductOptionConfiguratorThumbnailImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MediaWrapperV2Filter>;
};

export type ProductOptionConfiguratorCollection = {
  __typename?: 'ProductOptionConfiguratorCollection';
  items: Array<Maybe<ProductOptionConfigurator>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ProductOptionConfiguratorFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductOptionConfiguratorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductOptionConfiguratorFilter>>>;
  baseColor?: InputMaybe<Scalars['String']>;
  baseColor_contains?: InputMaybe<Scalars['String']>;
  baseColor_exists?: InputMaybe<Scalars['Boolean']>;
  baseColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  baseColor_not?: InputMaybe<Scalars['String']>;
  baseColor_not_contains?: InputMaybe<Scalars['String']>;
  baseColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productId?: InputMaybe<Scalars['String']>;
  productId_contains?: InputMaybe<Scalars['String']>;
  productId_exists?: InputMaybe<Scalars['Boolean']>;
  productId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productId_not?: InputMaybe<Scalars['String']>;
  productId_not_contains?: InputMaybe<Scalars['String']>;
  productId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productName?: InputMaybe<Scalars['String']>;
  productName_contains?: InputMaybe<Scalars['String']>;
  productName_exists?: InputMaybe<Scalars['Boolean']>;
  productName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productName_not?: InputMaybe<Scalars['String']>;
  productName_not_contains?: InputMaybe<Scalars['String']>;
  productName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  recommendations?: InputMaybe<Scalars['String']>;
  recommendations_contains?: InputMaybe<Scalars['String']>;
  recommendations_exists?: InputMaybe<Scalars['Boolean']>;
  recommendations_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  recommendations_not?: InputMaybe<Scalars['String']>;
  recommendations_not_contains?: InputMaybe<Scalars['String']>;
  recommendations_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subStep?: InputMaybe<Scalars['String']>;
  subStep_contains?: InputMaybe<Scalars['String']>;
  subStep_exists?: InputMaybe<Scalars['Boolean']>;
  subStep_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subStep_not?: InputMaybe<Scalars['String']>;
  subStep_not_contains?: InputMaybe<Scalars['String']>;
  subStep_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnailImage?: InputMaybe<CfMediaWrapperV2NestedFilter>;
  thumbnailImage_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ProductOptionConfiguratorLinkingCollections = {
  __typename?: 'ProductOptionConfiguratorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  productStepConfiguratorCollection?: Maybe<ProductStepConfiguratorCollection>;
};


export type ProductOptionConfiguratorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ProductOptionConfiguratorLinkingCollectionsProductStepConfiguratorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ProductOptionConfiguratorLinkingCollectionsProductStepConfiguratorCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ProductOptionConfiguratorLinkingCollectionsProductStepConfiguratorCollectionOrder {
  CategoryStepAsc = 'categoryStep_ASC',
  CategoryStepDesc = 'categoryStep_DESC',
  ImageTypeAsc = 'imageType_ASC',
  ImageTypeDesc = 'imageType_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PreviewImageFocalPointMobileAsc = 'previewImageFocalPointMobile_ASC',
  PreviewImageFocalPointMobileDesc = 'previewImageFocalPointMobile_DESC',
  PreviewImageFocalPointTabletAsc = 'previewImageFocalPointTablet_ASC',
  PreviewImageFocalPointTabletDesc = 'previewImageFocalPointTablet_DESC',
  PreviewImageFocalPointAsc = 'previewImageFocalPoint_ASC',
  PreviewImageFocalPointDesc = 'previewImageFocalPoint_DESC',
  PreviewImageZoomMobileAsc = 'previewImageZoomMobile_ASC',
  PreviewImageZoomMobileDesc = 'previewImageZoomMobile_DESC',
  PreviewImageZoomTabletAsc = 'previewImageZoomTablet_ASC',
  PreviewImageZoomTabletDesc = 'previewImageZoomTablet_DESC',
  PreviewImageZoomAsc = 'previewImageZoom_ASC',
  PreviewImageZoomDesc = 'previewImageZoom_DESC',
  StaticImagePatternDesktopAsc = 'staticImagePatternDesktop_ASC',
  StaticImagePatternDesktopDesc = 'staticImagePatternDesktop_DESC',
  StaticImagePatternMobileAsc = 'staticImagePatternMobile_ASC',
  StaticImagePatternMobileDesc = 'staticImagePatternMobile_DESC',
  SubStepAsc = 'subStep_ASC',
  SubStepDesc = 'subStep_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ProductOptionConfiguratorOrder {
  BaseColorAsc = 'baseColor_ASC',
  BaseColorDesc = 'baseColor_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ProductIdAsc = 'productId_ASC',
  ProductIdDesc = 'productId_DESC',
  ProductNameAsc = 'productName_ASC',
  ProductNameDesc = 'productName_DESC',
  RecommendationsAsc = 'recommendations_ASC',
  RecommendationsDesc = 'recommendations_DESC',
  SubStepAsc = 'subStep_ASC',
  SubStepDesc = 'subStep_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Product Option info and content for configurator step but with a static instead of layered image [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productOptionStaticImageConfigurator) */
export type ProductOptionStaticImageConfigurator = Entry & {
  __typename?: 'ProductOptionStaticImageConfigurator';
  baseColor?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ProductOptionStaticImageConfiguratorLinkingCollections>;
  productId?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  staticImage?: Maybe<MediaWrapperV2>;
  sys: Sys;
  thumbnailImage?: Maybe<MediaWrapperV2>;
};


/** Product Option info and content for configurator step but with a static instead of layered image [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productOptionStaticImageConfigurator) */
export type ProductOptionStaticImageConfiguratorBaseColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Product Option info and content for configurator step but with a static instead of layered image [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productOptionStaticImageConfigurator) */
export type ProductOptionStaticImageConfiguratorInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Product Option info and content for configurator step but with a static instead of layered image [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productOptionStaticImageConfigurator) */
export type ProductOptionStaticImageConfiguratorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Product Option info and content for configurator step but with a static instead of layered image [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productOptionStaticImageConfigurator) */
export type ProductOptionStaticImageConfiguratorProductIdArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Product Option info and content for configurator step but with a static instead of layered image [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productOptionStaticImageConfigurator) */
export type ProductOptionStaticImageConfiguratorProductNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Product Option info and content for configurator step but with a static instead of layered image [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productOptionStaticImageConfigurator) */
export type ProductOptionStaticImageConfiguratorStaticImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MediaWrapperV2Filter>;
};


/** Product Option info and content for configurator step but with a static instead of layered image [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productOptionStaticImageConfigurator) */
export type ProductOptionStaticImageConfiguratorThumbnailImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MediaWrapperV2Filter>;
};

export type ProductOptionStaticImageConfiguratorCollection = {
  __typename?: 'ProductOptionStaticImageConfiguratorCollection';
  items: Array<Maybe<ProductOptionStaticImageConfigurator>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ProductOptionStaticImageConfiguratorFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductOptionStaticImageConfiguratorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductOptionStaticImageConfiguratorFilter>>>;
  baseColor?: InputMaybe<Scalars['String']>;
  baseColor_contains?: InputMaybe<Scalars['String']>;
  baseColor_exists?: InputMaybe<Scalars['Boolean']>;
  baseColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  baseColor_not?: InputMaybe<Scalars['String']>;
  baseColor_not_contains?: InputMaybe<Scalars['String']>;
  baseColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productId?: InputMaybe<Scalars['String']>;
  productId_contains?: InputMaybe<Scalars['String']>;
  productId_exists?: InputMaybe<Scalars['Boolean']>;
  productId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productId_not?: InputMaybe<Scalars['String']>;
  productId_not_contains?: InputMaybe<Scalars['String']>;
  productId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productName?: InputMaybe<Scalars['String']>;
  productName_contains?: InputMaybe<Scalars['String']>;
  productName_exists?: InputMaybe<Scalars['Boolean']>;
  productName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productName_not?: InputMaybe<Scalars['String']>;
  productName_not_contains?: InputMaybe<Scalars['String']>;
  productName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  staticImage?: InputMaybe<CfMediaWrapperV2NestedFilter>;
  staticImage_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  thumbnailImage?: InputMaybe<CfMediaWrapperV2NestedFilter>;
  thumbnailImage_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ProductOptionStaticImageConfiguratorLinkingCollections = {
  __typename?: 'ProductOptionStaticImageConfiguratorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  productStepConfiguratorCollection?: Maybe<ProductStepConfiguratorCollection>;
};


export type ProductOptionStaticImageConfiguratorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ProductOptionStaticImageConfiguratorLinkingCollectionsProductStepConfiguratorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ProductOptionStaticImageConfiguratorLinkingCollectionsProductStepConfiguratorCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ProductOptionStaticImageConfiguratorLinkingCollectionsProductStepConfiguratorCollectionOrder {
  CategoryStepAsc = 'categoryStep_ASC',
  CategoryStepDesc = 'categoryStep_DESC',
  ImageTypeAsc = 'imageType_ASC',
  ImageTypeDesc = 'imageType_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PreviewImageFocalPointMobileAsc = 'previewImageFocalPointMobile_ASC',
  PreviewImageFocalPointMobileDesc = 'previewImageFocalPointMobile_DESC',
  PreviewImageFocalPointTabletAsc = 'previewImageFocalPointTablet_ASC',
  PreviewImageFocalPointTabletDesc = 'previewImageFocalPointTablet_DESC',
  PreviewImageFocalPointAsc = 'previewImageFocalPoint_ASC',
  PreviewImageFocalPointDesc = 'previewImageFocalPoint_DESC',
  PreviewImageZoomMobileAsc = 'previewImageZoomMobile_ASC',
  PreviewImageZoomMobileDesc = 'previewImageZoomMobile_DESC',
  PreviewImageZoomTabletAsc = 'previewImageZoomTablet_ASC',
  PreviewImageZoomTabletDesc = 'previewImageZoomTablet_DESC',
  PreviewImageZoomAsc = 'previewImageZoom_ASC',
  PreviewImageZoomDesc = 'previewImageZoom_DESC',
  StaticImagePatternDesktopAsc = 'staticImagePatternDesktop_ASC',
  StaticImagePatternDesktopDesc = 'staticImagePatternDesktop_DESC',
  StaticImagePatternMobileAsc = 'staticImagePatternMobile_ASC',
  StaticImagePatternMobileDesc = 'staticImagePatternMobile_DESC',
  SubStepAsc = 'subStep_ASC',
  SubStepDesc = 'subStep_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ProductOptionStaticImageConfiguratorOrder {
  BaseColorAsc = 'baseColor_ASC',
  BaseColorDesc = 'baseColor_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ProductIdAsc = 'productId_ASC',
  ProductIdDesc = 'productId_DESC',
  ProductNameAsc = 'productName_ASC',
  ProductNameDesc = 'productName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ProductSearch = {
  __typename?: 'ProductSearch';
  /** Category ID */
  categoryId: Scalars['ID'];
  /** The name of the product */
  productSearchHits?: Maybe<Array<Maybe<ProductSearchHit>>>;
};

export type ProductSearchHit = {
  __typename?: 'ProductSearchHit';
  /** The currency for product */
  currency: Scalars['String'];
  /** Product ID */
  id: Scalars['ID'];
  /** The name of the product */
  name: Scalars['String'];
  /** The product price */
  price: Scalars['Float'];
  /** The product type */
  type: Product_Type;
};

export type ProductSizeData = {
  __typename?: 'ProductSizeData';
  rows: Array<Maybe<SizeRow>>;
  rowsData: RowsData;
  sortedSizeColumn: Array<Maybe<SortedSizeColumn>>;
};

/** Configurator Step [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productStepConfigurator) */
export type ProductStepConfigurator = Entry & {
  __typename?: 'ProductStepConfigurator';
  categoryStep?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  imageType?: Maybe<Scalars['String']>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ProductStepConfiguratorLinkingCollections>;
  previewImageFocalPoint?: Maybe<Scalars['String']>;
  previewImageFocalPointMobile?: Maybe<Scalars['String']>;
  previewImageFocalPointTablet?: Maybe<Scalars['String']>;
  previewImageZoom?: Maybe<Scalars['String']>;
  previewImageZoomMobile?: Maybe<Scalars['String']>;
  previewImageZoomTablet?: Maybe<Scalars['String']>;
  productOptionsCollection?: Maybe<ProductStepConfiguratorProductOptionsCollection>;
  staticImagePatternDesktop?: Maybe<Scalars['String']>;
  staticImagePatternMobile?: Maybe<Scalars['String']>;
  subStep?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Configurator Step [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productStepConfigurator) */
export type ProductStepConfiguratorCategoryStepArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Configurator Step [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productStepConfigurator) */
export type ProductStepConfiguratorImageTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Configurator Step [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productStepConfigurator) */
export type ProductStepConfiguratorInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Configurator Step [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productStepConfigurator) */
export type ProductStepConfiguratorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Configurator Step [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productStepConfigurator) */
export type ProductStepConfiguratorPreviewImageFocalPointArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Configurator Step [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productStepConfigurator) */
export type ProductStepConfiguratorPreviewImageFocalPointMobileArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Configurator Step [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productStepConfigurator) */
export type ProductStepConfiguratorPreviewImageFocalPointTabletArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Configurator Step [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productStepConfigurator) */
export type ProductStepConfiguratorPreviewImageZoomArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Configurator Step [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productStepConfigurator) */
export type ProductStepConfiguratorPreviewImageZoomMobileArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Configurator Step [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productStepConfigurator) */
export type ProductStepConfiguratorPreviewImageZoomTabletArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Configurator Step [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productStepConfigurator) */
export type ProductStepConfiguratorProductOptionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductStepConfiguratorProductOptionsFilter>;
};


/** Configurator Step [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productStepConfigurator) */
export type ProductStepConfiguratorStaticImagePatternDesktopArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Configurator Step [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productStepConfigurator) */
export type ProductStepConfiguratorStaticImagePatternMobileArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Configurator Step [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productStepConfigurator) */
export type ProductStepConfiguratorSubStepArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Configurator Step [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/productStepConfigurator) */
export type ProductStepConfiguratorTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ProductStepConfiguratorCollection = {
  __typename?: 'ProductStepConfiguratorCollection';
  items: Array<Maybe<ProductStepConfigurator>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ProductStepConfiguratorFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductStepConfiguratorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductStepConfiguratorFilter>>>;
  categoryStep?: InputMaybe<Scalars['String']>;
  categoryStep_contains?: InputMaybe<Scalars['String']>;
  categoryStep_exists?: InputMaybe<Scalars['Boolean']>;
  categoryStep_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categoryStep_not?: InputMaybe<Scalars['String']>;
  categoryStep_not_contains?: InputMaybe<Scalars['String']>;
  categoryStep_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageType?: InputMaybe<Scalars['String']>;
  imageType_contains?: InputMaybe<Scalars['String']>;
  imageType_exists?: InputMaybe<Scalars['Boolean']>;
  imageType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageType_not?: InputMaybe<Scalars['String']>;
  imageType_not_contains?: InputMaybe<Scalars['String']>;
  imageType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageFocalPoint?: InputMaybe<Scalars['String']>;
  previewImageFocalPointMobile?: InputMaybe<Scalars['String']>;
  previewImageFocalPointMobile_contains?: InputMaybe<Scalars['String']>;
  previewImageFocalPointMobile_exists?: InputMaybe<Scalars['Boolean']>;
  previewImageFocalPointMobile_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageFocalPointMobile_not?: InputMaybe<Scalars['String']>;
  previewImageFocalPointMobile_not_contains?: InputMaybe<Scalars['String']>;
  previewImageFocalPointMobile_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageFocalPointTablet?: InputMaybe<Scalars['String']>;
  previewImageFocalPointTablet_contains?: InputMaybe<Scalars['String']>;
  previewImageFocalPointTablet_exists?: InputMaybe<Scalars['Boolean']>;
  previewImageFocalPointTablet_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageFocalPointTablet_not?: InputMaybe<Scalars['String']>;
  previewImageFocalPointTablet_not_contains?: InputMaybe<Scalars['String']>;
  previewImageFocalPointTablet_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageFocalPoint_contains?: InputMaybe<Scalars['String']>;
  previewImageFocalPoint_exists?: InputMaybe<Scalars['Boolean']>;
  previewImageFocalPoint_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageFocalPoint_not?: InputMaybe<Scalars['String']>;
  previewImageFocalPoint_not_contains?: InputMaybe<Scalars['String']>;
  previewImageFocalPoint_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageZoom?: InputMaybe<Scalars['String']>;
  previewImageZoomMobile?: InputMaybe<Scalars['String']>;
  previewImageZoomMobile_contains?: InputMaybe<Scalars['String']>;
  previewImageZoomMobile_exists?: InputMaybe<Scalars['Boolean']>;
  previewImageZoomMobile_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageZoomMobile_not?: InputMaybe<Scalars['String']>;
  previewImageZoomMobile_not_contains?: InputMaybe<Scalars['String']>;
  previewImageZoomMobile_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageZoomTablet?: InputMaybe<Scalars['String']>;
  previewImageZoomTablet_contains?: InputMaybe<Scalars['String']>;
  previewImageZoomTablet_exists?: InputMaybe<Scalars['Boolean']>;
  previewImageZoomTablet_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageZoomTablet_not?: InputMaybe<Scalars['String']>;
  previewImageZoomTablet_not_contains?: InputMaybe<Scalars['String']>;
  previewImageZoomTablet_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageZoom_contains?: InputMaybe<Scalars['String']>;
  previewImageZoom_exists?: InputMaybe<Scalars['Boolean']>;
  previewImageZoom_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageZoom_not?: InputMaybe<Scalars['String']>;
  previewImageZoom_not_contains?: InputMaybe<Scalars['String']>;
  previewImageZoom_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productOptions?: InputMaybe<CfproductOptionsMultiTypeNestedFilter>;
  productOptionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  staticImagePatternDesktop?: InputMaybe<Scalars['String']>;
  staticImagePatternDesktop_contains?: InputMaybe<Scalars['String']>;
  staticImagePatternDesktop_exists?: InputMaybe<Scalars['Boolean']>;
  staticImagePatternDesktop_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  staticImagePatternDesktop_not?: InputMaybe<Scalars['String']>;
  staticImagePatternDesktop_not_contains?: InputMaybe<Scalars['String']>;
  staticImagePatternDesktop_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  staticImagePatternMobile?: InputMaybe<Scalars['String']>;
  staticImagePatternMobile_contains?: InputMaybe<Scalars['String']>;
  staticImagePatternMobile_exists?: InputMaybe<Scalars['Boolean']>;
  staticImagePatternMobile_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  staticImagePatternMobile_not?: InputMaybe<Scalars['String']>;
  staticImagePatternMobile_not_contains?: InputMaybe<Scalars['String']>;
  staticImagePatternMobile_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subStep?: InputMaybe<Scalars['String']>;
  subStep_contains?: InputMaybe<Scalars['String']>;
  subStep_exists?: InputMaybe<Scalars['Boolean']>;
  subStep_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subStep_not?: InputMaybe<Scalars['String']>;
  subStep_not_contains?: InputMaybe<Scalars['String']>;
  subStep_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProductStepConfiguratorLinkingCollections = {
  __typename?: 'ProductStepConfiguratorLinkingCollections';
  blackTieConfiguratorCollection?: Maybe<BlackTieConfiguratorCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ProductStepConfiguratorLinkingCollectionsBlackTieConfiguratorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ProductStepConfiguratorLinkingCollectionsBlackTieConfiguratorCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ProductStepConfiguratorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ProductStepConfiguratorLinkingCollectionsBlackTieConfiguratorCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ModelImageAsc = 'modelImage_ASC',
  ModelImageDesc = 'modelImage_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ProductStepConfiguratorOrder {
  CategoryStepAsc = 'categoryStep_ASC',
  CategoryStepDesc = 'categoryStep_DESC',
  ImageTypeAsc = 'imageType_ASC',
  ImageTypeDesc = 'imageType_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PreviewImageFocalPointMobileAsc = 'previewImageFocalPointMobile_ASC',
  PreviewImageFocalPointMobileDesc = 'previewImageFocalPointMobile_DESC',
  PreviewImageFocalPointTabletAsc = 'previewImageFocalPointTablet_ASC',
  PreviewImageFocalPointTabletDesc = 'previewImageFocalPointTablet_DESC',
  PreviewImageFocalPointAsc = 'previewImageFocalPoint_ASC',
  PreviewImageFocalPointDesc = 'previewImageFocalPoint_DESC',
  PreviewImageZoomMobileAsc = 'previewImageZoomMobile_ASC',
  PreviewImageZoomMobileDesc = 'previewImageZoomMobile_DESC',
  PreviewImageZoomTabletAsc = 'previewImageZoomTablet_ASC',
  PreviewImageZoomTabletDesc = 'previewImageZoomTablet_DESC',
  PreviewImageZoomAsc = 'previewImageZoom_ASC',
  PreviewImageZoomDesc = 'previewImageZoom_DESC',
  StaticImagePatternDesktopAsc = 'staticImagePatternDesktop_ASC',
  StaticImagePatternDesktopDesc = 'staticImagePatternDesktop_DESC',
  StaticImagePatternMobileAsc = 'staticImagePatternMobile_ASC',
  StaticImagePatternMobileDesc = 'staticImagePatternMobile_DESC',
  SubStepAsc = 'subStep_ASC',
  SubStepDesc = 'subStep_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ProductStepConfiguratorProductOptionsCollection = {
  __typename?: 'ProductStepConfiguratorProductOptionsCollection';
  items: Array<Maybe<ProductStepConfiguratorProductOptionsItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ProductStepConfiguratorProductOptionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductStepConfiguratorProductOptionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductStepConfiguratorProductOptionsFilter>>>;
  baseColor?: InputMaybe<Scalars['String']>;
  baseColor_contains?: InputMaybe<Scalars['String']>;
  baseColor_exists?: InputMaybe<Scalars['Boolean']>;
  baseColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  baseColor_not?: InputMaybe<Scalars['String']>;
  baseColor_not_contains?: InputMaybe<Scalars['String']>;
  baseColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productId?: InputMaybe<Scalars['String']>;
  productId_contains?: InputMaybe<Scalars['String']>;
  productId_exists?: InputMaybe<Scalars['Boolean']>;
  productId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productId_not?: InputMaybe<Scalars['String']>;
  productId_not_contains?: InputMaybe<Scalars['String']>;
  productId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productName?: InputMaybe<Scalars['String']>;
  productName_contains?: InputMaybe<Scalars['String']>;
  productName_exists?: InputMaybe<Scalars['Boolean']>;
  productName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productName_not?: InputMaybe<Scalars['String']>;
  productName_not_contains?: InputMaybe<Scalars['String']>;
  productName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnailImage_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ProductStepConfiguratorProductOptionsItem = ProductOptionConfigurator | ProductOptionStaticImageConfigurator;

export type Promotion = {
  __typename?: 'Promotion';
  discountPrice: Scalars['Float'];
  id: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
};

/** Promotion Click, View, Creative [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/promotionEvents) */
export type PromotionEvents = Entry & {
  __typename?: 'PromotionEvents';
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PromotionEventsLinkingCollections>;
  promotionClick?: Maybe<Scalars['String']>;
  promotionCreative?: Maybe<Scalars['String']>;
  promotionDimension24?: Maybe<Scalars['String']>;
  promotionEventAction?: Maybe<Scalars['String']>;
  promotionEventCategory?: Maybe<Scalars['String']>;
  promotionEventLabel?: Maybe<Scalars['String']>;
  promotionPosition?: Maybe<Scalars['Int']>;
  promotionView?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Promotion Click, View, Creative [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/promotionEvents) */
export type PromotionEventsInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Promotion Click, View, Creative [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/promotionEvents) */
export type PromotionEventsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Promotion Click, View, Creative [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/promotionEvents) */
export type PromotionEventsPromotionClickArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Promotion Click, View, Creative [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/promotionEvents) */
export type PromotionEventsPromotionCreativeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Promotion Click, View, Creative [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/promotionEvents) */
export type PromotionEventsPromotionDimension24Args = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Promotion Click, View, Creative [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/promotionEvents) */
export type PromotionEventsPromotionEventActionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Promotion Click, View, Creative [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/promotionEvents) */
export type PromotionEventsPromotionEventCategoryArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Promotion Click, View, Creative [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/promotionEvents) */
export type PromotionEventsPromotionEventLabelArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Promotion Click, View, Creative [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/promotionEvents) */
export type PromotionEventsPromotionPositionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Promotion Click, View, Creative [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/promotionEvents) */
export type PromotionEventsPromotionViewArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PromotionEventsCollection = {
  __typename?: 'PromotionEventsCollection';
  items: Array<Maybe<PromotionEvents>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PromotionEventsFilter = {
  AND?: InputMaybe<Array<InputMaybe<PromotionEventsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PromotionEventsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionClick?: InputMaybe<Scalars['String']>;
  promotionClick_contains?: InputMaybe<Scalars['String']>;
  promotionClick_exists?: InputMaybe<Scalars['Boolean']>;
  promotionClick_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionClick_not?: InputMaybe<Scalars['String']>;
  promotionClick_not_contains?: InputMaybe<Scalars['String']>;
  promotionClick_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionCreative?: InputMaybe<Scalars['String']>;
  promotionCreative_contains?: InputMaybe<Scalars['String']>;
  promotionCreative_exists?: InputMaybe<Scalars['Boolean']>;
  promotionCreative_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionCreative_not?: InputMaybe<Scalars['String']>;
  promotionCreative_not_contains?: InputMaybe<Scalars['String']>;
  promotionCreative_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionDimension24?: InputMaybe<Scalars['String']>;
  promotionDimension24_contains?: InputMaybe<Scalars['String']>;
  promotionDimension24_exists?: InputMaybe<Scalars['Boolean']>;
  promotionDimension24_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionDimension24_not?: InputMaybe<Scalars['String']>;
  promotionDimension24_not_contains?: InputMaybe<Scalars['String']>;
  promotionDimension24_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEventAction?: InputMaybe<Scalars['String']>;
  promotionEventAction_contains?: InputMaybe<Scalars['String']>;
  promotionEventAction_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEventAction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEventAction_not?: InputMaybe<Scalars['String']>;
  promotionEventAction_not_contains?: InputMaybe<Scalars['String']>;
  promotionEventAction_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEventCategory?: InputMaybe<Scalars['String']>;
  promotionEventCategory_contains?: InputMaybe<Scalars['String']>;
  promotionEventCategory_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEventCategory_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEventCategory_not?: InputMaybe<Scalars['String']>;
  promotionEventCategory_not_contains?: InputMaybe<Scalars['String']>;
  promotionEventCategory_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEventLabel?: InputMaybe<Scalars['String']>;
  promotionEventLabel_contains?: InputMaybe<Scalars['String']>;
  promotionEventLabel_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEventLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEventLabel_not?: InputMaybe<Scalars['String']>;
  promotionEventLabel_not_contains?: InputMaybe<Scalars['String']>;
  promotionEventLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionPosition?: InputMaybe<Scalars['Int']>;
  promotionPosition_exists?: InputMaybe<Scalars['Boolean']>;
  promotionPosition_gt?: InputMaybe<Scalars['Int']>;
  promotionPosition_gte?: InputMaybe<Scalars['Int']>;
  promotionPosition_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotionPosition_lt?: InputMaybe<Scalars['Int']>;
  promotionPosition_lte?: InputMaybe<Scalars['Int']>;
  promotionPosition_not?: InputMaybe<Scalars['Int']>;
  promotionPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotionView?: InputMaybe<Scalars['String']>;
  promotionView_contains?: InputMaybe<Scalars['String']>;
  promotionView_exists?: InputMaybe<Scalars['Boolean']>;
  promotionView_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionView_not?: InputMaybe<Scalars['String']>;
  promotionView_not_contains?: InputMaybe<Scalars['String']>;
  promotionView_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PromotionEventsLinkingCollections = {
  __typename?: 'PromotionEventsLinkingCollections';
  buttonCollection?: Maybe<ButtonCollection>;
  carouselWithTextCollection?: Maybe<CarouselWithTextCollection>;
  contactInfoWrapperCollection?: Maybe<ContactInfoWrapperCollection>;
  contentPageHeroBannerCollection?: Maybe<ContentPageHeroBannerCollection>;
  ctaCollection?: Maybe<CtaCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footerNewsletterBlockCollection?: Maybe<FooterNewsletterBlockCollection>;
  heroBannerCollection?: Maybe<HeroBannerCollection>;
  heroBannerWithLinksCollection?: Maybe<HeroBannerWithLinksCollection>;
  heroLinkItemCollection?: Maybe<HeroLinkItemCollection>;
  imageWithTextCollection?: Maybe<ImageWithTextCollection>;
  journalPageCollection?: Maybe<JournalPageCollection>;
  linkWithIconCollection?: Maybe<LinkWithIconCollection>;
  linkWithImageCollection?: Maybe<LinkWithImageCollection>;
  navigationItemLableCollection?: Maybe<NavigationItemLableCollection>;
  panelButtonWithIconCollection?: Maybe<PanelButtonWithIconCollection>;
  productListingCollection?: Maybe<ProductListingCollection>;
  referenceSalesforceObjectCollection?: Maybe<ReferenceSalesforceObjectCollection>;
  stickyButtonCollection?: Maybe<StickyButtonCollection>;
  textWrapperRichPanelCollection?: Maybe<TextWrapperRichPanelCollection>;
};


export type PromotionEventsLinkingCollectionsButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PromotionEventsLinkingCollectionsButtonCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PromotionEventsLinkingCollectionsCarouselWithTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PromotionEventsLinkingCollectionsCarouselWithTextCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PromotionEventsLinkingCollectionsContactInfoWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PromotionEventsLinkingCollectionsContactInfoWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PromotionEventsLinkingCollectionsContentPageHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PromotionEventsLinkingCollectionsContentPageHeroBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PromotionEventsLinkingCollectionsCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PromotionEventsLinkingCollectionsCtaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PromotionEventsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PromotionEventsLinkingCollectionsFooterNewsletterBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PromotionEventsLinkingCollectionsFooterNewsletterBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PromotionEventsLinkingCollectionsHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PromotionEventsLinkingCollectionsHeroBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PromotionEventsLinkingCollectionsHeroBannerWithLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PromotionEventsLinkingCollectionsHeroBannerWithLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PromotionEventsLinkingCollectionsHeroLinkItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PromotionEventsLinkingCollectionsHeroLinkItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PromotionEventsLinkingCollectionsImageWithTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PromotionEventsLinkingCollectionsImageWithTextCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PromotionEventsLinkingCollectionsJournalPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PromotionEventsLinkingCollectionsJournalPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PromotionEventsLinkingCollectionsLinkWithIconCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PromotionEventsLinkingCollectionsLinkWithIconCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PromotionEventsLinkingCollectionsLinkWithImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PromotionEventsLinkingCollectionsLinkWithImageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PromotionEventsLinkingCollectionsNavigationItemLableCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PromotionEventsLinkingCollectionsNavigationItemLableCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PromotionEventsLinkingCollectionsPanelButtonWithIconCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PromotionEventsLinkingCollectionsPanelButtonWithIconCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PromotionEventsLinkingCollectionsProductListingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PromotionEventsLinkingCollectionsProductListingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PromotionEventsLinkingCollectionsReferenceSalesforceObjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PromotionEventsLinkingCollectionsReferenceSalesforceObjectCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PromotionEventsLinkingCollectionsStickyButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PromotionEventsLinkingCollectionsStickyButtonCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PromotionEventsLinkingCollectionsTextWrapperRichPanelCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PromotionEventsLinkingCollectionsTextWrapperRichPanelCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PromotionEventsLinkingCollectionsButtonCollectionOrder {
  ButtonStyleAsc = 'buttonStyle_ASC',
  ButtonStyleDesc = 'buttonStyle_DESC',
  DesktopButtonAlignmentAsc = 'desktopButtonAlignment_ASC',
  DesktopButtonAlignmentDesc = 'desktopButtonAlignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileButtonAlignmentAsc = 'mobileButtonAlignment_ASC',
  MobileButtonAlignmentDesc = 'mobileButtonAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletButtonAlignmentAsc = 'tabletButtonAlignment_ASC',
  TabletButtonAlignmentDesc = 'tabletButtonAlignment_DESC',
  VisibleOnDesktopAsc = 'visibleOnDesktop_ASC',
  VisibleOnDesktopDesc = 'visibleOnDesktop_DESC',
  VisibleOnMobileAsc = 'visibleOnMobile_ASC',
  VisibleOnMobileDesc = 'visibleOnMobile_DESC',
  VisibleOnTabletAsc = 'visibleOnTablet_ASC',
  VisibleOnTabletDesc = 'visibleOnTablet_DESC'
}

export enum PromotionEventsLinkingCollectionsCarouselWithTextCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  DesktopCarrouselAsc = 'desktopCarrousel_ASC',
  DesktopCarrouselDesc = 'desktopCarrousel_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileCarrouselAsc = 'mobileCarrousel_ASC',
  MobileCarrouselDesc = 'mobileCarrousel_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletCarrouselAsc = 'tabletCarrousel_ASC',
  TabletCarrouselDesc = 'tabletCarrousel_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PromotionEventsLinkingCollectionsContactInfoWrapperCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PromotionEventsLinkingCollectionsContentPageHeroBannerCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  DesktopTextAlignmentAsc = 'desktopTextAlignment_ASC',
  DesktopTextAlignmentDesc = 'desktopTextAlignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileTextAlignmentAsc = 'mobileTextAlignment_ASC',
  MobileTextAlignmentDesc = 'mobileTextAlignment_DESC',
  SublineShowOnDesktopAsc = 'sublineShowOnDesktop_ASC',
  SublineShowOnDesktopDesc = 'sublineShowOnDesktop_DESC',
  SublineShowOnMobileAsc = 'sublineShowOnMobile_ASC',
  SublineShowOnMobileDesc = 'sublineShowOnMobile_DESC',
  SublineShowOnTabletAsc = 'sublineShowOnTablet_ASC',
  SublineShowOnTabletDesc = 'sublineShowOnTablet_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletTextAlignmentAsc = 'tabletTextAlignment_ASC',
  TabletTextAlignmentDesc = 'tabletTextAlignment_DESC',
  ViewHeightSetMobileAsc = 'viewHeightSetMobile_ASC',
  ViewHeightSetMobileDesc = 'viewHeightSetMobile_DESC'
}

export enum PromotionEventsLinkingCollectionsCtaCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  StylingAsc = 'styling_ASC',
  StylingDesc = 'styling_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestAutomationAttributeAsc = 'testAutomationAttribute_ASC',
  TestAutomationAttributeDesc = 'testAutomationAttribute_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PromotionEventsLinkingCollectionsFooterNewsletterBlockCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PromotionEventsLinkingCollectionsHeroBannerCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  DesktopTextAlignmentAsc = 'desktopTextAlignment_ASC',
  DesktopTextAlignmentDesc = 'desktopTextAlignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileTextAlignmentAsc = 'mobileTextAlignment_ASC',
  MobileTextAlignmentDesc = 'mobileTextAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletTextAlignmentAsc = 'tabletTextAlignment_ASC',
  TabletTextAlignmentDesc = 'tabletTextAlignment_DESC'
}

export enum PromotionEventsLinkingCollectionsHeroBannerWithLinksCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PromotionEventsLinkingCollectionsHeroLinkItemCollectionOrder {
  AutomationIdAsc = 'automationId_ASC',
  AutomationIdDesc = 'automationId_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestAutomationAttributeAsc = 'testAutomationAttribute_ASC',
  TestAutomationAttributeDesc = 'testAutomationAttribute_DESC'
}

export enum PromotionEventsLinkingCollectionsImageWithTextCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  DesktopTextAlignmentAsc = 'desktopTextAlignment_ASC',
  DesktopTextAlignmentDesc = 'desktopTextAlignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MobileTextAlignmentAsc = 'mobileTextAlignment_ASC',
  MobileTextAlignmentDesc = 'mobileTextAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletTextAlignmentAsc = 'tabletTextAlignment_ASC',
  TabletTextAlignmentDesc = 'tabletTextAlignment_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PromotionEventsLinkingCollectionsJournalPageCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopicAsc = 'topic_ASC',
  TopicDesc = 'topic_DESC'
}

export enum PromotionEventsLinkingCollectionsLinkWithIconCollectionOrder {
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PromotionEventsLinkingCollectionsLinkWithImageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PromotionEventsLinkingCollectionsNavigationItemLableCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ShowIconSubMenuOnlyAsc = 'showIconSubMenuOnly_ASC',
  ShowIconSubMenuOnlyDesc = 'showIconSubMenuOnly_DESC',
  SubMenuArrowAsc = 'subMenuArrow_ASC',
  SubMenuArrowDesc = 'subMenuArrow_DESC',
  SubMenuTextAsc = 'subMenuText_ASC',
  SubMenuTextDesc = 'subMenuText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestAutomationAttributeAsc = 'testAutomationAttribute_ASC',
  TestAutomationAttributeDesc = 'testAutomationAttribute_DESC',
  TestAutomationClassAsc = 'testAutomationClass_ASC',
  TestAutomationClassDesc = 'testAutomationClass_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

export enum PromotionEventsLinkingCollectionsPanelButtonWithIconCollectionOrder {
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestAutomationAttributeAsc = 'testAutomationAttribute_ASC',
  TestAutomationAttributeDesc = 'testAutomationAttribute_DESC'
}

export enum PromotionEventsLinkingCollectionsProductListingCollectionOrder {
  CategoryIdAsc = 'categoryId_ASC',
  CategoryIdDesc = 'categoryId_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  QtyOfProductsAsc = 'qtyOfProducts_ASC',
  QtyOfProductsDesc = 'qtyOfProducts_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PromotionEventsLinkingCollectionsReferenceSalesforceObjectCollectionOrder {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PromotionEventsLinkingCollectionsStickyButtonCollectionOrder {
  ButtonStyleAsc = 'buttonStyle_ASC',
  ButtonStyleDesc = 'buttonStyle_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  StickyOnDesktopAsc = 'stickyOnDesktop_ASC',
  StickyOnDesktopDesc = 'stickyOnDesktop_DESC',
  StickyOnMobileAsc = 'stickyOnMobile_ASC',
  StickyOnMobileDesc = 'stickyOnMobile_DESC',
  StickyOnTabletAsc = 'stickyOnTablet_ASC',
  StickyOnTabletDesc = 'stickyOnTablet_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VisibleOnDesktopAsc = 'visibleOnDesktop_ASC',
  VisibleOnDesktopDesc = 'visibleOnDesktop_DESC',
  VisibleOnMobileAsc = 'visibleOnMobile_ASC',
  VisibleOnMobileDesc = 'visibleOnMobile_DESC',
  VisibleOnTabletAsc = 'visibleOnTablet_ASC',
  VisibleOnTabletDesc = 'visibleOnTablet_DESC'
}

export enum PromotionEventsLinkingCollectionsTextWrapperRichPanelCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PromotionEventsOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PromotionClickAsc = 'promotionClick_ASC',
  PromotionClickDesc = 'promotionClick_DESC',
  PromotionCreativeAsc = 'promotionCreative_ASC',
  PromotionCreativeDesc = 'promotionCreative_DESC',
  PromotionDimension24Asc = 'promotionDimension24_ASC',
  PromotionDimension24Desc = 'promotionDimension24_DESC',
  PromotionEventActionAsc = 'promotionEventAction_ASC',
  PromotionEventActionDesc = 'promotionEventAction_DESC',
  PromotionEventCategoryAsc = 'promotionEventCategory_ASC',
  PromotionEventCategoryDesc = 'promotionEventCategory_DESC',
  PromotionEventLabelAsc = 'promotionEventLabel_ASC',
  PromotionEventLabelDesc = 'promotionEventLabel_DESC',
  PromotionPositionAsc = 'promotionPosition_ASC',
  PromotionPositionDesc = 'promotionPosition_DESC',
  PromotionViewAsc = 'promotionView_ASC',
  PromotionViewDesc = 'promotionView_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  articleCarrousel?: Maybe<ArticleCarrousel>;
  articleCarrouselCollection?: Maybe<ArticleCarrouselCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  blackTieConfigurator?: Maybe<BlackTieConfigurator>;
  blackTieConfiguratorCollection?: Maybe<BlackTieConfiguratorCollection>;
  button?: Maybe<Button>;
  buttonCollection?: Maybe<ButtonCollection>;
  campaignCarrousel?: Maybe<CampaignCarrousel>;
  campaignCarrouselCollection?: Maybe<CampaignCarrouselCollection>;
  campaignCollectionBlock?: Maybe<CampaignCollectionBlock>;
  campaignCollectionBlockCollection?: Maybe<CampaignCollectionBlockCollection>;
  cardCarouselContainer?: Maybe<CardCarouselContainer>;
  cardCarouselContainerCollection?: Maybe<CardCarouselContainerCollection>;
  carouselImageAndTextCard?: Maybe<CarouselImageAndTextCard>;
  carouselImageAndTextCardCollection?: Maybe<CarouselImageAndTextCardCollection>;
  carouselWithText?: Maybe<CarouselWithText>;
  carouselWithTextCollection?: Maybe<CarouselWithTextCollection>;
  cmsPage?: Maybe<CmsPage>;
  cmsPageCollection?: Maybe<CmsPageCollection>;
  contactInfoWrapper?: Maybe<ContactInfoWrapper>;
  contactInfoWrapperCollection?: Maybe<ContactInfoWrapperCollection>;
  contactSectionWrapper?: Maybe<ContactSectionWrapper>;
  contactSectionWrapperCollection?: Maybe<ContactSectionWrapperCollection>;
  contentPageHeroBanner?: Maybe<ContentPageHeroBanner>;
  contentPageHeroBannerCollection?: Maybe<ContentPageHeroBannerCollection>;
  cta?: Maybe<Cta>;
  ctaCollection?: Maybe<CtaCollection>;
  dynamicMediaWrapper?: Maybe<DynamicMediaWrapper>;
  dynamicMediaWrapperCollection?: Maybe<DynamicMediaWrapperCollection>;
  entryCollection?: Maybe<EntryCollection>;
  faqAccordion?: Maybe<FaqAccordion>;
  faqAccordionCollection?: Maybe<FaqAccordionCollection>;
  faqItem?: Maybe<FaqItem>;
  faqItemCollection?: Maybe<FaqItemCollection>;
  footer?: Maybe<Footer>;
  footerBottomBlock?: Maybe<FooterBottomBlock>;
  footerBottomBlockCollection?: Maybe<FooterBottomBlockCollection>;
  footerCollection?: Maybe<FooterCollection>;
  footerContactAndLinksBlock?: Maybe<FooterContactAndLinksBlock>;
  footerContactAndLinksBlockCollection?: Maybe<FooterContactAndLinksBlockCollection>;
  footerNewsletterBlock?: Maybe<FooterNewsletterBlock>;
  footerNewsletterBlockCollection?: Maybe<FooterNewsletterBlockCollection>;
  footerStoreBlock?: Maybe<FooterStoreBlock>;
  footerStoreBlockCollection?: Maybe<FooterStoreBlockCollection>;
  footerUspBlock?: Maybe<FooterUspBlock>;
  footerUspBlockCollection?: Maybe<FooterUspBlockCollection>;
  /** Get the Cart / Basket by Customre ID */
  getCartByCustomer?: Maybe<Cart>;
  /** Get the Cart / Basket by Cart ID */
  getCartByID: Cart;
  /** Returns count of Cart items by Customer ID */
  getCountOfCartbyCustomer: Scalars['Int'];
  /** Returns count of Wishlist items */
  getCountOfWishlist: Scalars['Int'];
  /** Returns popular search phrases */
  getPopularSearchPhrases: Array<Scalars['String']>;
  /** get Product */
  getProduct: Product;
  /** Returns Product Size Data */
  getProductSizeData: ProductSizeData;
  /** Returns products by product ids */
  getProductsByIds?: Maybe<Array<Maybe<Product>>>;
  /** Get Wishlist */
  getWishlist?: Maybe<Array<Maybe<CustomerProductListItem>>>;
  heroBanner?: Maybe<HeroBanner>;
  heroBannerCollection?: Maybe<HeroBannerCollection>;
  heroBannerWithLinks?: Maybe<HeroBannerWithLinks>;
  heroBannerWithLinksCollection?: Maybe<HeroBannerWithLinksCollection>;
  heroLinkItem?: Maybe<HeroLinkItem>;
  heroLinkItemCollection?: Maybe<HeroLinkItemCollection>;
  homepage?: Maybe<Homepage>;
  homepageCollection?: Maybe<HomepageCollection>;
  imageCarrouselContainer?: Maybe<ImageCarrouselContainer>;
  imageCarrouselContainerCollection?: Maybe<ImageCarrouselContainerCollection>;
  imageWithText?: Maybe<ImageWithText>;
  imageWithTextCollection?: Maybe<ImageWithTextCollection>;
  journalCenterContentBlock?: Maybe<JournalCenterContentBlock>;
  journalCenterContentBlockCollection?: Maybe<JournalCenterContentBlockCollection>;
  journalPage?: Maybe<JournalPage>;
  journalPageCollection?: Maybe<JournalPageCollection>;
  linkWithIcon?: Maybe<LinkWithIcon>;
  linkWithIconCollection?: Maybe<LinkWithIconCollection>;
  linkWithImage?: Maybe<LinkWithImage>;
  linkWithImageCollection?: Maybe<LinkWithImageCollection>;
  linksSectionWrapper?: Maybe<LinksSectionWrapper>;
  linksSectionWrapperCollection?: Maybe<LinksSectionWrapperCollection>;
  mediaWrapperV2?: Maybe<MediaWrapperV2>;
  mediaWrapperV2Collection?: Maybe<MediaWrapperV2Collection>;
  navigationGroup?: Maybe<NavigationGroup>;
  navigationGroupCollection?: Maybe<NavigationGroupCollection>;
  navigationItem?: Maybe<NavigationItem>;
  navigationItemCollection?: Maybe<NavigationItemCollection>;
  navigationItemLable?: Maybe<NavigationItemLable>;
  navigationItemLableCollection?: Maybe<NavigationItemLableCollection>;
  navigationLink?: Maybe<NavigationLink>;
  navigationLinkCollection?: Maybe<NavigationLinkCollection>;
  panelButtonWithIcon?: Maybe<PanelButtonWithIcon>;
  panelButtonWithIconCollection?: Maybe<PanelButtonWithIconCollection>;
  panelContentWrapper?: Maybe<PanelContentWrapper>;
  panelContentWrapperCollection?: Maybe<PanelContentWrapperCollection>;
  phoneInfo?: Maybe<PhoneInfo>;
  phoneInfoCollection?: Maybe<PhoneInfoCollection>;
  phoneInfoValue?: Maybe<PhoneInfoValue>;
  phoneInfoValueCollection?: Maybe<PhoneInfoValueCollection>;
  pinpointOverlayIndicator?: Maybe<PinpointOverlayIndicator>;
  pinpointOverlayIndicatorCollection?: Maybe<PinpointOverlayIndicatorCollection>;
  priceInfo?: Maybe<PriceInfo>;
  priceInfoCollection?: Maybe<PriceInfoCollection>;
  priceInfoValue?: Maybe<PriceInfoValue>;
  priceInfoValueCollection?: Maybe<PriceInfoValueCollection>;
  productListing?: Maybe<ProductListing>;
  productListingCollection?: Maybe<ProductListingCollection>;
  productOptionConfigurator?: Maybe<ProductOptionConfigurator>;
  productOptionConfiguratorCollection?: Maybe<ProductOptionConfiguratorCollection>;
  productOptionStaticImageConfigurator?: Maybe<ProductOptionStaticImageConfigurator>;
  productOptionStaticImageConfiguratorCollection?: Maybe<ProductOptionStaticImageConfiguratorCollection>;
  /** Returns products by category id */
  productSearch?: Maybe<ProductSearch>;
  /** Returns products by catagory Id for the home page */
  productSearchForHomePage: Array<Product>;
  /** Returns products by catagory Id for the home page */
  productSearchWithImgTransform: Array<Product>;
  productStepConfigurator?: Maybe<ProductStepConfigurator>;
  productStepConfiguratorCollection?: Maybe<ProductStepConfiguratorCollection>;
  /** Get the Promotion(s) by Campaign */
  promotionByCampaignId?: Maybe<Promotion>;
  promotionEvents?: Maybe<PromotionEvents>;
  promotionEventsCollection?: Maybe<PromotionEventsCollection>;
  quoteSliderBanner?: Maybe<QuoteSliderBanner>;
  quoteSliderBannerCollection?: Maybe<QuoteSliderBannerCollection>;
  quoteSliderItem?: Maybe<QuoteSliderItem>;
  quoteSliderItemCollection?: Maybe<QuoteSliderItemCollection>;
  referenceSalesforceObject?: Maybe<ReferenceSalesforceObject>;
  referenceSalesforceObjectCollection?: Maybe<ReferenceSalesforceObjectCollection>;
  /** Returns search suggestions from search text */
  searchSuggestions?: Maybe<SearchSuggestions>;
  seoMetadata?: Maybe<SeoMetadata>;
  seoMetadataCollection?: Maybe<SeoMetadataCollection>;
  shopCollectionBlock?: Maybe<ShopCollectionBlock>;
  shopCollectionBlockCollection?: Maybe<ShopCollectionBlockCollection>;
  socialLinksWrapper?: Maybe<SocialLinksWrapper>;
  socialLinksWrapperCollection?: Maybe<SocialLinksWrapperCollection>;
  stickyButton?: Maybe<StickyButton>;
  stickyButtonCollection?: Maybe<StickyButtonCollection>;
  storyboardBanner?: Maybe<StoryboardBanner>;
  storyboardBannerCollection?: Maybe<StoryboardBannerCollection>;
  suSuNavigationMenu?: Maybe<SuSuNavigationMenu>;
  suSuNavigationMenuCollection?: Maybe<SuSuNavigationMenuCollection>;
  textAndButtonBanner?: Maybe<TextAndButtonBanner>;
  textAndButtonBannerCollection?: Maybe<TextAndButtonBannerCollection>;
  textAndImageColumnBanner?: Maybe<TextAndImageColumnBanner>;
  textAndImageColumnBannerCollection?: Maybe<TextAndImageColumnBannerCollection>;
  textAndImageRowBanner?: Maybe<TextAndImageRowBanner>;
  textAndImageRowBannerCollection?: Maybe<TextAndImageRowBannerCollection>;
  textWrapperRich?: Maybe<TextWrapperRich>;
  textWrapperRichCollection?: Maybe<TextWrapperRichCollection>;
  textWrapperRichPanel?: Maybe<TextWrapperRichPanel>;
  textWrapperRichPanelCollection?: Maybe<TextWrapperRichPanelCollection>;
  tuxedoColorOption?: Maybe<TuxedoColorOption>;
  tuxedoColorOptionCollection?: Maybe<TuxedoColorOptionCollection>;
  tuxedoColorStep?: Maybe<TuxedoColorStep>;
  tuxedoColorStepCollection?: Maybe<TuxedoColorStepCollection>;
  tuxedoProductOption?: Maybe<TuxedoProductOption>;
  tuxedoProductOptionCollection?: Maybe<TuxedoProductOptionCollection>;
  tuxedoStyleOption?: Maybe<TuxedoStyleOption>;
  tuxedoStyleOptionCollection?: Maybe<TuxedoStyleOptionCollection>;
  tuxedoStyleStep?: Maybe<TuxedoStyleStep>;
  tuxedoStyleStepCollection?: Maybe<TuxedoStyleStepCollection>;
  videoWrapper?: Maybe<VideoWrapper>;
  videoWrapperCollection?: Maybe<VideoWrapperCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryArticleCarrouselArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryArticleCarrouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ArticleCarrouselOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ArticleCarrouselFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryBlackTieConfiguratorArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBlackTieConfiguratorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BlackTieConfiguratorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlackTieConfiguratorFilter>;
};


export type QueryButtonArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ButtonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ButtonFilter>;
};


export type QueryCampaignCarrouselArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCampaignCarrouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CampaignCarrouselOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CampaignCarrouselFilter>;
};


export type QueryCampaignCollectionBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCampaignCollectionBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CampaignCollectionBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CampaignCollectionBlockFilter>;
};


export type QueryCardCarouselContainerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCardCarouselContainerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CardCarouselContainerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CardCarouselContainerFilter>;
};


export type QueryCarouselImageAndTextCardArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCarouselImageAndTextCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CarouselImageAndTextCardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CarouselImageAndTextCardFilter>;
};


export type QueryCarouselWithTextArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCarouselWithTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CarouselWithTextOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CarouselWithTextFilter>;
};


export type QueryCmsPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCmsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CmsPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CmsPageFilter>;
};


export type QueryContactInfoWrapperArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryContactInfoWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContactInfoWrapperOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContactInfoWrapperFilter>;
};


export type QueryContactSectionWrapperArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryContactSectionWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContactSectionWrapperOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContactSectionWrapperFilter>;
};


export type QueryContentPageHeroBannerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryContentPageHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentPageHeroBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentPageHeroBannerFilter>;
};


export type QueryCtaArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CtaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CtaFilter>;
};


export type QueryDynamicMediaWrapperArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryDynamicMediaWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<DynamicMediaWrapperOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DynamicMediaWrapperFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryFaqAccordionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFaqAccordionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FaqAccordionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqAccordionFilter>;
};


export type QueryFaqItemArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFaqItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FaqItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqItemFilter>;
};


export type QueryFooterArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFooterBottomBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFooterBottomBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterBottomBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterBottomBlockFilter>;
};


export type QueryFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterFilter>;
};


export type QueryFooterContactAndLinksBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFooterContactAndLinksBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterContactAndLinksBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterContactAndLinksBlockFilter>;
};


export type QueryFooterNewsletterBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFooterNewsletterBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterNewsletterBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterNewsletterBlockFilter>;
};


export type QueryFooterStoreBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFooterStoreBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterStoreBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterStoreBlockFilter>;
};


export type QueryFooterUspBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFooterUspBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterUspBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterUspBlockFilter>;
};


export type QueryGetCartByCustomerArgs = {
  customerId: Scalars['ID'];
  siteInfo: SiteInfo;
};


export type QueryGetCartByIdArgs = {
  id: Scalars['ID'];
  siteInfo: SiteInfo;
};


export type QueryGetCountOfCartbyCustomerArgs = {
  customerId: Scalars['String'];
  siteId: SiteId;
};


export type QueryGetCountOfWishlistArgs = {
  customerId: Scalars['String'];
  siteInfo: SiteInfo;
};


export type QueryGetPopularSearchPhrasesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  siteInfo: SiteInfo;
};


export type QueryGetProductArgs = {
  id: Scalars['String'];
  imgTransformationType?: InputMaybe<Scalars['String']>;
  siteInfo: SiteInfo;
};


export type QueryGetProductSizeDataArgs = {
  pid: Scalars['String'];
  siteInfo: SiteInfo;
};


export type QueryGetProductsByIdsArgs = {
  imgTransformationType?: InputMaybe<Scalars['String']>;
  pids: Array<InputMaybe<Scalars['String']>>;
  siteInfo: SiteInfo;
};


export type QueryGetWishlistArgs = {
  customerId: Scalars['ID'];
  siteInfo: SiteInfo;
};


export type QueryHeroBannerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeroBannerFilter>;
};


export type QueryHeroBannerWithLinksArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHeroBannerWithLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroBannerWithLinksOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeroBannerWithLinksFilter>;
};


export type QueryHeroLinkItemArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHeroLinkItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroLinkItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeroLinkItemFilter>;
};


export type QueryHomepageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HomepageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HomepageFilter>;
};


export type QueryImageCarrouselContainerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryImageCarrouselContainerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageCarrouselContainerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageCarrouselContainerFilter>;
};


export type QueryImageWithTextArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryImageWithTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageWithTextOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageWithTextFilter>;
};


export type QueryJournalCenterContentBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryJournalCenterContentBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<JournalCenterContentBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JournalCenterContentBlockFilter>;
};


export type QueryJournalPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryJournalPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<JournalPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JournalPageFilter>;
};


export type QueryLinkWithIconArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLinkWithIconCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LinkWithIconOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinkWithIconFilter>;
};


export type QueryLinkWithImageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLinkWithImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LinkWithImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinkWithImageFilter>;
};


export type QueryLinksSectionWrapperArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLinksSectionWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LinksSectionWrapperOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinksSectionWrapperFilter>;
};


export type QueryMediaWrapperV2Args = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMediaWrapperV2CollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MediaWrapperV2Order>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MediaWrapperV2Filter>;
};


export type QueryNavigationGroupArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNavigationGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationGroupOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationGroupFilter>;
};


export type QueryNavigationItemArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationItemFilter>;
};


export type QueryNavigationItemLableArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNavigationItemLableCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemLableOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationItemLableFilter>;
};


export type QueryNavigationLinkArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNavigationLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


export type QueryPanelButtonWithIconArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPanelButtonWithIconCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PanelButtonWithIconOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PanelButtonWithIconFilter>;
};


export type QueryPanelContentWrapperArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPanelContentWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PanelContentWrapperOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PanelContentWrapperFilter>;
};


export type QueryPhoneInfoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPhoneInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PhoneInfoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PhoneInfoFilter>;
};


export type QueryPhoneInfoValueArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPhoneInfoValueCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PhoneInfoValueOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PhoneInfoValueFilter>;
};


export type QueryPinpointOverlayIndicatorArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPinpointOverlayIndicatorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PinpointOverlayIndicatorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PinpointOverlayIndicatorFilter>;
};


export type QueryPriceInfoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPriceInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PriceInfoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PriceInfoFilter>;
};


export type QueryPriceInfoValueArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPriceInfoValueCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PriceInfoValueOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PriceInfoValueFilter>;
};


export type QueryProductListingArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryProductListingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ProductListingOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductListingFilter>;
};


export type QueryProductOptionConfiguratorArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryProductOptionConfiguratorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ProductOptionConfiguratorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductOptionConfiguratorFilter>;
};


export type QueryProductOptionStaticImageConfiguratorArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryProductOptionStaticImageConfiguratorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ProductOptionStaticImageConfiguratorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductOptionStaticImageConfiguratorFilter>;
};


export type QueryProductSearchArgs = {
  categoryId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  siteInfo: SiteInfo;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryProductSearchForHomePageArgs = {
  categoryId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  siteInfo: SiteInfo;
};


export type QueryProductSearchWithImgTransformArgs = {
  categoryId: Scalars['String'];
  desktopImgTransformationType: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  mobileImgTransformationType: Scalars['String'];
  siteInfo: SiteInfo;
};


export type QueryProductStepConfiguratorArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryProductStepConfiguratorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ProductStepConfiguratorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductStepConfiguratorFilter>;
};


export type QueryPromotionByCampaignIdArgs = {
  campaignId: Scalars['String'];
  siteInfo: SiteInfo;
};


export type QueryPromotionEventsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPromotionEventsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PromotionEventsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PromotionEventsFilter>;
};


export type QueryQuoteSliderBannerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryQuoteSliderBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<QuoteSliderBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuoteSliderBannerFilter>;
};


export type QueryQuoteSliderItemArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryQuoteSliderItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<QuoteSliderItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuoteSliderItemFilter>;
};


export type QueryReferenceSalesforceObjectArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryReferenceSalesforceObjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ReferenceSalesforceObjectOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReferenceSalesforceObjectFilter>;
};


export type QuerySearchSuggestionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  searchText: Scalars['String'];
  siteInfo: SiteInfo;
};


export type QuerySeoMetadataArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySeoMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SeoMetadataOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SeoMetadataFilter>;
};


export type QueryShopCollectionBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryShopCollectionBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ShopCollectionBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopCollectionBlockFilter>;
};


export type QuerySocialLinksWrapperArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySocialLinksWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SocialLinksWrapperOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SocialLinksWrapperFilter>;
};


export type QueryStickyButtonArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryStickyButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<StickyButtonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StickyButtonFilter>;
};


export type QueryStoryboardBannerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryStoryboardBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<StoryboardBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StoryboardBannerFilter>;
};


export type QuerySuSuNavigationMenuArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySuSuNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SuSuNavigationMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuSuNavigationMenuFilter>;
};


export type QueryTextAndButtonBannerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTextAndButtonBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextAndButtonBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TextAndButtonBannerFilter>;
};


export type QueryTextAndImageColumnBannerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTextAndImageColumnBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextAndImageColumnBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TextAndImageColumnBannerFilter>;
};


export type QueryTextAndImageRowBannerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTextAndImageRowBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextAndImageRowBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TextAndImageRowBannerFilter>;
};


export type QueryTextWrapperRichArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTextWrapperRichCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextWrapperRichOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TextWrapperRichFilter>;
};


export type QueryTextWrapperRichPanelArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTextWrapperRichPanelCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextWrapperRichPanelOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TextWrapperRichPanelFilter>;
};


export type QueryTuxedoColorOptionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTuxedoColorOptionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TuxedoColorOptionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TuxedoColorOptionFilter>;
};


export type QueryTuxedoColorStepArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTuxedoColorStepCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TuxedoColorStepOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TuxedoColorStepFilter>;
};


export type QueryTuxedoProductOptionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTuxedoProductOptionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TuxedoProductOptionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TuxedoProductOptionFilter>;
};


export type QueryTuxedoStyleOptionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTuxedoStyleOptionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TuxedoStyleOptionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TuxedoStyleOptionFilter>;
};


export type QueryTuxedoStyleStepArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTuxedoStyleStepCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TuxedoStyleStepOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TuxedoStyleStepFilter>;
};


export type QueryVideoWrapperArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryVideoWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<VideoWrapperOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VideoWrapperFilter>;
};

/** Banner with Quotes in a slider. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/quoteSliderBanner) */
export type QuoteSliderBanner = Entry & {
  __typename?: 'QuoteSliderBanner';
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<QuoteSliderBannerLinkingCollections>;
  quoteItemCollection?: Maybe<QuoteSliderBannerQuoteItemCollection>;
  sys: Sys;
};


/** Banner with Quotes in a slider. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/quoteSliderBanner) */
export type QuoteSliderBannerInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with Quotes in a slider. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/quoteSliderBanner) */
export type QuoteSliderBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Banner with Quotes in a slider. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/quoteSliderBanner) */
export type QuoteSliderBannerQuoteItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<QuoteSliderBannerQuoteItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuoteSliderItemFilter>;
};

export type QuoteSliderBannerCollection = {
  __typename?: 'QuoteSliderBannerCollection';
  items: Array<Maybe<QuoteSliderBanner>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type QuoteSliderBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<QuoteSliderBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<QuoteSliderBannerFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  quoteItem?: InputMaybe<CfQuoteSliderItemNestedFilter>;
  quoteItemCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type QuoteSliderBannerLinkingCollections = {
  __typename?: 'QuoteSliderBannerLinkingCollections';
  cmsPageCollection?: Maybe<CmsPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type QuoteSliderBannerLinkingCollectionsCmsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<QuoteSliderBannerLinkingCollectionsCmsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QuoteSliderBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum QuoteSliderBannerLinkingCollectionsCmsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeOfBannerAsc = 'typeOfBanner_ASC',
  TypeOfBannerDesc = 'typeOfBanner_DESC'
}

export enum QuoteSliderBannerOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type QuoteSliderBannerQuoteItemCollection = {
  __typename?: 'QuoteSliderBannerQuoteItemCollection';
  items: Array<Maybe<QuoteSliderItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum QuoteSliderBannerQuoteItemCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Quote Items for the banner [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/quoteSliderItem) */
export type QuoteSliderItem = Entry & {
  __typename?: 'QuoteSliderItem';
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<QuoteSliderItemLinkingCollections>;
  quote?: Maybe<QuoteSliderItemQuote>;
  quoteTitleImage?: Maybe<Scalars['JSON']>;
  sys: Sys;
};


/** Quote Items for the banner [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/quoteSliderItem) */
export type QuoteSliderItemInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Quote Items for the banner [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/quoteSliderItem) */
export type QuoteSliderItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Quote Items for the banner [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/quoteSliderItem) */
export type QuoteSliderItemQuoteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Quote Items for the banner [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/quoteSliderItem) */
export type QuoteSliderItemQuoteTitleImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type QuoteSliderItemCollection = {
  __typename?: 'QuoteSliderItemCollection';
  items: Array<Maybe<QuoteSliderItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type QuoteSliderItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<QuoteSliderItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<QuoteSliderItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  quoteTitleImage_exists?: InputMaybe<Scalars['Boolean']>;
  quote_contains?: InputMaybe<Scalars['String']>;
  quote_exists?: InputMaybe<Scalars['Boolean']>;
  quote_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
};

export type QuoteSliderItemLinkingCollections = {
  __typename?: 'QuoteSliderItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  quoteSliderBannerCollection?: Maybe<QuoteSliderBannerCollection>;
};


export type QuoteSliderItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QuoteSliderItemLinkingCollectionsQuoteSliderBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<QuoteSliderItemLinkingCollectionsQuoteSliderBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum QuoteSliderItemLinkingCollectionsQuoteSliderBannerCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum QuoteSliderItemOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type QuoteSliderItemQuote = {
  __typename?: 'QuoteSliderItemQuote';
  json: Scalars['JSON'];
  links: QuoteSliderItemQuoteLinks;
};

export type QuoteSliderItemQuoteAssets = {
  __typename?: 'QuoteSliderItemQuoteAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type QuoteSliderItemQuoteEntries = {
  __typename?: 'QuoteSliderItemQuoteEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type QuoteSliderItemQuoteLinks = {
  __typename?: 'QuoteSliderItemQuoteLinks';
  assets: QuoteSliderItemQuoteAssets;
  entries: QuoteSliderItemQuoteEntries;
  resources: QuoteSliderItemQuoteResources;
};

export type QuoteSliderItemQuoteResources = {
  __typename?: 'QuoteSliderItemQuoteResources';
  block: Array<QuoteSliderItemQuoteResourcesBlock>;
  hyperlink: Array<QuoteSliderItemQuoteResourcesHyperlink>;
  inline: Array<QuoteSliderItemQuoteResourcesInline>;
};

export type QuoteSliderItemQuoteResourcesBlock = ResourceLink & {
  __typename?: 'QuoteSliderItemQuoteResourcesBlock';
  sys: ResourceSys;
};

export type QuoteSliderItemQuoteResourcesHyperlink = ResourceLink & {
  __typename?: 'QuoteSliderItemQuoteResourcesHyperlink';
  sys: ResourceSys;
};

export type QuoteSliderItemQuoteResourcesInline = ResourceLink & {
  __typename?: 'QuoteSliderItemQuoteResourcesInline';
  sys: ResourceSys;
};

/** Refer to product, category or journal ID. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/referenceSalesforceObject) */
export type ReferenceSalesforceObject = Entry & {
  __typename?: 'ReferenceSalesforceObject';
  contentfulMetadata: ContentfulMetadata;
  id?: Maybe<Scalars['String']>;
  internalTitle?: Maybe<Scalars['String']>;
  link?: Maybe<NavigationLink>;
  linkedFrom?: Maybe<ReferenceSalesforceObjectLinkingCollections>;
  promotionEvents?: Maybe<PromotionEvents>;
  sys: Sys;
};


/** Refer to product, category or journal ID. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/referenceSalesforceObject) */
export type ReferenceSalesforceObjectIdArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Refer to product, category or journal ID. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/referenceSalesforceObject) */
export type ReferenceSalesforceObjectInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Refer to product, category or journal ID. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/referenceSalesforceObject) */
export type ReferenceSalesforceObjectLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** Refer to product, category or journal ID. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/referenceSalesforceObject) */
export type ReferenceSalesforceObjectLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Refer to product, category or journal ID. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/referenceSalesforceObject) */
export type ReferenceSalesforceObjectPromotionEventsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PromotionEventsFilter>;
};

export type ReferenceSalesforceObjectCollection = {
  __typename?: 'ReferenceSalesforceObjectCollection';
  items: Array<Maybe<ReferenceSalesforceObject>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ReferenceSalesforceObjectFilter = {
  AND?: InputMaybe<Array<InputMaybe<ReferenceSalesforceObjectFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ReferenceSalesforceObjectFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfNavigationLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEvents?: InputMaybe<CfPromotionEventsNestedFilter>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type ReferenceSalesforceObjectLinkingCollections = {
  __typename?: 'ReferenceSalesforceObjectLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ReferenceSalesforceObjectLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ReferenceSalesforceObjectOrder {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String'];
  urn: Scalars['String'];
};

export type RowsData = {
  __typename?: 'RowsData';
  long?: Maybe<Array<Maybe<Size>>>;
  regular?: Maybe<Array<Maybe<Size>>>;
  short?: Maybe<Array<Maybe<Size>>>;
  size?: Maybe<Array<Maybe<Size>>>;
};

export type SearchSuggestionItem = {
  __typename?: 'SearchSuggestionItem';
  id: Scalars['String'];
  name: Scalars['String'];
  parentCategoryName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** Search Types */
export type SearchSuggestions = {
  __typename?: 'SearchSuggestions';
  categorySuggestions: Array<SearchSuggestionItem>;
  productSuggestions: Array<SearchSuggestionItem>;
  suggestedPhrases: Array<Scalars['String']>;
};

/** SEO information for all static pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/seoMetadata) */
export type SeoMetadata = Entry & {
  __typename?: 'SeoMetadata';
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<SeoMetadataLinkingCollections>;
  pageDescription?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** SEO information for all static pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/seoMetadata) */
export type SeoMetadataInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** SEO information for all static pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/seoMetadata) */
export type SeoMetadataKeywordsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** SEO information for all static pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/seoMetadata) */
export type SeoMetadataLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** SEO information for all static pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/seoMetadata) */
export type SeoMetadataPageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** SEO information for all static pages [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/seoMetadata) */
export type SeoMetadataPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SeoMetadataCollection = {
  __typename?: 'SeoMetadataCollection';
  items: Array<Maybe<SeoMetadata>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SeoMetadataFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoMetadataFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoMetadataFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywords?: InputMaybe<Scalars['String']>;
  keywords_contains?: InputMaybe<Scalars['String']>;
  keywords_exists?: InputMaybe<Scalars['Boolean']>;
  keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywords_not?: InputMaybe<Scalars['String']>;
  keywords_not_contains?: InputMaybe<Scalars['String']>;
  keywords_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageDescription_contains?: InputMaybe<Scalars['String']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type SeoMetadataLinkingCollections = {
  __typename?: 'SeoMetadataLinkingCollections';
  blackTieConfiguratorCollection?: Maybe<BlackTieConfiguratorCollection>;
  cmsPageCollection?: Maybe<CmsPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
  journalPageCollection?: Maybe<JournalPageCollection>;
};


export type SeoMetadataLinkingCollectionsBlackTieConfiguratorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SeoMetadataLinkingCollectionsBlackTieConfiguratorCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SeoMetadataLinkingCollectionsCmsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SeoMetadataLinkingCollectionsCmsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SeoMetadataLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SeoMetadataLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SeoMetadataLinkingCollectionsHomepageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SeoMetadataLinkingCollectionsJournalPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SeoMetadataLinkingCollectionsJournalPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SeoMetadataLinkingCollectionsBlackTieConfiguratorCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ModelImageAsc = 'modelImage_ASC',
  ModelImageDesc = 'modelImage_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SeoMetadataLinkingCollectionsCmsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeOfBannerAsc = 'typeOfBanner_ASC',
  TypeOfBannerDesc = 'typeOfBanner_DESC'
}

export enum SeoMetadataLinkingCollectionsHomepageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SeoMetadataLinkingCollectionsJournalPageCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopicAsc = 'topic_ASC',
  TopicDesc = 'topic_DESC'
}

export enum SeoMetadataOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Shipment = {
  __typename?: 'Shipment';
  /** Returns true if the item is a gift. */
  gift: Scalars['Boolean'];
  /** Is CustomMade Shipment. */
  isCustomMadeShipment: Scalars['Boolean'];
  /** The identifier of the shipment to which this item belongs. */
  shipmentId: Scalars['ID'];
  /** The total price, including products, shipping and tax. */
  shipmentTotal: Scalars['Float'];
  /** The total price of all shipping charges, including shipping adjustments. If the taxation policy is net, it doesn't include tax. If the taxation policy is gross, it includes tax. */
  shippingTotal: Scalars['Float'];
  /** The total tax on all shipping charges, not including shipping adjustments. */
  shippingTotalTax: Scalars['Float'];
  /** The total tax amount. */
  taxTotal: Scalars['Float'];
};

/** Block with a title, showing collection items pulled from a category and a Button to direct to whole collection. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/shopCollectionBlock) */
export type ShopCollectionBlock = Entry & {
  __typename?: 'ShopCollectionBlock';
  contentSectionsCollection?: Maybe<ShopCollectionBlockContentSectionsCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ShopCollectionBlockLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Block with a title, showing collection items pulled from a category and a Button to direct to whole collection. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/shopCollectionBlock) */
export type ShopCollectionBlockContentSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopCollectionBlockContentSectionsFilter>;
};


/** Block with a title, showing collection items pulled from a category and a Button to direct to whole collection. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/shopCollectionBlock) */
export type ShopCollectionBlockInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Block with a title, showing collection items pulled from a category and a Button to direct to whole collection. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/shopCollectionBlock) */
export type ShopCollectionBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Block with a title, showing collection items pulled from a category and a Button to direct to whole collection. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/shopCollectionBlock) */
export type ShopCollectionBlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ShopCollectionBlockCollection = {
  __typename?: 'ShopCollectionBlockCollection';
  items: Array<Maybe<ShopCollectionBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ShopCollectionBlockContentSectionsCollection = {
  __typename?: 'ShopCollectionBlockContentSectionsCollection';
  items: Array<Maybe<ShopCollectionBlockContentSectionsItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ShopCollectionBlockContentSectionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ShopCollectionBlockContentSectionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ShopCollectionBlockContentSectionsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type ShopCollectionBlockContentSectionsItem = Button | ProductListing;

export type ShopCollectionBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<ShopCollectionBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ShopCollectionBlockFilter>>>;
  contentSections?: InputMaybe<CfcontentSectionsMultiTypeNestedFilter>;
  contentSectionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ShopCollectionBlockLinkingCollections = {
  __typename?: 'ShopCollectionBlockLinkingCollections';
  cmsPageCollection?: Maybe<CmsPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ShopCollectionBlockLinkingCollectionsCmsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ShopCollectionBlockLinkingCollectionsCmsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ShopCollectionBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ShopCollectionBlockLinkingCollectionsCmsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeOfBannerAsc = 'typeOfBanner_ASC',
  TypeOfBannerDesc = 'typeOfBanner_DESC'
}

export enum ShopCollectionBlockOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SiteId {
  Apac = 'APAC',
  Int = 'INT',
  Usa = 'USA'
}

export type SiteInfo = {
  currency: Scalars['String'];
  locale: Scalars['String'];
  siteId: SiteId;
};

export type Size = {
  __typename?: 'Size';
  availabilityStatus: AvailabilityStatus;
  displayValue: Scalars['String'];
  id: Scalars['String'];
  sizeColumnKey?: Maybe<Scalars['String']>;
  variantID: Scalars['String'];
};

export type SizeRow = {
  __typename?: 'SizeRow';
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};

/** Linked social icons [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/socialLinksWrapper) */
export type SocialLinksWrapper = Entry & {
  __typename?: 'SocialLinksWrapper';
  contentSectionsCollection?: Maybe<SocialLinksWrapperContentSectionsCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<SocialLinksWrapperLinkingCollections>;
  sys: Sys;
};


/** Linked social icons [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/socialLinksWrapper) */
export type SocialLinksWrapperContentSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SocialLinksWrapperContentSectionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinkWithIconFilter>;
};


/** Linked social icons [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/socialLinksWrapper) */
export type SocialLinksWrapperInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Linked social icons [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/socialLinksWrapper) */
export type SocialLinksWrapperLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SocialLinksWrapperCollection = {
  __typename?: 'SocialLinksWrapperCollection';
  items: Array<Maybe<SocialLinksWrapper>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SocialLinksWrapperContentSectionsCollection = {
  __typename?: 'SocialLinksWrapperContentSectionsCollection';
  items: Array<Maybe<LinkWithIcon>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum SocialLinksWrapperContentSectionsCollectionOrder {
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type SocialLinksWrapperFilter = {
  AND?: InputMaybe<Array<InputMaybe<SocialLinksWrapperFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SocialLinksWrapperFilter>>>;
  contentSections?: InputMaybe<CfLinkWithIconNestedFilter>;
  contentSectionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type SocialLinksWrapperLinkingCollections = {
  __typename?: 'SocialLinksWrapperLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerBottomBlockCollection?: Maybe<FooterBottomBlockCollection>;
};


export type SocialLinksWrapperLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SocialLinksWrapperLinkingCollectionsFooterBottomBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SocialLinksWrapperLinkingCollectionsFooterBottomBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SocialLinksWrapperLinkingCollectionsFooterBottomBlockCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SocialLinksWrapperOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type SortedSizeColumn = {
  __typename?: 'SortedSizeColumn';
  key: Scalars['String'];
  value: Scalars['String'];
};

/** Button Content Type with Sticky behavior.  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/stickyButton) */
export type StickyButton = Entry & {
  __typename?: 'StickyButton';
  buttonRichText?: Maybe<StickyButtonButtonRichText>;
  buttonStyle?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  link?: Maybe<NavigationLink>;
  linkedFrom?: Maybe<StickyButtonLinkingCollections>;
  promotionEvents?: Maybe<PromotionEvents>;
  stickyOnDesktop?: Maybe<Scalars['String']>;
  stickyOnMobile?: Maybe<Scalars['String']>;
  stickyOnTablet?: Maybe<Scalars['String']>;
  sys: Sys;
  visibleOnDesktop?: Maybe<Scalars['String']>;
  visibleOnMobile?: Maybe<Scalars['String']>;
  visibleOnTablet?: Maybe<Scalars['String']>;
};


/** Button Content Type with Sticky behavior.  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/stickyButton) */
export type StickyButtonButtonRichTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Button Content Type with Sticky behavior.  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/stickyButton) */
export type StickyButtonButtonStyleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Button Content Type with Sticky behavior.  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/stickyButton) */
export type StickyButtonInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Button Content Type with Sticky behavior.  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/stickyButton) */
export type StickyButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** Button Content Type with Sticky behavior.  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/stickyButton) */
export type StickyButtonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Button Content Type with Sticky behavior.  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/stickyButton) */
export type StickyButtonPromotionEventsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PromotionEventsFilter>;
};


/** Button Content Type with Sticky behavior.  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/stickyButton) */
export type StickyButtonStickyOnDesktopArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Button Content Type with Sticky behavior.  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/stickyButton) */
export type StickyButtonStickyOnMobileArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Button Content Type with Sticky behavior.  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/stickyButton) */
export type StickyButtonStickyOnTabletArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Button Content Type with Sticky behavior.  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/stickyButton) */
export type StickyButtonVisibleOnDesktopArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Button Content Type with Sticky behavior.  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/stickyButton) */
export type StickyButtonVisibleOnMobileArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Button Content Type with Sticky behavior.  [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/stickyButton) */
export type StickyButtonVisibleOnTabletArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type StickyButtonButtonRichText = {
  __typename?: 'StickyButtonButtonRichText';
  json: Scalars['JSON'];
  links: StickyButtonButtonRichTextLinks;
};

export type StickyButtonButtonRichTextAssets = {
  __typename?: 'StickyButtonButtonRichTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type StickyButtonButtonRichTextEntries = {
  __typename?: 'StickyButtonButtonRichTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type StickyButtonButtonRichTextLinks = {
  __typename?: 'StickyButtonButtonRichTextLinks';
  assets: StickyButtonButtonRichTextAssets;
  entries: StickyButtonButtonRichTextEntries;
  resources: StickyButtonButtonRichTextResources;
};

export type StickyButtonButtonRichTextResources = {
  __typename?: 'StickyButtonButtonRichTextResources';
  block: Array<StickyButtonButtonRichTextResourcesBlock>;
  hyperlink: Array<StickyButtonButtonRichTextResourcesHyperlink>;
  inline: Array<StickyButtonButtonRichTextResourcesInline>;
};

export type StickyButtonButtonRichTextResourcesBlock = ResourceLink & {
  __typename?: 'StickyButtonButtonRichTextResourcesBlock';
  sys: ResourceSys;
};

export type StickyButtonButtonRichTextResourcesHyperlink = ResourceLink & {
  __typename?: 'StickyButtonButtonRichTextResourcesHyperlink';
  sys: ResourceSys;
};

export type StickyButtonButtonRichTextResourcesInline = ResourceLink & {
  __typename?: 'StickyButtonButtonRichTextResourcesInline';
  sys: ResourceSys;
};

export type StickyButtonCollection = {
  __typename?: 'StickyButtonCollection';
  items: Array<Maybe<StickyButton>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type StickyButtonFilter = {
  AND?: InputMaybe<Array<InputMaybe<StickyButtonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StickyButtonFilter>>>;
  buttonRichText_contains?: InputMaybe<Scalars['String']>;
  buttonRichText_exists?: InputMaybe<Scalars['Boolean']>;
  buttonRichText_not_contains?: InputMaybe<Scalars['String']>;
  buttonStyle?: InputMaybe<Scalars['String']>;
  buttonStyle_contains?: InputMaybe<Scalars['String']>;
  buttonStyle_exists?: InputMaybe<Scalars['Boolean']>;
  buttonStyle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonStyle_not?: InputMaybe<Scalars['String']>;
  buttonStyle_not_contains?: InputMaybe<Scalars['String']>;
  buttonStyle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfNavigationLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEvents?: InputMaybe<CfPromotionEventsNestedFilter>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  stickyOnDesktop?: InputMaybe<Scalars['String']>;
  stickyOnDesktop_contains?: InputMaybe<Scalars['String']>;
  stickyOnDesktop_exists?: InputMaybe<Scalars['Boolean']>;
  stickyOnDesktop_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stickyOnDesktop_not?: InputMaybe<Scalars['String']>;
  stickyOnDesktop_not_contains?: InputMaybe<Scalars['String']>;
  stickyOnDesktop_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stickyOnMobile?: InputMaybe<Scalars['String']>;
  stickyOnMobile_contains?: InputMaybe<Scalars['String']>;
  stickyOnMobile_exists?: InputMaybe<Scalars['Boolean']>;
  stickyOnMobile_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stickyOnMobile_not?: InputMaybe<Scalars['String']>;
  stickyOnMobile_not_contains?: InputMaybe<Scalars['String']>;
  stickyOnMobile_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stickyOnTablet?: InputMaybe<Scalars['String']>;
  stickyOnTablet_contains?: InputMaybe<Scalars['String']>;
  stickyOnTablet_exists?: InputMaybe<Scalars['Boolean']>;
  stickyOnTablet_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stickyOnTablet_not?: InputMaybe<Scalars['String']>;
  stickyOnTablet_not_contains?: InputMaybe<Scalars['String']>;
  stickyOnTablet_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  visibleOnDesktop?: InputMaybe<Scalars['String']>;
  visibleOnDesktop_contains?: InputMaybe<Scalars['String']>;
  visibleOnDesktop_exists?: InputMaybe<Scalars['Boolean']>;
  visibleOnDesktop_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visibleOnDesktop_not?: InputMaybe<Scalars['String']>;
  visibleOnDesktop_not_contains?: InputMaybe<Scalars['String']>;
  visibleOnDesktop_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visibleOnMobile?: InputMaybe<Scalars['String']>;
  visibleOnMobile_contains?: InputMaybe<Scalars['String']>;
  visibleOnMobile_exists?: InputMaybe<Scalars['Boolean']>;
  visibleOnMobile_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visibleOnMobile_not?: InputMaybe<Scalars['String']>;
  visibleOnMobile_not_contains?: InputMaybe<Scalars['String']>;
  visibleOnMobile_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visibleOnTablet?: InputMaybe<Scalars['String']>;
  visibleOnTablet_contains?: InputMaybe<Scalars['String']>;
  visibleOnTablet_exists?: InputMaybe<Scalars['Boolean']>;
  visibleOnTablet_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visibleOnTablet_not?: InputMaybe<Scalars['String']>;
  visibleOnTablet_not_contains?: InputMaybe<Scalars['String']>;
  visibleOnTablet_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StickyButtonLinkingCollections = {
  __typename?: 'StickyButtonLinkingCollections';
  cmsPageCollection?: Maybe<CmsPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  journalCenterContentBlockCollection?: Maybe<JournalCenterContentBlockCollection>;
  textAndButtonBannerCollection?: Maybe<TextAndButtonBannerCollection>;
};


export type StickyButtonLinkingCollectionsCmsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<StickyButtonLinkingCollectionsCmsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type StickyButtonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type StickyButtonLinkingCollectionsJournalCenterContentBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<StickyButtonLinkingCollectionsJournalCenterContentBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type StickyButtonLinkingCollectionsTextAndButtonBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<StickyButtonLinkingCollectionsTextAndButtonBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum StickyButtonLinkingCollectionsCmsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeOfBannerAsc = 'typeOfBanner_ASC',
  TypeOfBannerDesc = 'typeOfBanner_DESC'
}

export enum StickyButtonLinkingCollectionsJournalCenterContentBlockCollectionOrder {
  AutomationIdAsc = 'automationId_ASC',
  AutomationIdDesc = 'automationId_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SubTitleAsc = 'subTitle_ASC',
  SubTitleDesc = 'subTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum StickyButtonLinkingCollectionsTextAndButtonBannerCollectionOrder {
  AutomationIdAsc = 'automationId_ASC',
  AutomationIdDesc = 'automationId_DESC',
  ComponentSizeAsc = 'componentSize_ASC',
  ComponentSizeDesc = 'componentSize_DESC',
  DesktopCopyAlignmentAsc = 'desktopCopyAlignment_ASC',
  DesktopCopyAlignmentDesc = 'desktopCopyAlignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MaxWidthDesktopAsc = 'maxWidthDesktop_ASC',
  MaxWidthDesktopDesc = 'maxWidthDesktop_DESC',
  MaxWidthMobileAsc = 'maxWidthMobile_ASC',
  MaxWidthMobileDesc = 'maxWidthMobile_DESC',
  MaxWidthTabletAsc = 'maxWidthTablet_ASC',
  MaxWidthTabletDesc = 'maxWidthTablet_DESC',
  MobileCopyAlignmentAsc = 'mobileCopyAlignment_ASC',
  MobileCopyAlignmentDesc = 'mobileCopyAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletCopyAlignmentAsc = 'tabletCopyAlignment_ASC',
  TabletCopyAlignmentDesc = 'tabletCopyAlignment_DESC'
}

export enum StickyButtonOrder {
  ButtonStyleAsc = 'buttonStyle_ASC',
  ButtonStyleDesc = 'buttonStyle_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  StickyOnDesktopAsc = 'stickyOnDesktop_ASC',
  StickyOnDesktopDesc = 'stickyOnDesktop_DESC',
  StickyOnMobileAsc = 'stickyOnMobile_ASC',
  StickyOnMobileDesc = 'stickyOnMobile_DESC',
  StickyOnTabletAsc = 'stickyOnTablet_ASC',
  StickyOnTabletDesc = 'stickyOnTablet_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VisibleOnDesktopAsc = 'visibleOnDesktop_ASC',
  VisibleOnDesktopDesc = 'visibleOnDesktop_DESC',
  VisibleOnMobileAsc = 'visibleOnMobile_ASC',
  VisibleOnMobileDesc = 'visibleOnMobile_DESC',
  VisibleOnTabletAsc = 'visibleOnTablet_ASC',
  VisibleOnTabletDesc = 'visibleOnTablet_DESC'
}

/** Banner with different slogans [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/storyboardBanner) */
export type StoryboardBanner = Entry & {
  __typename?: 'StoryboardBanner';
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<StoryboardBannerLinkingCollections>;
  storyboardItemsCollection?: Maybe<StoryboardBannerStoryboardItemsCollection>;
  sys: Sys;
};


/** Banner with different slogans [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/storyboardBanner) */
export type StoryboardBannerInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with different slogans [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/storyboardBanner) */
export type StoryboardBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Banner with different slogans [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/storyboardBanner) */
export type StoryboardBannerStoryboardItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<StoryboardBannerStoryboardItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CtaFilter>;
};

export type StoryboardBannerCollection = {
  __typename?: 'StoryboardBannerCollection';
  items: Array<Maybe<StoryboardBanner>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type StoryboardBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<StoryboardBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StoryboardBannerFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  storyboardItems?: InputMaybe<CfCtaNestedFilter>;
  storyboardItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type StoryboardBannerLinkingCollections = {
  __typename?: 'StoryboardBannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
};


export type StoryboardBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type StoryboardBannerLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<StoryboardBannerLinkingCollectionsHomepageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum StoryboardBannerLinkingCollectionsHomepageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum StoryboardBannerOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type StoryboardBannerStoryboardItemsCollection = {
  __typename?: 'StoryboardBannerStoryboardItemsCollection';
  items: Array<Maybe<Cta>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum StoryboardBannerStoryboardItemsCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  StylingAsc = 'styling_ASC',
  StylingDesc = 'styling_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestAutomationAttributeAsc = 'testAutomationAttribute_ASC',
  TestAutomationAttributeDesc = 'testAutomationAttribute_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/suSuNavigationMenu) */
export type SuSuNavigationMenu = Entry & {
  __typename?: 'SuSuNavigationMenu';
  contentfulMetadata: ContentfulMetadata;
  groupCollection?: Maybe<SuSuNavigationMenuGroupCollection>;
  linkedFrom?: Maybe<SuSuNavigationMenuLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/suSuNavigationMenu) */
export type SuSuNavigationMenuGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SuSuNavigationMenuGroupCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationGroupFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/suSuNavigationMenu) */
export type SuSuNavigationMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/suSuNavigationMenu) */
export type SuSuNavigationMenuSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SuSuNavigationMenuCollection = {
  __typename?: 'SuSuNavigationMenuCollection';
  items: Array<Maybe<SuSuNavigationMenu>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SuSuNavigationMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<SuSuNavigationMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SuSuNavigationMenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  group?: InputMaybe<CfNavigationGroupNestedFilter>;
  groupCollection_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type SuSuNavigationMenuGroupCollection = {
  __typename?: 'SuSuNavigationMenuGroupCollection';
  items: Array<Maybe<NavigationGroup>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum SuSuNavigationMenuGroupCollectionOrder {
  FontStylingAsc = 'fontStyling_ASC',
  FontStylingDesc = 'fontStyling_DESC',
  HasTopDividerAsc = 'hasTopDivider_ASC',
  HasTopDividerDesc = 'hasTopDivider_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

export type SuSuNavigationMenuLinkingCollections = {
  __typename?: 'SuSuNavigationMenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SuSuNavigationMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SuSuNavigationMenuOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type SubscribeResponse = {
  __typename?: 'SubscribeResponse';
  email: Scalars['String'];
  status: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export enum Tax_Policy {
  Gross = 'gross',
  Net = 'net'
}

/** Banner with text +Button and optional a Titel. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndButtonBanner) */
export type TextAndButtonBanner = Entry & {
  __typename?: 'TextAndButtonBanner';
  automationId?: Maybe<Scalars['String']>;
  button?: Maybe<TextAndButtonBannerButton>;
  componentSize?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  desktopCopyAlignment?: Maybe<Scalars['String']>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TextAndButtonBannerLinkingCollections>;
  maxWidthDesktop?: Maybe<Scalars['String']>;
  maxWidthMobile?: Maybe<Scalars['String']>;
  maxWidthTablet?: Maybe<Scalars['String']>;
  mobileCopyAlignment?: Maybe<Scalars['String']>;
  sys: Sys;
  tabletCopyAlignment?: Maybe<Scalars['String']>;
  text?: Maybe<TextAndButtonBannerText>;
  title?: Maybe<TextAndButtonBannerTitle>;
};


/** Banner with text +Button and optional a Titel. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndButtonBanner) */
export type TextAndButtonBannerAutomationIdArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with text +Button and optional a Titel. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndButtonBanner) */
export type TextAndButtonBannerButtonArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Banner with text +Button and optional a Titel. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndButtonBanner) */
export type TextAndButtonBannerComponentSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with text +Button and optional a Titel. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndButtonBanner) */
export type TextAndButtonBannerDesktopCopyAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with text +Button and optional a Titel. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndButtonBanner) */
export type TextAndButtonBannerInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with text +Button and optional a Titel. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndButtonBanner) */
export type TextAndButtonBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Banner with text +Button and optional a Titel. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndButtonBanner) */
export type TextAndButtonBannerMaxWidthDesktopArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with text +Button and optional a Titel. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndButtonBanner) */
export type TextAndButtonBannerMaxWidthMobileArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with text +Button and optional a Titel. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndButtonBanner) */
export type TextAndButtonBannerMaxWidthTabletArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with text +Button and optional a Titel. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndButtonBanner) */
export type TextAndButtonBannerMobileCopyAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with text +Button and optional a Titel. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndButtonBanner) */
export type TextAndButtonBannerTabletCopyAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with text +Button and optional a Titel. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndButtonBanner) */
export type TextAndButtonBannerTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with text +Button and optional a Titel. [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndButtonBanner) */
export type TextAndButtonBannerTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TextAndButtonBannerButton = Button | StickyButton;

export type TextAndButtonBannerCollection = {
  __typename?: 'TextAndButtonBannerCollection';
  items: Array<Maybe<TextAndButtonBanner>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TextAndButtonBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextAndButtonBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextAndButtonBannerFilter>>>;
  automationId?: InputMaybe<Scalars['String']>;
  automationId_contains?: InputMaybe<Scalars['String']>;
  automationId_exists?: InputMaybe<Scalars['Boolean']>;
  automationId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  automationId_not?: InputMaybe<Scalars['String']>;
  automationId_not_contains?: InputMaybe<Scalars['String']>;
  automationId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  button_exists?: InputMaybe<Scalars['Boolean']>;
  componentSize?: InputMaybe<Scalars['String']>;
  componentSize_contains?: InputMaybe<Scalars['String']>;
  componentSize_exists?: InputMaybe<Scalars['Boolean']>;
  componentSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentSize_not?: InputMaybe<Scalars['String']>;
  componentSize_not_contains?: InputMaybe<Scalars['String']>;
  componentSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktopCopyAlignment?: InputMaybe<Scalars['String']>;
  desktopCopyAlignment_contains?: InputMaybe<Scalars['String']>;
  desktopCopyAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  desktopCopyAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  desktopCopyAlignment_not?: InputMaybe<Scalars['String']>;
  desktopCopyAlignment_not_contains?: InputMaybe<Scalars['String']>;
  desktopCopyAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  maxWidthDesktop?: InputMaybe<Scalars['String']>;
  maxWidthDesktop_contains?: InputMaybe<Scalars['String']>;
  maxWidthDesktop_exists?: InputMaybe<Scalars['Boolean']>;
  maxWidthDesktop_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  maxWidthDesktop_not?: InputMaybe<Scalars['String']>;
  maxWidthDesktop_not_contains?: InputMaybe<Scalars['String']>;
  maxWidthDesktop_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  maxWidthMobile?: InputMaybe<Scalars['String']>;
  maxWidthMobile_contains?: InputMaybe<Scalars['String']>;
  maxWidthMobile_exists?: InputMaybe<Scalars['Boolean']>;
  maxWidthMobile_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  maxWidthMobile_not?: InputMaybe<Scalars['String']>;
  maxWidthMobile_not_contains?: InputMaybe<Scalars['String']>;
  maxWidthMobile_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  maxWidthTablet?: InputMaybe<Scalars['String']>;
  maxWidthTablet_contains?: InputMaybe<Scalars['String']>;
  maxWidthTablet_exists?: InputMaybe<Scalars['Boolean']>;
  maxWidthTablet_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  maxWidthTablet_not?: InputMaybe<Scalars['String']>;
  maxWidthTablet_not_contains?: InputMaybe<Scalars['String']>;
  maxWidthTablet_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mobileCopyAlignment?: InputMaybe<Scalars['String']>;
  mobileCopyAlignment_contains?: InputMaybe<Scalars['String']>;
  mobileCopyAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  mobileCopyAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mobileCopyAlignment_not?: InputMaybe<Scalars['String']>;
  mobileCopyAlignment_not_contains?: InputMaybe<Scalars['String']>;
  mobileCopyAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  tabletCopyAlignment?: InputMaybe<Scalars['String']>;
  tabletCopyAlignment_contains?: InputMaybe<Scalars['String']>;
  tabletCopyAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  tabletCopyAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabletCopyAlignment_not?: InputMaybe<Scalars['String']>;
  tabletCopyAlignment_not_contains?: InputMaybe<Scalars['String']>;
  tabletCopyAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
};

export type TextAndButtonBannerLinkingCollections = {
  __typename?: 'TextAndButtonBannerLinkingCollections';
  cmsPageCollection?: Maybe<CmsPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  textAndImageColumnBannerCollection?: Maybe<TextAndImageColumnBannerCollection>;
};


export type TextAndButtonBannerLinkingCollectionsCmsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextAndButtonBannerLinkingCollectionsCmsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TextAndButtonBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TextAndButtonBannerLinkingCollectionsTextAndImageColumnBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextAndButtonBannerLinkingCollectionsTextAndImageColumnBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TextAndButtonBannerLinkingCollectionsCmsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeOfBannerAsc = 'typeOfBanner_ASC',
  TypeOfBannerDesc = 'typeOfBanner_DESC'
}

export enum TextAndButtonBannerLinkingCollectionsTextAndImageColumnBannerCollectionOrder {
  ContentOrderDesktopAsc = 'contentOrderDesktop_ASC',
  ContentOrderDesktopDesc = 'contentOrderDesktop_DESC',
  ContentOrderMobileAsc = 'contentOrderMobile_ASC',
  ContentOrderMobileDesc = 'contentOrderMobile_DESC',
  ContentOrderTabletAsc = 'contentOrderTablet_ASC',
  ContentOrderTabletDesc = 'contentOrderTablet_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextAndButtonBannerOrder {
  AutomationIdAsc = 'automationId_ASC',
  AutomationIdDesc = 'automationId_DESC',
  ComponentSizeAsc = 'componentSize_ASC',
  ComponentSizeDesc = 'componentSize_DESC',
  DesktopCopyAlignmentAsc = 'desktopCopyAlignment_ASC',
  DesktopCopyAlignmentDesc = 'desktopCopyAlignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MaxWidthDesktopAsc = 'maxWidthDesktop_ASC',
  MaxWidthDesktopDesc = 'maxWidthDesktop_DESC',
  MaxWidthMobileAsc = 'maxWidthMobile_ASC',
  MaxWidthMobileDesc = 'maxWidthMobile_DESC',
  MaxWidthTabletAsc = 'maxWidthTablet_ASC',
  MaxWidthTabletDesc = 'maxWidthTablet_DESC',
  MobileCopyAlignmentAsc = 'mobileCopyAlignment_ASC',
  MobileCopyAlignmentDesc = 'mobileCopyAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabletCopyAlignmentAsc = 'tabletCopyAlignment_ASC',
  TabletCopyAlignmentDesc = 'tabletCopyAlignment_DESC'
}

export type TextAndButtonBannerText = {
  __typename?: 'TextAndButtonBannerText';
  json: Scalars['JSON'];
  links: TextAndButtonBannerTextLinks;
};

export type TextAndButtonBannerTextAssets = {
  __typename?: 'TextAndButtonBannerTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TextAndButtonBannerTextEntries = {
  __typename?: 'TextAndButtonBannerTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TextAndButtonBannerTextLinks = {
  __typename?: 'TextAndButtonBannerTextLinks';
  assets: TextAndButtonBannerTextAssets;
  entries: TextAndButtonBannerTextEntries;
  resources: TextAndButtonBannerTextResources;
};

export type TextAndButtonBannerTextResources = {
  __typename?: 'TextAndButtonBannerTextResources';
  block: Array<TextAndButtonBannerTextResourcesBlock>;
  hyperlink: Array<TextAndButtonBannerTextResourcesHyperlink>;
  inline: Array<TextAndButtonBannerTextResourcesInline>;
};

export type TextAndButtonBannerTextResourcesBlock = ResourceLink & {
  __typename?: 'TextAndButtonBannerTextResourcesBlock';
  sys: ResourceSys;
};

export type TextAndButtonBannerTextResourcesHyperlink = ResourceLink & {
  __typename?: 'TextAndButtonBannerTextResourcesHyperlink';
  sys: ResourceSys;
};

export type TextAndButtonBannerTextResourcesInline = ResourceLink & {
  __typename?: 'TextAndButtonBannerTextResourcesInline';
  sys: ResourceSys;
};

export type TextAndButtonBannerTitle = {
  __typename?: 'TextAndButtonBannerTitle';
  json: Scalars['JSON'];
  links: TextAndButtonBannerTitleLinks;
};

export type TextAndButtonBannerTitleAssets = {
  __typename?: 'TextAndButtonBannerTitleAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TextAndButtonBannerTitleEntries = {
  __typename?: 'TextAndButtonBannerTitleEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TextAndButtonBannerTitleLinks = {
  __typename?: 'TextAndButtonBannerTitleLinks';
  assets: TextAndButtonBannerTitleAssets;
  entries: TextAndButtonBannerTitleEntries;
  resources: TextAndButtonBannerTitleResources;
};

export type TextAndButtonBannerTitleResources = {
  __typename?: 'TextAndButtonBannerTitleResources';
  block: Array<TextAndButtonBannerTitleResourcesBlock>;
  hyperlink: Array<TextAndButtonBannerTitleResourcesHyperlink>;
  inline: Array<TextAndButtonBannerTitleResourcesInline>;
};

export type TextAndButtonBannerTitleResourcesBlock = ResourceLink & {
  __typename?: 'TextAndButtonBannerTitleResourcesBlock';
  sys: ResourceSys;
};

export type TextAndButtonBannerTitleResourcesHyperlink = ResourceLink & {
  __typename?: 'TextAndButtonBannerTitleResourcesHyperlink';
  sys: ResourceSys;
};

export type TextAndButtonBannerTitleResourcesInline = ResourceLink & {
  __typename?: 'TextAndButtonBannerTitleResourcesInline';
  sys: ResourceSys;
};

/** Banner for text and image set in a column direction [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndImageColumnBanner) */
export type TextAndImageColumnBanner = Entry & {
  __typename?: 'TextAndImageColumnBanner';
  contentCollection?: Maybe<TextAndImageColumnBannerContentCollection>;
  contentOrderDesktop?: Maybe<Scalars['String']>;
  contentOrderMobile?: Maybe<Scalars['String']>;
  contentOrderTablet?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TextAndImageColumnBannerLinkingCollections>;
  sys: Sys;
};


/** Banner for text and image set in a column direction [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndImageColumnBanner) */
export type TextAndImageColumnBannerContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TextAndImageColumnBannerContentFilter>;
};


/** Banner for text and image set in a column direction [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndImageColumnBanner) */
export type TextAndImageColumnBannerContentOrderDesktopArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner for text and image set in a column direction [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndImageColumnBanner) */
export type TextAndImageColumnBannerContentOrderMobileArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner for text and image set in a column direction [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndImageColumnBanner) */
export type TextAndImageColumnBannerContentOrderTabletArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner for text and image set in a column direction [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndImageColumnBanner) */
export type TextAndImageColumnBannerInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner for text and image set in a column direction [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndImageColumnBanner) */
export type TextAndImageColumnBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TextAndImageColumnBannerCollection = {
  __typename?: 'TextAndImageColumnBannerCollection';
  items: Array<Maybe<TextAndImageColumnBanner>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TextAndImageColumnBannerContentCollection = {
  __typename?: 'TextAndImageColumnBannerContentCollection';
  items: Array<Maybe<TextAndImageColumnBannerContentItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TextAndImageColumnBannerContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextAndImageColumnBannerContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextAndImageColumnBannerContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TextAndImageColumnBannerContentItem = MediaWrapperV2 | TextAndButtonBanner;

export type TextAndImageColumnBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextAndImageColumnBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextAndImageColumnBannerFilter>>>;
  content?: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentOrderDesktop?: InputMaybe<Scalars['String']>;
  contentOrderDesktop_contains?: InputMaybe<Scalars['String']>;
  contentOrderDesktop_exists?: InputMaybe<Scalars['Boolean']>;
  contentOrderDesktop_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentOrderDesktop_not?: InputMaybe<Scalars['String']>;
  contentOrderDesktop_not_contains?: InputMaybe<Scalars['String']>;
  contentOrderDesktop_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentOrderMobile?: InputMaybe<Scalars['String']>;
  contentOrderMobile_contains?: InputMaybe<Scalars['String']>;
  contentOrderMobile_exists?: InputMaybe<Scalars['Boolean']>;
  contentOrderMobile_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentOrderMobile_not?: InputMaybe<Scalars['String']>;
  contentOrderMobile_not_contains?: InputMaybe<Scalars['String']>;
  contentOrderMobile_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentOrderTablet?: InputMaybe<Scalars['String']>;
  contentOrderTablet_contains?: InputMaybe<Scalars['String']>;
  contentOrderTablet_exists?: InputMaybe<Scalars['Boolean']>;
  contentOrderTablet_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentOrderTablet_not?: InputMaybe<Scalars['String']>;
  contentOrderTablet_not_contains?: InputMaybe<Scalars['String']>;
  contentOrderTablet_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TextAndImageColumnBannerLinkingCollections = {
  __typename?: 'TextAndImageColumnBannerLinkingCollections';
  cmsPageCollection?: Maybe<CmsPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type TextAndImageColumnBannerLinkingCollectionsCmsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextAndImageColumnBannerLinkingCollectionsCmsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TextAndImageColumnBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TextAndImageColumnBannerLinkingCollectionsCmsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeOfBannerAsc = 'typeOfBanner_ASC',
  TypeOfBannerDesc = 'typeOfBanner_DESC'
}

export enum TextAndImageColumnBannerOrder {
  ContentOrderDesktopAsc = 'contentOrderDesktop_ASC',
  ContentOrderDesktopDesc = 'contentOrderDesktop_DESC',
  ContentOrderMobileAsc = 'contentOrderMobile_ASC',
  ContentOrderMobileDesc = 'contentOrderMobile_DESC',
  ContentOrderTabletAsc = 'contentOrderTablet_ASC',
  ContentOrderTabletDesc = 'contentOrderTablet_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Banner with image/content and text next to each other [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndImageRowBanner) */
export type TextAndImageRowBanner = Entry & {
  __typename?: 'TextAndImageRowBanner';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<TextAndImageRowBannerDescription>;
  iconName?: Maybe<Scalars['String']>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TextAndImageRowBannerLinkingCollections>;
  mediaContentCollection?: Maybe<TextAndImageRowBannerMediaContentCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Banner with image/content and text next to each other [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndImageRowBanner) */
export type TextAndImageRowBannerDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with image/content and text next to each other [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndImageRowBanner) */
export type TextAndImageRowBannerIconNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with image/content and text next to each other [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndImageRowBanner) */
export type TextAndImageRowBannerInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with image/content and text next to each other [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndImageRowBanner) */
export type TextAndImageRowBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Banner with image/content and text next to each other [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndImageRowBanner) */
export type TextAndImageRowBannerMediaContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TextAndImageRowBannerMediaContentFilter>;
};


/** Banner with image/content and text next to each other [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textAndImageRowBanner) */
export type TextAndImageRowBannerTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TextAndImageRowBannerCollection = {
  __typename?: 'TextAndImageRowBannerCollection';
  items: Array<Maybe<TextAndImageRowBanner>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TextAndImageRowBannerDescription = {
  __typename?: 'TextAndImageRowBannerDescription';
  json: Scalars['JSON'];
  links: TextAndImageRowBannerDescriptionLinks;
};

export type TextAndImageRowBannerDescriptionAssets = {
  __typename?: 'TextAndImageRowBannerDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TextAndImageRowBannerDescriptionEntries = {
  __typename?: 'TextAndImageRowBannerDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TextAndImageRowBannerDescriptionLinks = {
  __typename?: 'TextAndImageRowBannerDescriptionLinks';
  assets: TextAndImageRowBannerDescriptionAssets;
  entries: TextAndImageRowBannerDescriptionEntries;
  resources: TextAndImageRowBannerDescriptionResources;
};

export type TextAndImageRowBannerDescriptionResources = {
  __typename?: 'TextAndImageRowBannerDescriptionResources';
  block: Array<TextAndImageRowBannerDescriptionResourcesBlock>;
  hyperlink: Array<TextAndImageRowBannerDescriptionResourcesHyperlink>;
  inline: Array<TextAndImageRowBannerDescriptionResourcesInline>;
};

export type TextAndImageRowBannerDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'TextAndImageRowBannerDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type TextAndImageRowBannerDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'TextAndImageRowBannerDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type TextAndImageRowBannerDescriptionResourcesInline = ResourceLink & {
  __typename?: 'TextAndImageRowBannerDescriptionResourcesInline';
  sys: ResourceSys;
};

export type TextAndImageRowBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextAndImageRowBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextAndImageRowBannerFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  iconName?: InputMaybe<Scalars['String']>;
  iconName_contains?: InputMaybe<Scalars['String']>;
  iconName_exists?: InputMaybe<Scalars['Boolean']>;
  iconName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  iconName_not?: InputMaybe<Scalars['String']>;
  iconName_not_contains?: InputMaybe<Scalars['String']>;
  iconName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mediaContent?: InputMaybe<CfmediaContentMultiTypeNestedFilter>;
  mediaContentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TextAndImageRowBannerLinkingCollections = {
  __typename?: 'TextAndImageRowBannerLinkingCollections';
  cmsPageCollection?: Maybe<CmsPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type TextAndImageRowBannerLinkingCollectionsCmsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextAndImageRowBannerLinkingCollectionsCmsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TextAndImageRowBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TextAndImageRowBannerLinkingCollectionsCmsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeOfBannerAsc = 'typeOfBanner_ASC',
  TypeOfBannerDesc = 'typeOfBanner_DESC'
}

export type TextAndImageRowBannerMediaContentCollection = {
  __typename?: 'TextAndImageRowBannerMediaContentCollection';
  items: Array<Maybe<TextAndImageRowBannerMediaContentItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TextAndImageRowBannerMediaContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextAndImageRowBannerMediaContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextAndImageRowBannerMediaContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TextAndImageRowBannerMediaContentItem = DynamicMediaWrapper | MediaWrapperV2 | PinpointOverlayIndicator;

export enum TextAndImageRowBannerOrder {
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Text wrapper with place for title, copy, cta and icons [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textWrapperRich) */
export type TextWrapperRich = Entry & {
  __typename?: 'TextWrapperRich';
  contentfulMetadata: ContentfulMetadata;
  cta?: Maybe<Cta>;
  description?: Maybe<Scalars['String']>;
  iconName?: Maybe<Scalars['String']>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TextWrapperRichLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Text wrapper with place for title, copy, cta and icons [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textWrapperRich) */
export type TextWrapperRichCtaArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CtaFilter>;
};


/** Text wrapper with place for title, copy, cta and icons [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textWrapperRich) */
export type TextWrapperRichDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Text wrapper with place for title, copy, cta and icons [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textWrapperRich) */
export type TextWrapperRichIconNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Text wrapper with place for title, copy, cta and icons [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textWrapperRich) */
export type TextWrapperRichInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Text wrapper with place for title, copy, cta and icons [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textWrapperRich) */
export type TextWrapperRichLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Text wrapper with place for title, copy, cta and icons [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textWrapperRich) */
export type TextWrapperRichTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TextWrapperRichCollection = {
  __typename?: 'TextWrapperRichCollection';
  items: Array<Maybe<TextWrapperRich>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TextWrapperRichFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextWrapperRichFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextWrapperRichFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta?: InputMaybe<CfCtaNestedFilter>;
  cta_exists?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  iconName?: InputMaybe<Scalars['String']>;
  iconName_contains?: InputMaybe<Scalars['String']>;
  iconName_exists?: InputMaybe<Scalars['Boolean']>;
  iconName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  iconName_not?: InputMaybe<Scalars['String']>;
  iconName_not_contains?: InputMaybe<Scalars['String']>;
  iconName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TextWrapperRichLinkingCollections = {
  __typename?: 'TextWrapperRichLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerUspBlockCollection?: Maybe<FooterUspBlockCollection>;
};


export type TextWrapperRichLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TextWrapperRichLinkingCollectionsFooterUspBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextWrapperRichLinkingCollectionsFooterUspBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TextWrapperRichLinkingCollectionsFooterUspBlockCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextWrapperRichOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Text wrapper with place for title, copy, icons and link to opening a panel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textWrapperRichPanel) */
export type TextWrapperRichPanel = Entry & {
  __typename?: 'TextWrapperRichPanel';
  contentfulMetadata: ContentfulMetadata;
  cta?: Maybe<Cta>;
  description?: Maybe<Scalars['String']>;
  iconName?: Maybe<Scalars['String']>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TextWrapperRichPanelLinkingCollections>;
  promotionEvents?: Maybe<PromotionEvents>;
  styleExpertPanelCollection?: Maybe<TextWrapperRichPanelStyleExpertPanelCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Text wrapper with place for title, copy, icons and link to opening a panel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textWrapperRichPanel) */
export type TextWrapperRichPanelCtaArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CtaFilter>;
};


/** Text wrapper with place for title, copy, icons and link to opening a panel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textWrapperRichPanel) */
export type TextWrapperRichPanelDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Text wrapper with place for title, copy, icons and link to opening a panel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textWrapperRichPanel) */
export type TextWrapperRichPanelIconNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Text wrapper with place for title, copy, icons and link to opening a panel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textWrapperRichPanel) */
export type TextWrapperRichPanelInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Text wrapper with place for title, copy, icons and link to opening a panel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textWrapperRichPanel) */
export type TextWrapperRichPanelLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Text wrapper with place for title, copy, icons and link to opening a panel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textWrapperRichPanel) */
export type TextWrapperRichPanelPromotionEventsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PromotionEventsFilter>;
};


/** Text wrapper with place for title, copy, icons and link to opening a panel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textWrapperRichPanel) */
export type TextWrapperRichPanelStyleExpertPanelCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextWrapperRichPanelStyleExpertPanelCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PanelContentWrapperFilter>;
};


/** Text wrapper with place for title, copy, icons and link to opening a panel [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/textWrapperRichPanel) */
export type TextWrapperRichPanelTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TextWrapperRichPanelCollection = {
  __typename?: 'TextWrapperRichPanelCollection';
  items: Array<Maybe<TextWrapperRichPanel>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TextWrapperRichPanelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextWrapperRichPanelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextWrapperRichPanelFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta?: InputMaybe<CfCtaNestedFilter>;
  cta_exists?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  iconName?: InputMaybe<Scalars['String']>;
  iconName_contains?: InputMaybe<Scalars['String']>;
  iconName_exists?: InputMaybe<Scalars['Boolean']>;
  iconName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  iconName_not?: InputMaybe<Scalars['String']>;
  iconName_not_contains?: InputMaybe<Scalars['String']>;
  iconName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEvents?: InputMaybe<CfPromotionEventsNestedFilter>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  styleExpertPanel?: InputMaybe<CfPanelContentWrapperNestedFilter>;
  styleExpertPanelCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TextWrapperRichPanelLinkingCollections = {
  __typename?: 'TextWrapperRichPanelLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerUspBlockCollection?: Maybe<FooterUspBlockCollection>;
};


export type TextWrapperRichPanelLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TextWrapperRichPanelLinkingCollectionsFooterUspBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextWrapperRichPanelLinkingCollectionsFooterUspBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TextWrapperRichPanelLinkingCollectionsFooterUspBlockCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextWrapperRichPanelOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TextWrapperRichPanelStyleExpertPanelCollection = {
  __typename?: 'TextWrapperRichPanelStyleExpertPanelCollection';
  items: Array<Maybe<PanelContentWrapper>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum TextWrapperRichPanelStyleExpertPanelCollectionOrder {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Represents an price */
export type Totals = {
  __typename?: 'Totals';
  orderTotal: PriceInfo;
  shippingTotal: PriceInfo;
};

/** Content for Tuxedo color Options (black, navy) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoColorOption) */
export type TuxedoColorOption = Entry & {
  __typename?: 'TuxedoColorOption';
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TuxedoColorOptionLinkingCollections>;
  optionName?: Maybe<Scalars['String']>;
  sys: Sys;
  thumbnailImage?: Maybe<Scalars['JSON']>;
  tuxedoColor?: Maybe<Scalars['String']>;
};


/** Content for Tuxedo color Options (black, navy) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoColorOption) */
export type TuxedoColorOptionInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Content for Tuxedo color Options (black, navy) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoColorOption) */
export type TuxedoColorOptionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Content for Tuxedo color Options (black, navy) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoColorOption) */
export type TuxedoColorOptionOptionNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Content for Tuxedo color Options (black, navy) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoColorOption) */
export type TuxedoColorOptionThumbnailImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Content for Tuxedo color Options (black, navy) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoColorOption) */
export type TuxedoColorOptionTuxedoColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TuxedoColorOptionCollection = {
  __typename?: 'TuxedoColorOptionCollection';
  items: Array<Maybe<TuxedoColorOption>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TuxedoColorOptionFilter = {
  AND?: InputMaybe<Array<InputMaybe<TuxedoColorOptionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TuxedoColorOptionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  optionName?: InputMaybe<Scalars['String']>;
  optionName_contains?: InputMaybe<Scalars['String']>;
  optionName_exists?: InputMaybe<Scalars['Boolean']>;
  optionName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  optionName_not?: InputMaybe<Scalars['String']>;
  optionName_not_contains?: InputMaybe<Scalars['String']>;
  optionName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnailImage_exists?: InputMaybe<Scalars['Boolean']>;
  tuxedoColor?: InputMaybe<Scalars['String']>;
  tuxedoColor_contains?: InputMaybe<Scalars['String']>;
  tuxedoColor_exists?: InputMaybe<Scalars['Boolean']>;
  tuxedoColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tuxedoColor_not?: InputMaybe<Scalars['String']>;
  tuxedoColor_not_contains?: InputMaybe<Scalars['String']>;
  tuxedoColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TuxedoColorOptionLinkingCollections = {
  __typename?: 'TuxedoColorOptionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  tuxedoColorStepCollection?: Maybe<TuxedoColorStepCollection>;
};


export type TuxedoColorOptionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TuxedoColorOptionLinkingCollectionsTuxedoColorStepCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TuxedoColorOptionLinkingCollectionsTuxedoColorStepCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TuxedoColorOptionLinkingCollectionsTuxedoColorStepCollectionOrder {
  CategoryStepAsc = 'categoryStep_ASC',
  CategoryStepDesc = 'categoryStep_DESC',
  ImageTypeAsc = 'imageType_ASC',
  ImageTypeDesc = 'imageType_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PreviewImageFocalPointAsc = 'previewImageFocalPoint_ASC',
  PreviewImageFocalPointDesc = 'previewImageFocalPoint_DESC',
  PreviewImageZoomAsc = 'previewImageZoom_ASC',
  PreviewImageZoomDesc = 'previewImageZoom_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TuxedoColorOptionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  OptionNameAsc = 'optionName_ASC',
  OptionNameDesc = 'optionName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TuxedoColorAsc = 'tuxedoColor_ASC',
  TuxedoColorDesc = 'tuxedoColor_DESC'
}

/** Step to determine Tuxedo Color [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoColorStep) */
export type TuxedoColorStep = Entry & {
  __typename?: 'TuxedoColorStep';
  categoryStep?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  imageType?: Maybe<Scalars['String']>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TuxedoColorStepLinkingCollections>;
  previewImageFocalPoint?: Maybe<Scalars['String']>;
  previewImageZoom?: Maybe<Scalars['String']>;
  sys: Sys;
  tuxedoColorOptionsCollection?: Maybe<TuxedoColorStepTuxedoColorOptionsCollection>;
};


/** Step to determine Tuxedo Color [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoColorStep) */
export type TuxedoColorStepCategoryStepArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Step to determine Tuxedo Color [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoColorStep) */
export type TuxedoColorStepImageTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Step to determine Tuxedo Color [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoColorStep) */
export type TuxedoColorStepInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Step to determine Tuxedo Color [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoColorStep) */
export type TuxedoColorStepLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Step to determine Tuxedo Color [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoColorStep) */
export type TuxedoColorStepPreviewImageFocalPointArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Step to determine Tuxedo Color [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoColorStep) */
export type TuxedoColorStepPreviewImageZoomArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Step to determine Tuxedo Color [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoColorStep) */
export type TuxedoColorStepTuxedoColorOptionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TuxedoColorStepTuxedoColorOptionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TuxedoColorOptionFilter>;
};

export type TuxedoColorStepCollection = {
  __typename?: 'TuxedoColorStepCollection';
  items: Array<Maybe<TuxedoColorStep>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TuxedoColorStepFilter = {
  AND?: InputMaybe<Array<InputMaybe<TuxedoColorStepFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TuxedoColorStepFilter>>>;
  categoryStep?: InputMaybe<Scalars['String']>;
  categoryStep_contains?: InputMaybe<Scalars['String']>;
  categoryStep_exists?: InputMaybe<Scalars['Boolean']>;
  categoryStep_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categoryStep_not?: InputMaybe<Scalars['String']>;
  categoryStep_not_contains?: InputMaybe<Scalars['String']>;
  categoryStep_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageType?: InputMaybe<Scalars['String']>;
  imageType_contains?: InputMaybe<Scalars['String']>;
  imageType_exists?: InputMaybe<Scalars['Boolean']>;
  imageType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageType_not?: InputMaybe<Scalars['String']>;
  imageType_not_contains?: InputMaybe<Scalars['String']>;
  imageType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageFocalPoint?: InputMaybe<Scalars['String']>;
  previewImageFocalPoint_contains?: InputMaybe<Scalars['String']>;
  previewImageFocalPoint_exists?: InputMaybe<Scalars['Boolean']>;
  previewImageFocalPoint_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageFocalPoint_not?: InputMaybe<Scalars['String']>;
  previewImageFocalPoint_not_contains?: InputMaybe<Scalars['String']>;
  previewImageFocalPoint_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageZoom?: InputMaybe<Scalars['String']>;
  previewImageZoom_contains?: InputMaybe<Scalars['String']>;
  previewImageZoom_exists?: InputMaybe<Scalars['Boolean']>;
  previewImageZoom_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageZoom_not?: InputMaybe<Scalars['String']>;
  previewImageZoom_not_contains?: InputMaybe<Scalars['String']>;
  previewImageZoom_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  tuxedoColorOptions?: InputMaybe<CfTuxedoColorOptionNestedFilter>;
  tuxedoColorOptionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type TuxedoColorStepLinkingCollections = {
  __typename?: 'TuxedoColorStepLinkingCollections';
  blackTieConfiguratorCollection?: Maybe<BlackTieConfiguratorCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type TuxedoColorStepLinkingCollectionsBlackTieConfiguratorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TuxedoColorStepLinkingCollectionsBlackTieConfiguratorCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TuxedoColorStepLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TuxedoColorStepLinkingCollectionsBlackTieConfiguratorCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ModelImageAsc = 'modelImage_ASC',
  ModelImageDesc = 'modelImage_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TuxedoColorStepOrder {
  CategoryStepAsc = 'categoryStep_ASC',
  CategoryStepDesc = 'categoryStep_DESC',
  ImageTypeAsc = 'imageType_ASC',
  ImageTypeDesc = 'imageType_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PreviewImageFocalPointAsc = 'previewImageFocalPoint_ASC',
  PreviewImageFocalPointDesc = 'previewImageFocalPoint_DESC',
  PreviewImageZoomAsc = 'previewImageZoom_ASC',
  PreviewImageZoomDesc = 'previewImageZoom_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TuxedoColorStepTuxedoColorOptionsCollection = {
  __typename?: 'TuxedoColorStepTuxedoColorOptionsCollection';
  items: Array<Maybe<TuxedoColorOption>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum TuxedoColorStepTuxedoColorOptionsCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  OptionNameAsc = 'optionName_ASC',
  OptionNameDesc = 'optionName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TuxedoColorAsc = 'tuxedoColor_ASC',
  TuxedoColorDesc = 'tuxedoColor_DESC'
}

/** Tuxedo Options containing all products needed to dress up the preview image/model [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoProductOption) */
export type TuxedoProductOption = Entry & {
  __typename?: 'TuxedoProductOption';
  campaign?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TuxedoProductOptionLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  tuxedoStyle?: Maybe<Scalars['String']>;
  waistcoatLayerInfo?: Maybe<Scalars['String']>;
  waistcoatProductId?: Maybe<Scalars['String']>;
};


/** Tuxedo Options containing all products needed to dress up the preview image/model [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoProductOption) */
export type TuxedoProductOptionCampaignArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Tuxedo Options containing all products needed to dress up the preview image/model [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoProductOption) */
export type TuxedoProductOptionColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Tuxedo Options containing all products needed to dress up the preview image/model [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoProductOption) */
export type TuxedoProductOptionInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Tuxedo Options containing all products needed to dress up the preview image/model [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoProductOption) */
export type TuxedoProductOptionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Tuxedo Options containing all products needed to dress up the preview image/model [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoProductOption) */
export type TuxedoProductOptionTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Tuxedo Options containing all products needed to dress up the preview image/model [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoProductOption) */
export type TuxedoProductOptionTuxedoStyleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Tuxedo Options containing all products needed to dress up the preview image/model [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoProductOption) */
export type TuxedoProductOptionWaistcoatLayerInfoArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Tuxedo Options containing all products needed to dress up the preview image/model [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoProductOption) */
export type TuxedoProductOptionWaistcoatProductIdArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TuxedoProductOptionCollection = {
  __typename?: 'TuxedoProductOptionCollection';
  items: Array<Maybe<TuxedoProductOption>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TuxedoProductOptionFilter = {
  AND?: InputMaybe<Array<InputMaybe<TuxedoProductOptionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TuxedoProductOptionFilter>>>;
  campaign?: InputMaybe<Scalars['String']>;
  campaign_contains?: InputMaybe<Scalars['String']>;
  campaign_exists?: InputMaybe<Scalars['Boolean']>;
  campaign_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaign_not?: InputMaybe<Scalars['String']>;
  campaign_not_contains?: InputMaybe<Scalars['String']>;
  campaign_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color?: InputMaybe<Scalars['String']>;
  color_contains?: InputMaybe<Scalars['String']>;
  color_exists?: InputMaybe<Scalars['Boolean']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_not?: InputMaybe<Scalars['String']>;
  color_not_contains?: InputMaybe<Scalars['String']>;
  color_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tuxedoStyle?: InputMaybe<Scalars['String']>;
  tuxedoStyle_contains?: InputMaybe<Scalars['String']>;
  tuxedoStyle_exists?: InputMaybe<Scalars['Boolean']>;
  tuxedoStyle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tuxedoStyle_not?: InputMaybe<Scalars['String']>;
  tuxedoStyle_not_contains?: InputMaybe<Scalars['String']>;
  tuxedoStyle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  waistcoatLayerInfo?: InputMaybe<Scalars['String']>;
  waistcoatLayerInfo_contains?: InputMaybe<Scalars['String']>;
  waistcoatLayerInfo_exists?: InputMaybe<Scalars['Boolean']>;
  waistcoatLayerInfo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  waistcoatLayerInfo_not?: InputMaybe<Scalars['String']>;
  waistcoatLayerInfo_not_contains?: InputMaybe<Scalars['String']>;
  waistcoatLayerInfo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  waistcoatProductId?: InputMaybe<Scalars['String']>;
  waistcoatProductId_contains?: InputMaybe<Scalars['String']>;
  waistcoatProductId_exists?: InputMaybe<Scalars['Boolean']>;
  waistcoatProductId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  waistcoatProductId_not?: InputMaybe<Scalars['String']>;
  waistcoatProductId_not_contains?: InputMaybe<Scalars['String']>;
  waistcoatProductId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TuxedoProductOptionLinkingCollections = {
  __typename?: 'TuxedoProductOptionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  tuxedoStyleStepCollection?: Maybe<TuxedoStyleStepCollection>;
};


export type TuxedoProductOptionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TuxedoProductOptionLinkingCollectionsTuxedoStyleStepCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TuxedoProductOptionLinkingCollectionsTuxedoStyleStepCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TuxedoProductOptionLinkingCollectionsTuxedoStyleStepCollectionOrder {
  CategoryStepAsc = 'categoryStep_ASC',
  CategoryStepDesc = 'categoryStep_DESC',
  ImageTypeAsc = 'imageType_ASC',
  ImageTypeDesc = 'imageType_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PreviewImageFocalPointMobileAsc = 'previewImageFocalPointMobile_ASC',
  PreviewImageFocalPointMobileDesc = 'previewImageFocalPointMobile_DESC',
  PreviewImageFocalPointTabletAsc = 'previewImageFocalPointTablet_ASC',
  PreviewImageFocalPointTabletDesc = 'previewImageFocalPointTablet_DESC',
  PreviewImageFocalPointAsc = 'previewImageFocalPoint_ASC',
  PreviewImageFocalPointDesc = 'previewImageFocalPoint_DESC',
  PreviewImageZoomMobileAsc = 'previewImageZoomMobile_ASC',
  PreviewImageZoomMobileDesc = 'previewImageZoomMobile_DESC',
  PreviewImageZoomTabletAsc = 'previewImageZoomTablet_ASC',
  PreviewImageZoomTabletDesc = 'previewImageZoomTablet_DESC',
  PreviewImageZoomAsc = 'previewImageZoom_ASC',
  PreviewImageZoomDesc = 'previewImageZoom_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum TuxedoProductOptionOrder {
  CampaignAsc = 'campaign_ASC',
  CampaignDesc = 'campaign_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TuxedoStyleAsc = 'tuxedoStyle_ASC',
  TuxedoStyleDesc = 'tuxedoStyle_DESC',
  WaistcoatLayerInfoAsc = 'waistcoatLayerInfo_ASC',
  WaistcoatLayerInfoDesc = 'waistcoatLayerInfo_DESC',
  WaistcoatProductIdAsc = 'waistcoatProductId_ASC',
  WaistcoatProductIdDesc = 'waistcoatProductId_DESC'
}

/** Content for Tuxedo Style Options (2p, 3p and color variations) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoStyleOption) */
export type TuxedoStyleOption = Entry & {
  __typename?: 'TuxedoStyleOption';
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TuxedoStyleOptionLinkingCollections>;
  optionName?: Maybe<Scalars['String']>;
  sys: Sys;
  thumbnailImage?: Maybe<MediaWrapperV2>;
  tuxedoStyle?: Maybe<Scalars['String']>;
};


/** Content for Tuxedo Style Options (2p, 3p and color variations) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoStyleOption) */
export type TuxedoStyleOptionInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Content for Tuxedo Style Options (2p, 3p and color variations) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoStyleOption) */
export type TuxedoStyleOptionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Content for Tuxedo Style Options (2p, 3p and color variations) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoStyleOption) */
export type TuxedoStyleOptionOptionNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Content for Tuxedo Style Options (2p, 3p and color variations) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoStyleOption) */
export type TuxedoStyleOptionThumbnailImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MediaWrapperV2Filter>;
};


/** Content for Tuxedo Style Options (2p, 3p and color variations) [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoStyleOption) */
export type TuxedoStyleOptionTuxedoStyleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TuxedoStyleOptionCollection = {
  __typename?: 'TuxedoStyleOptionCollection';
  items: Array<Maybe<TuxedoStyleOption>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TuxedoStyleOptionFilter = {
  AND?: InputMaybe<Array<InputMaybe<TuxedoStyleOptionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TuxedoStyleOptionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  optionName?: InputMaybe<Scalars['String']>;
  optionName_contains?: InputMaybe<Scalars['String']>;
  optionName_exists?: InputMaybe<Scalars['Boolean']>;
  optionName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  optionName_not?: InputMaybe<Scalars['String']>;
  optionName_not_contains?: InputMaybe<Scalars['String']>;
  optionName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnailImage?: InputMaybe<CfMediaWrapperV2NestedFilter>;
  thumbnailImage_exists?: InputMaybe<Scalars['Boolean']>;
  tuxedoStyle?: InputMaybe<Scalars['String']>;
  tuxedoStyle_contains?: InputMaybe<Scalars['String']>;
  tuxedoStyle_exists?: InputMaybe<Scalars['Boolean']>;
  tuxedoStyle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tuxedoStyle_not?: InputMaybe<Scalars['String']>;
  tuxedoStyle_not_contains?: InputMaybe<Scalars['String']>;
  tuxedoStyle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TuxedoStyleOptionLinkingCollections = {
  __typename?: 'TuxedoStyleOptionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  tuxedoStyleStepCollection?: Maybe<TuxedoStyleStepCollection>;
};


export type TuxedoStyleOptionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TuxedoStyleOptionLinkingCollectionsTuxedoStyleStepCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TuxedoStyleOptionLinkingCollectionsTuxedoStyleStepCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TuxedoStyleOptionLinkingCollectionsTuxedoStyleStepCollectionOrder {
  CategoryStepAsc = 'categoryStep_ASC',
  CategoryStepDesc = 'categoryStep_DESC',
  ImageTypeAsc = 'imageType_ASC',
  ImageTypeDesc = 'imageType_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PreviewImageFocalPointMobileAsc = 'previewImageFocalPointMobile_ASC',
  PreviewImageFocalPointMobileDesc = 'previewImageFocalPointMobile_DESC',
  PreviewImageFocalPointTabletAsc = 'previewImageFocalPointTablet_ASC',
  PreviewImageFocalPointTabletDesc = 'previewImageFocalPointTablet_DESC',
  PreviewImageFocalPointAsc = 'previewImageFocalPoint_ASC',
  PreviewImageFocalPointDesc = 'previewImageFocalPoint_DESC',
  PreviewImageZoomMobileAsc = 'previewImageZoomMobile_ASC',
  PreviewImageZoomMobileDesc = 'previewImageZoomMobile_DESC',
  PreviewImageZoomTabletAsc = 'previewImageZoomTablet_ASC',
  PreviewImageZoomTabletDesc = 'previewImageZoomTablet_DESC',
  PreviewImageZoomAsc = 'previewImageZoom_ASC',
  PreviewImageZoomDesc = 'previewImageZoom_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum TuxedoStyleOptionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  OptionNameAsc = 'optionName_ASC',
  OptionNameDesc = 'optionName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TuxedoStyleAsc = 'tuxedoStyle_ASC',
  TuxedoStyleDesc = 'tuxedoStyle_DESC'
}

/** Step to select tuxedo style [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoStyleStep) */
export type TuxedoStyleStep = Entry & {
  __typename?: 'TuxedoStyleStep';
  categoryStep?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  imageType?: Maybe<Scalars['String']>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TuxedoStyleStepLinkingCollections>;
  previewImageFocalPoint?: Maybe<Scalars['String']>;
  previewImageFocalPointMobile?: Maybe<Scalars['String']>;
  previewImageFocalPointTablet?: Maybe<Scalars['String']>;
  previewImageZoom?: Maybe<Scalars['String']>;
  previewImageZoomMobile?: Maybe<Scalars['String']>;
  previewImageZoomTablet?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  tuxedoProductOptionsCollection?: Maybe<TuxedoStyleStepTuxedoProductOptionsCollection>;
  tuxedoStyleOptionsCollection?: Maybe<TuxedoStyleStepTuxedoStyleOptionsCollection>;
};


/** Step to select tuxedo style [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoStyleStep) */
export type TuxedoStyleStepCategoryStepArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Step to select tuxedo style [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoStyleStep) */
export type TuxedoStyleStepImageTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Step to select tuxedo style [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoStyleStep) */
export type TuxedoStyleStepInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Step to select tuxedo style [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoStyleStep) */
export type TuxedoStyleStepLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Step to select tuxedo style [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoStyleStep) */
export type TuxedoStyleStepPreviewImageFocalPointArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Step to select tuxedo style [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoStyleStep) */
export type TuxedoStyleStepPreviewImageFocalPointMobileArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Step to select tuxedo style [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoStyleStep) */
export type TuxedoStyleStepPreviewImageFocalPointTabletArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Step to select tuxedo style [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoStyleStep) */
export type TuxedoStyleStepPreviewImageZoomArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Step to select tuxedo style [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoStyleStep) */
export type TuxedoStyleStepPreviewImageZoomMobileArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Step to select tuxedo style [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoStyleStep) */
export type TuxedoStyleStepPreviewImageZoomTabletArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Step to select tuxedo style [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoStyleStep) */
export type TuxedoStyleStepTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Step to select tuxedo style [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoStyleStep) */
export type TuxedoStyleStepTuxedoProductOptionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TuxedoStyleStepTuxedoProductOptionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TuxedoProductOptionFilter>;
};


/** Step to select tuxedo style [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/tuxedoStyleStep) */
export type TuxedoStyleStepTuxedoStyleOptionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TuxedoStyleStepTuxedoStyleOptionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TuxedoStyleOptionFilter>;
};

export type TuxedoStyleStepCollection = {
  __typename?: 'TuxedoStyleStepCollection';
  items: Array<Maybe<TuxedoStyleStep>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TuxedoStyleStepFilter = {
  AND?: InputMaybe<Array<InputMaybe<TuxedoStyleStepFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TuxedoStyleStepFilter>>>;
  categoryStep?: InputMaybe<Scalars['String']>;
  categoryStep_contains?: InputMaybe<Scalars['String']>;
  categoryStep_exists?: InputMaybe<Scalars['Boolean']>;
  categoryStep_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categoryStep_not?: InputMaybe<Scalars['String']>;
  categoryStep_not_contains?: InputMaybe<Scalars['String']>;
  categoryStep_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageType?: InputMaybe<Scalars['String']>;
  imageType_contains?: InputMaybe<Scalars['String']>;
  imageType_exists?: InputMaybe<Scalars['Boolean']>;
  imageType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageType_not?: InputMaybe<Scalars['String']>;
  imageType_not_contains?: InputMaybe<Scalars['String']>;
  imageType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageFocalPoint?: InputMaybe<Scalars['String']>;
  previewImageFocalPointMobile?: InputMaybe<Scalars['String']>;
  previewImageFocalPointMobile_contains?: InputMaybe<Scalars['String']>;
  previewImageFocalPointMobile_exists?: InputMaybe<Scalars['Boolean']>;
  previewImageFocalPointMobile_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageFocalPointMobile_not?: InputMaybe<Scalars['String']>;
  previewImageFocalPointMobile_not_contains?: InputMaybe<Scalars['String']>;
  previewImageFocalPointMobile_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageFocalPointTablet?: InputMaybe<Scalars['String']>;
  previewImageFocalPointTablet_contains?: InputMaybe<Scalars['String']>;
  previewImageFocalPointTablet_exists?: InputMaybe<Scalars['Boolean']>;
  previewImageFocalPointTablet_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageFocalPointTablet_not?: InputMaybe<Scalars['String']>;
  previewImageFocalPointTablet_not_contains?: InputMaybe<Scalars['String']>;
  previewImageFocalPointTablet_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageFocalPoint_contains?: InputMaybe<Scalars['String']>;
  previewImageFocalPoint_exists?: InputMaybe<Scalars['Boolean']>;
  previewImageFocalPoint_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageFocalPoint_not?: InputMaybe<Scalars['String']>;
  previewImageFocalPoint_not_contains?: InputMaybe<Scalars['String']>;
  previewImageFocalPoint_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageZoom?: InputMaybe<Scalars['String']>;
  previewImageZoomMobile?: InputMaybe<Scalars['String']>;
  previewImageZoomMobile_contains?: InputMaybe<Scalars['String']>;
  previewImageZoomMobile_exists?: InputMaybe<Scalars['Boolean']>;
  previewImageZoomMobile_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageZoomMobile_not?: InputMaybe<Scalars['String']>;
  previewImageZoomMobile_not_contains?: InputMaybe<Scalars['String']>;
  previewImageZoomMobile_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageZoomTablet?: InputMaybe<Scalars['String']>;
  previewImageZoomTablet_contains?: InputMaybe<Scalars['String']>;
  previewImageZoomTablet_exists?: InputMaybe<Scalars['Boolean']>;
  previewImageZoomTablet_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageZoomTablet_not?: InputMaybe<Scalars['String']>;
  previewImageZoomTablet_not_contains?: InputMaybe<Scalars['String']>;
  previewImageZoomTablet_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageZoom_contains?: InputMaybe<Scalars['String']>;
  previewImageZoom_exists?: InputMaybe<Scalars['Boolean']>;
  previewImageZoom_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageZoom_not?: InputMaybe<Scalars['String']>;
  previewImageZoom_not_contains?: InputMaybe<Scalars['String']>;
  previewImageZoom_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tuxedoProductOptions?: InputMaybe<CfTuxedoProductOptionNestedFilter>;
  tuxedoProductOptionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  tuxedoStyleOptions?: InputMaybe<CfTuxedoStyleOptionNestedFilter>;
  tuxedoStyleOptionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type TuxedoStyleStepLinkingCollections = {
  __typename?: 'TuxedoStyleStepLinkingCollections';
  blackTieConfiguratorCollection?: Maybe<BlackTieConfiguratorCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type TuxedoStyleStepLinkingCollectionsBlackTieConfiguratorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TuxedoStyleStepLinkingCollectionsBlackTieConfiguratorCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TuxedoStyleStepLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TuxedoStyleStepLinkingCollectionsBlackTieConfiguratorCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ModelImageAsc = 'modelImage_ASC',
  ModelImageDesc = 'modelImage_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TuxedoStyleStepOrder {
  CategoryStepAsc = 'categoryStep_ASC',
  CategoryStepDesc = 'categoryStep_DESC',
  ImageTypeAsc = 'imageType_ASC',
  ImageTypeDesc = 'imageType_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PreviewImageFocalPointMobileAsc = 'previewImageFocalPointMobile_ASC',
  PreviewImageFocalPointMobileDesc = 'previewImageFocalPointMobile_DESC',
  PreviewImageFocalPointTabletAsc = 'previewImageFocalPointTablet_ASC',
  PreviewImageFocalPointTabletDesc = 'previewImageFocalPointTablet_DESC',
  PreviewImageFocalPointAsc = 'previewImageFocalPoint_ASC',
  PreviewImageFocalPointDesc = 'previewImageFocalPoint_DESC',
  PreviewImageZoomMobileAsc = 'previewImageZoomMobile_ASC',
  PreviewImageZoomMobileDesc = 'previewImageZoomMobile_DESC',
  PreviewImageZoomTabletAsc = 'previewImageZoomTablet_ASC',
  PreviewImageZoomTabletDesc = 'previewImageZoomTablet_DESC',
  PreviewImageZoomAsc = 'previewImageZoom_ASC',
  PreviewImageZoomDesc = 'previewImageZoom_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TuxedoStyleStepTuxedoProductOptionsCollection = {
  __typename?: 'TuxedoStyleStepTuxedoProductOptionsCollection';
  items: Array<Maybe<TuxedoProductOption>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum TuxedoStyleStepTuxedoProductOptionsCollectionOrder {
  CampaignAsc = 'campaign_ASC',
  CampaignDesc = 'campaign_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TuxedoStyleAsc = 'tuxedoStyle_ASC',
  TuxedoStyleDesc = 'tuxedoStyle_DESC',
  WaistcoatLayerInfoAsc = 'waistcoatLayerInfo_ASC',
  WaistcoatLayerInfoDesc = 'waistcoatLayerInfo_DESC',
  WaistcoatProductIdAsc = 'waistcoatProductId_ASC',
  WaistcoatProductIdDesc = 'waistcoatProductId_DESC'
}

export type TuxedoStyleStepTuxedoStyleOptionsCollection = {
  __typename?: 'TuxedoStyleStepTuxedoStyleOptionsCollection';
  items: Array<Maybe<TuxedoStyleOption>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum TuxedoStyleStepTuxedoStyleOptionsCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  OptionNameAsc = 'optionName_ASC',
  OptionNameDesc = 'optionName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TuxedoStyleAsc = 'tuxedoStyle_ASC',
  TuxedoStyleDesc = 'tuxedoStyle_DESC'
}

export type UpdateSubscribeInput = {
  email: Scalars['String'];
  fromCheckout: Scalars['Boolean'];
  locale: Scalars['String'];
  subscribe: Scalars['Boolean'];
};

/** Wrapper for video content [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/videoWrapper) */
export type VideoWrapper = Entry & {
  __typename?: 'VideoWrapper';
  altText?: Maybe<Scalars['String']>;
  cloudinaryVideoDesktop?: Maybe<Scalars['JSON']>;
  cloudinaryVideoMobile?: Maybe<Scalars['JSON']>;
  cloudinaryVideoTablet?: Maybe<Scalars['JSON']>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<VideoWrapperLinkingCollections>;
  sys: Sys;
};


/** Wrapper for video content [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/videoWrapper) */
export type VideoWrapperAltTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wrapper for video content [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/videoWrapper) */
export type VideoWrapperCloudinaryVideoDesktopArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wrapper for video content [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/videoWrapper) */
export type VideoWrapperCloudinaryVideoMobileArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wrapper for video content [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/videoWrapper) */
export type VideoWrapperCloudinaryVideoTabletArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wrapper for video content [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/videoWrapper) */
export type VideoWrapperInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Wrapper for video content [See type definition](https://app.contentful.com/spaces/4bpj5he1bzy2/content_types/videoWrapper) */
export type VideoWrapperLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VideoWrapperCollection = {
  __typename?: 'VideoWrapperCollection';
  items: Array<Maybe<VideoWrapper>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type VideoWrapperFilter = {
  AND?: InputMaybe<Array<InputMaybe<VideoWrapperFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VideoWrapperFilter>>>;
  altText?: InputMaybe<Scalars['String']>;
  altText_contains?: InputMaybe<Scalars['String']>;
  altText_exists?: InputMaybe<Scalars['Boolean']>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  altText_not?: InputMaybe<Scalars['String']>;
  altText_not_contains?: InputMaybe<Scalars['String']>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cloudinaryVideoDesktop_exists?: InputMaybe<Scalars['Boolean']>;
  cloudinaryVideoMobile_exists?: InputMaybe<Scalars['Boolean']>;
  cloudinaryVideoTablet_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type VideoWrapperLinkingCollections = {
  __typename?: 'VideoWrapperLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  heroBannerWithLinksCollection?: Maybe<HeroBannerWithLinksCollection>;
};


export type VideoWrapperLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type VideoWrapperLinkingCollectionsHeroBannerWithLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<VideoWrapperLinkingCollectionsHeroBannerWithLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum VideoWrapperLinkingCollectionsHeroBannerWithLinksCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum VideoWrapperOrder {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum Wishlist_Type {
  WishList = 'wish_list'
}

export type _Node = {
  _id: Scalars['ID'];
};

export type CfCarouselImageAndTextCardNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCarouselImageAndTextCardNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCarouselImageAndTextCardNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  iconName?: InputMaybe<Scalars['String']>;
  iconName_contains?: InputMaybe<Scalars['String']>;
  iconName_exists?: InputMaybe<Scalars['Boolean']>;
  iconName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  iconName_not?: InputMaybe<Scalars['String']>;
  iconName_not_contains?: InputMaybe<Scalars['String']>;
  iconName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  titleFlag?: InputMaybe<Scalars['String']>;
  titleFlag_contains?: InputMaybe<Scalars['String']>;
  titleFlag_exists?: InputMaybe<Scalars['Boolean']>;
  titleFlag_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  titleFlag_not?: InputMaybe<Scalars['String']>;
  titleFlag_not_contains?: InputMaybe<Scalars['String']>;
  titleFlag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfCarouselWithTextNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCarouselWithTextNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCarouselWithTextNestedFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktopCarrousel?: InputMaybe<Scalars['String']>;
  desktopCarrousel_contains?: InputMaybe<Scalars['String']>;
  desktopCarrousel_exists?: InputMaybe<Scalars['Boolean']>;
  desktopCarrousel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  desktopCarrousel_not?: InputMaybe<Scalars['String']>;
  desktopCarrousel_not_contains?: InputMaybe<Scalars['String']>;
  desktopCarrousel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  mobileCarrousel?: InputMaybe<Scalars['String']>;
  mobileCarrousel_contains?: InputMaybe<Scalars['String']>;
  mobileCarrousel_exists?: InputMaybe<Scalars['Boolean']>;
  mobileCarrousel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mobileCarrousel_not?: InputMaybe<Scalars['String']>;
  mobileCarrousel_not_contains?: InputMaybe<Scalars['String']>;
  mobileCarrousel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  tabletCarrousel?: InputMaybe<Scalars['String']>;
  tabletCarrousel_contains?: InputMaybe<Scalars['String']>;
  tabletCarrousel_exists?: InputMaybe<Scalars['Boolean']>;
  tabletCarrousel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabletCarrousel_not?: InputMaybe<Scalars['String']>;
  tabletCarrousel_not_contains?: InputMaybe<Scalars['String']>;
  tabletCarrousel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfContactInfoWrapperNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfContactInfoWrapperNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfContactInfoWrapperNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfContactSectionWrapperNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfContactSectionWrapperNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfContactSectionWrapperNestedFilter>>>;
  contentSectionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfCtaNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCtaNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCtaNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  styling?: InputMaybe<Scalars['String']>;
  styling_contains?: InputMaybe<Scalars['String']>;
  styling_exists?: InputMaybe<Scalars['Boolean']>;
  styling_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  styling_not?: InputMaybe<Scalars['String']>;
  styling_not_contains?: InputMaybe<Scalars['String']>;
  styling_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  testAutomationAttribute?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_contains?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_exists?: InputMaybe<Scalars['Boolean']>;
  testAutomationAttribute_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  testAutomationAttribute_not?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_not_contains?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfFaqItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfFaqItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfFaqItemNestedFilter>>>;
  answer_contains?: InputMaybe<Scalars['String']>;
  answer_exists?: InputMaybe<Scalars['Boolean']>;
  answer_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  question?: InputMaybe<Scalars['String']>;
  question_contains?: InputMaybe<Scalars['String']>;
  question_exists?: InputMaybe<Scalars['Boolean']>;
  question_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  question_not?: InputMaybe<Scalars['String']>;
  question_not_contains?: InputMaybe<Scalars['String']>;
  question_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfHeroLinkItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHeroLinkItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHeroLinkItemNestedFilter>>>;
  automationId?: InputMaybe<Scalars['String']>;
  automationId_contains?: InputMaybe<Scalars['String']>;
  automationId_exists?: InputMaybe<Scalars['Boolean']>;
  automationId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  automationId_not?: InputMaybe<Scalars['String']>;
  automationId_not_contains?: InputMaybe<Scalars['String']>;
  automationId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkText?: InputMaybe<Scalars['String']>;
  linkText_contains?: InputMaybe<Scalars['String']>;
  linkText_exists?: InputMaybe<Scalars['Boolean']>;
  linkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkText_not?: InputMaybe<Scalars['String']>;
  linkText_not_contains?: InputMaybe<Scalars['String']>;
  linkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  testAutomationAttribute?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_contains?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_exists?: InputMaybe<Scalars['Boolean']>;
  testAutomationAttribute_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  testAutomationAttribute_not?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_not_contains?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfImageWithTextNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfImageWithTextNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfImageWithTextNestedFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktopTextAlignment?: InputMaybe<Scalars['String']>;
  desktopTextAlignment_contains?: InputMaybe<Scalars['String']>;
  desktopTextAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  desktopTextAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  desktopTextAlignment_not?: InputMaybe<Scalars['String']>;
  desktopTextAlignment_not_contains?: InputMaybe<Scalars['String']>;
  desktopTextAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  mobileTextAlignment?: InputMaybe<Scalars['String']>;
  mobileTextAlignment_contains?: InputMaybe<Scalars['String']>;
  mobileTextAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  mobileTextAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mobileTextAlignment_not?: InputMaybe<Scalars['String']>;
  mobileTextAlignment_not_contains?: InputMaybe<Scalars['String']>;
  mobileTextAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  subline_contains?: InputMaybe<Scalars['String']>;
  subline_exists?: InputMaybe<Scalars['Boolean']>;
  subline_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  tabletTextAlignment?: InputMaybe<Scalars['String']>;
  tabletTextAlignment_contains?: InputMaybe<Scalars['String']>;
  tabletTextAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  tabletTextAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabletTextAlignment_not?: InputMaybe<Scalars['String']>;
  tabletTextAlignment_not_contains?: InputMaybe<Scalars['String']>;
  tabletTextAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfLinkWithIconNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfLinkWithIconNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfLinkWithIconNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  iconName?: InputMaybe<Scalars['String']>;
  iconName_contains?: InputMaybe<Scalars['String']>;
  iconName_exists?: InputMaybe<Scalars['Boolean']>;
  iconName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  iconName_not?: InputMaybe<Scalars['String']>;
  iconName_not_contains?: InputMaybe<Scalars['String']>;
  iconName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfLinksSectionWrapperNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfLinksSectionWrapperNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfLinksSectionWrapperNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfMediaWrapperV2NestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfMediaWrapperV2NestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfMediaWrapperV2NestedFilter>>>;
  altText?: InputMaybe<Scalars['String']>;
  altText_contains?: InputMaybe<Scalars['String']>;
  altText_exists?: InputMaybe<Scalars['Boolean']>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  altText_not?: InputMaybe<Scalars['String']>;
  altText_not_contains?: InputMaybe<Scalars['String']>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cloudinaryDesktopImage_exists?: InputMaybe<Scalars['Boolean']>;
  cloudinaryMobileImage_exists?: InputMaybe<Scalars['Boolean']>;
  cloudinaryTabletImage_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lazyloading?: InputMaybe<Scalars['Boolean']>;
  lazyloading_exists?: InputMaybe<Scalars['Boolean']>;
  lazyloading_not?: InputMaybe<Scalars['Boolean']>;
  staticImage?: InputMaybe<Scalars['String']>;
  staticImage_contains?: InputMaybe<Scalars['String']>;
  staticImage_exists?: InputMaybe<Scalars['Boolean']>;
  staticImage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  staticImage_not?: InputMaybe<Scalars['String']>;
  staticImage_not_contains?: InputMaybe<Scalars['String']>;
  staticImage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfNavigationGroupNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNavigationGroupNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNavigationGroupNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fontStyling?: InputMaybe<Scalars['String']>;
  fontStyling_contains?: InputMaybe<Scalars['String']>;
  fontStyling_exists?: InputMaybe<Scalars['Boolean']>;
  fontStyling_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fontStyling_not?: InputMaybe<Scalars['String']>;
  fontStyling_not_contains?: InputMaybe<Scalars['String']>;
  fontStyling_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hasTopDivider?: InputMaybe<Scalars['Boolean']>;
  hasTopDivider_exists?: InputMaybe<Scalars['Boolean']>;
  hasTopDivider_not?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  itemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_not?: InputMaybe<Scalars['String']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfNavigationItemLableNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNavigationItemLableNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNavigationItemLableNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  showIconSubMenuOnly?: InputMaybe<Scalars['String']>;
  showIconSubMenuOnly_contains?: InputMaybe<Scalars['String']>;
  showIconSubMenuOnly_exists?: InputMaybe<Scalars['Boolean']>;
  showIconSubMenuOnly_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  showIconSubMenuOnly_not?: InputMaybe<Scalars['String']>;
  showIconSubMenuOnly_not_contains?: InputMaybe<Scalars['String']>;
  showIconSubMenuOnly_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subMenuArrow?: InputMaybe<Scalars['String']>;
  subMenuArrow_contains?: InputMaybe<Scalars['String']>;
  subMenuArrow_exists?: InputMaybe<Scalars['Boolean']>;
  subMenuArrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subMenuArrow_not?: InputMaybe<Scalars['String']>;
  subMenuArrow_not_contains?: InputMaybe<Scalars['String']>;
  subMenuArrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subMenuText?: InputMaybe<Scalars['String']>;
  subMenuText_contains?: InputMaybe<Scalars['String']>;
  subMenuText_exists?: InputMaybe<Scalars['Boolean']>;
  subMenuText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subMenuText_not?: InputMaybe<Scalars['String']>;
  subMenuText_not_contains?: InputMaybe<Scalars['String']>;
  subMenuText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subText_contains?: InputMaybe<Scalars['String']>;
  subText_exists?: InputMaybe<Scalars['Boolean']>;
  subText_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  testAutomationAttribute?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_contains?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_exists?: InputMaybe<Scalars['Boolean']>;
  testAutomationAttribute_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  testAutomationAttribute_not?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_not_contains?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  testAutomationClass?: InputMaybe<Scalars['String']>;
  testAutomationClass_contains?: InputMaybe<Scalars['String']>;
  testAutomationClass_exists?: InputMaybe<Scalars['Boolean']>;
  testAutomationClass_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  testAutomationClass_not?: InputMaybe<Scalars['String']>;
  testAutomationClass_not_contains?: InputMaybe<Scalars['String']>;
  testAutomationClass_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text?: InputMaybe<Scalars['String']>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_not?: InputMaybe<Scalars['String']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfNavigationItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNavigationItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNavigationItemNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  groupsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfNavigationLinkNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNavigationLinkNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNavigationLinkNestedFilter>>>;
  absoluteUrl?: InputMaybe<Scalars['String']>;
  absoluteUrl_contains?: InputMaybe<Scalars['String']>;
  absoluteUrl_exists?: InputMaybe<Scalars['Boolean']>;
  absoluteUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  absoluteUrl_not?: InputMaybe<Scalars['String']>;
  absoluteUrl_not_contains?: InputMaybe<Scalars['String']>;
  absoluteUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  automationId?: InputMaybe<Scalars['String']>;
  automationId_contains?: InputMaybe<Scalars['String']>;
  automationId_exists?: InputMaybe<Scalars['Boolean']>;
  automationId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  automationId_not?: InputMaybe<Scalars['String']>;
  automationId_not_contains?: InputMaybe<Scalars['String']>;
  automationId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraParameters?: InputMaybe<Scalars['String']>;
  extraParameters_contains?: InputMaybe<Scalars['String']>;
  extraParameters_exists?: InputMaybe<Scalars['Boolean']>;
  extraParameters_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  extraParameters_not?: InputMaybe<Scalars['String']>;
  extraParameters_not_contains?: InputMaybe<Scalars['String']>;
  extraParameters_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkType?: InputMaybe<Scalars['String']>;
  linkType_contains?: InputMaybe<Scalars['String']>;
  linkType_exists?: InputMaybe<Scalars['Boolean']>;
  linkType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkType_not?: InputMaybe<Scalars['String']>;
  linkType_not_contains?: InputMaybe<Scalars['String']>;
  linkType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  referenceId?: InputMaybe<Scalars['String']>;
  referenceId_contains?: InputMaybe<Scalars['String']>;
  referenceId_exists?: InputMaybe<Scalars['Boolean']>;
  referenceId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  referenceId_not?: InputMaybe<Scalars['String']>;
  referenceId_not_contains?: InputMaybe<Scalars['String']>;
  referenceId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relativeUrl?: InputMaybe<Scalars['String']>;
  relativeUrl_contains?: InputMaybe<Scalars['String']>;
  relativeUrl_exists?: InputMaybe<Scalars['Boolean']>;
  relativeUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relativeUrl_not?: InputMaybe<Scalars['String']>;
  relativeUrl_not_contains?: InputMaybe<Scalars['String']>;
  relativeUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPanelButtonWithIconNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPanelButtonWithIconNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPanelButtonWithIconNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  iconName?: InputMaybe<Scalars['String']>;
  iconName_contains?: InputMaybe<Scalars['String']>;
  iconName_exists?: InputMaybe<Scalars['Boolean']>;
  iconName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  iconName_not?: InputMaybe<Scalars['String']>;
  iconName_not_contains?: InputMaybe<Scalars['String']>;
  iconName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  testAutomationAttribute?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_contains?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_exists?: InputMaybe<Scalars['Boolean']>;
  testAutomationAttribute_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  testAutomationAttribute_not?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_not_contains?: InputMaybe<Scalars['String']>;
  testAutomationAttribute_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
};

export type CfPanelContentWrapperNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPanelContentWrapperNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPanelContentWrapperNestedFilter>>>;
  altText?: InputMaybe<Scalars['String']>;
  altText_contains?: InputMaybe<Scalars['String']>;
  altText_exists?: InputMaybe<Scalars['Boolean']>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  altText_not?: InputMaybe<Scalars['String']>;
  altText_not_contains?: InputMaybe<Scalars['String']>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cloudinaryImage_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  panelContentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfPhoneInfoValueNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPhoneInfoValueNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPhoneInfoValueNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  countryCode?: InputMaybe<Scalars['String']>;
  countryCode_contains?: InputMaybe<Scalars['String']>;
  countryCode_exists?: InputMaybe<Scalars['Boolean']>;
  countryCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  countryCode_not?: InputMaybe<Scalars['String']>;
  countryCode_not_contains?: InputMaybe<Scalars['String']>;
  countryCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneDisplay?: InputMaybe<Scalars['String']>;
  phoneDisplay_contains?: InputMaybe<Scalars['String']>;
  phoneDisplay_exists?: InputMaybe<Scalars['Boolean']>;
  phoneDisplay_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneDisplay_not?: InputMaybe<Scalars['String']>;
  phoneDisplay_not_contains?: InputMaybe<Scalars['String']>;
  phoneDisplay_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneValue?: InputMaybe<Scalars['String']>;
  phoneValue_contains?: InputMaybe<Scalars['String']>;
  phoneValue_exists?: InputMaybe<Scalars['Boolean']>;
  phoneValue_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneValue_not?: InputMaybe<Scalars['String']>;
  phoneValue_not_contains?: InputMaybe<Scalars['String']>;
  phoneValue_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPriceInfoValueNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPriceInfoValueNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPriceInfoValueNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  currencyCode?: InputMaybe<Scalars['String']>;
  currencyCode_contains?: InputMaybe<Scalars['String']>;
  currencyCode_exists?: InputMaybe<Scalars['Boolean']>;
  currencyCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currencyCode_not?: InputMaybe<Scalars['String']>;
  currencyCode_not_contains?: InputMaybe<Scalars['String']>;
  currencyCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  priceValue?: InputMaybe<Scalars['Int']>;
  priceValue_exists?: InputMaybe<Scalars['Boolean']>;
  priceValue_gt?: InputMaybe<Scalars['Int']>;
  priceValue_gte?: InputMaybe<Scalars['Int']>;
  priceValue_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  priceValue_lt?: InputMaybe<Scalars['Int']>;
  priceValue_lte?: InputMaybe<Scalars['Int']>;
  priceValue_not?: InputMaybe<Scalars['Int']>;
  priceValue_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfProductListingNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfProductListingNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfProductListingNestedFilter>>>;
  categoryId?: InputMaybe<Scalars['String']>;
  categoryId_contains?: InputMaybe<Scalars['String']>;
  categoryId_exists?: InputMaybe<Scalars['Boolean']>;
  categoryId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categoryId_not?: InputMaybe<Scalars['String']>;
  categoryId_not_contains?: InputMaybe<Scalars['String']>;
  categoryId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  qtyOfProducts?: InputMaybe<Scalars['Int']>;
  qtyOfProducts_exists?: InputMaybe<Scalars['Boolean']>;
  qtyOfProducts_gt?: InputMaybe<Scalars['Int']>;
  qtyOfProducts_gte?: InputMaybe<Scalars['Int']>;
  qtyOfProducts_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  qtyOfProducts_lt?: InputMaybe<Scalars['Int']>;
  qtyOfProducts_lte?: InputMaybe<Scalars['Int']>;
  qtyOfProducts_not?: InputMaybe<Scalars['Int']>;
  qtyOfProducts_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPromotionEventsNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPromotionEventsNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPromotionEventsNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionClick?: InputMaybe<Scalars['String']>;
  promotionClick_contains?: InputMaybe<Scalars['String']>;
  promotionClick_exists?: InputMaybe<Scalars['Boolean']>;
  promotionClick_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionClick_not?: InputMaybe<Scalars['String']>;
  promotionClick_not_contains?: InputMaybe<Scalars['String']>;
  promotionClick_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionCreative?: InputMaybe<Scalars['String']>;
  promotionCreative_contains?: InputMaybe<Scalars['String']>;
  promotionCreative_exists?: InputMaybe<Scalars['Boolean']>;
  promotionCreative_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionCreative_not?: InputMaybe<Scalars['String']>;
  promotionCreative_not_contains?: InputMaybe<Scalars['String']>;
  promotionCreative_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionDimension24?: InputMaybe<Scalars['String']>;
  promotionDimension24_contains?: InputMaybe<Scalars['String']>;
  promotionDimension24_exists?: InputMaybe<Scalars['Boolean']>;
  promotionDimension24_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionDimension24_not?: InputMaybe<Scalars['String']>;
  promotionDimension24_not_contains?: InputMaybe<Scalars['String']>;
  promotionDimension24_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEventAction?: InputMaybe<Scalars['String']>;
  promotionEventAction_contains?: InputMaybe<Scalars['String']>;
  promotionEventAction_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEventAction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEventAction_not?: InputMaybe<Scalars['String']>;
  promotionEventAction_not_contains?: InputMaybe<Scalars['String']>;
  promotionEventAction_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEventCategory?: InputMaybe<Scalars['String']>;
  promotionEventCategory_contains?: InputMaybe<Scalars['String']>;
  promotionEventCategory_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEventCategory_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEventCategory_not?: InputMaybe<Scalars['String']>;
  promotionEventCategory_not_contains?: InputMaybe<Scalars['String']>;
  promotionEventCategory_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEventLabel?: InputMaybe<Scalars['String']>;
  promotionEventLabel_contains?: InputMaybe<Scalars['String']>;
  promotionEventLabel_exists?: InputMaybe<Scalars['Boolean']>;
  promotionEventLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEventLabel_not?: InputMaybe<Scalars['String']>;
  promotionEventLabel_not_contains?: InputMaybe<Scalars['String']>;
  promotionEventLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionPosition?: InputMaybe<Scalars['Int']>;
  promotionPosition_exists?: InputMaybe<Scalars['Boolean']>;
  promotionPosition_gt?: InputMaybe<Scalars['Int']>;
  promotionPosition_gte?: InputMaybe<Scalars['Int']>;
  promotionPosition_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotionPosition_lt?: InputMaybe<Scalars['Int']>;
  promotionPosition_lte?: InputMaybe<Scalars['Int']>;
  promotionPosition_not?: InputMaybe<Scalars['Int']>;
  promotionPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotionView?: InputMaybe<Scalars['String']>;
  promotionView_contains?: InputMaybe<Scalars['String']>;
  promotionView_exists?: InputMaybe<Scalars['Boolean']>;
  promotionView_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionView_not?: InputMaybe<Scalars['String']>;
  promotionView_not_contains?: InputMaybe<Scalars['String']>;
  promotionView_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfQuoteSliderItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfQuoteSliderItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfQuoteSliderItemNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  quoteTitleImage_exists?: InputMaybe<Scalars['Boolean']>;
  quote_contains?: InputMaybe<Scalars['String']>;
  quote_exists?: InputMaybe<Scalars['Boolean']>;
  quote_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfSeoMetadataNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSeoMetadataNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSeoMetadataNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywords?: InputMaybe<Scalars['String']>;
  keywords_contains?: InputMaybe<Scalars['String']>;
  keywords_exists?: InputMaybe<Scalars['Boolean']>;
  keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywords_not?: InputMaybe<Scalars['String']>;
  keywords_not_contains?: InputMaybe<Scalars['String']>;
  keywords_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageDescription_contains?: InputMaybe<Scalars['String']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfTuxedoColorOptionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTuxedoColorOptionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTuxedoColorOptionNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  optionName?: InputMaybe<Scalars['String']>;
  optionName_contains?: InputMaybe<Scalars['String']>;
  optionName_exists?: InputMaybe<Scalars['Boolean']>;
  optionName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  optionName_not?: InputMaybe<Scalars['String']>;
  optionName_not_contains?: InputMaybe<Scalars['String']>;
  optionName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnailImage_exists?: InputMaybe<Scalars['Boolean']>;
  tuxedoColor?: InputMaybe<Scalars['String']>;
  tuxedoColor_contains?: InputMaybe<Scalars['String']>;
  tuxedoColor_exists?: InputMaybe<Scalars['Boolean']>;
  tuxedoColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tuxedoColor_not?: InputMaybe<Scalars['String']>;
  tuxedoColor_not_contains?: InputMaybe<Scalars['String']>;
  tuxedoColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfTuxedoProductOptionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTuxedoProductOptionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTuxedoProductOptionNestedFilter>>>;
  campaign?: InputMaybe<Scalars['String']>;
  campaign_contains?: InputMaybe<Scalars['String']>;
  campaign_exists?: InputMaybe<Scalars['Boolean']>;
  campaign_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaign_not?: InputMaybe<Scalars['String']>;
  campaign_not_contains?: InputMaybe<Scalars['String']>;
  campaign_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color?: InputMaybe<Scalars['String']>;
  color_contains?: InputMaybe<Scalars['String']>;
  color_exists?: InputMaybe<Scalars['Boolean']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_not?: InputMaybe<Scalars['String']>;
  color_not_contains?: InputMaybe<Scalars['String']>;
  color_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tuxedoStyle?: InputMaybe<Scalars['String']>;
  tuxedoStyle_contains?: InputMaybe<Scalars['String']>;
  tuxedoStyle_exists?: InputMaybe<Scalars['Boolean']>;
  tuxedoStyle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tuxedoStyle_not?: InputMaybe<Scalars['String']>;
  tuxedoStyle_not_contains?: InputMaybe<Scalars['String']>;
  tuxedoStyle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  waistcoatLayerInfo?: InputMaybe<Scalars['String']>;
  waistcoatLayerInfo_contains?: InputMaybe<Scalars['String']>;
  waistcoatLayerInfo_exists?: InputMaybe<Scalars['Boolean']>;
  waistcoatLayerInfo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  waistcoatLayerInfo_not?: InputMaybe<Scalars['String']>;
  waistcoatLayerInfo_not_contains?: InputMaybe<Scalars['String']>;
  waistcoatLayerInfo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  waistcoatProductId?: InputMaybe<Scalars['String']>;
  waistcoatProductId_contains?: InputMaybe<Scalars['String']>;
  waistcoatProductId_exists?: InputMaybe<Scalars['Boolean']>;
  waistcoatProductId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  waistcoatProductId_not?: InputMaybe<Scalars['String']>;
  waistcoatProductId_not_contains?: InputMaybe<Scalars['String']>;
  waistcoatProductId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfTuxedoStyleOptionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTuxedoStyleOptionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTuxedoStyleOptionNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  optionName?: InputMaybe<Scalars['String']>;
  optionName_contains?: InputMaybe<Scalars['String']>;
  optionName_exists?: InputMaybe<Scalars['Boolean']>;
  optionName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  optionName_not?: InputMaybe<Scalars['String']>;
  optionName_not_contains?: InputMaybe<Scalars['String']>;
  optionName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnailImage_exists?: InputMaybe<Scalars['Boolean']>;
  tuxedoStyle?: InputMaybe<Scalars['String']>;
  tuxedoStyle_contains?: InputMaybe<Scalars['String']>;
  tuxedoStyle_exists?: InputMaybe<Scalars['Boolean']>;
  tuxedoStyle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tuxedoStyle_not?: InputMaybe<Scalars['String']>;
  tuxedoStyle_not_contains?: InputMaybe<Scalars['String']>;
  tuxedoStyle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfcampaignSectionsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfcampaignSectionsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfcampaignSectionsMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfconfiguratorStepsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfconfiguratorStepsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfconfiguratorStepsMultiTypeNestedFilter>>>;
  categoryStep?: InputMaybe<Scalars['String']>;
  categoryStep_contains?: InputMaybe<Scalars['String']>;
  categoryStep_exists?: InputMaybe<Scalars['Boolean']>;
  categoryStep_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categoryStep_not?: InputMaybe<Scalars['String']>;
  categoryStep_not_contains?: InputMaybe<Scalars['String']>;
  categoryStep_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageType?: InputMaybe<Scalars['String']>;
  imageType_contains?: InputMaybe<Scalars['String']>;
  imageType_exists?: InputMaybe<Scalars['Boolean']>;
  imageType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageType_not?: InputMaybe<Scalars['String']>;
  imageType_not_contains?: InputMaybe<Scalars['String']>;
  imageType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageFocalPoint?: InputMaybe<Scalars['String']>;
  previewImageFocalPoint_contains?: InputMaybe<Scalars['String']>;
  previewImageFocalPoint_exists?: InputMaybe<Scalars['Boolean']>;
  previewImageFocalPoint_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageFocalPoint_not?: InputMaybe<Scalars['String']>;
  previewImageFocalPoint_not_contains?: InputMaybe<Scalars['String']>;
  previewImageFocalPoint_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageZoom?: InputMaybe<Scalars['String']>;
  previewImageZoom_contains?: InputMaybe<Scalars['String']>;
  previewImageZoom_exists?: InputMaybe<Scalars['Boolean']>;
  previewImageZoom_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewImageZoom_not?: InputMaybe<Scalars['String']>;
  previewImageZoom_not_contains?: InputMaybe<Scalars['String']>;
  previewImageZoom_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfcontentMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfcontentMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfcontentMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfcontentSectionsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfcontentSectionsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfcontentSectionsMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfmediaContentMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfmediaContentMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfmediaContentMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfproductOptionsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfproductOptionsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfproductOptionsMultiTypeNestedFilter>>>;
  baseColor?: InputMaybe<Scalars['String']>;
  baseColor_contains?: InputMaybe<Scalars['String']>;
  baseColor_exists?: InputMaybe<Scalars['Boolean']>;
  baseColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  baseColor_not?: InputMaybe<Scalars['String']>;
  baseColor_not_contains?: InputMaybe<Scalars['String']>;
  baseColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productId?: InputMaybe<Scalars['String']>;
  productId_contains?: InputMaybe<Scalars['String']>;
  productId_exists?: InputMaybe<Scalars['Boolean']>;
  productId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productId_not?: InputMaybe<Scalars['String']>;
  productId_not_contains?: InputMaybe<Scalars['String']>;
  productId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productName?: InputMaybe<Scalars['String']>;
  productName_contains?: InputMaybe<Scalars['String']>;
  productName_exists?: InputMaybe<Scalars['Boolean']>;
  productName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productName_not?: InputMaybe<Scalars['String']>;
  productName_not_contains?: InputMaybe<Scalars['String']>;
  productName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnailImage_exists?: InputMaybe<Scalars['Boolean']>;
};

export type CfuspListMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfuspListMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfuspListMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta_exists?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  iconName?: InputMaybe<Scalars['String']>;
  iconName_contains?: InputMaybe<Scalars['String']>;
  iconName_exists?: InputMaybe<Scalars['Boolean']>;
  iconName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  iconName_not?: InputMaybe<Scalars['String']>;
  iconName_not_contains?: InputMaybe<Scalars['String']>;
  iconName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
    