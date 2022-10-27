// https://www.youtube.com/watch?v=sMqEwkpvJvQ&list=PLko32sysgiEP903b1Zvo9_qXJ1WvkW7-9&index=3&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/linked-list-cycle/

var hasCycle = function (head) {
    let fastPointer = head;
    let slowPointer = head;

    while (fastPointer && fastPointer.next) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;

        if (fastPointer === slowPointer) {
            return true;
        }
    }
    return false;
};
