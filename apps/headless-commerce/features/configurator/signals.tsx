'use client';

import type { Signal } from '@preact/signals-react';
import { batch, computed, signal } from '@preact/signals-react';
import type { DeviceName } from '@susu/headless-commerce/components/ResponsiveImage/ResponsiveImage.types';
import { parseStaticPattern } from '@susu/headless-commerce/components/ResponsiveImage/utils';
import { breakpoints, DEFAULT_LOCALE, IMAGE_CDN_BASE_URL } from '@susu/headless-commerce/config/config';
import type { Locale } from '@susu/headless-commerce/config/locale';
import type {
  ClientConfiguratorProps,
  ConfiguratorPreload,
  ImageType,
  TuxedoStyleStepOption,
} from '@susu/headless-commerce/features/configurator/components/ClientConfigurator';
import type { StepOption } from '@susu/headless-commerce/features/configurator/components/ClientStepOptions/ClientStepOptions';
import type { CommerceProductAvailabilityQuery } from '@susu/headless-commerce/gql/generated/commerceProductAvailability.operation';
import type {
  BlackTieConfiguratorConfiguratorStepsItem,
  Product,
  ProductOptionConfigurator,
  ProductStepConfigurator,
  ProductStepConfiguratorProductOptionsItem,
  SiteId,
} from '@susu/headless-commerce/gql/generated/graphql';
import type { CountryConfiguration } from '@susu/headless-commerce/types/CountryConfiguration';
import { uniqueElements } from '@susu/headless-commerce/utils/array';
import { isBrowser } from '@susu/headless-commerce/utils/environment';
import { deepEqual } from '@susu/headless-commerce/utils/eq';
import log from '@susu/headless-commerce/utils/log';
import type { ReactNode } from 'react';
import { createContext, useContext, useMemo } from 'react';

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
  preload: Signal<ConfiguratorPreload | undefined>;
  previewData: Signal<PreviewData>;
  previousSelection: Signal<Record<string, string>>;
  previousStep: Signal<string | undefined>;
  productAvailability: Signal<CommerceProductAvailabilityQuery>;
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
  setTuxedoStyle: (value: string) => void;
  steps: Signal<Array<BlackTieConfiguratorConfiguratorStepsItem>>;
  subStep: Signal<string | null>;
  subSteps: Signal<BlackTieConfiguratorConfiguratorStepsItem[]>;
  tuxedoStyle: Signal<string>;
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

