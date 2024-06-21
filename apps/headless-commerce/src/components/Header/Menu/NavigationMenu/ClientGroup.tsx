import type { NavigationGroup } from '@headless-commerce/gql/generated/graphql';
import { generateIdentifier } from '@headless-commerce/utils/identifier';

import ClientNavigationMenuGroup from '../NavigationMenuGroup/ClientNavigationMenuGroup';
import type { NavigationMenuItemClickArgs } from './SubMenuText';

export type ClientGroupProps = {
  group: NavigationGroup & { parentItem: string };
  level?: string;
  visible: boolean;
  onClick: (config: NavigationMenuItemClickArgs) => void;
  parentItem: string;
};

export default function ClientGroup({ group, onClick, level, parentItem, visible }: ClientGroupProps) {
  return (
    <ClientNavigationMenuGroup
      group={group as NavigationGroup}
      onClick={onClick}
      key={generateIdentifier()}
      level={level}
      parentItem={parentItem}
      visible={visible}
    />
  );
}
