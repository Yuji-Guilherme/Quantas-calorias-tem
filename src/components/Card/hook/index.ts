import { useFoodStore } from '@/store/food';

const useCard = () => {
  const {
    state: { foods },
    actions: { removeFood }
  } = useFoodStore();

  return {
    foods,
    removeFood
  };
};

export { useCard };
