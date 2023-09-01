import { Food } from '@/types';
import { useCard, useCaloriesCircle } from './hook';
import { CaloriesCircle } from './CaloriesCircle';

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
    macroNumbers,
    macroPercentages,
    grams,
    editGrams,
    setEditGrams,
    handleCalSubmit,
    handleRemoveCard
  } = useCard({ carbs, fat, protein, fiber, calories, _id });

  const { circleSizesAndColors, circleSizeEmpty } = useCaloriesCircle({
    ...macroPercentages
  });

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
            min={1}
            max={1000}
            className="w-fit max-w-[100px] py-1 pl-2 rounded text-3xl font-semibold text-dark-purple font-number bg-medium-gray/10 outline-none border border-solid border-medium-gray/50 disabled:border-none disabled:bg-transparent"
            value={grams}
            disabled={!editGrams}
            onChange={handleCalSubmit}
            onBlur={() => setEditGrams(false)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') setEditGrams(false);
            }}
          />
          <p className="card_info_desc pl-2">gramas</p>
        </div>
      </div>
      <div className="card_info ml-1">
        <p className="card_info_number">{macroNumbers.carb}g</p>
        <p className="card_info_desc">
          carboidrato{macroNumbers.carb > 1 && 's'}
        </p>
        <div className="flex items-center gap-1 mt-1">
          <span
            className={'h-1 bg-sky-600 rounded'}
            style={{ width: macroPercentages.carb.width }}
          />
          <p className="text-sky-600 font-number text-sm">
            {macroPercentages.carb.text}%
          </p>
        </div>
      </div>
      <div className="card_info">
        <p className="card_info_number">{macroNumbers.protein}g</p>
        <p className="card_info_desc">
          proteína{macroNumbers.protein > 1 && 's'}
        </p>
        <div className="flex items-center gap-1 mt-1">
          <span
            className={'h-1 bg-rose-800 rounded'}
            style={{ width: macroPercentages.protein.width }}
          />
          <p className="text-rose-800 font-number text-sm">
            {macroPercentages.protein.text}%
          </p>
        </div>
      </div>
      <div className="card_info">
        <p className="card_info_number">{macroNumbers.fat}g</p>
        <p className="card_info_desc">gordura{macroNumbers.fat > 1 && 's'}</p>
        <div className="flex items-center gap-1 mt-1">
          <span
            className={'h-1 bg-yellow-500 rounded'}
            style={{ width: macroPercentages.fat.width }}
          />
          <p className="text-yellow-600 font-number text-sm">
            {macroPercentages.fat.text}%
          </p>
        </div>
      </div>
      <div className="card_info">
        <p className="card_info_number">{macroNumbers.fiber}g</p>
        <p className="card_info_desc">fibra{macroNumbers.fiber > 1 && 's'}</p>
      </div>
      <div className="card_info">
        <p className="card_info_number z-1 max-w-[84px]">
          {macroNumbers.calories}
        </p>
        <p className="card_info_desc z-1">cal</p>
        <span className="absolute z-0">
          <CaloriesCircle
            circleProps={circleSizeEmpty || circleSizesAndColors}
          />
        </span>
      </div>
    </li>
  );
}

export { Card };
