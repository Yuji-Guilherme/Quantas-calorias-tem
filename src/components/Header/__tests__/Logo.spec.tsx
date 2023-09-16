import { render, screen } from '@testing-library/react';

import { Logo } from '@/components/Header/Logo';

describe('<Title>', () => {
  it('should render component visible', () => {
    render(<Logo />);
    const logo = screen.getByRole('logo');
    expect(logo).toBeVisible();
  });
  it('should component has class name', () => {
    render(<Logo />);
    const logo = screen.getByRole('logo');

    expect(logo).toHaveClass(
      'logo w-[17px] h-[38px] bg-light-blue md:w-[13px] md:h-[30px] sm:w-[11px] sm:h-[27px]'
    );
  });
});
