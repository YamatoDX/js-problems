// https://terriblewhiteboard.com/odd-even-linked-list-leetcode/
// https://leetcode.com/problems/odd-even-linked-list/

var oddEvenList = function (head) {
    if (!head) return null;

    let odd = head;
    let even = head.next;
    let evenHead = even;

    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;

        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;
    return head;
};
