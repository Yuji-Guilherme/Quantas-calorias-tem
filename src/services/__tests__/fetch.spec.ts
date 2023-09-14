import { Food } from '@/types';
import { fetchFoods } from '@/services/fetch';

jest.mock('@/services/fetch');

const foodMock: Food[] = [
  {
    _id: '1',
    number: 10,
    description: 'test',
    calories: 1,
    carbs: 1,
    protein: 1,
    fat: 1,
    fiber: 1
  }
];

const mockRequest = (dataReturn: Food[]) => {
  return new Promise((resolve) => {
    resolve(dataReturn);
  });
};

describe('fetchFoods', () => {
  it('should return foods array', async () => {
    const fetchMock = fetchFoods as jest.MockedFn<() => Promise<unknown>>;

    fetchMock.mockImplementation(() => mockRequest(foodMock));

    const foods = await fetchFoods();

    expect(foods).toStrictEqual(foodMock);
  });
});
