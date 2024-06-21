import Icon from '../../Icon/Icon';
import styles from '../Header.module.scss';
import ClientWishlistButton from './ClientWishlistButton';

export default function WishlistButton() {
  return (
    <ClientWishlistButton>
      <span className={styles['header-icon']}>
        <Icon icon="bookmark" aria-hidden="true" />{' '}
      </span>
      <span className="sr-only">Wishlist</span>
    </ClientWishlistButton>
  );
}
