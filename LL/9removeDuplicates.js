// https://www.youtube.com/watch?v=gfgJjrkR-W4&list=PLko32sysgiEP903b1Zvo9_qXJ1WvkW7-9&index=9&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head) return null;
    let current = head;
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
            continue;
        }
        current = current.next;
    }
    return head;
};
