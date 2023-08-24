import { Food } from '@/types';

const url = import.meta.env.VITE_REACT_API_URL;

export const fetchFoods = async (): Promise<Food[]> => {
  const response = await fetch(`${url}`);
  const json = await response.json();

  return json;
};
