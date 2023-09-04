import { Loading } from './Loading';
import { MenuOption } from './MenuOption';
import { useMenu } from './hook';
import { Food } from '@/types';

import { ComponentProps, useDeferredValue } from 'react';

import './style.css';

type SearchMenuProps = {
  data: Food[] | undefined;
  isLoading: boolean;
  isError: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuIsOpen: boolean;
  menuRef: React.RefObject<HTMLInputElement>;
  searchIsLoad: boolean;
} & ComponentProps<'div'>;

function SearchMenu({
  data,
  isLoading,
  isError,
  setMenuIsOpen,
  menuIsOpen,
  menuRef,
  searchIsLoad,
  ...props
}: SearchMenuProps) {
  const { handleItemClick } = useMenu({ setMenuIsOpen });
  const deferredData = useDeferredValue(data);

  return (
    <div
      {...props}
      className="hidden w-full absolute bg-medium-blue drop-shadow-md pt-4 pl-2 pr-3 pb-5 rounded-b-xl data-[show=true]:block sm:rounded-b-md sm:py-3"
      data-show={menuIsOpen}
    >
      {isLoading && <Loading withWord />}
      {isError && (
        <p className="w-fit mt-4 mx-auto text-lg font-medium text-dark-purple md:text-sm md:mt-2 sm:text-sm sm:mt-0">
          Ocorreu um error, tente novamente mais tarde
        </p>
      )}
      {searchIsLoad && <Loading />}
      {!isLoading && !isError && (
        <ul className="w-full h-auto max-h-[44vh] overflow-y-auto p-1 scrollbar__ul">
          {data?.length === 0 && (
            <p className="mt-4 pr-1 pl-4 py-2 max-w-full text-center md:text-sm md:mt-2 sm:text-sm sm:mt-0">
              nenhum alimento encontrado
            </p>
          )}
          {deferredData?.map((food, index) => (
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
