import { Loading } from './Loading';
import { useSearchMenu } from './hook';

import { ComponentProps } from 'react';

import './style.css';

type SearchMenuProps = {
  showMenu: boolean;
} & ComponentProps<'div'>;

function SearchMenu({ showMenu, ...props }: SearchMenuProps) {
  const { isError, isLoading, data } = useSearchMenu();

  return (
    <div
      {...props}
      className="hidden w-[588px] bg-medium-blue pb-2 mt-4 data-[show=true]:block"
      data-show={showMenu}
    >
      {isLoading && <Loading />}
      {isError && (
        <p className="w-fit mt-4 mx-auto text-lg font-medium text-dark-purple">
          Ocorreu um error, tente novamente mais tarde
        </p>
      )}
      {!isLoading && !isError && (
        <ul className="w-full max-h-[420px] overflow-y-auto pb-1 pr-1 scrollbar__ul">
          {data?.map((food) => (
            <li
              className="mt-4 pr-1 pl-11 py-2 max-w-full overflow-hidden text-ellipsis bg-transparent transition-colors hover:bg-cyan-50/30 cursor-pointer first:mt-0"
              key={food._id}
            >
              {food.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { SearchMenu };
