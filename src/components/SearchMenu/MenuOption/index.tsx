import { Food } from '@/types';

import { ComponentProps } from 'react';

type MenuOptionProps = {
  food: Food;
} & ComponentProps<'li'>;

function MenuOption({ food, ...props }: MenuOptionProps) {
  return (
    <li
      className="mt-4 pr-1 pl-4 py-2 max-w-full overflow-hidden text-ellipsis bg-transparent transition-colors hover:bg-cyan-50/30 cursor-pointer first:mt-0"
      key={food._id}
      {...props}
    >
      {food.description}
    </li>
  );
}

export { MenuOption };
