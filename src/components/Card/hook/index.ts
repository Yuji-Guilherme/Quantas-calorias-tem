import { Food } from '@/types';
import {
  compareNumbersObj,
  percentageCalc,
  pointToComma,
  verifyUnderFourOrOverNinety
} from '@/functions';
import { useFoodStore } from '@/store/food';

import { useState } from 'react';

interface MacroInPercentObject {
  text: string;
  width: number;
}

type MacroPercentageObject = {
  carb: MacroInPercentObject;
  fat: MacroInPercentObject;
  protein: MacroInPercentObject;
};

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
  const [carbPercentWidth, fatPercentWidth, proteinPercentWidth] =
    verifyUnderFourOrOverNinety(macrosPercentInNumber);

  const [carbNumber, fatNumber, proteinNumber, fiberNumber, caloriesNumber] = [
    carbs,
    fat,
    protein,
    fiber,
    calories
  ].map((number) => parseFloat(((number * parseInt(grams)) / 100).toFixed(1)));

  const handleCalSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGrams(e.target.value);
  };

  const handleRemoveCard = () => {
    removeFood(_id!);
  };

  const macroNumbers = {
    carb: carbNumber,
    fat: fatNumber,
    protein: proteinNumber,
    fiber: fiberNumber,
    calories: caloriesNumber
  };

  const macroPercentages = {
    carb: { text: carbPercentText, width: carbPercentWidth },
    fat: { text: fatPercentText, width: fatPercentWidth },
    protein: { text: proteinPercentText, width: proteinPercentWidth }
  } as MacroPercentageObject;

  return {
    macroNumbers,
    macroPercentages,
    editGrams,
    setEditGrams,
    handleCalSubmit,
    handleRemoveCard
  };
};

const useCaloriesCircle = ({ carb, fat, protein }: MacroPercentageObject) => {
  const carbObj = { number: carb.width, color: '#0284c7' };
  const fatObj = { number: fat.width, color: '#eab308' };
  const proteinObj = { number: protein.width, color: '#9f1239' };

  const [carbValue, fatValue, proteinValue] = [
    carb.text,
    fat.text,
    protein.text
  ].map((value) => parseFloat(value));

  const [firstObj, secondObj, thirdObj] = compareNumbersObj([
    carbObj,
    fatObj,
    proteinObj
  ]);

  if (carbValue === 100 || fatValue === 100 || proteinValue === 100) {
    const circleSizeEmpty = {
      first: { ...firstObj, number: 0 },
      second: { ...secondObj, number: 0 },
      third: thirdObj
    };

    return { circleSizeEmpty };
  }

  const [firstPercentageIn62, secondPercentageIn62] = percentageCalc(
    100,
    [firstObj.number, secondObj.number],
    62
  );

  const firstSize = 124 - parseInt(firstPercentageIn62);
  const secondSize =
    123 - (parseInt(secondPercentageIn62) + parseInt(firstPercentageIn62));

  const circleSizesAndColors = {
    first: { ...firstObj, number: firstSize },
    second: { ...secondObj, number: secondSize },
    third: thirdObj
  };

  return { circleSizesAndColors };
};

export { useCard, useCaloriesCircle };
