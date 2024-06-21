/* eslint-disable sonarjs/no-duplicate-string */
import type { BlackTieConfiguratorConfiguratorStepsItem } from '@headless-commerce/gql/generated/graphql';
import { describe, expect, it } from 'vitest';

import type { TuxedoStyleStepOption } from '../components/ClientConfigurator';
import type { StepOption } from '../components/ClientStepOptions/ClientStepOptions';
import { getAllIds, getProductIds, getStyleProductIds } from './productIds';

describe('productIds', () => {
  describe('getProductIds', () => {
    it('should return an empty array if options is empty', () => {
      const steps: unknown[] = [];
      const result = getProductIds(steps as StepOption[]);
      expect(result).toEqual([]);
    });

    it('should return an array of product ids for TuxedoStyle options', () => {
      const steps: unknown[] = [
        {
          __typename: 'TuxedoStyle',
          style: { tuxedoStyle: 'Classic' },
          product: {
            tuxedoStyle: 'Classic',
            waistcoatProductId: 'waistcoat-1',
          },
        },
        {
          __typename: 'TuxedoStyle',
          style: { tuxedoStyle: 'Modern' },
          product: {
            tuxedoStyle: 'Modern',
            waistcoatProductId: 'waistcoat-2',
          },
        },
      ];

      const result = getProductIds(steps as StepOption[]);
      expect(result).toEqual(['waistcoat-1', 'waistcoat-2']);
    });

    it('should return an array of product ids for ProductOptionConfigurator and ProductOptionStaticImageConfigurator options', () => {
      const options = [
        {
          __typename: 'ProductOptionConfigurator',
          productId: 'product1',
        },
        {
          __typename: 'ProductOptionStaticImageConfigurator',
          productId: 'product2',
        },
      ];
      const result = getProductIds(options as StepOption[]);
      expect(result).toEqual(['product1', 'product2']);
    });
  });

  describe('getStyleProductIds', () => {
    it('should return an object with style product ids', () => {
      const option = {
        __typename: 'TuxedoStyle',
        product: {
          tuxedoStyle: 'classic',
          waistcoatProductId: 'waistcoat1',
        },
      };
      const result = getStyleProductIds(option as unknown as TuxedoStyleStepOption);
      expect(result).toEqual({
        style: 'classic',
        waistcoatProductId: 'waistcoat1',
      });
    });
  });

  describe('getAllIds', () => {
    it('should return an empty array if configuratorSteps is empty', () => {
      const configuratorSteps: BlackTieConfiguratorConfiguratorStepsItem[] = [];
      const result = getAllIds(configuratorSteps, 'black');
      expect(result).toEqual([]);
    });

    it('should return an array of product ids for mixed configuratorSteps', () => {
      const configuratorSteps: Array<BlackTieConfiguratorConfiguratorStepsItem> = [
        {
          __typename: 'TuxedoStyleStep',
          tuxedoStyleOptionsCollection: {
            items: [
              {
                contentfulMetadata: {
                  tags: [],
                },
                sys: {
                  id: '1',
                  environmentId: 'master',
                  spaceId: 'space',
                },
                tuxedoStyle: 'Classic',
              },
            ],
            limit: 1000,
            skip: 0,
            total: 1,
          },
          tuxedoProductOptionsCollection: {
            items: [
              {
                tuxedoStyle: 'Classic',
                waistcoatProductId: 'waistcoat-1',
                color: 'black',
                contentfulMetadata: {
                  tags: [],
                },
                sys: {
                  id: '1',
                  environmentId: 'master',
                  spaceId: 'space',
                },
              },
            ],
            limit: 1000,
            skip: 0,
            total: 1,
          },
          contentfulMetadata: {
            tags: [],
          },
          sys: {
            id: '1',
            environmentId: 'master',
            spaceId: 'space',
          },
        },
        {
          __typename: 'TuxedoStyleStep',
          tuxedoStyleOptionsCollection: {
            items: [
              {
                contentfulMetadata: {
                  tags: [],
                },
                sys: {
                  id: '1',
                  environmentId: 'master',
                  spaceId: 'space',
                },
                tuxedoStyle: 'Modern',
              },
            ],
            limit: 1000,
            skip: 0,
            total: 1,
          },
          tuxedoProductOptionsCollection: {
            items: [
              {
                tuxedoStyle: 'Modern',
                waistcoatProductId: 'waistcoat-2',
                color: 'black',
                contentfulMetadata: {
                  tags: [],
                },
                sys: {
                  id: '1',
                  environmentId: 'master',
                  spaceId: 'space',
                },
              },
            ],
            limit: 1000,
            skip: 0,
            total: 1,
          },
          contentfulMetadata: {
            tags: [],
          },
          sys: {
            id: '1',
            environmentId: 'master',
            spaceId: 'space',
          },
        },
        {
          __typename: 'ProductStepConfigurator',
          productOptionsCollection: {
            items: [
              {
                productId: 'Option 1',
                contentfulMetadata: {
                  tags: [],
                },
                sys: {
                  id: '1',
                  environmentId: 'master',
                  spaceId: 'space',
                },
              },
              {
                productId: 'Option 2',
                contentfulMetadata: {
                  tags: [],
                },
                sys: {
                  id: '1',
                  environmentId: 'master',
                  spaceId: 'space',
                },
              },
            ],
            limit: 1000,
            skip: 0,
            total: 2,
          },
          contentfulMetadata: {
            tags: [],
          },
          sys: {
            id: '1',
            environmentId: 'master',
            spaceId: 'space',
          },
        },
      ];

      const result = getAllIds(configuratorSteps, 'black');

      expect(result).toEqual(['waistcoat-1', 'waistcoat-2', 'Option 1', 'Option 2']);
    });
  });
});
