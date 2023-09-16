import { render, screen, renderHook, fireEvent } from '@testing-library/react';

import { SearchMenu } from '@/components/SearchMenu';
import { useFoodStore } from '@/store/food';
import { useSearchStore } from '@/store/search';

const mockRef: { current: HTMLInputElement | null } = { current: null };

const foodMock = {
  _id: '1',
  number: 10,
  description: 'test1',
  calories: 1,
  carbs: 1,
  protein: 1,
  fat: 1,
  fiber: 1
};

const mockDefaultProps = {
  data: [],
  isLoading: false,
  isError: false,
  setOpenMenu: jest.fn(),
  menuIsOpen: true,
  menuRef: mockRef,
  searchIsLoad: false
};

jest.mock('@/functions/createId', () => ({
  createId: jest.fn().mockImplementation(() => '')
}));

describe('<SearchMenu>', () => {
  it('should component menu is visible, have classes and attribute', () => {
    render(<SearchMenu {...mockDefaultProps} />);

    const menuElement = screen.getByRole('menu');

    expect(menuElement).toBeVisible();
    expect(menuElement).toHaveClass(
      'hidden w-full absolute bg-medium-blue drop-shadow-md pt-4 pl-2 pr-3 pb-5 rounded-b-xl dark:bg-dark-gray data-[show=true]:block sm:rounded-b-md sm:py-3'
    );
    expect(menuElement).toHaveAttribute('data-show', 'true');
  });

  it('should loading element is visible', () => {
    render(<SearchMenu {...mockDefaultProps} isLoading />);

    const menuElement = screen.getByRole('menu');
    const loadContainerElement = screen.getByRole('contentinfo');
    const loadSvgElement = screen.getByRole('load-svg');
    const loadTextElement = screen.getByRole('load-text');

    expect(loadContainerElement).toBeVisible();
    expect(loadSvgElement).toBeVisible();
    expect(loadTextElement).toBeVisible();
    expect(menuElement).toContainElement(loadContainerElement);

    expect(screen.queryByRole('menu-text-error')).not.toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('should error text element is visible, have class and content', () => {
    render(<SearchMenu {...mockDefaultProps} isError />);

    const menuElement = screen.getByRole('menu');
    const errorTextElement = screen.getByRole('menu-text-error');

    expect(errorTextElement).toBeVisible();
    expect(menuElement).toContainElement(errorTextElement);
    expect(errorTextElement).toHaveClass(
      'w-fit mt-4 mx-auto text-lg font-medium text-dark-purple dark:text-sky-50 md:text-sm md:mt-2 sm:text-sm sm:mt-0'
    );
    expect(errorTextElement).toHaveTextContent(
      /ocorreu um error, tente novamente mais tarde/i
    );

    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('should loading without word is visible, if searchIsLoad is true', () => {
    render(<SearchMenu {...mockDefaultProps} searchIsLoad />);

    const menuElement = screen.getByRole('menu');
    const loadContainerElement = screen.getByRole('contentinfo');
    const loadSvgElement = screen.getByRole('load-svg');

    expect(loadContainerElement).toBeVisible();
    expect(loadSvgElement).toBeVisible();
    expect(menuElement).toContainElement(loadContainerElement);

    expect(screen.queryByRole('load-text')).not.toBeInTheDocument();
    expect(screen.queryByRole('menu-text-error')).not.toBeInTheDocument();
  });

  it('should list is visible and have class', () => {
    render(<SearchMenu {...mockDefaultProps} />);

    const menuElement = screen.getByRole('menu');
    const listElement = screen.getByRole('list');

    expect(listElement).toBeVisible();
    expect(menuElement).toContainElement(listElement);
    expect(listElement).toHaveClass(
      'w-full h-auto max-h-[44vh] overflow-y-auto p-1 scrollbar__ul'
    );

    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument();
    expect(screen.queryByRole('menu-text-error')).not.toBeInTheDocument();
  });

  it('should text with list empty is visible, have class and content', () => {
    render(<SearchMenu {...mockDefaultProps} />);

    const listElement = screen.getByRole('list');
    const emptyTextElement = screen.getByRole('menu-empty-text');

    expect(emptyTextElement).toBeVisible();
    expect(listElement).toContainElement(emptyTextElement);
    expect(emptyTextElement).toHaveClass(
      'mt-4 pr-1 pl-4 py-2 max-w-full text-center md:text-sm md:mt-2 sm:text-sm sm:mt-0'
    );
    expect(emptyTextElement).toHaveTextContent(/nenhum alimento encontrado/i);
  });

  it('should menu option is visible with data exist', () => {
    render(<SearchMenu {...mockDefaultProps} data={[foodMock]} />);

    const listElement = screen.getByRole('list');
    const listItemElement = screen.getByRole('listitem');
    const inputRadioElement = screen.getByRole('radio');
    const labelElement = screen.getByRole('label');

    expect(listItemElement).toBeVisible();
    expect(inputRadioElement).toBeVisible();
    expect(labelElement).toBeVisible();
    expect(listElement).toContainElement(listItemElement);
  });

  it('should menu option click add food and clear search', () => {
    render(<SearchMenu {...mockDefaultProps} data={[foodMock]} />);

    const foodStoreResult = renderHook(() => useFoodStore()).result;
    const searchStoreResult = renderHook(() => useSearchStore()).result;

    const labelElement = screen.getByRole('label');

    fireEvent.click(labelElement);

    const foodArray = foodStoreResult.current.state.foods;

    expect(foodArray).toContainEqual({ ...foodMock, _id: '' });
    expect(searchStoreResult.current.state.searchFood).toStrictEqual('');
  });

  it('should menu option press enter add food and clear search', () => {
    render(<SearchMenu {...mockDefaultProps} data={[foodMock]} />);

    const foodStoreResult = renderHook(() => useFoodStore()).result;
    const searchStoreResult = renderHook(() => useSearchStore()).result;

    const inputRadioElement = screen.getByRole('radio');

    fireEvent.keyPress(inputRadioElement, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13
    });

    const foodArray = foodStoreResult.current.state.foods;

    expect(foodArray).toContainEqual({ ...foodMock, _id: '' });
    expect(searchStoreResult.current.state.searchFood).toStrictEqual('');
  });
});
