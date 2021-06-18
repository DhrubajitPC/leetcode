// https://leetcode.com/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows < 2) return s;

  const rows = [];
  let [index, isDown] = [0, true];

  for (var i of s) {
    if (rows[index]) rows[index] += i;
    else rows[index] = i;

    if (isDown) {
      if (index === numRows - 1) {
        isDown = false;
        index--;
      } else {
        index++;
      }
    } else {
      if (index === 0) {
        isDown = true;
        index++;
      } else {
        index--;
      }
    }
  }

  return rows.join("");
};
