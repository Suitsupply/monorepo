import ClientTerms from '@susu/headless-commerce/components/Footer/FooterBottomBlock/ClientTerms';
import ClientLocaleDisplay from '@susu/headless-commerce/components/LocaleDisplay/ClientLocaleDisplay';
import type { Locale } from '@susu/headless-commerce/config/locale';
import type {
  FooterBottomBlockQuery,
  FooterBottomBlockQueryVariables,
} from '@susu/headless-commerce/gql/generated/footerBottomBlock.urql';
import type { Cta, LinkWithImage, SiteId, SocialLinksWrapper } from '@susu/headless-commerce/gql/generated/graphql';
import { countries } from '@susu/headless-commerce/utils/configuration/country';
import { getCountryCode } from '@susu/headless-commerce/utils/localeUtils';
import Image from 'next/image';
import type { OperationResult } from 'urql';

import ClientCSR from './ClientCSR';
import ClientSocialMedia from './ClientSocialMedia';
import styles from './FooterBottom.module.scss';

export type FooterBottomBlockProps = {
  locale: Locale;
  query: OperationResult<FooterBottomBlockQuery, FooterBottomBlockQueryVariables>;
};

export default function FooterBottomBlock({ locale, query }: Readonly<FooterBottomBlockProps>) {
  const countryCode = getCountryCode(locale);
  const country = countries[countryCode];

  const linkWithImage = query.data?.footerBottomBlock?.contentSectionsCollection?.items?.find(
    item => item?.__typename === 'LinkWithImage',
  ) as LinkWithImage;

  const { contentSectionsCollection } = (query.data?.footerBottomBlock?.contentSectionsCollection?.items?.find(
    item => item?.__typename === 'SocialLinksWrapper',
  ) ?? {}) as SocialLinksWrapper;

  const cta = query.data?.footerBottomBlock?.contentSectionsCollection?.items?.find(
    item => item?.__typename === 'Cta',
  ) as Cta;

  return (
    <div className={styles['footer-bottom']}>
      <div className={styles['footer-bottom-image-container']}>
        <ClientCSR linkWithImage={linkWithImage}>
          <Image
            src={linkWithImage.cloudinaryImage[0].secure_url}
            width={46}
            height={20}
            alt={linkWithImage.title as string}
          />
          <span className={styles['footer-bottom__sustainability-image']}>{linkWithImage.title}</span>
        </ClientCSR>
        <div className={styles['footer-bottom-image-social']}>
          <ClientSocialMedia contentSectionsCollection={contentSectionsCollection} />
        </div>
      </div>
      <div className={`${styles['footer-bottom-social-container']}`}>
        <div className={`${styles['footer-bottom-locale-display']}`}>
          <ClientLocaleDisplay colorPalette={'light'} isInsideFooter={true} showIcon={true} />
        </div>
        <div className={`${styles['footer-bottom-social']} caption-regular`}>
          <ClientSocialMedia contentSectionsCollection={contentSectionsCollection} />
        </div>
        <ClientTerms siteID={country.siteID as SiteId} cta={cta} />
      </div>
    </div>
  );
}
