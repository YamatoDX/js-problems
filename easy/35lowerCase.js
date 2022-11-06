// https://www.youtube.com/watch?v=6vkNjVREBZY&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=35&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/to-lower-case/
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    let finalResult = "";
    for (let each of s) {
        const code = each.charCodeAt(0);
        let newCharacter = each;
        if (code >= 65 && code <= 90) {
            // its a cap letter
            newCharacter = String.fromCharCode(code + 32);
        }
        finalResult += newCharacter;
    }
    return finalResult;
};

const _toLowerCae = s => s.toLowerCase();
