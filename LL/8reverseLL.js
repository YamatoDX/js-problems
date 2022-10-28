// https://www.youtube.com/watch?v=jXArj8RBq0Q&list=PLko32sysgiEP903b1Zvo9_qXJ1WvkW7-9&index=9&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/reverse-linked-list/submissions/831756898/

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
var reverseList = function (head) {
    if (!head) return null;

    let prevNode = null;

    while (head !== null) {
        let nextNode = head.next;
        head.next = prevNode;
        prevNode = head;
        head = nextNode;
    }
    return prevNode;
};

module.exports = {
    reverseList
};
