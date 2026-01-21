import { act, renderHook } from '@testing-library/react';

import { useToggle } from './useToggle';

describe(useToggle, () => {
  it('should be false by default', () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current[0]).toBe(false);
  });

  it('should initialize with initial value', () => {
    const { result } = renderHook(() => useToggle(true));

    expect(result.current[0]).toBe(true);
  });

  it('should set value to true', () => {
    const { rerender, result } = renderHook(() => useToggle());

    act(() => result.current[1]());

    rerender();

    expect(result.current[0]).toBe(true);
  });

  it('should set value to false', () => {
    const { rerender, result } = renderHook(() => useToggle(true));

    act(() => result.current[2]());

    rerender();

    expect(result.current[0]).toBe(false);
  });

  it('should toggle to true', () => {
    const { rerender, result } = renderHook(() => useToggle());

    act(() => result.current[3]());

    rerender();

    expect(result.current[0]).toBe(true);
  });

  it('should toggle to false', () => {
    const { rerender, result } = renderHook(() => useToggle(true));

    act(() => result.current[3]());

    rerender();

    expect(result.current[0]).toBe(false);
  });
});
