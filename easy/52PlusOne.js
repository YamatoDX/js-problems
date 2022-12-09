// https://www.youtube.com/watch?v=Llk4N7ERILg&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=52&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/plus-one/description/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const current = digits.reduce(
        (prev, current) => prev.toString() + current.toString(),
        ""
    );
    const result = BigInt(current) + BigInt(1);
    const finalResult = result.toString().split("");
    return finalResult;
};
