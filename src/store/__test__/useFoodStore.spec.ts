import { renderHook } from '@testing-library/react';

import { useFoodStore } from '@/store/food';
import { act } from 'react-dom/test-utils';

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

jest.mock('@/functions/createId', () => ({
  createId: jest.fn().mockImplementation(() => '')
}));

describe('use food store', () => {
  it('should initial state correct', () => {
    const { result } = renderHook(() => useFoodStore());

    const initialArray = result.current.state.foods;

    expect(initialArray).toStrictEqual([]);
  });

  it('should add food working correctly', () => {
    const { result } = renderHook(() => useFoodStore());

    act(() => {
      result.current.actions.addFood(foodMock1);
    });

    const foodArray = result.current.state.foods;

    expect(foodArray).toContainEqual({ ...foodMock1, _id: '' });
  });

  it('should remove food working correctly', () => {
    const { result } = renderHook(() => useFoodStore());

    act(() => {
      result.current.actions.addFood(foodMock1);
    });

    expect(result.current.state.foods).toContainEqual({
      ...foodMock1,
      _id: ''
    });

    act(() => {
      result.current.actions.removeFood('');
    });

    expect(result.current.state.foods).toStrictEqual([]);
  });
});
