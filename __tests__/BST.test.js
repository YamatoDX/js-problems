const { BST } = require("../BST/index");

test("Testing BST find, insert", () => {
  const myBST = new BST();
  const allInputs = [99, 11, 22, 33, 4, 55, 6, 100, 40, 75];
  allInputs.forEach((eachElement) => myBST.insert(eachElement));
  expect(myBST.find(11)).toBe(true);
  expect(myBST.find(33)).toBe(true);
  expect(myBST.find(543)).toBe(false);
  expect(myBST.BFS()).toStrictEqual([99, 11, 100, 4, 22, 6, 33, 55, 40, 75]);
});
