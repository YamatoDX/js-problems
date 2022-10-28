// https://www.youtube.com/watch?v=vHam6riSavo&list=PLko32sysgiEP903b1Zvo9_qXJ1WvkW7-9&index=4&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const { reverseList } = require("./8reverseLL");
var isPalindrome = function (head) {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    fast = head;
    slow = reverseList(slow);

    while (slow) {
        if (slow.val !== fast.val) {
            return false;
        }
        slow = slow.next;
        fast = fast.next;
    }
    return true;
};
