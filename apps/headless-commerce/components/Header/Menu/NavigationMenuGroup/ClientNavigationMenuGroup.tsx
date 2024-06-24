import type { NavigationMenuItemClickArgs } from '@susu/headless-commerce/components/Header/Menu/NavigationMenuItem/ClientNavigationMenuItem';
import ClientNavigationMenuItem from '@susu/headless-commerce/components/Header/Menu/NavigationMenuItem/ClientNavigationMenuItem';
import type { NavigationGroup, NavigationItem } from '@susu/headless-commerce/gql/generated/graphql';
import { generateIdentifier } from '@susu/headless-commerce/utils/identifier';
import classnames from 'classnames';

import styles from './NavigationMenuGroup.module.scss';

export type ClientNavigationGroupProps = {
  group: NavigationGroup;
  onClick: (config: NavigationMenuItemClickArgs) => void;
  level?: string;
  parentItem: string;
  visible: boolean;
};

export default function ClientNavigationMenuGroup({
  group,
  onClick,
  level,
  parentItem,
  visible,
}: ClientNavigationGroupProps) {
  const { text, fontStyling, hasTopDivider, itemsCollection } = group;

  return (
    <ul
      key={generateIdentifier()}
      className={classnames(styles['menu-group'], {
        [styles[`menu-group__${level}`]]: Boolean(level),
        [styles['menu-group__top-offset']]: hasTopDivider,
        [styles.visible]: visible,
      })}
    >
      {text?.length && <span className={`${styles['menu-group__title']} brow-header-regular`}>{text}</span>}
      <div className={styles['menu-group__links']}>
        {(itemsCollection?.items as NavigationItem[])?.map(item => {
          return (
            <ClientNavigationMenuItem
              fontStyling={fontStyling ?? ''}
              onClick={onClick}
              id={item?.sys?.id}
              item={item}
              key={item?.sys?.id || generateIdentifier()}
              parentItem={parentItem}
            />
          );
        })}
      </div>
    </ul>
  );
}
