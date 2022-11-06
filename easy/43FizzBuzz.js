// https://www.youtube.com/watch?v=LyZvPH5E8FU&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=34&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/fizz-buzz/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let finalResult = [];
    for (let index = 1; index <= n; index++) {
        const isThree = index % 3 === 0;
        const isFive = index % 5 === 0;
        if (isThree && isFive) {
            finalResult.push("FizzBuzz");
            continue;
        }
        if (isThree) {
            finalResult.push("Fizz");
            continue;
        }
        if (isFive) {
            finalResult.push("Buzz");
            continue;
        }
        finalResult.push(index.toString());
    }
    return finalResult;
};
