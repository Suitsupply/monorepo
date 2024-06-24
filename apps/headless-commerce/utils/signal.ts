import { useSignal } from '@preact/signals-react';
import { useEffect } from 'react';

export const useStateSignal = <A>(a: A) => {
  const s = useSignal<A>(a);
  useEffect(() => {
    s.value = a;
  }, [a, s]);
  return s;
};
