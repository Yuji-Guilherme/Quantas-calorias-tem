type VerifyUnderFourOrOverNinety = (values: number[]) => number[];

const verifyUnderFourOrOverNinety: VerifyUnderFourOrOverNinety = (
  values: number[]
) =>
  values.map((value) => {
    if (value < 4) return 4;
    if (value > 90) return 90;
    return value;
  });

export { verifyUnderFourOrOverNinety };
