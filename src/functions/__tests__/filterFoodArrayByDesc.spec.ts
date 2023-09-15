import { filterFoodArrayByDesc } from '@/functions/filterFoodArrayByDesc';

const food1 = {
  _id: '1',
  number: 10,
  description: 'test1',
  calories: 1,
  carbs: 1,
  protein: 1,
  fat: 1,
  fiber: 1
};

const food2 = {
  _id: '2',
  number: 20,
  description: 'test2',
  calories: 2,
  carbs: 2,
  protein: 2,
  fat: 2,
  fiber: 2
};

describe('filter food array by desc', () => {
  it('should fn working correct', () => {
    const foodArray = [food1, food2];

    const result = filterFoodArrayByDesc(foodArray, food1.description);

    expect(result).toContainEqual(food1);
    expect(result).not.toContainEqual(food2);
  });
});
