export interface UseShowMenuStore {
  state: StateShowMenuStore;
  actions: ActionsShowMenuStore;
}

export interface StateShowMenuStore {
  menuIsOpen: boolean;
}

export interface ActionsShowMenuStore {
  setShowMenu: (toggleMenu: boolean) => void;
}
