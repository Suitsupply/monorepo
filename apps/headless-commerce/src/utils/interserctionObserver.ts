import type { RefObject } from 'react';

export const observeOnce = (elementRef: RefObject<Element>, callback: Function) => {
  if (elementRef.current) {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting) {
          callback();

          observer.unobserve(elementRef?.current as Element);
          observer.disconnect();
        }
      },
      {
        rootMargin: '-10px',
      },
    );

    observer.observe(elementRef?.current);

    return true;
  }

  return false;
};
