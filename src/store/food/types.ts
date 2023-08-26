import { Food } from '@/types';

export interface UseFoodStore {
  state: StateFoodStore;
  actions: ActionsFoodStore;
}

export interface StateFoodStore {
  foods: Food[];
}

export interface ActionsFoodStore {
  addFood: (food: Food) => void;
  removeFood: (foodNumber: number) => void;
}
