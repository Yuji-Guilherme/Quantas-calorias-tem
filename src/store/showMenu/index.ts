import { UseShowMenuStore } from './types';

import { create } from 'zustand';

const useShowMenuStore = create<UseShowMenuStore>((set) => ({
  state: {
    menuIsOpen: false
  },
  actions: {
    setShowMenu: (toggleMenu) => {
      set(() => ({
        state: { menuIsOpen: toggleMenu }
      }));
    }
  }
}));

export { useShowMenuStore };
