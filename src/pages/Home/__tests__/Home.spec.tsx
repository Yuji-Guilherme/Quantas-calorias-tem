import { render, screen } from '@testing-library/react';

import { Home } from '@/pages/Home';

jest.mock('@/hook/useFetch', () => ({
  useFetch: jest.fn().mockImplementation(() => ({
    data: [''],
    isLoading: false,
    iseError: false
  }))
}));

describe('<Home>', () => {
  it('should component elements is visible', () => {
    render(<Home />);

    const headerElement = screen.getByRole('banner');
    const titleElement = screen.getByRole('heading', {
      name: /quantas calorias tem?/i
    });

    const searchTemplateSectionElement = screen.getByRole('section');
    const CardStackListElement = screen.getByRole('card-stack-list');

    expect(headerElement).toBeVisible();
    expect(titleElement).toBeVisible();
    expect(searchTemplateSectionElement).toBeVisible();
    expect(CardStackListElement).toBeVisible();
  });
});
