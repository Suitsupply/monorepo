/* eslint-disable sonarjs/cognitive-complexity */
'use client';

import type { DeviceName } from '@headless-commerce/components/ResponsiveImage/ResponsiveImage.types';
import { parseStaticPattern } from '@headless-commerce/components/ResponsiveImage/utils';
import { breakpoints, DEFAULT_LOCALE, IMAGE_CDN_BASE_URL } from '@headless-commerce/config/config';
import type { Locale } from '@headless-commerce/config/locale';
import { useAnalytics } from '@headless-commerce/contexts/analytics/client';
import { cart, cartSegmentProducts } from '@headless-commerce/contexts/cart';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { customer } from '@headless-commerce/contexts/customer';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import type {
  ClientConfiguratorProps,
  ConfiguratorPreload,
  ImageType,
  TuxedoStyleStepOption,
} from '@headless-commerce/features/configurator/components/ClientConfigurator';
import type { StepOption } from '@headless-commerce/features/configurator/components/ClientStepOptions/ClientStepOptions';
import type {
  AvailabilityStatus,
  BlackTieConfiguratorConfiguratorStepsItem,
  Product,
  ProductOptionConfigurator,
  ProductStepConfigurator,
  ProductStepConfiguratorProductOptionsItem,
  SiteId,
} from '@headless-commerce/gql/generated/graphql';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import type { PageType } from '@headless-commerce/types/PageType';
import { uniqueElements } from '@headless-commerce/utils/array';
import { isBrowser } from '@headless-commerce/utils/environment';
import { deepEqual } from '@headless-commerce/utils/eq';
import log from '@headless-commerce/utils/log';
import { isNotNull } from '@headless-commerce/utils/null';
import { isNotUndefined } from '@headless-commerce/utils/undefined';
import type { Signal } from '@preact/signals-react';
import { batch, signal, useComputed, useSignal, useSignalEffect } from '@preact/signals-react';
import type { ReactNode } from 'react';
import { createContext, useCallback, useContext, useMemo } from 'react';

import {
  JACKET_KEY,
  LAYERED_IMAGE,
  NO_JACKET_STEPS,
  NO_STOCK_STEPS,
  NO_WAISTCOAT_STEPS,
  WAISTCOAT_KEY,
} from './constants';
import { adjustLayeredTransform, getImageUrl } from './utils/layerImage';
import { getFirstValidOption, getStepOptions } from './utils/options';
import { getAllIds, getProductIds, getStepNameByProductId, getStyleProductIds } from './utils/productIds';
import { findOptionBySelection } from './utils/stepOption';
import { trackPageLoadedEvent } from './utils/trackPageLoadedEvent';

export type LayeredPreviewPosition = {
  zoom: string;
  focalPoint: string;
};

export type PreviewData = {
  productIds: string[];
  staticImage: Partial<Record<DeviceName, string | undefined>> | undefined;
  isLayered: boolean;
};

export type ConfiguratorContextType = {
  availability: Signal<Record<string, boolean>>;
  baseColor: Signal<string | undefined>;
  campaignIds: Signal<Array<string>>;
  country: Signal<CountryConfiguration>;
  currentStep: Signal<number>;
  currentStepData: Signal<BlackTieConfiguratorConfiguratorStepsItem | undefined>;
  currentStepOptions: Signal<StepOption[]>;
  defaultSelection: Signal<Record<string, string>>;
  imageProductIds: Signal<{ layeredImage: string[]; staticImage: string[] }>;
  imageURL: Signal<string | undefined>;
  initializePreload: () => void;
  initializeSelection: () => void;
  initializeSignals: (props: ClientConfiguratorProps) => void;
  isFinished: Signal<boolean>;
  layeredPreviewPosition: Signal<LayeredPreviewPosition>;
  locale: Signal<Locale>;
  mainSteps: Signal<BlackTieConfiguratorConfiguratorStepsItem[]>;
  maxLayerZoom: Signal<number>;
  modelId: Signal<string>;
  outOfStock: Signal<Record<string, boolean>>;
  pageType: Signal<PageType>;
  preload: Signal<ConfiguratorPreload | undefined>;
  previewData: Signal<PreviewData>;
  previousSelection: Signal<Record<string, string>>;
  previousStep: Signal<string | undefined>;
  productAvailability: Signal<Array<{ id: string; availabilityStatus: AvailabilityStatus }>>;
  productIds: Signal<Array<string>>;
  recommendations: Signal<Record<string, string>>;
  selectedCampaign: Signal<string>;
  selectedOption: Signal<StepOption | undefined>;
  selection: Signal<Record<string, string>>;
  setBaseColor: (value: string) => void;
  setCurrentStep: (value: number) => void;
  setCurrentStepData: (value: BlackTieConfiguratorConfiguratorStepsItem) => void;
  setDefaultSelection: (newValue: Record<string, string>) => void;
  setImageURL: (value: string) => void;
  setLayeredPreviewPosition: (value: LayeredPreviewPosition) => void;
  setPreviewData: (value: PreviewData) => void;
  setPreviousSelection: (value: Record<string, string>) => void;
  setPreviousStep: (value: string) => void;
  setProductIds: (newProductIds: Array<string>) => void;
  setRecommendations: (value: Record<string, string>) => void;
  setSelectedCampaign: (value: string) => void;
  setSelectedOption: (value: StepOption) => void;
  setSelection: (newValue: Record<string, string>) => void;
  setStepOutOfStock: (key: string, value: boolean) => void;
  setSubStep: (value: string | null) => void;
  setTuxedoStyle: (value: 'two-piece' | 'three-piece') => void;
  steps: Signal<Array<BlackTieConfiguratorConfiguratorStepsItem>>;
  subStep: Signal<string | null>;
  subSteps: Signal<BlackTieConfiguratorConfiguratorStepsItem[]>;
  tuxedoStyle: Signal<'two-piece' | 'three-piece'>;
  updateBaseColor: () => void;
  updateCurrentStepData: () => void;
  updateCurrentStepOptions: () => void;
  updateImageURL: () => Promise<void>;
  updateLayeredPreviewPosition: () => void;
  updatePreviewData: () => void;
  updateSelectedCampaign: () => void;
  updateSelectedOption: () => void;
  updateSelection: () => void;
};

