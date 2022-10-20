// https://leetcode.com/problems/factorial-trailing-zeroes/submissions/826902389/
// https://www.youtube.com/watch?v=3Hdmv_Ym8PI&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=9

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let total = 0;
  while (n >= 5) {
    let current = Math.floor(n / 5);
    total += current;
    n = current;
  }
  return total;
};
