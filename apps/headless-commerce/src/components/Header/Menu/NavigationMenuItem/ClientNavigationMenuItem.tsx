import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { ClientLinkProps } from '@headless-commerce/components/Link/ClientLink';
import Link from '@headless-commerce/components/Link/ClientLink';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { useCurrencies } from '@headless-commerce/contexts/currencies/client';
import { useHeader } from '@headless-commerce/contexts/header/client';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import type { NavigationItem, PromotionEvents, Scalars } from '@headless-commerce/gql/generated/graphql';
import { parseAttributeFromString } from '@headless-commerce/utils/attributeParser';
import { createRenderNodeForPriceInfo } from '@headless-commerce/utils/contentfulUtils';
import { generateUrlFromLinkContent } from '@headless-commerce/utils/UrlGenerator';
import classnames from 'classnames';
import Image from 'next/image';
import { useCallback, useMemo } from 'react';

import styles from './NavigationMenuItem.module.scss';

export type NavigationMenuItemClickArgs = {
  id: string;
  promotionEvents?: PromotionEvents;
  hasChildren: boolean;
  parentItem: string;
};

export type ClientNavigationItemProps = {
  fontStyling: string;
  onClick: (config: NavigationMenuItemClickArgs) => void;
  id: string;
  item: NavigationItem;
  parentItem: string;
};

export default function ClientNavigationMenuItem({
  fontStyling,
  onClick,
  item,
  parentItem,
}: ClientNavigationItemProps) {
  const country = useCountry();
  const locale = useLocale();
  const currencies = useCurrencies();
  const header = useHeader();
  const hasChildren = Boolean(item?.groupsCollection?.items?.length);
  const icon = hasChildren ? 'arrow_right' : undefined;
  const label = item?.label?.text ?? undefined;
  const linkUrl =
    item?.label?.link && !item?.label?.subMenuText
      ? generateUrlFromLinkContent(item?.label?.link, country.siteID, locale)
      : '';
  const testAutomationClass = item?.label?.testAutomationClass as string;
  const testAutomationAttribute = item?.label?.testAutomationAttribute as string;

  const priceContent = documentToReactComponents(
    item?.label?.subText?.json,
    createRenderNodeForPriceInfo(item?.label?.subText, country.ecommerce.currencyCode, country, currencies),
  );

  const navigationMenuItemClasses = classnames(styles['navigation-item'], {
    [styles[`navigation-item__size-${fontStyling}`]]: true,
    [styles['navigation-item__has-icon']]: Boolean(item?.label?.icon?.length),
    [styles[`navigation-item__has-subtext`]]: Boolean(item?.label?.subText),
    [testAutomationClass]: testAutomationClass?.length,
  });

  const handleClick = useCallback(() => {
    if (linkUrl) {
      header.setMenuOpen(false);
    }

    onClick({
      id: item?.sys?.id,
      promotionEvents: item?.label?.promotionEvents as PromotionEvents,
      hasChildren,
      parentItem: parentItem,
    });
  }, [hasChildren, item?.sys?.id, onClick, parentItem, item?.label?.promotionEvents, header, linkUrl]);

  const style = useMemo(
    () => ({
      marginRight: 15,
    }),
    [],
  );

  return (
    <li className={navigationMenuItemClasses} {...parseAttributeFromString(testAutomationAttribute)}>
      <Link
        href={linkUrl}
        onClick={handleClick}
        size={fontStyling as ClientLinkProps['size']}
        weight="light"
        label={
          <>
            {item?.label?.icon?.map((icon: Scalars['JSON']) => {
              return (
                <Image
                  key={icon?.secure_url}
                  alt="navigation-icon"
                  src={icon?.secure_url}
                  width={16}
                  height={16}
                  style={style}
                />
              );
            })}
            {label}
          </>
        }
        trailingIcon={icon ? icon : undefined}
        fullWidth
        hoverEffect
      >
        {item?.label?.subText && (
          <span className={`${styles['navigation-item__subtext']} body-small-light`}>{priceContent}</span>
        )}
      </Link>
    </li>
  );
}
