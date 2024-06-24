'use client';

import type { NavigationMenuItemClickArgs } from '@susu/headless-commerce/components/Header/Menu/NavigationMenuItem/ClientNavigationMenuItem';
import ClientLocaleDisplay from '@susu/headless-commerce/components/LocaleDisplay/ClientLocaleDisplay';

import ClientLevelContent from './ClientLevelContent';
import styles from './ClientMenu.module.scss';
import type { EMenuLevel } from './NavigationMenu.types';
import ClientSearch from './Search/ClientSearch';
import type { MenuStructure } from './utils/menuStructure';

export type ClientLevelProps = {
  level: EMenuLevel;
  menuStructure: MenuStructure;
  onClick: (config: NavigationMenuItemClickArgs) => void;
  searchActive: boolean;
  selectedItem: string;
};

export default function ClientLevel({ level, menuStructure, onClick, searchActive, selectedItem }: ClientLevelProps) {
  return (
    <div slot={level} className={styles.menu__level}>
      {level === 'level1' ? (
        <>
          <ClientLevelContent level={level} menuStructure={menuStructure} selectedItem={selectedItem} onClick={onClick}>
            {!searchActive && <ClientLocaleDisplay isInsideFooter={false} />}
          </ClientLevelContent>
          <ClientSearch searchActive={searchActive} />
        </>
      ) : (
        <ClientLevelContent level={level} menuStructure={menuStructure} selectedItem={selectedItem} onClick={onClick} />
      )}
    </div>
  );
}
