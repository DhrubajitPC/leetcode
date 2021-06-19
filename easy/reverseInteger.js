// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reverse = parseInt(x.toString().split("").reverse().join(""), 10);

  if (x < 0) reverse *= -1;

  if (reverse > 2 ** 31 - 1 || reverse <= -1 * 2 ** 31) return 0;
  return reverse;
};
