import { useInput } from './hook';

import { Search, Plus, X, ChevronRight } from 'lucide-react';
import { ComponentProps, memo } from 'react';

type InputProps = {
  addFirstFood: () => void;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  menuIsOpen: boolean;
  menuRef: React.RefObject<HTMLInputElement>;
  transitionFn: React.TransitionStartFunction;
} & ComponentProps<'form'>;

function Input({
  addFirstFood,
  setOpenMenu,
  transitionFn,
  menuIsOpen,
  menuRef,
  ...props
}: InputProps) {
  const {
    inputRef,
    removeBtnIsOn,
    inputFocus,
    handleInputChange,
    handleSubmitFood,
    handleClearInput,
    toggleShowMenu
  } = useInput({ addFirstFood, setOpenMenu, transitionFn });

  return (
    <form
      role="form"
      className="flex items-center w-49/50 h-12 mx-auto border-solid border-b-2 border-dark-purple px-3 gap-3 hover:cursor-text blue md:h-10 sm:h-9 sm:pb-2"
      {...props}
    >
      <Search
        role="search-icon"
        className="w-[18px] stroke-2 stroke-dark-purple sm:w-4 sm:stroke- dark:stroke-medium-blue"
        onClick={() => inputFocus()}
      />
      <input
        ref={inputRef}
        type="text"
        placeholder="Pesquise um alimento..."
        onChange={handleInputChange}
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleSubmitFood();
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            menuRef.current?.focus();
          }
        }}
        className="bg-transparent outline-none w-full font-medium md:text-sm sm:text-sm dark:text-sky-50"
      />
      <div role="toolbar" className="w-auto h-fit flex items-center gap-1">
        {removeBtnIsOn && (
          <button
            role="remove-btn"
            type="button"
            className="w-8 flex justify-center border-solid border-r-2 border-dark-purple/60 pr-1 sm:w-6 dark:border-medium-blue"
            title="limpar barra de pesquisa"
            onClick={handleClearInput}
          >
            <X
              role="x-icon"
              className="w-[16px] stroke-2 stroke-dark-purple/60 md:w-[14px] dark:stroke-medium-blue"
            />
          </button>
        )}
        <button
          role="add-btn"
          type="submit"
          className="w-6 flex justify-center"
          title="adicionar"
          onClick={handleSubmitFood}
        >
          <Plus
            role="plus-icon"
            className="w-[18px] stroke-3 stroke-dark-purple md:w-4 sm:w-4 dark:stroke-medium-blue"
          />
        </button>
        <button
          role="show-btn"
          type="button"
          className="w-6 flex justify-center sm:w-4"
          title="mostrar/esconder menu"
          onClick={toggleShowMenu}
        >
          <ChevronRight
            role="arrow-icon"
            className="w-[18px] pt-[1px] stroke-3 stroke-dark-purple rotate-90 transition-transform data-[show=true]:-rotate-90 dark:stroke-medium-blue"
            data-show={menuIsOpen}
          />
        </button>
      </div>
    </form>
  );
}

export default memo(Input);
