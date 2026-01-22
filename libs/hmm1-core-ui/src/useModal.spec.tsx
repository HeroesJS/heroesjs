import { act, renderHook } from '@testing-library/react';

import { useModal } from './useModal';

describe(useModal, () => {
  it('should be closed by default', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current[1].isOpen).toBe(false);
  });

  it('should open', () => {
    const { rerender, result } = renderHook(() => useModal());

    act(() => result.current[1].open());

    rerender();

    expect(result.current[1].isOpen).toBe(true);
  });

  it('should close', () => {
    const { rerender, result } = renderHook(() => useModal());

    act(() => result.current[1].open());

    rerender();

    act(() => result.current[1].close());

    rerender();

    expect(result.current[1].isOpen).toBe(false);
  });
});
