const multiplyTo100DivideByVar = (numberArray: number[], dividend: number) =>
  numberArray.map((number) => ((number * 100) / dividend).toFixed(1));

export { multiplyTo100DivideByVar };
