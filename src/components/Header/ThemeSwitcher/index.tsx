import { useTheme } from './hook';

import { SunMedium, Moon } from 'lucide-react';

function ThemeSwitcher() {
  const { theme, handleTheme } = useTheme();

  return (
    <button className="group" onClick={() => handleTheme()}>
      {theme === 'light' && (
        <SunMedium className="h-7 w-7 stroke-light-blue fill-transparent transition-colors group-hover:fill-light-blue md:h-6 md:w-6 sm:w-5 sm:h-5" />
      )}
      {theme === 'dark' && <Moon />}
    </button>
  );
}

export { ThemeSwitcher };
