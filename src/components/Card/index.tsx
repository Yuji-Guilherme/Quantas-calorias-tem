import { Food } from '@/types';
import { useCard } from './hook';

import { X, Pen } from 'lucide-react';
import { ComponentProps } from 'react';

type CardProps = Food & ComponentProps<'li'>;

function Card({
  description,
  calories,
  carbs,
  fat,
  fiber,
  protein,
  _id,
  ...props
}: CardProps) {
  const {
    carbNumber,
    fatNumber,
    proteinNumber,
    fiberNumber,
    caloriesNumber,
    carbPercentText,
    proteinPercentText,
    fatPercentText,
    carbPercentBar,
    proteinPercentBar,
    fatPercentBar,
    editGrams,
    setEditGrams,
    handleCalSubmit,
    handleRemoveCard
  } = useCard({ carbs, fat, protein, fiber, calories, _id });
  return (
    <li
      {...props}
      className="w-ull h-[200px] rounded-[40px] pt-5 px-7 mt-14 grid grid-cols-6 grid-rows-card bg-medium-blue first:mt-0"
    >
      <p className="col-span-5 font-semibold text-xl text-ellipsis text-dark-purple overflow-hidden whitespace-nowrap">
        {description}
      </p>
      <button onClick={handleRemoveCard} className="w-fit justify-self-end">
        <X />
      </button>
      <div className="h-3/4 flex items-center justify-center gap-2">
        <button onClick={() => setEditGrams(!editGrams)}>
          <Pen
            data-active={editGrams}
            className="w-[18px] fill-dark-purple stroke-dark-purple transition-colors data-[active=true]:fill-transparent"
          />
        </button>
        <div className="flex flex-col mt-4 ml-2 items-start">
          <input
            type="number"
            min={'1'}
            max={'1000'}
            className="w-fit max-w-[100px] py-1 pl-2 rounded text-3xl font-semibold text-dark-purple font-number bg-transparent outline-none border border-solid border-medium-gray/50 disabled:border-none"
            defaultValue={100}
            disabled={!editGrams}
            onBlur={handleCalSubmit}
          />
          <p className="card_info_desc pl-2">gramas</p>
        </div>
      </div>
      <div className="card_info ml-1">
        <p className="card_info_number">{carbNumber}g</p>
        <p className="card_info_desc">carboidrato</p>
        <div className="flex items-center gap-1 mt-1">
          <span
            className={'h-1 bg-sky-600 rounded'}
            style={{ width: carbPercentBar }}
          />
          <p className="text-sky-600 font-number text-sm">{carbPercentText}%</p>
        </div>
      </div>
      <div className="card_info">
        <p className="card_info_number">{proteinNumber}g</p>
        <p className="card_info_desc">proteina</p>
        <div className="flex items-center gap-1 mt-1">
          <span
            className={'h-1 bg-rose-800 rounded'}
            style={{ width: proteinPercentBar }}
          />
          <p className="text-rose-800 font-number text-sm">
            {proteinPercentText}%
          </p>
        </div>
      </div>
      <div className="card_info">
        <p className="card_info_number">{fatNumber}g</p>
        <p className="card_info_desc">gordura</p>
        <div className="flex items-center gap-1 mt-1">
          <span
            className={'h-1 bg-yellow-500 rounded'}
            style={{ width: fatPercentBar }}
          />
          <p className="text-yellow-600 font-number text-sm">
            {fatPercentText}%
          </p>
        </div>
      </div>
      <div className="card_info">
        <p className="card_info_number">{fiberNumber}g</p>
        <p className="card_info_desc">fibra</p>
      </div>
      <div className="card_info">
        <p className="card_info_number">{caloriesNumber}</p>
        <p className="card_info_desc">cal</p>
      </div>
    </li>
  );
}

export { Card };
