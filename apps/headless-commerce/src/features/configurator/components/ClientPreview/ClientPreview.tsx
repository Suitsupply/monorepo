'use client';

import { ResponsiveImageV2 } from '@headless-commerce/components/ResponsiveImage/ResponsiveImageV2';
import {
  cleanUpLookbuilderUrl,
  generateBowTieSrcSets,
  generateSrcSetsLookbuilder,
  modifyUrlForBowTie,
} from '@headless-commerce/components/ResponsiveImageWrapper/utils';
import { ClientPreviewStaticImage } from '@headless-commerce/features/configurator/components/ClientPreview/ClientPreviewStaticImage';
import { useConfigurator } from '@headless-commerce/features/configurator/signals';
import { useResizeObserver } from '@headless-commerce/hooks/useResizeObserver';
import { isNull } from '@headless-commerce/utils/null';
import { waitForTransition } from '@headless-commerce/utils/promise';
import { isUndefined } from '@headless-commerce/utils/undefined';
import { batch } from '@preact/signals-react';
import { useComputed, useSignal, useSignalEffect, useSignals } from '@preact/signals-react/runtime';
import classNames from 'classnames';
import type { CSSProperties } from 'react';
import { useRef } from 'react';

import styles from './ClientPreview.module.scss';

const sizes = {
  xs: '100vw',
  md: '100vw',
  lg: '70vw',
};

const BTC_ALT_TEXT = 'BTC - Preview';

export default function ClientPreview() {
  useSignals();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const { currentStepData, imageURL, layeredPreviewPosition, previewData, updateLayeredPreviewPosition } =
    useConfigurator();
  const scale = useSignal<number>(1);
  const focusX = useSignal<string>('50%');
  const focusY = useSignal<string>('50%');
  const imageSrc = useSignal<string>(imageURL.value || '');
  const imageSourceSets = useSignal<{
    desktopSrcSet: string;
    mobileSrcSet: string;
    tabletSrcSet: string;
  }>({
    desktopSrcSet: '',
    mobileSrcSet: '',
    tabletSrcSet: '',
  });
  const wrapperHasTransition = useSignal<boolean>(true);

  // Controls wether to show the bowtie image during the transition to the
  // bowtie step.
  const bowtieImageShown = useSignal<boolean>(false);
  const bowtieImageSrc = useSignal<string>('');
  const bowtieImageSourceSets = useSignal<{
    desktopSrcSet: string;
    mobileSrcSet: string;
    tabletSrcSet: string;
  }>({
    desktopSrcSet: '',
    mobileSrcSet: '',
    tabletSrcSet: '',
  });

  const previewDynamicStyle = useComputed(() => {
    return {
      '--image-scale': scale.value,
      '--image-focus-x': focusX.value,
      '--image-focus-y': focusY.value,
    } as CSSProperties;
  });

  const isLayeredImage = useComputed(() => previewData.value.isLayered);
  const isBowTieStep = useComputed(() => currentStepData.value?.categoryStep === 'bow-tie');
  const previousStep = useSignal<string | undefined>(undefined);

  useSignalEffect(() => {
    if (!isLayeredImage.value) {
      scale.value = 1;
      focusX.value = '50%';
      focusY.value = '50%';
      wrapperHasTransition.value = true;
      return;
    }

    (async () => {
      const imageURLValue = imageURL.value;
      const categoryStep = currentStepData.value?.categoryStep;

      if (
        isUndefined(imageURLValue) ||
        isUndefined(categoryStep) ||
        isNull(categoryStep) ||
        isNull(wrapperRef.current)
      ) {
        return;
      }

      const { zoom, focalPoint } = layeredPreviewPosition.value;
      const imageScale = parseInt(zoom, 10) / 100;
      const [x, y] = focalPoint.split(' ').map(Number);
      const imageFocusX = `${50 - x * 100}%`;
      const imageFocusY = `${50 - y * 100}%`;

      if (isBowTieStep.value) {
        batch(() => {
          // If we are coming from a different step, we need to update the
          // image. If it's the same step, only update the bowtieImage.
          if (previousStep.value !== categoryStep) {
            imageSrc.value = cleanUpLookbuilderUrl(imageURLValue);
            imageSourceSets.value = generateSrcSetsLookbuilder(imageSrc.value, sizes);

            focusX.value = imageFocusX;
            focusY.value = imageFocusY;
            scale.value = imageScale;

            // Only do this if we are coming from a different step.
            bowtieImageShown.value = false;
          }

          bowtieImageSrc.value = modifyUrlForBowTie(cleanUpLookbuilderUrl(imageURLValue));
          bowtieImageSourceSets.value = generateBowTieSrcSets(bowtieImageSrc.value, sizes);
        });
        await waitForTransition(wrapperRef.current);
        batch(() => {
          bowtieImageShown.value = true;
          previousStep.value = categoryStep;
        });
      } else {
        batch(() => {
          imageSrc.value = cleanUpLookbuilderUrl(imageURLValue);
          imageSourceSets.value = generateSrcSetsLookbuilder(imageSrc.value, sizes);

          focusX.value = imageFocusX;
          focusY.value = imageFocusY;
          scale.value = imageScale;

          bowtieImageShown.value = false;
          previousStep.value = categoryStep;
        });
      }
    })();
  });

  useResizeObserver(() => updateLayeredPreviewPosition());

  return (
    <div
      className={classNames(styles.preview, {
        [styles.preview__static]: !isLayeredImage.value,
      })}
      style={previewDynamicStyle.value}
    >
      <div
        ref={wrapperRef}
        className={classNames(
          styles['preview-wrapper'],
          styles[`preview-type-${isLayeredImage.value ? 'layered' : 'static'}`],
        )}
      >
        {isLayeredImage.value ? (
          <>
            {imageSrc.value && (
              <>
                {isBowTieStep.value && (
                  <ResponsiveImageV2
                    data-testid="bowtie-image"
                    alt="BTC - Preview"
                    lazyloading={false}
                    src={bowtieImageSrc.value}
                    desktopSizes={sizes.lg}
                    desktopSrcSet={bowtieImageSourceSets.value.desktopSrcSet}
                    mobileSizes={sizes.xs}
                    mobileSrcSet={bowtieImageSourceSets.value.mobileSrcSet}
                    tabletSizes={sizes.md}
                    tabletSrcSet={bowtieImageSourceSets.value.tabletSrcSet}
                    className={classNames(styles['preview-type-layered-bowtieimage'])}
                  />
                )}

                {!bowtieImageShown.value && (
                  <div
                    className={classNames(styles['preview-wrapper-scale'], styles['preview-wrapper-scale-transition'])}
                  >
                    <div
                      className={classNames(
                        styles['preview-wrapper-position'],
                        styles['preview-wrapper-position-transition'],
                      )}
                    >
                      <ResponsiveImageV2
                        data-testid="image"
                        alt={BTC_ALT_TEXT}
                        lazyloading={false}
                        src={imageSrc.value}
                        desktopSizes={sizes.lg}
                        desktopSrcSet={imageSourceSets.value.desktopSrcSet}
                        mobileSizes={sizes.xs}
                        mobileSrcSet={imageSourceSets.value.mobileSrcSet}
                        tabletSizes={sizes.md}
                        tabletSrcSet={imageSourceSets.value.tabletSrcSet}
                      />
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <ClientPreviewStaticImage />
        )}
      </div>
    </div>
  );
}
