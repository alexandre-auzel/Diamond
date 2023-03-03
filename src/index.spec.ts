import { computeEquivalentTopLineIndex, createTopDiamondLine, diamond } from ".";

describe("Create line", () => {
  test("line", () => {
    // GIVEN
    const row = 0;
    const n = 1;
    // WHEN
    const actual = createTopDiamondLine(row, n);

    // THEN
    expect(actual).toEqual(["*"]);
  });

  test("line", () => {
    // GIVEN
    const row = 1;
    const n = 3;
    // WHEN
    const actual = createTopDiamondLine(row, n);

    // THEN
    expect(actual).toEqual(["*", "*", "*"]);
  });

  test("[TRIANGULATION] line", () => {
    // GIVEN
    const row = 2;
    const n = 5;
    // WHEN
    const actual = createTopDiamondLine(row, n);

    // THEN
    expect(actual).toEqual(["*", "*", "*", "*", "*"]);
  });

  test("line", () => {
    // GIVEN
    const row = 0;
    const n = 3;
    // WHEN
    const actual = createTopDiamondLine(row, n);

    // THEN
    expect(actual).toEqual([" ", "*"]);
  });
});

describe("computeEquivalentTopLineIndex", () => {
  test("", () => {
    // GIVEN
    const actualIndex = 0;
    const n = 3;
    // WHEN
    const actual = computeEquivalentTopLineIndex(actualIndex, n);

    // THEN
    expect(actual).toEqual(0);
  });

  test("[TRIANGULATION]", () => {
    // GIVEN
    const actualIndex = 1;
    const n = 3;
    // WHEN
    const actual = computeEquivalentTopLineIndex(actualIndex, n);

    // THEN
    expect(actual).toEqual(1);
  });

  test("", () => {
    // GIVEN
    const actualIndex = 2;
    const n = 3;
    // WHEN
    const actual = computeEquivalentTopLineIndex(actualIndex, n);

    // THEN
    expect(actual).toEqual(0);
  });

  test("[TRIANGULATION]", () => {
    // GIVEN
    const actualIndex = 3;
    const n = 5;
    // WHEN
    const actual = computeEquivalentTopLineIndex(actualIndex, n);

    // THEN
    expect(actual).toEqual(1);
  });

  test("Diamond", () => {
    // GIVEN
    const n = 1;
    // WHEN
    const actual = diamond(n);

    // THEN
    expect(actual).toEqual([["*"]]);
  });

  test("Diamond", () => {
    // GIVEN
    const n = 3;
    // WHEN
    const actual = diamond(n);

    // THEN
    expect(actual).toEqual([
      [" ", "*"],
      ["*", "*", "*"],
      [" ", "*"],
    ]);
  });

  test("CONTROLE Diamond", () => {
    // GIVEN
    const n = 5;
    // WHEN
    const actual = diamond(n);

    // THEN
    expect(actual).toEqual([
      [" ", " ", "*"],
      [" ", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      [" ", "*", "*", "*"],
      [" ", " ", "*"],
    ]);
  });
});
