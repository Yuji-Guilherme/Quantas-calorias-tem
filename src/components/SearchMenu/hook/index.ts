import { useFoodStore } from '@/store/food';
import { useSearchStore } from '@/store/search';

import { Food } from '@/types';

type UseMenuProps = {
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const useMenu = ({ setMenuIsOpen }: UseMenuProps) => {
  const {
    actions: { addFood }
  } = useFoodStore();

  const {
    actions: { setSearch }
  } = useSearchStore();

  const handleItemClick = (food: Food) => {
    setSearch('');
    addFood(food);
    setMenuIsOpen(false);
  };

  return { handleItemClick };
};

export { useMenu };
