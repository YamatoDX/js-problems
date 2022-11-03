// https://leetcode.com/problems/reverse-string/
// https://www.youtube.com/watch?v=uRk8ZIyMQkI&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=37&ab_channel=TerribleWhiteboard

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        let temp = s[end];
        s[end] = s[start];
        s[start] = temp;
        start++;
        end--;
    }
    return s;
};
