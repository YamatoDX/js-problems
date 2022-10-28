// https://www.youtube.com/watch?v=nVpgHAZdhQQ&list=PLko32sysgiEP903b1Zvo9_qXJ1WvkW7-9&index=10&ab_channel=TerribleWhiteboard.
// https://leetcode.com/problems/remove-linked-list-elements/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (!head) return null;

    let current = new ListNode(-1);
    current.next = head;
    head = current;

    while (current.next !== null) {
        if (current.next.val === val) {
            current.next = current.next.next;
            continue;
        }
        current = current.next;
    }
    return head.next;
};
