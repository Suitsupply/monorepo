import { afterEach, describe, expect, it, vi } from 'vitest';

import { toJSON } from './json';

describe('toJSON function', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return the same object when passed an object', () => {
    const obj = { key: 'value' };
    const spy = vi.spyOn(JSON, 'stringify').mockReturnValue(JSON.stringify(obj));
    const result = toJSON(obj);
    expect(result).toEqual(obj);
    expect(spy).toHaveBeenCalledWith(obj);
  });

  it('should return the same array when passed an array', () => {
    const arr = [1, 2, 3];
    const spy = vi.spyOn(JSON, 'stringify').mockReturnValue(JSON.stringify(arr));
    const result = toJSON(arr);
    expect(result).toEqual(arr);
    expect(spy).toHaveBeenCalledWith(arr);
  });

  it('should return the same string when passed a string', () => {
    const str = 'test';
    const spy = vi.spyOn(JSON, 'stringify').mockReturnValue(JSON.stringify(str));
    const result = toJSON(str);
    expect(result).toEqual(str);
    expect(spy).toHaveBeenCalledWith(str);
  });

  it('should return the same number when passed a number', () => {
    const num = 123;
    const spy = vi.spyOn(JSON, 'stringify').mockReturnValue(JSON.stringify(num));
    const result = toJSON(num);
    expect(result).toEqual(num);
    expect(spy).toHaveBeenCalledWith(num);
  });

  it('should return the same boolean when passed a boolean', () => {
    const bool = true;
    const spy = vi.spyOn(JSON, 'stringify').mockReturnValue(JSON.stringify(bool));
    const result = toJSON(bool);
    expect(result).toEqual(bool);
    expect(spy).toHaveBeenCalledWith(bool);
  });
});
