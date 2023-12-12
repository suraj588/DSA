// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.
// There may be duplicates in the original array.
// Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.


// Example 1:
// Input: nums = [3,4,5,1,2]
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].


// Example 2:
// Input: nums = [2,1,3,4]
// Output: false
// Explanation: There is no sorted array once rotated that can make nums.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  let flag = false;
  const unrotatedArray = [];
  while (start < end) {
    const nextIndex = start + 1;
    if (nums[start] <= nums[nextIndex]) {
      start++;
      continue;
    } else {
      start = nextIndex;
      let hasReachedEnd = false;
      while (start <= end) {
        unrotatedArray.push(nums[start]);
        if (!hasReachedEnd && start === end) {
          start = 0;
          end = nextIndex - 1;
          hasReachedEnd = true;
        } else {
          start++;
        }
      }
      flag = true;
      break;
    }
  }
  if (flag) {
    for (let i = 0; i < unrotatedArray.length - 1; i++) {
      if (unrotatedArray[i] > unrotatedArray[i + 1]) {
        return false;
      }
    }
  }
  return true;
};

console.log(check([3,4,2,5,1,2]));