import type { Tags } from '@headless-commerce/contexts/tags';

import ClientMenu from './NavigationMenu/ClientMenu';
import type { MenuStructure } from './NavigationMenu/utils/menuStructure';

export type MenuProps = {
  menuStructure: MenuStructure;
  tags: Tags;
};

export default function Menu({ menuStructure }: Readonly<MenuProps>) {
  return (
    <div>
      <ClientMenu menuStructure={menuStructure} />
    </div>
  );
}
