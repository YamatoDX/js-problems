// https://www.youtube.com/watch?v=3XGaTq-bRiU&list=PLko32sysgiEP903b1Zvo9_qXJ1WvkW7-9&index=6&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/delete-node-in-a-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
