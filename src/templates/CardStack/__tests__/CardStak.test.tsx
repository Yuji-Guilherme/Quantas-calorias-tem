import { render, screen, renderHook, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { CardStack } from '@/templates/CardStack';
import { useFoodStore } from '@/store/food';

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
  createId: jest.fn().mockImplementation(() => foodMock._id)
}));
describe('CardStack and Card integration tests', () => {
  it('should list update on click remove button', () => {
    render(<CardStack />);
    const { result } = renderHook(() => useFoodStore());

    const listElement = screen.getByRole('list');

    act(() => {
      result.current.actions.addFood(foodMock);
    });

    const listItemElement = screen.getByRole('listitem');
    const closeButtonElement = screen.getByRole('card-close-button');

    expect(listItemElement).toBeVisible();

    fireEvent.click(closeButtonElement);

    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    expect(listElement).not.toContainElement(listItemElement);
  });
});
