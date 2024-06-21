import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useStateSignal } from './signal';

describe('useStateSignal', () => {
  it('should initialize the signal with the provided value', () => {
    const initialValue = 'hello';
    const { result } = renderHook(() => useStateSignal(initialValue));
    expect(result.current.value).toBe(initialValue);
  });

  it('should update the signal value when it changes', () => {
    const initialValue = 'hello';
    const newValue = 'world';
    const { result } = renderHook(() => useStateSignal(initialValue));
    act(() => {
      result.current.value = newValue;
    });
    expect(result.current.value).toBe(newValue);
  });

  it('should not update the signal value if it does not change', () => {
    const initialValue = 'hello';
    const { result } = renderHook(() => useStateSignal(initialValue));
    act(() => {
      result.current.value = initialValue;
    });
    expect(result.current.value).toBe(initialValue);
  });
});
