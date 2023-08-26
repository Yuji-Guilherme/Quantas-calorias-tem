import { fetchFoods } from '@/services/fetch';
import { filterFoodArrayByDesc } from '@/functions';
import { useSearchStore } from '@/store/search';

import { useQuery } from '@tanstack/react-query';

const useData = () => {
  const {
    state: { searchFood }
  } = useSearchStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['foods'],
    queryFn: fetchFoods
  });

  const filterData =
    searchFood && data ? filterFoodArrayByDesc(data, searchFood) : data;

  return { data: filterData, isLoading, isError };
};

export { useData };
