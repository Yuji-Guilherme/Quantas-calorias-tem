import { render, screen, renderHook, fireEvent } from '@testing-library/react';

import Input from '@/components/Input';
import { useSearchT } from '@/templates/SearchTemplate/hook';
import { useSearchStore } from '@/store/search';

describe('<Input>', () => {
  beforeEach(() => {
    const { menuRef, menuIsOpen, startTransition, setOpenMenu } = renderHook(
      () => useSearchT()
    ).result.current;

    const addFirstFood = jest.fn();

    render(
      <Input
        addFirstFood={addFirstFood}
        menuIsOpen={menuIsOpen}
        setOpenMenu={setOpenMenu}
        menuRef={menuRef}
        transitionFn={startTransition}
      />
    );
  });
  it('should default components is visible', () => {
    const formElement = screen.getByRole('form');
    const SearchIconElement = screen.getByRole('search-icon');
    const inputElement = screen.getByRole('textbox');
    const buttonsWrapperElement = screen.getByRole('toolbar');
    const addButtonElement = screen.getByRole('add-btn');
    const plusIconElement = screen.getByRole('plus-icon');
    const showButtonElement = screen.getByRole('show-btn');
    const arrowIconElement = screen.getByRole('arrow-icon');

    expect(formElement).toBeVisible();
    expect(SearchIconElement).toBeVisible();
    expect(inputElement).toBeVisible();
    expect(buttonsWrapperElement).toBeVisible();
    expect(addButtonElement).toBeVisible();
    expect(plusIconElement).toBeVisible();
    expect(showButtonElement).toBeVisible();
    expect(arrowIconElement).toBeVisible();
  });

  it('should components have correct classes and attributes', () => {
    const formElement = screen.getByRole('form');
    const SearchIconElement = screen.getByRole('search-icon');
    const inputElement = screen.getByRole('textbox');
    const buttonsWrapperElement = screen.getByRole('toolbar');
    const addButtonElement = screen.getByRole('add-btn');
    const plusIconElement = screen.getByRole('plus-icon');
    const showButtonElement = screen.getByRole('show-btn');
    const arrowIconElement = screen.getByRole('arrow-icon');

    expect(formElement).toHaveClass(
      'flex items-center w-49/50 h-12 mx-auto border-solid border-b-2 border-dark-purple px-3 gap-3 hover:cursor-text blue md:h-10 sm:h-9 sm:pb-2'
    );
    expect(SearchIconElement).toHaveClass(
      'w-[18px] stroke-2 stroke-dark-purple sm:w-4 sm:stroke- dark:stroke-medium-blue'
    );
    expect(inputElement).toHaveClass(
      'bg-transparent outline-none w-full font-medium md:text-sm sm:text-sm dark:text-sky-50'
    );
    expect(buttonsWrapperElement).toHaveClass(
      'w-auto h-fit flex items-center gap-1'
    );
    expect(addButtonElement).toHaveClass('w-6 flex justify-center');
    expect(plusIconElement).toHaveClass(
      'w-[18px] stroke-3 stroke-dark-purple md:w-4 sm:w-4 dark:stroke-medium-blue'
    );
    expect(showButtonElement).toHaveClass('w-6 flex justify-center sm:w-4');
    expect(arrowIconElement).toHaveClass(
      'w-[18px] pt-[1px] stroke-3 stroke-dark-purple rotate-90 transition-transform data-[show=true]:-rotate-90 dark:stroke-medium-blue'
    );
    expect(addButtonElement).toHaveAttribute('title', 'adicionar');
    expect(showButtonElement).toHaveAttribute('title', 'mostrar/esconder menu');
  });

  it('should form contains correct elements', () => {
    const formElement = screen.getByRole('form');
    const SearchIconElement = screen.getByRole('search-icon');
    const inputElement = screen.getByRole('textbox');
    const buttonsWrapperElement = screen.getByRole('toolbar');

    expect(formElement).toContainElement(SearchIconElement);
    expect(formElement).toContainElement(inputElement);
    expect(formElement).toContainElement(buttonsWrapperElement);
  });

  it('should button wrapper contain buttons correct', () => {
    const buttonsWrapperElement = screen.getByRole('toolbar');
    const addButtonElement = screen.getByRole('add-btn');
    const showButtonElement = screen.getByRole('show-btn');

    expect(buttonsWrapperElement).toContainElement(addButtonElement);
    expect(buttonsWrapperElement).toContainElement(showButtonElement);
  });

  it('should buttons contain correct icons', () => {
    const addButtonElement = screen.getByRole('add-btn');
    const plusIconElement = screen.getByRole('plus-icon');
    const showButtonElement = screen.getByRole('show-btn');
    const arrowIconElement = screen.getByRole('arrow-icon');

    expect(addButtonElement).toContainElement(plusIconElement);
    expect(showButtonElement).toContainElement(arrowIconElement);
  });

  it('should input have correct attributes', () => {
    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveAttribute(
      'placeholder',
      'Pesquise um alimento...'
    );
  });

  it('should type input remove button appear', () => {
    const inputElement = screen.getByRole('textbox');

    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: 'test' } });

    const removeButtonElement = screen.getByRole('remove-btn');
    const XIconElement = screen.getByRole('x-icon');

    expect(removeButtonElement).toBeVisible();
    expect(XIconElement).toBeVisible();
    expect(removeButtonElement).toContainElement(XIconElement);
  });

  it('should remove button and icon have correct classes and attributes', () => {
    const inputElement = screen.getByRole('textbox');

    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: 'test' } });

    const removeButtonElement = screen.getByRole('remove-btn');
    const XIconElement = screen.getByRole('x-icon');

    expect(removeButtonElement).toHaveAttribute(
      'title',
      'limpar barra de pesquisa'
    );
    expect(removeButtonElement).toHaveClass(
      'w-8 flex justify-center border-solid border-r-2 border-dark-purple/60 pr-1 sm:w-6 dark:border-medium-blue'
    );
    expect(XIconElement).toHaveClass(
      'w-[16px] stroke-2 stroke-dark-purple/60 md:w-[14px] dark:stroke-medium-blue'
    );
  });

  it('should search icon click focus input', () => {
    const SearchIconElement = screen.getByRole('search-icon');
    const inputElement = screen.getByRole('textbox');

    fireEvent.click(SearchIconElement);

    expect(inputElement).toHaveFocus();
  });

  it('should change input set search', () => {
    const { result } = renderHook(() => useSearchStore());
    const inputElement = screen.getByRole('textbox');

    const searchValue = 'test';

    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: searchValue } });

    expect(result.current.state.searchFood).toStrictEqual(searchValue);
  });

  it('should submit blur input, reset search state and close menu', () => {
    const { result } = renderHook(() => useSearchStore());
    const menuResult = renderHook(() => useSearchT()).result;

    const inputElement = screen.getByRole('textbox');
    const addButtonElement = screen.getByRole('add-btn');

    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: 'test' } });
    fireEvent.click(addButtonElement);

    expect(inputElement).not.toHaveFocus();
    expect(inputElement).toHaveValue('');
    expect(result.current.state.searchFood).toStrictEqual('');
    expect(menuResult.current.menuIsOpen).toEqual(false);
  });

  it('should submit with press enter in input', () => {
    const { result } = renderHook(() => useSearchStore());
    const menuResult = renderHook(() => useSearchT()).result;

    const inputElement = screen.getByRole('textbox');

    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: 'test' } });
    fireEvent.keyPress(inputElement, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13
    });

    expect(inputElement).not.toHaveFocus();
    expect(inputElement).toHaveValue('');
    expect(result.current.state.searchFood).toStrictEqual('');
    expect(menuResult.current.menuIsOpen).toEqual(false);
  });

  it('should remove button click clear and focus input', () => {
    const { result } = renderHook(() => useSearchStore());

    const inputElement = screen.getByRole('textbox');

    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: 'test' } });

    const removeButtonElement = screen.getByRole('remove-btn');

    fireEvent.click(removeButtonElement);

    expect(inputElement).toHaveFocus();
    expect(inputElement).toHaveValue('');
    expect(result.current.state.searchFood).toStrictEqual('');
  });
});
