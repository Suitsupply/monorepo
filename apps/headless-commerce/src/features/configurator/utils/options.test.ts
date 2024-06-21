/* eslint-disable sonarjs/no-duplicate-string */
import type { BlackTieConfiguratorConfiguratorStepsItem } from '@headless-commerce/gql/generated/graphql';
import { describe, expect, it } from 'vitest';

import type { TuxedoStyleStepOption } from '../components/ClientConfigurator';
import { getFirstValidOption, getStepOptions, isValidStyleOption } from './options';

describe('configurator utils options', () => {
  describe('getStepOptions', () => {
    it('should return product options for ProductStepConfigurator', () => {
      const step = {
        __typename: 'ProductStepConfigurator',
        productOptionsCollection: {
          items: [{ productId: 'Option 1' }, { productId: 'Option 2' }],
        },
      };

      const result = getStepOptions(step as unknown as BlackTieConfiguratorConfiguratorStepsItem, 'black');

      expect(result).toEqual([{ productId: 'Option 1' }, { productId: 'Option 2' }]);
    });

    it('should return tuxedo style options with associated product options for TuxedoStyleStep', () => {
      const step = {
        __typename: 'TuxedoStyleStep',
        tuxedoStyleOptionsCollection: {
          items: [{ tuxedoStyle: 'Classic' }, { tuxedoStyle: 'Modern' }],
        },
        tuxedoProductOptionsCollection: {
          items: [
            { tuxedoStyle: 'Classic', productId: 'Product 1', color: 'black' },
            { tuxedoStyle: 'Modern', productId: 'Product 2', color: 'black' },
          ],
        },
      };

      const result = getStepOptions(step as unknown as BlackTieConfiguratorConfiguratorStepsItem, 'black');

      expect(result).toEqual([
        {
          __typename: 'TuxedoStyle',
          style: { tuxedoStyle: 'Classic' },
          product: { tuxedoStyle: 'Classic', productId: 'Product 1', color: 'black' },
        },
        {
          __typename: 'TuxedoStyle',
          style: { tuxedoStyle: 'Modern' },
          product: { tuxedoStyle: 'Modern', productId: 'Product 2', color: 'black' },
        },
      ]);
    });
  });

  describe('isValidStyleOption', () => {
    it('should return true if all style product ids are available', () => {
      const option = {
        product: {
          tuxedoStyle: 'Classic',
          jacketProductId: 'jacket-1',
          trouserProductId: 'trouser-1',
          waistcoatProductId: 'waistcoat-1',
        },
      };
      const availability = {
        'jacket-1': true,
        'trouser-1': true,
        'waistcoat-1': true,
      };

      const result = isValidStyleOption(option as unknown as TuxedoStyleStepOption, availability);

      expect(result).toBe(true);
    });

    it('should return false if any style product id is not available', () => {
      const option = {
        product: {
          tuxedoStyle: 'Classic',
          waistcoatProductId: 'waistcoat-1',
        },
      };
      const availability = {
        'waistcoat-1': false,
      };

      const result = isValidStyleOption(option as unknown as TuxedoStyleStepOption, availability);

      expect(result).toBe(false);
    });
  });

  describe('getFirstValidOption', () => {
    it('should return the first valid option for TuxedoStyleStep', () => {
      const step = {
        __typename: 'TuxedoStyleStep',
        tuxedoStyleOptionsCollection: {
          items: [{ tuxedoStyle: 'Classic' }, { tuxedoStyle: 'Modern' }],
        },
        tuxedoProductOptionsCollection: {
          items: [
            {
              tuxedoStyle: 'Classic',
              productId: 'Product 1',
              waistcoatProductId: 'waistcoat-1',
              color: 'black',
            },
            {
              tuxedoStyle: 'Modern',
              productId: 'Product 2',
              waistcoatProductId: 'waistcoat-2',
              color: 'black',
            },
          ],
        },
      };

      const availability = {
        'waistcoat-1': false,
        'waistcoat-2': true,
      };

      const result = getFirstValidOption(
        step as unknown as BlackTieConfiguratorConfiguratorStepsItem,
        availability,
        'black',
      );

      expect(result).toEqual({
        __typename: 'TuxedoStyle',
        style: { tuxedoStyle: 'Modern' },
        product: {
          tuxedoStyle: 'Modern',
          productId: 'Product 2',
          color: 'black',
          waistcoatProductId: 'waistcoat-2',
        },
      });
    });

    it('should return the first valid option for ProductStepConfigurator', () => {
      const step = {
        __typename: 'ProductStepConfigurator',
        productOptionsCollection: {
          items: [{ productId: 'Option 1' }, { productId: 'Option 2' }],
        },
      };

      const availability = {
        'Option 1': true,
        'Option 2': false,
      };

      const result = getFirstValidOption(
        step as unknown as BlackTieConfiguratorConfiguratorStepsItem,
        availability,
        'black',
      );

      expect(result).toEqual({ productId: 'Option 1' });
    });

    it('should throw an error if no valid option is found', () => {
      const step = {
        __typename: 'TuxedoStyleStep',
        tuxedoStyleOptionsCollection: {
          items: [{ tuxedoStyle: 'Classic' }, { tuxedoStyle: 'Modern' }],
        },
        tuxedoProductOptionsCollection: {
          items: [
            { tuxedoStyle: 'Classic', product: 'Product 1' },
            { tuxedoStyle: 'Modern', product: 'Product 2' },
          ],
        },
      };
      const availability = {
        'Product 1': false,
        'Product 2': false,
      };

      expect(() =>
        getFirstValidOption(step as unknown as BlackTieConfiguratorConfiguratorStepsItem, availability, 'black'),
      ).toThrowError('No valid style option found');
    });
  });
});
