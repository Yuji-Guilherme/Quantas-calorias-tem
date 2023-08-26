import { fetchFoods } from '@/services/fetch';
import { useSearchStore } from '@/store/search';
import { useFoodStore } from '@/store/food';
import { useShowMenuStore } from '@/store/showMenu';
import { filterFoodArrayByDesc } from '@/functions';

import { useQuery } from '@tanstack/react-query';

const useSearchT = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['foods'],
    queryFn: fetchFoods
  });

  const {
    state: { menuIsOpen },
    actions: { setShowMenu }
  } = useShowMenuStore();

  const {
    actions: { addFood }
  } = useFoodStore();

  const {
    state: { searchFood }
  } = useSearchStore();

  const filterData =
    searchFood && data ? filterFoodArrayByDesc(data, searchFood) : data;

  const addFirstFood = () => {
    if (filterData) {
      addFood(filterData[0]);
    }
  };

  return {
    filterData,
    isLoading,
    isError,
    menuIsOpen,
    setShowMenu,
    addFirstFood
  };
};

export { useSearchT };
