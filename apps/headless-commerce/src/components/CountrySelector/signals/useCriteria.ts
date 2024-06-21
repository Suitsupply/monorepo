import { useSignal } from '@preact/signals-react';
import { useCallback } from 'react';

export const useCriteria = () => {
  const criteria = useSignal<string>('');

  const hasCriteria = useCallback(() => criteria.value !== '', [criteria]);

  const setCriteria = useCallback(
    (value: string) => {
      criteria.value = value;
    },
    [criteria],
  );

  const clearCriteria = useCallback(() => {
    criteria.value = '';
  }, [criteria]);

  return {
    criteria,
    hasCriteria,
    setCriteria,
    clearCriteria,
  };
};
