import { getLocalStorage, setLocalStorage } from '@/functions';

import { useState } from 'react';

type Theme = 'light' | 'dark';

const useTheme = () => {
  const initialValue = () => {
    if (getLocalStorage('theme') === 'dark') return 'dark';
    return 'light';
  };

  const [theme, setTheme] = useState<Theme>(initialValue());

  const handleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      setLocalStorage('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setLocalStorage('theme', 'light');
      setTheme('light');
    }
  };

  return {
    theme,
    handleTheme
  };
};

export { useTheme };
