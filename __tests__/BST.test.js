const { BST } = require("../BST/index");

test("Testing BST find, insert", () => {
  const myBST = new BST();
  const allInputs = [99, 11, 22, 33, 4, 55, 6, 100, 40, 75, 200];
  allInputs.forEach((eachElement) => myBST.insert(eachElement));
  expect(myBST.find(11)).toBe(true);
  expect(myBST.find(33)).toBe(true);
  expect(myBST.find(543)).toBe(false);
  expect(myBST.BFS()).toStrictEqual([
    99, 11, 100, 4, 22, 200, 6, 33, 55, 40, 75,
  ]);
  expect(myBST.DFSPreOrder()).toStrictEqual([
    99, 11, 4, 6, 22, 33, 55, 40, 75, 100, 200,
  ]);
  expect(myBST.DFSPreOrderIterative()).toStrictEqual([
    99, 11, 4, 6, 22, 33, 55, 40, 75, 100, 200,
  ]);
  expect(myBST.DFSInOrder()).toStrictEqual([
    4, 6, 11, 22, 33, 40, 55, 75, 99, 100, 200,
  ]);
  expect(myBST.DFSInOrderIterative()).toStrictEqual([
    4, 6, 11, 22, 33, 40, 55, 75, 99, 100, 200,
  ]);
  expect(myBST.DFSPostOrder()).toStrictEqual([
    6, 4, 40, 75, 55, 33, 22, 11, 200, 100, 99,
  ]);
  expect(myBST.DFSPostOrderIterative()).toStrictEqual([
    6, 4, 40, 75, 55, 33, 22, 11, 200, 100, 99,
  ]);
  expect(myBST.LevelOrderBottom()).toStrictEqual([
    [40, 75],
    [55],
    [6, 33],
    [4, 22, 200],
    [11, 100],
    [99],
  ]);
});
