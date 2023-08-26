import { useInput } from './hook';

import { Search, Plus } from 'lucide-react';
import { ComponentProps, memo } from 'react';

function Input({ ...props }: ComponentProps<'form'>) {
  const { inputRef, handleClick, handleInputChange } = useInput();

  return (
    <form
      className="flex items-center w-fit h-12 border-solid border-b-2 border-dark-purple px-3 gap-3 hover:cursor-text"
      {...props}
    >
      <Search className="w-[18px] stroke-2 stroke-dark-purple pointer-events-none" />
      <input
        ref={inputRef}
        onChange={handleInputChange}
        type="text"
        placeholder="Pesquise um alimento..."
        className="bg-transparent outline-none w-[512px] font-medium"
      />
      <button
        type="submit"
        className="w-6 flex justify-center"
        onClick={(e) => handleClick(e)}
      >
        <Plus className="w-[18px] stroke-3 stroke-dark-purple" />
      </button>
    </form>
  );
}

export default memo(Input);
