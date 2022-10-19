// https://leetcode.com/problems/is-subsequence/submissions/825527987/
// https://www.youtube.com/watch?v=RqrGVXvyxZ0&t=356s

/**
 *
 * @param {string} s - short string to be checked
 * @param {string} t - long string whose subsequence we are figuring out
 * @return {boolean} - true if subsequence else false
 */
var isSubsequence = function (s, t) {
  // s is short string
  // t is the long string
  let [pointerOne, pointerTwo] = [0, 0];
  while (!!s[pointerOne] && !!t[pointerTwo]) {
    if (s[pointerOne] === t[pointerTwo]) {
      pointerOne++;
      pointerTwo++;
      continue;
    }
    if (s[pointerOne] !== t[pointerTwo]) {
      pointerTwo++;
      continue;
    }
  }
  return !s[pointerOne] ? true : false;
};
