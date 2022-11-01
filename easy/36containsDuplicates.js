// https://www.youtube.com/watch?v=Fmmzy5Jg-Mw&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=36&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/contains-duplicate-ii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
let containsNearbyDuplicate = function (nums, k) {
    // usage of Map is more performant
    let numsMap = new Map();
    for (let index = 0; index < nums.length; index++) {
        const current = nums[index];
        if (numsMap.has(current) && index - numsMap.get(current) <= k) {
            return true;
        } else {
            numsMap.set(current, index);
        }
    }
    return false;

    // let numsMap = {}
    // for(let index = 0; index < nums.length; index++){
    //     let current = nums[index];
    //     if(numsMap[current] !== null){
    //         const difference = index - numsMap[current];
    //         if(difference <= k){
    //             return true
    //         }else{
    //             numsMap[current] = index;
    //             continue;
    //         }
    //     }else{
    //         numsMap[current] = index;
    //     }
    // }
    // return false;
};
