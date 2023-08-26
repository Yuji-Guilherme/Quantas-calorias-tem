import { useSearchStore } from '@/store/search';
import { useShowMenuStore } from '@/store/showMenu';

import { useRef, useState } from 'react';

type UseInputProps = {
  addFirstFood: () => void;
};

const useInput = ({ addFirstFood }: UseInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [removeBtnIsOn, setRemoveBtnIsOn] = useState(false);

  const {
    actions: { setSearch }
  } = useSearchStore();

  const {
    state: { menuIsOpen },
    actions: { setShowMenu }
  } = useShowMenuStore();

  const inputFocus = () => {
    inputRef?.current?.focus();
  };

  const inputBlur = () => {
    inputRef?.current?.blur();
  };

  const inputClear = () => {
    inputRef.current!.value = '';
    setSearch('');
  };

  const verifyInputEmpty = (value: string) => {
    if (!value) {
      setSearch('');
      setRemoveBtnIsOn(false);
      return;
    }
    setRemoveBtnIsOn(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    verifyInputEmpty(value);
    if (!value.trim()) return;
    setSearch(value);
  };

  const handleSubmit = (
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e?.preventDefault();
    if (inputRef?.current?.value.trim() === '') return;
    inputBlur();
    addFirstFood();
    inputClear();
    setShowMenu(false);
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    inputClear();
    inputFocus();
    setRemoveBtnIsOn(false);
  };

  const handleShowMenu = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowMenu(!menuIsOpen);
  };

  return {
    inputRef,
    removeBtnIsOn,
    menuIsOpen,
    inputFocus,
    handleInputChange,
    handleSubmit,
    handleRemove,
    handleShowMenu
  };
};

export { useInput };
