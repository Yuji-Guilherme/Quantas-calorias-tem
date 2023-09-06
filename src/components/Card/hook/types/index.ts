export interface MacroInPercentObject {
  text: string;
  width: number;
  color: string;
}

export type MacroPercentageObject = {
  carb: MacroInPercentObject;
  fat: MacroInPercentObject;
  protein: MacroInPercentObject;
};
