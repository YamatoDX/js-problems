// https://leetcode.com/problems/sqrtx/
// https://www.youtube.com/watch?v=VYtEKhxKd1Q&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=51&ab_channel=TerribleWhiteboard

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x;

    let left = 1;
    let right = x;

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        const currentValue = mid * mid;
        if (currentValue === x) {
            return mid;
        } else if (currentValue > x) {
            right = mid;
        } else if (currentValue < x) {
            left = mid + 1;
        }
    }
    return left - 1;
};
