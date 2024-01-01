// Given a binary array nums, return the maximum number of consecutive 1's in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let maxCount = 0;
  let currentOccurenceCount = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
          currentOccurenceCount++;
      } else {
          if (currentOccurenceCount > maxCount) {
              maxCount = currentOccurenceCount;
          }
          currentOccurenceCount = 0;
      }
  }
  if (currentOccurenceCount > maxCount) {
      maxCount = currentOccurenceCount;
  }
  return maxCount;
};
