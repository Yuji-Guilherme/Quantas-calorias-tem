import { useFoodStore } from '@/store/food';
import { useSearchStore } from '@/store/search';

import { Food } from '@/types';

type UseMenuProps = {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const useMenu = ({ setOpenMenu }: UseMenuProps) => {
  const {
    actions: { addFood }
  } = useFoodStore();

  const {
    actions: { clearSearch }
  } = useSearchStore();

  const handleOptionSubmit = (
    food: Food,
    e?: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    if (e?.detail === 0) return;
    clearSearch();
    addFood(food);
    setOpenMenu(false);
  };

  return { handleOptionSubmit };
};

export { useMenu };
