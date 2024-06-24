'use client';

import ClientSideSlider from '@susu/headless-commerce/components/SideSlider/ClientSideSlider';
import type { ClientConfiguratorProps } from '@susu/headless-commerce/features/configurator/components/ClientConfigurator';
import ClientConfigurator from '@susu/headless-commerce/features/configurator/components/ClientConfigurator';
import type { ReactNode } from 'react';
import { useCallback, useState } from 'react';

export default function ClientConfiguratorToggle(props: Readonly<ClientConfiguratorProps & { children?: ReactNode }>) {
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);
  const handleClose = useCallback(() => {
    setIsConfiguratorOpen(false);
  }, []);
  const onClick = useCallback(() => {
    setIsConfiguratorOpen(true);
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <button onClick={onClick}>Open configurator</button>
      <ClientSideSlider
        fullScreen="always"
        slideInFrom="right"
        hasCloseButton={true}
        onClose={handleClose}
        isOpen={isConfiguratorOpen}
      >
        <ClientConfigurator {...props} />
      </ClientSideSlider>
    </>
  );
}
