import { verifyUnderFourOrOverNinety } from '@/functions/verifyUnderFourOrOverNinety';

const value1 = 1;
const value2 = 10;
const value3 = 100;
describe('verify under four or over ninety', () => {
  it('should fn working correct', () => {
    const valueArray = [value1, value2, value3];

    const resultArray = verifyUnderFourOrOverNinety(valueArray);

    expect(resultArray).toStrictEqual([4, 10, 90]);
  });
});
