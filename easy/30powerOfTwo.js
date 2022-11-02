// https://www.youtube.com/watch?v=etyz_R6A2tE&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=30&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/power-of-two/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n === 1) return true;

    let current = 1;
    while (current < n) {
        current *= 2;
    }

    return current === n;
};
