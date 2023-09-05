import { getLocalStorage, setLocalStorage } from '@/functions';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const useTheme = () => {
  const initialValue = () => {
    if (getLocalStorage('theme') === 'dark') return 'dark';
    return 'light';
  };

  const [theme, setTheme] = useState<Theme>(initialValue());

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      setLocalStorage('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      setLocalStorage('theme', 'dark');
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return {
    theme,
    handleTheme
  };
};

export { useTheme };
