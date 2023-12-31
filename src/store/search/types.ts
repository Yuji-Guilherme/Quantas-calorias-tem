export interface UseSearchStore {
  state: StateSearchStore;
  actions: ActionsSearchStore;
}

export interface StateSearchStore {
  searchFood: string;
}

export interface ActionsSearchStore {
  clearSearch: () => void;
  setSearchFood: (foodName: string) => void;
}
