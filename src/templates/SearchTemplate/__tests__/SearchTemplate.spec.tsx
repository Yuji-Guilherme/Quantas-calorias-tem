import { render, screen, fireEvent } from '@testing-library/react';

import { SearchTemplate } from '@/templates/SearchTemplate';

jest.mock('@/hook/useFetch', () => ({
  useFetch: jest.fn().mockImplementation(() => ({
    data: [''],
    isLoading: false,
    iseError: false
  }))
}));

describe('<SearchTemplate>', () => {
  it('should render component visible', () => {
    render(<SearchTemplate />);

    const sectionElement = screen.getByRole('section');
    const menuElement = screen.getByRole('menu');
    const inputFormElement = screen.getByRole('form');

    expect(sectionElement).toBeVisible();
    expect(menuElement).toBeInTheDocument();
    expect(inputFormElement).toBeVisible();
    expect(sectionElement).toContainElement(menuElement);
    expect(sectionElement).toContainElement(inputFormElement);
  });

  it('should component has class name', () => {
    render(<SearchTemplate />);

    const sectionElement = screen.getByRole('section');

    expect(sectionElement).toHaveClass(
      'w-[632px] mt-16 mx-auto h-auto pt-1 rounded-t-xl relative z-10 data-[show=true]:bg-medium-blue data-[show=true]:dark:bg-dark-gray drop-shadow-md md:min-w-sm md:w-3/5 md:max-w-lg md:mt-14 sm:w-11/12 sm:max-w-xs+ sm:mt-14 sm:pt-2 sm:rounded-t-md'
    );
  });

  it('should open menu on component focus', () => {
    render(<SearchTemplate />);

    const sectionElement = screen.getByRole('section');
    const menuElement = screen.getByRole('menu');

    expect(sectionElement).toHaveAttribute('data-show', 'false');
    expect(menuElement).toHaveAttribute('data-show', 'false');

    fireEvent.focusIn(sectionElement);

    expect(sectionElement).toHaveAttribute('data-show', 'true');
    expect(menuElement).toHaveAttribute('data-show', 'true');
  });
});
