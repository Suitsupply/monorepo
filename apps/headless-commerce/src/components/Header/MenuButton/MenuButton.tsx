import ClientMenuButton from '@headless-commerce/components/Header/MenuButton/ClientMenuButton';
import Icon from '@headless-commerce/components/Icon/Icon';
import classNames from 'classnames';

import styles from '../Header.module.scss';

export default function MenuButton() {
  const classes = classNames(styles['header-icon'], 'susu-icon-menu');

  return (
    <ClientMenuButton>
      <span className={classes} data-testid="menu-btn">
        <Icon icon="menu" aria-hidden="true" />
      </span>
      <span className="sr-only">Menu</span>
    </ClientMenuButton>
  );
}
