import { filterFoodArrayByDesc } from '@/functions';
import { useSearchStore } from '@/store/search';
import { useFoodStore } from '@/store/food';

import { useRef, useState, useTransition } from 'react';
import { useFetch } from '@/hook/useFetch';

const useSearchT = () => {
  const [menuIsOpen, setOpenMenu] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const menuRef = useRef<HTMLInputElement>(null);

  const { data, isLoading, isError } = useFetch();

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
