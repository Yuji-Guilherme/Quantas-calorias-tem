import { render, screen, fireEvent } from '@testing-library/react';

import { SearchTemplate } from '@/templates/SearchTemplate';

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

describe('SearchTemplate, Input, Search Menu integration tests', () => {
  it('should show button click in input toggle menu', () => {
    render(<SearchTemplate />);

    const sectionElement = screen.getByRole('section');
    const showButtonElement = screen.getByRole('show-btn');
    const arrowIconElement = screen.getByRole('arrow-icon');

    expect(arrowIconElement).toHaveAttribute('data-show', 'false');
    expect(sectionElement).toHaveAttribute('data-show', 'false');

    fireEvent.click(showButtonElement);

    expect(arrowIconElement).toHaveAttribute('data-show', 'true');
    expect(sectionElement).toHaveAttribute('data-show', 'true');
  });

  it('should focus first menu item with press arrow down in input', () => {
    render(<SearchTemplate />);

    const inputElement = screen.getByRole('textbox');

    fireEvent.click(inputElement);
    fireEvent.keyDown(inputElement, {
      key: 'ArrowDown',
      code: 'ArrowDown',
      keyCode: 40
    });

    const inputMenuOptionELement = screen.getByLabelText(foodMock1.description);

    expect(inputMenuOptionELement).toHaveFocus();
  });

  it('should close menu on select menu item and press enter', () => {
    render(<SearchTemplate />);

    const inputElement = screen.getByRole('textbox');
    const sectionElement = screen.getByRole('section');

    fireEvent.click(inputElement);
    fireEvent.keyDown(inputElement, {
      key: 'ArrowDown',
      code: 'ArrowDown',
      keyCode: 40
    });

    const inputMenuOptionELement = screen.getByLabelText(foodMock1.description);

    fireEvent.keyPress(inputMenuOptionELement, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13
    });

    expect(sectionElement).toHaveAttribute('data-show', 'false');
  });
});
