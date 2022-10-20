// https://www.youtube.com/watch?v=Wo7dbhMEw0o&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=5
// https://leetcode.com/problems/intersection-of-two-arrays/

const intersection1 = function (nums1, nums2) {
  return Array.from(new Set(nums1.filter((each) => nums2.includes(each))));
};

/**
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  let finalResult = [];
  let nums1_uniques = new Set(nums1);
  for (let each of nums2) {
    if (!finalResult.includes(each) && nums1_uniques.has(each)) {
      finalResult.push(each);
    }
  }
  return finalResult;
};
