// https://www.youtube.com/watch?v=umqL2CyEywM&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=41&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let mySet = new Set();
    for (let each of nums) {
        if (!mySet.has(each)) {
            mySet.add(each);
            continue;
        }
        return true;
    }
    return false;
};
