// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// https://www.youtube.com/watch?v=seaGHJFWNPs&list=PLko32sysgiEOJGRm-vDeHonWrvEn-stMc&index=3&ab_channel=TerribleWhiteboard

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
var maxDepth = function (root) {
  let maxNodes = (node, sum) => {
    if (!node) {
      return sum;
    }
    return Math.max(
      maxNodes(node.left, sum + 1),
      maxNodes(node.right, sum + 1)
    );
  };

  return maxNodes(root, 0);
};
