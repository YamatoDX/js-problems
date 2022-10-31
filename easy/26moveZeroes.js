// https://www.youtube.com/watch?v=0rPuILjoVsg&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=26&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/move-zeroes/submissions/833923290/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let anchor = 0;
    for (let explorer = 0; explorer < nums.length; explorer++) {
        const currentElementExplore = nums[explorer];
        if (currentElementExplore !== 0) {
            let temp = nums[anchor];
            nums[anchor] = nums[explorer];
            nums[explorer] = temp;
            anchor += 1;
        }
    }
};
