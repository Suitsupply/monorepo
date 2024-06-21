import type {
  NavigationGroup,
  NavigationGroupItemsCollection,
  NavigationItem,
  NavigationItemLable,
  NavigationLink,
  SuSuNavigationMenu,
} from '@headless-commerce/gql/generated/graphql';
import type { CloudinaryImage } from '@headless-commerce/types/CloudinaryImage';

export type LevelKey = 'level1' | 'level2' | 'level3';
export type SubmenuText = {
  text: string;
  link: NavigationLink;
  icon: CloudinaryImage[] | null;
  type: 'SubmenuText';
  withArrow: boolean;
};
export type LevelValue = (NavigationGroup | SubmenuText) & { parentItem: string; type?: string };
export type MenuStructure = Record<LevelKey, LevelValues>;
type LevelValues = LevelValue[];

let fullData: SuSuNavigationMenu;

const _mergeStructures = (
  target: MenuStructure | Partial<MenuStructure>,
  modified: Partial<MenuStructure>,
): MenuStructure | Partial<MenuStructure> => {
  const newStructure: MenuStructure | Partial<MenuStructure> = {};

  Object.keys(modified).forEach(key => {
    const levelKey = key as LevelKey;
    const levelStructure: LevelValues = [...(target[levelKey] ?? []), ...(modified[levelKey] ?? [])];
    newStructure[levelKey] = levelStructure;
  });

  return newStructure;
};

const _itemStructure = (item: NavigationItem, level: number): Partial<MenuStructure> => {
  let itemStructure: Partial<MenuStructure> = {};
  const hasChildGroups = Boolean(item?.groupsCollection?.items?.length);

  if (hasChildGroups) {
    const hasSubMenuText = Boolean(item?.label?.subMenuText);
    const nextLevel = level + 1;
    const nextKey = `level${nextLevel}` as LevelKey;

    item?.groupsCollection?.items.forEach(group => {
      const groupStructure = _groupStructure({
        group: group as NavigationGroup,
        level: nextLevel,
        parentItem: item.sys.id,
      });
      itemStructure = Object.assign(itemStructure, _mergeStructures(itemStructure, groupStructure));
    });

    if (hasSubMenuText) {
      const { subMenuText, subMenuArrow, link, icon } = item.label as NavigationItemLable;
      const subMenu: SubmenuText = {
        text: subMenuText as string,
        link: link as NavigationLink,
        icon,
        withArrow: subMenuArrow === 'yes',
        type: 'SubmenuText',
      };

      itemStructure[nextKey] = [{ ...subMenu, parentItem: item.sys.id }, ...(itemStructure[nextKey] ?? [])];
    }
  }

  return itemStructure;
};

const _groupStructure = (config: {
  group: NavigationGroup;
  level: number;
  parentItem?: string;
}): Partial<MenuStructure> => {
  const { group, level, parentItem = 'none' } = config;
  let groupStructure: Partial<MenuStructure> = {};

  const levelKey = `level${level}` as LevelKey;
  const levelGroups: LevelValues = groupStructure[levelKey] ?? [];

  const baseGroup: NavigationGroup = {
    ...group,
    itemsCollection: {
      ...(group.itemsCollection as NavigationGroupItemsCollection),
      items: ((group.itemsCollection?.items ?? []) as NavigationItem[]).map(item => {
        if (item.label?.showIconSubMenuOnly && item?.groupsCollection?.items?.length) {
          return { ...item, label: { ...item.label, icon: undefined } };
        }

        return item;
      }),
    },
  };

  groupStructure[levelKey] = [...levelGroups, { ...baseGroup, parentItem }];

  (group.itemsCollection?.items ?? []).forEach(item => {
    const newStructure = _itemStructure(item as NavigationItem, level);
    groupStructure = Object.assign(groupStructure, _mergeStructures(groupStructure, newStructure));
  });

  return groupStructure;
};

export const menuStructure = (menuData: SuSuNavigationMenu): MenuStructure => {
  fullData = { ...menuData };
  let structure: MenuStructure = {
    level1: [],
    level2: [],
    level3: [],
  };

  const baseMenu = fullData;

  baseMenu?.groupCollection?.items.forEach(group => {
    const groupStructure: Partial<MenuStructure> = _groupStructure({ group: group as NavigationGroup, level: 1 });
    structure = Object.assign(structure, _mergeStructures(structure, groupStructure));
  });

  return structure;
};
