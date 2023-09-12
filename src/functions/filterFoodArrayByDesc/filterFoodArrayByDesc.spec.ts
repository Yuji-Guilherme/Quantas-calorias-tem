import { filterFoodArrayByDesc } from '.';

const foodMock1 = {
  _id: '1',
  number: 1,
  description: 'test1',
  calories: 1,
  carbs: 1,
  protein: 1,
  fat: 1,
  fiber: 1
};

const foodMock2 = {
  _id: '2',
  number: 2,
  description: 'test2',
  calories: 2,
  carbs: 2,
  protein: 2,
  fat: 2,
  fiber: 2
};

describe('filter food array by desc', () => {
  it('should fn working correct', () => {
    const foodArray = [foodMock1, foodMock2];

    const result = filterFoodArrayByDesc(foodArray, foodMock1.description);

    expect(result).toContainEqual(foodMock1);
    expect(result).not.toContainEqual(foodMock2);
  });
});
