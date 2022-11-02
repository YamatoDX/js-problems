// https://www.youtube.com/watch?v=hUOkKDqVlig&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=58&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const allStarters = ["(", "{", "["];
    const allValues = {
        "}": "{",
        ")": "(",
        "]": "["
    };
    let myStack = [];
    for (let each of s) {
        if (allStarters.includes(each)) {
            myStack.push(each);
            continue;
        }
        if (myStack.slice(-1)[0] === allValues[each] && myStack.length !== 0) {
            myStack.pop();
            continue;
        }
        return false;
    }
    return myStack.length === 0;
};
