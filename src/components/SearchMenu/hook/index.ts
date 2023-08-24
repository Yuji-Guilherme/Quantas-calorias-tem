import { fetchFoods } from '@/services/fetch';

import { useQuery } from '@tanstack/react-query';

const useSearchMenu = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['foods'],
    queryFn: fetchFoods
  });

  return {
    data,
    isLoading,
    isError
  };
};

export { useSearchMenu };
