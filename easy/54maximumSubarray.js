// https://www.youtube.com/watch?v=gwUGDXO5gHU&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=54&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let current = nums[0];
    let global = nums[0];

    for (let each of nums.slice(1)) {
        current = Math.max(each, current + each);
        if (current > global) {
            global = current;
        }
    }
    return global;
};
