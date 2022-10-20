const { findDisappearedNumbers } = require("../disappearedNumbers");

test("Testing a sample case", () => {
  let testOneInput = [4, 3, 4, 2, 7, 8, 2, 3];
  const result = findDisappearedNumbers(testOneInput);
  expect(result).toStrictEqual([1, 5, 6]);
});
