/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = nums => {
    let mySet = new Set();
    for (let each of nums) {
        mySet.add(each);
    }

    let longestStreak = 0;

    for (let each of mySet) {
        if (!mySet.has(each - 1)) {
            let currentNum = each;
            let currentStreak = 1;
            while (mySet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            longestStreak = Math.max(currentStreak, longestStreak);
        }
    }
    return longestStreak;
};

const input = [100, 4, 200, 1, 3, 2];
const result = longestConsecutive(input);
console.log("result is ", result); // 4
