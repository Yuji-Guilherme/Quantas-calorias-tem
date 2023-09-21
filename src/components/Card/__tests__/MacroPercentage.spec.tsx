import { render, screen } from '@testing-library/react';

import { MacroPercentage } from '@/components/Card/MacroPercentage';

const macroMock = { text: '10', width: 1, color: 'black' };

describe('<MacroPercentage>', () => {
  it('should component elements is visible', () => {
    render(<MacroPercentage number={1} macro={macroMock} type="carb" />);

    const containerElement = screen.getByRole('macro-percent-container');
    const numberElement = screen.getByText(/1g/i);
    const macroTextElement = screen.getByText(/carboidrato/i);
    const percentContainerElement = screen.getByRole('percent-container');
    const percentageElement = screen.getByRole('percentage');
    const percentageTextElement = screen.getByText(/10%/i);

    expect(containerElement).toBeVisible();
    expect(numberElement).toBeVisible();
    expect(macroTextElement).toBeVisible();
    expect(percentContainerElement).toBeVisible();
    expect(percentageElement).toBeVisible();
    expect(percentageTextElement).toBeVisible();

    expect(containerElement).toContainElement(numberElement);
    expect(containerElement).toContainElement(macroTextElement);
    expect(containerElement).toContainElement(percentContainerElement);
    expect(percentContainerElement).toContainElement(percentageElement);
    expect(percentContainerElement).toContainElement(percentageTextElement);
  });

  it('should component elements have correct classes, styles and attributes', () => {
    render(<MacroPercentage number={1} macro={macroMock} type="carb" />);

    const containerElement = screen.getByRole('macro-percent-container');
    const numberElement = screen.getByText(/1g/i);
    const macroTextElement = screen.getByText(/carboidrato/i);
    const percentContainerElement = screen.getByRole('percent-container');
    const percentageElement = screen.getByRole('percentage');
    const percentageTextElement = screen.getByText(/10%/i);

    expect(numberElement).toHaveClass('card_info_number');
    expect(macroTextElement).toHaveClass('card_info_desc');
    expect(percentContainerElement).toHaveClass('flex items-center gap-1 mt-1');
    expect(percentageElement).toHaveClass('card_percentage');
    expect(percentageElement).toHaveStyle({
      width: `${macroMock.width}px`,
      backgroundColor: macroMock.color
    });
    expect(percentageTextElement).toHaveClass('card_percentage_text');
    expect(percentageTextElement).toHaveStyle({
      color: macroMock.color
    });
    expect(containerElement).toHaveAttribute('tabIndex', '0');
  });

  it('should s appear in the final of carb text, if number over 1', () => {
    render(<MacroPercentage number={2} macro={macroMock} type="carb" />);

    const carbTextElement = screen.getByText(/carboidrato/i);

    expect(carbTextElement).toContainHTML('carboidratos');
  });

  it('should render fat text correct', () => {
    render(<MacroPercentage number={1} macro={macroMock} type="fat" />);

    const fatTextElement = screen.getByText(/gordura/i);

    expect(fatTextElement).toBeVisible();
  });

  it('should s appear in the final of fat text, if number over 1', () => {
    render(<MacroPercentage number={2} macro={macroMock} type="fat" />);

    const fatTextElement = screen.getByText(/gordura/i);

    expect(fatTextElement).toContainHTML('gorduras');
  });

  it('should render protein text correct', () => {
    render(<MacroPercentage number={1} macro={macroMock} type="protein" />);

    const fatTextElement = screen.getByText(/proteína/i);

    expect(fatTextElement).toBeVisible();
  });

  it('should s appear in the final of protein text, if number over 1', () => {
    render(<MacroPercentage number={2} macro={macroMock} type="protein" />);

    const fatTextElement = screen.getByText(/proteína/i);

    expect(fatTextElement).toContainHTML('proteínas');
  });
});
