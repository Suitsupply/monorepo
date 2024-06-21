import { ImageCarousel } from '@headless-commerce/components/HomepageSections/ImageCarouselBlock/ImageCarousel/ImageCarousel';
import type { Locale } from '@headless-commerce/config/locale';
import type {
  CollectionBlockContentQuery,
  CollectionBlockContentQueryVariables,
} from '@headless-commerce/gql/generated/collectionBlock.operation';
import type { CarouselWithText } from '@headless-commerce/gql/generated/graphql';
import { countries } from '@headless-commerce/utils/configuration/country';
import { generateIdentifier } from '@headless-commerce/utils/identifier';
import { getCountryCode } from '@headless-commerce/utils/localeUtils';
import type { OperationResult } from 'urql';

import styles from './ImageCarouselBlock.module.scss';

export type ImageCarouselBlockProps = {
  query: OperationResult<CollectionBlockContentQuery, CollectionBlockContentQueryVariables>;
  locale: Locale;
};

export default function ImageCarouselBlock({ query, locale }: Readonly<ImageCarouselBlockProps>) {
  const countryCode = getCountryCode(locale);
  const country = countries[countryCode];
  const items = query.data?.imageCarrouselContainer?.carouselBlocksCollection?.items ?? [];

  return (
    <div className={styles['carousel-block']} style={{ '--child-count': `${items.length}` } as React.CSSProperties}>
      {items.map(carousel => (
        <ImageCarousel
          key={carousel?.sys?.id || carousel?.title || generateIdentifier()}
          carousel={carousel as CarouselWithText}
          locale={locale}
          country={country}
        />
      ))}
    </div>
  );
}
