import { documentToReactComponents, type Options } from '@contentful/rich-text-react-renderer';
import type { Document } from '@contentful/rich-text-types';
import { memo } from 'react';

import Icon from '../Icon/Icon';
import styles from './ButtonWithIcon.module.scss';

export type ContentProps = {
  hasText: boolean;
  iconName: string;
  json: Document;
  options: Options;
};

export const Content = memo(function Content({ hasText, iconName, json, options }: ContentProps) {
  return (
    <>
      <span className={styles['icon']}>
        <Icon icon={iconName} />
      </span>
      {hasText && <div>{documentToReactComponents(json, options)}</div>}
    </>
  );
});
