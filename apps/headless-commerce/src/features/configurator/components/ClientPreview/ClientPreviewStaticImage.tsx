import Loader from '@headless-commerce/components/Loader/Loader';
import { ResponsiveImage } from '@headless-commerce/components/ResponsiveImage/ResponsiveImage';
import type { DeviceName } from '@headless-commerce/components/ResponsiveImage/ResponsiveImage.types';
import { useConfigurator } from '@headless-commerce/features/configurator/signals';
import { useComputed, useSignals } from '@preact/signals-react/runtime';

const sizes = {
  xs: '100vw',
  md: '100vw',
  lg: '70vw',
};

export const ClientPreviewStaticImage = () => {
  useSignals();

  const { previewData } = useConfigurator();
  const staticImageSrc = useComputed(() => {
    if (!previewData.value.isLayered && previewData.value.staticImage) {
      return Object.fromEntries(Object.entries(previewData.value.staticImage).filter(([, value]) => Boolean(value)));
    }
  });

  return (
    <>
      {previewData.value.staticImage ? (
        <ResponsiveImage
          alt="BTC - Preview"
          lazyloading={false}
          sizes={sizes}
          source="url"
          srcs={staticImageSrc.value as Record<DeviceName, string>}
        />
      ) : (
        <Loader />
      )}
    </>
  );
};
