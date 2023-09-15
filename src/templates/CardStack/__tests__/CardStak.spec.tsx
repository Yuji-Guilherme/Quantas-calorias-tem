import { render, screen, renderHook } from '@testing-library/react';

import { CardStack } from '@/templates/CardStack';
import { useFoodStore } from '@/store/food';
import { act } from 'react-dom/test-utils';

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

describe('<CardStack>', () => {
  it('should render component visible', () => {
    render(<CardStack />);

    const listElement = screen.getByRole('list');

    expect(listElement).toBeVisible();
  });

  it('should component has class name', () => {
    render(<CardStack />);

    const listElement = screen.getByRole('list');

    expect(listElement).toHaveClass(
      'w-[900px] mt-20 mb-10 mx-auto md:w-11/12 md:max-w-[820px] md:mt-16 sm:w-[302px] sm:mt-10 sm:mb-10'
    );
  });

  it('should component has item', () => {
    render(<CardStack />);
    const { result } = renderHook(() => useFoodStore());

    const listElement = screen.getByRole('list');

    act(() => {
      result.current.actions.addFood(foodMock);
    });

    const listItemElement = screen.getByRole('listitem');

    expect(listItemElement).toBeVisible();
    expect(listElement).toContainElement(listItemElement);
  });
});
