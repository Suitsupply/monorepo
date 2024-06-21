'use client';

import { useCountry } from '@headless-commerce/contexts/country/client';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import type { NavigationGroup } from '@headless-commerce/gql/generated/graphql';
import { generateIdentifier } from '@headless-commerce/utils/identifier';
import type { ReactNode } from 'react';

import ClientGroup from './ClientGroup';
import styles from './ClientMenu.module.scss';
import type { EMenuLevel } from './NavigationMenu.types';
import { type NavigationMenuItemClickArgs, SubMenuText } from './SubMenuText';
import type { MenuStructure, SubmenuText } from './utils/menuStructure';

export type ClientLevelContentProps = {
  level: EMenuLevel;
  menuStructure: MenuStructure;
  selectedItem: string;
  onClick: (config: NavigationMenuItemClickArgs) => void;
  children?: ReactNode;
};

export default function ClientLevelContent({
  level,
  menuStructure,
  selectedItem,
  onClick,
  children,
}: ClientLevelContentProps) {
  const locale = useLocale();
  const country = useCountry();

  return (
    <div key={level} className={styles['menu__level-content']}>
      <div>
        {menuStructure[level].map(levelItem => {
          if (levelItem.type === 'SubmenuText') {
            return (
              <SubMenuText
                key={generateIdentifier()}
                country={country}
                subMenuText={levelItem as SubmenuText & { parentItem: string }}
                visible={levelItem?.parentItem === selectedItem}
                locale={locale}
              />
            );
          }

          return (
            <ClientGroup
              key={generateIdentifier()}
              level={level}
              visible={levelItem?.parentItem === selectedItem}
              group={levelItem as NavigationGroup & { parentItem: string }}
              onClick={onClick}
              parentItem={levelItem?.parentItem}
            />
          );
        })}
      </div>
      {children}
    </div>
  );
}
