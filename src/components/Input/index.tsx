import { useInput } from './hook';

import { Search, Plus, X, ChevronRight } from 'lucide-react';
import { ComponentProps, memo } from 'react';

type InputProps = {
  addFirstFood: () => void;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuIsOpen: boolean;
  menuRef: React.RefObject<HTMLInputElement>;
  transitionFn: React.TransitionStartFunction;
} & ComponentProps<'form'>;

function Input({
  addFirstFood,
  setMenuIsOpen,
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
    handleSubmit,
    handleRemove,
    handleShowMenu
  } = useInput({ addFirstFood, setMenuIsOpen, menuIsOpen, transitionFn });

  return (
    <form
      className="flex items-center w-49/50 h-12 mx-auto border-solid border-b-2 border-dark-purple px-3 gap-3 hover:cursor-text md:h-10 sm:h-9 sm:pb-2"
      {...props}
    >
      <Search
        className="w-[18px] stroke-2 stroke-dark-purple sm:w-4"
        onClick={() => inputFocus()}
      />
      <input
        ref={inputRef}
        type="text"
        placeholder="Pesquise um alimento..."
        onChange={handleInputChange}
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleSubmit();
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            menuRef.current?.focus();
          }
        }}
        className="bg-transparent outline-none w-full font-medium md:text-sm sm:text-sm"
      />
      <div className="w-auto h-fit flex items-center gap-1">
        {removeBtnIsOn && (
          <button
            type="button"
            className="w-8 flex justify-center border-solid border-r-2 border-dark-purple/60 pr-1 sm:w-6"
            onClick={handleRemove}
          >
            <X className="w-[16px] stroke-2 stroke-dark-purple/60 md:w-[14px]" />
          </button>
        )}
        <button
          type="submit"
          className="w-6 flex justify-center"
          onClick={handleSubmit}
        >
          <Plus className="w-[18px] stroke-3 stroke-dark-purple md:w-4 sm:w-4" />
        </button>
        <button
          type="button"
          className="w-6 flex justify-center sm:w-4"
          onClick={handleShowMenu}
        >
          <ChevronRight
            className="w-[18px] pt-[1px] stroke-3 stroke-dark-purple rotate-90 transition-transform data-[show=true]:-rotate-90"
            data-show={menuIsOpen}
          />
        </button>
      </div>
    </form>
  );
}

export default memo(Input);
