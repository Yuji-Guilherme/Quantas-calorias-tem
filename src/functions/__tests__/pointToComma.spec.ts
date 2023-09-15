import { pointToComma } from '@/functions/pointToComma';

const text1 = 'test1.test';
const text2 = 'test2.test';

describe('point to comma', () => {
  it('should fn working correct', () => {
    const textArray = [text1, text2];

    const resultArray = pointToComma(textArray);

    expect(resultArray).toStrictEqual(['test1,test', 'test2,test']);
  });
});
