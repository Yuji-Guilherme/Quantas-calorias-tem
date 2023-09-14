import { render, screen } from '@testing-library/react';

import { Loading } from '@/components/SearchMenu/Loading';

describe('<Loading>', () => {
  it('should component elements is visible', () => {
    render(<Loading withWord />);

    const containerElement = screen.getByRole('contentinfo');
    const textElement = screen.getByRole('load-text');
    const svgElement = screen.getByRole('load-svg');

    expect(containerElement).toBeVisible();
    expect(textElement).toBeVisible();
    expect(svgElement).toBeVisible();
    expect(containerElement).toContainElement(textElement);
    expect(containerElement).toContainElement(svgElement);
  });

  it('should component elements have correct classes', () => {
    render(<Loading withWord />);

    const containerElement = screen.getByRole('contentinfo');
    const textElement = screen.getByRole('load-text');
    const svgElement = screen.getByRole('load-svg');

    expect(containerElement).toHaveClass(
      'w-fit mt-4 mx-auto flex items-end gap-1 md:mt-2 sm:mt-0'
    );
    expect(textElement).toHaveClass(
      'h-fit text-lg font-medium text-dark-purple md:text-base sm:text-sm dark:text-sky-50'
    );
    expect(svgElement).toHaveClass(
      'w-4 h-5 md:w-3 md:h-4 sm:w-[10px] sm:h-[14px]'
    );
  });

  it('should render component without word, text no appear', () => {
    render(<Loading />);

    expect(screen.queryByRole('load-text')).not.toBeInTheDocument();
  });
});
