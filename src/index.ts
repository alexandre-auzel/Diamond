const repeatCaracter = (caracter: string, repetition: number): Line => {
  return new Array(repetition).fill(caracter);
};

export const createTopDiamondLine = (row: number, n: number): Line => {
  const numberSpaces = (n - 1) / 2 - row;
  const numberStars = (row + 1) * 2 - 1;

  const stars = repeatCaracter("*", numberStars);
  const spaces = repeatCaracter(" ", numberSpaces);
  return spaces.concat(stars);
};

export const computeEquivalentTopLineIndex = (actualIndex: number, n: number): number => {
  const middleLineIndex = (n - 1) / 2;
  if (actualIndex <= middleLineIndex) {
    return actualIndex;
  }
  return n - 1 - actualIndex;
};

type Char = "*" | " ";

type Line = Char[];

type Diamond = Line[];
export const diamond = (n: number): Diamond => {
  const arrayIndex = [...new Array(n)];

  return arrayIndex.map((_, index) => {
    const topLineIndex = computeEquivalentTopLineIndex(index, n);
    return createTopDiamondLine(topLineIndex, n);
  });
};
