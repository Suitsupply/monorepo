'use client';

import type { Locale } from '@headless-commerce/config/locale';
import type { PromotionEvents } from '@headless-commerce/gql/generated/graphql';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';

import NavigationSubMenuText from '../NavigationSubMenuText/NavigationSubMenuText';
import type { MenuStructure, SubmenuText } from './utils/menuStructure';

export type NavigationMenuItemClickArgs = {
  id: string;
  promotionEvents?: PromotionEvents;
  hasChildren: boolean;
  parentItem: string;
};

export type ClientNavigationMenuProps = {
  menuStructure: MenuStructure;
  locale: Locale;
};

export type SubMenuTextProps = {
  country: CountryConfiguration;
  locale: Locale;
  subMenuText: SubmenuText & { parentItem: string };
  visible: boolean;
};

export const SubMenuText = ({ country, subMenuText, visible, locale }: SubMenuTextProps) => {
  return <NavigationSubMenuText country={country} subMenu={subMenuText} visible={visible} locale={locale} />;
};
