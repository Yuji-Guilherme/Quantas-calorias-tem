import { CaloriesCircle } from './CaloriesCircle';
import { Food } from '@/types';
import { useCard, useCaloriesCircle } from './hook';

import { X, Pen } from 'lucide-react';
import { ComponentProps } from 'react';
import { MacroPercentage } from './MacroPercentage';

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
    isGramsEdited,
    setIsGramsEdited,
    handleCalSubmit,
    handleRemoveCard
  } = useCard({ carbs, fat, protein, fiber, calories, _id });

  const { circleSizesAndColors, circleTwoSizeEmpty, circleOneSizeEmpty } =
    useCaloriesCircle({
      ...macroPercentages
    });

  return (
    <li
      {...props}
      className="w-full h-[200px] rounded-[40px] pt-5 px-7 mt-14 grid grid-cols-6 grid-rows-card bg-medium-blue dark:bg-dark-purple first:mt-0 md:pl-8 md-:h-44 tablet:h-auto tablet:relative tablet:pb-6 tablet:gap-y-8 tablet:grid-cols-3 tablet:grid-rows-card-tablet tablet:place-items-center tablet:rounded-[28px] sm:h-[430px] sm:relative sm:grid-cols-2 sm:grid-rows-card-sm sm:py-5 sm:px-6 sm:rounded-[32px] sm:gap-y-4 sm:mt-10 sm:place-items-center"
    >
      <p
        tabIndex={0}
        className="col-span-5 font-semibold text-xl text-ellipsis text-dark-purple overflow-hidden whitespace-nowrap dark:text-medium-blue md:text-lg tablet:col-span-3 tablet:justify-self-start tablet:max-w-[97%]  sm:text-base sm:col-span-2 sm:max-w-[92%] sm:pl-1 t sm:justify-self-start"
      >
        {description}
      </p>
      <button
        role="card-close-button"
        title="deletar alimento"
        onClick={handleRemoveCard}
        className="w-fit justify-self-end tablet:absolute tablet:top-4 tablet:right-5 sm:absolute sm:top-4 sm:right-4"
      >
        <X
          role="card-close-icon"
          className="stroke-dark-purple dark:stroke-medium-blue md:w-5 sm:w-5"
        />
      </button>
      <div
        role="card-edit-container"
        tabIndex={0}
        className="h-3/4 flex items-center justify-center gap-2 md:gap-1 sm:gap-[2px]"
      >
        <button
          role="card-edit-button"
          title="habilitar/desabilitar edição"
          onClick={() => setIsGramsEdited((prev) => !prev)}
        >
          <Pen
            role="card-edit-icon"
            data-active={isGramsEdited}
            className="w-[18px] fill-dark-purple stroke-dark-purple dark:stroke-medium-blue dark:fill-medium-blue transition-colors data-[active=true]:fill-transparent dark:data-[active=true]:fill-transparent md:w-4 sm:w-4"
          />
        </button>
        <div
          role="card-input-container"
          className="flex flex-col mt-4 ml-2 items-start md:ml-0 md-:mt-3 tablet:mt-0 sm:m-0"
        >
          <input
            type="number"
            min={1}
            max={1000}
            className="w-fit max-w-[100px] py-1 pl-2 rounded text-3xl font-semibold text-dark-purple font-number bg-medium-gray/10 dark:bg-medium-blue/5 outline-none border border-solid border-medium-gray/50 dark:border-light-blue/50 disabled:border-none disabled:bg-transparent dark:disabled:bg-transparent dark:text-medium-blue md:text-2xl md:w-20 sm:text-2xl sm:max-w-[80px]"
            value={grams}
            disabled={!isGramsEdited}
            onChange={handleCalSubmit}
            onBlur={() => setIsGramsEdited(false)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') setIsGramsEdited(false);
            }}
          />
          <p className="card_info_desc pl-2">
            grama{parseInt(grams) > 1 && 's'}
          </p>
        </div>
      </div>
      <MacroPercentage
        className="card_info ml-1"
        type="carb"
        macro={macroPercentages.carb}
        number={macroNumbers.carb}
      />
      <MacroPercentage
        className="card_info sm:ml-2"
        type="protein"
        macro={macroPercentages.protein}
        number={macroNumbers.protein}
      />
      <MacroPercentage
        className="card_info"
        type="fat"
        macro={macroPercentages.fat}
        number={macroNumbers.fat}
      />
      <div
        role="card-fiber-container"
        tabIndex={0}
        className="card_info mr-4 tablet:mr-0 sm:mr-0 sm:ml-2 sm:mb-4"
      >
        <p className="card_info_number">{macroNumbers.fiber}g</p>
        <p className="card_info_desc">fibra{macroNumbers.fiber > 1 && 's'}</p>
      </div>
      <div
        role="card-cal-container"
        tabIndex={0}
        className="card_info sm:row-start-2 sm:col-start-2 sm:mt-3 sm:ml-3"
      >
        <p
          role="card-cal-number"
          className="card_info_number z-1 max-w-[84px] sm:mb-[2px]"
        >
          {macroNumbers.calories}
        </p>
        <p className="card_info_desc z-1">cal</p>
        <span role="cal-circle-container" className="absolute z-0">
          <CaloriesCircle
            circleProps={
              circleTwoSizeEmpty || circleOneSizeEmpty || circleSizesAndColors
            }
          />
        </span>
      </div>
    </li>
  );
}

export { Card };
