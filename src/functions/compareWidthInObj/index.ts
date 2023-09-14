import { MacroInPercentObject } from '@/components/Card/types';

const compareWidthInObj = (macrosPercentArray: MacroInPercentObject[]) =>
  macrosPercentArray.sort(function (a, b) {
    if (a.width > b.width) {
      return 1;
    }
    if (a.width < b.width) {
      return -1;
    }
    return 0;
  });

export { compareWidthInObj };
