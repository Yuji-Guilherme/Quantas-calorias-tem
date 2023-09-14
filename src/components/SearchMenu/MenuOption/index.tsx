import { Food } from '@/types';

import { ComponentProps, ForwardedRef, forwardRef } from 'react';

type MenuOptionProps = {
  food: Food;
} & ComponentProps<'input'>;

const MenuOption = forwardRef(function MenuOption(
  { food, ...props }: MenuOptionProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <li className="max-w-full relative rounded mt-4 mr-2 pr-1 pl-4 py-2 overflow-hidden text-ellipsis bg-transparent transition-colors hover:bg-medium-gray/10 dark:hover:bg-sky-100/5 cursor-pointer first:mt-0 focus-within:bg-medium-gray/10 dark:focus-within:bg-sky-100/5  focus-within:outline outline-medium-gray/30 dark:outline-sky-50/20 outline-1 md:py-1 sm:py-1 sm:pl-2">
      <input
        ref={ref}
        name="foods"
        value={food.description}
        type="radio"
        id={food.description}
        key={food._id}
        style={{
          all: 'unset',
          position: 'absolute',
          inset: 0
        }}
        {...props}
      ></input>
      <label
        role="label"
        key={food.number}
        htmlFor={food.description}
        className="cursor-pointer md:text-sm sm:text-sm dark:text-sky-100"
      >
        {food.description}
      </label>
      <br />
    </li>
  );
});

export { MenuOption };
