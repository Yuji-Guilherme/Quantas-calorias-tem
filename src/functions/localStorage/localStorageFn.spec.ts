import { setLocalStorage, getLocalStorage } from '.';

describe('local storage', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  it('should set item in local storage', () => {
    const key = 'key';
    const value = 'value';

    setLocalStorage(key, value);

    expect(localStorage.getItem(key)).toStrictEqual(value);
  });
  it('should return item from local storage', () => {
    const key = 'key';
    const value = 'value';

    localStorage.setItem(key, value);

    expect(getLocalStorage(key)).toStrictEqual(value);
  });
});
