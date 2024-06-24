import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Locale } from '@susu/headless-commerce/config/locale';
import type {
  TextAndButtonBannerQuery,
  TextAndButtonBannerQueryVariables,
} from '@susu/headless-commerce/gql/generated/textAndButtonBanner.operation';
import { countries } from '@susu/headless-commerce/utils/configuration/country';
import { currencies } from '@susu/headless-commerce/utils/configuration/currency';
import { createRenderNodeForPriceInfo } from '@susu/headless-commerce/utils/contentfulUtils';
import { getCountryCode } from '@susu/headless-commerce/utils/localeUtils';
import classNames from 'classnames';
import type { OperationResult } from 'urql';

import { BOOKING_TOOL_LINK_TYPE_LABEL } from '../TextAndImageColumnBannerSection/TextAndImageColumnBannerConstants';
import ClientBookingTool from './ClientBookingTool';
import ClientContextWrapper from './ClientContextWrapper';
import ClientTextAndButtonBannerSection from './ClientTextAndButtonBannerSection';
import type { ComponentSizeType } from './ComponentSizeType';
import { getTypographyClasses } from './getTypographyClasses';
import styles from './TextAndButtonBannerSection.module.scss';

export type TextAndButtonBannerSectionProps = {
  query: OperationResult<TextAndButtonBannerQuery, TextAndButtonBannerQueryVariables>;
  locale: Locale;
  automationPageId: string;
};

export default function TextAndButtonBannerSection({
  query,
  locale,
  automationPageId,
}: Readonly<TextAndButtonBannerSectionProps>) {
  const countryCode = getCountryCode(locale);
  const country = countries[countryCode];

  const IS_BUTTON_BOOKING_TOOL =
    query.data?.textAndButtonBanner?.button?.link?.linkType === BOOKING_TOOL_LINK_TYPE_LABEL;

  if (!query.data?.textAndButtonBanner) {
    return null;
  }

  const { componentSize } = query.data.textAndButtonBanner;
  const { desktopCopyAlignment, mobileCopyAlignment, tabletCopyAlignment } = query.data.textAndButtonBanner;
  const componentSizeClasses = getTypographyClasses(componentSize as ComponentSizeType);
  const componentSizeTitleClass = componentSizeClasses?.componentSizeTitleClass;
  const componentSizeDescriptionClass = componentSizeClasses?.componentSizeDescriptionClass;
  const componentSizeClass = `text-banner__heading-wrapper--${componentSize}`;

  const headingWrapperStyles = classNames(
    styles['text-banner__heading-wrapper'],
    {
      [styles[componentSizeClass]]: true,
    },
    `text-banner__heading--mobile-${mobileCopyAlignment}`,
    `text-banner__heading--tablet-${tabletCopyAlignment}`,
    `text-banner__heading--desktop-${desktopCopyAlignment}`,
  );

  const priceContent = documentToReactComponents(
    query.data?.textAndButtonBanner?.text?.json,
    createRenderNodeForPriceInfo(
      query.data?.textAndButtonBanner?.text,
      country.ecommerce.currencyCode,
      country,
      currencies,
    ),
  );

  const titlePriceContent = documentToReactComponents(
    query.data?.textAndButtonBanner?.title?.json,
    createRenderNodeForPriceInfo(
      query.data?.textAndButtonBanner?.title,
      country.ecommerce.currencyCode,
      country,
      currencies,
    ),
  );

  return (
    <ClientContextWrapper>
      <div className={`${styles['text-banner']} text-banner`}>
        <div className={headingWrapperStyles}>
          <ClientTextAndButtonBannerSection query={query} automationPageId={automationPageId}>
            {query.data?.textAndButtonBanner?.title && (
              <h3
                className={`${styles['text-banner__title']} ${componentSizeTitleClass}`}
                data-testid={`${automationPageId}_text-and-button_title`}
              >
                {titlePriceContent}
              </h3>
            )}
            {query.data?.textAndButtonBanner?.text?.json ? (
              <span
                className={`${styles['text-banner__subtitle']} ${componentSizeDescriptionClass}`}
                data-testid={`${automationPageId}_text-and-button_subtitle`}
              >
                {priceContent}
              </span>
            ) : null}
          </ClientTextAndButtonBannerSection>
        </div>
      </div>

      {IS_BUTTON_BOOKING_TOOL && <ClientBookingTool />}
    </ClientContextWrapper>
  );
}
