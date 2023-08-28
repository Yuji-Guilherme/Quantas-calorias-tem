import { Food } from '@/types';
import {
  multiplyTo100DivideByVar,
  percentageCalc,
  pointToComma,
  verifyUnderFourOrOverNinety
} from '@/functions';
import { useFoodStore } from '@/store/food';

import { useState } from 'react';

const useCard = ({
  carbs = 0,
  fat = 0,
  protein = 0,
  fiber = 0,
  calories = 0,
  _id
}: Partial<Food>) => {
  const [editGrams, setEditGrams] = useState<boolean>(false);
  const [grams, setGrams] = useState<string>('100');

  const {
    actions: { removeFood }
  } = useFoodStore();

  const total = carbs + fat + protein;

  const macrosPercent = percentageCalc(total, [carbs, fat, protein]);
  const [carbPercentText, fatPercentText, proteinPercentText] =
    pointToComma(macrosPercent);

  const macrosPercentInNumber = macrosPercent.map((value) => parseInt(value));
  const [carbPercentBar, fatPercentBar, proteinPercentBar] =
    verifyUnderFourOrOverNinety(macrosPercentInNumber);

  const gramsNumber = parseInt(grams);
  const [carbNumber, fatNumber, proteinNumber, fiberNumber, caloriesNumber] =
    multiplyTo100DivideByVar(
      [carbs, fat, protein, fiber, calories],
      gramsNumber
    );

  const handleCalSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditGrams(false);
    setGrams(e.target.value);
  };

  const handleRemoveCard = () => {
    removeFood(_id!);
  };

  return {
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
  };
};

export { useCard };
