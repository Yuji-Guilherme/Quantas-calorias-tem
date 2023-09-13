import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { useSearchT } from '.';

describe('useSearchT', () => {
  it('should menu open hook working correct', () => {
    const { result } = renderHook(() => useSearchT());

    expect(result.current.menuIsOpen).toEqual(false);

    act(() => {
      result.current.setOpenMenu(true);
    });

    expect(result.current.menuIsOpen).toEqual(true);
  });
});
