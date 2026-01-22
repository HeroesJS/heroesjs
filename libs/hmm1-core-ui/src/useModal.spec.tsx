import { act, renderHook } from '@testing-library/react';

import { useModal } from './useModal';

describe(useModal, () => {
  it('should be closed by default', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.isOpen).toBe(false);
  });

  it('should open', () => {
    const { rerender, result } = renderHook(() => useModal());

    act(() => result.current.open());

    rerender();

    expect(result.current.isOpen).toBe(true);
  });

  it('should close', () => {
    const { rerender, result } = renderHook(() => useModal());

    act(() => result.current.open());

    rerender();

    act(() => result.current.close());

    rerender();

    expect(result.current.isOpen).toBe(false);
  });
});
