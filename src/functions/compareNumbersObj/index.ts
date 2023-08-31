export type ObjectWithColorNumber = {
  number: number;
  color?: string;
};

const compareNumbersObj = (colorNumberArr: ObjectWithColorNumber[]) =>
  colorNumberArr.sort(function (a, b) {
    if (a.number > b.number) {
      return 1;
    }
    if (a.number < b.number) {
      return -1;
    }
    return 0;
  });

export { compareNumbersObj };
