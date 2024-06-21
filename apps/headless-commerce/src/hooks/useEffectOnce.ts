import { useEffect, useRef } from 'react';

/**
 * Custom hook that runs the provided effect function only once, when the component is first mounted.
 *
 * @param effect - A function to be executed once when the component is mounted.
 *
 * @example
 * ```typescript
 * import React from 'react';
 * import { useEffectOnce } from '@headless-commerce/hooks/useEffectOnce';
 *
 * const MyComponent = () => {
 *   useEffectOnce(() => {
 *     console.log('This will run only once');
 *   });
 *
 *   return <div>My Component</div>;
 * };
 * ```
 */
export const useEffectOnce = (effect: () => void) => {
  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      return;
    }
    effect();
    isMounted.current = true;
    // We only want to run the effect once, so disable the lint rule.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
