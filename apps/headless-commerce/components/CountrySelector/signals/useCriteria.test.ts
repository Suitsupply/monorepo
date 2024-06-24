import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useCriteria } from './useCriteria';

describe('useCriteria hook', () => {
  it('should initialize with an empty string', () => {
    const { result } = renderHook(() => useCriteria());
    expect(result.current.criteria.value).toBe('');
  });

  it('should set the criteria value', () => {
    const { result } = renderHook(() => useCriteria());
    act(() => result.current.setCriteria('test'));
    expect(result.current.criteria.value).toBe('test');
  });

  it('should clear the criteria value', () => {
    const { result } = renderHook(() => useCriteria());
    act(() => result.current.setCriteria('test'));
    act(() => result.current.clearCriteria());
    expect(result.current.criteria.value).toBe('');
  });

  it('should return true when criteria is set', () => {
    const { result } = renderHook(() => useCriteria());
    act(() => result.current.setCriteria('test'));
    expect(result.current.hasCriteria()).toBe(true);
  });

  it('should return false when criteria is empty', () => {
    const { result } = renderHook(() => useCriteria());
    expect(result.current.hasCriteria()).toBe(false);
  });
});
