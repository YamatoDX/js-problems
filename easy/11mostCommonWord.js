// https://leetcode.com/problems/most-common-word/
// https://www.youtube.com/watch?v=odMaAFWI5VE&t=82s

// Given a string paragraph and a string array of the banned words banned,
// return the most frequent word that is not banned.
// It is guaranteed there is at least one word that is not banned,
// and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const allSymbols = ["!", "?", "'", ";", ".", ","];
  const filteredString = paragraph
    .split("")
    .map((each) => (allSymbols.includes(each) ? " " : each))
    .join("");
  let wordMap = {};
  filteredString.split(" ").forEach((eachWord) => {
    const corrected = eachWord.trim().toLowerCase();
    if (banned.includes(corrected)) {
      return;
    }
    !wordMap[corrected] ? (wordMap[corrected] = 1) : (wordMap[corrected] += 1);
  });
  const finalResult = Object.keys(wordMap)
    .filter((each) => each !== "")
    .sort((prev, current) => {
      return wordMap[current] - wordMap[prev];
    });
  return finalResult[0];
};
