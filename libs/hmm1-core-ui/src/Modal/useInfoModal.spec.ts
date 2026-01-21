import { act, renderHook } from '@testing-library/react';

import { useInfoModal } from './useInfoModal';

describe(useInfoModal, () => {
  it('should be closed by default', () => {
    const { result } = renderHook(() => useInfoModal());

    expect(result.current.isOpen).toBe(false);
  });

  it('should open', () => {
    const { rerender, result } = renderHook(() => useInfoModal());

    act(() => result.current.open());

    rerender();

    expect(result.current.isOpen).toBe(true);
  });

  it('should close', () => {
    const { rerender, result } = renderHook(() => useInfoModal());

    act(() => result.current.open());

    rerender();

    act(() => result.current.close());

    rerender();

    expect(result.current.isOpen).toBe(false);
  });
});
