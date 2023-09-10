import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('<Header>', () => {
  it('should render component visible', () => {
    render(<Header />);

    const headerElement = screen.getByRole('banner');
    const logoElement = screen.getByRole('logo');
    const buttonElement = screen.getByRole('button');
    const linkElement = screen.getByRole('link');

    expect(headerElement).toBeVisible();
    expect(logoElement).toBeVisible();
    expect(buttonElement).toBeVisible();
    expect(linkElement).toBeVisible();
  });

  it('should header has class name', () => {
    render(<Header />);

    const headerElement = screen.getByRole('banner');

    expect(headerElement).toHaveClass(
      'w-full h-16 fixed top-0 flex items-center justify-between px-24 bg-dark-purple z-20 md:h-14 tablet:px-16 sm:px-9 sm:h-12'
    );
  });

  it('should link has class name', () => {
    render(<Header />);

    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveClass('group');
  });

  it('should link has correct href', () => {
    render(<Header />);

    const hrefLink = 'https://github.com/Yuji-Guilherme/quantas-calorias';
    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveAttribute('href', hrefLink);
  });

  it('should link contain correct logo', () => {
    render(<Header />);

    const linkElement = screen.getByRole('link');
    const githubLogo = screen.getByRole('github-logo');

    expect(linkElement).toContainElement(githubLogo);
    expect(githubLogo).toBeVisible();
  });

  it('should github logo has class name', () => {
    render(<Header />);

    const githubLogo = screen.getByRole('github-logo');

    expect(githubLogo).toHaveClass('header_logo');
  });
});
