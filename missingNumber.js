// https://www.youtube.com/watch?v=4LrVhAxJUsA&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=6
// https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  const currentSum = nums.reduce((prev, current) => prev + current, 0);
  let totalSum = nums.length;
  for (let index = 0; index < nums.length; index++) {
    totalSum += index;
  }
  return totalSum - currentSum;
};
