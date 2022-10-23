// https://leetcode.com/problems/same-tree/
// https://www.youtube.com/watch?v=G9wwY-cmuiE&list=PLko32sysgiEOJGRm-vDeHonWrvEn-stMc&index=6&ab_channel=TerribleWhiteboard

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p || !q) return p === q;

  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
