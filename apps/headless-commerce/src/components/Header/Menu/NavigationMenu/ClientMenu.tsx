'use client';

import { EMenuLevel } from '@headless-commerce/components/Header/Menu/NavigationMenu/NavigationMenu.types';
import Icon from '@headless-commerce/components/Icon/Icon';
import ClientSideSlider from '@headless-commerce/components/SideSlider/ClientSideSlider';
import { useCountry } from '@headless-commerce/contexts/country/client';
import { customerPromise } from '@headless-commerce/contexts/customer';
import { useHeader } from '@headless-commerce/contexts/header/client';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import { usePageType } from '@headless-commerce/hooks/usePageType';
import type { MenuClickedProperties, MenuOpenedProperties } from '@headless-commerce/libs/avo/avo';
import { enrichEvent } from '@headless-commerce/libs/segment/utils';
import { URLData } from '@headless-commerce/utils/tracking/segment';
import { trackEvent } from '@headless-commerce/utils/tracking/tracking';
import { useSignals } from '@preact/signals-react/runtime';
import classNames from 'classnames';
import { useCallback, useEffect, useState } from 'react';

import type { NavigationMenuItemClickArgs } from '../NavigationMenuItem/ClientNavigationMenuItem';
import ClientLevel from './ClientLevel';
import styles from './ClientMenu.module.scss';
import type { MenuStructure } from './utils/menuStructure';

export type ClientNavigationMenuProps = {
  menuStructure: MenuStructure;
};

export default function ClientMenu({ menuStructure }: Readonly<ClientNavigationMenuProps>) {
  useSignals();
  const pageType = usePageType();
  const country = useCountry();
  const locale = useLocale();

  const [activeMenuLevel, setActiveMenuLevel] = useState<EMenuLevel>(EMenuLevel.LEVEL1);
  const [selectedItem, setSelectedItem] = useState<string>('none');
  const [parentItem, setParentItem] = useState<string>('none');
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const { menuOpen, setMenuOpen } = useHeader();

  const cornerButtonClasses = classNames(styles['menu__corner-button'], 'js-header-search-toggle');
  const searchButtonClasses = classNames(styles['menu__corner-button__search'], 'menu__search-button');

  const handleNavigationItemClick = useCallback(
    (navItem: Readonly<NavigationMenuItemClickArgs>) => {
      const { id, hasChildren, parentItem, promotionEvents } = navItem;

      if (hasChildren) {
        const { url, locationId } = URLData();
        const segmentProperties: MenuOpenedProperties = enrichEvent(
          {
            locale,
            country,
          },
          {
            pageType: pageType as MenuOpenedProperties['pageType'],
            eventLabel: promotionEvents?.promotionClick,
            eventCategory: 'global_interactions',
            eventLocation: 'header',
            url,
            locationId,
          },
        );

        trackEvent({
          segment: {
            event: 'menuOpened',
            properties: segmentProperties,
          },
        });
      } else {
        const eventCategory = 'Global_Interactions';
        const eventAction = 'Clicked_Menu';
        const eventLabel = promotionEvents?.promotionClick;

        (async () => {
          await customerPromise;

          const { url, locationId } = URLData();
          const segmentProperties: MenuClickedProperties = enrichEvent(
            {
              locale,
              country,
            },
            {
              pageType: pageType as MenuClickedProperties['pageType'],
              eventLabel: eventLabel,
              eventCategory: 'global_interactions',
              eventLocation: 'menu',
              url,
              locationId,
            },
          );

          trackEvent({
            ga: {
              eventCategory,
              eventAction,
              eventLabel: String(eventLabel),
            },
            segment: {
              event: 'menuClicked',
              properties: segmentProperties,
            },
          });
        })();
      }

      if (!hasChildren) {
        return;
      }

      setSelectedItem(id);
      setParentItem(parentItem);

      switch (activeMenuLevel) {
        case EMenuLevel.LEVEL1:
          setActiveMenuLevel(EMenuLevel.LEVEL2);
          break;
        case EMenuLevel.LEVEL2:
          setActiveMenuLevel(EMenuLevel.LEVEL3);
          break;
        default:
          break;
      }
    },
    [activeMenuLevel, country, locale, pageType],
  );

  const handleSearchButtonClick = useCallback(() => {
    setSearchActive(true);
  }, []);

  const handleBackButtonClick = useCallback(() => {
    const targetParent: string = 'none';
    let targetSelected: string = 'none';
    let targetLevel: EMenuLevel = EMenuLevel.LEVEL1;

    if (activeMenuLevel === EMenuLevel.LEVEL3) {
      targetLevel = EMenuLevel.LEVEL2;
      targetSelected = parentItem;
    }

    setSelectedItem(targetSelected);
    setParentItem(targetParent);
    setActiveMenuLevel(targetLevel);

    if (searchActive) {
      setSearchActive(false);
    }
  }, [activeMenuLevel, searchActive, parentItem]);

  const handleSliderClose = useCallback(() => {
    setMenuOpen(false);
  }, [setMenuOpen]);

  useEffect(() => {
    setSelectedItem('none');
    setParentItem('none');
    setSearchActive(false);
    setActiveMenuLevel(EMenuLevel.LEVEL1);
    setTimeout(() => {
      setMenuOpen(false);
    }, 300);
  }, [setMenuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      setSelectedItem('none');
      setParentItem('none');
      setSearchActive(false);
      setActiveMenuLevel(EMenuLevel.LEVEL1);
    }
  }, [menuOpen]);

  return (
    <ClientSideSlider
      isOpen={menuOpen}
      onClose={handleSliderClose}
      slideInFrom="left"
      fullScreen="never"
      hasCloseButton={false}
    >
      <div className={classNames(styles.menu, styles[`menu__search-${searchActive ? 'active' : 'inactive'}`])}>
        <div className={cornerButtonClasses}>
          {(activeMenuLevel !== EMenuLevel.LEVEL1 || searchActive) && (
            <button onClick={handleBackButtonClick} className={styles['menu__back-button']}>
              <Icon icon="arrow_left" aria-label="Menu back button" />
            </button>
          )}
          {activeMenuLevel === EMenuLevel.LEVEL1 && (
            <button
              data-testid="navigation-menu-search-btn"
              className={searchButtonClasses}
              onClick={handleSearchButtonClick}
              disabled={searchActive}
            >
              <Icon icon="search" data-target="slide-down" aria-hidden="true" />
            </button>
          )}
        </div>
        <div className={classNames(styles.menu__wrapper, styles[`menu__wrapper-position-${activeMenuLevel}`])}>
          {Object.values(EMenuLevel).map((level: EMenuLevel) => {
            return (
              <ClientLevel
                key={level}
                level={level}
                menuStructure={menuStructure}
                onClick={handleNavigationItemClick}
                searchActive={searchActive}
                selectedItem={selectedItem}
              />
            );
          })}
        </div>
      </div>
    </ClientSideSlider>
  );
}
