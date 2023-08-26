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
} & ComponentProps<'div'>;

function SearchMenu({ data, isLoading, isError, ...props }: SearchMenuProps) {
  const { menuIsOpen, handleItemClick } = useMenu();

  return (
    <div
      {...props}
      className="hidden w-[588px] bg-medium-blue pb-2 mt-4 mx-auto data-[show=true]:block"
      data-show={menuIsOpen}
    >
      {isLoading && <Loading />}
      {isError && (
        <p className="w-fit mt-4 mx-auto text-lg font-medium text-dark-purple">
          Ocorreu um error, tente novamente mais tarde
        </p>
      )}
      {!isLoading && !isError && (
        <ul className="w-full max-h-[420px] overflow-y-auto pb-1 pr-1 scrollbar__ul">
          {data?.length === 0 && (
            <li className="mt-4 pr-1 pl-4 py-2 max-w-full text-center">
              nenhum alimento encontrado
            </li>
          )}
          {data?.map((food) => (
            <MenuOption
              key={food._id}
              food={food}
              onClick={() => handleItemClick(food)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export { SearchMenu };
