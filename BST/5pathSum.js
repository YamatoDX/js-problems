// https://leetcode.com/problems/path-sum/
// https://www.youtube.com/watch?v=UYiOUI19iHE&list=PLko32sysgiEOJGRm-vDeHonWrvEn-stMc&index=5&ab_channel=TerribleWhiteboard

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }

  if (sum === root.val && !root.left && !root.right) {
    return true;
  }

  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};
