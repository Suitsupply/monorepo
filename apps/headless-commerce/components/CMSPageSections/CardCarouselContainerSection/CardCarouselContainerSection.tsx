import ImageTextCard from '@susu/headless-commerce/components/ImageTextCard/ImageTextCard';
import type {
  CardCarouselContainerQuery,
  CardCarouselContainerQueryVariables,
} from '@susu/headless-commerce/gql/generated/cardCarouselContainer.operation';
import type { CarouselImageAndTextCard } from '@susu/headless-commerce/gql/generated/graphql';
import { memo } from 'react';
import type { OperationResult } from 'urql';

import styles from './CardCarouselContainerSection.module.scss';
import { ClientCardCarouselContainerSection } from './ClientCardCarouselContainerSection';

export type CardCarouselContainerSectionProps = {
  query: OperationResult<CardCarouselContainerQuery, CardCarouselContainerQueryVariables>;
  automationPageId: string;
};

const CardCarouselContainerSection = memo(function CardCarouselContainerSection({
  query,
  automationPageId,
}: Readonly<CardCarouselContainerSectionProps>) {
  return (
    <>
      <h3
        className={`title-01-medium ${styles['card-carousel__title']}`}
        data-testid={`${automationPageId}_card-carousel_title`}
      >
        {query.data?.cardCarouselContainer?.title}
      </h3>
      <ClientCardCarouselContainerSection>
        <div className={styles['card-carousel__container']}>
          {query?.data?.cardCarouselContainer?.cardsCollection?.items?.map(imageTextCard => {
            return (
              <ImageTextCard
                imageTextCardData={imageTextCard as CarouselImageAndTextCard}
                key={imageTextCard?.sys?.id}
                automationPageId={`${automationPageId}_card-carousel`}
              />
            );
          })}
        </div>
      </ClientCardCarouselContainerSection>
    </>
  );
});

export default CardCarouselContainerSection;
