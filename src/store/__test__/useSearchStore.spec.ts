import { renderHook } from '@testing-library/react';

import { useSearchStore } from '@/store/search';
import { act } from 'react-dom/test-utils';

describe('use search store', () => {
  it('should initial state correct', () => {
    const { result } = renderHook(() => useSearchStore());

    const initialSate = result.current.state.searchFood;

    expect(initialSate).toStrictEqual('');
  });

  it('should set search food working correctly', () => {
    const { result } = renderHook(() => useSearchStore());

    const testString = 'test';

    act(() => {
      result.current.actions.setSearchFood(testString);
    });

    const searchFoodState = result.current.state.searchFood;

    expect(searchFoodState).toStrictEqual(testString);
  });

  it('should clear search food working correctly', () => {
    const { result } = renderHook(() => useSearchStore());

    const testString = 'test';

    act(() => {
      result.current.actions.setSearchFood(testString);
    });

    expect(result.current.state.searchFood).toStrictEqual(testString);

    act(() => {
      result.current.actions.clearSearch();
    });

    expect(result.current.state.searchFood).toStrictEqual('');
  });
});
