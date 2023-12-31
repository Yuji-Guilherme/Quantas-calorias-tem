import { render, screen } from '@testing-library/react';
import { Title } from '@/components/Title';

describe('<Title>', () => {
  it('should render component visible with exact name', () => {
    render(<Title />);
    const titleElement = screen.getByRole('heading', {
      name: /quantas calorias tem?/i
    });
    expect(titleElement).toBeVisible();
  });
  it('should component has class name', () => {
    render(<Title />);
    const titleElement = screen.getByRole('heading');

    expect(titleElement).toHaveClass(
      'font-extrabold text-4xl mt-48 text-dark-purple w-fit mx-auto dark:text-light-blue md:text-3xl md:mt-36 sm:text-2xl sm:mt-28'
    );
  });
});
