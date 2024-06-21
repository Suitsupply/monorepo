import AccountButton from '@headless-commerce/components/Header/AccountButton/AccountButton';
import BagButton from '@headless-commerce/components/Header/BagButton/BagButton';
import ClientHeader from '@headless-commerce/components/Header/ClientHeader';
import ClientLogoButton from '@headless-commerce/components/Header/LogoButton/ClientLogoButton';
import MenuButton from '@headless-commerce/components/Header/MenuButton/MenuButton';
import WishlistButton from '@headless-commerce/components/Header/WishlistButton/WishlistButton';
import type { Locale } from '@headless-commerce/config/locale';
import type { HeaderContextValue } from '@headless-commerce/contexts/header';
import type { CMSHeaderType } from '@headless-commerce/contexts/header/types';
import type { Tags } from '@headless-commerce/contexts/tags';

import styles from './Header.module.scss';
import Menu from './Menu/Menu';

export type HeaderProps = {
  header: HeaderContextValue;
  headerType: CMSHeaderType;
  locale: Locale;
  tags: Tags;
};

export default function Header({ header, headerType, tags }: HeaderProps) {
  return (
    <ClientHeader headerType={headerType}>
      <MenuButton />
      <Menu tags={tags} menuStructure={header.menuStructure} />
      <ClientLogoButton />
      <div className={styles['header__actions']}>
        <AccountButton />
        <WishlistButton />
        <BagButton />
      </div>
    </ClientHeader>
  );
}
