import { fireEvent, render, screen } from '@testing-library/react';

import { SearchTemplate } from '.';

jest.mock('@/hook/useFetch', () => ({
  useFetch: jest.fn().mockImplementation(() => ({
    data: [''],
    isLoading: false,
    iseError: false
  }))
}));

describe('<SearchTemplate>', () => {
  it('should show button click in input toggle menu', () => {
    render(<SearchTemplate />);

    const showButtonElement = screen.getByRole('show-btn');
    const arrowIconElement = screen.getByRole('arrow-icon');

    expect(arrowIconElement).toHaveAttribute('data-show', 'false');

    fireEvent.click(showButtonElement);

    expect(arrowIconElement).toHaveAttribute('data-show', 'true');
  });
});
