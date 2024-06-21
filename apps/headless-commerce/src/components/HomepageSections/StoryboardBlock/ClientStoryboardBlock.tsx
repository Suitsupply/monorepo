'use client';

import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import styles from './StoryboardBlock.module.scss';

const HIDDEN_VERTICAL_OFFSET = 250;

export type ClientStoryboardBlockProps = {
  children?: ReactNode;
};

export default function ClientStoryboardBlock({ children }: ClientStoryboardBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [wrapperVisible, setWrapperVisible] = useState<number>(0);

  const parallaxTop = -HIDDEN_VERTICAL_OFFSET - -HIDDEN_VERTICAL_OFFSET * (wrapperVisible / 100);
  const top = wrapperVisible < 100 ? parallaxTop : 0;

  const percentageVisible = useCallback(() => {
    if (!ref.current) {
      return 0;
    }

    const viewportHeight = window?.innerHeight;
    const { height, top } = ref.current.getBoundingClientRect();

    const percentage = Math.round(((viewportHeight - top) * 100) / height);

    return Math.max(0, Math.min(100, percentage));
  }, [ref]);

  useEffect(() => {
    const handleScroll = () => {
      setWrapperVisible(percentageVisible());
    };

    document.addEventListener('scroll', handleScroll);

    // The first time when ref is set on render, also call handleScroll.
    if (ref.current) {
      handleScroll();
    }

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [percentageVisible]);

  const style = useMemo(() => ({ top }), [top]);

  return (
    <div ref={ref} className={styles.storyboard}>
      <div className={styles.storyboard__links} style={style}>
        {children}
      </div>
    </div>
  );
}
