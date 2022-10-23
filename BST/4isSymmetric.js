// https://www.youtube.com/watch?v=3iIpnouY-bg&list=PLko32sysgiEOJGRm-vDeHonWrvEn-stMc&index=5&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/symmetric-tree/

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  function isMirror(tree1, tree2) {
    // it will handle two cases, where either of them are null or one of them is null
    if (!tree1 || !tree2) {
      return tree1 === tree2;
    }
    if (tree1.val !== tree2.val) {
      return false;
    }
    return (
      isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left)
    );
  }
  return isMirror(root.left, root.right);
};
