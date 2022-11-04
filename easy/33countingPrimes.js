// https://www.youtube.com/watch?v=PypkiVlTRa4&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=33&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/count-primes/
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    // just by using arrays avoided the js head memory problem
    let allNumbers = [];
    for (let i = 0; i < n; i++) {
        allNumbers.push(true);
    }

    for (let i = 2; i * i < n; i++) {
        if (allNumbers[i]) {
            for (let j = i; j * i < n; j++) {
                allNumbers[j * i] = false;
            }
        }
    }

    let primeCount = 0;
    for (let i = 2; i < n; i++) {
        if (allNumbers[i]) primeCount += 1;
    }
    return primeCount;
};

const result = countPrimes(10000);
console.log("result is", result);
