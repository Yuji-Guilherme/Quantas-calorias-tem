import { percentageCalc } from '@/functions/percentageCalc';

const value1 = 20;
const value2 = 30;

const baseMultiplier = 60;

describe('percentage calculator', () => {
  it('should fn working correct with default base multiplier', () => {
    const totalValue = value1 + value2;
    const partialValues = [value1, value2];

    const resultArray = percentageCalc(totalValue, partialValues);

    expect(resultArray).toStrictEqual(['40.0', '60.0']);
  });

  it('should fn working correct with custom base multiplier', () => {
    const totalValue = value1 + value2;
    const partialValues = [value1, value2];

    const resultArray = percentageCalc(
      totalValue,
      partialValues,
      baseMultiplier
    );

    expect(resultArray).toStrictEqual(['24.0', '36.0']);
  });
});
