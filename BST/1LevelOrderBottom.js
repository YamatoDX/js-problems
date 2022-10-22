// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
// https://www.youtube.com/watch?v=H2K0CGAjQDc&list=PLko32sysgiEOJGRm-vDeHonWrvEn-stMc&ab_channel=TerribleWhiteboard

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
 * @return {number[][]}
 */

const { Queue } = require("./index");
var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }
  let result = [];
  let q = new Queue();
  q.enqueue(root);
  while (q.length !== 0) {
    let nodeCount = q.length;
    let rowResult = [];
    while (nodeCount > 0) {
      let current = q.dequeue();
      if (current.left) q.enqueue(current.left);
      if (current.right) q.enqueue(current.right);
      rowResult.push(current.val);
      nodeCount--;
    }
    result.unshift(rowResult);
  }
  return result;
};
