const multiplyAndDivideBy100 = (numberArray: number[], dividend: number) =>
  numberArray.map((number) => ((number * dividend) / 100).toFixed(1));

export { multiplyAndDivideBy100 };
