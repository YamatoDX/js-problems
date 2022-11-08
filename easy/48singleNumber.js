// https://www.youtube.com/watch?v=m8QvwmfJwvA&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=48&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let mySet = new Set();
    for (let each of nums) {
        if (!mySet.has(each)) {
            mySet.add(each);
        } else {
            mySet.delete(each);
        }
    }
    return Array.from(mySet)[0];
};
