// https://www.youtube.com/watch?v=8XW9av_8Yqc&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=53&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    return s
        .trim()
        .split(" ")
        .filter(each => each !== "")
        .slice(-1)[0].length;
};