export const isLayeredImageStep = (step: BlackTieConfiguratorConfiguratorStepsItem) => step.imageType === LAYERED_IMAGE;

export const ConfiguratorContext = createContext<ConfiguratorContextType>({
  availability: signal({}),
  baseColor: signal('black'),
  campaignIds: signal([]),
  country: signal({
    siteID: 'INT' as SiteId,
    ecommerce: { currencyCode: '' },
    countryCode: '',
    languages: [],
    locale: DEFAULT_LOCALE,
    migrated: false,
    name: '',
    cookieBannerEnabled: false,
  }),
  currentStep: signal(0),
  currentStepData: signal(undefined),
  currentStepOptions: signal([]),
  defaultSelection: signal({}),
  imageProductIds: signal({ layeredImage: [], staticImage: [] }),
  imageURL: signal(undefined),
  initializePreload: () => {},
  initializeSelection: () => {},
  initializeSignals: () => {},
  isFinished: signal(false),
  layeredPreviewPosition: signal<LayeredPreviewPosition>({
    zoom: '100%',
    focalPoint: '0.5 0.5',
  }),
  locale: signal(DEFAULT_LOCALE),
  mainSteps: signal([]),
  maxLayerZoom: signal(100),
  modelId: signal(''),
  outOfStock: signal({}),
  pageType: signal('lookbuilder'),
  preload: signal(undefined),
  previewData: signal<PreviewData>({
    productIds: [],
    isLayered: false,
    staticImage: undefined,
  }),
  previousSelection: signal({}),
  previousStep: signal(undefined),
  productAvailability: signal<Array<{ id: string; availabilityStatus: AvailabilityStatus }>>([]),
  productIds: signal([]),
  recommendations: signal({}),
  selectedCampaign: signal(''),
  selectedOption: signal(undefined),
  selection: signal({}),
  setBaseColor: () => {},
  setCurrentStep: () => {},
  setCurrentStepData: () => {},
  setDefaultSelection: () => {},
  setImageURL: () => {},
  setLayeredPreviewPosition: () => {},
  setPreviewData: () => {},
  setPreviousSelection: () => {},
  setPreviousStep: () => {},
  setProductIds: () => {},
  setRecommendations: () => {},
  setSelectedCampaign: () => {},
  setSelectedOption: () => {},
  setSelection: () => {},
  setStepOutOfStock: () => {},
  setSubStep: () => {},
  setTuxedoStyle: () => {},
  steps: signal([]),
  subStep: signal(null),
  subSteps: signal([]),
  tuxedoStyle: signal('two-piece'),
  updateBaseColor: () => {},
  updateCurrentStepData: () => {},
  updateCurrentStepOptions: () => {},
  updateImageURL: () => Promise.resolve(),
  updateLayeredPreviewPosition: () => {},
  updatePreviewData: () => {},
  updateSelectedCampaign: () => {},
  updateSelectedOption: () => {},
  updateSelection: () => {},
});

export const useConfigurator = () => useContext(ConfiguratorContext);

export type ConfiguratorProviderProps = {
  children?: ReactNode;
};

