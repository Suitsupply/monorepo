'use client';

import type { ConfiguratorProduct } from '@susu/headless-commerce/features/configurator/summary/components/types';
import type { ReactNode } from 'react';
import { createContext, memo, useCallback, useContext, useMemo, useState } from 'react';

export type Selection = {
  selectable: boolean;
  selected: boolean;
  id?: string;
};

export type ConfiguratorSummaryContextType = {
  color: string;
  deselectProduct: (index: number, id: string) => void;
  isAddToBagEnabled: boolean;
  productIds: Array<string>;
  productSelection: Array<Selection>;
  products: Array<ConfiguratorProduct>;
  selectProduct: (index: number, id: string) => void;
};

export const ConfiguratorSummaryContext = createContext<ConfiguratorSummaryContextType>({
  color: 'black',
  deselectProduct: () => {},
  isAddToBagEnabled: false,
  productIds: [],
  productSelection: [],
  products: [],
  selectProduct: () => {},
});

export const useConfiguratorSummary = () => {
  return useContext(ConfiguratorSummaryContext);
};

export type ConfiguratorSummaryProviderProps = {
  children?: ReactNode;
  color: string;
  products: Array<ConfiguratorProduct>;
};

export const ConfiguratorSummaryProvider = memo(function ConfiguratorSummaryProvider({
  children,
  color,
  products,
}: ConfiguratorSummaryProviderProps) {
  const [productSelection, setProductSelection] = useState<ConfiguratorSummaryContextType['productSelection']>(
    products.map(product => ({
      selectable: product.type === 'master',
      selected: false,
    })),
  );

  const allSizesSelected: boolean = useMemo(
    () =>
      (productSelection.map((selection, index) => [selection, index]) as Array<[Selection, number]>)
        .filter(([{ selectable }]) => selectable)
        .every(([, index]) => productSelection[index as number].selected),
    [productSelection],
  );

  const isAddToBagEnabled = useMemo(() => {
    return allSizesSelected && products.every(({ availabilityStatus }) => availabilityStatus.isAvailable);
  }, [allSizesSelected, products]);

  const productIds: ConfiguratorSummaryContextType['productIds'] = productSelection
    .filter(entry => entry.selectable && entry.selected)
    .map(entry => String(entry.id))
    .concat(
      productSelection
        .map((entry, index) => (!entry.selectable ? products[index].id : undefined))
        .filter(Boolean)
        .map(String),
    );

  const selectProduct = useCallback(
    (index: number, id: string) => {
      const newSelection = [...productSelection];
      newSelection[index] = {
        ...newSelection[index],
        selected: true,
        id,
      };
      setProductSelection(newSelection);
    },
    [productSelection],
  );

  const deselectProduct = useCallback(
    (index: number) => {
      const newSelection = [...productSelection];
      newSelection[index] = {
        ...newSelection[index],
        selected: false,
      };
      setProductSelection(newSelection);
    },
    [productSelection],
  );

  const value: ConfiguratorSummaryContextType = useMemo(
    () => ({
      color,
      deselectProduct,
      isAddToBagEnabled,
      productIds,
      productSelection,
      products,
      selectProduct,
    }),
    [deselectProduct, isAddToBagEnabled, productIds, productSelection, products, selectProduct, color],
  );

  return <ConfiguratorSummaryContext.Provider value={value}>{children}</ConfiguratorSummaryContext.Provider>;
});
