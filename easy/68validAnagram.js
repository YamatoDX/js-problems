// https://www.youtube.com/watch?v=FMkueJAQ2pE&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=68&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let [sMap, tMap] = [{}, {}];
    for (let each of s) {
        if (!t.includes(each)) return false;
        !sMap[each] ? (sMap[each] = 1) : (sMap[each] += 1);
    }
    for (let each of t) {
        if (!s.includes(each)) return false;
        !tMap[each] ? (tMap[each] = 1) : (tMap[each] += 1);
    }
    // making sure all of the characters of each map are same
    for (let eachT of t) {
        if (tMap[eachT] !== sMap[eachT]) return false;
    }

    return true;
};
