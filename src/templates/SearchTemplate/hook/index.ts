import { fetchFoods } from '@/services/fetch';
import { filterFoodArrayByDesc } from '@/functions';
import { useSearchStore } from '@/store/search';
import { useFoodStore } from '@/store/food';

import { useRef, useState, useTransition } from 'react';
import { useQuery } from '@tanstack/react-query';

const useSearchT = () => {
  const [menuIsOpen, setOpenMenu] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const menuRef = useRef<HTMLInputElement>(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['foods'],
    queryFn: fetchFoods
  });
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
    menuRef,
    menuIsOpen,
    setOpenMenu,
    addFirstFood,
    isPending,
    startTransition
  };
};

export { useSearchT };
