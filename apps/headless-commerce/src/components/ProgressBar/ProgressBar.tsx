import styles from '@headless-commerce/components/ProgressBar/ProgressBar.module.scss';
import type { CSSProperties } from 'react';

export type ProgressBarProps = {
  step?: number;
  steps?: number;
  percentage?: number;
};

export const ProgressBar = ({ step, steps, percentage }: ProgressBarProps) => {
  if (!percentage) {
    step = step || 0;
    steps = steps || 10;
    percentage = (step / steps) * 100;
  }

  const style = {
    '--progress': `${percentage}%`,
  } as CSSProperties;

  return (
    <div className={styles['progress-bar']} data-testid="progress-bar" style={style}>
      <div className={styles['progress-bar__progress']} data-testid="progress-bar_progress" />
    </div>
  );
};
