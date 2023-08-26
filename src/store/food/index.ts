import { UseFoodStore } from './types';

import { create } from 'zustand';

const useFoodStore = create<UseFoodStore>((set) => ({
  state: {
    foods: []
  },
  actions: {
    addFood: (food) =>
      set((state) => ({
        state: { foods: [...state.state.foods, food] }
      })),
    removeFood: (foodNumber) =>
      set((state) => ({
        state: {
          foods: state.state.foods.filter((food) => food.number !== foodNumber)
        }
      }))
  }
}));

export { useFoodStore };
