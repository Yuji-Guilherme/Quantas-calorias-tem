const pointToComma = (textArr: string[]) =>
  textArr.map((text) => text.replace('.', ','));

export { pointToComma };
