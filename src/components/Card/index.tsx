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
      className="w-full h-[200px] rounded-[40px] pt-5 px-7 mt-14 grid grid-cols-6 grid-rows-card bg-medium-blue first:mt-0 md:pl-8 md:h-44 sm:h-[430px] sm:relative sm:grid-cols-2 sm:grid-rows-card-sm sm:py-5 sm:px-6 sm:rounded-[32px] sm:gap-y-4 sm:mt-10 sm:place-items-center"
    >
      <p className="col-span-5 font-semibold text-xl text-ellipsis text-dark-purple overflow-hidden whitespace-nowrap md:text-lg sm:text-base sm:col-span-2 sm:max-w-[92%] sm:pl-1 sm:justify-self-start">
        {description}
      </p>
      <button
        onClick={handleRemoveCard}
        className="w-fit justify-self-end sm:absolute sm:top-4 sm:right-4"
      >
        <X className="md:w-5 sm:w-5" />
      </button>
      <div className="h-3/4 flex items-center justify-center gap-2 md:gap-1 sm:gap-[2px]s">
        <button onClick={() => setEditGrams(!editGrams)}>
          <Pen
            data-active={editGrams}
            className="w-[18px] fill-dark-purple stroke-dark-purple transition-colors data-[active=true]:fill-transparent md:w-4 sm:w-4"
          />
        </button>
        <div className="flex flex-col mt-4 ml-2 items-start md:ml-0 md:mt-3 sm:m-0">
          <input
            type="number"
            min={1}
            max={1000}
            className="w-fit max-w-[100px] py-1 pl-2 rounded text-3xl font-semibold text-dark-purple font-number bg-medium-gray/10 outline-none border border-solid border-medium-gray/50 disabled:border-none disabled:bg-transparent md:text-2xl md:w-20 sm:text-2xl sm:max-w-[80px]"
            value={grams}
            disabled={!editGrams}
            onChange={handleCalSubmit}
            onBlur={() => setEditGrams(false)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') setEditGrams(false);
            }}
          />
          <p className="card_info_desc pl-2">
            grama{parseInt(grams) > 1 && 's'}
          </p>
        </div>
      </div>
      <div className="card_info ml-1">
        <p className="card_info_number">{macroNumbers.carb}g</p>
        <p className="card_info_desc">
          carboidrato{macroNumbers.carb > 1 && 's'}
        </p>
        <div className="flex items-center gap-1 mt-1">
          <span
            className="card_percentage bg-sky-600"
            style={{ width: macroPercentages.carb.width }}
          />
          <p className="text-sky-600 card_percentage_text">
            {macroPercentages.carb.text}%
          </p>
        </div>
      </div>
      <div className="card_info sm:ml-2">
        <p className="card_info_number">{macroNumbers.protein}g</p>
        <p className="card_info_desc">
          proteína{macroNumbers.protein > 1 && 's'}
        </p>
        <div className="flex items-center gap-1 mt-1">
          <span
            className="card_percentage bg-rose-800"
            style={{ width: macroPercentages.protein.width }}
          />
          <p className="text-rose-800 card_percentage_text">
            {macroPercentages.protein.text}%
          </p>
        </div>
      </div>
      <div className="card_info">
        <p className="card_info_number">{macroNumbers.fat}g</p>
        <p className="card_info_desc">gordura{macroNumbers.fat > 1 && 's'}</p>
        <div className="flex items-center gap-1 mt-1">
          <span
            className="card_percentage bg-yellow-500"
            style={{ width: macroPercentages.fat.width }}
          />
          <p className="text-yellow-600 card_percentage_text">
            {macroPercentages.fat.text}%
          </p>
        </div>
      </div>
      <div className="card_info sm:ml-2 sm:mb-4">
        <p className="card_info_number">{macroNumbers.fiber}g</p>
        <p className="card_info_desc">fibra{macroNumbers.fiber > 1 && 's'}</p>
      </div>
      <div className="card_info sm:row-start-2 sm:col-start-2 sm:mt-3 sm:ml-3">
        <p className="card_info_number z-1 max-w-[84px] sm:mb-[2px]">
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
