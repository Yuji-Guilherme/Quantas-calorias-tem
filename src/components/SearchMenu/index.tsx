import { Loading } from './Loading';
import { MenuOption } from './MenuOption';
import { useMenu } from './hook';
import { Food } from '@/types';

import { ComponentProps } from 'react';

import './style.css';

type SearchMenuProps = {
  data: Food[] | undefined;
  isLoading: boolean;
  isError: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuIsOpen: boolean;
  menuRef: React.RefObject<HTMLInputElement>;
} & ComponentProps<'div'>;

function SearchMenu({
  data,
  isLoading,
  isError,
  setMenuIsOpen,
  menuIsOpen,
  menuRef,
  ...props
}: SearchMenuProps) {
  const { handleItemClick } = useMenu({ setMenuIsOpen });

  return (
    <div
      {...props}
      className="hidden w-full absolute bg-medium-blue drop-shadow-md pt-4 pl-2 pr-3 pb-5 rounded-b-xl data-[show=true]:block"
      data-show={menuIsOpen}
    >
      {isLoading && <Loading />}
      {isError && (
        <p className="w-fit mt-4 mx-auto text-lg font-medium text-dark-purple">
          Ocorreu um error, tente novamente mais tarde
        </p>
      )}
      {!isLoading && !isError && (
        <ul className="w-full max-h-[420px] overflow-y-auto p-1 scrollbar__ul">
          {data?.length === 0 && (
            <p className="mt-4 pr-1 pl-4 py-2 max-w-full text-center">
              nenhum alimento encontrado
            </p>
          )}
          {data?.map((food, index) => (
            <MenuOption
              ref={index === 0 ? menuRef : null}
              key={food._id}
              food={food}
              onClick={(e) => handleItemClick(food, e)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleItemClick(food);
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export { SearchMenu };
