import { UseSearchStore } from './types';

import { create } from 'zustand';

const useSearchStore = create<UseSearchStore>((set) => ({
  state: {
    searchFood: ''
  },
  actions: {
    clearSearch: () => {
      set(() => ({
        state: {
          searchFood: ''
        }
      }));
    },
    setSearch: (foodName) => {
      set(() => ({
        state: { searchFood: foodName }
      }));
    }
  }
}));

export { useSearchStore };
