import { ReactNode } from 'react';

type HeaderProps = {
  children: ReactNode;
};

function Header({ children }: HeaderProps) {
  return (
    <header className="w-full h-16 fixed top-0 flex items-center px-24 bg-dark-purple">
      {children}
    </header>
  );
}

export { Header };
