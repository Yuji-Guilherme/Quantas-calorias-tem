import { useSearchStore } from '@/store/search';

import { useRef, useState, useEffect } from 'react';

type UseInputProps = {
  addFirstFood: () => void;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuIsOpen: boolean;
};

const useInput = ({
  addFirstFood,
  setMenuIsOpen,
  menuIsOpen
}: UseInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [removeBtnIsOn, setRemoveBtnIsOn] = useState(false);

  const {
    state: { searchFood },
    actions: { setSearch }
  } = useSearchStore();

  useEffect(() => {
    if (searchFood === '') {
      inputRef.current!.value = '';
      setRemoveBtnIsOn(false);
    }
  }, [searchFood]);

  const inputFocus = () => {
    inputRef?.current?.focus();
  };

  const inputBlur = () => {
    inputRef?.current?.blur();
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
    setSearch('');
    setMenuIsOpen(false);
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSearch('');
    inputFocus();
  };

  const handleShowMenu = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setMenuIsOpen(!menuIsOpen);
  };

  return {
    inputRef,
    removeBtnIsOn,
    inputFocus,
    handleInputChange,
    handleSubmit,
    handleRemove,
    handleShowMenu
  };
};

export { useInput };
