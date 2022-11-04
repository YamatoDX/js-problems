// https://www.youtube.com/watch?v=gnwFjlUXN1o&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=60&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/palindrome-number/

/** This solution is by converting the number to a string
 * @param {number} x
 * @return {boolean}
 */
var _isPalindrome = function (x) {
    if (x < 0) return false;
    let current = x.toString();
    let left = 0;
    let right = current.length - 1;
    while (left < right) {
        if (current[left] !== current[right]) return false;
        left++;
        right--;
    }
    return true;
};

// this solution doesn't use string methods
const isPalindrome = x => {
    if (x < 0) return false;
    let reversed = 0;
    let current = x;
    while (current > 0) {
        reversed = reversed * 10 + (current % 10);
        current = Math.floor(current / 10);
    }
    return reversed === x;
};
