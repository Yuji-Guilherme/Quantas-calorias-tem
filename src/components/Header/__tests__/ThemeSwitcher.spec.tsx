import { fireEvent, render, screen } from '@testing-library/react';

import { ThemeSwitcher } from '@/components/Header/ThemeSwitcher';

describe('<ThemeSwitcher>', () => {
  it('should render button visible', () => {
    render(<ThemeSwitcher />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeVisible();
  });
  it('should button has class name', () => {
    render(<ThemeSwitcher />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveClass('group');
  });

  it('should button contain sun icon', () => {
    render(<ThemeSwitcher />);

    const buttonElement = screen.getByRole('button');
    const sunIconElement = screen.getByRole('sun-icon');

    expect(buttonElement).toContainElement(sunIconElement);
  });

  it('should sun icon is visible in button', () => {
    render(<ThemeSwitcher />);
    const sunIconElement = screen.getByRole('sun-icon');

    expect(sunIconElement).toBeVisible();
    expect(screen.queryByRole('moon-icon')).not.toBeInTheDocument();
  });

  it('should sun icon has class name', () => {
    render(<ThemeSwitcher />);
    const sunIconElement = screen.getByRole('sun-icon');

    expect(sunIconElement).toHaveClass('header_logo');
  });

  it('should moon icon appear on click button', () => {
    render(<ThemeSwitcher />);
    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);

    const moonIconElement = screen.getByRole('moon-icon');

    expect(buttonElement).toContainElement(moonIconElement);
    expect(moonIconElement).toBeVisible();
    expect(moonIconElement).toHaveClass('header_logo w-6 h-6');
    expect(screen.queryByRole('sun-icon')).not.toBeInTheDocument();
  });
});
