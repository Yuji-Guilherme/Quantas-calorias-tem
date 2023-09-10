import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { useTheme } from '.';

describe('useTheme', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  it('should return initial value', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toStrictEqual('light');
  });

  it('should return initial value dark mode', () => {
    localStorage.setItem('theme', 'dark');

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toStrictEqual('dark');
  });

  it('should toggleTheme change theme', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toStrictEqual('dark');

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toStrictEqual('light');
  });
  it('should theme in local storage', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.toggleTheme();
    });

    expect(localStorage.getItem('theme')).toStrictEqual('dark');

    act(() => {
      result.current.toggleTheme();
    });

    expect(localStorage.getItem('theme')).toStrictEqual('light');
  });

  it('should document has class dark', () => {
    const { result } = renderHook(() => useTheme());
    const docElement = document.documentElement;

    act(() => {
      result.current.toggleTheme();
    });

    expect(docElement).toHaveClass('dark');

    act(() => {
      result.current.toggleTheme();
    });

    expect(docElement).not.toHaveClass('dark');
  });
});
