type PercentageCalc = (
  totalValue: number,
  partialValues: number[],
  baseMultiplier?: number
) => string[];

const percentageCalc: PercentageCalc = (
  totalValue,
  partialValues,
  baseMultiplier = 100
) => {
  return partialValues.map((value) =>
    ((value * baseMultiplier) / totalValue).toFixed(1)
  );
};

export { percentageCalc };
