import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { useCard } from '@/components/Card/hook';
import { useFoodStore } from '@/store/food';

const mockEvent = {
  target: {
    value: '400'
  }
} as React.ChangeEvent<HTMLInputElement>;

const partialFoodMock = {
  _id: '1',
  calories: 1,
  carbs: 2,
  protein: 30,
  fat: 40,
  fiber: 5
};

const foodMock = { ...partialFoodMock, number: 10, description: 'test1' };

jest.mock('@/functions/createId', () => ({
  createId: jest.fn().mockImplementation(() => partialFoodMock._id)
}));

describe('use card', () => {
  it('should correct initial value state of hooks', () => {
    const { result } = renderHook(() => useCard(partialFoodMock));

    const initialGramsState = result.current.grams;
    const initialIsGramsEditedState = result.current.isGramsEdited;

    expect(initialGramsState).toStrictEqual('100');
    expect(initialIsGramsEditedState).toEqual(false);
  });

  it('should set isGramsEdited working correctly', () => {
    const { result } = renderHook(() => useCard(partialFoodMock));

    act(() => {
      result.current.setIsGramsEdited(true);
    });

    const initialIsGramsEditedState = result.current.isGramsEdited;

    expect(initialIsGramsEditedState).toEqual(true);
  });

  it('should handle cal submit working correctly', () => {
    const { result } = renderHook(() => useCard(partialFoodMock));

    act(() => {
      result.current.handleCalSubmit(mockEvent);
    });

    const initialGramsState = result.current.grams;

    expect(initialGramsState).toStrictEqual('400');
  });

  it('should handle remove card working correctly', () => {
    const { result } = renderHook(() => useCard(partialFoodMock));
    const foodStoreResult = renderHook(() => useFoodStore()).result;

    act(() => {
      foodStoreResult.current.actions.addFood(foodMock);
      result.current.handleRemoveCard();
    });

    expect(foodStoreResult.current.state.foods).not.toContainEqual(foodMock);
    expect(foodStoreResult.current.state.foods).toStrictEqual([]);
  });

  it('should return macroNumbers correct', () => {
    const { result } = renderHook(() => useCard(partialFoodMock));

    act(() => {
      result.current.handleCalSubmit(mockEvent);
    });

    const macroNumbers = result.current.macroNumbers;

    expect(macroNumbers).toStrictEqual({
      calories: 4,
      carb: 8,
      protein: 120,
      fat: 160,
      fiber: 20
    });
  });

  it('should return macroPercentages correct', () => {
    const { result } = renderHook(() => useCard(partialFoodMock));

    const macroPercentages = result.current.macroPercentages;

    expect(macroPercentages).toStrictEqual({
      carb: { text: '2,8', width: 4, color: '#0284c7' },
      fat: { text: '55,6', width: 55, color: '#eab308' },
      protein: {
        text: '41,7',
        width: 41,
        color: '#9f1239'
      }
    });
  });
});
