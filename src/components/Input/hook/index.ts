import { useSearchStore } from '@/store/search';

import { useRef, useState, useEffect } from 'react';

type UseInputProps = {
  addFirstFood: () => void;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  transitionFn: React.TransitionStartFunction;
};

const useInput = ({
  addFirstFood,
  setOpenMenu,
  transitionFn
}: UseInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [removeBtnIsOn, setRemoveBtnIsOn] = useState(false);

  const {
    state: { searchFood },
    actions: { setSearchFood, clearSearch }
  } = useSearchStore();

  useEffect(() => {
    if (searchFood === '') {
      inputRef.current?.value ? (inputRef.current.value = '') : null;
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
      clearSearch();
      setRemoveBtnIsOn(false);
      return;
    }
    setRemoveBtnIsOn(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    verifyInputEmpty(value);
    if (!value.trim()) return;
    transitionFn(() => {
      setSearchFood(value);
    });
  };

  const handleSubmitFood = (
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e?.preventDefault();
    if (inputRef?.current?.value.trim() === '') return;
    inputBlur();
    addFirstFood();
    clearSearch();
    setOpenMenu(false);
  };

  const handleClearInput = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    clearSearch();
    inputFocus();
  };

  const toggleShowMenu = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setOpenMenu((prev) => !prev);
  };

  return {
    inputRef,
    removeBtnIsOn,
    inputFocus,
    handleInputChange,
    handleSubmitFood,
    handleClearInput,
    toggleShowMenu
  };
};

export { useInput };
