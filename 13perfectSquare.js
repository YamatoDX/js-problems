// https://www.youtube.com/watch?v=-oqZCmhJ2Zs&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=13
// https://leetcode.com/problems/valid-perfect-square/submissions/827228423/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num === 1) return true;
  if (num < 1) return false;

  let left = 1;
  let right = num;

  let finalResult = false;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    const currentValue = mid * mid;
    if (currentValue === num) {
      finalResult = true;
      break;
    } else if (currentValue < num) {
      left = mid + 1;
      continue;
    } else if (currentValue > num) {
      right = mid - 1;
      continue;
    }
  }
  return finalResult;
};
