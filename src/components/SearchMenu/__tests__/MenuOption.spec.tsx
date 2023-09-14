import { render, screen } from '@testing-library/react';

import { MenuOption } from '@/components/SearchMenu/MenuOption';

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

describe('<MenuOption>', () => {
  it('should component elements is visible', () => {
    render(<MenuOption food={foodMock1} />);

    const listItemElement = screen.getByRole('listitem');
    const inputRadioElement = screen.getByRole('radio');
    const labelElement = screen.getByRole('label');

    expect(listItemElement).toBeVisible();
    expect(inputRadioElement).toBeVisible();
    expect(labelElement).toBeVisible();
    expect(listItemElement).toContainElement(inputRadioElement);
    expect(listItemElement).toContainElement(labelElement);
  });

  it('should component elements have correct classes', () => {
    render(<MenuOption food={foodMock1} />);

    const listItemElement = screen.getByRole('listitem');
    const inputRadioElement = screen.getByRole('radio');
    const labelElement = screen.getByRole('label');

    expect(listItemElement).toHaveClass(
      'max-w-full relative rounded mt-4 mr-2 pr-1 pl-4 py-2 overflow-hidden text-ellipsis bg-transparent transition-colors hover:bg-medium-gray/10 dark:hover:bg-sky-100/5 cursor-pointer first:mt-0 focus-within:bg-medium-gray/10 dark:focus-within:bg-sky-100/5  focus-within:outline outline-medium-gray/30 dark:outline-sky-50/20 outline-1 md:py-1 sm:py-1 sm:pl-2'
    );
    expect(inputRadioElement).toHaveStyle({
      all: 'unset',
      position: 'absolute',
      inset: 0
    });
    expect(labelElement).toHaveClass(
      'cursor-pointer md:text-sm sm:text-sm dark:text-sky-100'
    );
  });

  it('should radio input have correct attributes', () => {
    render(<MenuOption food={foodMock1} />);

    const inputRadioElement = screen.getByRole('radio');

    expect(inputRadioElement).toHaveAttribute('name', 'foods');
    expect(inputRadioElement).toHaveAttribute('value', foodMock1.description);
    expect(inputRadioElement).toHaveAttribute('id', foodMock1.description);
  });

  it('should label have correct attributes', () => {
    render(<MenuOption food={foodMock1} />);

    const labelElement = screen.getByRole('label');

    expect(labelElement).toHaveAttribute('for', foodMock1.description);
    expect(labelElement).toHaveTextContent(foodMock1.description);
  });
});
