/* eslint-disable sonarjs/no-duplicate-string */
import type { TuxedoStyleStepOption } from '@headless-commerce/features/configurator/components/ClientConfigurator';
import type { StepOption } from '@headless-commerce/features/configurator/components/ClientStepOptions/ClientStepOptions';
import { findOptionBySelection } from '@headless-commerce/features/configurator/utils/stepOption';
import type { TuxedoColorOption } from '@headless-commerce/gql/generated/graphql';
import { describe, expect, it } from 'vitest';

import { createContentfulMetadata, createContentfulSys } from '../test-mocks/helpers';

describe('findOptionBySelection', () => {
  describe('when the options contains a no supported type', () => {
    it('should return undefined', () => {
      const options: Array<StepOption> = [];
      const result = findOptionBySelection('value')(options);
      expect(result).toBeUndefined();
    });
  });
  describe('when the options contains a TuxedoStyle', () => {
    it('should return the option', () => {
      const options: Array<StepOption> = [
        {
          __typename: 'TuxedoStyle',
          style: {
            contentfulMetadata: createContentfulMetadata(),
            sys: createContentfulSys(),
            tuxedoStyle: 'value',
          },
          product: {
            contentfulMetadata: createContentfulMetadata(),
            sys: createContentfulSys(),
            tuxedoStyle: 'value',
          },
        } satisfies TuxedoStyleStepOption,
      ];
      const result = findOptionBySelection('value')(options);
      expect(result).toBe(options[0]);
    });
  });
  describe('when the options contains a TuxedoColorOption', () => {
    it('should return the option', () => {
      const options: Array<StepOption> = [
        {
          __typename: 'TuxedoColorOption',
          tuxedoColor: 'value',
          contentfulMetadata: createContentfulMetadata(),
          sys: createContentfulSys(),
        } satisfies TuxedoColorOption,
      ];
      const result = findOptionBySelection('value')(options);
      expect(result).toBe(options[0]);
    });
  });
  describe('when the options contains a ProductOptionConfigurator', () => {
    it('should return the option', () => {
      const options: Array<StepOption> = [
        {
          __typename: 'ProductOptionConfigurator',
          productId: 'value',
          contentfulMetadata: createContentfulMetadata(),
          sys: createContentfulSys(),
        },
      ];
      const result = findOptionBySelection('value')(options);
      expect(result).toBe(options[0]);
    });
  });
  describe('when the options contains a ProductOptionStaticImageConfigurator', () => {
    it('should return the option', () => {
      const options: Array<StepOption> = [
        {
          __typename: 'ProductOptionStaticImageConfigurator',
          productId: 'value',
          contentfulMetadata: createContentfulMetadata(),
          sys: createContentfulSys(),
        },
      ];
      const result = findOptionBySelection('value')(options);
      expect(result).toBe(options[0]);
    });
  });
});
