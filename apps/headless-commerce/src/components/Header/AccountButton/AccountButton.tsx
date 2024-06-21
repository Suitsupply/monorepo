import Icon from '@headless-commerce/components/Icon/Icon';
import classNames from 'classnames';

import styles from '../Header.module.scss';
import ClientAccountButton from './ClientAccountButton';

export default function AccountButton() {
  const classes = classNames(styles['header__btn'], 'account-btn');

  return (
    <span className={classes} data-testid="account-btn">
      <ClientAccountButton>
        <span className={styles['header-icon']}>
          <Icon icon="profile" aria-hidden="true" />
        </span>
        <span className="sr-only">Account</span>
      </ClientAccountButton>
    </span>
  );
}
