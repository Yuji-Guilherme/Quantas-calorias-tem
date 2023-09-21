import { render, screen, fireEvent } from '@testing-library/react';

import { Card } from '@/components/Card';

const foodMock = {
  _id: '1',
  number: 10,
  description: 'test1',
  calories: 5,
  carbs: 2,
  protein: 3,
  fat: 4,
  fiber: 1
};

describe('<Card>', () => {
  it('should component elements is visible', () => {
    render(<Card {...foodMock} />);

    const listElement = screen.getByRole('listitem');
    const descTextElement = screen.getByText(foodMock.description);
    const closeButtonElement = screen.getByRole('card-close-button');
    const closeIconELement = screen.getByRole('card-close-icon');
    const editContainerElement = screen.getByRole('card-edit-container');
    const editButtonElement = screen.getByRole('card-edit-button');
    const editIconELement = screen.getByRole('card-edit-icon');
    const inputContainerElement = screen.getByRole('card-input-container');
    const inputElement = screen.getByRole('spinbutton');
    const gramsTextElement = screen.getByText(/grama/i);
    const macroPercentElement = screen.getAllByRole('macro-percent-container');
    const [macroPercent1, macroPercent2, macroPercent3] = macroPercentElement;
    const fiberContainerElement = screen.getByRole('card-fiber-container');
    const fiberNumberElement = screen.getByText(`${foodMock.fiber}g`);
    const fiberTextElement = screen.getByText('fibra');
    const calContainerElement = screen.getByRole('card-cal-container');
    const calNumberElement = screen.getByRole('card-cal-number');
    const calTextElement = screen.getByText(/cal/i);
    const calCircleContainerElement = screen.getByRole('cal-circle-container');
    const calCircleSvgElement = screen.getByRole('cal-circle-svg');

    expect(listElement).toBeVisible();
    expect(descTextElement).toBeVisible();
    expect(closeButtonElement).toBeVisible();
    expect(closeIconELement).toBeVisible();
    expect(editContainerElement).toBeVisible();
    expect(editButtonElement).toBeVisible();
    expect(editIconELement).toBeVisible();
    expect(inputContainerElement).toBeVisible();
    expect(inputElement).toBeVisible();
    expect(gramsTextElement).toBeVisible();
    expect(macroPercentElement).toHaveLength(3);
    expect(macroPercent1).toBeVisible();
    expect(macroPercent2).toBeVisible();
    expect(macroPercent3).toBeVisible();
    expect(fiberContainerElement).toBeVisible();
    expect(fiberNumberElement).toBeVisible();
    expect(fiberTextElement).toBeVisible();
    expect(calContainerElement).toBeVisible();
    expect(calNumberElement).toBeVisible();
    expect(calTextElement).toBeVisible();
    expect(calCircleContainerElement).toBeVisible();
    expect(calCircleSvgElement).toBeVisible();
  });

  it('should component contain correct elements', () => {
    render(<Card {...foodMock} />);

    const listElement = screen.getByRole('listitem');
    const descTextElement = screen.getByText(foodMock.description);
    const closeButtonElement = screen.getByRole('card-close-button');
    const closeIconELement = screen.getByRole('card-close-icon');
    const editContainerElement = screen.getByRole('card-edit-container');
    const editButtonElement = screen.getByRole('card-edit-button');
    const editIconELement = screen.getByRole('card-edit-icon');
    const inputContainerElement = screen.getByRole('card-input-container');
    const inputElement = screen.getByRole('spinbutton');
    const gramsTextElement = screen.getByText(/grama/i);
    const macroPercentElement = screen.getAllByRole('macro-percent-container');
    const [macroPercent1, macroPercent2, macroPercent3] = macroPercentElement;
    const fiberContainerElement = screen.getByRole('card-fiber-container');
    const fiberNumberElement = screen.getByText(`${foodMock.fiber}g`);
    const fiberTextElement = screen.getByText(/fibra/i);
    const calContainerElement = screen.getByRole('card-cal-container');
    const calNumberElement = screen.getByRole('card-cal-number');
    const calTextElement = screen.getByText(/cal/i);
    const calCircleContainerElement = screen.getByRole('cal-circle-container');
    const calCircleSvgElement = screen.getByRole('cal-circle-svg');

    expect(listElement).toContainElement(descTextElement);
    expect(listElement).toContainElement(closeButtonElement);
    expect(listElement).toContainElement(editContainerElement);
    expect(listElement).toContainElement(macroPercent1);
    expect(listElement).toContainElement(macroPercent2);
    expect(listElement).toContainElement(macroPercent3);
    expect(listElement).toContainElement(fiberContainerElement);
    expect(listElement).toContainElement(calContainerElement);

    expect(closeButtonElement).toContainElement(closeIconELement);

    expect(editContainerElement).toContainElement(editButtonElement);
    expect(editContainerElement).toContainElement(inputContainerElement);
    expect(editButtonElement).toContainElement(editIconELement);

    expect(inputContainerElement).toContainElement(inputElement);
    expect(inputContainerElement).toContainElement(gramsTextElement);

    expect(fiberContainerElement).toContainElement(fiberNumberElement);
    expect(fiberContainerElement).toContainElement(fiberTextElement);

    expect(calContainerElement).toContainElement(calNumberElement);
    expect(calContainerElement).toContainElement(calTextElement);
    expect(calContainerElement).toContainElement(calCircleContainerElement);
    expect(calCircleContainerElement).toContainElement(calCircleSvgElement);
  });

  it('should component elements have correct classes and attributes', () => {
    render(<Card {...foodMock} />);

    const listElement = screen.getByRole('listitem');
    const descTextElement = screen.getByText(foodMock.description);
    const closeButtonElement = screen.getByRole('card-close-button');
    const closeIconELement = screen.getByRole('card-close-icon');
    const editContainerElement = screen.getByRole('card-edit-container');
    const editButtonElement = screen.getByRole('card-edit-button');
    const editIconELement = screen.getByRole('card-edit-icon');
    const inputContainerElement = screen.getByRole('card-input-container');
    const inputElement = screen.getByRole('spinbutton');
    const gramsTextElement = screen.getByText(/grama/i);
    const macroPercentElement = screen.getAllByRole('macro-percent-container');
    const [macroPercent1, macroPercent2, macroPercent3] = macroPercentElement;
    const fiberContainerElement = screen.getByRole('card-fiber-container');
    const fiberNumberElement = screen.getByText(`${foodMock.fiber}g`);
    const fiberTextElement = screen.getByText(/fibra/i);
    const calContainerElement = screen.getByRole('card-cal-container');
    const calNumberElement = screen.getByRole('card-cal-number');
    const calTextElement = screen.getByText(/cal/i);
    const calCircleContainerElement = screen.getByRole('cal-circle-container');

    expect(listElement).toHaveClass(
      'w-full h-[200px] rounded-[40px] pt-5 px-7 mt-14 grid grid-cols-6 grid-rows-card bg-medium-blue dark:bg-dark-purple first:mt-0 md:pl-8 md-:h-44 tablet:h-auto tablet:relative tablet:pb-6 tablet:gap-y-8 tablet:grid-cols-3 tablet:grid-rows-card-tablet tablet:place-items-center tablet:rounded-[28px] sm:h-[430px] sm:relative sm:grid-cols-2 sm:grid-rows-card-sm sm:py-5 sm:px-6 sm:rounded-[32px] sm:gap-y-4 sm:mt-10 sm:place-items-center'
    );
    expect(descTextElement).toHaveClass(
      'col-span-5 font-semibold text-xl text-ellipsis text-dark-purple overflow-hidden whitespace-nowrap dark:text-medium-blue md:text-lg tablet:col-span-3 tablet:justify-self-start tablet:max-w-[97%]  sm:text-base sm:col-span-2 sm:max-w-[92%] sm:pl-1 t sm:justify-self-start'
    );
    expect(closeButtonElement).toHaveClass(
      'w-fit justify-self-end tablet:absolute tablet:top-4 tablet:right-5 sm:absolute sm:top-4 sm:right-4'
    );
    expect(closeIconELement).toHaveClass(
      'stroke-dark-purple dark:stroke-medium-blue md:w-5 sm:w-5'
    );
    expect(editContainerElement).toHaveClass(
      'h-3/4 flex items-center justify-center gap-2 md:gap-1 sm:gap-[2px]'
    );
    expect(editIconELement).toHaveClass(
      'w-[18px] fill-dark-purple stroke-dark-purple dark:stroke-medium-blue dark:fill-medium-blue transition-colors data-[active=true]:fill-transparent dark:data-[active=true]:fill-transparent md:w-4 sm:w-4'
    );
    expect(inputContainerElement).toHaveClass(
      'flex flex-col mt-4 ml-2 items-start md:ml-0 md-:mt-3 tablet:mt-0 sm:m-0'
    );
    expect(inputElement).toHaveClass(
      'w-fit max-w-[100px] py-1 pl-2 rounded text-3xl font-semibold text-dark-purple font-number bg-medium-gray/10 dark:bg-medium-blue/5 outline-none border border-solid border-medium-gray/50 dark:border-light-blue/50 disabled:border-none disabled:bg-transparent dark:disabled:bg-transparent dark:text-medium-blue md:text-2xl md:w-20 sm:text-2xl sm:max-w-[80px]'
    );
    expect(gramsTextElement).toHaveClass('card_info_desc pl-2');
    expect(macroPercent1).toHaveClass('card_info ml-1');
    expect(macroPercent2).toHaveClass('card_info sm:ml-2');
    expect(macroPercent3).toHaveClass('card_info');
    expect(fiberContainerElement).toHaveClass(
      'card_info mr-4 tablet:mr-0 sm:mr-0 sm:ml-2 sm:mb-4'
    );
    expect(fiberNumberElement).toHaveClass('card_info_number');
    expect(fiberTextElement).toHaveClass('card_info_desc');
    expect(calContainerElement).toHaveClass(
      'card_info sm:row-start-2 sm:col-start-2 sm:mt-3 sm:ml-3'
    );
    expect(calNumberElement).toHaveClass(
      'card_info_number z-1 max-w-[84px] sm:mb-[2px]'
    );
    expect(calTextElement).toHaveClass('card_info_desc z-1');
    expect(calCircleContainerElement).toHaveClass('absolute z-0');

    expect(descTextElement).toHaveAttribute('tabIndex', '0');
    expect(closeButtonElement).toHaveAttribute('title', 'deletar alimento');
    expect(editContainerElement).toHaveAttribute('tabIndex', '0');
    expect(editButtonElement).toHaveAttribute(
      'title',
      'habilitar/desabilitar edição'
    );
    expect(fiberContainerElement).toHaveAttribute('tabIndex', '0');
    expect(calContainerElement).toHaveAttribute('tabIndex', '0');
  });

  it('should s appear in the final of fiber text, if number over 1', () => {
    render(<Card {...foodMock} fiber={2} />);

    const fiberTextElement = screen.getByText(/fibra/i);

    expect(fiberTextElement).toContainHTML('fibras');
  });

  it('should edit button click, change icon attribute', () => {
    render(<Card {...foodMock} />);

    const editButtonElement = screen.getByRole('card-edit-button');
    const editIconELement = screen.getByRole('card-edit-icon');

    expect(editIconELement).toHaveAttribute('data-active', 'false');

    fireEvent.click(editButtonElement);

    expect(editIconELement).toHaveAttribute('data-active', 'true');

    fireEvent.click(editButtonElement);

    expect(editIconELement).toHaveAttribute('data-active', 'false');
  });

  it('should edit button click enable and disable input', () => {
    render(<Card {...foodMock} />);

    const editButtonElement = screen.getByRole('card-edit-button');
    const inputElement = screen.getByRole('spinbutton');

    expect(inputElement).toBeDisabled();

    fireEvent.click(editButtonElement);

    expect(inputElement).toBeEnabled();

    fireEvent.click(editButtonElement);

    expect(inputElement).toBeDisabled();
  });

  it('should disable input if press enter', () => {
    render(<Card {...foodMock} />);

    const editButtonElement = screen.getByRole('card-edit-button');
    const editIconELement = screen.getByRole('card-edit-icon');
    const inputElement = screen.getByRole('spinbutton');

    fireEvent.click(editButtonElement);

    expect(inputElement).toBeEnabled();

    fireEvent.keyPress(inputElement, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13
    });

    expect(inputElement).toBeDisabled();
    expect(editIconELement).toHaveAttribute('data-active', 'false');
  });

  it('should disable input if blur element', () => {
    render(<Card {...foodMock} />);

    const editButtonElement = screen.getByRole('card-edit-button');
    const editIconELement = screen.getByRole('card-edit-icon');
    const inputElement = screen.getByRole('spinbutton');

    fireEvent.click(editButtonElement);

    expect(inputElement).toBeEnabled();

    fireEvent.blur(inputElement);

    expect(inputElement).toBeDisabled();
    expect(editIconELement).toHaveAttribute('data-active', 'false');
  });

  it('should value correct on change input', () => {
    render(<Card {...foodMock} />);

    const editButtonElement = screen.getByRole('card-edit-button');
    const inputElement = screen.getByRole('spinbutton');

    expect(inputElement).toHaveValue(100);

    fireEvent.click(editButtonElement);
    fireEvent.change(inputElement, { target: { value: '10' } });

    expect(inputElement).toHaveValue(10);
  });

  it('should input max value is 1000', () => {
    render(<Card {...foodMock} />);

    const editButtonElement = screen.getByRole('card-edit-button');
    const inputElement = screen.getByRole('spinbutton');

    fireEvent.click(editButtonElement);
    fireEvent.change(inputElement, { target: { value: '9999' } });

    expect(inputElement).toHaveValue(1000);
  });

  it('should s not appear in the final of grams text, if number under 1', () => {
    render(<Card {...foodMock} />);

    const gramsTextElement = screen.getByText(/grama/i);
    const editButtonElement = screen.getByRole('card-edit-button');
    const inputElement = screen.getByRole('spinbutton');

    expect(gramsTextElement).toContainHTML('gramas');

    fireEvent.click(editButtonElement);
    fireEvent.change(inputElement, { target: { value: '1' } });

    expect(gramsTextElement).toContainHTML('grama');
    expect(gramsTextElement).not.toContainHTML('gramas');
  });
});
