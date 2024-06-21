import type { Signal } from '@preact/signals-react';
import { useSignal } from '@preact/signals-react';
import { useEffect } from 'react';

import { isUndefined } from './undefined';

export const useStateSignal = <A>(a: A) => {
  const s = useSignal<A>(a);
  useEffect(() => {
    s.value = a;
  }, [a, s]);
  return s;
};

export const createPromiseFromSignal = <T>(signal: Signal<T | undefined>): Promise<T> => {
  return new Promise<T>(resolve => {
    const unsubscribe = signal.subscribe(value => {
      if (isUndefined(value)) {
        return;
      }
      unsubscribe();
      resolve(value);
    });
  });
};
