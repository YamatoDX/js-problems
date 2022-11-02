// https://leetcode.com/problems/two-sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let seen = {};
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        const remaining = target - value;
        if (seen[remaining] !== undefined) {
            return [seen[remaining], i];
        }
        seen[value] = i;
    }
    return [];
};
