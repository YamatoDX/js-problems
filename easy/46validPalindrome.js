// https://www.youtube.com/watch?v=3jjptAxlivQ&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=46&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let clear = "";
    for (let each of s) {
        const code = each.charCodeAt(0);
        const isNumber = code >= 48 && code <= 57;
        const isSmall = code >= 97 && code <= 122;
        const isCap = code >= 65 && code <= 90;
        if (isNumber || isSmall || isCap) {
            clear += each.toLowerCase();
        }
    }
    console.log("clear is", clear);
    let left = 0;
    let right = clear.length - 1;
    while (left < right) {
        if (clear[left] !== clear[right]) return false;
        left++;
        right--;
    }
    return true;
};
