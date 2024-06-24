import type {
  ButtonButtonRichText,
  Maybe,
  NavigationLink,
  PromotionEvents,
  StickyButtonButtonRichText,
} from '@susu/headless-commerce/gql/generated/graphql';

export type ButtonAlignment = 'center' | 'right' | 'left';
export type ButtonStyle = 'primary' | 'secondary';
export interface IContentButton {
  alignment: {
    mobile: ButtonAlignment;
    tablet: ButtonAlignment;
    desktop: ButtonAlignment;
  };
  visibility: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  fullWidth: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  buttonStyle: ButtonStyle;
  buttonRichText?: Maybe<ButtonButtonRichText | StickyButtonButtonRichText>;
  link?: NavigationLink;
  promotionEvents: PromotionEvents;
  pageType?: string;
}
