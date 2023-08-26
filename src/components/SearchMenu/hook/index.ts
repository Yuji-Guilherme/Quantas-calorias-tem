import { useShowMenuStore } from '@/store/showMenu';
import { useFoodStore } from '@/store/food';

import { Food } from '@/types';

const useMenu = () => {
  const {
    actions: { addFood }
  } = useFoodStore();

  const {
    state: { menuIsOpen },
    actions: { setShowMenu }
  } = useShowMenuStore();

  const handleItemClick = (food: Food) => {
    addFood(food);
    setShowMenu(false);
  };

  return { menuIsOpen, handleItemClick };
};

export { useMenu };