export const ConfiguratorProvider = ({ children }: ConfiguratorProviderProps) => {
  const analytics = useAnalytics();
  const country = useSignal(useCountry());
  const locale = useSignal(useLocale());
  const pageType = useSignal(usePageType());
  const modelId = useSignal('');
  const productIds = useSignal<Array<string>>([]);
  const isFinished = useSignal(false);
  const maxLayerZoom = useSignal(100);
  const productAvailability = useSignal<Array<{ id: string; availabilityStatus: AvailabilityStatus }>>([]);
  const tuxedoStyle = useSignal<'two-piece' | 'three-piece'>('two-piece');
  const campaignIds = useSignal<Array<string>>([]);
  const steps = useSignal<Array<BlackTieConfiguratorConfiguratorStepsItem>>([]);
  const subStep = useSignal<string | null>(null);
  // The current selection, this will update based on options you select.
  const selection = useSignal<Record<string, string>>({});
  const previousStep = useSignal<string | undefined>(undefined);
  const currentStep = useSignal<number>(0);
  const currentStepData = useSignal<BlackTieConfiguratorConfiguratorStepsItem | undefined>(undefined);
  const currentStepOptions = useSignal<StepOption[]>([]);
  const selectedOption = useSignal<StepOption | undefined>(undefined);
  const baseColor = useSignal<string>('black');
  const outOfStock = useSignal<Record<string, boolean>>({});
  const previousSelection = useSignal<Record<string, string>>({});
  const layeredPreviewPositionDefault: LayeredPreviewPosition = useMemo(
    () => ({
      zoom: '100%',
      focalPoint: '0.5 0.5',
    }),
    [],
  );
  const layeredPreviewPosition = useSignal<LayeredPreviewPosition>(layeredPreviewPositionDefault);
  const previewDataDefault: PreviewData = useMemo(
    () => ({
      productIds: [],
      staticImage: undefined,
      isLayered: true,
    }),
    [],
  );
  const previewData = useSignal<PreviewData>(previewDataDefault);
  const imageURL = useSignal<string | undefined>(undefined);
  const selectedCampaign = useSignal<string>(campaignIds.value[0]);
  // Selection based on productId's. Will update when the tuxedo style changes.
  const defaultSelection = useSignal<Record<string, string>>({});
  const recommendations = useSignal<Record<string, string>>({});
  const preload = useSignal<ConfiguratorPreload | undefined>(undefined);

  const availability = useComputed<Record<string, boolean>>(() => {
    const availabilityTrack: Record<string, boolean> = {};

    (productAvailability.value as Product[]).forEach(({ id, availabilityStatus }) => {
      availabilityTrack[id] = availabilityStatus.isAvailable || availabilityStatus.preOrder || false;
    });

    return availabilityTrack;
  });

  const mainSteps = useComputed<BlackTieConfiguratorConfiguratorStepsItem[]>(() =>
    steps.value.filter(step => (step as ProductStepConfigurator)?.subStep !== 'isSubStep'),
  );

  const subSteps = useComputed<BlackTieConfiguratorConfiguratorStepsItem[]>(() =>
    steps.value.filter(step => (step as ProductStepConfigurator)?.subStep === 'isSubStep'),
  );

  const imageProductIds = useComputed<{ layeredImage: string[]; staticImage: string[] }>(() => {
    return {
      layeredImage: getAllIds(steps.value.filter(isLayeredImageStep), baseColor.value),
      staticImage: getAllIds(
        steps.value.filter(step => !isLayeredImageStep(step)),
        baseColor.value,
      ),
    };
  });

  useSignalEffect(() => {
    log.debug({
      method: 'ConfiguratorProvider:useSignalEffect',
      layeredPreviewPosition: layeredPreviewPosition.value,
      previewData: previewData.value,
      imageURL: imageURL.value,
    });
  });

  const setProductIds = useCallback(
    (newProductIds: Array<string>) => {
      productIds.value = newProductIds;
    },
    [productIds],
  );

  const setTuxedoStyle = useCallback(
    (newValue: 'two-piece' | 'three-piece') => {
      tuxedoStyle.value = newValue;
    },
    [tuxedoStyle],
  );

  const setSubStep = useCallback(
    (value: string | null) => {
      subStep.value = value;
    },
    [subStep],
  );

  const setPreviousStep = useCallback(
    (value: string) => {
      previousStep.value = value;
    },
    [previousStep],
  );

  const setCurrentStep = useCallback(
    (value: number) => {
      batch(() => {
        setPreviousStep(String(currentStep.value));

        currentStep.value = value;
      });
    },
    [currentStep, setPreviousStep],
  );

  const setCurrentStepData = useCallback(
    (value: BlackTieConfiguratorConfiguratorStepsItem) => {
      currentStepData.value = value;
    },
    [currentStepData],
  );

  const updateCurrentStepData = useCallback(() => {
    batch(() => {
      if (subStep.value) {
        const step = subSteps.value.find(step => step.categoryStep === subStep.value);
        if (step) {
          setCurrentStepData(step);
          return;
        }
      }

      setCurrentStepData(mainSteps.value[currentStep.value]);
    });
  }, [currentStep, mainSteps, subSteps, setCurrentStepData, subStep]);

  const updateCurrentStepOptions = useCallback(() => {
    batch(() => {
      currentStepOptions.value = currentStepData.value ? getStepOptions(currentStepData.value, baseColor.value) : [];
    });
  }, [currentStepData, baseColor, currentStepOptions]);

  const setSelectedOption = useCallback(
    (value: StepOption) => {
      selectedOption.value = value;
    },
    [selectedOption],
  );

  const updateSelectedOption = useCallback(() => {
    batch(() => {
      if (!currentStepData.value || !currentStepOptions.value.length) {
        return undefined;
      }

      const selectedValue = selection.value[String(currentStepData.value.categoryStep)];
      if (!selectedValue) {
        return undefined;
      }

      const value = findOptionBySelection(selectedValue)(currentStepOptions.value);

      if (value) {
        setSelectedOption(value);
      }
    });
  }, [currentStepData, currentStepOptions, selection, setSelectedOption]);

  const setBaseColor = useCallback(
    (value: string) => {
      baseColor.value = value;
    },
    [baseColor],
  );

  const updateBaseColor = useCallback(() => {
    batch(() => {
      if (
        (selectedOption.value?.__typename === 'ProductOptionConfigurator' ||
          selectedOption.value?.__typename === 'ProductOptionStaticImageConfigurator') &&
        // Hardcoded jacket step
        currentStep.value === 1
      ) {
        const value = selectedOption.value.baseColor;
        if (value) {
          setBaseColor(value);
        }
      }
    });
  }, [selectedOption, currentStep, setBaseColor]);

  const setStepOutOfStock = useCallback(
    (key: string, value: boolean) => {
      batch(() => {
        // Filtering out the campaign related steps,
        // they're not subject to availability verification
        if (!NO_STOCK_STEPS.includes(key) && outOfStock.value[key] !== value) {
          outOfStock.value = {
            ...outOfStock.value,
            [key]: value,
          };
        }
      });
    },
    [outOfStock],
  );

  const setPreviousSelection = useCallback(
    (value: Record<string, string>) => {
      previousSelection.value = value;
    },
    [previousSelection],
  );

  const setLayeredPreviewPosition = useCallback(
    (value: LayeredPreviewPosition) => {
      if (!deepEqual(value, layeredPreviewPosition.value)) {
        layeredPreviewPosition.value = value;
      }
    },
    [layeredPreviewPosition],
  );

  const updateLayeredPreviewPosition = useCallback(() => {
    if (!currentStepData.value) {
      return;
    }

    const { md, lg } = breakpoints;
    let device: DeviceName = 'desktop';

    if (isBrowser() && window.matchMedia) {
      if (window.matchMedia(`(max-width: ${md}px)`).matches) {
        device = 'mobile';
      } else if (window.matchMedia(`(max-width: ${lg}px)`).matches) {
        device = 'tablet';
      }
    }

    const { focalPoint, zoom } = layeredPreviewPositionDefault;

    const {
      previewImageFocalPoint,
      previewImageFocalPointMobile,
      previewImageFocalPointTablet,
      previewImageZoom,
      previewImageZoomMobile,
      previewImageZoomTablet,
    } = currentStepData.value as ProductStepConfigurator;

    const data: Record<DeviceName, LayeredPreviewPosition> = {
      mobile: {
        focalPoint: previewImageFocalPointMobile || focalPoint,
        zoom: previewImageZoomMobile || zoom,
      },
      tablet: {
        focalPoint: previewImageFocalPointTablet || focalPoint,
        zoom: previewImageZoomTablet || zoom,
      },
      desktop: {
        focalPoint: previewImageFocalPoint || focalPoint,
        zoom: previewImageZoom || zoom,
      },
    };

    setLayeredPreviewPosition(data[device]);
  }, [currentStepData, layeredPreviewPositionDefault, setLayeredPreviewPosition]);

  const setPreviewData = useCallback(
    (value: PreviewData) => {
      if (!deepEqual(value, previewData.value)) {
        previewData.value = value;
      }
    },
    [previewData],
  );

  const updatePreviewData = useCallback(() => {
    batch(() => {
      if (!currentStepData.value) {
        return;
      }

      const stepName = String(currentStepData.value?.categoryStep);

      let image: Partial<Record<DeviceName, string | undefined>> | undefined;
      const isLayered = (currentStepData.value?.imageType as ImageType) === LAYERED_IMAGE;

      if (!isLayered) {
        const { staticImagePatternDesktop, staticImagePatternMobile } =
          currentStepData.value as ProductStepConfigurator;

        image = {
          mobile: `${IMAGE_CDN_BASE_URL}${parseStaticPattern(
            staticImagePatternMobile as string,
            selection.value,
            country.value.siteID,
          )}`,
          desktop: `${IMAGE_CDN_BASE_URL}${parseStaticPattern(
            staticImagePatternDesktop as string,
            selection.value,
            country.value.siteID,
          )}`,
        };
      }

      const selectionWithoutLapel = Object.fromEntries(
        Object.entries(selection.value).filter(([key]) => key !== 'lapel'),
      );

      // The imageProductIds at this time does not contain the waistcoats correctly.
      let newProductIds = imageProductIds.value[isLayered ? 'layeredImage' : 'staticImage'].filter(id =>
        Object.values(selectionWithoutLapel).includes(id),
      );

      // Check for the current baseColor.value and tuxedoStyle.value. If the
      // tuxedo style is three-piece, add the id of the waistcoat with the
      // baseColor.value.
      if (tuxedoStyle.value === 'three-piece') {
        const waistcoatId = selectionWithoutLapel.waistcoatProductId;
        if (waistcoatId !== 'null' && !newProductIds.includes(waistcoatId)) {
          newProductIds.push(waistcoatId);
        }
      }

      // If the step requires no jacket to be shown on the preview image, remove it.
      if (NO_JACKET_STEPS.includes(stepName)) {
        newProductIds = newProductIds.filter(id => !id.includes(selection.value[JACKET_KEY]));
      }
      if (NO_WAISTCOAT_STEPS.includes(stepName)) {
        newProductIds = newProductIds.filter(id => !id.includes(selection.value[WAISTCOAT_KEY]));
      }
      // Remove Duplicates
      newProductIds = uniqueElements(newProductIds);

      const newPreviewData: PreviewData = {
        productIds: newProductIds,
        staticImage: image,
        isLayered,
      };

      setPreviewData(newPreviewData);
    });
  }, [country, setPreviewData, currentStepData, imageProductIds, selection, tuxedoStyle]);

  const setImageURL = useCallback(
    (value: string) => {
      imageURL.value = value;
    },
    [imageURL],
  );

  const updateImageURL = useCallback(async () => {
    await batch(async () => {
      // If we have a static image for this step, we don't need to fetch the layered image.
      if (
        selectedOption.value?.__typename === 'ProductOptionStaticImageConfigurator' &&
        selectedOption.value.staticImage
      ) {
        return;
      }

      // TODO: These checks are weird.
      if (
        modelId.value === '' ||
        previewData.value.productIds.length === 0 ||
        country.value.siteID === ('' as SiteId) ||
        locale.value === ('' as Locale)
      ) {
        return;
      }

      try {
        const newImageURL = adjustLayeredTransform(
          await getImageUrl({
            modelId: modelId.value,
            productIds: previewData.value.productIds,
            siteId: country.value.siteID,
            locale: locale.value,
          }),
        );
        setImageURL(newImageURL);
      } catch (error: unknown) {
        log.error(error);
      }
    });
  }, [locale, country, modelId, previewData, setImageURL, selectedOption]);

  const setSelectedCampaign = useCallback(
    (value: string) => {
      selectedCampaign.value = value;
    },
    [selectedCampaign],
  );

  const updateSelectedCampaign = useCallback(() => {
    batch(() => {
      if (
        selectedOption.value &&
        selectedOption.value.__typename === 'TuxedoStyle' &&
        selectedOption.value.product?.campaign
      ) {
        setSelectedCampaign(selectedOption.value.product.campaign);
      }
    });
  }, [selectedOption, setSelectedCampaign]);

  const setDefaultSelection = useCallback(
    (newValue: Record<string, string>) => {
      if (!deepEqual(defaultSelection.value, newValue)) {
        defaultSelection.value = newValue;
      }
    },
    [defaultSelection],
  );

  const setRecommendations = useCallback(
    (value: Record<string, string>) => {
      recommendations.value = value;
    },
    [recommendations],
  );

  const getRecommendations = useCallback(
    (recommendedIds: Array<string>): Record<string, string> => {
      const recommendedKeys: Array<string> = recommendedIds.map(recommendedId =>
        String(getStepNameByProductId(recommendedId, steps.value, baseColor.value)),
      );

      return Object.fromEntries(recommendedKeys.map((key, index) => [key, recommendedIds[index]]));
    },
    [baseColor, steps],
  );

  const recommendationsForRecommendedIds = useCallback(
    (recommendedIds: Array<string>) => {
      const unchangedSelection = Object.entries(selection.value)
        // Find all selected values that are the same as the default (so unchanged).
        .filter(([key, value]) => {
          return defaultSelection.value[key] === value;
        });

      const recommendedKeys: Array<string> = recommendedIds.map(recommendedId =>
        String(getStepNameByProductId(recommendedId, steps.value, baseColor.value)),
      );

      const recommendedSelection = getRecommendations(recommendedIds);

      return Object.fromEntries(
        unchangedSelection
          .filter(([key]) => (key === 'waistcoatProductId' ? tuxedoStyle.value === 'three-piece' : true))
          .filter(([key]) => recommendedKeys.includes(key))
          .map(([key]) => [key, recommendedSelection[key]]),
      );
    },
    [baseColor, defaultSelection, getRecommendations, steps, tuxedoStyle, selection],
  );

  // Go through productIds
  // Find the first ProductOption that has RecommendedIds
  // Use these ids.
  const findRecommendedIdsForProductIds = (
    productIds: Array<string>,
    steps: Array<BlackTieConfiguratorConfiguratorStepsItem>,
    color: string,
  ): Array<string> | undefined => {
    for (const productId of productIds) {
      const step = steps.find(step => {
        const allIds = getAllIds([step], color);
        return allIds.includes(productId);
      });
      if (!step) {
        return;
      }
      const options = getStepOptions(step as BlackTieConfiguratorConfiguratorStepsItem, color).filter(
        option => option.__typename === 'ProductOptionConfigurator' && option.baseColor === color,
      );
      const stepWithRecommendations = options.find(
        option => option.__typename === 'ProductOptionConfigurator' && option.recommendations,
      );
      if (
        stepWithRecommendations?.__typename === 'ProductOptionConfigurator' &&
        stepWithRecommendations.recommendations
      ) {
        return stepWithRecommendations.recommendations.split(',').map(id => id.trim());
      }
    }
  };

  const selectionFlag = useSignal<boolean>(false);

  const setSelection = useCallback(
    (newValue: Record<string, string>) => {
      if (!deepEqual(selection.value, newValue)) {
        selection.value = newValue;
      }
    },
    [selection],
  );

  const ensureInStockSelection = useCallback(
    (selection: Record<string, string>): Record<string, string> => {
      const entries = Object.entries(selection).filter(([key]) => key !== 'style' && key !== 'waistcoatProductId');
      const outOfStockEntries = entries.filter(([, value]) => !availability.value?.[value]);
      if (!outOfStockEntries.length) {
        return selection;
      }
      const inStockEntries = entries.filter(([, value]) => availability.value?.[value]);

      const alternativeEntries = outOfStockEntries
        .map(([key, value]) => {
          const stepName = getStepNameByProductId(value, steps.value, baseColor.value);
          if (stepName) {
            const step = steps.value.find(step => step.categoryStep === stepName);
            if (step) {
              try {
                const firstValid = getFirstValidOption(step, availability.value, baseColor.value);
                if (
                  firstValid &&
                  (firstValid.__typename === 'ProductOptionConfigurator' ||
                    firstValid.__typename === 'ProductOptionStaticImageConfigurator')
                ) {
                  return [key, firstValid.productId] as [string, string];
                }
              } catch (error: unknown) {
                return false;
              }
            }
          }
          return false;
        })
        .filter(Boolean) as Array<[string, string]>;

      return {
        style: selection.style,
        waistcoatProductId: selection.waistcoatProductId,
        ...Object.fromEntries([...inStockEntries, ...alternativeEntries]),
      };
    },
    [availability, baseColor, steps],
  );

  const updateSelection = useCallback(() => {
    batch(() => {
      let stepIds: Record<string, string> = {};
      const option = selectedOption.value;

      if (option?.__typename === 'TuxedoStyle') {
        stepIds = getStyleProductIds(option);
      }

      let recommendedIds: Array<string> = [];
      if ((option as ProductOptionConfigurator)?.recommendations) {
        recommendedIds = String((option as ProductOptionConfigurator)?.recommendations)
          .split(',')
          .map(id => id.trim());
      }

      let recommended: Record<string, string> = {};
      if (
        option &&
        option.__typename === 'ProductOptionConfigurator' &&
        option.recommendations?.length &&
        Object.keys(recommendations.value).some(key => availability.value?.[recommendations.value[key]])
      ) {
        recommended = recommendationsForRecommendedIds(recommendedIds);
      }

      if (option?.__typename === 'TuxedoStyle' || Object.keys(recommended).length) {
        // If the new selection contains out of stock items, we need the next option for the step
        setDefaultSelection(
          ensureInStockSelection({
            ...defaultSelection.value,
            ...stepIds,
            ...recommended,
          }),
        );
      }

      if (Object.keys(recommended).length) {
        selectionFlag.value = true;
      }

      setSelection(
        ensureInStockSelection({
          ...selection.value,
          ...stepIds,
          ...recommended,
        }),
      );

      if (recommendedIds.length) {
        setRecommendations(getRecommendations(recommendedIds));
      }
    });
  }, [
    availability,
    defaultSelection,
    ensureInStockSelection,
    getRecommendations,
    recommendations,
    recommendationsForRecommendedIds,
    selectedOption,
    selection,
    selectionFlag,
    setDefaultSelection,
    setRecommendations,
    setSelection,
  ]);

  const initializeSelection = useCallback(() => {
    batch(() => {
      steps.value.forEach(step => {
        const { previewImageZoom } = step as ProductStepConfigurator;
        const isLayered = step.imageType === LAYERED_IMAGE;
        const noZoom = '100%';

        // These update the steps if they are of the correct type
        if (step?.__typename === 'TuxedoStyleStep') {
          try {
            const firstValid = getFirstValidOption(step, availability.value, baseColor.value);
            if (!firstValid) {
              throw new Error('No valid style option found');
            }
            const stepIds = getStyleProductIds(firstValid as TuxedoStyleStepOption);

            setDefaultSelection({
              ...selection.value,
              ...stepIds,
              style: String((firstValid as TuxedoStyleStepOption).style.tuxedoStyle),
            });

            setSelection({
              ...selection.value,
              ...stepIds,
              style: String((firstValid as TuxedoStyleStepOption).style.tuxedoStyle),
            });
          } catch (error) {
            log.error(error);
          }
        }

        if (step?.__typename === 'ProductStepConfigurator') {
          try {
            let productId: string | undefined;

            // First try to find it in the productIds (which are passed from the
            // server), otherwise take the fist option value.
            const stepProductIds = step.productOptionsCollection?.items.map(entry => entry?.productId) ?? [];
            productId = stepProductIds.find(id => id && productIds.value.includes(id)) ?? undefined;

            if (!productId) {
              const firstValid = getFirstValidOption(
                step,
                availability.value,
                baseColor.value,
              ) as ProductStepConfiguratorProductOptionsItem;
              if (!firstValid) {
                throw new Error('No valid option found');
              }
              productId = String(firstValid.productId);
            }

            setDefaultSelection({
              ...selection.value,
              [String(step.categoryStep)]: String(productId),
            });
            setSelection({
              ...selection.value,
              [String(step.categoryStep)]: String(productId),
            });
          } catch (error) {
            log.error(error);
          }
        }

        if (isLayered) {
          maxLayerZoom.value = Math.max(maxLayerZoom.value, parseInt(String(previewImageZoom || noZoom), 10));
        }
      });
    });
  }, [availability, baseColor, maxLayerZoom, productIds, selection, setDefaultSelection, setSelection, steps]);

  const initializePreload = useCallback(() => {
    batch(() => {
      const {
        step: preloadStep,
        campaignId: preloadCampaign,
        productIds: preloadProductIds,
        color: preloadColor,
      } = preload.value as ConfiguratorPreload;

      const stepIndex = mainSteps.value.findIndex(step => step.categoryStep === preloadStep);
      let preSelection = { ...selection.value };

      setBaseColor(preloadColor);

      steps.value.forEach(step => {
        const stepIds = getAllIds([step], baseColor.value);

        if (preloadProductIds.some(id => stepIds.includes(id))) {
          const productId = preloadProductIds.find(id => stepIds.includes(id)) as string;

          if (step.__typename === 'TuxedoStyleStep') {
            const option = getStepOptions(step, preloadColor).find(opt => {
              const pids = getProductIds([opt]);
              return pids.includes(productId);
            });

            preSelection = {
              ...preSelection,
              ...getStyleProductIds(option as TuxedoStyleStepOption),
            };
          } else if (availability.value?.[productId]) {
            preSelection[String(step.categoryStep)] = productId;
          }
        }
      });

      if (preloadCampaign) {
        const campaignStep = steps.value.find(step => step.__typename === 'TuxedoStyleStep');

        if (campaignStep) {
          setSelectedCampaign(preloadCampaign);
        }
      }

      setSelection(preSelection);
      setDefaultSelection(preSelection);
      setTuxedoStyle((preSelection.style || 'two-piece') as 'two-piece' | 'three-piece');

      const recommendedIds = findRecommendedIdsForProductIds(preloadProductIds, steps.value, baseColor.value);
      if (recommendedIds) {
        const recommendations = getRecommendations(recommendedIds);
        setRecommendations(recommendations);
      }

      if (stepIndex !== -1) {
        setCurrentStep(stepIndex);
      }
    });
  }, [
    availability,
    baseColor,
    getRecommendations,
    mainSteps,
    preload,
    selection,
    setBaseColor,
    setCurrentStep,
    setDefaultSelection,
    setRecommendations,
    setSelectedCampaign,
    setSelection,
    setTuxedoStyle,
    steps,
  ]);

  const initializeSignals = useCallback(
    (props: ClientConfiguratorProps) => {
      batch(() => {
        // Set values from props, calculated on server render.
        country.value = props.country;
        locale.value = props.params.locale;
        steps.value = props.configuratorSteps;
        campaignIds.value = props.campaignIds;
        productAvailability.value = props.productAvailability;
        modelId.value = props.modelId;
        setProductIds(props.productIds);
        setSelectedCampaign(props.campaignIds[0]);
        // setTuxedoStyle('two-piece');
        if (props.imageURL) {
          setImageURL(props.imageURL);
        }

        initializeSelection();

        const recommendedIds = findRecommendedIdsForProductIds(props.productIds, steps.value, baseColor.value);
        if (recommendedIds) {
          setRecommendations(recommendationsForRecommendedIds(recommendedIds));
        }

        for (const step of steps.value) {
          const options = getStepOptions(step, baseColor.value);
          const stepProductIds = getProductIds(options);
          const allOptionsOutOfStock = stepProductIds.every(productId => {
            return !availability.value?.[productId];
          });
          if (allOptionsOutOfStock) {
            setStepOutOfStock(String(step.categoryStep), true);
          }
        }

        // Propagate values by update functions. The order matters here.
        updateSelection();
        updateSelectedOption();
        updateSelectedCampaign();
        updateBaseColor();
        updateImageURL();
        updateCurrentStepData();
        updateCurrentStepOptions();

        // Preload overwrites everything
        if (props.preload) {
          preload.value = props.preload;
          if (availability.value && steps.value) {
            selectionFlag.value = true;
            initializePreload();
          }
        }

        updatePreviewData();
        updateLayeredPreviewPosition();

        // Reset subscriptions
        selection.subscribe(() => {
          // Prevents loop of updateSelection
          if (Object.keys(recommendations.value).length && selectionFlag.value) {
            selectionFlag.value = false;
            return;
          }

          updateSelectedOption();
          updateSelection();
          updateSelectedCampaign();
        });

        selectedOption.subscribe(() => {
          updateBaseColor();
          updatePreviewData();
        });

        previewData.subscribe(async () => {
          await updateImageURL();
        });

        currentStep.subscribe(() => {
          updateCurrentStepData();
        });

        subStep.subscribe(() => {
          updateCurrentStepData();
        });

        currentStepData.subscribe(() => {
          updateCurrentStepOptions();
          updatePreviewData();
          updateLayeredPreviewPosition();

          if (
            isBrowser() &&
            analytics.value.loaded.value === true &&
            currentStepData.value &&
            isNotUndefined(cart.value) &&
            isNotUndefined(customer.value) &&
            isNotUndefined(currentStepData.value?.categoryStep) &&
            isNotUndefined(cartSegmentProducts.value) &&
            isNotNull(currentStepData.value?.categoryStep)
          ) {
            trackPageLoadedEvent({
              categoryStep: currentStepData.value?.categoryStep,
              country: country.value,
              locale: locale.value,
              pageType: pageType.value,
              segmentProducts: cartSegmentProducts.value,
              style: tuxedoStyle.value,
            });
          }
        });

        currentStepOptions.subscribe(() => {
          updateSelectedOption();
        });
      });
    },
    [
      analytics.value.loaded.value,
      availability.value,
      baseColor.value,
      campaignIds,
      country,
      currentStep,
      currentStepData,
      currentStepOptions,
      initializePreload,
      initializeSelection,
      locale,
      modelId,
      pageType.value,
      preload,
      previewData,
      productAvailability,
      recommendations.value,
      recommendationsForRecommendedIds,
      selectedOption,
      selection,
      selectionFlag,
      setImageURL,
      setProductIds,
      setRecommendations,
      setSelectedCampaign,
      setStepOutOfStock,
      steps,
      subStep,
      tuxedoStyle.value,
      updateBaseColor,
      updateCurrentStepData,
      updateCurrentStepOptions,
      updateImageURL,
      updateLayeredPreviewPosition,
      updatePreviewData,
      updateSelectedCampaign,
      updateSelectedOption,
      updateSelection,
    ],
  );

  // TODO: Horrible way to do this, needs a refactor.
  const value = useMemo(
    () => ({
      availability,
      baseColor,
      campaignIds,
      cart,
      country,
      currentStep,
      currentStepData,
      currentStepOptions,
      defaultSelection,
      imageProductIds,
      imageURL,
      initializePreload,
      initializeSelection,
      initializeSignals,
      isFinished,
      layeredPreviewPosition,
      locale,
      mainSteps,
      maxLayerZoom,
      modelId,
      outOfStock,
      pageType,
      preload,
      previewData,
      previousSelection,
      previousStep,
      productAvailability,
      productIds,
      recommendations,
      selectedCampaign,
      selectedOption,
      selection,
      setBaseColor,
      setCurrentStep,
      setCurrentStepData,
      setDefaultSelection,
      setImageURL,
      setLayeredPreviewPosition,
      setPreviewData,
      setPreviousSelection,
      setPreviousStep,
      setProductIds,
      setRecommendations,
      setSelectedCampaign,
      setSelectedOption,
      setSelection,
      setStepOutOfStock,
      setSubStep,
      setTuxedoStyle,
      steps,
      subStep,
      subSteps,
      tuxedoStyle,
      updateBaseColor,
      updateCurrentStepData,
      updateCurrentStepOptions,
      updateImageURL,
      updateLayeredPreviewPosition,
      updatePreviewData,
      updateSelectedCampaign,
      updateSelectedOption,
      updateSelection,
    }),
    [
      availability,
      baseColor,
      campaignIds,
      country,
      currentStep,
      currentStepData,
      currentStepOptions,
      defaultSelection,
      imageProductIds,
      imageURL,
      initializePreload,
      initializeSelection,
      initializeSignals,
      isFinished,
      layeredPreviewPosition,
      locale,
      mainSteps,
      maxLayerZoom,
      modelId,
      outOfStock,
      pageType,
      preload,
      previewData,
      previousSelection,
      previousStep,
      productAvailability,
      productIds,
      recommendations,
      selectedCampaign,
      selectedOption,
      selection,
      setBaseColor,
      setCurrentStep,
      setCurrentStepData,
      setDefaultSelection,
      setImageURL,
      setLayeredPreviewPosition,
      setPreviewData,
      setPreviousSelection,
      setPreviousStep,
      setProductIds,
      setRecommendations,
      setSelectedCampaign,
      setSelectedOption,
      setSelection,
      setStepOutOfStock,
      setSubStep,
      setTuxedoStyle,
      steps,
      subStep,
      subSteps,
      tuxedoStyle,
      updateBaseColor,
      updateCurrentStepData,
      updateCurrentStepOptions,
      updateImageURL,
      updateLayeredPreviewPosition,
      updatePreviewData,
      updateSelectedCampaign,
      updateSelectedOption,
      updateSelection,
    ],
  );

  return <ConfiguratorContext.Provider value={value}>{children}</ConfiguratorContext.Provider>;
};
