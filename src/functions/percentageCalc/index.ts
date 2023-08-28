type PercentageCalc = (totalValue: number, partialValues: number[]) => string[];

const percentageCalc: PercentageCalc = (totalValue, partialValues) => {
  return partialValues.map((value) => ((value * 100) / totalValue).toFixed(1));
};

export { percentageCalc };
