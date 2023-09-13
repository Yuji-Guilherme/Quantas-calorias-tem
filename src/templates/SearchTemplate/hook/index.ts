import { filterFoodArrayByDesc } from '@/functions';
import { useSearchStore } from '@/store/search';
import { useFoodStore } from '@/store/food';

import { useRef, useState, useTransition } from 'react';
import { useFetch } from '@/hook/useFetch';

const useSearchT = () => {
  const [menuIsOpen, setOpenMenu] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const menuRef = useRef<HTMLInputElement>(null);

  return {
    menuRef,
    menuIsOpen,
    setOpenMenu,
    isPending,
    startTransition
  };
};

const useData = () => {
  const {
    actions: { addFood }
  } = useFoodStore();

  const {
    state: { searchFood }
  } = useSearchStore();

  const { data, isLoading, isError } = useFetch();

  const filterData =
    searchFood && data ? filterFoodArrayByDesc(data, searchFood) : data;

  const addFirstFood = () => {
    if (filterData) {
      addFood(filterData[0]);
    }
  };

  return { isLoading, isError, filterData, addFirstFood };
};

export { useSearchT, useData };
