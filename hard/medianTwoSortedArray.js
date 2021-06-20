// // https://leetcode.com/problems/median-of-two-sorted-arrays/
// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
var findMedianSortedArrays = function (nums1, nums2) {
  let finalAr = [];

  let [i, j] = [0, 0];

  while (i < nums1.length || j < nums2.length) {
    if (i >= nums1.length) {
      finalAr = finalAr.concat(nums2.slice(j));
      break;
    }

    if (j >= nums2.length) {
      finalAr = finalAr.concat(nums1.slice(i));
      break;
    }

    const num1 = nums1[i];
    const num2 = nums2[j];

    if (num1 < num2) {
      finalAr.push(num1);
      i++;
    } else {
      finalAr.push(num2);
      j++;
    }
  }
  return calcMedian(finalAr);
};

function calcMedian(ar) {
  const l = ar.length;
  if (l % 2 === 0) {
    const first = ar[Math.floor((l - 1) / 2)];
    const second = ar[Math.floor((l - 1) / 2) + 1];
    return (first + second) / 2;
  } else {
    return ar[Math.floor((l - 1) / 2)];
  }
}

// const ans = findMedianSortedArrays([101], [100]);
// const ans = findMedianSortedArrays([1, 3], [2, 4]);
// const ans = findMedianSortedArrays([1, 3], [2]);
// const ans = findMedianSortedArrays([], [2]);
// const ans = findMedianSortedArrays([2], []);

// console.log(ans);
