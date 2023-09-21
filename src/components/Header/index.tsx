import { Logo } from './Logo';
import { ThemeSwitcher } from './ThemeSwitcher';

import { Github } from 'lucide-react';

function Header() {
  return (
    <header className="w-full h-16 fixed top-0 flex items-center justify-between px-24 bg-dark-purple z-20 md:h-14 tablet:px-16 sm:px-9 sm:h-12">
      <Logo />
      <div className="flex items-center gap-5 sm:gap-4">
        <ThemeSwitcher />
        <a
          className="group"
          title="repositório do projeto"
          tabIndex={0}
          href="https://github.com/Yuji-Guilherme/Quantas-calorias-tem"
        >
          <Github role="github-logo" className="header_logo" />
        </a>
      </div>
    </header>
  );
}

export { Header };
