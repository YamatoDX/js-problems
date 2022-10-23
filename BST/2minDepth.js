// https://leetcode.com/problems/minimum-depth-of-binary-tree/
// https://www.youtube.com/watch?v=z2LEbk5l_gg&list=PLko32sysgiEOJGRm-vDeHonWrvEn-stMc&index=3&ab_channel=TerribleWhiteboard

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/* Queue Starts*/
class _Queue {
  constructor() {
    this.elements = [];
    this.length = 0;
  }
  enqueue(val) {
    this.elements.unshift(val);
    this.length += 1;
    return true;
  }
  dequeue(val) {
    const dElement = this.elements.pop();
    this.length -= 1;
    return dElement;
  }
}
/* Queue Ends */
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  let depth = 0;
  let q = new _Queue();
  q.enqueue(root);
  while (q.length !== 0) {
    let nodeCount = q.length;
    while (nodeCount > 0) {
      const current = q.dequeue();
      if (!current.left && !current.right) {
        depth++;
        return depth;
      }
      if (current.left) q.enqueue(current.left);
      if (current.right) q.enqueue(current.right);
      nodeCount--;
    }
    depth++;
  }
  return depth;
};
