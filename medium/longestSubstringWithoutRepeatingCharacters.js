// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;
  let [max, i, j] = [0, 0, 1];
  let sub = s.substring(i, j);
  while (j < s.length) {
    if (sub.includes(s[j])) {
      i += sub.indexOf(s[j]) + 1;
    } else {
      j++;
    }
    sub = s.substring(i, j);
    max = Math.max(max, sub.length);
  }
  return max;
};
