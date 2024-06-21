import Icon from '@headless-commerce/components/Icon/Icon';
import classNames from 'classnames';

import styles from '../Header.module.scss';
import ClientBagButton from './ClientBagButton';

export default function BagButton() {
  const classes = classNames(styles['header__btn'], styles['header__btn__bag'], 'minicart-btn');

  return (
    <span className={classes} data-testid="minicart-btn">
      <ClientBagButton>
        <span className={styles['header-icon']}>
          <Icon icon="bag" aria-hidden="true" />
        </span>
        <span className="sr-only">View bag</span>
      </ClientBagButton>
    </span>
  );
}
