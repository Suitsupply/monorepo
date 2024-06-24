'use client';

import { batch, signal } from '@preact/signals-react';
import { useSignalEffect, useSignals } from '@preact/signals-react/runtime';
import Loader from '@susu/headless-commerce/components/Loader/Loader';
import { ResponsiveImage } from '@susu/headless-commerce/components/ResponsiveImage/ResponsiveImage';
import type { DeviceName } from '@susu/headless-commerce/components/ResponsiveImage/ResponsiveImage.types';
import { ResponsiveImageWrapper } from '@susu/headless-commerce/components/ResponsiveImageWrapper/ResponsiveImageWrapper';
import { useConfigurator } from '@susu/headless-commerce/features/configurator/signals';
import { useResizeObserver } from '@susu/headless-commerce/hooks/useResizeObserver';
import classNames from 'classnames';
import type { CSSProperties, RefObject } from 'react';
import { useRef } from 'react';

import styles from './ClientPreview.module.scss';

// default neutral values
const scale = signal<number>(1);
const focusX = signal<string>('50%');
const focusY = signal<string>('50%');
const imageSrc = signal<string | undefined>(undefined);

const updatePosition = (x: string, y: string) => {
  focusX.value = x;
  focusY.value = y;
};
const updateScale = (newScale: number) => {
  scale.value = newScale;
};
const updateImage = (newImage: string | undefined) => {
  imageSrc.value = newImage;
};

const asyncPosition = async ({ x, y }: { x: string; y: string }, element: HTMLDivElement): Promise<void> =>
  new Promise<void>(resolve => {
    updatePosition(x, y);

    element.addEventListener(
      'transitionend',
      () => {
        resolve();
      },
      { once: true },
    );
  });

const asyncScale = async (newScale: number, element: HTMLDivElement): Promise<void> =>
  new Promise<void>(resolve => {
    updateScale(newScale);

    element.addEventListener(
      'transitionend',
      () => {
        resolve();
      },
      { once: true },
    );
  });

function updatePreviewState(
  changed: {
    image: boolean;
    scale: boolean;
    position: boolean;
  },
  imageFocusX: string,
  imageFocusY: string,
  imageScale: number,
  wrapperRef: RefObject<HTMLDivElement>,
  imageURL: string | undefined,
) {
  batch(() => {
    if (changed.image && !changed.position && !changed.scale) {
      updateImage(imageURL);
      return;
    }
    if (!changed.image && changed.position && !changed.scale) {
      updatePosition(imageFocusX, imageFocusY);
      return;
    }
    if (!changed.image && !changed.position && changed.scale) {
      updateScale(imageScale);
      return;
    }

    if (!changed.image && changed.position && changed.scale) {
      asyncPosition({ x: imageFocusX, y: imageFocusY }, wrapperRef.current as HTMLDivElement).then(() => {
        updateScale(imageScale);
      });
      return;
    }
    if (changed.image && changed.position && !changed.scale) {
      asyncPosition({ x: imageFocusX, y: imageFocusY }, wrapperRef.current as HTMLDivElement).then(() => {
        updateImage(imageURL);
      });
      return;
    }
    if (changed.image && !changed.position && changed.scale) {
      asyncScale(imageScale, wrapperRef.current as HTMLDivElement).then(() => {
        updateImage(imageURL);
      });
      return;
    }

    if (changed.image && changed.position && changed.scale) {
      asyncPosition({ x: imageFocusX, y: imageFocusY }, wrapperRef.current as HTMLDivElement)
        .then(() => {
          return asyncScale(imageScale, wrapperRef.current as HTMLDivElement);
        })
        .then(() => {
          updateImage(imageURL);
        });
    }
  });
}

export default function ClientPreview() {
  useSignals();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { currentStepData, imageURL, layeredPreviewPosition, previewData, updateLayeredPreviewPosition } =
    useConfigurator();
  const { staticImage, isLayered } = previewData.value;
  let staticSrcs: Partial<Record<DeviceName, string>> | undefined = undefined;

  useSignalEffect(() => {
    if (!previewData.value.isLayered) {
      return;
    }
    const { zoom, focalPoint } = layeredPreviewPosition.peek();
    const imageScale = parseInt(zoom, 10) / 100;

    const [x, y] = focalPoint.split(' ').map(Number);

    const focusPercentageX = x * 100;
    const focusPercentageY = y * 100;

    const imageFocusX = `${50 - focusPercentageX}%`;
    const imageFocusY = `${50 - focusPercentageY}%`;

    const hasImageChanged = imageSrc.value !== imageURL.value;
    const hasScaleChanged = scale.value !== imageScale;
    const hasPositionChanged = focusX.value !== imageFocusX || focusY.value !== imageFocusY;

    if ((!hasScaleChanged && !hasPositionChanged && !hasImageChanged) || !wrapperRef.current) {
      return;
    }

    const changed = { scale: hasScaleChanged, position: hasPositionChanged, image: hasImageChanged };
    updatePreviewState(changed, imageFocusX, imageFocusY, imageScale, wrapperRef, imageURL.value);
  });

  useResizeObserver(() => updateLayeredPreviewPosition());
  // Per component's design
  const sizes = {
    xs: '100vw',
    lg: '70vw',
  } as const;

  if (!isLayered && staticImage) {
    staticSrcs = Object.fromEntries(Object.entries(staticImage).filter(([, value]) => Boolean(value)));
  }

  const isBowTieStep = currentStepData.value?.categoryStep === 'bow-tie';
  const BTC_ALT_TEXT = 'BTC - Preview';

  const previewDynamicStyle = {
    '--image-scale': isLayered ? (isBowTieStep ? 1 : scale.value) : 1,
    '--image-focus-x': isLayered ? (isBowTieStep ? 0 : focusX.value) : '50%',
    '--image-focus-y': isLayered ? (isBowTieStep ? 0 : focusY.value) : '50%',
  } as CSSProperties;

  const previewWrapperClasses = classNames(styles['preview-wrapper-position'], {
    [styles['preview-wrapper--custom-transition']]: isBowTieStep,
  });

  return (
    <div
      className={classNames(styles.preview, {
        [styles.preview__static]: !isLayered,
      })}
      style={previewDynamicStyle}
    >
      <div
        ref={wrapperRef}
        className={classNames(styles['preview-wrapper'], styles[`preview-type-${isLayered ? 'layered' : 'static'}`])}
      >
        {isLayered && imageSrc.value && (
          <div className={classNames(styles['preview-wrapper-scale'])}>
            <div className={previewWrapperClasses}>
              <ResponsiveImageWrapper
                alt={BTC_ALT_TEXT}
                isBowTie={isBowTieStep}
                lazyloading={false}
                sizes={sizes}
                src={imageSrc.value}
                type="lookbuilder"
              />
            </div>
          </div>
        )}
        {!isLayered &&
          (staticImage ? (
            <ResponsiveImage
              alt={BTC_ALT_TEXT}
              lazyloading={false}
              sizes={sizes}
              source="url"
              srcs={staticSrcs as Record<DeviceName, string>}
            />
          ) : (
            <Loader />
          ))}
      </div>
    </div>
  );
}
