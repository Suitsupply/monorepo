import type { Locale } from '@headless-commerce/config/locale';
import type { MediaWrapperV2 } from '@headless-commerce/gql/generated/graphql';
import type {
  TextAndButtonBannerQuery,
  TextAndButtonBannerQueryVariables,
} from '@headless-commerce/gql/generated/textAndButtonBanner.operation';
import type {
  TextAndImageColumnBannerQuery,
  TextAndImageColumnBannerQueryVariables,
} from '@headless-commerce/gql/generated/textAndImageColumnBanner.operation';
import type { OperationResult } from 'urql';

import TextAndButtonBannerSection from '../TextAndButtonBannerSection/TextAndButtonBannerSection';
import ImageSection from './ImageSection';
import { MEDIA_WRAPPER_CONTENTFUL_TYPE } from './TextAndImageColumnBannerConstants';
import styles from './TextAndImageColumnBannerSection.module.scss';

export type TextAndImageColumnBannerSectionProps = {
  textAndImageColumnBannerQuery: OperationResult<TextAndImageColumnBannerQuery, TextAndImageColumnBannerQueryVariables>;
  textAndButtonBannerQuery: OperationResult<TextAndButtonBannerQuery, TextAndButtonBannerQueryVariables>;
  locale: Locale;
  automationPageId: string;
};

export default function TextAndImageColumnBannerSection({
  textAndButtonBannerQuery,
  textAndImageColumnBannerQuery,
  locale,
  automationPageId,
}: Readonly<TextAndImageColumnBannerSectionProps>) {
  if (!textAndImageColumnBannerQuery.data?.textAndImageColumnBanner) {
    return null;
  }

  const { contentOrderDesktop, contentOrderTablet, contentOrderMobile } =
    textAndImageColumnBannerQuery.data.textAndImageColumnBanner;
  const textImageBannerDefaultClass = styles['textimage__banner'];
  const contentOrderDesktopClass = styles[`textimage--desktop-${contentOrderDesktop}`];
  const contentOrderTabletClass = styles[`textimage--tablet-${contentOrderTablet}`];
  const contentOrderMobileClass = styles[`textimage--mobile-${contentOrderMobile}`];
  const contentOrderClasses = `${textImageBannerDefaultClass} ${contentOrderDesktopClass} ${contentOrderTabletClass} ${contentOrderMobileClass}`;

  const imageSectionData = (
    textAndImageColumnBannerQuery.data?.textAndImageColumnBanner?.contentCollection?.items ?? []
  ).filter(item => item?.__typename === MEDIA_WRAPPER_CONTENTFUL_TYPE);

  return (
    <div className={contentOrderClasses}>
      <ImageSection imageSectionData={imageSectionData[0] as MediaWrapperV2} />
      <TextAndButtonBannerSection
        query={textAndButtonBannerQuery}
        locale={locale}
        automationPageId={automationPageId}
      />
    </div>
  );
}
