// https://www.youtube.com/watch?v=ab-TB2_gsac&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/find-the-town-judge/

// https://www.youtube.com/watch?v=ab-TB2_gsac&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/find-the-town-judge/

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    // Using graph adjacency list here
    let adList = {};
    for (let i = 1; i <= n; i++) {
        adList[i.toString()] = [];
    }
    for (let each of trust) {
        const [start, end] = each;
        adList[start.toString()].push(end.toString());
    }

    let trustNoOne = Object.keys(adList).filter(
        each => adList[each.toString()].length === 0
    );
    if (trustNoOne.length === 0) return -1;

    const person = trustNoOne[0];
    delete adList[person.toString()];
    for (let each in adList) {
        if (!adList[each.toString()].includes(person.toString())) {
            return -1;
        }
    }
    return person;
};
