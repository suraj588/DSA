// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


// Solution-1
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  for (let i = 1; i <= nums.length; i++) {
    if (nums.indexOf(i) === -1) {
      return i;
    }
  }
  return 0;
};

// Solution-2
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const n = nums.length;
  const sumOfNTerms = (n*(n+1)) / 2;
  let actualSum = 0; 
  for (let i = 0; i < nums.length; i++) {
      actualSum += nums[i];
  }
  return sumOfNTerms - actualSum;
};
