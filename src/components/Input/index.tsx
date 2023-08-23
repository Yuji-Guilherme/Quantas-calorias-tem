import { Search, Plus } from 'lucide-react';

function Input() {
  return (
    <form className="flex items-center w-fit h-11 border-solid border-b-2 border-dark-purple px-2 mx-auto mt-16 gap-3">
      <Search className="w-[18px] stroke-2 stroke-dark-purple" />
      <input
        type="text"
        placeholder="Pesquise um alimento..."
        className="bg-transparent outline-none w-[512px] font-medium"
      />
      <button type="submit">
        <Plus className="w-[18px] stroke-3 stroke-dark-purple" />
      </button>
    </form>
  );
}

export { Input };
