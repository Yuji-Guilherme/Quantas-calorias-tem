import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { useData } from '@/templates/SearchTemplate/hook';
import { useSearchStore } from '@/store/search';
import { useFoodStore } from '@/store/food';

const foodMock1 = {
  _id: '1',
  number: 10,
  description: 'test1',
  calories: 1,
  carbs: 1,
  protein: 1,
  fat: 1,
  fiber: 1
};

const foodMock2 = {
  _id: '2',
  number: 20,
  description: 'test2',
  calories: 2,
  carbs: 2,
  protein: 2,
  fat: 2,
  fiber: 2
};

jest.mock('@/hook/useFetch', () => ({
  useFetch: jest.fn().mockImplementation(() => ({
    data: [foodMock1, foodMock2],
    isLoading: false,
    iseError: false
  }))
}));

jest.mock('@/functions/createId', () => ({
  createId: jest.fn().mockImplementation(() => '')
}));

describe('use data', () => {
  it('should add first food working correct', () => {
    const { result } = renderHook(() => useData());
    const searchResult = renderHook(() => useSearchStore()).result;
    const foodResult = renderHook(() => useFoodStore()).result;

    act(() => {
      searchResult.current.actions.setSearchFood(foodMock1.description);
      result.current.addFirstFood();
    });

    const foodStateArray = foodResult.current.state.foods;

    expect(foodStateArray).toContainEqual({ ...foodMock1, _id: '' });
  });

  it('should filter data working correct', () => {
    const { result } = renderHook(() => useData());
    const searchResult = renderHook(() => useSearchStore()).result;

    act(() => {
      searchResult.current.actions.setSearchFood(foodMock2.description);
    });

    expect(result.current.filterData).toStrictEqual([foodMock2]);
  });
});
