// https://www.youtube.com/watch?v=WKTgajDkVcA&list=PLko32sysgiEO7o5jjl-cTIXAvneIY3_U8&index=3&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * This uses sliding window technique
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let right = 0;
  var max = 0;

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      max = max > set.size ? max : set.size;
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }
  return max;
};

// const result = lengthOfLongestSubstring("aabbcccddabc");
// console.log("result is", result);
