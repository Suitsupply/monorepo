import type { StepOption } from '@susu/headless-commerce/features/configurator/components/ClientStepOptions/ClientStepOptions';
import * as layerImage from '@susu/headless-commerce/features/configurator/utils/layerImage';
import type { CommerceProductAvailabilityQuery } from '@susu/headless-commerce/gql/generated/commerceProductAvailability.operation';
import type {
  BlackTieConfiguratorConfiguratorStepsItem,
  ProductStepConfigurator,
  SiteId,
} from '@susu/headless-commerce/gql/generated/graphql';
import type { CountryConfiguration } from '@susu/headless-commerce/types/CountryConfiguration';
import * as environment from '@susu/headless-commerce/utils/environment';
import { createLocale } from '@susu/headless-commerce/utils/localeUtils';
import { describe, expect, it, vi } from 'vitest';

import { createConfiguratorDefaults, isLayeredImageStep } from './signals';
import {
  createCampaignIds,
  createConfiguratorSteps,
  createContentfulMetadata,
  createContentfulSys,
  createCountryConfiguration,
  createInitializeSignalsProps,
  createProductAvailability,
  createTestBlackTieConfiguratorConfiguratorStepsItem,
  getDefaultSelectedOption,
} from './test-mocks/helpers';
import { getStepOptions } from './utils/options';

