import { useSearchStore } from '@/store/search';

import { useRef } from 'react';

const useInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    actions: { setSearch }
  } = useSearchStore();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!value.trim()) return;
    setSearch(value);
  };

  return {
    inputRef,
    handleClick,
    handleInputChange
  };
};

export { useInput };
