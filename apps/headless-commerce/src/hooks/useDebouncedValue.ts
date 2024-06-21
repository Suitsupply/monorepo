import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

export const useDebouncedState = <T>(state: T, delay: number): [T, Dispatch<SetStateAction<T>>] => {
  const [debouncedState, setDebouncedState] = useState(state);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedState(state);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [state, delay]);
  return [debouncedState, setDebouncedState];
};
