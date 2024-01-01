// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const stack = [];
  for (let i= 0; i < nums.length; i++) {
      const num = nums[i];
      if (num === 0) {
          stack.push(i);
      } else if (typeof stack[stack.length - 1] === 'number') {
          nums[stack[0]] = num;
          nums[i] = 0;
          stack.shift();
          if (typeof stack[stack.length - 1] === 'number') {
              stack.push(i);
          } else {
              stack.unshift(i);
          }
      }
  }
};

// Solution-2
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes2 = function(nums) {
  let nonZeroIndex = 0;
  for (let i= 0; i < nums.length; i++) {
      if (nums[i]) {
          nums[nonZeroIndex++] = nums[i];
      }
  }
  while (nonZeroIndex < nums.length) {
      nums[nonZeroIndex++] = 0;
  }
};
