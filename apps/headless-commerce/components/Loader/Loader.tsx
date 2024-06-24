import classNames from 'classnames';
import type { CSSProperties } from 'react';

import styles from './Loader.module.scss';

export type LoaderProps = {
  shade?: string;
  style?: CSSProperties;
  className?: string;
};

export default function Loader({ style, shade = 'dark', className }: LoaderProps) {
  return (
    <div className={classNames(styles['loader'], className)} style={style}>
      <div className={`${shade === 'dark' ? styles.dark : ''}`}>
        <div />
      </div>
    </div>
  );
}