export const createConfiguratorDefaults = (): ConfiguratorContextType => {
  const locale = signal<Locale>(DEFAULT_LOCALE);

  const country = signal<CountryConfiguration>({
    siteID: 'INT' as SiteId,
    ecommerce: {
      currencyCode: '',
    },
    countryCode: '',
    languages: [],
    locale: DEFAULT_LOCALE,
    migrated: false,
    name: '',
    cookieBannerEnabled: false,
  });

  const modelId = signal<string>('');

  const productIds = signal<Array<string>>([]);

  const setProductIds = (newProductIds: Array<string>) => {
    productIds.value = newProductIds;
  };

  const isFinished = signal<boolean>(false);

  const maxLayerZoom = signal<number>(100);

  const productAvailability = signal<CommerceProductAvailabilityQuery>({
    getProductsByIds: [],
  });

  const availability = computed<Record<string, boolean>>(() => {
    const availabilityTrack: Record<string, boolean> = {};

    ((productAvailability.value.getProductsByIds || []) as Product[]).forEach(({ id, availabilityStatus }) => {
      availabilityTrack[id] = availabilityStatus.isAvailable || availabilityStatus.preOrder || false;
    });

    return availabilityTrack;
  });

  const tuxedoStyle = signal<string>('two-piece');

  const setTuxedoStyle = (newValue: string) => {
    tuxedoStyle.value = newValue;
  };

  const baseColor = signal<string>('black');

  const setBaseColor = (value: string) => {
    baseColor.value = value;
  };

  const updateBaseColor = () => {
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
  };

  const campaignIds = signal<Array<string>>([]);

  const steps = signal<Array<BlackTieConfiguratorConfiguratorStepsItem>>([]);

  const subStep = signal<string | null>(null);

  const setSubStep = (value: string | null) => {
    subStep.value = value;
  };

  const mainSteps = computed<BlackTieConfiguratorConfiguratorStepsItem[]>(() =>
    steps.value.filter(step => (step as ProductStepConfigurator)?.subStep !== 'isSubStep'),
  );

  const subSteps = computed<BlackTieConfiguratorConfiguratorStepsItem[]>(() =>
    steps.value.filter(step => (step as ProductStepConfigurator)?.subStep === 'isSubStep'),
  );

  const selectedOption = signal<StepOption | undefined>(undefined);

  const setSelectedOption = (value: StepOption) => {
    selectedOption.value = value;
  };

  const updateSelectedOption = () => {
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
  };

  const imageProductIds = computed<{ layeredImage: string[]; staticImage: string[] }>(() => {
    return {
      layeredImage: getAllIds(steps.value.filter(isLayeredImageStep), baseColor.value),
      staticImage: getAllIds(
        steps.value.filter(step => !isLayeredImageStep(step)),
        baseColor.value,
      ),
    };
  });

  const imageURL = signal<string | undefined>(undefined);

  const setImageURL = (value: string) => {
    imageURL.value = value;
  };

  const updateImageURL = async () => {
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
  };

  const outOfStock = signal<Record<string, boolean>>({});

  const setStepOutOfStock = (key: string, value: boolean) => {
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
  };

  const previousSelection = signal<Record<string, string>>({});

  const setPreviousSelection = (value: Record<string, string>) => {
    previousSelection.value = value;
  };

  const currentStep = signal<number>(0);

  const setCurrentStep = (value: number) => {
    batch(() => {
      setPreviousStep(String(currentStep.value));

      currentStep.value = value;
    });
  };

  const currentStepData = signal<BlackTieConfiguratorConfiguratorStepsItem | undefined>(undefined);

  const setCurrentStepData = (value: BlackTieConfiguratorConfiguratorStepsItem) => {
    currentStepData.value = value;
  };

  const updateCurrentStepData = () => {
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
  };

  const currentStepOptions = signal<StepOption[]>([]);

  const updateCurrentStepOptions = () => {
    batch(() => {
      currentStepOptions.value = currentStepData.value ? getStepOptions(currentStepData.value, baseColor.value) : [];
    });
  };

  const previousStep = signal<string | undefined>(undefined);

  const setPreviousStep = (value: string) => {
    previousStep.value = value;
  };

  const layeredPreviewPositionDefault: LayeredPreviewPosition = {
    zoom: '100%',
    focalPoint: '0.5 0.5',
  };
  const layeredPreviewPosition = signal<LayeredPreviewPosition>(layeredPreviewPositionDefault);

  const setLayeredPreviewPosition = (value: LayeredPreviewPosition) => {
    if (!deepEqual(value, layeredPreviewPosition.value)) {
      layeredPreviewPosition.value = value;
    }
  };

  const updateLayeredPreviewPosition = () => {
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
  };

  const previewDataDefault: PreviewData = {
    productIds: productIds.value,
    staticImage: undefined,
    isLayered: true,
  };

  const previewData = signal<PreviewData>(previewDataDefault);

  const setPreviewData = (value: PreviewData) => {
    if (!deepEqual(value, previewData.value)) {
      previewData.value = value;
    }
  };

  const updatePreviewData = () => {
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
  };

  const selectedCampaign = signal<string>(campaignIds.value[0]);

  const setSelectedCampaign = (value: string) => {
    selectedCampaign.value = value;
  };

  const updateSelectedCampaign = () => {
    batch(() => {
      if (
        selectedOption.value &&
        selectedOption.value.__typename === 'TuxedoStyle' &&
        selectedOption.value.product?.campaign
      ) {
        setSelectedCampaign(selectedOption.value.product.campaign);
      }
    });
  };

  // Selection based on productId's. Will update when the tuxedo style changes.
  const defaultSelection = signal<Record<string, string>>({});

  const setDefaultSelection = (newValue: Record<string, string>) => {
    if (!deepEqual(defaultSelection.value, newValue)) {
      defaultSelection.value = newValue;
    }
  };

  const recommendations = signal<Record<string, string>>({});

  const setRecommendations = (value: Record<string, string>) => {
    recommendations.value = value;
  };

  const getRecommendations = (recommendedIds: Array<string>): Record<string, string> => {
    const recommendedKeys: Array<string> = recommendedIds.map(recommendedId =>
      String(getStepNameByProductId(recommendedId, steps.value, baseColor.value)),
    );

    return Object.fromEntries(recommendedKeys.map((key, index) => [key, recommendedIds[index]]));
  };

  const recommendationsForRecommendedIds = (recommendedIds: Array<string>) => {
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
  };

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

  // The current selection, this will update based on options you select.
  const selection = signal<Record<string, string>>({});

  let selectionFlag = false;

  const setSelection = (newValue: Record<string, string>) => {
    if (!deepEqual(selection.value, newValue)) {
      selection.value = newValue;
    }
  };

  const ensureInStockSelection = (selection: Record<string, string>): Record<string, string> => {
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
  };

  const updateSelection = () => {
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
        selectionFlag = true;
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
  };

  const preload = signal<ConfiguratorPreload | undefined>(undefined);

  const initializeSelection = () => {
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
  };

  const initializePreload = () => {
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
      setTuxedoStyle(preSelection.style || 'two-piece');

      const recommendedIds = findRecommendedIdsForProductIds(preloadProductIds, steps.value, baseColor.value);
      if (recommendedIds) {
        const recommendations = getRecommendations(recommendedIds);
        setRecommendations(recommendations);
      }

      if (stepIndex !== -1) {
        setCurrentStep(stepIndex);
      }
    });
  };

  const initializeSignals = (props: ClientConfiguratorProps) => {
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
          selectionFlag = true;
          initializePreload();
        }
      }

      updatePreviewData();
      updateLayeredPreviewPosition();

      // Reset subscriptions
      selection.subscribe(() => {
        // Prevents loop of updateSelection
        if (Object.keys(recommendations.value).length && selectionFlag) {
          selectionFlag = false;
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
      });

      currentStepOptions.subscribe(() => {
        updateSelectedOption();
      });
    });
  };

  return {
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
  };
};

export const ConfiguratorContext = createContext<ConfiguratorContextType>(createConfiguratorDefaults());

export const useConfigurator = () => useContext(ConfiguratorContext);

export type ConfiguratorProviderProps = {
  children?: ReactNode;
};

export const ConfiguratorProvider = ({ children }: ConfiguratorProviderProps) => {
  const value = useMemo(createConfiguratorDefaults, []);

  return <ConfiguratorContext.Provider value={value}>{children}</ConfiguratorContext.Provider>;
};
