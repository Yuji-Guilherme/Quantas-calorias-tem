import { Food } from '@/types';

type FilterFoodArrayByDesc<T> = (array: T[], query: string) => T[];

const filterFoodArrayByDesc: FilterFoodArrayByDesc<Food> = (array, query) =>
  array.filter((food) =>
    food.description.toLowerCase().includes(query.toLowerCase())
  );

export { filterFoodArrayByDesc };
