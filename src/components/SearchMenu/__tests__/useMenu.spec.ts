import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { useMenu } from '@/components/SearchMenu/hook';
import { useFoodStore } from '@/store/food';
import { useSearchStore } from '@/store/search';

const foodMock = {
  _id: '1',
  number: 10,
  description: 'test1',
  calories: 1,
  carbs: 1,
  protein: 1,
  fat: 1,
  fiber: 1
};

jest.mock('@/functions/createId', () => ({
  createId: jest.fn().mockImplementation(() => '')
}));

describe('use menu', () => {
  it('should handle option submit working correct', () => {
    const { result } = renderHook(() => useMenu({ setOpenMenu: jest.fn() }));
    const foodStoreResult = renderHook(() => useFoodStore()).result;
    const searchStoreResult = renderHook(() => useSearchStore()).result;

    act(() => {
      result.current.handleOptionSubmit(foodMock);
    });

    const foodArray = foodStoreResult.current.state.foods;

    expect(foodArray).toContainEqual({ ...foodMock, _id: '' });
    expect(searchStoreResult.current.state.searchFood).toStrictEqual('');
  });
});
