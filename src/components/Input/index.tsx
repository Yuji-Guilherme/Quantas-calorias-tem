import { Search, Plus } from 'lucide-react';
import { useRef } from 'react';

function Input() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log('click');
  };

  const inputFocus = () => {
    inputRef?.current?.focus();
  };

  return (
    <form
      onClick={() => inputFocus()}
      className="flex items-center w-fit h-12 border-solid border-b-2 border-dark-purple px-3 gap-3 hover:cursor-text"
    >
      <Search className="w-[18px] stroke-2 stroke-dark-purple pointer-events-none" />
      <input
        ref={inputRef}
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

export { Input };
