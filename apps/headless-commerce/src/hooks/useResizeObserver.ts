import type { RefObject } from 'react';
import { useEffect } from 'react';

export const useResizeObserver = (callback: () => void, elementRef?: RefObject<Element>) => {
  useEffect(() => {
    const node = elementRef?.current || window?.document?.documentElement;
    const hasROSupport = !!window?.ResizeObserver;

    if (!hasROSupport || !node) {
      return;
    }

    const observer = new ((window && window.ResizeObserver) || ResizeObserver)(() => {
      callback();
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, callback]);
};
