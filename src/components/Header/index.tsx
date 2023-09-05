import { Logo } from './Logo';
import { ThemeSwitcher } from './ThemeSwitcher';

import { Github } from 'lucide-react';

function Header() {
  return (
    <header className="w-full h-16 fixed top-0 flex items-center justify-between px-24 bg-dark-purple z-20 md:h-14 tablet:px-16 sm:px-9 sm:h-12">
      <Logo />
      <div className="flex items-center gap-5">
        <ThemeSwitcher />
        <a
          className="group"
          href="https://github.com/Yuji-Guilherme/quantas-calorias"
        >
          <Github className="h-7 w-7 stroke-light-blue fill-transparent transition-colors group-hover:fill-light-blue md:h-6 md:w-6 sm:w-5 sm:h-5" />
        </a>
      </div>
    </header>
  );
}

export { Header };
