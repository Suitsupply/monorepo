import ProductCard from '@susu/headless-commerce/components/ProductCard/ProductCard';
import type { Locale } from '@susu/headless-commerce/config/locale';
import type {
  CommerceProductsWithImgTransformQuery,
  CommerceProductsWithImgTransformQueryVariables,
} from '@susu/headless-commerce/gql/generated/commerceProductsWithImgTransform.operation';
import type { Product } from '@susu/headless-commerce/gql/generated/graphql';
import type {
  ShopCollectionQuery,
  ShopCollectionQueryVariables,
} from '@susu/headless-commerce/gql/generated/shopCollection.operation';
import type { OperationResult } from 'urql';

import ShopCollectionBlockClient from './ClientShopCollectionBlockSection';
import styles from './ShopCollectionBlockSection.module.scss';

export type ShopCollectioBlockSectionProps = {
  contentfulQuery: OperationResult<ShopCollectionQuery, ShopCollectionQueryVariables>;
  commerceQuery: OperationResult<CommerceProductsWithImgTransformQuery, CommerceProductsWithImgTransformQueryVariables>;
  locale: Locale;
  automationPageId: string;
};

export default function ShopCollectionBlockSection({
  contentfulQuery,
  commerceQuery,
  locale,
  automationPageId,
}: Readonly<ShopCollectioBlockSectionProps>) {
  return (
    <div className={styles['shop-collection']}>
      <div className={styles['shop-collection__title']}>
        <h2 className="display-03-medium" data-testid={`${automationPageId}_shop-collection_title`}>
          {contentfulQuery.data?.shopCollectionBlock?.title}
        </h2>
      </div>
      <div className={styles['shop-collection']}>
        <div className={styles['shop-collection__grid']}>
          {commerceQuery.data?.productSearchWithImgTransform.map((product, index) => {
            const tracking = () => ({
              list: 'Journal',
              listId: 'journal_the-perennial-suit',
              position: index + 1,
            });

            return (
              <div key={product.id} className={styles['shop-collection__product']}>
                <ProductCard
                  locale={locale}
                  product={product as Product}
                  tracking={tracking()}
                  automationPageId={automationPageId}
                />
              </div>
            );
          })}
        </div>
        <div className={styles['shop-collection__button']}>
          <ShopCollectionBlockClient
            contentfulQuery={contentfulQuery}
            commerceQuery={commerceQuery}
            automationPageId={`${automationPageId}_shop-collection`}
          />
        </div>
      </div>
    </div>
  );
}
