const getLocalStorage = (key: string) => localStorage.getItem(key);

const setLocalStorage = (key: string, value: string) =>
  localStorage.setItem(key, value);

export { getLocalStorage, setLocalStorage };
