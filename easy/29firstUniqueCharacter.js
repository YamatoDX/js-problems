// https://www.youtube.com/watch?v=21LDcomZ1as&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=29&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/first-unique-character-in-a-string/submissions/833402600/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let charMap = {};
    s.split("").forEach(each => {
        !charMap[each] ? (charMap[each] = 1) : (charMap[each] += 1);
    });
    for (let index = 0; index < s.length; index++) {
        const char = s[index];
        if (charMap[char] === 1) {
            return index;
        }
    }
    return -1;
};
