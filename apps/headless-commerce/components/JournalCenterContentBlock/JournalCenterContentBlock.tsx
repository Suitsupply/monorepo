import { memo } from 'react';

import styles from './JournalCenterContentBlock.module.scss';

export const JournalCenterContentBlock = memo(function JournalCenterContentBlock({ id }: { id: string }) {
  return <div className={styles['journal-content-block']}>JournalCenterContentBlock {id}</div>;
});
