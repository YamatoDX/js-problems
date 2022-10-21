// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// https://www.youtube.com/watch?v=1ZuD-3OxXgo&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=44&ab_channel=TerribleWhiteboard

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let [p1, p2] = [0, numbers.length - 1];
  while (p1 <= p2) {
    let total = numbers[p1] + numbers[p2];
    if (total === target) {
      return [p1 + 1, p2 + 1];
    }
    total > target ? (p2 -= 1) : (p1 += 1);
  }
};
