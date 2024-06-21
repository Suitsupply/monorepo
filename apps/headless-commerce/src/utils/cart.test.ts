import type {
  CustomMadeLineItem,
  GiftCertificateItem,
  ProductLineItem,
} from '@headless-commerce/gql/generated/graphql';
import { describe, expect, it } from 'vitest';

import { getCartTotalItems } from './cart';

describe('cart', () => {
  describe('getCartCount', () => {
    it('should return the correct count', () => {
      const actual = getCartTotalItems(
        [
          {
            quantity: 1,
          } as CustomMadeLineItem,
          {
            quantity: 2,
          } as ProductLineItem,
        ],
        [
          {
            price: 123,
          } as GiftCertificateItem,
        ],
      );

      expect(actual).toBe(4);
    });
  });
});
