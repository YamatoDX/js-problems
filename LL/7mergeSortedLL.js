// https://www.youtube.com/watch?v=orCMI6WjoIw&list=PLko32sysgiEP903b1Zvo9_qXJ1WvkW7-9&index=7&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(-1);
    let head = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            dummy.next = list1;
            list1 = list1.next;
        } else {
            dummy.next = list2;
            list2 = list2.next;
        }
        dummy = dummy.next;
    }

    if (list1 !== null) {
        dummy.next = list1;
    } else {
        dummy.next = list2;
    }

    return head.next;
};
