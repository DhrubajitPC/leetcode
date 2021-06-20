// https://leetcode.com/problems/longest-palindromic-substring
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let window = s.length;

  while (window > 0) {
    for (let i = 0; i <= s.length - window; i++) {
      const substr = s.substring(i, i + window);
      if (isPal(substr)) {
        return substr;
      }
    }
    window--;
  }
};

function isPal(s) {
  for (let i = 0; i <= Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) return false;
  }
  return true;
}
