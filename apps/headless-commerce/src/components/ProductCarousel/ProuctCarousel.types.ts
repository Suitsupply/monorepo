import type { SiteInfo } from '@headless-commerce/gql/generated/graphql';

export interface ProductCarouselProps {
  categoryId: string | undefined;
  limit: number | undefined;
  siteInfo: SiteInfo;
}
