// https://www.youtube.com/watch?v=CTBEcmzLAuA&t=375s
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

/**
 * if nums.length === 10, the range of numbers going to be [1,10]
 * @param {number[]} nums
 * @return {number[]} the numbers that were missing in the [1,n] range, n === nums.length
 */
var findDisappearedNumbers = function (nums) {
  for (let index = 0; index < nums.length; index++) {
    let calculatedIndex = Math.abs(nums[index]) - 1;
    nums[calculatedIndex] = Math.abs(nums[calculatedIndex]) * -1;
  }
  let finalResult = [];
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] > 0) {
      finalResult.push(index + 1);
    }
  }
  return finalResult;
};

let testOne = [4, 3, 2, 7, 8, 2, 3, 1];
const result = findDisappearedNumbers(testOne);
console.log("result is", result);
