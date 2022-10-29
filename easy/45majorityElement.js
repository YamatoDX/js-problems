// https://leetcode.com/problems/majority-element/
// https://www.youtube.com/watch?v=q-xu9rbfrq4&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=45&ab_channel=TerribleWhiteboard

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const half = nums.length / 2;
    let charMap = {};
    for (let each of nums) {
        !charMap[each] ? (charMap[each] = 1) : (charMap[each] += 1);
        if (charMap[each] > half) return each;
    }
    return -1;
};
