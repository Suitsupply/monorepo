import type { Locale } from '@headless-commerce/config/locale';
import type { CountryConfiguration } from '@headless-commerce/types/CountryConfiguration';
import { generateUrlFromLinkContent } from '@headless-commerce/utils/UrlGenerator';
import classNames from 'classnames';
import Image from 'next/image';
import { useMemo } from 'react';

import ClientLink from '../../../Link/ClientLink';
import type { SubmenuText } from '../NavigationMenu/utils/menuStructure';
import styles from './NavigationSubMenuText.module.scss';

export type NavigationSubMenuTextProps = {
  country: CountryConfiguration;
  locale: Locale;
  subMenu: SubmenuText;
  visible: boolean;
};

export default function NavigationSubMenuText({ country, subMenu, visible, locale }: NavigationSubMenuTextProps) {
  const { icon, text, link, withArrow } = subMenu;
  const href = generateUrlFromLinkContent(link, country.siteID, locale);
  const style = useMemo(() => ({ display: `${visible ? 'flex' : 'none'}` }), [visible]);

  return (
    <li
      className={classNames(styles['navigation-item-submenu'], {
        [styles['navigation-item-submenu__no-href']]: !href,
      })}
      style={style}
    >
      {icon?.length && <Image src={icon[0].secure_url} width="16" height="16" alt={text} />}
      <ClientLink
        className={classNames(styles['navigation-item-submenu__link'])}
        trailingIcon={withArrow ? 'arrow_cta' : undefined}
        label={text}
        size="lg"
        weight="light"
        href={href}
        hoverEffect={Boolean(href)}
      />
    </li>
  );
}
