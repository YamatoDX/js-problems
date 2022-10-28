// https://leetcode.com/problems/intersection-of-two-linked-lists/
// https://www.youtube.com/watch?v=c7dOI-hDa2Q&list=PLko32sysgiEP903b1Zvo9_qXJ1WvkW7-9&index=5&ab_channel=TerribleWhiteboard

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;

    let [p1, p2] = [headA, headB];

    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;

        if (p1 === p2) return p1;

        if (p1 === null) {
            p1 = headB;
            continue;
        }

        if (p2 === null) {
            p2 = headA;
            continue;
        }
    }

    return p1;
};
