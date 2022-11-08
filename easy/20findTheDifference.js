// https://www.youtube.com/watch?v=oFZLJ5Y5E48&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=20&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/find-the-difference/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let sMap = {};
    for (let each of s) {
        !sMap[each] ? (sMap[each] = 1) : (sMap[each] += 1);
    }
    for (let each of t) {
        if (!sMap[each]) return each;
        if (sMap[each]) {
            sMap[each] -= 1;
        }
    }
    return "";
};
