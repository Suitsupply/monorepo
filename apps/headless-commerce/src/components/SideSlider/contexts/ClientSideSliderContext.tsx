'use client';

import type { ReactNode, RefObject } from 'react';
import { createContext, memo, useContext, useMemo, useState } from 'react';

export type ClientSideSliderContextProps = {
  openSliders: Array<RefObject<HTMLDivElement>>;
  setSliderOpen: (ref: RefObject<HTMLDivElement>) => void;
  setSliderClosed: (ref: RefObject<HTMLDivElement>) => void;
  isTopSlider: (ref: RefObject<HTMLDivElement>) => boolean;
  getSliderZIndex: (ref: RefObject<HTMLDivElement>) => number;
};

export const ClientSideSliderContext = createContext<ClientSideSliderContextProps>({
  openSliders: [],
  setSliderOpen: () => {},
  setSliderClosed: () => {},
  isTopSlider: () => false,
  getSliderZIndex: () => -1,
});

export const ClientSideSliderProvider = memo(function ClientSideSliderProvider({ children }: { children?: ReactNode }) {
  const [openSliders, setOpenSliders] = useState<Array<RefObject<HTMLDivElement>>>([]);

  const state: ClientSideSliderContextProps = useMemo(
    () => ({
      openSliders,

      setSliderOpen: ref => {
        const newSliders = [...openSliders.filter(a => a !== ref), ref];
        setOpenSliders(newSliders);
      },

      setSliderClosed: ref => {
        const newSliders = openSliders.filter(a => a !== ref);
        setOpenSliders(newSliders);
      },

      isTopSlider: ref => {
        return openSliders[openSliders.length - 1] === ref;
      },

      getSliderZIndex: ref => {
        const headerZindex = 10;
        return openSliders.findIndex(a => a === ref) + headerZindex + 2;
      },
    }),
    [openSliders],
  );

  return <ClientSideSliderContext.Provider value={state}>{children}</ClientSideSliderContext.Provider>;
});

export const useSideSlider = () => {
  return useContext(ClientSideSliderContext);
};