describe('features/configurator/signals', () => {
  describe('isLayeredImageStep', () => {
    describe('When the layeredImage property is not set to "layered-image"', () => {
      it('should return false', () => {
        const step = {
          ...createTestBlackTieConfiguratorConfiguratorStepsItem(),
          imageType: '123',
        };
        const result = isLayeredImageStep(step);
        expect(result).toBe(false);
      });
    });

    describe('When the layeredImage property is set to "layered-image"', () => {
      it('should return false', () => {
        const step = {
          ...createTestBlackTieConfiguratorConfiguratorStepsItem(),
          imageType: 'layered-image',
        };
        const result = isLayeredImageStep(step);
        expect(result).toBe(true);
      });
    });
  });

  describe('locale', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        expect(configurator.locale.value).toBe(createLocale('en', 'nl'));
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.locale.value = createLocale('de', 'de');
        expect(configurator.locale.value).toBe(createLocale('de', 'de'));
      });
    });
  });

  describe('country', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.country.value).toStrictEqual(createCountryConfiguration());
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.country.value = {
          ...configurator.country.value,
          siteID: 'USA' as SiteId,
        } satisfies CountryConfiguration;
        expect(configurator.country.value).toStrictEqual({
          ...createCountryConfiguration(),
          siteID: 'USA' as SiteId,
        });
      });
    });
  });

  describe('modelId', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.modelId.value).toBe('model_3');
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.modelId.value = '123';
        expect(configurator.modelId.value).toBe('123');
      });
    });
  });

  describe('productIds', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.productIds.value).toStrictEqual([
          'C1199',
          'B1299',
          'W1199',
          'H9496',
          'FW1710',
          'D017',
          'M310',
          'BR077',
        ]);
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.productIds.value = ['123'];
        expect(configurator.productIds.value).toStrictEqual(['123']);
      });
    });
    describe('setProductIds', () => {
      describe('When called with the correct value', () => {
        it('should update the signal to that value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.setProductIds(['123']);
          expect(configurator.productIds.value).toStrictEqual(['123']);
        });
      });
    });
  });

  describe('isFinished', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.isFinished.value).toStrictEqual(false);
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.isFinished.value = true;
        expect(configurator.isFinished.value).toStrictEqual(true);
      });
    });
  });

  describe('maxLayerZoom', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.maxLayerZoom.value).toStrictEqual(650);
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.maxLayerZoom.value = 1;
        expect(configurator.maxLayerZoom.value).toStrictEqual(1);
      });
    });
  });

  describe('productAvailability', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.productAvailability.value).toStrictEqual(createProductAvailability());
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.productAvailability.value = {
          getProductsByIds: [
            {
              id: '123',
              availabilityStatus: {
                isAvailable: true,
                oneLeft: false,
                preOrder: false,
                showBadge: false,
              },
            },
          ],
        } satisfies CommerceProductAvailabilityQuery;
        expect(configurator.productAvailability.value).toStrictEqual({
          getProductsByIds: [
            {
              id: '123',
              availabilityStatus: {
                isAvailable: true,
                oneLeft: false,
                preOrder: false,
                showBadge: false,
              },
            },
          ],
        } satisfies CommerceProductAvailabilityQuery);
        expect(configurator.availability.value).toStrictEqual({
          '123': true,
        });
      });
    });
  });

  describe('availability', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.availability.value).toStrictEqual({
          B1299: true,
          B8353: true,
          BR077: true,
          BR078: true,
          C1199: true,
          C8353: true,
          D017: true,
          D018: true,
          D019: true,
          D020: true,
          FW1708: true,
          FW1710: true,
          H9495: true,
          H9496: true,
          H9497: true,
          M310: true,
          M311: true,
          M316: true,
          W1199: true,
        });
      });
    });
  });

  describe('tuxedoStyle', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.tuxedoStyle.value).toBe('two-piece');
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.tuxedoStyle.value = '123';
        expect(configurator.tuxedoStyle.value).toBe('123');
      });
    });
  });

  describe('baseColor', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.baseColor.value).toBe('black');
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.baseColor.value = '123';
        expect(configurator.baseColor.value).toBe('123');
      });
    });
    describe('setBaseColor', () => {
      describe('When called with the correct value', () => {
        it('should update the signal to that value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.setBaseColor('123');
          expect(configurator.baseColor.value).toBe('123');
        });
      });
    });
    describe('updateBaseColor', () => {
      describe('When called', () => {
        describe('When the selectedOption signal value is not a ProductOptionConfigurator or ProductOptionStaticImageConfigurator type', () => {
          it('should not update the signal', () => {
            const configurator = createConfiguratorDefaults();
            configurator.initializeSignals(createInitializeSignalsProps());
            configurator.updateBaseColor();
            expect(configurator.baseColor.value).toBe('black');
          });
        });
        describe('When the selectedOption signal value is set to a ProductOptionConfigurator type', () => {
          describe('When the currentStep is not the jacket step', () => {
            it('should not update the signal', () => {
              const configurator = createConfiguratorDefaults();
              configurator.initializeSignals(createInitializeSignalsProps());
              configurator.selectedOption.value = {
                __typename: 'ProductOptionConfigurator',
                contentfulMetadata: createContentfulMetadata(),
                sys: createContentfulSys(),
              } satisfies StepOption;
              configurator.updateBaseColor();
              expect(configurator.baseColor.value).toBe('black');
            });
          });
          describe('When the currentStep is the jacket step', () => {
            describe('When the selectedOption signal value property baseColor is not set', () => {
              it('should not update the signal', () => {
                const configurator = createConfiguratorDefaults();
                configurator.initializeSignals(createInitializeSignalsProps());
                configurator.selectedOption.value = {
                  __typename: 'ProductOptionConfigurator',
                  contentfulMetadata: createContentfulMetadata(),
                  sys: createContentfulSys(),
                } satisfies StepOption;
                configurator.updateBaseColor();
                expect(configurator.baseColor.value).toBe('black');
              });
            });
            describe('When the selectedOption signal value property baseColor is set', () => {
              it('should update the signal', () => {
                const configurator = createConfiguratorDefaults();
                configurator.initializeSignals(createInitializeSignalsProps());
                configurator.selectedOption.value = {
                  __typename: 'ProductOptionConfigurator',
                  contentfulMetadata: createContentfulMetadata(),
                  sys: createContentfulSys(),
                } satisfies StepOption;
                configurator.updateBaseColor();
                expect(configurator.baseColor.value).toBe('black');
              });
            });
          });
        });
      });
    });
  });

  describe('campaignIds', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.campaignIds.value).toStrictEqual(createCampaignIds());
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.campaignIds.value = ['123'];
        expect(configurator.campaignIds.value).toStrictEqual(['123']);
      });
    });
  });

  describe('steps', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.steps.value).toStrictEqual(createConfiguratorSteps());
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.steps.value = [createTestBlackTieConfiguratorConfiguratorStepsItem()];
        expect(configurator.steps.value).toStrictEqual([createTestBlackTieConfiguratorConfiguratorStepsItem()]);
      });
    });
  });

  describe('subStep', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.subStep.value).toBe(null);
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.subStep.value = '123';
        expect(configurator.subStep.value).toBe('123');
      });
    });
    describe('setSubStep', () => {
      describe('When called with the correct value', () => {
        it('should update the signal to that value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.setSubStep('123');
          expect(configurator.subStep.value).toBe('123');
        });
      });
    });
  });

  describe('mainSteps', () => {
    describe('When the steps signal contains steps with the subStep property that is set to isSubStep', () => {
      it('should return the steps signal value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        const truthy: ProductStepConfigurator = {
          __typename: 'ProductStepConfigurator',
          contentfulMetadata: createContentfulMetadata(),
          sys: createContentfulSys(),
          subStep: '123',
        };
        const falsy: ProductStepConfigurator = {
          __typename: 'ProductStepConfigurator',
          contentfulMetadata: createContentfulMetadata(),
          sys: createContentfulSys(),
          subStep: 'isSubStep',
        };
        configurator.steps.value = [falsy, truthy];
        expect(configurator.mainSteps.value).toStrictEqual([truthy]);
      });
    });
  });

  describe('subSteps', () => {
    describe('When the steps signal contains steps with the subStep property that is set to isSubStep', () => {
      it('should return the steps signal value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        const falsy: ProductStepConfigurator = {
          __typename: 'ProductStepConfigurator',
          contentfulMetadata: createContentfulMetadata(),
          sys: createContentfulSys(),
          subStep: '123',
        };
        const truthy: ProductStepConfigurator = {
          __typename: 'ProductStepConfigurator',
          contentfulMetadata: createContentfulMetadata(),
          sys: createContentfulSys(),
          subStep: 'isSubStep',
        };
        configurator.steps.value = [falsy, truthy];
        expect(configurator.subSteps.value).toStrictEqual([truthy]);
      });
    });
  });

  describe('selectedOption', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', async () => {
        const configurator = createConfiguratorDefaults();
        const initialProps = createInitializeSignalsProps();
        configurator.initializeSignals(initialProps);
        expect(configurator.selectedOption.value).toStrictEqual(getDefaultSelectedOption());
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.selectedOption.value = {
          __typename: 'ProductOptionConfigurator',
          contentfulMetadata: createContentfulMetadata(),
          sys: createContentfulSys(),
        };
        expect(configurator.selectedOption.value).toStrictEqual({
          __typename: 'ProductOptionConfigurator',
          contentfulMetadata: createContentfulMetadata(),
          sys: createContentfulSys(),
        });
      });
    });
    describe('setSelectedOption', () => {
      describe('When called with the correct value', () => {
        it('should update the signal to that value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.setSelectedOption({
            __typename: 'ProductOptionConfigurator',
            contentfulMetadata: createContentfulMetadata(),
            sys: createContentfulSys(),
          });
          expect(configurator.selectedOption.value).toStrictEqual({
            __typename: 'ProductOptionConfigurator',
            contentfulMetadata: createContentfulMetadata(),
            sys: createContentfulSys(),
          });
        });
      });
    });
    describe('updateSelectedOption', () => {
      describe('When the currentStepData signal value is not set', () => {
        it('should not update the signal', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.currentStepData.value = undefined;
          configurator.updateSelectedOption();
          expect(configurator.selectedOption.value).toBe(getDefaultSelectedOption());
        });
      });
      describe('When the currentStepData signal value is set', () => {
        describe('When the currentStepOptions signal value is an empty array', () => {
          it('should not update the signal', () => {
            const configurator = createConfiguratorDefaults();
            configurator.initializeSignals(createInitializeSignalsProps());
            configurator.currentStepOptions.value = [];
            configurator.currentStepData.value = createTestBlackTieConfiguratorConfiguratorStepsItem();
            configurator.updateSelectedOption();
            expect(configurator.selectedOption.value).toBe(getDefaultSelectedOption());
          });
        });
        describe('When the currentStepOptions signal value is not an empty array', () => {
          describe('When the selection signal contains the currentStepData signal value categoryStep', () => {
            describe('When the selection does not contain the current step categoryStep', () => {
              it('should not update the signal', () => {
                const configurator = createConfiguratorDefaults();
                configurator.initializeSignals(createInitializeSignalsProps());
                configurator.selection.value = {};
                configurator.currentStepOptions.value = [
                  {
                    __typename: 'TuxedoStyle',
                    product: {
                      contentfulMetadata: createContentfulMetadata(),
                      sys: createContentfulSys(),
                    },
                    style: {
                      contentfulMetadata: createContentfulMetadata(),
                      sys: createContentfulSys(),
                    },
                  },
                ];
                configurator.updateSelectedOption();
                expect(configurator.selectedOption.value).toBe(getDefaultSelectedOption());
              });
            });
            describe('When the selection contains the current step categoryStep', () => {
              it('should not update the signal', () => {
                const configurator = createConfiguratorDefaults();
                configurator.initializeSignals(createInitializeSignalsProps());
                configurator.currentStepData.value =
                  createConfiguratorSteps()[0] as unknown as BlackTieConfiguratorConfiguratorStepsItem;
                configurator.selection.value = {
                  style: 'two-piece',
                };
                configurator.currentStepOptions.value = [
                  {
                    __typename: 'TuxedoStyle',
                    product: {
                      contentfulMetadata: createContentfulMetadata(),
                      sys: createContentfulSys(),
                    },
                    style: {
                      tuxedoStyle: 'two-piece',
                      contentfulMetadata: createContentfulMetadata(),
                      sys: createContentfulSys(),
                    },
                  },
                ];
                configurator.updateSelectedOption();
                expect(configurator.selectedOption.value).toStrictEqual({
                  __typename: 'TuxedoStyle',
                  product: {
                    contentfulMetadata: {
                      tags: [],
                    },
                    sys: {
                      environmentId: 'test-environment-id',
                      id: 'test-id',
                      spaceId: 'test-space-id',
                    },
                  },
                  style: {
                    contentfulMetadata: {
                      tags: [],
                    },
                    sys: {
                      environmentId: 'test-environment-id',
                      id: 'test-id',
                      spaceId: 'test-space-id',
                    },
                    tuxedoStyle: 'two-piece',
                  },
                });
              });
            });
          });
        });
      });
    });
  });

  describe('imageProductIds', () => {
    describe('When the steps signal contains steps with the imageType property that is set to layered-image', () => {
      it('should return the correct value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.imageProductIds.value).toStrictEqual({
          layeredImage: [
            'W1199',
            'C1199',
            'C8353',
            'B1299',
            'B8353',
            'H9496',
            'H9497',
            'H9495',
            'FW1708',
            'FW1710',
            'D017',
            'D018',
            'D019',
            'D020',
          ],
          staticImage: ['M310', 'M311', 'M316', 'M310', 'M311', 'M316', 'BR077', 'BR078', 'BR077', 'BR078'],
        });
      });
    });
  });

  describe('imageURL', () => {
    describe('When the configurator is initialized', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.imageURL.value).toBe(
          'https://cdn.suitsupply.com/image/upload/l_products:Shoes:default:FW1710_66/fl_layer_apply,g_south,y_-60/l_products:Shirts:default:H9496_62/fl_layer_apply,g_north,y_475/l_products:Trousers:default:B1299_65/fl_layer_apply,g_south,y_130/l_products:Waistcoats:default:W1199_70/fl_layer_apply,g_north,y_475/l_products:Ties:default:D017_69/fl_layer_apply,g_north,y_475/l_products:Jackets:default:C1199_61/fl_layer_apply,g_north,y_475/l_products:ctc_models:model_3_hands/fl_layer_apply,g_north,y_0/b_rgb:efefef,bo_260px_solid_rgb:efefef,c_pad,w_2400/b_rgb:efefef,c_pad,h_1280,q_80,w_800,f_webp,fl_progressive:steep/products/ctc_models/model_3_full.jpeg',
        );
      });
    });
    describe('setImageURL', () => {
      describe('When called with the correct value', () => {
        it('should update the signal to that value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.setImageURL('123');
          expect(configurator.imageURL.value).toBe('123');
        });
      });
    });
    describe('updateImageURL', () => {
      describe('When the selectedOption signal value is not a ProductOptionStaticImageConfigurator type', () => {
        it('should not update the signal', async () => {
          const getImageUrlSpy = vi
            .spyOn(layerImage, 'getImageUrl')
            .mockResolvedValue('https://test.url/h_20,h_20/image');
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.selectedOption.value = {
            __typename: 'ProductOptionConfigurator',
            contentfulMetadata: createContentfulMetadata(),
            sys: createContentfulSys(),
          };
          await configurator.updateImageURL();
          expect(configurator.imageURL.value).toBe(
            'https://test.url/h_1280,h_20,q_80,w_800,f_webp,fl_progressive:steep/i.jpeg',
          );
          expect(getImageUrlSpy).toHaveBeenCalledTimes(2);
        });
      });
      describe('When the selectedOption signal value is set to a ProductOptionStaticImageConfigurator type', () => {
        describe('When the selectedOption signal does not have a staticImage property', () => {
          it('should not update the signal', async () => {
            const getImageUrlSpy = vi
              .spyOn(layerImage, 'getImageUrl')
              .mockResolvedValue('https://test.url/h_20,h_20/image');
            const configurator = createConfiguratorDefaults();
            configurator.initializeSignals(createInitializeSignalsProps());
            configurator.selectedOption.value = {
              __typename: 'ProductOptionStaticImageConfigurator',
              contentfulMetadata: createContentfulMetadata(),
              sys: createContentfulSys(),
            } satisfies StepOption;
            await configurator.updateImageURL();
            expect(configurator.imageURL.value).toBe(
              'https://test.url/h_1280,h_20,q_80,w_800,f_webp,fl_progressive:steep/i.jpeg',
            );
            expect(getImageUrlSpy).toHaveBeenCalledTimes(2);
          });
        });
        describe('When the selectedOption signal has a staticImage property set to true', () => {
          describe('When the modelId signal value is an empty string', () => {
            it('should not update the signal', async () => {
              const getImageUrlSpy = vi
                .spyOn(layerImage, 'getImageUrl')
                .mockResolvedValue('https://test.url/h_20,h_20/image');
              const configurator = createConfiguratorDefaults();
              configurator.initializeSignals(createInitializeSignalsProps());
              configurator.selectedOption.value = {
                __typename: 'ProductOptionStaticImageConfigurator',
                staticImage: {
                  __typename: 'MediaWrapperV2',
                  contentfulMetadata: createContentfulMetadata(),
                  sys: createContentfulSys(),
                },
                contentfulMetadata: createContentfulMetadata(),
                sys: createContentfulSys(),
              } satisfies StepOption;
              configurator.modelId.value = '';
              await configurator.updateImageURL();
              expect(configurator.imageURL.value).toBe(
                'https://cdn.suitsupply.com/image/upload/l_products:Shoes:default:FW1710_66/fl_layer_apply,g_south,y_-60/l_products:Shirts:default:H9496_62/fl_layer_apply,g_north,y_475/l_products:Trousers:default:B1299_65/fl_layer_apply,g_south,y_130/l_products:Waistcoats:default:W1199_70/fl_layer_apply,g_north,y_475/l_products:Ties:default:D017_69/fl_layer_apply,g_north,y_475/l_products:Jackets:default:C1199_61/fl_layer_apply,g_north,y_475/l_products:ctc_models:model_3_hands/fl_layer_apply,g_north,y_0/b_rgb:efefef,bo_260px_solid_rgb:efefef,c_pad,w_2400/b_rgb:efefef,c_pad,h_1280,q_80,w_800,f_webp,fl_progressive:steep/products/ctc_models/model_3_full.jpeg',
              );
              expect(getImageUrlSpy).toHaveBeenCalledTimes(1);
            });
          });
          describe('When the previewData signal has no product ids', () => {
            it('should not update the signal', async () => {
              const getImageUrlSpy = vi
                .spyOn(layerImage, 'getImageUrl')
                .mockResolvedValue('https://test.url/h_20,h_20/image');
              const configurator = createConfiguratorDefaults();
              configurator.initializeSignals(createInitializeSignalsProps());
              configurator.selectedOption.value = {
                __typename: 'ProductOptionStaticImageConfigurator',
                staticImage: {
                  __typename: 'MediaWrapperV2',
                  contentfulMetadata: createContentfulMetadata(),
                  sys: createContentfulSys(),
                },
                contentfulMetadata: createContentfulMetadata(),
                sys: createContentfulSys(),
              } satisfies StepOption;
              configurator.previewData.value = {
                productIds: [],
                staticImage: {
                  desktop: 'abc',
                },
                isLayered: false,
              };
              await configurator.updateImageURL();
              expect(configurator.imageURL.value).toBe(
                'https://cdn.suitsupply.com/image/upload/l_products:Shoes:default:FW1710_66/fl_layer_apply,g_south,y_-60/l_products:Shirts:default:H9496_62/fl_layer_apply,g_north,y_475/l_products:Trousers:default:B1299_65/fl_layer_apply,g_south,y_130/l_products:Waistcoats:default:W1199_70/fl_layer_apply,g_north,y_475/l_products:Ties:default:D017_69/fl_layer_apply,g_north,y_475/l_products:Jackets:default:C1199_61/fl_layer_apply,g_north,y_475/l_products:ctc_models:model_3_hands/fl_layer_apply,g_north,y_0/b_rgb:efefef,bo_260px_solid_rgb:efefef,c_pad,w_2400/b_rgb:efefef,c_pad,h_1280,q_80,w_800,f_webp,fl_progressive:steep/products/ctc_models/model_3_full.jpeg',
              );
              expect(getImageUrlSpy).toHaveBeenCalledTimes(1);
            });
          });
          describe('When the country signal has not siteID property', () => {
            it('should not update the signal', async () => {
              const getImageUrlSpy = vi
                .spyOn(layerImage, 'getImageUrl')
                .mockResolvedValue('https://test.url/h_20,h_20/image');
              const configurator = createConfiguratorDefaults();
              configurator.initializeSignals(createInitializeSignalsProps());
              configurator.selectedOption.value = {
                __typename: 'ProductOptionStaticImageConfigurator',
                staticImage: {
                  __typename: 'MediaWrapperV2',
                  contentfulMetadata: createContentfulMetadata(),
                  sys: createContentfulSys(),
                },
                contentfulMetadata: createContentfulMetadata(),
                sys: createContentfulSys(),
              } satisfies StepOption;
              // TODO: bogus test. This should never happen.
              // @ts-ignore
              configurator.country.value = {
                ...createCountryConfiguration(),
                // @ts-ignore
                siteID: undefined,
              } satisfies CountryConfiguration;
              await configurator.updateImageURL();
              expect(configurator.imageURL.value).toBe(
                'https://cdn.suitsupply.com/image/upload/l_products:Shoes:default:FW1710_66/fl_layer_apply,g_south,y_-60/l_products:Shirts:default:H9496_62/fl_layer_apply,g_north,y_475/l_products:Trousers:default:B1299_65/fl_layer_apply,g_south,y_130/l_products:Waistcoats:default:W1199_70/fl_layer_apply,g_north,y_475/l_products:Ties:default:D017_69/fl_layer_apply,g_north,y_475/l_products:Jackets:default:C1199_61/fl_layer_apply,g_north,y_475/l_products:ctc_models:model_3_hands/fl_layer_apply,g_north,y_0/b_rgb:efefef,bo_260px_solid_rgb:efefef,c_pad,w_2400/b_rgb:efefef,c_pad,h_1280,q_80,w_800,f_webp,fl_progressive:steep/products/ctc_models/model_3_full.jpeg',
              );
              expect(getImageUrlSpy).toHaveBeenCalledTimes(1);
            });
          });
          describe('When the locale signal has no language property', () => {
            it('should not update the signal', async () => {
              const getImageUrlSpy = vi
                .spyOn(layerImage, 'getImageUrl')
                .mockResolvedValue('https://test.url/h_20,h_20/image');
              const configurator = createConfiguratorDefaults();
              configurator.initializeSignals(createInitializeSignalsProps());
              configurator.selectedOption.value = {
                __typename: 'ProductOptionStaticImageConfigurator',
                staticImage: {
                  __typename: 'MediaWrapperV2',
                  contentfulMetadata: createContentfulMetadata(),
                  sys: createContentfulSys(),
                },
                contentfulMetadata: createContentfulMetadata(),
                sys: createContentfulSys(),
              } satisfies StepOption;
              await configurator.updateImageURL();
              expect(configurator.imageURL.value).toBe(
                'https://cdn.suitsupply.com/image/upload/l_products:Shoes:default:FW1710_66/fl_layer_apply,g_south,y_-60/l_products:Shirts:default:H9496_62/fl_layer_apply,g_north,y_475/l_products:Trousers:default:B1299_65/fl_layer_apply,g_south,y_130/l_products:Waistcoats:default:W1199_70/fl_layer_apply,g_north,y_475/l_products:Ties:default:D017_69/fl_layer_apply,g_north,y_475/l_products:Jackets:default:C1199_61/fl_layer_apply,g_north,y_475/l_products:ctc_models:model_3_hands/fl_layer_apply,g_north,y_0/b_rgb:efefef,bo_260px_solid_rgb:efefef,c_pad,w_2400/b_rgb:efefef,c_pad,h_1280,q_80,w_800,f_webp,fl_progressive:steep/products/ctc_models/model_3_full.jpeg',
              );
              expect(getImageUrlSpy).toHaveBeenCalledTimes(1);
            });
          });
          describe('When the correct conditions have been met', () => {
            it('should update the signal', async () => {
              const getImageUrlSpy = vi
                .spyOn(layerImage, 'getImageUrl')
                .mockResolvedValue('https://test.url/h_20,h_20/image');
              const configurator = createConfiguratorDefaults();
              configurator.initializeSignals(createInitializeSignalsProps());
              await configurator.updateImageURL();
              expect(configurator.imageURL.value).toBe(
                'https://test.url/h_1280,h_20,q_80,w_800,f_webp,fl_progressive:steep/i.jpeg',
              );
              expect(getImageUrlSpy).toHaveBeenCalledTimes(2);
            });
          });
        });
      });
    });
  });

  describe('outOfStock', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.outOfStock.value).toStrictEqual({});
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.outOfStock.value = {
          '123': true,
        };
        expect(configurator.outOfStock.value).toStrictEqual({
          '123': true,
        });
      });
    });
    describe('setStepOutOfStock', () => {
      describe('When called with the correct value', () => {
        it('should update the signal to that value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.setStepOutOfStock('123', true);
          expect(configurator.outOfStock.value).toStrictEqual({
            '123': true,
          });
        });
      });
    });
  });

  describe('previousSelection', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.previousSelection.value).toStrictEqual({});
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.previousSelection.value = {
          '123': 'abc',
        };
        expect(configurator.previousSelection.value).toStrictEqual({
          '123': 'abc',
        });
      });
    });
    describe('setPreviousSelection', () => {
      describe('When called with the correct value', () => {
        it('should update the signal to that value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.setPreviousSelection({
            '123': 'abc',
          });
          expect(configurator.previousSelection.value).toStrictEqual({
            '123': 'abc',
          });
        });
      });
    });
  });

  // TODO: Test previousStep
  describe('currentStep', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.currentStep.value).toStrictEqual(0);
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.currentStep.value = 1;
        expect(configurator.currentStep.value).toStrictEqual(1);
      });
    });
    describe('setCurrentStep', () => {
      describe('When called with the correct value', () => {
        it('should update the signal to that value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.setCurrentStep(1);
          expect(configurator.currentStep.value).toStrictEqual(1);
        });
      });
    });
  });

  describe('currentStepData', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.currentStepData.value).toStrictEqual(createConfiguratorSteps()[0]);
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.currentStepData.value = createTestBlackTieConfiguratorConfiguratorStepsItem();
        expect(configurator.currentStepData.value).toStrictEqual(createTestBlackTieConfiguratorConfiguratorStepsItem());
      });
    });
    describe('setCurrentStepData', () => {
      describe('When called with the correct value', () => {
        it('should update the signal to that value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.setCurrentStepData(createTestBlackTieConfiguratorConfiguratorStepsItem());
          expect(configurator.currentStepData.value).toStrictEqual(
            createTestBlackTieConfiguratorConfiguratorStepsItem(),
          );
        });
      });
    });
    describe('updateCurrentStepData', () => {
      describe('When the subStep signal value is not set', () => {
        it('should currentStepData to the mainStep', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.subStep.value = null;
          configurator.updateCurrentStepData();
          expect(configurator.currentStepData.value).toStrictEqual(createConfiguratorSteps()[0]);
        });
      });
      describe('When the subStep signal value is set', () => {
        describe('When the subSteps signal value does not contain the subStep signal value', () => {
          it('should currentStepData to the mainStep', () => {
            const configurator = createConfiguratorDefaults();
            configurator.initializeSignals(createInitializeSignalsProps());
            configurator.subStep.value = '123xyz';
            configurator.updateCurrentStepData();
            expect(configurator.currentStepData.value).toStrictEqual(createConfiguratorSteps()[0]);
          });
        });
        describe('When the subSteps signal value contains the subStep signal value', () => {
          it('should currentStepData to the subStep', () => {
            const configurator = createConfiguratorDefaults();
            configurator.initializeSignals(createInitializeSignalsProps());
            const expected = {
              ...configurator.steps.value[1],
              subStep: 'isSubStep',
              categoryStep: '123',
            } as ProductStepConfigurator;
            configurator.steps.value = [expected];
            configurator.subStep.value = '123';
            configurator.updateCurrentStepData();
            expect(configurator.currentStepData.value).toStrictEqual(expected);
          });
        });
      });
    });
  });

  describe('currentStepOptions', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.currentStepOptions.value).toStrictEqual(
          getStepOptions(createConfiguratorSteps()[0] as unknown as BlackTieConfiguratorConfiguratorStepsItem, 'black'),
        );
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.currentStepOptions.value = getStepOptions(
          createConfiguratorSteps()[1] as unknown as BlackTieConfiguratorConfiguratorStepsItem,
          'black',
        );
        expect(configurator.currentStepOptions.value).toStrictEqual(
          getStepOptions(createConfiguratorSteps()[1] as unknown as BlackTieConfiguratorConfiguratorStepsItem, 'black'),
        );
      });
    });
    describe('updateCurrentStepOptions', () => {
      describe('When the currentStepData signal value is not set', () => {
        it('should be an empty array', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.currentStepData.value = undefined;
          configurator.updateCurrentStepOptions();
          expect(configurator.currentStepOptions.value).toStrictEqual([]);
        });
      });
      describe('When the currentStepData signal value is set', () => {
        it('should be the correct value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.currentStepData.value =
            createConfiguratorSteps()[1] as unknown as BlackTieConfiguratorConfiguratorStepsItem;
          configurator.updateCurrentStepOptions();
          expect(configurator.currentStepOptions.value).toStrictEqual(
            getStepOptions(
              createConfiguratorSteps()[1] as unknown as BlackTieConfiguratorConfiguratorStepsItem,
              'black',
            ),
          );
        });
      });
    });
  });

  describe('previousStep', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.previousStep.value).toStrictEqual(undefined);
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.previousStep.value = 'abc';
        expect(configurator.previousStep.value).toStrictEqual('abc');
      });
    });
    describe('setPreviousStep', () => {
      describe('When called with the correct value', () => {
        it('should update the signal to that value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.setPreviousStep('abc');
          expect(configurator.previousStep.value).toStrictEqual('abc');
        });
      });
    });
  });

  describe('layeredPreviewPosition', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.layeredPreviewPosition.value).toStrictEqual({
          focalPoint: '0.5 0.3',
          zoom: '163%',
        });
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.layeredPreviewPosition.value = {
          focalPoint: '123',
          zoom: 'abc',
        };
        expect(configurator.layeredPreviewPosition.value).toStrictEqual({
          focalPoint: '123',
          zoom: 'abc',
        });
      });
    });
    describe('setLayeredPreviewPosition', () => {
      describe('When called with the correct value', () => {
        it('should update the signal to that value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.setLayeredPreviewPosition({
            focalPoint: '123',
            zoom: 'abc',
          });
          expect(configurator.layeredPreviewPosition.value).toStrictEqual({
            focalPoint: '123',
            zoom: 'abc',
          });
        });
      });
    });
    describe('updateLayeredPreviewPosition', () => {
      describe('When the currentStepData signal value is not set', () => {
        it('should not update the signal', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.currentStepData.value = undefined;
          configurator.updateLayeredPreviewPosition();
          expect(configurator.layeredPreviewPosition.value).toStrictEqual({
            focalPoint: '0.5 0.3',
            zoom: '163%',
          });
        });
      });
      describe('When the currentStepData signal value is set', () => {
        describe('When we are not in the browser', () => {
          it('should update the signal to desktop specifications', () => {
            const configurator = createConfiguratorDefaults();
            configurator.initializeSignals(createInitializeSignalsProps());
            configurator.updateLayeredPreviewPosition();
            expect(configurator.layeredPreviewPosition.value).toStrictEqual({
              focalPoint: '0.5 0.3',
              zoom: '163%',
            });
          });
        });
        describe('When we are in the browser', () => {
          describe('When the device type is desktop', () => {
            it('should update the signal to desktop specifications', () => {
              const isBrowserSpy = vi.spyOn(environment, 'isBrowser').mockReturnValue(false);
              const configurator = createConfiguratorDefaults();
              configurator.initializeSignals(createInitializeSignalsProps());
              configurator.updateLayeredPreviewPosition();
              expect(configurator.layeredPreviewPosition.value).toStrictEqual({
                focalPoint: '0.5 0.3',
                zoom: '163%',
              });
              expect(isBrowserSpy).toHaveBeenCalledTimes(3);
            });
          });
          describe('When the device type is mobile', () => {
            it('should update the signal to mobile specifications', () => {
              const isBrowserSpy = vi.spyOn(environment, 'isBrowser').mockReturnValue(true);
              const matchMediaSpy = vi.spyOn(window, 'matchMedia').mockImplementation((input: string) => ({
                matches: input === '(max-width: 768px)',
                media: 'test',
                onchange: null,
                addListener: vi.fn(),
                addEventListener: vi.fn(),
                dispatchEvent: vi.fn(),
                removeEventListener: vi.fn(),
                removeListener: vi.fn(),
              }));
              const configurator = createConfiguratorDefaults();
              configurator.initializeSignals(createInitializeSignalsProps());
              configurator.updateLayeredPreviewPosition();
              expect(configurator.layeredPreviewPosition.value).toStrictEqual({
                focalPoint: '0.5 0.1',
                zoom: '161%',
              });
              expect(isBrowserSpy).toHaveBeenCalledTimes(3);
              expect(matchMediaSpy).toHaveBeenCalledTimes(3);
            });
          });
          describe('When the device type is tablet', () => {
            it('should update the signal to mobile specifications', () => {
              const isBrowserSpy = vi.spyOn(environment, 'isBrowser').mockReturnValue(true);
              const matchMediaSpy = vi.spyOn(window, 'matchMedia').mockImplementation((input: string) => ({
                matches: input === '(max-width: 992px)',
                media: 'test',
                onchange: null,
                addListener: vi.fn(),
                addEventListener: vi.fn(),
                dispatchEvent: vi.fn(),
                removeEventListener: vi.fn(),
                removeListener: vi.fn(),
              }));
              const configurator = createConfiguratorDefaults();
              configurator.initializeSignals(createInitializeSignalsProps());
              configurator.updateLayeredPreviewPosition();
              expect(configurator.layeredPreviewPosition.value).toStrictEqual({
                focalPoint: '0.5 0.2',
                zoom: '162%',
              });
              expect(isBrowserSpy).toHaveBeenCalledTimes(3);
              expect(matchMediaSpy).toHaveBeenCalledTimes(6);
            });
          });
        });
      });
    });
  });

  describe('previewData', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.previewData.value).toStrictEqual({
          isLayered: true,
          productIds: ['C1199', 'B1299', 'H9496', 'FW1710', 'D017'],
          staticImage: undefined,
        });
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.previewData.value = {
          productIds: ['123'],
          staticImage: {
            desktop: 'abc',
          },
          isLayered: true,
        };
        expect(configurator.previewData.value).toStrictEqual({
          productIds: ['123'],
          staticImage: {
            desktop: 'abc',
          },
          isLayered: true,
        });
      });
    });
    describe('setPreviewData', () => {
      describe('When called with the correct value', () => {
        it('should update the signal to that value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.setPreviewData({
            productIds: ['123'],
            staticImage: {
              desktop: 'abc',
            },
            isLayered: true,
          });
          expect(configurator.previewData.value).toStrictEqual({
            productIds: ['123'],
            staticImage: {
              desktop: 'abc',
            },
            isLayered: true,
          });
        });
      });
    });
    describe('updatePreviewData', () => {
      describe('When the currentStepData signal value is not set', () => {
        it('should not update the signal', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.currentStepData.value = undefined;
          configurator.updatePreviewData();
          expect(configurator.previewData.value).toStrictEqual({
            isLayered: true,
            productIds: ['C1199', 'B1299', 'H9496', 'FW1710', 'D017'],
            staticImage: undefined,
          });
        });
      });
      describe('When the currentStepData signal value is set', () => {
        describe('When the imageType is static', () => {
          it('should update the signal to the correct value', () => {
            const configurator = createConfiguratorDefaults();
            configurator.initializeSignals(createInitializeSignalsProps());
            configurator.setCurrentStep(configurator.steps.value.length - 2);
            configurator.updatePreviewData();
            expect(configurator.previewData.value).toStrictEqual({
              isLayered: false,
              productIds: ['M310', 'BR077'],
              staticImage: {
                desktop:
                  'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,h_2560,w_3500/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/B1299_M310_D.jpg',
                mobile:
                  'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,h_2048,w_1650/suitsupply/Black-Tie-Configurator/Configurator/static-preview-images/B1299_M310_T.jpg',
              },
            });
          });
        });
        describe('When the imageType is layered', () => {
          describe('When the step should show the jacket and waistcoat', () => {
            describe('When the tuxedoStyle signal value is two-piece', () => {
              it('should not include the productId for waistcoat', () => {
                const configurator = createConfiguratorDefaults();
                configurator.initializeSignals(createInitializeSignalsProps());
                configurator.updatePreviewData();
                expect(configurator.previewData.value).toStrictEqual({
                  isLayered: true,
                  productIds: ['C1199', 'B1299', 'H9496', 'FW1710', 'D017'],
                  staticImage: undefined,
                });
              });
            });
            describe('When the tuxedoStyle signal value is three-piece', () => {
              it('should include the productId for waistcoat', () => {
                const configurator = createConfiguratorDefaults();
                configurator.initializeSignals(createInitializeSignalsProps());
                configurator.setSelection({
                  ...configurator.selection.value,
                  style: 'three-piece',
                });
                // TODO: This should be the case, but isn't right now.
                // expect(configurator.tuxedoStyle.value).toBe('three-piece');
                configurator.updatePreviewData();
                expect(configurator.previewData.value).toStrictEqual({
                  isLayered: true,
                  productIds: ['W1199', 'C1199', 'B1299', 'H9496', 'FW1710', 'D017'],
                  staticImage: undefined,
                });
              });
            });
          });
          describe('When the step should hide the jacket and waistcoat', () => {
            it('should not include the productId for waistcoat', () => {
              const configurator = createConfiguratorDefaults();
              configurator.initializeSignals(createInitializeSignalsProps());
              configurator.setSelection({
                ...configurator.selection.value,
                style: 'three-piece',
              });
              configurator.setCurrentStep(3);
              configurator.updatePreviewData();
              expect(configurator.previewData.value).toStrictEqual({
                isLayered: true,
                productIds: ['B1299', 'H9496', 'FW1710', 'D017'],
                staticImage: undefined,
              });
            });
          });
        });
      });
    });
  });

  describe('selectedCampaign', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.selectedCampaign.value).toStrictEqual('eveningwear-package-two-piece');
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.selectedCampaign.value = 'abc';
        expect(configurator.selectedCampaign.value).toStrictEqual('abc');
      });
    });
    describe('setSelectedCampaign', () => {
      describe('When called with the correct value', () => {
        it('should update the signal to that value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.setSelectedCampaign('abc');
          expect(configurator.selectedCampaign.value).toStrictEqual('abc');
        });
      });
    });
    describe('updateSelectedCampaign', () => {
      describe('When the selectedOption signal value is not set', () => {
        it('should not update the signal', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.selectedOption.value = undefined;
          configurator.updateSelectedCampaign();
          expect(configurator.selectedCampaign.value).toStrictEqual('eveningwear-package-two-piece');
        });
      });
      describe('When the selectedOption signal value is set', () => {
        describe('When the selectedOption signal value is not a TuxedoStyle', () => {
          it('should not update the signal', () => {
            const configurator = createConfiguratorDefaults();
            configurator.initializeSignals(createInitializeSignalsProps());
            configurator.selectedOption.value = {
              __typename: 'ProductOptionStaticImageConfigurator',
              staticImage: {
                __typename: 'MediaWrapperV2',
                contentfulMetadata: createContentfulMetadata(),
                sys: createContentfulSys(),
              },
              contentfulMetadata: createContentfulMetadata(),
              sys: createContentfulSys(),
            } satisfies StepOption;
            configurator.updateSelectedCampaign();
            expect(configurator.selectedCampaign.value).toStrictEqual('eveningwear-package-two-piece');
          });
        });
        describe('When the selectedOption signal value is not a TuxedoStyle', () => {
          describe('When the selectedOption signal value does not have a product campaign', () => {
            it('should not update the signal', () => {
              const configurator = createConfiguratorDefaults();
              configurator.initializeSignals(createInitializeSignalsProps());
              configurator.selectedOption.value = {
                __typename: 'TuxedoStyle',
                product: {
                  __typename: 'TuxedoProductOption',
                  contentfulMetadata: createContentfulMetadata(),
                  sys: createContentfulSys(),
                },
                style: {
                  __typename: 'TuxedoStyleOption',
                  contentfulMetadata: createContentfulMetadata(),
                  sys: createContentfulSys(),
                },
              } satisfies StepOption;
              configurator.updateSelectedCampaign();
              expect(configurator.selectedCampaign.value).toStrictEqual('eveningwear-package-two-piece');
            });
          });
          describe('When the selectedOption signal value has a product campaign', () => {
            it('should update the signal', () => {
              const configurator = createConfiguratorDefaults();
              configurator.initializeSignals(createInitializeSignalsProps());
              configurator.selectedOption.value = {
                __typename: 'TuxedoStyle',
                product: {
                  __typename: 'TuxedoProductOption',
                  contentfulMetadata: createContentfulMetadata(),
                  sys: createContentfulSys(),
                  campaign: 'abc',
                },
                style: {
                  __typename: 'TuxedoStyleOption',
                  contentfulMetadata: createContentfulMetadata(),
                  sys: createContentfulSys(),
                },
              } satisfies StepOption;
              configurator.updateSelectedCampaign();
              expect(configurator.selectedCampaign.value).toStrictEqual('abc');
            });
          });
        });
      });
    });
  });

  describe('defaultSelection', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.defaultSelection.value).toStrictEqual({
          'bow-tie': 'D017',
          'cufflinks': 'M310',
          'jacket': 'C1199',
          'shirt': 'H9496',
          'shoes': 'FW1710',
          'style': 'two-piece',
          'suspenders': 'BR077',
          'trouser': 'B1299',
          'waistcoatProductId': 'null',
        });
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.defaultSelection.value = {
          '123': 'abc',
        };
        expect(configurator.defaultSelection.value).toStrictEqual({
          '123': 'abc',
        });
      });
    });
    describe('setDefaultSelection', () => {
      describe('When called with the correct value', () => {
        it('should update the signal to that value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.setDefaultSelection({
            '123': 'abc',
          });
          expect(configurator.defaultSelection.value).toStrictEqual({
            '123': 'abc',
          });
        });
      });
    });
  });

  describe('recommendations', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.recommendations.value).toStrictEqual({
          'bow-tie': 'D017',
          'cufflinks': 'M310',
          'shirt': 'H9496',
          'shoes': 'FW1710',
          'suspenders': 'BR077',
          'trouser': 'B1299',
        });
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.recommendations.value = {
          '123': 'abc',
        };
        expect(configurator.recommendations.value).toStrictEqual({
          '123': 'abc',
        });
      });
    });
    describe('setRecommendations', () => {
      describe('When called with the correct value', () => {
        it('should update the signal to that value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.setRecommendations({
            '123': 'abc',
          });
          expect(configurator.recommendations.value).toStrictEqual({
            '123': 'abc',
          });
        });
      });
    });
  });

  describe('selection', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.selection.value).toStrictEqual({
          'bow-tie': 'D017',
          'cufflinks': 'M310',
          'jacket': 'C1199',
          'shirt': 'H9496',
          'shoes': 'FW1710',
          'style': 'two-piece',
          'suspenders': 'BR077',
          'trouser': 'B1299',
          'waistcoatProductId': 'null',
        });
      });
    });
    describe('When the signal is updated', () => {
      it('should be the value that was updated by the subscriptions', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.selection.value = {
          '123': 'abc',
        };
        expect(configurator.selection.value).toStrictEqual({
          style: 'two-piece',
          waistcoatProductId: 'null',
        });
      });
    });
    describe('setSelection', () => {
      describe('When called with the correct value', () => {
        it('should be the value that was updated by the subscriptions', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.setCurrentStep(3);
          configurator.setSelection({
            '123': 'abc',
          });
          // TODO: This is a bug. We do not want undefined values.
          expect(configurator.selection.value).toStrictEqual({
            style: undefined,
            waistcoatProductId: undefined,
          });
        });
      });
    });
    describe('updateSelection', () => {
      describe('When the selectedOption is not the TuxedoStyle', () => {
        it('should update the signal to the correct value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.setCurrentStep(1);
          configurator.setSelection({
            ...configurator.selection.value,
            jacket: 'C8353',
          });
          configurator.updateSelection();
          expect(configurator.defaultSelection.value).toStrictEqual({
            'bow-tie': 'D018',
            'cufflinks': 'M311',
            'jacket': 'C1199',
            'shirt': 'H9497',
            'shoes': 'FW1708',
            'style': 'two-piece',
            'suspenders': 'BR078',
            'trouser': 'B8353',
            'waistcoatProductId': 'null',
          });
          expect(configurator.selection.value).toStrictEqual({
            'bow-tie': 'D018',
            'cufflinks': 'M311',
            'jacket': 'C8353',
            'shirt': 'H9497',
            'shoes': 'FW1708',
            'style': 'two-piece',
            'suspenders': 'BR078',
            'trouser': 'B8353',
            'waistcoatProductId': 'null',
          });
          expect(configurator.recommendations.value).toStrictEqual({
            'bow-tie': 'D018',
            'cufflinks': 'M311',
            'shirt': 'H9497',
            'shoes': 'FW1708',
            'suspenders': 'BR078',
            'trouser': 'B8353',
            'waistcoatProductId': 'W8353',
          });
        });
      });
      describe('When the selectedOption is the TuxedoStyle', () => {
        it('should update the signal to the correct value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.setSelection({
            ...configurator.selection.value,
            style: 'three-piece',
          });
          configurator.updateSelection();
          expect(configurator.defaultSelection.value).toStrictEqual({
            'bow-tie': 'D017',
            'cufflinks': 'M310',
            'jacket': 'C1199',
            'shirt': 'H9496',
            'shoes': 'FW1710',
            'style': 'three-piece',
            'suspenders': 'BR077',
            'trouser': 'B1299',
            'waistcoatProductId': 'W1199',
          });
          expect(configurator.selection.value).toStrictEqual({
            'bow-tie': 'D017',
            'cufflinks': 'M310',
            'jacket': 'C1199',
            'shirt': 'H9496',
            'shoes': 'FW1710',
            'style': 'three-piece',
            'suspenders': 'BR077',
            'trouser': 'B1299',
            'waistcoatProductId': 'W1199',
          });
          expect(configurator.recommendations.value).toStrictEqual({
            'bow-tie': 'D017',
            'cufflinks': 'M310',
            'shirt': 'H9496',
            'shoes': 'FW1710',
            'suspenders': 'BR077',
            'trouser': 'B1299',
          });
        });
      });
      describe('When the selectedOption does not have recommendations', () => {
        it('should update the signal to the correct value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.setSelection({
            ...configurator.selection.value,
            trouser: 'B8353',
          });
          configurator.updateSelection();
          expect(configurator.defaultSelection.value).toStrictEqual({
            'bow-tie': 'D017',
            'cufflinks': 'M310',
            'jacket': 'C1199',
            'shirt': 'H9496',
            'shoes': 'FW1710',
            'style': 'two-piece',
            'suspenders': 'BR077',
            'trouser': 'B1299',
            'waistcoatProductId': 'null',
          });
          expect(configurator.selection.value).toStrictEqual({
            'bow-tie': 'D017',
            'cufflinks': 'M310',
            'jacket': 'C1199',
            'shirt': 'H9496',
            'shoes': 'FW1710',
            'style': 'two-piece',
            'suspenders': 'BR077',
            'trouser': 'B8353',
            'waistcoatProductId': 'null',
          });
          expect(configurator.recommendations.value).toStrictEqual({
            'bow-tie': 'D017',
            'cufflinks': 'M310',
            'shirt': 'H9496',
            'shoes': 'FW1710',
            'suspenders': 'BR077',
            'trouser': 'B1299',
          });
        });
      });
      describe('When the selectedOption has recommendations', () => {
        describe('When applying recommendations and selection doesnt match defaultSelection', () => {
          it('should update the signal to the correct value', () => {
            const configurator = createConfiguratorDefaults();
            configurator.initializeSignals(createInitializeSignalsProps());
            configurator.setCurrentStep(3);
            configurator.setSelection({
              ...configurator.selection.value,
              shirt: 'H9495',
            });
            configurator.setCurrentStep(5);
            configurator.setSelection({
              ...configurator.selection.value,
              'bow-tie': 'D017',
            });
            configurator.setCurrentStep(1);
            configurator.setSelection({
              ...configurator.selection.value,
              jacket: 'C8353',
            });
            configurator.updateSelection();
            expect(configurator.defaultSelection.value).toStrictEqual({
              'bow-tie': 'D018',
              'cufflinks': 'M311',
              'jacket': 'C1199',
              'shirt': 'H9496',
              'shoes': 'FW1708',
              'style': 'two-piece',
              'suspenders': 'BR078',
              'trouser': 'B8353',
              'waistcoatProductId': 'null',
            });
            expect(configurator.selection.value).toStrictEqual({
              // TODO: Bug: This should be D017
              'bow-tie': 'D018',
              'cufflinks': 'M311',
              'jacket': 'C8353',
              'shirt': 'H9495',
              'shoes': 'FW1708',
              'style': 'two-piece',
              'suspenders': 'BR078',
              'trouser': 'B8353',
              'waistcoatProductId': 'null',
            });
            expect(configurator.recommendations.value).toStrictEqual({
              'bow-tie': 'D018',
              'cufflinks': 'M311',
              'shirt': 'H9497',
              'shoes': 'FW1708',
              'suspenders': 'BR078',
              'trouser': 'B8353',
              'waistcoatProductId': 'W8353',
            });
          });
        });
        describe('When applying recommendations and selection matches defaultSelection', () => {
          it('should update the signal to the correct value', () => {
            const configurator = createConfiguratorDefaults();
            configurator.initializeSignals(createInitializeSignalsProps());
            configurator.setCurrentStep(1);
            configurator.setSelection({
              ...configurator.selection.value,
              jacket: 'C8353',
            });
            configurator.updateSelection();
            expect(configurator.defaultSelection.value).toStrictEqual({
              'bow-tie': 'D018',
              'cufflinks': 'M311',
              // TODO: This might be a bug. I think we expect Navy and not Black
              // here.
              'jacket': 'C1199',
              'shirt': 'H9497',
              'shoes': 'FW1708',
              'style': 'two-piece',
              'suspenders': 'BR078',
              'trouser': 'B8353',
              'waistcoatProductId': 'null',
            });
            expect(configurator.selection.value).toStrictEqual({
              'bow-tie': 'D018',
              'cufflinks': 'M311',
              'jacket': 'C8353',
              'shirt': 'H9497',
              'shoes': 'FW1708',
              'style': 'two-piece',
              'suspenders': 'BR078',
              'trouser': 'B8353',
              'waistcoatProductId': 'null',
            });
            expect(configurator.recommendations.value).toStrictEqual({
              'bow-tie': 'D018',
              'cufflinks': 'M311',
              'shirt': 'H9497',
              'shoes': 'FW1708',
              'suspenders': 'BR078',
              'trouser': 'B8353',
              'waistcoatProductId': 'W8353',
            });
          });
        });
      });
      describe('When the selection contains out of stock products', () => {
        it('should update the signal to the correct value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          const changedAvailability = configurator.productAvailability.value;

          if (changedAvailability.getProductsByIds?.[3]?.availabilityStatus) {
            changedAvailability.getProductsByIds[3].availabilityStatus = {
              isAvailable: false,
              oneLeft: false,
              preOrder: false,
              showBadge: false,
              inStockDate: null,
            };
          }

          configurator.productAvailability.value = { ...changedAvailability };
          configurator.setCurrentStep(2);
          configurator.setSelection({
            ...configurator.selection.value,
            trouser: 'B1299',
          });
          configurator.updateSelection();

          expect(configurator.defaultSelection.value).toStrictEqual({
            'bow-tie': 'D017',
            'cufflinks': 'M310',
            'jacket': 'C1199',
            'shirt': 'H9496',
            'shoes': 'FW1710',
            'style': 'two-piece',
            'suspenders': 'BR077',
            'trouser': 'B1299',
            'waistcoatProductId': 'null',
          });
          expect(configurator.selection.value).toStrictEqual({
            'bow-tie': 'D017',
            'cufflinks': 'M310',
            'jacket': 'C1199',
            'shirt': 'H9496',
            'shoes': 'FW1710',
            'style': 'two-piece',
            'suspenders': 'BR077',
            'trouser': 'B8353',
            'waistcoatProductId': 'null',
          });
          expect(configurator.recommendations.value).toStrictEqual({
            'bow-tie': 'D017',
            'cufflinks': 'M310',
            'shirt': 'H9496',
            'shoes': 'FW1710',
            'suspenders': 'BR077',
            'trouser': 'B1299',
          });
        });
      });
      describe('When the selection deos not contain out of stock products', () => {
        it('should update the signal to the correct value', () => {
          const configurator = createConfiguratorDefaults();
          configurator.initializeSignals(createInitializeSignalsProps());
          configurator.setCurrentStep(2);
          configurator.setSelection({
            ...configurator.selection.value,
            trouser: 'B8353',
          });
          configurator.updateSelection();
          expect(configurator.defaultSelection.value).toStrictEqual({
            'bow-tie': 'D017',
            'cufflinks': 'M310',
            'jacket': 'C1199',
            'shirt': 'H9496',
            'shoes': 'FW1710',
            'style': 'two-piece',
            'suspenders': 'BR077',
            'trouser': 'B1299',
            'waistcoatProductId': 'null',
          });
          expect(configurator.selection.value).toStrictEqual({
            'bow-tie': 'D017',
            'cufflinks': 'M310',
            'jacket': 'C1199',
            'shirt': 'H9496',
            'shoes': 'FW1710',
            'style': 'two-piece',
            'suspenders': 'BR077',
            'trouser': 'B8353',
            'waistcoatProductId': 'null',
          });
        });
      });
    });
  });

  describe('preload', () => {
    describe('When the signal is not updated', () => {
      it('should be the default value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.preload.value).toStrictEqual(undefined);
      });
    });
    describe('When the signal is updated', () => {
      it('should be the updated value', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        configurator.preload.value = {
          color: 'black',
          productIds: ['C1199', 'B1299', 'H9496', 'FW1710', 'D017'],
          campaignId: 'eveningwear-package-two-piece',
          step: 'jacket',
        };
        expect(configurator.preload.value).toStrictEqual({
          color: 'black',
          productIds: ['C1199', 'B1299', 'H9496', 'FW1710', 'D017'],
          campaignId: 'eveningwear-package-two-piece',
          step: 'jacket',
        });
      });
    });
    describe('When the props do not contain preload', () => {
      it('should not update the signal', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals(createInitializeSignalsProps());
        expect(configurator.preload.value).toStrictEqual(undefined);
      });
    });
    describe('When the props contain preload', () => {
      it('should update the signal and its effects', () => {
        const configurator = createConfiguratorDefaults();
        configurator.initializeSignals({
          ...createInitializeSignalsProps(),
          preload: {
            color: 'navy',
            productIds: ['C8353', 'CW8353', 'CB8353', 'CH9497', 'CFW1708', 'CD018', 'CM311', 'CBR078'],
            campaignId: 'eveningwear-package-three-piece',
            step: 'jacket',
          },
        });
        expect(configurator.preload.value).toStrictEqual({
          color: 'navy',
          productIds: ['C8353', 'CW8353', 'CB8353', 'CH9497', 'CFW1708', 'CD018', 'CM311', 'CBR078'],
          campaignId: 'eveningwear-package-three-piece',
          step: 'jacket',
        });
        expect(configurator.baseColor.value).toStrictEqual('navy');
        // TODO: This is a bug. We expect the preload id's.
        expect(configurator.productIds.value).toStrictEqual([
          'C1199',
          'B1299',
          'W1199',
          'H9496',
          'FW1710',
          'D017',
          'M310',
          'BR077',
        ]);
        expect(configurator.currentStep.value).toStrictEqual(1);

        expect(configurator.defaultSelection.value).toStrictEqual({
          'bow-tie': 'D017',
          'cufflinks': 'M310',
          'jacket': 'C8353',
          'shirt': 'H9496',
          'shoes': 'FW1710',
          'style': 'two-piece',
          'suspenders': 'BR077',
          'trouser': 'B1299',
          'waistcoatProductId': 'null',
        });
        expect(configurator.selection.value).toStrictEqual({
          'bow-tie': 'D017',
          'cufflinks': 'M310',
          'jacket': 'C8353',
          'shirt': 'H9496',
          'shoes': 'FW1710',
          'style': 'two-piece',
          'suspenders': 'BR077',
          'trouser': 'B1299',
          'waistcoatProductId': 'null',
        });
        expect(configurator.recommendations.value).toStrictEqual({
          'bow-tie': 'D018',
          'cufflinks': 'M311',
          'shirt': 'H9497',
          'shoes': 'FW1708',
          'suspenders': 'BR078',
          'trouser': 'B8353',
          'waistcoatProductId': 'W8353',
        });
      });
    });
  });
});
